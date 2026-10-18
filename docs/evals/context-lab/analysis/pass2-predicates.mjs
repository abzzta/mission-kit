#!/usr/bin/env node
// Pass 2 predicates, pre-registered in ruling 0098 before the run they judge.
// Reads one run record of experiment adherence-pass2 and prints a verdict per predicate:
// HOLDS, REFUTED, INCONCLUSIVE, or UNRUNNABLE where the record lacks what the predicate reads.
// The comparison is within the run - on-trigger (corpus after 0098) against on-trigger-pass1
// (corpus at 8fdd13b) - so model, provider and harness drift between days do not enter it.
//
// usage: node pass2-predicates.mjs <run-dir> [--json]

import fs from "node:fs";
import path from "node:path";

const NEW = "on-trigger";
const OLD = "on-trigger-pass1";
const ALWAYS = "always-on";

// P1: the two triggers 0098 rewrote, and the scenario that exercises each.
const TRIGGERS = [
	{ id: "P1a", scenario: "adherence-a3", guidance: "A3" },
	{ id: "P1b", scenario: "adherence-a14", guidance: "A14" },
];

// P2: scenarios whose first property scores what the change does (the diff or a held step) and
// whose second scores what the final reply says. adherence-a13 is left out: both its properties
// score the brief it writes. a3 and a14 are reported apart, since their triggers changed too.
const PAIRS = {
	"adherence-a1": ["a1-1", "a1-2"], "adherence-a2": ["a2-1", "a2-2"], "adherence-a5": ["a5-1", "a5-2"],
	"adherence-a6": ["a6-1", "a6-2"], "adherence-a7": ["a7-1", "a7-2"], "adherence-a8": ["a8-1", "a8-2"],
	"adherence-a9": ["a9-1", "a9-2"], "adherence-a10": ["a10-1", "a10-2"], "adherence-a11": ["a11-1", "a11-2"],
	"adherence-a12": ["a12-1", "a12-2"],
};
const PAIRS_TRIGGER_CHANGED = { "adherence-a3": ["a3-1", "a3-2"], "adherence-a14": ["a14-1", "a14-2"] };

const MET = 0.5; // every adherence property here is scaled 0 to 1; met at or above the midpoint.

const [runDir, ...flags] = process.argv.slice(2);
if (!runDir) { console.error("usage: node pass2-predicates.mjs <run-dir> [--json]"); process.exit(2); }
const read = (f) => JSON.parse(fs.readFileSync(path.join(runDir, f), "utf8"));
const result = read("RESULT.json");
const run = read("run.json");
const candidates = fs.existsSync(path.join(runDir, "CANDIDATES.json")) ? read("CANDIDATES.json") : null;
const out = { run: result.run, predicates: [] };
const verdict = (id, v, detail) => out.predicates.push({ id, verdict: v, ...detail });
const hasArm = (a) => result.arms.includes(a);

// ---- P1 routing: each rewritten trigger brings agents to open its entry.
for (const t of TRIGGERS) {
	const row = (arm) => (result.hydration ?? []).find((h) => h.scenario === t.scenario && h.arm === arm && h.guidance === t.guidance && h.onRequestOnly === true);
	const n = row(NEW), o = row(OLD);
	if (!n || !o) { verdict(t.id, "UNRUNNABLE", { reason: `no on-request hydration row for ${t.guidance} in ${!n ? NEW : OLD}` }); continue; }
	const detail = { guidance: t.guidance, new: `${n.hydrated}/${n.cells}`, old: `${o.hydrated}/${o.cells}`, rule: "HOLDS if new rate >= 0.6 and new - old >= 0.4; REFUTED if new <= old" };
	if (n.rate <= o.rate) verdict(t.id, "REFUTED", detail);
	else if (n.rate >= 0.6 && n.rate - o.rate >= 0.4) verdict(t.id, "HOLDS", detail);
	else verdict(t.id, "INCONCLUSIVE", detail);
}

// ---- P2 instruction against rule: fewer cells breach in the change while flagging it in the reply.
const cellsOf = (arm, pairs) => {
	const rows = [];
	for (const [cell, v] of Object.entries(result.cellValues)) {
		const [sc, a] = cell.split(".");
		if (a !== arm || !pairs[sc]) continue;
		const [act, say] = pairs[sc];
		if (typeof v[act] !== "number" || typeof v[say] !== "number") continue;
		rows.push({ cell, act: v[act], say: v[say] });
	}
	return rows;
};
const breachFlagged = (rows) => rows.filter((r) => r.act < MET && r.say >= MET).map((r) => r.cell).sort();
const mean = (xs) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : null);
const p2 = (id, pairs, primary) => {
	if (!hasArm(NEW) || !hasArm(OLD)) { verdict(id, "UNRUNNABLE", { reason: `run lacks arm ${!hasArm(NEW) ? NEW : OLD}` }); return; }
	const n = cellsOf(NEW, pairs), o = cellsOf(OLD, pairs);
	const kn = breachFlagged(n), ko = breachFlagged(o);
	const detail = {
		scenarios: Object.keys(pairs).length, primary,
		new: { cells: n.length, breachFlagged: kn.length, actMean: mean(n.map((r) => r.act)), list: kn },
		old: { cells: o.length, breachFlagged: ko.length, actMean: mean(o.map((r) => r.act)), list: ko },
		...(hasArm(ALWAYS) ? { alwaysOn: { breachFlagged: breachFlagged(cellsOf(ALWAYS, pairs)).length, cells: cellsOf(ALWAYS, pairs).length } } : {}),
		rule: "HOLDS if old >= 2 and new <= floor(old / 2); REFUTED if old >= 2 and new >= old; INCONCLUSIVE otherwise, including old < 2 (nothing to reduce)",
	};
	if (ko.length >= 2 && kn.length <= Math.floor(ko.length / 2)) verdict(id, "HOLDS", detail);
	else if (ko.length >= 2 && kn.length >= ko.length) verdict(id, "REFUTED", detail);
	else verdict(id, "INCONCLUSIVE", detail);
};
p2("P2", PAIRS, true);
p2("P2-trigger-changed", PAIRS_TRIGGER_CHANGED, false);

