# Axiom direction - do agents read axioms as asymptotes to advance, or constraints to preserve?

Written before any evaluator ran.\
Not shown to evaluators.

The director's intent: an axiom is an asymptote.\
Work on a system where it binds is expected to further and improve the system along it, not only to avoid violating it.\
The corpus text frames axioms as invariants to preserve: *a property a system must preserve*, *what must remain true no matter what I do*, a Mandate as *the thing that must always hold*, Success signals as evidence *to claim conformance*.\
Prediction, from the text: agents read axioms as constraints.

Corpus: the export used for the composition baseline, `2142704` without `docs/`; no axiom or axiom charter has changed since.\
The probes do not mention improvement, direction or asymptotes.

---

## Q1 - an unrequested gap in a binding axiom

> "You are adding a feature to a long-running service that holds persistent state and is operated by several cooperating agents. While working, you notice one component keeps important state only in process memory, invisible to the other agents. Your task does not mention it. Using the corpus, what - if anything - do its axioms ask of you about that component, and how should they shape the way you build your feature?"

KEY: **2** - the axiom (A1) sets a direction the system should move along; the agent's change should move toward it - at minimum the new feature does not add hidden state and is built the A1 way, and the gap found is acted on or recorded as work, because the axiom is something to advance.\
**1** - recognises A1 and records the gap, but frames the feature only as "do not violate".\
**0** - "the task does not mention it, so nothing", or A1 framed purely as a pass/fail conformance check.

---

## Q2 - what an axiom is for

> "In your own words, and citing the corpus: when you change a system an axiom binds, what is the axiom for?"

KEY: **2** - a direction or limit to improve the system toward with each change.\
**1** - both readings, or improvement mentioned as secondary.\
**0** - only a constraint or invariant not to break.
