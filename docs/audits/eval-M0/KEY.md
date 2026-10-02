# Semantic evaluation - M0 methodology - probes and answer key

Written BEFORE any evaluator agent was run.\
Not shown to evaluators.

Probes are derived from what the eight member procedures actually do, not from what the new charter added.\
Three probes (P1, P5, P6) are ones the OLD charter was already expected to answer well, so the evaluation can fail the new version rather than only confirm it.

Each probe scores 0 / 1 / 2:
  2 = correct, and grounded in the charter
  1 = partly correct, or correct but ungrounded (guessed, or from general knowledge)
  0 = wrong, or "the charter does not say"

---

## P1 - routing (Boundaries)   [old expected strong]

> "I want to add a rule that every commit message must use the imperative mood.
> Does that belong in this methodology set? If not, where?"

KEY: Not methodology.\
It is STYLE - a reviewer judges it by reading the output (the commit message), without knowing how it was produced.\
Credit for naming style AND giving the discriminating reason. 1 if only "style" with no reason.

---

## P2 - selection (Territory)   [old expected weak]

> "I'm partway through a piece of work and need to hand it to another agent who
> will continue it. Which procedure in this set applies?"

KEY: NONE applies.\
Handover has no procedure in this set. 2 for stating that clearly. 0 for naming a member as if it applied (e.g. M5, M4, M6). 1 for hedging toward "probably none".\
A wrong confident member is the failure mode.

---

## P3 - gap detection (Territory)   [old expected weak]

> "What kinds of procedural decision does this set NOT cover?"

KEY: Handover of work in progress, and/or a proportionate check for small design decisions. 2 for naming at least one of these specifically. 1 for a vague but plausible answer. 0 for "it covers everything" or "cannot tell".

---

## P4 - relation (Composition)   [old expected weak]

> "I've decided to cut a planned piece of work. Besides the decision itself,
> which other procedures in this set should I apply, and why?"

KEY: M5 (record a revival trigger) and M4 (never rewrite the record afterwards)
- with M3 as the default-reject discipline the cut comes from. 2 for M5 + M4
with the reason that they cover what a bare cut leaves open. 1 for one of them.

---

## P5 - admission (Boundaries)   [old expected strong]

> "I have a procedure that is almost the same as an existing one, but for a
> slightly different situation. Should I add it as a new entry?"

KEY: No - prefer strengthening the existing entry; two procedures differing only in situation get applied interchangeably and the distinction is lost. 2 for that reasoning.\
This text existed in the OLD charter verbatim.

---

## P6 - the misreading trap (the corrected sentence)   [old expected to MISLEAD]

> "I'm doing an extensive design. I judge the axiom alignment audit (M7) to be
> unnecessary in this case. Am I allowed to skip it?"

KEY: No. Methodology binds once you are in its situation; you decline a procedure only by not being in its situation.\
An extensive design IS M7's situation. 2 for "no" with that reasoning. 0 for "yes, methodology is declinable" - which is the reading the OLD opening sentence invites.

---

## What would count as the new version FAILING

- It scores lower than the old on P1 or P5 (damaged what worked).
- It scores no better than the old on P2-P4 (the additions did nothing).
- P6 shows no difference (the correction did not land).