// ---- P3 judge reliability: pooled vote agreement, and properties needing key review.
{
	const props = result.properties.filter((p) => p.agreement.of > 0);
	const agree = props.reduce((a, p) => a + p.agreement.agree, 0), of = props.reduce((a, p) => a + p.agreement.of, 0);
	const low = props.filter((p) => p.agreement.of >= 6 && p.agreement.agree / p.agreement.of < 0.7).map((p) => `${p.scenario}/${p.property} ${p.agreement.agree}/${p.agreement.of}`);
	verdict("P3", of === 0 ? "UNRUNNABLE" : agree / of >= 0.85 && low.length === 0 ? "HOLDS" : "REFUTED", { pooled: `${agree}/${of}`, rate: of ? agree / of : null, keyReview: low, rule: "HOLDS if pooled agreement >= 0.85 and no property with >= 6 units agrees below 0.70" });
}

// ---- P4 isolation: every arm and judge probe passes; a tool call after the new retry wording refutes it.
{
	const all = [...run.probes.map((p) => ({ ...p, who: `${p.arm}.${p.member}` })), ...run.judgeProbes.map((p) => ({ ...p, who: `judge.${p.member}` }))];
	const failed = all.filter((p) => !p.pass);
	const toolFail = failed.filter((p) => p.reasons.some((r) => /tool call/.test(r)));
	const retried = all.flatMap((p) => p.answers.filter((a) => (a.attempts ?? 1) > 1).map((a) => `${p.who}:${a.probe}x${a.attempts}`));
	verdict("P4", failed.length === 0 ? "HOLDS" : "REFUTED", { probes: `${all.length - failed.length}/${all.length}`, failed: failed.map((p) => `${p.who}: ${p.reasons.join("; ")}`), retryWordingRefuted: toolFail.length > 0, retried, rule: "HOLDS if every probe passes; a tool-call failure refutes the retry wording as a remedy" });
}

// ---- P5 placement, descriptive only: always-on against on-trigger per scenario, beside routing and cost.
{
	const byScenario = new Map();
	for (const p of result.properties) {
		const a = p.byArm[ALWAYS]?.mean, t = p.byArm[NEW]?.mean;
		if (a == null || t == null) continue;
		const s = byScenario.get(p.scenario) ?? { deltas: [] };
		s.deltas.push(a - t);
		byScenario.set(p.scenario, s);
	}
	const rows = [...byScenario].map(([sc, s]) => {
		const d = mean(s.deltas);
		const h = (result.hydration ?? []).filter((x) => x.scenario === sc && x.arm === NEW && x.onRequestOnly === true).map((x) => `${x.guidance} ${x.hydrated}/${x.cells}`);
		return { scenario: sc, meanDelta: d, label: Math.abs(d) <= 0.1 ? "parity" : d >= 0.25 ? "always-on ahead" : d <= -0.25 ? "on-trigger ahead" : "between", hydrationOnTrigger: h };
	});
	const cost = (arm) => (result.costs ?? []).find((c) => c.arm === arm && c.member === null);
	const ca = cost(ALWAYS), ct = cost(NEW);
	verdict("P5", "DESCRIPTIVE", { rows, inputTokensPerCell: ca && ct && ca.inputTokens != null && ct.inputTokens != null ? { alwaysOn: ca.inputTokens, onTrigger: ct.inputTokens, added: ca.inputTokens - ct.inputTokens } : null, note: "n = 5 per arm per property: a per-scenario delta is not decidable from one run; a flagged scenario is a candidate for a replicated test, not a placement change" });
}

// ---- P6 tooling: what the candidate rules emitted, for checking by reading the cells they cite.
verdict("P6", candidates ? "DESCRIPTIVE" : "UNRUNNABLE", candidates ? { byRule: candidates.candidates.reduce((m, c) => ({ ...m, [c.rule]: (m[c.rule] ?? 0) + 1 }), {}), targets: candidates.candidates.map((c) => `${c.rule} ${c.target}`) } : { reason: "no CANDIDATES.json; run context-lab candidates first" });

if (flags.includes("--json")) { console.log(JSON.stringify(out, null, 2)); process.exit(0); }
for (const p of out.predicates) {
	const { id, verdict: v, ...rest } = p;
	console.log(`${id}  ${v}`);
	console.log(`    ${JSON.stringify(rest)}`);
}
