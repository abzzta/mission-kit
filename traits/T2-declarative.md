---
id: T2
category: trait
title: declarative - the system's behaviour is declared and reconciled toward, not scripted
status: active
hydrate-when: You are deciding whether your system is driven by a specification it reconciles toward
supersedes: []
related: [T0]
---

# T2 - declarative

## Definition

A system is **declarative** when its desired behaviour is expressed as a specification of an end state, and the system works continuously to make reality match it - rather than executing a sequence of imperative steps once.

---

## Test

If the running system drifted from what was intended, would something notice and move it back, by reading a declaration?\
If yes, it is declarative.

---

## Boundaries

- **Not declarative:** a script run once; a migration; a sequence of commands that leaves no specification behind to reconcile against.
- **Declarative:** a controller reconciling desired against observed state; infrastructure described as code and applied continuously.
- **Partly declarative:** a system with a declared configuration it reads once at start and never reconciles. It has a specification and no reconciliation, so it does not carry this trait.

---

## Axioms it brings into force

Generated from each axiom's `applies-to`, the field that decides binding.

<!-- BEGIN GENERATED: entries. Run tools/generate-index.mjs; do not edit by hand. -->
| ID | Title | Hydrate when |
|---|---|---|
| [A2](../axioms/A2-isomorphic-specification.md) | Isomorphic Specification | Declared intent and running reality have drifted, or you are about to change one without the other |
<!-- END GENERATED -->

An axiom binds a system that has *any one* of its traits, so each axiom above also binds systems that have none of this trait but one of its others.

---

## Why the obligation follows

A declarative system has two representations of itself - the declaration and the running reality - and the obligation is that they not silently diverge.\
An imperative system has only one, so it cannot drift from a declaration it never had.
