#!/usr/bin/env node
//
// The board and the backlog agree with each other.
//
// docs/BOARD.md is the plan - mutable, reorderable, short. docs/BACKLOG.md is the record -
// append-and-close, nothing deleted. The board states a five-rule contract binding the two, and
// until this script existed every rule was prose that nothing checked.
//
// That was not hypothetical. Within two commits of the board being written it carried a milestone
// out of plan order, a finding arguing that a closed row was still open, and an item citing no row
// at all - and that item was the one whose duty was to mechanise this contract. A person found all
// three by asking. A script finds them on every change.
//
// What it checks, and the defect each catches:
//
//   R1  every board item cites a backlog row          an orphaned plan item
//   R2  every cited row exists                        a citation to nothing
//   R3  every open row is on the board or in Held     a known problem silently falling off
//   R4  no closed row is planned in an open milestone the record and the plan disagreeing
//   R5  milestones appear in ascending order          an accidental priority nobody chose
//   R6  a DONE milestone cites no open row            a milestone claiming more than it delivered
//
// It reads both files as written rather than a separate declaration, because the files ARE the
// declaration; a second copy of the board's structure would be the drift this exists to prevent.
//
// Usage:  node tools/check-board.mjs

import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const boardPath = join(root, "docs/BOARD.md");
const backlogPath = join(root, "docs/BACKLOG.md");

// A corpus with no board has nothing to reconcile. Absence is not a failure here; it is the
// bootstrap state, and a check that refused it would block the commit that creates the board.
if (!existsSync(boardPath) || !existsSync(backlogPath)) {
	console.log("clean: no board and backlog pair to reconcile.");
	process.exit(0);
}

const board = readFileSync(boardPath, "utf8");
const backlog = readFileSync(backlogPath, "utf8");

const failures = [];
const fail = (rule, msg) => failures.push(`FAIL  ${rule}  ${msg}`);

// --- the record -------------------------------------------------------------------------------

// A backlog row is a table row whose first cell is a bolded B-id. CLOSED anywhere in it marks the
// disposition; everything else is open. Parked and Retired sections hold rows of the same shape.
const rows = new Map();
for (const line of backlog.split("\n")) {
	const m = line.match(/^\|\s*\*\*(B\d+)\*\*\s*\|/);
	if (m) rows.set(m[1], { closed: /\bCLOSED\b/.test(line) });
}

// --- the plan ---------------------------------------------------------------------------------

// Walk the board once, tracking which milestone we are inside and whether we are in Held, so an
// item row is attributed to the milestone heading above it.
const items = [];
const milestones = [];
const held = new Set();
let current = null;
let inHeld = false;

for (const line of board.split("\n")) {
	const h = line.match(/^##\s+(M(\d+))\b.*?`([A-Z]+)`/);
	if (h) {
		current = { id: h[1], n: Number(h[2]), status: h[3] };
		milestones.push(current);
		inHeld = false;
		continue;
	}
	if (/^##\s+Held\b/.test(line)) {
		current = null;
		inHeld = true;
		continue;
	}
	if (/^##\s/.test(line)) {
		current = null;
		inHeld = false;
		continue;
	}

	if (inHeld) {
		const m = line.match(/^\|\s*\*\*(B\d+)\*\*\s*\|/);
		if (m) held.add(m[1]);
		continue;
	}

	const it = line.match(/^\|\s*(M\d+\.\d+[a-z]?)\s*\|/);
	if (it && current) {
		const cited = [...line.matchAll(/`(B\d+)`/g)].map((x) => x[1]);
		items.push({ id: it[1], milestone: current, cited });
	}
}

// --- R1, R2: every item cites, and every citation resolves ------------------------------------

for (const item of items) {
	if (item.cited.length === 0) {
		fail("R1", `${item.id} cites no backlog row`);
		continue;
	}
	for (const b of item.cited) {
		if (!rows.has(b)) fail("R2", `${item.id} cites ${b}, which is not a backlog row`);
	}
}

// --- R3: every open row is planned or deliberately held ---------------------------------------

const planned = new Set(items.flatMap((i) => i.cited));
for (const [b, r] of rows) {
	if (r.closed) continue;
	if (!planned.has(b) && !held.has(b)) {
		fail("R3", `${b} is open and appears neither on the board nor under Held`);
	}
}

// --- R4: a closed row is not planned as live work ---------------------------------------------

for (const item of items) {
	if (item.milestone.status === "DONE") continue;
	for (const b of item.cited) {
		if (rows.get(b)?.closed && !/`DONE`/.test(board.split("\n").find((l) => l.startsWith(`| ${item.id} `)) ?? "")) {
			fail("R4", `${item.id} in ${item.milestone.id} (${item.milestone.status}) plans ${b}, which is CLOSED`);
		}
	}
}

// --- R5: document order is plan order ---------------------------------------------------------

for (let i = 1; i < milestones.length; i++) {
	if (milestones[i].n < milestones[i - 1].n) {
		fail("R5", `${milestones[i].id} appears after ${milestones[i - 1].id}; the board's order is its plan`);
	}
}

// --- R6: a finished milestone delivered what it cites -----------------------------------------

for (const item of items) {
	if (item.milestone.status !== "DONE") continue;
	for (const b of item.cited) {
		const r = rows.get(b);
		// A DONE milestone may legitimately leave a row open when the row's remaining work moved to
		// another milestone; that is only lawful if the row is still planned somewhere live.
		if (r && !r.closed) {
			const elsewhere = items.some((o) => o.milestone.status !== "DONE" && o.cited.includes(b));
			if (!elsewhere) fail("R6", `${item.id} sits in DONE ${item.milestone.id} but ${b} is still open and planned nowhere else`);
		}
	}
}

// --- report -----------------------------------------------------------------------------------

if (failures.length) {
	for (const f of failures) console.log(f);
	console.log(`\n${failures.length} failure(s): the board and the backlog disagree.`);
	process.exit(1);
}

console.log(
	`clean: ${items.length} item(s) across ${milestones.length} milestone(s) reconcile with ${rows.size} backlog row(s); ${held.size} held.`,
);
process.exit(0);
