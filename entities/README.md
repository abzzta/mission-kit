---
id: E0
category: entity
title: Entities - precise definitions of load-bearing terms, and what earns one
status: active
hydrate-when: You are about to define a term the corpus leans on, or two readers could act differently on the same sentence
supersedes: []
related: [E1, M0, SC6, A4]
---

# Entities

## Purpose

What a thing **is**, never how it is done.

An entity entry fixes the meaning of one term that an engineering organisation cannot afford to leave imprecise.\
This entry is the layer's charter: it states what earns a definition and what shape one takes, and it defines no term itself.\
It is not an entity, which is why the entity body shape declared in [`SC6`](../schemas/SC6-entry-body.md) exempts it.

**Why the layer exists.**\
The corpus runs on terms it has never defined.\
Measured across the entries and skill bodies at the time this layer was created:

| Term | Files using it | Times defined |
| --- | --- | --- |
| `gate` | 91 | 0 |
| `evidence` | 80 | 0 |
| `substrate` | 79 | 0 |
| `sovereign` | 30 | 0 |
| `seal` | 23 | 0 |
| `closeout` | 23 | 0 |
| `lease` | 18 | 0 |
| `arc` | 57 | 13, scattered |

`sovereign` titles three axioms and is defined in none of them.\
`arc` is the worse case: thirteen partial definitions in thirteen places is not a definition, it is drift that has already happened.

A cold agent is the corpus's stated reader, and it cannot instantiate an organisation whose load-bearing nouns resolve to nothing.\
That is the mandate failing on vocabulary rather than on content.

---

## Territory

This set covers **every term the corpus leans on across layers where two competent readers could act differently on the same sentence**, partitioned by the kind of thing the term names.\
The claim is set by what the set is for; a kind of term with no entry is a gap, not a reason to narrow the claim.

| Kind | What the terms name | Members | Undefined, load-bearing |
|---|---|---|---|
| **Authority** | who may decide what | [`E1`](E1-sovereign-hierarchy.md) sovereign-hierarchy | `sovereign` on its own, as axiom titles and tools use it |
| **The corpus's own structure** | how this knowledge is organised | [`E2`](E2-layer.md) layer, [`E3`](E3-set.md) set, [`E4`](E4-charter.md) charter | - |
| **What is engineered** | the things work is done on, and their parts | [`E5`](E5-system.md) system, [`E6`](E6-component.md) component | `substrate` |
| **Work and its proof** | a unit of work, what shows it was done, and what lets it pass | **none - gap** | `unit of work`, `evidence`, `gate`, `seal`, `closeout` |
| **Coordination** | how work is run across units and agents | **none - gap** | `arc`, `lease` |

Every member sits in one row, and two rows hold none.

**Gaps tested.**\
A search of the entries, charters, skills, the vision and the standing context finds no definition of `gate`, `evidence`, `seal`, `closeout`, `lease`, `substrate` or `unit of work`; [`A8`](../axioms/A8-gated-recursive-integrity.md) describes gates without defining one, and [`W0`](../work-types/README.md) names evidence fields, not the word.\
`arc` is defined in the skills layer - a tree of rungs climbing one summit, in [`K6`](../skills/K6-arc-lifecycle.md) - while the coordination skills use it for a graph of work items seeded from a blueprint, so it carries two meanings and no entry fixes either.\
The two empty rows are where an organisation's work is gated and run, which is where a misread term costs most.

---

## What earns an entry

A term earns one when imprecision about it would cost something real: a wrong gate, a mis-scoped claim, two people building to different meanings of the same word.\
Ubiquity alone does not qualify a term, and neither does jargon that only ever appears inside one skill.

The test is whether two competent readers could act differently on the same sentence.\
If they could, define it.

---

## Neighbours

