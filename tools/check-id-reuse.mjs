#!/usr/bin/env node
// check-id-reuse - hold that an entry id, once retired, is never issued again.
//
// Sovereign duty: id non-reuse and no other. An id addresses an entry, and frozen records - audits,
// commit messages, closed rows - keep citing it after the entry moves or goes. If the id were
// issued again, every one of those citations would silently point at the wrong entry.
//
// Moved and removed entries leave no stub in the tree, so the list of retired ids is not kept by
// hand: it is derived from git history. An id is retired when a file holding it was deleted, or
// renamed or edited so that it holds a different id. It is reused when a current entry holds a retired id.
// A relocation that keeps its id - a directory renamed - retires nothing.
//
// Exit non-zero if any current entry holds a retired id.
//
// Usage:  tools/check-id-reuse.mjs

import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const git = (...args) => execFileSync('git', ['-C', ROOT, ...args], { encoding: 'utf8', maxBuffer: 1 << 28 });

const idOf = (text) => {
	const m = /^---\n([\s\S]*?)\n---/.exec(text || '');
	if (!m) return null;
	const id = /^id:\s*(\S+)\s*$/m.exec(m[1]);
	return id ? id[1] : null;
};
const show = (rev, file) => { try { return git('show', `${rev}:${file}`); } catch { return null; } };
const isEntryPath = (p) => /^[a-z-]+\/[^/]+\.md$/.test(p) && !p.startsWith('docs/');

// Current ids, from every top-level directory's markdown files that declare one.
const current = new Map();
for (const d of readdirSync(ROOT, { withFileTypes: true })) {
	if (!d.isDirectory() || d.name.startsWith('.') || d.name === 'docs' || d.name === 'node_modules') continue;
	for (const f of readdirSync(path.join(ROOT, d.name))) {
		if (!f.endsWith('.md')) continue;
		const id = idOf(readFileSync(path.join(ROOT, d.name, f), 'utf8'));
		if (id) current.set(id, `${d.name}/${f}`);
	}
}

// Retired ids, from history. Renames are detected, so a moved entry appears as R old new. A file
// added in the same commit holding the same id continues the lineage - a split, or a stub left in
// place - so that commit retires nothing for that id.
const retired = new Map();
const log = git('log', '--format=@%H', '--name-status', '-M');
const byCommit = new Map();
let commit = null;
for (const line of log.split('\n')) {
	if (line.startsWith('@')) { commit = line.slice(1); byCommit.set(commit, []); continue; }
	const parts = line.split('\t');
	if (parts.length >= 2 && commit) byCommit.get(commit).push(parts);
}
for (const [c, changes] of byCommit) {
	const keptHere = new Set();
	for (const [status, a, b] of changes) {
		const p = status.startsWith('R') || status.startsWith('C') ? b : a;
		if ((status === 'A' || status.startsWith('R') || status.startsWith('C')) && isEntryPath(p)) {
			const id = idOf(show(c, p)); if (id) keptHere.add(id);
		}
	}
	for (const [status, oldPath, newPath] of changes) {
		// D removes the id; R moves the file and may change it; M may edit the id in place.
		if (!(status === 'D' || status === 'M' || status.startsWith('R')) || !isEntryPath(oldPath)) continue;
		const oldId = idOf(show(`${c}^`, oldPath));
		if (!oldId || keptHere.has(oldId) || retired.has(oldId)) continue;
		const to = status === 'D' ? null : idOf(show(c, status === 'M' ? oldPath : newPath));
		// Moved out of the catalogue - into docs/, say - retires the id even if the file still holds it.
		const stillEntry = status === 'M' || isEntryPath(newPath);
		if (status !== 'D' && to === oldId && stillEntry) continue;
		retired.set(oldId, { path: oldPath, commit: c, to });
	}
}

// Reuses that happened before this check existed. Each is a fact of history, not a permission:
// frozen records citing these ids before the date given mean the earlier entry.
const BEFORE_THIS_CHECK = {
	A0: 'a former axiom, A0 sovereign intelligence engine, removed 2026-08-21; A0 is now the axioms charter',
	C1: 'the catalogue-entry schema, renamed SC1 on 2026-08-20; C1 is now the AGP component',
};

if (process.env.LIST_RETIRED) for (const [id, w] of retired) console.log(`retired  ${id}  ${w.path}`);
let reused = 0;
for (const [id, where] of retired) {
	const now = current.get(id);
	if (!now || BEFORE_THIS_CHECK[id]) continue;
	console.log(`FAIL  reused  ${id} is held by ${now}, but was retired at ${where.commit.slice(0, 7)} (${where.path}${where.to ? ` -> ${where.to}` : ''})`);
	reused++;
}

console.log(`${current.size} current ids, ${retired.size} retired in history.`);
if (reused) { console.log(`${reused} retired id(s) reissued; a retired id is never issued again.`); process.exit(1); }
console.log('no retired id is reissued.');
