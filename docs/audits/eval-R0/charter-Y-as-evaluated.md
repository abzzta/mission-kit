---
id: R0
category: role
title: Roles - the M axis (pure essence + type-determined authority)
status: active
hydrate-when: You need to know which role may attest, approve or decide on a piece of work
related: [W0, D0, A6, A13, E1]
---

# Roles - the M axis

## Purpose

Four roles, each defined as **essence + engagement-mode**, independent of domain and work-type so composability determines the aggregate.\
Read `work-types/README.md` for the composition rule that combines these with the domain and work-type axes.

A role is an **authority over work**, not a person.\
It says who may decide, build, assure or ratify, so that a unit of work can be claimed and closed without anyone routing it by hand.

---

## Territory

This set covers **the authorities a unit of work needs, from the intent behind it to its ratification.**

A unit of work passes through five positions, and each needs someone with authority to act at it.\
The positions are the denominator: a gap is a position with no role, or one that some organisations cannot fill.

| Position | The authority it needs | Role |
|---|---|---|
| **Intent** | to say what is wanted and why | [`R4`](R4-director.md) director |
| **Shape** | to decide how the system is structured and how its parts compose | [`R1`](R1-architect.md) architect |
| **Implementation** | to turn a design into a working, landed artifact | [`R2`](R2-engineer.md) engineer |
| **Assurance** | to prove or refute a claim about work it did not do | [`R3`](R3-verifier.md) verifier |
| **Ratification** | to accept the result as the organisation's own | [`R4`](R4-director.md) director |

Every position has a role.\
The director holds two, at either end, because intent and its acceptance are the same authority exercised before and after the work.

**Operating shipped work is not a gap.**\
Landing, deploying, probing live behaviour, holding a production window and restoring a fleet are each work-types, and each names existing roles as eligible.\
Operation is implementation and assurance applied after release, not a sixth authority.

**One position cannot be filled by an organisation of one.**\
Assurance is the only authority defined by being exercised by someone *other* than the actor who did the work.\
An organisation of a single agent can hold every other position, and cannot hold this one: it has no second actor.\
Its independence checks therefore fall to deferral or to the director, which concentrates every assurance decision on the scarcest attention the organisation has.\
That is the role-level face of backlog `B21` - nothing protects a lone agent against its own error - and the trait the gap would need is recorded in [`T0`](../traits/README.md).

---

## Purity is on ESSENCE only

A role's **essence** (lens / stance / authority) is invariant across every instance - that is the purity test.\
But the **authority component** of its engagement-mode is a function of the *work-type*, not the role: `engineer x build-a-slice` produces `executor-evidence`, while `engineer x code-owner-approve` produces non-author independence-evidence.\
That is why each role frontmatter carries `evidenceAuthorities` as a **set**.\
Do NOT treat "engineer => executor-evidence" as a generation invariant - the authority is composed from `(role x work-type)`.

---

## Director is charter-mandated but non-composing

`architect / engineer / verifier` share the substrate engagement-mode "claim -> execute work-nodes" and participate symmetrically in `roleEligibility` unions.\
**Director does not** (`composing: false`): it steers/ratifies/gates/curates *outside* the claim->execute loop, is never idle-poolable, and is the sole `director-ratification` authority.\
It is retained as a first-class role, by charter mandate and [`A13`](../axioms/A13-director-intent-amplification.md), but marked non-composing so readers never expect symmetric unions.\
Director-ratification cannot be satisfied by architect narrative - it requires a `DirectorSignal` / `Decision` / `Confirmation` or explicitly documented ratified delegation.

---

## How the roles compose

**A role is held, not embodied.**\
One actor may hold several roles, and in a small organisation usually does.\
An organisation of one agent holds architect, engineer and verifier at once, under a director.

**The constraint is narrower than "one actor, one role", and it is about identity, not role.**\
The same identity may not be both the executor and the independent verifier of one piece of work.\
Holding both roles is lawful; exercising both on the same work is not.

**When there is no second actor, an independence check never falls to the same agent.**\
It waits for an independent seat, or goes to the director.\
The rule is constraint 9 of the canonical constraint set, authored once in [`W0`](../work-types/README.md) and cited here rather than restated.

**Roles compose with work-types and domains, and authority is decided by the composition.**\
`role x work-type x domain` generates a unit of work; the role alone does not determine what evidence it may produce, which is the point of the next section.

---

## Backstop is not a role

Backstop is a **work-type** (`backstop-a-prod-window`) with a `backstop:true` flag, not a role and not a separate overlay layer.\
See `work-types/README.md`.

---

## Axiom alignment

- **A6 (Frictionless Agentic Collaboration):** the role axis is what lets `role x
  work-type x domain` compile to a claimable WorkItem, removing manual routing.
- **A13 (Director Intent Amplification):** the axis carries the Director as a
  first-class but non-composing authority, protecting non-delegable intent.
- **A3 (Sovereign Composition):** roles are pure on essence, so composability -
  not enumeration - determines the aggregate.

---

## Faults

Population faults - visible across the set and invisible to any one role.

- **The role read as a person.** A role treated as a seat one agent occupies, so a small organisation concludes it cannot use the set, or a large one gives each role its own agent and calls that independence. Roles are authorities; independence is about identity.
- **The self-attesting identity.** One identity exercising both executor and verifier authority on the same work. Every role can be correctly held while this happens, which is why it is a population fault.
- **The director by narrative.** Ratification inferred from an architect's account rather than from a director signal or a documented delegation. It reads as authority and carries none.
- **The concentrated position.** In a thin organisation every independence check falls to the director, so the scarcest attention becomes the bottleneck for every gate. The degradation rule is correct; its cost is real, and it is the cost to plan for.
- **The authority with no role.** A decision the work needs that no role is entitled to make, so it is made by whoever happens to be acting. The territory exists to make this visible.

---

## Index

<!-- BEGIN GENERATED: entries. Run tools/generate-index.mjs; do not edit by hand. -->
<!-- END GENERATED -->
