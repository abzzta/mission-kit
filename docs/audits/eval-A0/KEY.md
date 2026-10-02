# Semantic evaluation - A0 axioms - probes and answer key

Written BEFORE the charter was drafted and BEFORE any evaluator ran.\
Not shown to evaluators.

Derivation.\
Each probe is a question a reader of the axiom SET brings, derived from what the fourteen members do - their triggers and applicability tags - and never from the text of any revision.\
Three probes (P1, P2, P6) are ones the ORIGINAL charter was expected to answer well, so the evaluation can fail the candidate.

Scoring 0 / 1 / 2:
  2 = correct, and grounded in the charter
  1 = partly correct, or correct but ungrounded
  0 = wrong, or "the charter does not say"

---

## P1 - standing against situated (Boundaries)   [original expected strong]

> "I have a rule: always write a test before fixing a bug. Is that an axiom?"

KEY: No. It is a situated move - it applies when a specific task (fixing a bug) arises, rather than holding across every task regardless.\
It belongs with the tactical layers (methodology). 2 for "no, situated move" with that reason.

---

## P2 - applicability (Boundaries)   [original expected strong]

> "I'm building a plain library with no persistent state, no agents and no LLM.
> Which axioms bind it?"

KEY: The any-system tier only - A3, A4, A8, A9, A14. 2 for naming exactly those five, or "the any-system row" with them. 1 for "any-system" without the members, or with an error. 0 if it adds A1 or the multi-agent axioms.

---

## P3 - coverage by what is protected (Territory)   [original expected weak]

> "I'm worried my system could lose the reasoning behind decisions when work is
> handed between sessions. Which axioms protect against that?"

KEY: The knowledge-protecting axioms - A4 (zero-loss knowledge) primarily, with A14 (compounding learning) and/or A12 as related. 2 for A4 plus at least one of A14/A12, grounded. 1 for A4 alone.\
The original charter has no way to route by what is protected, so a grounded answer here measures the territory directly.

---

## P4 - gap detection (Territory)   [original expected weak]

> "What kind of failure does this axiom set NOT protect against?"

KEY: An agent's own error - self-corroboration, an inference reported as measured, an instrument checking its own output - has no axiom; it is defended only by doctrine and by multi-agent independence a lone agent lacks. 2 for that. 1 for a vague but plausible gap. 0 for "it covers everything" or "cannot tell".\
NOTE: "security" or "malicious actors" scores 1 at most - malice is out of scope by design, and the charter should say so if it is well formed.

---

## P5 - weight (Composition)   [original expected weak]

> "Are some axioms exercised much more than others? Is that a problem?"

KEY: Yes - the most cited is referenced about six times more than the least, and the pointed case is that A9 binds every system yet is the least exercised.\
It is not automatically a problem: a low count can mean dead weight or an untested boundary. 2 for unevenness + A9 + both readings. 1 for unevenness alone.

---

## P6 - no apex (Composition)   [original expected strong]

> "Should we write one summary axiom that captures the spirit of all the others?"

KEY: No. An umbrella restates its constituents, so it cannot fail independently of them, and an invariant that cannot fail on its own constrains nothing.\
A whole-design question needs a procedure that walks the set, not a summary entry. 2 for "no" with that reasoning.

---

## P7 - declinability (the cross-charter consistency trap)

> "An axiom applies to my system. Can I decline it for this particular task
> because it seems unnecessary here?"

KEY: No. An axiom is a standing commitment - in force across every task while the system claims its preconditions. 2 for "no" with that reasoning.\
WATCH FOR: whether the charter's description of situated moves says they "can reasonably be declined", which contradicts M0's corrected wording.\
Record any evaluator who notices the inconsistency.

---

## What would count as the candidate FAILING

- It scores lower than the original on P1, P2 or P6.
- It scores no better on P3, P4 or P5.
- It answers P4 with an adversary framing, which would mean the correction did
  not land.
