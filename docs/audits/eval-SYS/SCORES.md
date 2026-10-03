# System boundary and axiom direction - scores

Keys: `KEY.md` here (S1-S6, reviewed before use) and `../eval-AXDIR/KEY.md` (Q1, Q2).\
One prompt, all eight questions, identical before and after: `PROBES-round1.txt`.\
Before: export `2142704` without `docs/`.\
After: the amended corpus without `docs/`.\
Same model family throughout - concordance is one measurement family.

---

## Round 1 - before against after

| Probe | B1 | B2 | B3 | A1 | A2 | A3 |
|---|---|---|---|---|---|---|
| S1 composed, contract unchanged | 2 | 2 | 2 | 2 | 2 | 2 |
| S2 contract changed | 1 | 1 | 1 | 2 | 2 | 2 |
| S3 contained module | 1 | 1 | 1 | 2 | 2 | 2 |
| S4 shared library | 2 | 2 | 2 | 2 | 2 | 2 |
| S5 undeclared boundary | 1 | 1 | 1 | 2 | 2 | 2 |
| S6 what a system is | 0 | 0 | 1 | 2 | 2 | 2 |
| Q1 unrequested gap | 1 | 1 | 1 | 2 | 2 | 2 |
| Q2 what an axiom is for | 0 | 0 | 0 | 2 | 2 | 2 |
| **Total / 16** | **8** | **8** | **9** | **16** | **16** | **16** |

**Before 8.3, after 16.0.**\
S1 and S4 were already answered: the corpus's "a plain library takes `any-system`" and A3's air-gap carried them.\
Every before-run marked S2, S3 and S5 *not settled* and guessed - the correct guess each time, which scores 1.\
Q2 before: *"a test the changed system must still pass"*; after: *"a limit to steer by, not a test to pass"*.

Scoring notes: S6 B1 and B2 said "not defined" with no inferred definition, 0; B3 inferred "whatever a declared architecture bounds", 1.\
Q1 after: all three built the feature without the gap, closed it where touched, and recorded it otherwise - the within-the-fence ruling exactly.

---

## Findings from round 1, and round 2

Raised by the after-runs and corrected:

| Finding | Runs | Correction |
|---|---|---|
| E5 defines a system by a declared boundary, then treats undeclared units "as one" without saying what traits the one has | 3 / 3 | one system **with the traits of both**; declaring the boundary makes them two again |
| the A0 rule listed "modifies and contains" and added the contract case as an exception | 1 | the contract case is in the rule |
| does changing a shared interface bind every consumer and its containers? | 1 | a versioned contract changes only for systems that adopt the new version |
| "scope" undefined | 1 | what the change was undertaken to do, and the parts it touches |

Round 2: three runs on the corrected corpus, four targeted questions - the merged traits, a breaking major version none of ten consumers has adopted, a hidden-state function beside but not called by the change, and the contained module again.\
**Twelve of twelve answered from quoted text.**\
Raised and corrected:

| Finding | Runs | Correction |
|---|---|---|
| "exactly two ways" against the undeclared collapse | 2 / 3 | two ways *for systems with a declared boundary*; the collapse is the absence of one |
| "touches" undefined - same file? called code? | 3 / 3 | **what it modifies and what it newly depends on; code beside it is not touched** - flagged for director review |
| A8's binary gates against the asymptote | 2 / 3, and once in round 1 | a gate's binary question is checked by the direction rule |
| A0 and E5 word the undeclared case differently | 1 | aligned |
| adoption could read as altering the component | 1 | the component is not altered by being adopted |
| `T0` "the six traits" - five traits and a floor | 1 | six applicability tags - pre-existing |

Recorded, not corrected - all pre-existing:
- A5's mandate assumes a model, and it binds a model-free multi-agent system - 2 runs.
- A9's mechanics barely fit a watched one-shot script it binds - 3 runs; `B22`.
- A1 and A3 success signals still read pass-or-fail; A3 says faults are *structurally impossible* - 1 run. The individual axioms were not edited.
- "Plain library" undefined - 1 run.
