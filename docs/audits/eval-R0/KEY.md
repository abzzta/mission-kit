# Semantic evaluation - R0 roles - probes and answer key

Written BEFORE the candidate was drafted and BEFORE any evaluator ran.\
Not shown to evaluators.

Derivation.\
Probes are derived from the four members' frontmatter - essence, engagement mode, evidence authorities, separation constraints - and from how work-types name them as eligible.\
Never from a revision.\
Three probes (P1, P2, P3) are ones the ORIGINAL charter is expected to answer well.

Scoring 0 / 1 / 2: 2 = correct and grounded in the charter; 1 = partly correct, or correct but guessed; 0 = wrong, or "the charter does not say".

---

## P1 - authority is type-determined (Composition)   [original expected strong]

> "Does an engineer always produce executor-evidence, simply because they are an engineer?"

KEY: No. A role's essence is invariant, but its authority depends on the work-type: engineer x build-a-slice produces executor-evidence, engineer x code-owner-approve produces independence evidence.\
Evidence authority is a set, composed from role x work-type. 2 for "no" with that reasoning.

---

## P2 - the director is non-composing (Composition)   [original expected strong]

> "Can the director be assigned idle work from the pool like the other roles?"

KEY: No. The director is non-composing: it steers and ratifies outside the claim-and-execute loop, is never idle-poolable, and is the sole ratification authority. 2 for "no" with that reasoning.

---

## P3 - exclusion with route (Boundaries)   [original expected strong]

> "Is 'backstop' a role?"

KEY: No - it is a work-type (backstop-a-prod-window) carrying a backstop flag, not a role and not an overlay layer. 2 for "no, it is a work-type".

---

## P4 - selection by authority (Territory)   [original expected weak]

> "I need someone to decide how the system is structured and how its parts compose. Which role holds that authority?"

KEY: The architect - authority over system shape, the design of record, the seams. 2 for architect, grounded. 1 for architect guessed from the name alone.

---

## P5 - an organisation of one (Composition)   [original expected weak]

> "I am a single agent doing all the work, under a human director. Can I verify my own work?"

KEY: No. The executor and the verifier of a piece of work must be different identities, and same-agent review is never valid.\
With no second actor, an independence check degrades only to deferring until an independent seat exists, or to director ratification. 2 for "no" plus where the check goes. 1 for "no" alone.

---

## P6 - one actor, several roles (Composition)   [original expected weak]

> "Can one actor hold more than one role?"

KEY: Yes.\
Roles are authorities, not people, and one actor may hold several.\
The constraint is narrower: the same identity may not be both executor and independent verifier of the same work. 2 for "yes" plus that constraint.

---

## P7 - gaps (Territory)   [original expected weak]

> "Is there any authority over work that no role holds, or a role some organisations cannot fill?"

KEY: Every authority position over a unit of work has a role - intent, shape, implementation, assurance, ratification - and operating shipped work is covered by existing roles.\
But independent assurance cannot be held by an organisation of one: it needs a second actor, so its checks fall to deferral or the director. 2 for identifying assurance as unfillable by a single actor. 1 for a plausible but unspecific gap. 0 for "none" or "cannot tell".

---

## What would count as the candidate FAILING

- It scores lower than the original on P1, P2 or P3.
- It scores no better on P4 to P7.
- It restates the work-type constraint set rather than citing it - the constraint set is authored once in W0 and must not be forked.
