# Charter audit against E4

All thirteen knowledge-layer charters, read in full, graded against [`E4`](../../entities/E4-charter.md)'s six required concerns.

```yaml
source:       the thirteen charters at commit 629cf2c - recoverable with git show 629cf2c:<path>
standard:     entities/E4-charter.md as committed at 260bedf, before the amendments this audit recommended
method:       every charter read in full; each concern graded by whether an ANSWER is present,
              under any heading or none - never by whether a heading of that name exists
lines read:   1420 across 13 charters
grades:       Y answered   P partial   - absent
```

**Headline.**\
The heading census reported thirty missing sections.\
Graded by answers, **the real gap is concentrated almost entirely in two concerns - Territory and Composition - and nearly everything else is already present.**\
Purpose is answered in all thirteen and titled in two.\
The four-section checker was wrong in both directions: it missed answers that exist and could not have detected the two concerns that are genuinely absent.

---

## 1. The grid

| Charter | Purpose | Territory | Boundaries | Composition | Faults | Index |
|---|:-:|:-:|:-:|:-:|:-:|:-:|
| `A0` axioms | Y | P | Y | **Y** | Y | Y |
| `R0` roles | Y | - | Y | P | - | P |
| `D0` domains | Y | P | Y | P | - | P |
| `W0` work-types | Y | P | Y | **Y** | P | P |
| `M0` methodology | Y | - | **Y** | - | Y | Y |
| `S0` style | Y | - | P | - | Y | Y |
| `P0` patterns | Y | - | Y | - | Y | Y |
| `K0` skills | Y | - | Y | **Y** | Y | Y |
| `E0` entities | Y | P | Y | - | Y | Y |
| `C0` components | Y | **Y** | Y | P | Y | Y |
| `AR0` artifacts | Y | P | Y | **Y** | Y | Y |
| `SC0` schemas | Y | - | - | **Y** | - | Y |
| `MREQ-0` backlog | Y | - | Y | - | - | Y |
| **Answered** | **13** | **1** | **11** | **5** | **8** | **10** |
| **Partial** | 0 | 5 | 1 | 3 | 1 | 3 |
| **Absent** | 0 | 7 | 1 | 5 | 4 | 0 |

---

## 2. Concern by concern

### Purpose - answered 13 of 13, titled in 2

Every charter states why its set exists, **in its untitled opening paragraphs.**\
Only `C0` and `E0` give it a heading (`Why the layer exists`).\
Examples of the untitled form: `M0` *"Named procedures for conducting work, each one declinable in a given situation and none of them optional once you are in the situation it names"*; `SC0` *"owns cross-project, machine-verifiable entity contracts"*.

**Finding.**\
The opening paragraph is the corpus's actual convention for purpose.\
Any checker matching headings would report it missing in eleven charters where it is present.\
`E4` should name the opening as a conformant location rather than require a section.

### Territory - answered 1 of 13, partial 5, absent 7

Only `C0` states a territory with a denominator, and only because it was written this session.\
Five charters carry a **partial** answer: an enumeration of members or a scoping sentence, which says what is *in* the set and not what the set *claims to cover*.

| Charter | Partial evidence | Why it is not a territory |
|---|---|---|
| `A0` | the applicability matrix; *"orthogonal in statement and conjunctive in force"* | detects redundancy, never absence - the case recorded in backlog `B3` |
| `D0` | *"Six subject-surfaces"*, enumerated | a list of members, not a claim about what space they span |
| `W0` | *"WORK-TYPES (K~=26) - verb-families carrying the mode + shape of work"* | approximately numbered, with no statement of what would be missing |
| `E0` | the measured table of undefined terms | the strongest partial in the corpus - it is a gap list, which is the *output* a territory enables |
| `AR0` | the loop, and its `Coverage` section | `Coverage` reasons about loop positions, which is a territory for the loop and not stated as one |

**Finding.**\
Territory is genuinely absent rather than misnamed.\
This is the one concern where authoring is required, and it confirms `B3`.

### Boundaries - answered 11 of 13

The strongest-performing concern after Purpose, and the one the four-section checker damaged most.\
It counted these charters as lacking admission because it looked for a heading named `What earns an entry`.

Three distinct forms, which `E4` should name:

| Form | Charters | Example |
|---|---|---|
| **Admission test** - what earns entry | `M0` `S0` `P0` `K0` `E0` `AR0` | `P0`: three tests, all required - recurrence across contexts, named forces, a stated cost |
| **Exclusion with route** - not here, go there | `R0` `D0` `W0` | `R0` *"Backstop is not a role ... See work-types"* |
| **Neighbour table** - discriminated from each adjacent set | `M0` | five-row table, one question: *"what a reviewer would inspect to tell whether the rule was honoured"* |

`M0` carries all three and is the corpus exemplar.\
`S0` is partial: it has an admission test and no exclusions.\
`SC0` is the one absence - it states what it owns and never what it excludes.

### Composition - answered 5 of 13, partial 3, absent 5

Answered properly in `A0`, `W0`, `K0`, `AR0` and `SC0`, each in a different form, and each invented independently:

| Charter | Form of relation |
|---|---|
| `A0` | orthogonal in statement, conjunctive in force; no apex member |
| `W0` | generative - three axes compose to a work item; an enumerated table is rejected |
| `K0` | declared edges, mechanically checked by `skill-graph.mjs`; depth derived, never named |
| `AR0` | a loop with an inlet and a feedback edge |
| `SC0` | containment - a process composes a resource and must not inject fields into it |

