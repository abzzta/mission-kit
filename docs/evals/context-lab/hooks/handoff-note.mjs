// handoff-note - the guidance-neutral note for the handoff experiment's generated branch.
// Built by code from the earlier phase's changes alone: which files changed, and how, leaving out
// the agent's own HANDOFF.md, so the note carries what the work shows and nothing the agent chose
// to say.
import fs from "node:fs";
const input = JSON.parse(fs.readFileSync(0, "utf8"));
const parts = String(input.diff).split(/^(?=diff --git )/m).filter((h) => h.startsWith("diff --git ") && !/^diff --git a\/HANDOFF\.md /.test(h));
const files = parts.map((h) => (/^diff --git a\/(\S+) /.exec(h) ?? [])[1]).filter(Boolean);
const note = files.length
	? `The previous session changed ${files.length} file(s): ${files.join(", ")}. The changes:\n\n${parts.join("").trim()}`
	: "The previous session changed no files.";
console.log(JSON.stringify({ note }));
