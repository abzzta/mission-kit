---
id: K3
category: skill
title: repo-audit - code-grounded repo audit
status: active
hydrate-when: You are auditing a project and must ground every claim in its source
supersedes: []
related: [M1, RU1]
---

# K3 - repo-audit

## Rule

When evaluating an OSS project (memory layer, framework, runtime, queue, etc.) for adoption or comparison, run a **repo audit** (colloquially: a *nanoprobe*) instead of a survey.\
A repo audit is a code-grounded, evidence-triangulated analysis pinned to a specific upstream tag, structured around a fixed artefact layout and executed as a **five-pass meta-process**:

1. **Sweep** - exhaustively enumerate features from source, configs,
   migrations, and docs. Cite every claim with `path:line` or
   commit SHA.
2. **Triangulation** - every non-trivial claim must be supported by
   at least two independent sources (e.g. code + test, code + config
   schema, code + migration). Single-source claims are marked
   speculative.
3. **Promotion audit** - re-evaluate every feature already cited
   inside another feature's spec against the promotion heuristic
   (own config namespace, own source file >300 LOC, non-trivial
   algorithm, independently configurable - meet >=2 -> promote to
   own spec). Already-cited features are the most-missed.
4. **Synthesis** - apply analysis lenses (locus of enforcement,
   operator impact, failure mode, peer comparison, structural
   criticality, cross-feature invariants) across the spec set to
   surface emergent properties.
5. **Reconciliation** - update summary / coverage / index documents
   to match the delivered spec count, drivers, and methodology.

Descriptive work (per-project audit using project-native vocabulary, no cross-references) and comparative work (cross-project analysis) are **strictly separate passes**.\
Mixing them contaminates the descriptive pass with comparison bias.

---

## Artefacts

Each audit lives under `docs/<domain>/<project>/` with this layout:
```
00-summary.md         - abstract + companion counts + methodology
02-architecture.md    - descriptive project map (project-native
                        vocabulary, no cross-project references)
03-mapping.md         - goal alignment (only if a goal doc exists)
04-assessment.md      - analytical interpretation (separate from
                        descriptive map)
05-coverage.md        - spec index + promotion drivers
features/<name>.md    - one spec per discrete capability
sources.md            - pinned upstream tag + commit SHA + repo URL
```

---

## Rationale

Surveys collapse under their own abstraction - "supports X" hides whether X is a working code path, a stub, or a doc-only claim.\
A repo audit forces every claim back to source, which is the only honest answer to "is this project viable for our use case?".\
The five-pass structure exists because earlier three-pass runs repeatedly missed (a) promotion candidates buried in passing mentions and (b) cross-feature invariants only visible after the spec set is complete.

---

## When to apply

- Choosing between OSS projects for a production dependency.
- Auditing a project's documented vs implemented behavior
  (especially when docs and code might disagree - they often do).
- Building a reusable knowledge artefact about a project for
  future cross-project comparison.
- Any time "supports X" / "has Y" claims need to be verified
  against actual source before commitment.

Skip the repo-audit and use a lightweight survey when:

- The decision is reversible and low-stakes (e.g. dev tooling).
- The project is already deeply familiar to the operator.
- A comparative benchmark (L5) already exists and is fresh.

---

## Tooling

Full procedure, templates, references, and analysis lenses live in the skill tree at [`repo-audit/`](repo-audit/).\
The SKILL.md entrypoint, eight reference documents (rung definitions, evidence triangulation, feature taxonomy, source citation, tier discipline, execution strategy, closing-pass exemplars, project analysis lenses), and seven artefact templates ship together.\
That tree is the canonical source; this entry is the mission-kit index handle.

This skill is also the centrepiece of the `nanoprobe` bundle (see [`bundles/nanoprobe.yaml`](../bundles/nanoprobe.yaml)) - a role composition for operators performing code-grounded project research.
