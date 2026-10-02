# Scores - R0 semantic evaluation

Scored against KEY.md, committed at 933427d before the candidate was drafted.\
The scorer authored Y, so ties go to X.

| Probe | X1 | X2 | X3 | Y1 | Y2 | Y3 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|
| P1 authority type-determined | 2 | 2 | 2 | 2 | 2 | 2 |
| P2 director non-composing    | 2 | 2 | 2 | 2 | 2 | 2 |
| P3 backstop excluded         | 2 | 2 | 2 | 2 | 2 | 2 |
| P4 who holds shape           | 1 | 1 | 1 | 2 | 2 | 2 |
| P5 organisation of one       | 1 | 1 | 1 | 2 | 2 | 2 |
| P6 one actor, several roles  | 1 | 1 | 1 | 2 | 2 | 2 |
| P7 gaps                      | 1 | 1 | 1 | 2 | 2 | 2 |
| **Total / 14**               | **10** | **10** | **10** | **14** | **14** | **14** |

Mean, as first scored: **X 10.0 / 14**   **Y 14.0 / 14**

**Rescored under the corrected P5 key: X 10.0 / 14, Y 13.0 / 14.**\
The original P5 key taught that a lone agent cannot verify its own work.\
Every evaluator agreed and every candidate run scored 2 against it.\
Under the corrected key - checking is always required, it just cannot stand as assurance - every candidate run gave only the assurance half and scores 1.

## Judgement calls

**Controls P1-P3 identical.**\
Nothing that worked was damaged.

**P4-P6 - X scored 1.**\
Every X run reported NOT ANSWERED and guessed correctly - architect from the name, "no" to self-verification, "yes" to several roles with an independence caveat.\
Correct and ungrounded, so 1.\
Two X runs observed that the charter's own trigger - *which role may attest, approve or decide* - is not answered by its body.

**P7 - X scored 1.**\
All three guessed that the director is the role a small organisation cannot fill.\
Plausible and not the assurance gap, so 1.\
Every Y run named assurance, quoted.

---

## Findings

| Finding | Raised by | Version | Disposition |
|---|---|---|---|
| `+ A13)` at line start renders as a list item | X1, X2, X3 | original | already corrected in Y - independently confirmed |
| essence includes "authority" and is invariant, yet authority varies by work-type | X1, X2, X3, Y1 | both | **corrected** - pre-existing |
| "sole" ratification and "non-delegable intent" against "documented ratified delegation" | X1, X2, X3 | both | **corrected** - pre-existing |
| `related` omits A3 (and T0); lists E1 never mentioned | X1, X2, X3, Y1, Y3 | both | **corrected** - A3, T0 added |
| "the point of the next section" points at the wrong section | Y1, Y2, Y3 | Y | **corrected** - author error |
| "can hold every other position" includes the director's two positions | Y1, Y2, Y3 | Y | **corrected** - author error |
| "no second actor" while checks go to the director - is the director a second actor? | Y1, Y2, Y3 | Y | **corrected** - no second *agent*; the director is the independent identity checks fall to |
| fallback worded two ways - deferral, waits for a seat | Y1, Y2, Y3 | Y | **corrected** - one wording |
| "every position has a role" reads as no gaps, against its own gap definition | Y2, Y3 | Y | **corrected** - states the gap plainly |
| authority from role x work-type, but later from role x work-type x domain | Y2 | Y | **corrected** - authority from role x work-type; the unit of work from all three |
| "the authority with no role" fault against "every position has a role" | Y1, Y3 | Y | **corrected** - framed as a risk the territory exists to catch |
| backlog `B21` cited from a charter | Y1, Y2, Y3 | Y | **corrected** - the charter cites the gap T0 records, not this corpus's own backlog |

Seven of the twelve findings were errors in text the author added, all in the two concerns this conversion authored: territory and composition.

---

## Follow-up: the P5 correction, re-evaluated

The candidate was corrected to state that a lone agent must check its own work by means its own reasoning cannot bias, and that the check does not count as independent assurance.\
Three fresh readers were given the corrected candidate, `charter-Z-correction-as-evaluated.md`, and two questions.

| | Z1 | Z2 | Z3 |
|---|:-:|:-:|:-:|
| Can I verify my own work? | 2 | 2 | 2 |
| Am I still expected to check it, and how? | 2 | 2 | 2 |

Every run gave both halves, quoted: checking is mandatory, it must use a mechanism, a fresh reader or a measurement rather than re-reading, and it does not seal a gate needing independence.\
Every run also quoted the new fault, *the unchecked lone agent*, as naming the misreading.

Their further findings, and dispositions:

| Finding | Raised by | Disposition |
|---|---|---|
| the territory says the lone agent cannot hold assurance; composition says it holds the verifier role | all 3 | corrected - it may hold every role and can never exercise assurance, having no work but its own |
| does the director become a verifier when a check goes to it? | all 3 | corrected - the gate is met by ratification instead of attestation |
| does a fresh sub-agent count as an independent identity? | all 3 | **director ruling: a strong self-check, not assurance** - independent of context and motive, not of the shared model |
| "independent seat" undefined | 1 | corrected - a second agent |
| the `T0` sentence is hard to parse | 1 | corrected |
| no end condition on waiting for a second agent | 2 | not corrected - held by W0's constraint set, not by this charter |
| which gates require independence is not stated here | 3 | not corrected - deliberately cited to W0 rather than forked |
