---
id: D7
category: domain
title: product-data - the data the product holds
status: active
hydrate-when: You are changing the data a product holds - applying a schema change to it, or repairing, migrating or deleting its records
subjectSurface: the product's own stored data - the records it holds and the schema they are held in, as they exist live
evidenceResolvesAgainst: the records before and after, migration and repair logs, row counts and integrity checks, backups and restore points
freeForTypes: [fix-a-bug-or-repair, retire-or-hard-cut, publish-deploy-or-canonicalize, verify-gate-reactive, audit-a-surface, adversarial-design-review-upstream, run-a-live-probe-or-smoke, design-a-contract-or-invariant]
pinnedForTypes: []
related: [D0, D1, D2]
---

# D7 - product-data

## Subject-surface
The data a product holds: its records, and the schema they are held in, as they exist live.\
Evidence resolves against the records themselves - before and after - and against migration and repair logs, row counts, integrity checks, backups and restore points.

---

## Freedom
A **free** domain, distinct from its two neighbours by a different evidence contract.\
`delivery-code` holds the product's source; this domain holds what that source has written.\
`distribution` holds the estate the product runs on; this domain holds the records on it.\
A schema migration is the canonical split: writing it is `delivery-code`, and applying it to the records is `product-data` - as `merge-and-land` and `publish-deploy` split the git plane from the artifact plane.

---

## Axiom alignment
- **A1 (Sovereign State Transparency):** structure changes only through a formal,
  declared refactor - a schema migration is that refactor, and its truth is the
  records before and after, not the migration's description of itself.
- **A9 (Chaos-Validated Deployment):** a migration applied to production is a change
  promoted to production; it is proven against interruption and concurrent writes
  in a sandbox, with a restore point, before it touches real records.