| Neighbour | The question that separates them |
|---|---|
| A layer's own charter | Does the term name one layer's members, or is it leaned on across layers? A charter states what its members are; an entity for the same word is earned only by the two-readers test across layers, and then it fixes the word's meaning and cites the charter, as `E2` cites the root charter's admission rule rather than restating it. |
| [Schemas](../schemas/README.md) | Is it what a term means, or the machine-checkable shape of an instance? `E2` fixes what a layer is; [`SC1`](../schemas/SC1-catalog-entry.md)'s `category` field carries which layer an entry is in. |
| [Methods](../methods/README.md) and [skills](../skills/README.md) | Does it say what a thing is, or how to do something? A procedure belongs in a method, or a skill if it is executable. |
| [Traits](../traits/README.md) | Is it a term the corpus leans on, or a characteristic of a system that decides which axioms bind it? |
| [Artifacts](../artifacts/README.md) | Is it a term, or a document type a lifecycle produces? |

---

## Member shape

Fixed, so definitions can be compared and evaluated rather than merely read.\
The shape is declared in [`SC6`](../schemas/SC6-entry-body.md) and enforced by `tools/check-entry-body.sh`, so this list is a reading of the contract rather than a second copy of it.

- **Definition** - what it is, stated once, without mechanism.
- **Discriminators** - the tests that separate it from its near neighbours.
- **Boundaries** - what it explicitly is not.
- **Relations** - typed edges to other entities.
- **Why precision matters** - what breaks when it is conflated.

The `Boundaries` section is load-bearing rather than decorative.\
A definition that only says what a thing is leaves every adjacent case undecided, which is how one term becomes thirteen.

---

## Composition

Entities compose through the typed edges in each member's `Relations`, and the population forms two chains and one apex.

- **Structure:** a layer (`E2`) is a set (`E3`), and every set speaks through its charter (`E4`); not every set is a layer.
- **What is engineered:** a component (`E6`) is a system (`E5`) seen as a part of a containing system.
- **Authority:** `E1` stands apart from both chains; it is ordered by altitude where layers are peers, and `E2` says so as a relation, *not to be read as*.
- The chains meet the rest of the corpus by citation: systems to traits and axioms, charters to every layer's `0` entry, the sovereign hierarchy to roles.

---

## Faults

- **The undefined noun.** A term load-bearing in dozens of documents and defined in none, so each reader reconstructs it slightly differently and no two reconstructions are compared.
- **The drifted synonym.** Two words for one concept, or one word for two, discovered only when a decision made under one reading is executed under the other.
- **The procedure filed as a definition.** An entry here that answers how instead of what; it belongs in methods or skills, and it hides the absence of a real definition.
- **The glossary nobody cites.** Definitions written once and referenced nowhere, so drift resumes immediately and the layer becomes decoration.
- **The double home.** A term defined both here and in a charter or member, free to disagree.

---

## Index

<!-- BEGIN GENERATED: entries. Run tools/generate-index.mjs; do not edit by hand. -->
| ID | Title | Hydrate when |
|---|---|---|
| [E0](README.md) | Entities - precise definitions of load-bearing terms, and what earns one | You are about to define a term the corpus leans on, or two readers could act differently on the same sentence |
| [E1](E1-sovereign-hierarchy.md) | sovereign-hierarchy - layered authority where each layer holds final say over one class of decision | You are deciding which layer owns a decision, or an actor is about to decide something at another layer's altitude |
| [E2](E2-layer.md) | layer - a top-level directory owning one concern, and the three names a knowledge layer answers to | You are deciding which layer owns an entry, or you have met the words layer, category and prefix and cannot tell whether they name one thing or three |
| [E3](E3-set.md) | set - a bounded population whose charter states what its members owe each other | You are writing a charter, adding a member to a curated population, or asking whether a population is complete |
| [E4](E4-charter.md) | charter - the document that voices a set, and the questions only it can answer | You are writing or revising a charter, or deciding whether a section belongs in one |
| [E5](E5-system.md) | system - a unit with a boundary, which traits describe and axioms bind | You are deciding which systems' axioms a change answers to, or what counts as the system you are working on |
| [E6](E6-component.md) | component - a system seen as a part of a containing system, with one duty at its altitude | You are deciding what a change can reach, what a part of a system owes its neighbours, or which neighbouring parts count as adjacent |
<!-- END GENERATED -->
