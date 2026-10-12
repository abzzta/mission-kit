// handoff-note - the guidance-neutral note for the handoff experiment's generated branch.
// Built by code from the earlier phase's changes alone: which files changed, and how, leaving out
// the agent's own HANDOFF.md, so the note carries what the work shows and nothing the agent chose
// to say.
import fs from "node:fs";
const input = JSON.parse(fs.readFileSync(0, "utf8"));
const pathOf = (h) => (/^\+\+\+ b\/(.+)$/m.exec(h) ?? /^--- a\/(.+)$/m.exec(h) ?? [])[1];
const parts = String(input.diff).split(/^(?=diff --git )/m).filter((h) => h.startsWith("diff --git ") && pathOf(h) !== "HANDOFF.md");
const files = parts.map(pathOf).filter(Boolean);
const note = parts.length
	? `The previous session changed ${parts.length} file(s): ${files.join(", ")}. The changes:\n\n${parts.join("").trim()}`
	: "The previous session changed no files.";
console.log(JSON.stringify({ note }));
