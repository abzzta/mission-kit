---
id: P0
category: pattern
title: Patterns - recurring solution shapes, and what separates one from a single good design
status: active
hydrate-when: You are reaching for a known solution shape, or you are deciding whether a design you just built recurs widely enough to be one
supersedes: []
related: [M0, S0, C0, A3]
---

# Patterns - the how-you-shape-it layer

## Purpose

Recurring designs.\
A pattern names the shape of a solution and the forces that make it the right shape, so the next occurrence is recognised rather than rediscovered.

The set exists because a shape that is not written down is rebuilt slightly differently each time, and each rebuild pays again for what the last one learned.\
It is how the organisation's design experience compounds ([`A14`](../axioms/A14-compounding-learning.md)) instead of living in whoever built it last.

---

## Territory

This set covers **the recurring design problems in any system the organisation engineers**, partitioned by the force a shape resolves - the pressure that makes the naive design go wrong.\
The claim is set by what the set is for; a force with no pattern is a gap, not a reason to narrow the claim.

| Force | What goes wrong without a shape | Members |
|---|---|---|
| **Divergence** | two things that must agree are maintained apart and drift | [`P3`](P3-twin-parity-by-generation.md) twin-parity by generation, [`P5`](P5-verbs-as-data-surface.md) verbs-as-data surface |
| **Duplication against premature abstraction** | a mechanism two consumers need is copied, or abstracted before a second consumer exists | [`P4`](P4-neutral-core-tenant-composition.md) neutral core and tenant composition |
| **Ordering across a boundary** | one component runs before another it depends on is ready | [`P2`](P2-node-label-gate-cross-component-contracts.md) node-label gate |
| **Variation in environment** | one procedure must run on more than one substrate | [`P1`](P1-path-a-path-b-dual-substrate.md) Path A / Path B |
| **Failure and recovery** | a partial failure leaves work half-done, or a retry does it twice | **none - gap** |
| **Interface evolution** | an interface changes under consumers that adopted an earlier form | **none - gap** |
| **Concurrent change** | two writers act on shared state at once | **none - gap** |
| **Untrusted input** | input from outside the system is acted on as if it were trusted | **none - gap** |

Every member sits in one row, and four rows hold none.

**Gaps tested.**\
A search of patterns and components for retry, idempotency, versioning, concurrency and trust boundaries finds none of these shapes; `P2` mentions a scheduling race only as a cause of its own problem.\
*Failure and recovery* has commitments without shapes: [`A7`](../axioms/A7-resilient-agentic-operations.md) requires work to recover, and [`A11`](../axioms/A11-cognitive-minimalism.md) names retries and idempotency as primitives that should exist once - where a reusable artifact would serve, the gap is in components as well.\
*Interface evolution* is where a version range commits a consumer in advance, and no shape says how to change an interface under one.\
*Untrusted input* is the axioms' own named gap, with no shape here either.

---

## What earns an entry

Three tests, all of which must pass.

1. **Recurrence across contexts.** The shape has appeared at least twice in situations that do not share an author or a codebase. One occurrence is a design, however good.
2. **Named forces.** The entry states what pressures make the shape correct, not merely what the shape is. Without them the reader cannot tell whether their situation is the one the pattern serves.
3. **A stated cost.** Every pattern trades something. An entry claiming only benefits has not been applied under pressure, and it will be reached for where it does not fit.

The strongest signal is a shape that keeps being rebuilt slightly differently.\
Two implementations that should agree and do not are evidence that the shape is real and that nobody has written it down.

---

## Neighbours

| Neighbour | The question that separates them |
|---|---|
| [Components](../components/README.md) | Is there an artifact to depend on? If the answer is a dependency, it is a component; if it is a structure you reproduce in your own code, it is a pattern. A shape every consumer reproduces by hand may be a component waiting to be built. |
| [Style](../style/README.md) | Does it shape a system, or the form of an artifact a reader meets? A layout for a document is style. |
| [Axioms](../axioms/README.md) | Is it a limit every design is built toward, or one shape that serves such a limit where its forces apply? |
| [Methods](../methods/README.md) | Is it a procedure that produces a result, or the shape of the thing being produced? |
| [Skills](../skills/README.md) | Is it a capability an agent executes, or a design an engineer recognises and builds to? |

**`P1` sits on the style boundary.**\
It shapes a workflow document rather than a system, and [`S7`](../style/S7-alternative-paths-separate-blocks.md) is how its paths render; by the question above it reads as style.\
It stays here until the boundary is ruled on.

---

## Pattern against anti-pattern

This layer holds shapes to build, and it deliberately does not hold shapes to avoid.\
A failure mode belongs in the `Faults` section of whichever entry owns the invariant it breaks, where the reader meets it while doing the thing that risks it.\
Collected separately, failure modes are read only by people already looking for them, which is never the people about to commit one.

---

## Composition

Patterns compose by citation and none overrides another; a design may apply several at once, each where its own force is present.

- **`P3` and `P5` share a shape:** one master source, every other view derived from it, and a real check holding the derivation - regenerate-and-diff in `P3`, the live handler map in `P5`.
- **`P4` holds a shared mechanism under the same discipline:** one source of the mechanism, and a gate - a scan of the core's source - that keeps it honest.
- **All three warn against the fake check:** a gate that tests existence, imports or tokens instead of the property it claims passes while the property fails.
- **Patterns lean on other layers:** `P2`'s label keys are part of a producer's published contract under [`S3`](../style/S3-producer-consumer-doc-split.md), and `P1`'s paths are rendered by `S7`.

---

## Faults

- **The pattern of one.** A single project's design promoted for elegance. It carries that project's assumptions invisibly, and the second adopter inherits them.
- **The pattern that should be a component.** A shape reproduced by hand in every consumer when one artifact could have been depended on. Each copy is then free to drift.
- **The crowded force.** Several patterns for one kind of problem while whole kinds have none, so the set reads as complete to anyone who only meets the crowded kind.
- **The document convention in pattern clothing.** A layout for an artifact filed here, where writers applying style will not look for it.

---

## Index

<!-- BEGIN GENERATED: entries. Run tools/generate-index.mjs; do not edit by hand. -->
| ID | Title | Hydrate when |
|---|---|---|
| [P0](README.md) | Patterns - recurring solution shapes, and what separates one from a single good design | You are reaching for a known solution shape, or you are deciding whether a design you just built recurs widely enough to be one |
| [P1](P1-path-a-path-b-dual-substrate.md) | Path A / Path B labeling for dual-substrate workflows | You are authoring a workflow document that supports more than one execution path |
| [P2](P2-node-label-gate-cross-component-contracts.md) | Node-label gate for cross-component contracts | You have producer and consumer components co-scheduled onto the same nodes |
| [P3](P3-twin-parity-by-generation.md) | Twin-parity by generation - one master, generate the other, gate the round-trip | You have a spec and data, or a view and source, that must not disagree |
| [P4](P4-neutral-core-tenant-composition.md) | Neutral core + tenant composition - shared mechanism, injected semantics, promote down by evidence | A second domain is about to grow a mechanism the first already has |
| [P5](P5-verbs-as-data-surface.md) | Verbs-as-data surface - one manifest drives dispatch, docs, and validation | You are designing a tool surface where each operation needs its own contract |
<!-- END GENERATED -->
