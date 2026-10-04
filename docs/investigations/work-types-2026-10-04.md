# Investigation - work-types - 2026-10-04

The partition and gaps the `W0` charter carried in its Territory until the charter-as-asymptote ruling, moved here unchanged.\
A dated analysis of the population against the charter's end state, scope and growth policy; a later investigation may partition the set differently.\
Gaps found here are carried as backlog rows.

---

## Partition and gaps (from the charter at 9db6261)

This set covers **the kinds of work an engineering organisation does**, each a verb-family that compiles to a closeable claimable node.\
The kinds group by what the work does, and the groups are the denominator.

| Group | What the work does | Members |
|---|---|---|
| **Build** | changes a system - the product, the harness, or the organisation's own machinery and knowledge | `W1` build a slice, `W2` fix a bug, `W3` retire or hard-cut, `W5` author guard or falsifier tests |
| **Check** | produces evidence about work, its own or another's | `W4` validate locally, `W8` verify gate, `W9` audit a surface, `W10` adversarial design review, `W11` live probe, `W12` meta-validate by dogfooding, `W22` axiom-alignment gate |
| **Land and ship** | moves a change to where it runs or is read | `W6` merge and land, `W7` publish or deploy, `W26` reset or converge the fleet |
| **Approve and decide** | exercises authority over work | `W13` code-owner approve, `W23` capture and ratify a decision, `W24` director walkthrough |
| **Design** | shapes work before it is built | `W14` design a contract or invariant, `W15` convene a council |
| **Keep knowledge** | captures what work taught | `W16` bank an idea, `W17` author a closeout packet |
| **Coordinate** | runs the arcs work happens inside | `W18` seed an arc, `W19` drive an arc, `W20` reconcile a ledger, `W21` repair an arc, `W25` backstop a production window |

Every work-type sits in one row.

**The set grows when the territory finds a gap.**\
This set is not complete and is not expected to be.\
A recurring kind of work that compiles to a closeable claimable node and fits no work-type is closed by adding one, not by stretching a neighbour to cover it, because a stretched work-type carries two evidence contracts under one name; until it exists, the work is recorded against the gap, as a row in the project's backlog ([`AR5`](../../artifacts/AR5-backlog.md)).\
Work that cannot compile to a node - no trigger, nothing to close - is recorded as a routing note instead, as incident recovery is below.\
A new work-type is authored like any entry: from a peer exemplar ([`PC1`](../../practices/PC1-author-from-exemplar.md)), against the entry schema below, landing through the gate; adding one changes how work is generated, so it is ratified by the director.

**Gaps recorded.**\
*Work on the knowledge corpus* is building on its domain, and has no work-type of its own.\
Adding or revising an entry or a tool is a build slice, `W1`, or a fix, `W2`, where a defect has been filed.\
Retiring an entry, a tool or a whole layer deletes it with no stub and records where its duty went, which is a hard cut, `W3`.\
Extending the corpus - adding or retiring a layer - recurs often enough that a work-type of its own may earn its place.\
Procedures that conduct work are cited by only some work-types, and artifacts by fewer; a work-type cites what it can name, and the rest are recorded rather than guessed.

---

## Gaps

- No work-type for extending the knowledge corpus - adding or retiring a layer (`B46`); trigger: a third layer is added or retired, or corpus-extension work needs to be claimed on the coordination substrate rather than performed by hand (`B46`).
- Procedures that conduct work are cited by only some work-types, so the rest cannot be attached by a coordinating system; trigger: next investigation of this set.
- Artifacts are cited by fewer work-types still; trigger: a work-type is authored or revised and its author cannot state which artifact type the work produces, or `B53`'s other triggers.
