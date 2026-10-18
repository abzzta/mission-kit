#!/usr/bin/env node
// Repeat of the shortcut rule's test (ruling 0098, backlog B89), pre-registered before the run it judges.
// Reads one run record of experiment adherence-rule-repeat and prints a verdict per predicate.
// The comparison is within the run: on-trigger (corpus with 0098) against on-trigger-pass1 (corpus at
// 8fdd13b). On these 10 scenarios 0098 changed no hydration trigger, so the arms differ only by the
// AGENTS.md bullet and the axioms-charter sentence.
//
// usage: node rule-repeat-predicates.mjs <run-dir> [--json]

import fs from "node:fs";
import path from "node:path";

const NEW = "on-trigger";
const OLD = "on-trigger-pass1";
// Each scenario's first property scores the change (the diff, or a held step); the second the reply.
const PAIRS = {
	"adherence-a1": ["a1-1", "a1-2"], "adherence-a2": ["a2-1", "a2-2"], "adherence-a5": ["a5-1", "a5-2"],
	"adherence-a6": ["a6-1", "a6-2"], "adherence-a7": ["a7-1", "a7-2"], "adherence-a8": ["a8-1", "a8-2"],
	"adherence-a9": ["a9-1", "a9-2"], "adherence-a10": ["a10-1", "a10-2"], "adherence-a11": ["a11-1", "a11-2"],
	"adherence-a12": ["a12-1", "a12-2"],
};
const MET = 0.5;

const [runDir, ...flags] = process.argv.slice(2);
if (!runDir) { console.error("usage: node rule-repeat-predicates.mjs <run-dir> [--json]"); process.exit(2); }
const read = (f) => JSON.parse(fs.readFileSync(path.join(runDir, f), "utf8"));
const result = read("RESULT.json");
const run = read("run.json");

// Two-sided Fisher exact test on a/n1 against b/n2, summing tables no more likely than the observed.
const lf = (n) => { let s = 0; for (let i = 2; i <= n; i++) s += Math.log(i); return s; };
const fisher = (a, n1, b, n2) => {
	const k = a + b, n = n1 + n2;
	const p = (x) => Math.exp(lf(n1) - lf(x) - lf(n1 - x) + lf(n2) - lf(k - x) - lf(n2 - k + x) - (lf(n) - lf(k) - lf(n - k)));
	const p0 = p(a);
	let sum = 0;
	for (let x = Math.max(0, k - n2); x <= Math.min(k, n1); x++) { const px = p(x); if (px <= p0 * (1 + 1e-9)) sum += px; }
	return Math.min(1, sum);
};

// The axiom each scenario exercises, from its exercises: tag as the run recorded it.
const exercised = new Map(run.snapshot.scenarios.map((s) => [s.id, (s.tags.find((t) => t.startsWith("exercises:")) ?? "").slice("exercises:".length)]));
const cells = Object.entries(result.cellValues).map(([cell, v]) => {
	const [sc, arm, member] = cell.split(".");
	return { cell, sc, arm, member, v };
}).filter((c) => PAIRS[c.sc] && typeof c.v[PAIRS[c.sc][0]] === "number");
const act = (c) => c.v[PAIRS[c.sc][0]] >= MET;
const hydrated = new Set((result.hydration ?? []).filter((h) => h.onRequestOnly === true && h.guidance === exercised.get(h.scenario)).flatMap((h) => h.hydratedCells));

const share = (xs) => ({ met: xs.filter(act).length, of: xs.length });
const verdictOf = (n, o) => {
	if (n.of === 0 || o.of === 0) return { verdict: "UNRUNNABLE" };
	const rn = n.met / n.of, ro = o.met / o.of, p = fisher(n.met, n.of, o.met, o.of);
	const v = rn <= ro ? "REFUTED" : rn - ro >= 0.1 && p < 0.05 ? "HOLDS" : "INCONCLUSIVE";
	return { verdict: v, new: `${n.met}/${n.of}`, old: `${o.met}/${o.of}`, gap: rn - ro, p };
};
const RULE = "HOLDS if new - old >= 0.10 and two-sided Fisher exact p < 0.05; REFUTED if new <= old; INCONCLUSIVE otherwise";
const out = { run: result.run, predicates: [] };
const arm = (a) => cells.filter((c) => c.arm === a);

// R1 (primary): of the cells that opened the scenario's axiom, the share that met the change property.
out.predicates.push({ id: "R1", ...verdictOf(share(arm(NEW).filter((c) => hydrated.has(c.cell))), share(arm(OLD).filter((c) => hydrated.has(c.cell)))), rule: RULE });
// R2 (guard): over every valid cell, the share that met the change property.
out.predicates.push({ id: "R2", ...verdictOf(share(arm(NEW)), share(arm(OLD))), rule: RULE });
// R3 (selection check): the arms' hydration rates; a gap above 0.15 marks R1 as confounded by selection.
{
	const h = (a) => ({ hydrated: arm(a).filter((c) => hydrated.has(c.cell)).length, of: arm(a).length });
	const n = h(NEW), o = h(OLD);
	const gap = n.of && o.of ? n.hydrated / n.of - o.hydrated / o.of : null;
	out.predicates.push({ id: "R3", verdict: gap === null ? "UNRUNNABLE" : Math.abs(gap) > 0.15 ? "R1-CONFOUNDED" : "BALANCED", new: `${n.hydrated}/${n.of}`, old: `${o.hydrated}/${o.of}`, gap, rule: "BALANCED if the arms' hydration rates differ by at most 0.15" });
}
// R4, descriptive: breach in the change while flagging it in the reply (0098's P2), and per member R1.
{
	const bf = (a) => arm(a).filter((c) => !act(c) && c.v[PAIRS[c.sc][1]] >= MET).map((c) => c.cell);
	const byMember = (a) => Object.fromEntries([...new Set(cells.map((c) => c.member))].sort().map((m) => {
		const s = share(arm(a).filter((c) => c.member === m && hydrated.has(c.cell)));
		return [m, `${s.met}/${s.of}`];
	}));
	out.predicates.push({ id: "R4", verdict: "DESCRIPTIVE", breachFlagged: { new: bf(NEW), old: bf(OLD) }, hydratedActedByMember: { new: byMember(NEW), old: byMember(OLD) } });
}
// R5, descriptive: judge agreement and dissent.
{
	const props = result.properties.filter((p) => p.agreement.of > 0);
	const agree = props.reduce((a, p) => a + p.agreement.agree, 0), of = props.reduce((a, p) => a + p.agreement.of, 0);
	out.predicates.push({ id: "R5", verdict: "DESCRIPTIVE", pooledAgreement: `${agree}/${of}`, judgeDissent: (result.judgeDissent ?? []).map((d) => `${d.judge} ${d.lone}/${d.splits}`), probes: `${run.probes.filter((p) => p.pass).length}/${run.probes.length}` });
}

if (flags.includes("--json")) { console.log(JSON.stringify(out, null, 2)); process.exit(0); }
for (const { id, verdict, ...rest } of out.predicates) console.log(`${id}  ${verdict}\n    ${JSON.stringify(rest)}`);
