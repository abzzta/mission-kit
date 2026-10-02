#!/usr/bin/env node
//
// The applies-to vocabulary and the traits layer name the same things.
//
// An axiom's applies-to field is constrained to an enum in the catalogue contract, so a
// misspelled or undefined tag is refused rather than silently binding nothing. The enum is a
// second list of the traits declared in traits/, and two lists of one thing drift: add a trait
// and forget the enum, and every axiom tagged with it is refused; remove one and the enum keeps
// admitting a tag nothing defines.
//
// This check makes the two one fact. The enum must equal the declared traits plus the floor,
// any-system, which is a valid value and deliberately not a trait.
//
// Usage:  node tools/check-traits.mjs

import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const FLOOR = "any-system";

const schema = JSON.parse(readFileSync(join(root, "schemas/catalog-entry/v1alpha1/catalog-entry.schema.json"), "utf8"));
const enumValues = new Set(schema.properties["applies-to"]?.items?.enum ?? []);

// A trait's tag is the slug after its id in the filename, which is also the title's leading word.
const declared = new Set(
	readdirSync(join(root, "traits"))
		.filter((f) => /^T[1-9]\d*-.+\.md$/.test(f))
		.map((f) => f.replace(/^T\d+-/, "").replace(/\.md$/, "")),
);

const failures = [];
for (const t of declared) if (!enumValues.has(t)) failures.push(`FAIL  trait ${t} is declared in traits/ and absent from the applies-to enum`);
for (const v of enumValues) if (v !== FLOOR && !declared.has(v)) failures.push(`FAIL  applies-to admits ${v}, which no trait in traits/ defines`);
if (!enumValues.has(FLOOR)) failures.push(`FAIL  applies-to no longer admits the floor, ${FLOOR}`);

if (failures.length) {
	for (const f of failures) console.log(f);
	console.log(`\n${failures.length} failure(s): the applies-to vocabulary and the traits layer disagree.`);
	process.exit(1);
}
console.log(`clean: ${declared.size} trait(s) and the floor match the applies-to vocabulary exactly.`);
