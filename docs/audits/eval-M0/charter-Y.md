
# Methodology - the how-you-operate layer

## Purpose

Ways of working.\
Named procedures for conducting work, each applying only in the situation it names and binding once you are in it.

A methodology entry governs **conduct**: the sequence you follow, the independence you require, the evidence you demand before you proceed.\
It is a *situated move* in the sense [`A0`](../../axioms/README.md) draws - you reach for it when the work matches its trigger, unlike an axiom, which is in force whether you reach for it or not.\
A procedure is declined by not being in its situation, never by deciding it does not apply once you are.

The set exists because conduct is where reliable work and adequate work diverge invisibly.\
Two procedures of very different reliability can produce the same artifact, and the artifact will not say which was used.\
Without a named procedure the difference is discovered only after it has cost something.

---

## Territory

This set covers **the procedural decisions inside a unit of engineering work** - the points where how you proceed, rather than what you produce, decides whether the result can be trusted.

Those decisions fall at five moments, and the moments are the denominator.\
Every member is placed by its own trigger, in exactly one moment.

| Moment | The decision | Members |
|---|---|---|
| **Entering** | how to begin in an unfamiliar collection or system | [`M6`](../../methodology/M6-author-from-exemplar.md), [`M8`](../../methodology/M8-artifact-bootstrap.md) |
| **Committing to a design** | whether a design is anchored before it is built | [`M7`](../../methodology/M7-axiom-alignment-audit.md) |
| **Verifying** | what evidence is enough to believe the work is correct | [`M1`](../../methodology/M1-triangulated-review.md), [`M2`](../../methodology/M2-test-drive-docs-by-execution.md) |
| **Deciding what to keep** | what lands, what is cut, and how a cut is recorded | [`M3`](../../methodology/M3-default-reject-honest-yield.md), [`M5`](../../methodology/M5-anti-amnesia-deferral.md) |
| **After the fact** | how the record of past work is treated when policy changes | [`M4`](../../methodology/M4-frozen-history-rule.md) |

**Two thin moments, recorded rather than filled.**\
*Handing over* - passing work in progress to another agent or a later session - has no procedure at all.\
Every reader of this corpus starts cold, so handover is the moment that condition bites hardest, and it applies to an agent working alone as much as to many: a lone agent hands over to its own next session.\
*Committing to a design* holds only `M7`, which is scoped to extensive design and excludes a short local fix; a decision between those two has nothing proportionate.\
Neither is a defect until something fails there, and both are where to look first when something does.

---

## What belongs here, and what does not

The boundary of this set is the object the rule acts on.

| If the rule governs | It belongs in | Because |
| --- | --- | --- |
| the process you follow | `methodology/` | the object is the conduct of work |
| the artifact you produce | [`style/`](../../style/README.md) | the object is the text, and a reader judges it without watching you work |
| the shape of a solution | [`patterns/`](../../patterns/README.md) | the object is a design, reusable across processes |
| a capability you execute | [`skills/`](../../skills/README.md) | the object is a procedure with inputs and outputs, invoked rather than followed |
| what must always hold | [`axioms/`](../../axioms/README.md) | it is not declinable, so it is not a move |

The discriminating question is what a reviewer would inspect to tell whether the rule was honoured.\
If they would read the output, it is style.\
If they would have to know how you arrived at it, it is methodology.

---

## What earns an entry

A procedure earns one when following it and not following it produce measurably different work, and the difference has actually been observed.\
A named practice that everyone already follows codifies nothing.\
A practice nobody has run is a proposal, not a methodology.

Prefer strengthening an existing entry to adding a neighbour.\
Two procedures differing only in the situation they name will be applied interchangeably, and the distinction they were minted for is lost on first use.\
Before adding one, ask whether it is a new primitive or a new composition of existing members - the second is usually right, and cheaper.

---

## How the procedures compose

Members cite each other, and the citations form a graph with a definite shape.

