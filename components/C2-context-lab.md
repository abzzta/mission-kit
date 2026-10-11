---
id: C2
category: component
title: context-lab - experiments on the context given to language-model agents
status: active
hydrate-when: You are about to judge whether instructions, documents or skills you give agents change what they do, or to build a harness that runs agents to find out
sovereignty: internal
supersedes: []
related: [C0, A3, A14, M2]
---

# C2 - context-lab

Sovereignty is `internal`, so a fit gap here is pressure that routes upstream rather than a constraint a consumer works around.

---

## Duty

Run experiments on the context language-model agents are given, and report what each experiment showed.

That is the whole duty.\
It does not also own a project's experiments, keys or conclusions, edit a project's working context, rank models, or decide for a project - each of those is either the project's or a second concern.

At the altitude below this one it is twenty-one units, each with one duty, listed in its architecture's anchored core.\
That is the anchored core of one box, per [`C0`](README.md#duty-is-singular-at-an-altitude), not twenty-one duties.

---

## Contract

What a consumer depends on, and what it may not reach past.

| surface | contract |
|---|---|
| project pack | everything project-specific - experiments, suites, context sources and variants, arms, population, masks, isolation probes - enters through one directory the core validates before anything runs; nothing project-specific is read from anywhere else |
| hooks | project scripts run at four fixed points, each with a stated contract, in a sandbox with no network and bounded reads and writes |
| delivery | each arm's context is a local copy at a pinned revision, every published address rewritten to it, and a canary proving it was read |
| isolation | every arm and every judge on every runtime is probed before any cell runs; an arm without a pass never runs |
| runtimes | each agent runtime sits behind one adapter returning one common outcome form; driven runtimes run in a filesystem sandbox |
| judging | code decides what a check can; every outcome is judged by the model families other than its agent's, never its own |
| record | every run writes a record from which its result re-tallies exactly, and a run of an experiment unrecorded or changed after recording is marked exploration |

The project pack and the runtime adapter are the two seams: a new project is a new pack, and a new runtime is a new adapter, neither a change to the core.

---

## Reference

The sovereign repository, `https://github.com/apnex/context-lab`, with its vision in `VISION.md` and its architecture in `docs/ARCHITECTURE-TARGET.md`.

The architecture **declares its own instant**, so this reference stays true without a version recorded here.\
What is built is stated by its completed deltas under `docs/DELTAS/`.

Do not read the implementation to judge fit.\
If duty, contract and fit criteria are insufficient to decide, that is a defect in this entry.

---

## Fit criteria

### Does my project want this at all

Read this half first, before knowing anything about context-lab.\
If none of it describes you, stop here.

- Your agents work from guidance you write - instructions, documents, skills - and you change it.
- You have asked whether a change helped, and the answer came from one session, from the author of the change, or from the same model judging its own work.
- You are about to write a script that launches agents, captures what they did and scores it - **especially if you have written one before, on another project.**

The third is the strongest signal: two projects in this organisation each grew such a harness, one partly copied from the other, before this component existed.

### Does it meet my requirement

- The context is the thing that varies, and everything else must be shown held fixed: the revision, what each agent received, and that nothing withheld reached it.
- Outcomes are behaviour as well as answers: what an agent did in a repository, not only what it said about the guidance.
- A result must be repeatable from its record, and honest about its status.

**It is the wrong tool when**

| you need | reach elsewhere, because context-lab is |
|---|---|
| a ranking of models | not a benchmark - a model is a factor in an experiment, never its subject |
| a score to tune guidance until it passes | not a target - results are evidence about context, judged on experiments a rewrite was not written against |
| agents run against live systems or real data | not built for it - experiments touch material built for them, unless its owner consents |
| a verdict on whether a change may land | not an authority - a comparison flags; the project's own authority decides |

---

## Adjustment policy

Internal and sovereign, so a fit gap has somewhere to go.

1. **Record the gap where both sides can see it.** A project that cannot express an experiment in a pack has found a gap in the pack's contract, and the evidence belongs in context-lab's backlog.
2. **Close it at a seam where one exists.** A new runtime is an adapter against the common outcome form, proved by its conformance suite; project-specific measurement is a hook. Neither is pressure on the core.
3. **Otherwise adjust upstream, or fracture.** A gap that reveals a second duty is a second component, not a feature.
4. **Never fork.** A copied harness adjusted in place is the failure that founded this component.

---

## Edges

**Composes** - twenty-one units at the altitude below this entry, each with one duty, in the anchored core of its architecture: pack checker, experiment register, selector, variant builder, arm composer, workspace builder, runtime adapter, isolation prober, phase driver, answer parser, validity classifier, code measurer, blinder, judge panel, pair chooser, human panel, tally, threshold deriver, comparator, candidate writer, run conductor.

**Composed-by** - nothing yet.

**Used by** - mission-kit, whose standing evaluation suite is a pack for it; zorg, whose evaluations are to become one.\
This registry's vocabulary has no edge for one system using another's contract, and `composes` here means containment ([`B81`](../docs/BACKLOG.md)).

None of the twenty-one is registered here.\
The runtime adapters are the likeliest first: running one isolated agent on any runtime and returning its events in one form is useful to anything that drives agents.
