---
id: E4
category: entity
title: charter - the document that voices a set, and the questions only it can answer
status: active
hydrate-when: You are writing or revising a charter, or deciding whether a section belongs in one
supersedes: []
related: [E3, E2, A3, S0]
---

# E4 - charter

## Definition

A **charter** is the document through which a [`set`](E3-set.md) speaks.\
It states what the population owes itself - the things no member has standing to say and no member could know.

A member answers *what am I, and how do I apply.*\
A charter answers *what is this population for, what belongs in it, how do its members relate, and how would you know it was wrong.*

Every knowledge layer's charter is its `<prefix>0` entry, held at `<directory>/README.md`.\
A set with no charter is a directory listing: it can be checked for validity and never for completeness, because nothing states what the collection is for.

A charter's content falls into three classes, and the classes are the point of this entry.

- **Required.** Every charter answers these, because every set has them.
- **Conditional.** A charter answers these only when the property is present. A set whose members all take one shape need not say it has kinds.
- **Free.** The set's own substance. Unconstrained by design, because a charter organised as its set is organised says more than one forced into a template.

---

## Discriminators

**Required, conditional, and free are told apart by one question:** *could a member answer this?*\
If any single member could state it, it is not charter content at all and belongs in the member.\
If no member could, it is a set property, and the remaining question is only whether every set has it.

### Required - every charter

| Concern | The question | Why a member cannot answer it |
|---|---|---|
| **Purpose** | Why does this set exist, and what goes wrong without it? | A member knows why *it* exists, never why the collection does |
| **Territory** | What does this set claim to cover? | Completeness is a property of the population; a member cannot see its siblings' absence |
| **Boundaries** | What belongs here, what does not, and where does the excluded thing go instead? | An exclusion decides a case no member holds |
| **Composition** | How do members relate to one another? | A relation has two ends, and a member holds one |
| **Faults** | What does an unhealthy population look like, as against a merely valid one? | Every member can be valid while the set is wrong |
| **Index** | What is in it? | Generated, never typed |

### Conditional - when the property is present

| Concern | Required when | The question |
|---|---|---|
| **Kinds** | members come in more than one sort | What sorts exist, and how is a member told which it is? |
| **Member shape** | the set prescribes a body or frontmatter | What must every member carry? Read from the machine declaration, never restated |
| **Placement** | members live somewhere other than the charter's directory | Where do members live, and what are they called? |
| **Enforcement boundary** | some properties are machine-held and some are not | Which rules a script holds, and which are settled by reading? |
| **Sub-sets** | the set contains sets | Which children exist, and what each is for - and nothing more |
| **Axiom alignment** | the set makes a claim an axiom governs | Which standing commitments bind it, and where it falls short |

### Free - everything else

A charter's remaining sections are its own.\
A loop diagram, a tie-break rule, a composition table, an argument for why a distinction is drawn where it is - none is required of other sets and none is forbidden.\
The test for a free section is only that it states a set property; anything a member could say has drifted into the wrong document.

**Charter against member.**\
A member states what it is.\
A charter states what the members owe each other.\
A charter section that describes one member in detail has absorbed that member's duty and should move into it.

**Charter against set.**\
The set is the population; the charter is its voice.\
[`E3`](E3-set.md) defines what a set owns.\
This entry defines the document that states it.

---

## Boundaries

It is **not a template.**\
The required concerns are questions, not headings.\
A charter answers each, under whatever heading reads naturally for its set; what is required is that the answer is present and findable, not that a section carries a particular name.\
Two charters can satisfy this entry with no heading in common.

It is **not the enforcement.**\
Where a concern is machine-checkable, the machine declaration holds it and the charter reads it.\
A charter that restates a machine-held rule creates a second authority free to drift.

It is **not a member.**\
It carries an id and appears in its own index, and is exempt from the body shape its set prescribes for members, because it defines that shape rather than instantiating it.

It does **not govern its sub-sets.**\
A parent charter registers each child and states what it is for.\
The child charter governs its own population, and inherits nothing.

---

## Relations

**To [`E3`](E3-set.md).**\
`E3` names what a set owns: territory, member relations, admission and retirement, placement and naming, and the health of the population.\
Each maps to a required or conditional concern here, and a set property `E3` names that this entry does not place is a defect in one of the two.

**To [`E2`](E2-layer.md).**\
Every knowledge layer's charter is its `<prefix>0` entry.\
That regularity is what lets a member resolve its charter without a lookup.

**To [`S0`](../style/README.md).**\
The first charter to state its own enforcement boundary - which rules a script holds and which are settled by reading - as a property of the set rather than a backlog.\
The conditional concern of that name generalises it.

**To [`A3`](../axioms/A3-sovereign-composition.md).**\
Composition is required rather than conditional because every set's members relate somehow, even if only by being orthogonal, and an unstated relation is the one most likely to be violated silently.

---

## Why precision matters

Thirteen charters were written without a definition of what a charter is, and each invented its own shape.

The divergence carries real evidence, and it is better evidence than any template would have been: thirteen authors writing independently converged on roughly seven concerns.\
**Composition** was invented in five charters without any of them copying another.\
**Boundaries** appear in four, almost always as a ruling that some named thing is excluded and routed elsewhere - and one charter carries the strongest form, a table discriminating the set from each of its neighbours by a single question.\
**Kinds** appear in four: standing against situated, internal against external, enforced against unenforced, pattern against anti-pattern.\
A concern reached independently by several authors is a property of sets, not a habit of one writer.

A first attempt at standardising charters counted the most frequent headings and declared four of them required.\
That was popularity rather than design, and it failed in three specific ways worth recording, because each is the kind of error a definition exists to prevent.\
It omitted composition, the concern most consistently invented.\
It reported charters as missing an admission rule when they carried several, written as exclusions under other headings, because it matched names rather than answers.\
And it disagreed with `E3`, the definition it was meant to enforce, so the enforcement and the thing it enforced were already two statements of one rule drifting apart.

The required concerns are stated as questions so that the third failure cannot recur: a checker can only test for the presence of an answer if it knows what question it is testing, and a heading name is not a question.