**Two primitives carry the set.**\
[`M1`](../../methodology/M1-triangulated-review.md) - independent inputs before a verdict - and [`M3`](../../methodology/M3-default-reject-honest-yield.md) - reject by default and report honestly what survived - are each cited by three other members.\
Most procedures here specialise one of them: a particular kind of independence, or a particular discipline about what is kept.

**One cluster is a single discipline seen three ways.**\
[`M3`](../../methodology/M3-default-reject-honest-yield.md), [`M4`](../../methodology/M4-frozen-history-rule.md) and [`M5`](../../methodology/M5-anti-amnesia-deferral.md) cite one another and together govern work that does not land: reject it deliberately, record why with a condition for its return, and never rewrite the record afterwards.\
Applied separately they leave gaps the others cover - a cut with no revival trigger is forgotten, and a deferral whose record can later be rewritten was never durable.

**Two members are compound.**\
[`M7`](../../methodology/M7-axiom-alignment-audit.md) and [`M8`](../../methodology/M8-artifact-bootstrap.md) cite primitives and are cited by none.\
They are assembled from other procedures rather than new primitives.

---

## Faults

Population faults only - each is visible across the set and invisible to any single procedure.\
A failure mode of one procedure belongs in that procedure.

- **The unenforceable procedure.** A sequence with no observable trace, so conformance can only be asserted. If nothing distinguishes a run that followed it, it is advice.
- **The style rule in process clothing.** A convention about the artifact filed here, where the people who write artifacts do not look for it.
- **The procedure that is really a skill.** A named capability with inputs and outputs, filed as a way of working. It belongs in `skills/`, where it can be invoked.
- **The ceremony.** A step retained because it is in the procedure, after the failure it guarded against became impossible. Procedures accrete; nothing prunes them unless the entry says what it is protecting against.
- **The orphaned primitive.** A procedure that composes with nothing and is cited by nothing. It may be load-bearing and unrecognised, or a habit wearing a methodology's name; the graph cannot tell which, and the absence of edges is the prompt to ask.
- **The unguarded moment.** A recurring failure at a point in the work no procedure covers. It is this set's characteristic gap, and it stays invisible until the territory is read against what actually went wrong.

---

## Index

<!-- BEGIN GENERATED: entries. Run tools/generate-index.mjs; do not edit by hand. -->
| ID | Title | Hydrate when |
|---|---|---|
| [M0](../../methodology/README.md) | Methodology - how work is conducted, as against how artifacts are written | You are choosing how to run a review, audit or deferral, or you need to know whether a rule belongs here or in style |
| [M1](../../methodology/M1-triangulated-review.md) | Triangulated review - minimum 4 independent inputs | You are reviewing a patch or design that ships to production or upstream |
| [M2](../../methodology/M2-test-drive-docs-by-execution.md) | Test-drive docs by execution | You are about to ship an operator-facing workflow document to someone who will run it |
| [M3](../../methodology/M3-default-reject-honest-yield.md) | Default-reject discipline + honest yield reporting | You are running an improvement sweep, refactor programme or audit cycle |
| [M4](../../methodology/M4-frozen-history-rule.md) | Frozen-history rule | You are making a policy change that would rewrite artifacts recorded before it |
| [M5](../../methodology/M5-anti-amnesia-deferral.md) | Anti-amnesia deferral - every parked or cut item carries a revival trigger | You are parking, cutting or marking won't-do on a unit of tracked work |
| [M6](../../methodology/M6-author-from-exemplar.md) | Author from exemplar - read a peer instance before adding to a collection | You are about to add an entry to a curated collection |
| [M7](../../methodology/M7-axiom-alignment-audit.md) | Axiom alignment audit - required gate for extensive planning/design | You are judging whether a design decision is anchored to a first principle |
| [M8](../../methodology/M8-artifact-bootstrap.md) | Artifact bootstrap - enter the loop at its inlet, one ratified type at a time | You are adopting the artifact document set in a project that does not use it yet |
<!-- END GENERATED -->
