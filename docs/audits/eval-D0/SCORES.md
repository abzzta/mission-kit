# D0 evaluation - scores and findings

Key: `KEY.md`, committed at `3306901` after an independent key review and before the candidate existed.\
Scoring 0 / 1 / 2 per the key; a labelled GUESS scores at most 1.

---

## Round 1 - original against candidate v1

| Probe | X1 | X2 | X3 | Y1 | Y2 | Y3 |
|---|---|---|---|---|---|---|
| P1 verification (control) | 2 | 2 | 2 | 2 | 2 | 2 |
| P2 tie-break (control) | 2 | 2 | 1 | 2 | 2 | 2 |
| P3 incident (control) | 2 | 2 | 2 | 2 | 2 | 2 |
| P4 product data | 0 | 1 | 0 | 2 | 2 | 2 |
| P5 pairing owner | 1 | 1 | 1 | 2 | 2 | 2 |
| P6 stateful | 1 | 1 | 1 | 2 | 2 | 2 |
| P7 faults | 1 | 1 | 1 | 2 | 2 | 2 |
| **Total** | 9 | 10 | 8 | 14 | 14 | 14 |

**Original 9.0, candidate 14.0.**\
Controls hold: P1 and P3 identical; P2 1.67 against 2.0.

Scoring notes:
- P2 X3 labelled `tooling-harness` a GUESS, so 1. Every other P2 answer reached `tooling-harness` by reading the rule, and every one of the six - on both versions - observed that the charter never states the answer for its own example.
- P4: X1 and X3 guessed `delivery-code` with no caveat about the data, so 0. X2 added that the six domains might not cover it, so 1 for a guessed gap.
- P5: every X answer reached "the work-type" through `domainFreedom lives on the work-type`, which is about free or pinned, not about which pairings are admitted. 1 each.
- P6: no X answer named traits; each reasoned that "stateful" is not in the list or is a system property. 1 each.
- P7: every X answer was a labelled GUESS naming real faults. 1 each.

---

## Findings and their disposition

Round numbers are where a finding was raised; `C` numbers are the corrections in the audit.

| Finding | Raised by | Disposition |
|---|---|---|
| the tie-break never states the answer for its own example | 6 / 6, round 1, both versions | **C1** - pre-existing |
| "six subject-surfaces" against five table rows | 2 Y, round 1 | **C2** |
| migration and repair both "resolve against records", then only the repair is a gap | 1 Y, round 1 | **C3** |
| infrastructure as code: two domains, no rule | 3 Y, round 1 | **C4** |
| "nowhere else" beside domain-side lists | 1 Y, round 1 | **C5** |
| "D1/D2/D3 anchor this" reads as freedom belonging to domains | 2 X, 1 Y, round 1 | **C6** - pre-existing |
| "nineteen" unsourced; tool-named members unnamed | 3 Y, round 1 | **C7** - and the count was wrong; see the audit's correction banner |
| C1 reworded to "made to and verified on" - fails when the two differ | 3 / 3, round 2 | **C8** - author error |
| "covers every place" against a recorded gap | 1, round 2 | **C9** |
| applying infrastructure covered, applying a migration not, unexplained | 2 / 3, round 2 | **C10** - a join defect in the author's additions |
| tool-named fault uncheckable from the tool-neutral table | 3 / 3, round 2 | **C11** |
| Purpose defines by evidence, tie-break by diff | 3 / 3, round 3 | **C12** - pre-existing, latent in "diff/evidence" |
| table's description of distribution omits the estate | 2 / 3, round 3 | **C13** |
| diff rule cannot place an action on live state; contradicts the territory | 2 / 3, round 4 | **C14** - the unification |
| "operations" listed as a mode - the author's inference, ungrounded | 1, round 4 | **C15** |
| "no work-type is pinned to D1/D2/D3" is a second copy of work-type data | 1, round 4 | **C16** |
| C16's sentence placed in the free bullet | 3 / 3, round 5 | **C17** - author error |
| "deterministic" claimed over a recorded gap | 2 / 3, round 5 | **C18** |
| pinned rule and altered-surface rule can disagree, no precedence | 3 / 3, round 5 | **parked** - pre-existing; see the audit |
| incident rule and altered-surface rule can disagree | 2 / 3, round 5 | **parked** - pre-existing; see the audit |

Not corrected, recorded:
- undefined terms in the original - "N axis", "the generator", "node", "N=1" - raised in every round;
- the generated Index reads empty in a draft; the generator fills it on apply;
- `A5` in `related` with no body citation, and the fit of the `A1` citation to determinism - pre-existing, raised by four readers across rounds;
- hard-wrapped bullets in the original's bimodal section.

---

## Convergence

Five rounds on one region of the charter: the tie-break and the data gap.\
Each round failed for a narrower reason in the same place, and three of the failures were the author's own corrections - C8, C10, C17.\
That is convergence rather than thrash: each finding was a layer under the last, not a new direction.

Round 5 answered every placement question 3 / 3 from quoted text, including a case no earlier round had shown - restarting a fleet.\
What it surfaced instead were conflicts between rules the original already held, which no wording of this charter can settle alone.\
That is the stopping signal, and the two are parked rather than ruled.

C17 and C18 were applied after round 5 without a sixth round: C17 moves a sentence into the bullet it describes, and C18 adds a qualifier.\
Neither changes what a probe would read as the answer.
