---
id: E9
category: entity
title: substrate - the coordination substrate, the system that hands out, runs and gates work, and nothing else
status: active
hydrate-when: You are about to write or read the word substrate, or describe the system that coordinates work between agents
supersedes: []
related: [D5, D4, E7, A6, A11, W0]
---

# E9 - substrate

## Definition

The **substrate** is the coordination substrate: the system that hands out, runs and gates work between agents - the work graph and its lifecycle and messaging, with its blueprints, work items, gates and their completion state, leases and queue.

It is the surface of [`D5`](../domains/D5-coordination-substrate.md), and it is an engineered product of the organisation like any other: it has source, and live state.\
In this corpus the word has this meaning and no other; written alone, *substrate* means the coordination substrate.

---

## Discriminators

**Against the deterministic layer.**\
Code that does what a model need not - the subject of [`A11`](../axioms/A11-cognitive-minimalism.md)'s *deterministic-first* - is deterministic code, and the coordination substrate is one instance of it, not its name.

**Against governance machinery.**\
Rulings, class-grants, code ownership and the records that enforce them are the governance machinery of [`D4`](../domains/D4-authority-governance.md).\
The coordination substrate runs gates and records their verdicts; who holds authority is not its subject.

**Against an environment.**\
Where a workflow runs - Docker Compose or Kubernetes, local or remote - is an *execution environment*, or a *platform* where a family of them is meant.

**Against what is studied.**\
A repository examined by the [`K3`](../skills/K3-repo-audit.md) repo audit is a *project*, the object of study, not something work rests on.

---

## Boundaries

- **Not the layer beneath.** What an abstraction rests on is the layer beneath it, or ground truth.
- **Not a shareable component.** A unit other systems depend on is a [component](../components/README.md).
- **Not durable state in general.** Where a lesson or record is kept is durable state; the coordination substrate holds some of it.
- **Identifiers keep the bare word.** Names the coordination substrate itself defines - the stage names `substrate-closing` and `substrate-closed`, the binding source `discover-from-substrate`, the `substrate:` field in the coordination skills - refer to it and are unchanged.

---

## Relations

| Edge | Target | Reading |
|---|---|---|
| surface of | [`D5`](../domains/D5-coordination-substrate.md) | the domain whose evidence resolves against it |
| neighbour of | [`D4`](../domains/D4-authority-governance.md) | the other machinery of the control plane, which it does not include |
| runs | [`E7`](E7-gate.md) | it records gates and their verdicts; it does not judge them |
| mandated by | [`A6`](../axioms/A6-frictionless-agentic-collaboration.md) | dependencies are declared once and enforced by it |
| instance of the layer in | [`A11`](../axioms/A11-cognitive-minimalism.md) | it is deterministic code, one instance among many |
| generates for | [`W0`](../work-types/README.md) | work-types compile to work items it runs |

---

## Why precision matters

The word carried about nine senses across nearly four hundred lines: the coordination system, deterministic code as against a model, an execution environment, a repository under audit, the layer beneath an abstraction, a shareable component, durable state.\
"The substrate decides" in one axiom could mean the coordination system, any deterministic code, or both, and the style rules used a coordination word for Docker against Kubernetes.\
Holding the word to one system, and naming every other sense plainly, makes each sentence that uses it say one thing.
