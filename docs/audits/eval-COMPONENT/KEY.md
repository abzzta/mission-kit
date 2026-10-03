# Opportunistic improvement, component, and axiom wording - probes and key

Written before any of the three changes was drafted, and before any evaluator ran.\
Not shown to evaluators.

## Source of the answers

Director rulings at the review of `M5.5f`:
- **Opportunistic improvement** to adjacent or related components of a system being touched is considered, not mandated. It is judged by compounding learning (`A14`): taken where it will likely yield forward capital without significantly distracting from the near-term goal.
- **Axiom wording** is made consistent with the asymptote reading across all fourteen axioms.
- **Component** is defined alongside system: a boundary within a larger whole. Between them, the two definitions set the scope of duties, interfaces, blast radius and change. Source shape: `AR1`'s anchored core - sovereign components, one duty each, with what each exposes and consumes.

Answers below also use the corpus: `A14` tangent discipline (adjacency, capture; fault *Tangent Sprawl*), `A0` scope rule, `E5`, `C0` *duty is singular at an altitude*, `M5`, `A13`.

Before: export of `ece6d63` without `docs/`.\
After: the amended corpus without `docs/`.\
Scoring 0 / 1 / 2.\
A labelled guess scores at most 1.

---

## C1 - opportunistic improvement, small and large

> "You are fixing a bug in module X of a service. X calls module Y through Y's declared interface, and Y returns an error message so vague that it cost you twenty minutes to diagnose the bug; making it precise is a five-minute change to Y. Module Z, also in the service, keeps important state hidden in process memory; X does not use it, and fixing it is about two days. Your fix to X is written but not yet landed. What do the corpus's axioms ask about Y, and about Z?"

**Precondition:** the after-answer depends on `A0`'s scope passage being amended; before, `A0` says code beside a change is not touched and a gap outside scope is recorded for the director, so "record Y" is the faithful before-answer.

KEY, after: **Y** - optional and justified.\
It is adjacent in `A14`'s sense - X stands on it - and friction-rooted; its yield is deleted future friction, and its cost against the goal is small.\
Make it and record it; or note that `A14`'s default for friction is to mine it and an explicit filed deferral also complies.\
**Z** - not adjacent (X does not stand on it), large, and outside scope: record it with evidence and a revival trigger and leave selection to the director; doing it would be *Tangent Sprawl*.\
A caveat that changing Y's error text may alter Y's contract with other consumers is credited, not required.

2 for Y optional-and-justified (either form) plus Z recorded and not done. 1 for Z right with Y recorded-only, forbidden or mandated; or Y right with Z wrong. 0 for both mandated, or neither recorded.

---

## C2 - what a component is

> "In this corpus, what is a 'component', and how does it differ from a 'system'? Cite where it is defined, or say that it is not."

**Precondition:** the after-answer depends on `AR0`'s *a component's scope is its directory* being reconciled.

KEY, after: a component is **a part of a containing system - a bounded unit with one duty at the altitude where it appears, exposing and consuming declared interfaces**; every component is a system, and *component* names its place within a larger one.\
Naming the registry sense in `C0` - a shareable component used rather than rebuilt - as well scores, not loses.\
KEY, before: **not defined.**\
`AR1` and `C0` agree on one duty per anchored-core box; `AR0` calls a repository a component and says its scope is its directory; `E5` disputes `AR0` on directory scope.

2 for the full answer with a correct citation - after, the definition; before, "not defined" with the disagreements cited. 1 for part, or "not defined" with no citations. 0 for a fabricated citation.

---

## C3 - is the directory the boundary?

> "A component's code lives in `parts/thing/`. Code in `parts/other/` reaches into `parts/thing/`'s internal functions directly; nothing declares an interface between them. Is the directory `parts/thing/` the component's boundary? What, if anything, is wrong?"

KEY: **No.**\
A directory addresses a component's documents and code; the boundary is the declared interface, and here there is none.\
`parts/other/` reaching into internals is an `A3` fault, and with no declared boundary the two are one system for deciding what a change answers to. 2 for no, the declared-interface reason, and the fault. 1 for two of three. 0 for "yes, the directory is the boundary".

---

## C4 - blast radius and adjacency

> "Inside a service, component P exposes a declared interface that component Q consumes. You change P's internals; the interface and its behaviour are unchanged. Which systems' axioms does your change answer to, is Q altered, and is Q a candidate for opportunistic improvement?"

KEY: **P's and the service's**, and any system containing the service.\
**Q is not altered** - the contract it consumes is unchanged.\
**Q is a candidate, not an obligation** - it is a related component of the system the change touches - but weaker than something the change stands on, because `A14` scales payback with proximity under the main line, and the change does not stand on Q. Either "Q is a candidate under the ruling" or "Q is not adjacent in `A14`'s sense, so the case is weaker; record it if worth doing" scores the third part.

2 for all three. 1 for two. 0 for one or none.

---

## C5 - one axiom, read alone

> "Read only `axioms/A3-sovereign-composition.md` - no other file, and do not follow links. You are adding a small feature to a service that already contains a 'utils' module accumulating unrelated concerns. What does A3 ask of your change?"

This probe tests per-axiom wording alone, so links are forbidden; whether the axiom routes to `A0` is a separate property, not scored here.

KEY: **2** - the feature is built as its own one-concern unit and does not add to the accretion module - the change does not move the system away from A3's limit; the existing accretion is not something the change must fully remove; and either it is recorded if out of scope, or, if the feature touches `utils`, the change shrinks it as far as the touch allows.\
**1** - avoids adding to it, but frames A3 as already failed or as pass/fail.\
**0** - "the system violates A3, so it fails" with no direction for the change, or "the module must be removed before you proceed", or "already violated, so nothing applies".

---

## What would count as FAILING

- C1 Y comes back mandated: "considered, not mandated" did not survive.
- C1 Z comes back done: the near-term bound did not survive.
- C5 unchanged after the wording pass: per-axiom wording does not reach a reader who opens one axiom alone.

---

## Key review - before any evaluator ran

A fresh reader audited this key against the rulings and the corpus.\
C3 and C5 correct; C1, C2 and C4 partly wrong.\
Corrected:
- **C4 said Q is adjacent. `A14` defines adjacency downward** - what the main line stands on - and Q consumes P, so P's change does not stand on Q. Both readings are now credited.
- **C1, C2, C4 depended on amendments the key never named** - `A0`'s scope passage, `AR0`'s directory sentence. Stated as preconditions, with before-answers.
- **C1** left "Y mandated, Z recorded" unscored, and its "fix is done" line weakened the reason for Z.
- **C5** let an added link pass without per-axiom wording; links are now forbidden in the probe.

**A corpus finding for Q-B:** `A0` sends selection of next work to the director citing `A13`, which binds only multi-agent or autonomous systems. Unless the organisation doing the work is itself such a system, that citation does not bind.
