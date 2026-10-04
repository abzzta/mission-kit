# Investigation - components - 2026-10-04

The partition and gaps the C0 charter carried in its Territory until the charter-as-asymptote ruling, moved here unchanged.\
A dated analysis of the population against the charter's end state, scope and growth policy; a later investigation may partition the set differently.\
Gaps found here are carried as backlog rows.

---

## Partition and gaps (from the charter at 1a862fe)

What this population claims to cover, stated so that a gap in it is a finding rather than a silence.\
Required of any [`set`](../../entities/E3-set.md), and this is the corpus's first.

**The territory is the duty space of the systems this organisation builds** - every concern that appears as a box in an architecture's anchored core, at the altitude where a box has one duty.

The denominator is therefore **derivable rather than invented**: it is the union of anchored cores across the architectures this organisation holds.\
A duty declared in one architecture is a candidate; a duty declared in several and filled by no component is a gap with a name, a count, and somewhere to put it.

**Three properties follow, and none of them can be held by a member.**

- **Coverage.** The fraction of declared duties that a component fills. A miss is information only once this has a denominator, which is why `C0`'s admission rule could not previously be run.
- **Orthogonality.** No two components' duties intersect, and none is a composition of others already present. Every entry can pass the one-duty test individually while the population overlaps, so this is checked across the set or not at all.
- **Duplication.** One duty implemented in several projects with no component. Found by reading architectures rather than components, which is why no entry can surface it.

**The intended end state is a managed set of orthogonal duties - a few dozen - covering most of what a system needs, with configuration and glue as the remainder.**\
That is a target rather than a rule, and the distinction matters: a registry of forty perfectly orthogonal components that no project assembles from has failed, where ten overlapping ones everybody uses has not.\
Orthogonality serves adoption; where they conflict, adoption wins and the overlap becomes a finding rather than a refusal.

**This territory is not yet measurable.**\
It needs several architectures carrying declared anchored cores to join against, and this corpus currently holds one.\
The denominator is identified and not yet computable, which is a gap in the evidence rather than in the definition.

**Gaps found without the denominator.**\
The registry holds one component, [`C1`](../../components/C1-agp.md), routing between application components; two duties are known to have none.\
*Reading frontmatter* - nine of this corpus's tools and three of its schema tests each read entry frontmatter with code of their own, in two languages, and the copies already differ: some check the opening delimiter and some do not, and only one reads a list spread over several lines.\
Two boxes of this corpus's own anchored core, the tools and the schemas, need the duty, and the organisation's machinery is a system like any other, so this is duplication inside the territory.\
*Retrying and idempotency* - [`A11`](../../axioms/A11-cognitive-minimalism.md) names them as primitives that should exist once, and neither a component nor a pattern holds them.\
Both are recorded, not built: a component is admitted when a consumer needs it, not because a gap was named.

**Also moved: the population statement from the charter's `Composition` section.**

With one member the graph has no edge yet; the properties the territory names - coverage, orthogonality, duplication - are how members relate, and they are checked across the set because no member can hold them.

---

## Gaps

- The territory's denominator - the union of declared anchored cores - is identified and not computable, because the corpus holds one such architecture - trigger: next investigation of this set.
- Reading frontmatter: nine tools and three schema tests each read entry frontmatter with their own code, in two languages, and the copies differ - trigger: the rebuild of the charter checker, which will be a tenth reader (`docs/audits/M5.5-12-C0.md`).
- Retrying and idempotency: named by `A11` as primitives that should exist once, held by no component or pattern - trigger: next investigation of this set.
