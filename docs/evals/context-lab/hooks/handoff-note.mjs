// handoff-note - the guidance-neutral note for the handoff experiment's generated branch.
// Built by code from the earlier phase's changes alone: which files changed, and how, leaving out
// the agent's own HANDOFF.md, so the note carries what the work shows and nothing the agent chose
// to say.
import fs from "node:fs";
const input = JSON.parse(fs.readFileSync(0, "utf8"));
// The path from a section's header, "diff --git a/<p> b/<p>", which git writes for every change,
// empty and binary files included; a rename's new path from its "rename to" line.
const pathOf = (h) => {
	const renamed = /^rename to (.+)$/m.exec(h);
	if (renamed) return renamed[1];
	const rest = h.slice("diff --git ".length, h.indexOf("\n") < 0 ? h.length : h.indexOf("\n"));
	const n = (rest.length - 5) / 2;
	return Number.isInteger(n) && rest.startsWith("a/") && rest.slice(n + 2, n + 5) === " b/" ? rest.slice(2, n + 2) : rest;
};
const parts = String(input.diff).split(/^(?=diff --git )/m).filter((h) => h.startsWith("diff --git ") && pathOf(h) !== "HANDOFF.md");
const note = parts.length
	? `The previous session changed ${parts.length} file(s): ${parts.map(pathOf).join(", ")}. The changes:\n\n${parts.join("").trim()}`
	: "The previous session changed no files.";
console.log(JSON.stringify({ note }));
