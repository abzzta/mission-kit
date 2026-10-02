---
id: D0
category: domain
title: Domains - the N axis (subject-surfaces, bimodal freedom)
status: active
hydrate-when: You are placing a piece of work on the domain axis and need the subject surfaces
related: [W0, R0, A1, A3, A5, T0]
---

# Domains - the N axis

## Purpose

Six **subject-surfaces**: a domain names *what a node's evidence resolves against*.\
The work-*mode* is carried by the work-type, never by the domain - a mode-domain (e.g. `verification`) would double-count with the mode-encoding work-type (`verify-gate` *is* verification) and break orthogonality.

A domain answers one question about a unit of work: *where does its evidence land?*\
It is what makes two pieces of work comparable - a verification of the release channel and a verification of the governance substrate are the same kind of work on different surfaces, and the domain is what tells them apart.

---

## Territory

This set covers **the surfaces an engineering organisation's work lands on** - every place a unit of work's evidence can resolve, less one gap recorded below.

The surfaces group by which part of the organisation they belong to, and those parts are the denominator a gap is checked against.

| Part | Where evidence resolves | Domain |
|---|---|---|
| **The product** | the delivered codebase - source, changes, tests | [`D1`](D1-delivery-code.md) delivery-code |
| **Its delivery** | released artifacts and how they reach consumers | [`D2`](D2-distribution.md) distribution |
| **The toolchain** | the harness that builds, launches and hosts the work | [`D3`](D3-tooling-harness.md) tooling-harness |
| **The control plane** | who holds authority, and how work is coordinated | [`D4`](D4-authority-governance.md) authority-governance, [`D5`](D5-coordination-substrate.md) coordination-substrate |
| **The knowledge** | what the organisation durably knows | [`D6`](D6-knowledge-methodology.md) knowledge-methodology |

Every domain sits in exactly one row.\
The control plane holds two, because authority and coordination have different evidence: a ruling resolves against a decision record, a coordination change against the state of the work itself.

**A gap the territory exposes: the product's own stored data.**\
Work on the data a product holds - applying a schema migration to live data, repairing bad records - resolves evidence against the records themselves, before and after.\
`delivery-code` covers the migration's code and not its application to the records.\
`distribution` covers the rolled-out estate - the machines a product runs on - and not the records it holds.\
The control-plane and knowledge domains resolve against records of their own substrates, not the product's.\
So everything a data migration does to the records has no domain, and two people placing it would reasonably disagree.

**Gaps tested and not found.**\
*Infrastructure* - provisioned machines and networks - is covered, by the same evidence rule as everything else: provisioning code in the product's codebase is `delivery-code`, in the harness it is `tooling-harness`, and the rolled-out estate is `distribution`.\
That is the difference from data: applying infrastructure changes the estate, which `distribution` covers, and applying a migration changes the records, which nothing does.\
*Incidents* are not a surface at all; see below.

---

## Bimodal freedom (stated, not hidden)

Orthogonality of the domain axis is **partial**, and the taxonomy says so:

- **free** - object-level build/ship/assurance work *acts on* a surface, so the
  domain is a free, discriminating choice (`verifier x audit-surface x
  distribution` != `... x authority-governance`, a role x work-type x domain triple). No work-type is pinned to D1/D2/D3, so they are only ever reached this way.
- **pinned** - meta/substrate work whose *type names its own surface*: the
  domain is a constant function of the work-type (N=1), so the generator does
  not vary it. Which work-types are pinned, and to which domain, is declared on
  each work-type; the lists domains carry are not consulted.

D4/D5/D6 remain first-class domains (not deletions) because they are still valid **free** targets - every one of them can be audited as a surface in its own right.\
`domainFreedom` therefore lives on the **work-type**, not the domain.

---

## Tie-break rule for cross-surface fixes

When a fix in one surface serves another (e.g. a `tooling-harness` prompt-table fix that exists to serve `distribution`), **the evidence-target wins**: the domain is the surface the change is made to - where its diff lands - not the surface whose benefit motivates it.\
That example is `tooling-harness`.\
This makes cross-surface composition deterministic for two independent generators (A1).

---

## How domains compose

**The work-type owns the pairing.**\
Which domains a work-type may act on is declared on the work-type, and a pairing outside that list is rejected - constraint 3 of the canonical constraint set in [`W0`](../work-types/README.md), cited rather than restated.\
Whether the domain is free or pinned is also a property of the work-type.\
Domain entries carry lists of the work-types they admit; no rule consults those lists, and where they differ the work-type governs.

**Domains and traits are orthogonal.**\
A domain is where work lands; a [trait](../traits/README.md) is a characteristic of the system being worked on, which decides whether axioms bind it.\
The same domain can be worked on in a stateful system or a stateless one.\
`applies-to` decides *whether* an axiom binds, and the domain decides *what it demands on that surface*; folding one into the other collapses an axis.

**Axioms bind domains one way only.**\
A domain cites the axioms it must satisfy; no axiom names a domain, because that would couple a stable invariant to a mutable taxonomy.

---

## Not a domain: incident-recovery

The domain of an incident is the surface it *hit* - an incident is not itself a subject-surface.\
See `work-types/README.md` (recover-incident posture note).

---

## Axiom alignment

- **A1 (Sovereign State Transparency):** a domain names what a node's evidence
  resolves against, keeping work-truth queryable rather than trapped in prose.
- **A3 (Sovereign Composition):** `domainFreedom: free|pinned` states
  orthogonality honestly (partial for meta-types) instead of manufacturing false
  symmetry - an honest boundary, not a hidden coupling.

---

## Faults

Population faults - visible across the set and invisible to any one domain.

- **The mode-domain.** A domain that is really a mode of work - verification, review, operations - double-counting with the work-type that already carries the mode.
- **The indistinct pair.** Two domains with no difference in what their evidence resolves against. A domain earns its place by a distinct evidence contract, and without one the generator produces two names for the same work.
- **The doubly-declared pairing.** The same pairing stated on both the work-type and the domain, free to disagree. Measured when this charter was converted, the two sides disagreed widely, every disagreement an omission on the domain side; only the work-type's list is consulted.
- **The domain named after a tool.** A surface described by one organisation's particular tools rather than by what it is, so a different team cannot place its own work. Five of the six current members do this in their own entries - every one but `delivery-code` names tools in its subject surface - and it is recorded rather than corrected here.
- **The unresolved surface.** Work whose evidence lands somewhere no domain names, so two people place it differently. The territory exists to make these visible; it records one today.

---

## Index

<!-- BEGIN GENERATED: entries. Run tools/generate-index.mjs; do not edit by hand. -->
<!-- END GENERATED -->
