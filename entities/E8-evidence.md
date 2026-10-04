---
id: E8
category: entity
title: evidence - something offered to show that a claim holds, which a gate's judge receives and never decides
status: active
hydrate-when: You are about to record, cite or weigh evidence, or you have met a verdict stored where evidence goes
supersedes: []
related: [E7, W0, R2, R3, R4, A1]
---

# E8 - evidence

## Definition

**Evidence** is something offered to show that a claim holds - an artifact, a record or an observation.

At a [gate](E7-gate.md) the claim is the gate's condition, and evidence is what the judge receives.\
The verdict is what the judge decides, and **a verdict is never evidence**: not at its own gate, and not when it is recorded and cited later.

Outside a gate, evidence supports any claim - a design decision, a finding, the admission of an entry - and the same rule holds: what is offered is evidence, and the conclusion drawn from it is not.

---

## Discriminators

**Evidence against a verdict.**\
Evidence goes in; the verdict comes out.\
A verifier's attestation is a verdict with references to the evidence the verifier examined: the references point at evidence, and the attestation is not.\
A director's disposition and a code owner's approval are verdicts too.

**A verdict stored in an evidence slot is still a verdict.**\
The coordination system records verdicts in the same slots as evidence - an attestation written through `attest_evidence`, an approval or a director's decision recorded as a requirement of kind `review` or `freeform`.\
Where the corpus describes such a slot it says *the verdict, recorded in the evidence slot*.

**A cited verdict is still a verdict.**\
A gate that failed stays failed, and a repair under a new gate may cite that failure as the earlier gate's recorded verdict.\
The evidence at the repair gate is what its judge examines - the repair, re-checked with the same or stronger checks; the recorded reason for the failure may shape what the repair must show.

**The author's evidence.**\
An author may offer evidence about their own work, and must: tests run, checks passed, records kept.\
It is evidence, and it never satisfies an independent-agent gate, because the judge of that gate must be someone who did not author the work.

**Measured or inferred.**\
Evidence carries its provenance: whether it was measured or inferred is part of what is offered, and the standing context forbids presenting one as the other.

---

## Boundaries

- **Not the field names of the coordination system.** `evidenceContract`, `evidenceRequirements`, `evidenceAuthority` and `attest_evidence` belong to the live coordination system and keep their names. `evidenceAuthority` names who may close a requirement: where its value is `verifier-attestation` or `director-ratification`, that is the gate's judge. Where it is `executor-evidence`, the author closes the requirement on their own evidence; that closure is not a gate, and any gate on the work, by a machine or an independent agent, sits elsewhere.
- **Not a domain.** A domain names where a unit of work's evidence lands; it is the surface, not the evidence.
- **Not an attestation by its author.** An executor's own record of what they did - a branch-protection check, a hazard checked for - is evidence, whatever it is called in a template; calling it an attestation does not make it a verdict.

---

## Relations

| Edge | Target | Reading |
|---|---|---|
| received by | [`E7`](E7-gate.md) | a gate's judge receives evidence and decides a verdict |
| contracted by | [`W0`](../work-types/README.md) | each work-type's evidence contract names the evidence a unit of work must offer |
| offered by | [`R2`](../roles/R2-engineer.md) | the engineer offers evidence about their own work |
| judged by | [`R3`](../roles/R3-verifier.md), [`R4`](../roles/R4-director.md) | the verifier and the director decide verdicts on evidence they did not author |
| grounded by | [`A1`](../axioms/A1-sovereign-state-transparency.md) | the state a claim rests on must be visible from one place |

---

## Why precision matters

"Evidence" was used in eight senses across about five hundred lines, and in a few of them the judge's verdict was filed as evidence: a verifier's attestation stored in an evidence slot, a director's disposition called "the closing evidence".\
Once a verdict counts as evidence, the line between offering proof and judging it disappears, and an author can appear to pass their own gate by recording their own conclusion where evidence goes.\
Holding evidence as what a judge receives keeps that line where the independence rules need it.
