#!/usr/bin/env node
// c2-pack-measure - outcome-measure hook for scenario c2.
//
// Uses outcome.snapshot (mounted read-only in the hook sandbox) when present, falling back to
// reconstructing added files from outcome.diff, and runs context-lab's own checkPack() on
// <workspace>/evals/context-lab. Scores P0 = 2 if checkPack passes with 0 defects AND the pack
// includes the required multi-phase episode, classify-then-verify chain, comparison, and leakProbe;
// P0 = 1 if checkPack passes with 0 defects or fails with at most 2 minor defects while pack.json,
// experiment and scenario parse as JSON; P0 = 0 otherwise.

import fs from "node:fs";
import path from "node:path";
import { checkPack } from "../../../../../context-lab/packages/core/dist/src/pack-checker.js";

const input = JSON.parse(fs.readFileSync(0, "utf8"));
const snap = input?.outcome?.snapshot;
const diff = String(input?.outcome?.diff ?? "");

/** Extract newly created files from a unified git diff (fallback when snapshot is absent). */
function extractAddedFiles(patch, rootDir) {
	const lines = patch.split("\n");
	let curFile = null;
	let buf = [];
	const flush = () => {
		if (curFile !== null) {
			const full = path.resolve(rootDir, curFile);
			if (full.startsWith(rootDir + path.sep)) {
				fs.mkdirSync(path.dirname(full), { recursive: true });
				fs.writeFileSync(full, buf.join("\n") + (buf.length ? "\n" : ""));
			}
		}
		curFile = null;
		buf = [];
	};
	for (const line of lines) {
		if (line.startsWith("diff --git ")) { flush(); continue; }
		if (line.startsWith("+++ b/")) { curFile = line.slice(6).trim(); continue; }
		if (curFile !== null && line.startsWith("+") && !line.startsWith("+++")) buf.push(line.slice(1));
	}
	flush();
}

let rootDir;
if (typeof snap === "string" && fs.existsSync(snap)) {
	rootDir = snap;
} else {
	rootDir = fs.mkdtempSync("/tmp/c2-pack-");
	fs.mkdirSync(path.join(rootDir, "docs"), { recursive: true });
	fs.writeFileSync(path.join(rootDir, "docs", "GUIDE.md"), "# Guide\n");
	extractAddedFiles(diff, rootDir);
}

const packDir = path.join(rootDir, "evals", "context-lab");
let p0 = 0;
let detail = "";
try {
	const r = await checkPack(packDir);
	if (r.ok) {
		const exp = [...r.loaded.experiments.values()][0]?.experiment;
		const sc = [...(r.loaded.experiments.values().next().value?.scenarios.values() ?? [])][0]?.scenario;
		const hasChain = Array.isArray(exp?.judging?.chain?.findings) && exp.judging.chain.findings.length > 0;
		const hasComp = Array.isArray(r.loaded.pack.comparisons) && r.loaded.pack.comparisons.length > 0;
		const hasLeak = Array.isArray(r.loaded.pack.isolation?.leakProbes) && r.loaded.pack.isolation.leakProbes.length > 0;
		const phases = sc?.phases ?? exp?.phases ?? [];
		const hasTwoPhases = Array.isArray(phases) && phases.length >= 2;
		p0 = hasChain && hasComp && hasLeak && hasTwoPhases ? 2 : 1;
		detail = `checkPack ok (chain=${hasChain}, comp=${hasComp}, leak=${hasLeak}, twoPhases=${hasTwoPhases})`;
	} else {
		detail = r.defects.map((d) => `${d.check}@${d.where}: ${d.message}`).join("; ");
		const packJsonOk = !r.defects.some((d) => d.check === "pack-file" || d.check === "schema-version");
		if (packJsonOk && r.defects.length <= 2) p0 = 1;
	}
} catch (e) {
	detail = String(e);
}

process.stdout.write(JSON.stringify({ scores: { P0: p0 }, detail }) + "\n");
