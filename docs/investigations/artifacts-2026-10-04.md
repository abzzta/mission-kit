# Investigation - artifacts - 2026-10-04

The partition and gaps the AR0 charter carried in its Territory until the charter-as-asymptote ruling, moved here unchanged.\
A dated analysis of the population against the charter's end state, scope and growth policy; a later investigation may partition the set differently.\
Gaps found here are carried as backlog rows.

---

## Partition and gaps (from the charter at 1a862fe)

This set covers **every document an engineering lifecycle produces whose shape recurs across projects** - each position in the lifecycle loop, below, at the altitude of a system, and the altitudes and transitions around it.\
The claim is set by what the set is for; a position, altitude or transition with no type is a gap, not a reason to narrow the claim.

| Position | What the document carries | Type |
|---|---|---|
| **Inlet** | the enduring purpose a programme is measured against | [`AR6`](../../artifacts/AR6-vision.md) vision |
| **State, at two instants** | where a system is, and where it is going | [`AR1`](../../artifacts/AR1-system-architecture.md) system architecture |
| **Selection** | the triaged legal next moves, for the director to choose | [`AR3`](../../artifacts/AR3-board.md) board |
| **Transition** | a declared, gated change between two states | [`AR2`](../../artifacts/AR2-delta.md) delta - its closing half unspecified |
| **Rulings** | what was decided, by whom, and what it affects | [`AR4`](../../artifacts/AR4-decision-record.md) decision record |
| **Deferrals** | what was not done, and when it returns | [`AR5`](../../artifacts/AR5-backlog.md) backlog |
| **Below a system** | one component's configuration and implementation detail | **none - gap, held** |

Every type sits in one row, and one row holds none.

**Gaps tested.**\
*The component altitude* sits below `AR1` and above code, and has no type.\
It was deferred, then re-triaged and **held**: a concern can recur widely, and diverge widely, while no section appears in a majority of its instances, and divergence at scale proves the need without settling the shape.\
The two questions that would settle it - how a component specification binds upward to the duty its architecture declares, and where its boundary with code sits - are currently answered incompatibly rather than merely left open, which is a stronger reason to wait than silence would be.\
*The closing half of a delta* - the statement of whether its to-state was reached - is left unspecified in `AR2`.\
The only shape for it is a closeout template held inside a coordination-substrate skill, [`K23`](../../skills/K23-workgraph-arc-closeout.md), which fails the cross-project test as written; that is the *template in the toolbox* fault below.\
*Intent captured before a design* has a shape only in [`K5`](../../skills/K5-survey.md)'s survey envelope; `AR4` places it as a section of a decision register, so it is an argued candidate rather than a settled gap.\
Gaps are recorded rather than filled speculatively, which would be Speculative Surface at document scale.

**Also moved: the placement of each member in the loop, from the charter's `The loop` and `Why the loop, and not a document list` sections, where positions are now named rather than members.**

```text
        AR6  vision                            the inlet; nothing upstream of it
          |
          |  shapes the target, and outlives it
          v
   +--> AR1  @ target  <------- amend -------  AR4  decisions
   |      |                                         ^
   |      |  the gap                                |  execution emits
   |      v                                         |
   |    AR3  board  <------- open rows ------  AR5  backlog
   |      |                                         ^
   |      |  director selects                       |  execution defers
   |      v                                         |
   |    AR2  delta  --------------------------------+
   |      |
   |      |  exit criteria, gate-checked
   |      v
   +--- AR1  @ now                             derived, never hand-authored
```

| Position | Answers | Without it |
| --- | --- | --- |
| [`AR6`](../../artifacts/AR6-vision.md) | what is this for, and what will it not become | the target is derived from nothing, and the board has no axis to rank against |
| [`AR1`](../../artifacts/AR1-system-architecture.md) | where we are, where we are going | drift is undetectable, because there is no target to diff against |
| [`AR3`](../../artifacts/AR3-board.md) | what may we do next, and what is it worth | the next move is chosen implicitly under local pressure |
| [`AR2`](../../artifacts/AR2-delta.md) | what exactly changes, and how do we know it landed | progress is reported rather than measured |
| [`AR4`](../../artifacts/AR4-decision-record.md) | what was ruled, by whom, and what it affects | rulings are re-litigated, and their reasons are gone |
| [`AR5`](../../artifacts/AR5-backlog.md) | what did we consciously not do, and when does it return | deferral is indistinguishable from forgetting |

---

## Gaps

- The component altitude, below a system and above code, has no type; held - trigger: the two settling questions - how a component specification binds upward to its declared duty, and where its boundary with code sits - stop being answered incompatibly (held as `B47` in `docs/BACKLOG.md`).
- The closing half of a delta, the statement of whether its to-state was reached, is unspecified; its only shape is a skill-held closeout template - trigger: as recorded in `AR2` and `B52` (`docs/audits/M5.5-11-AR0.md`).
- Intent captured before a design has a shape only in a skill's survey envelope; an argued candidate, housed as a decision-register section - trigger: a project whose intent capture has no register to sit in (`docs/audits/M5.5-11-AR0.md`).