Three partials (`R0`, `D0`, `C0`): the relation is implied by an axis or a registry and never stated as a relation between *members*.\
Five absent: `M0`, `S0`, `P0`, `E0`, `MREQ-0`.

**Finding.**\
Composition is the concern most in need of authoring after Territory.\
Its five answers are the strongest evidence in the corpus that `E4` was right to make it required - five forms, all reached without a template.

### Faults - answered 8 of 13

Present and well-formed in the eight newer-style charters.\
Absent in `R0`, `D0`, `SC0`, `MREQ-0`; partial in `W0`, which carries rejection rules (*"An enumerated triple-table is rejected"*, *"A generated node that cannot pass this preflight at seed is not admitted"*) that are faults stated as admission failures.

### Index - answered 10 of 13, present in all 13

Every charter carries a generated index.\
Three are graded partial because the index is not the one `E4` means:

- `R0` and `D0` carry a one-line inline enumeration of members (`R1 architect - R2 engineer ...`) and no generated table.
- `W0` points to its members rather than listing them.

`MREQ-0` titles its index `Entries` and `SC0` titles it `Contracts`; both are generated and conformant in substance, and are graded answered - the heading checker missed both.

**Finding.**\
Index is fully mechanical, as expected.\
The partials are a generator configuration question, not authoring.

---

## 3. What E4 has no slot for

The audit's second purpose was to test `E4` itself.\
Four things the charters carry that `E4` does not place.

**3.1 Faults located in members, by design.**\
`P0`'s *Pattern against anti-pattern* argues that a failure mode belongs in the entry owning the invariant it breaks, *"where the reader meets it while doing the thing that risks it.\
Collected separately, failure modes are read only by people already looking for them."*\
That is a principled argument against collecting faults at charter level, and it directly challenges `E4`'s required Faults concern.\
**Resolution available.**\
The two are compatible if `E4` distinguishes *population faults* - an unhealthy set, which no member can see - from *member faults*, which belong in the member.\
`P0`'s own Faults section is entirely population faults (*the pattern of one*, *the pattern that should be a component*), which supports the distinction.\
`E4` should state it.

**3.2 The charter-slot statement.**\
`A0`, `AR0` and `E0` each state *"This entry is the layer's composition rule ... It is not itself an axiom/artifact/entity, which is why the body shape exempts it."*\
Three charters, identical in substance.\
That is a property of *charters*, and `E4` already states it under Boundaries - so this is a candidate for removal from the charters once `E4` is cited, not a gap in `E4`.

**3.3 The enforcement-gating policy.**\
`S0`: *"Style is gated on changed files rather than on the whole corpus.\
The corpus carries debt that predates the checkers, so gating the diff blocks new debt."*\
That is a statement of how the set's rules are *applied over time*, distinct from which rules a script holds.\
`E4`'s conditional Enforcement-boundary concern covers *which*, not *how incrementally*.\
Minor, and arguably free substance.

**3.4 Relation to other sets.**\
`AR0` cites `W0` for its shape; `A0` states that domains cite axioms and never the reverse (*"the direction is one-way"*); `P0` and `C0` define themselves against each other.\
These are relations *between sets*, not between members, and `E4`'s Composition concern is scoped to members.\
`M0`'s neighbour table sits on the boundary of the two.\
**`E4` should say whether inter-set relations belong under Boundaries or are free.**\
The evidence leans to Boundaries, since every instance is a set defining itself by what it is not.

---

## 4. Conclusions

**On the gap.**\
The thirty-section figure is retracted.\
Graded by answers the genuine work is:

| Concern | Charters needing authored work |
|---|---|
| Territory | **12** - seven absent, five partial |
| Composition | **8** - five absent, three partial |
| Faults | 5 - four absent, one partial |
| Boundaries | 2 - one absent, one partial |
| Index | 3 - generator configuration only |
| Purpose | 0 |

Territory and Composition carry nearly all of the real work, and both require a judgement per set rather than reorganisation.

**On E4.**\
`E4` holds up.\
Every required concern was found answered in at least one charter, and composition - which the earlier standard omitted - is the second-most-needed addition.\
Four amendments are supported by the evidence:

1. **Name the untitled opening as a conformant location for Purpose.** Thirteen of thirteen charters use it.
2. **Name the three forms of Boundaries** - admission test, exclusion with route, neighbour table - with `M0` as the exemplar carrying all three.
3. **Split population faults from member faults**, which reconciles `P0`'s argument with the required concern rather than overriding it.
4. **State whether inter-set relations belong under Boundaries.** The evidence says they do.

**On the checker.**\
Any rebuilt checker must test for answers by declared location, not by heading text, or it will repeat the earlier failure.\
The cheapest mechanism the evidence supports is a frontmatter map from each concern to the section or paragraph that answers it, which a script can verify exists without understanding prose.

**On preservation.**\
No charter carries content that should be lost.\
The most valuable passages - `M0`'s neighbour table, `P0`'s argument on where faults live, `A0`'s no-apex argument, `K0`'s two-file rationale, `W0`'s single-authored constraint set - are all specific, argued, and irreplaceable by a template.\
**Conformance should move and label existing content, never rewrite it.**
