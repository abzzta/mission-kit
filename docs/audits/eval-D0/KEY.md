# Semantic evaluation - D0 domains - probes and answer key

Written BEFORE the candidate was drafted and BEFORE any evaluator ran.\
Not shown to evaluators.

Derivation.\
Probes are derived from the six members' frontmatter - subject surface, what evidence resolves against, which work-types each admits - and from the pairing rules in W0.\
Three probes (P1, P2, P3) are ones the ORIGINAL charter is expected to answer well.

Scoring 0 / 1 / 2: 2 = correct and grounded in the charter; 1 = partly correct, or correct but guessed; 0 = wrong, or "the charter does not say".

---

## P1 - mode is not a domain (Boundaries)   [original expected strong]

> "Should 'verification' be a domain?"

KEY: No. A domain names what a piece of work's evidence resolves against - a surface.\
Verification is a mode of work, carried by the work-type; a verification domain would double-count with a verification work-type and break orthogonality. 2 for "no" with that reasoning.

---

## P2 - the tie-break (Composition)   [original expected strong]

> "I'm fixing something in the tooling harness, but the fix exists to serve distribution. Which domain is the work in?"

KEY: The tooling harness.\
The evidence target wins: the domain is where the work's diff and evidence resolve, not the surface it ultimately serves. 2 for tooling-harness with that rule.

---

## P3 - exclusion with route (Boundaries)   [original expected strong]

> "Is incident recovery a domain?"

KEY: No. An incident is not a subject surface; the domain of an incident is the surface it hit. 2 for "no" with that.

---

## P4 - a surface no domain covers (Territory)   [original expected weak]

> "I'm migrating a production database schema and repairing bad records in it. Which domain does that work belong to?"

KEY: No domain cleanly covers the repair.\
Evidence for it resolves against **the delivered product's own stored data** - the records before and after - and no domain has that as its subject.
- `delivery-code` resolves against source, pull requests and CI - the migration's *code* fits, the records do not.
- `distribution` resolves against artifacts and rollout state - "live-estate state" is deployment state, not application records.
- `authority-governance`, `coordination-substrate` and `knowledge-methodology` do resolve against records and state, but of their own substrates, not the product's.

2 for identifying that no domain resolves evidence against the product's own data, including a per-node split - migration code to delivery-code, the record repair uncovered. 1 for delivery-code or distribution with an explicit caveat that the product's data itself is not covered, or for the gap guessed. 0 for a confident single domain with no caveat.

---

## P5 - which side owns the pairing (Composition)   [original expected weak]

> "Where is it decided which work-types may act on which domain - on the domain, or on the work-type?"

KEY: The work-type.\
Its list of eligible domains gates the pairing - a pairing outside it is rejected (W0 constraint 3) - and whether its domain is free or pinned is a property of the work-type.\
Domains also carry lists of work-types; no rule consults them, and where the two differ the work-type governs.

2 for "the work-type" with the rule that gates it, or with the note that the domain-side lists are non-authoritative. 1 for "the work-type" alone.\
Do not require that the two lists be said to agree - the corpus does not say so.

---

## P6 - domains against traits (Boundaries)   [original expected weak]

> "Is 'stateful' a domain?"

KEY: No. Stateful is a trait - a characteristic of the system being worked on, which decides whether axioms bind it.\
A domain is the surface work lands on.\
They are orthogonal: the same domain can be worked on in a stateful system or a stateless one. 2 for "no" with the trait distinction. 1 for "no" because it is not a surface, without naming traits.

---

## P7 - population faults (Faults)   [original expected weak]

> "What would an unhealthy set of domains look like?"

KEY: Any two population-level faults grounded in the corpus.\
Examples, not a closed list:
- a domain that is really a mode of work;
- two domains with no distinct evidence contract;
- a domain only ever pinned and never a free target;
- a trait admitted as a domain, or the reverse;
- the same pairing declared on both sides and disagreeing;
- a domain named after one project's particular tools;
- a surface work lands on that no domain resolves.

2 for any two. 1 for one. 0 for none, or for faults of a single domain only.

---

## What would count as the candidate FAILING

- It scores lower than the original on P1, P2 or P3.
- It scores no better on P4 to P7.
- It edits member entries rather than recording member defects - this conversion changes the charter only.

---

## Key review - before any evaluator ran

The key above is the corrected version.\
Before it was committed or used, a fresh reader holding the six domains, the composition rule and the traits charter was asked to audit the key itself: not to answer the probes, but to judge whether each stated answer was correct.

It found three of seven wrong.

| Probe | First key | Error | Corrected |
|---|---|---|---|
| P4 | no domain resolves evidence against data | false - three domains resolve against records and state; the rubric had no slot for the obvious near-miss | the gap is the product's own stored data; per-node split credited |
| P5 | the domain and work-type lists "must agree" | not in the corpus, and the corpus data contradicts it; would have penalised the corpus-supported answer | the work-type governs; the domain lists are non-authoritative |
| P7 | a closed list of four faults, two of them inferred | would under-score better-grounded faults | an open list of examples |

This is the control `B29` lacked, run for the first time: the author's key checked by a reader the author's reasoning cannot bias.\
Had the first key been used, three of seven probes would have mis-scored, all three in the half of the evaluation that measures what the candidate adds.
