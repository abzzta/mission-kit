---
id: T1
category: trait
title: stateful - the system owns and mutates persistent state
status: active
hydrate-when: You are deciding whether your system holds state that something else depends on being true
supersedes: []
related: [T0]
---

# T1 - stateful

## Definition

A system is **stateful** when it owns and mutates state that persists beyond a single operation and that something else treats as authoritative - a store, a ledger, a backplane, a memory an agent writes to and reads back across sessions.

---

## Test

Does the system write something it will later read back, and would anything act differently if that record were wrong?\
If both are yes, it is stateful.

---

## Boundaries

- **Not stateful:** a pure function, a stateless request handler, a build step whose output is regenerated rather than consulted.
- **Stateful, often missed:** an agent that keeps notes for its next session. The notes are persistent state, and the next session acts on them.
- **Not decided by storage alone:** a cache that can be dropped without changing any decision is not authoritative, so it does not make a system stateful.

---

## Axioms it brings into force

Generated from each axiom's `applies-to`, the field that decides binding.

<!-- BEGIN GENERATED: entries. Run tools/generate-index.mjs; do not edit by hand. -->
| ID | Title | Hydrate when |
|---|---|---|
| [A1](../axioms/A1-sovereign-state-transparency.md) | Sovereign State Transparency | You cannot see the current state of the system from one place and are about to infer it |
<!-- END GENERATED -->

An axiom binds a system that has *any one* of its traits, so each axiom above also binds systems that have none of this trait but one of its others.

---

## Why the obligation follows

Persistent state is where a system can be confidently wrong for a long time.\
A transient error is overwritten by the next operation; a persisted one is read back and acted on, again and again, until something notices.
