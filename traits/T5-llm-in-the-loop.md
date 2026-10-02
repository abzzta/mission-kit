---
id: T5
category: trait
title: llm-in-the-loop - a language model reasons on the system's critical path
status: active
hydrate-when: You are deciding whether model cognition is part of how your system decides or acts
supersedes: []
related: [T0]
---

# T5 - llm-in-the-loop

## Definition

A system is **llm-in-the-loop** when a language model participates in its perception, reasoning or action on the critical path - so that the system's behaviour depends on what the model concludes.

---

## Test

Would the system decide or act differently if the model's output were different?\
If yes, it is llm-in-the-loop.

---

## Boundaries

- **llm-in-the-loop:** an agent; a pipeline that routes or classifies with a model; a system that drafts and then acts on what it drafted.
- **Not llm-in-the-loop:** a system built with model assistance that runs deterministically once built. The model was in the authoring loop, not the system's.
- **Off the critical path:** a model producing a summary nobody acts on is present but not load-bearing, and does not carry this trait.

---

## Axioms it brings into force

[`A5`](../axioms/A5-perceptual-parity.md) Perceptual Parity, [`A11`](../axioms/A11-cognitive-minimalism.md) Cognitive Minimalism, [`A12`](../axioms/A12-precision-context-engineering.md) Precision Context Engineering

An axiom binds a system that has *any one* of its traits, so each axiom above also binds systems that have none of this trait but one of its others.

---

## Why the obligation follows

Model cognition is probabilistic, costly and context-bound.\
The obligations this trait brings govern when a model should be used at all, what it is given, and how far its view of the system may drift from the truth.
