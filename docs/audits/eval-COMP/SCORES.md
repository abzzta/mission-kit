# Composition evaluation - baseline

Corpus: export of `2142704` with `docs/` removed, so no key was reachable.\
Three context-less agents, each told only the corpus path and that `INDEX.md` is the entry point.\
Same model family for all three: concordance here is one measurement family, not three independent ones.

---

## Scores

| Probe | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| P1 binding from traits | 2 | 2 | 2 |
| P2 floor only; non-binding domain citation | 2 | 2 | 2 |
| P3 one unit of work | 2 | 2 | 2 |
| P4 reverse query | 2 | 2 | 2 |
| P5 lone-agent separation | 2 | 2 | 2 |
| P6 trigger routing | 2 | 2 | 2 |
| P7 which declaration governs | 2 | 2 | 2 |
| **Total** | **14** | **14** | **14** |

Notes:
- P1: all three gave A2 as conditional on the declarative trait the probe did not state. Correct against the key, which treats the system as not declarative.
- P3: two runs marked W7 as partly inferred, from D7's plane analogy; none labelled it a guess. No work-type names migrations.
- P5: all three found the constraint 2 / constraint 9 tension (`B33`) unprompted and resolved it toward constraint 9.
- P6 determinism: direct matches agreed closely across runs - D3, D0, W0, A0, T0, T1, R2 in all three; AR2 in two; T3 in two as direct, one as conditional.

---

## The key's own failure condition fired

The key said in advance: *baseline already scores full marks - there is nothing to fix, and the record is unearned.*\
**On correctness, as these probes measure it, that is the result.**\
A context-less agent composes the five layers correctly today.

What the probes did not score, and every run reported unprompted:

| Friction | Runs | Kind |
|---|---|---|
| **Whose traits count** when work lands on one system serving another - the harness, or the stateful service it launches | 3 / 3 | **unsettled; each guessed** |
| **What a domain's axiom alignment refers to** - D1's A1 note reads as about the work-tracking system, not the product | 3 / 3 | **unsettled; each guessed** |
| `W0` says `DOMAINS (N=6)`; there are seven | 3 / 3 | defect - introduced when `D7` was added |
| `T0` cites backlog `B21`, which resolves nowhere in the corpus | 3 / 3 | defect - a charter citing this instance's backlog |
| Roles list work-types in `engagementMode` and body prose, a third copy of eligibility, with no precedence rule | 3 / 3 | copy, unstated authority |
| Domain-side pairing lists drift | 3 / 3 | known, `D0` question 3a |
| P4 needed a frontmatter search across all 26 work-types | 3 / 3 | cost |
| No work-type names migration; W7 reached by analogy | 2 / 3 | routing |
| References to identifiers outside the corpus | 2 / 3 | known |

Cost: 23, 27 and 23 files or searches.

---

> **CORRECTION - the edge map given to the director before this evaluation was wrong in one row.**\
> It said roles declare no relationship to work-types.\
> Roles list work-types in `engagementMode` frontmatter and in body prose - R3 names six - and the lists differ from `roleEligibility`.\
> The claim came from a field count that read field names and not their contents.\
> All three evaluators found it.

---

## Fixed now

- `W0` `DOMAINS (N=6)` corrected to seven.
- `T0`'s citation of `B21` replaced by the property it named.
