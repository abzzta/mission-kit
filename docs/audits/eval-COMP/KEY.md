# Composition evaluation - can a context-less agent compose mission-kit correctly?

Written BEFORE any composition record is drafted and BEFORE any evaluator ran.\
Not shown to evaluators.

## What is measured

Whether an agent holding nothing but the corpus - entry point `INDEX.md`, free to open any file - can compose the five axis layers correctly: traits, axioms, work-types, roles, domains.\
The baseline is the corpus at the commit named in the evidence README.\
A later run against the corpus with a composition record is the comparison.

---

## Derivation

Every answer is computed from frontmatter fields or stated in a charter, so each has one correct value:
- binding: axiom `applies-to`, union over traits plus the `any-system` floor (T0);
- pairing: work-type `roleEligibility` and `domainEligibility` (W0 constraints 1 and 3);
- separation: R0, R3, W0 constraint 9, W4, W8;
- authority between two declarations: W0 constraint 3, D0 composition, T0.

Probe 6 is the exception: it measures whether triggers route deterministically, and its key is a must-include set rather than an exact set.

Scoring 0 / 1 / 2.\
A guess, or an answer the agent marks uncertain, scores at most 1.

---

## P1 - system to axioms, several traits

> "You will work on a long-running service that holds persistent state, is operated by several cooperating agents, and has a language model making decisions on its critical path. Which axioms bind it, and how did you determine that?"

Traits: stateful, multi-agent, llm-in-the-loop.\
Floor: A3, A4, A8, A9, A14.\
KEY: **A1, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14 - every axiom except A2.**\
A2 binds only declarative systems. 2 for the exact set by the traits-plus-floor route. 1 for at most two errors, or the right set by reading every axiom without the trait route. 0 otherwise.

---

## P2 - system to axioms, no traits; and a domain citation that does not bind

> "You will work on a stateless command-line text formatter, run by one person, with no model in the loop, written as an ordinary script. Which axioms bind it? Separately: the delivery-code domain entry cites A1 in its axiom alignment - does A1 constrain your work on this formatter's codebase?"

KEY: **the floor only - A3, A4, A8, A9, A14.**\
And **no**: `applies-to` decides whether an axiom binds; A1 binds stateful systems only; a domain's citation says what an axiom demands on that surface *where it binds*. 2 for both parts. 1 for one. 0 for neither.

---

## P3 - compose one unit of work

> "You must apply an already-merged schema migration to a production database. Which work-type, which domain, and which role? Name the entry IDs."

KEY: **W7 publish-deploy-or-canonicalize, D7 product-data, engineer (R2).**\
Applying a landed change to production is the deploy act; the records are what it alters, which is D7; W7 admits product-data; W7's only eligible role is engineer.\
Strongest grounding: D7's own text - writing a migration is delivery-code, applying it to the records is product-data, as merge-and-land and publish-deploy split the planes.\
Credit, not required: W25 backstop-a-prod-window **as an additional bracketing node only** - it is pinned to coordination-substrate and not eligible to an engineer, so W25 in place of W7, or W25 x D7, is a rejected pairing and scores as an error. 2 for all three. 1 for two. 0 otherwise.

---

## P4 - the reverse query

> "Which work-types may a verifier perform on product-data? List them, and say which entries you treated as authoritative."

KEY: **W8, W9, W10, W11** - the work-types whose `roleEligibility` includes verifier and whose `domainEligibility` includes product-data.\
Authoritative: the work-type entries. 2 for the exact set with the work-type entries as authority. 1 for at most one error, or the exact set read from the domain's own list without noting the work-type governs. 0 otherwise.

---

## P5 - separation for a lone agent

> "You are the only agent. You have just built a change. Can you perform verify-gate-reactive on it yourself? If not, what do you do instead?"

KEY: **No.**\
W8 gates work the verifier did not author; a verifier may never attest its own executed work; an organisation of one cannot hold assurance (R0).
**Instead:** self-check by means the author's reasoning cannot bias - mechanical checks, tests, W4 validate-locally, a fresh sub-agent as the strongest self-check, which is still not assurance (R0) - and the gate either waits for a second agent or is met by the director's ratification. **The director does not become a verifier** (R0; W0 constraint 9).\
An answer that finds W0 constraint 2's downgrade to `kind:review` and still concludes that it is not assurance and not W8 scores as "no".

2 for no, plus self-checking by unbiased means, plus that it is not assurance, plus defer-or-ratify. 1 for no with a partial instead. 0 for yes, or for "the director verifies it".

---

## P6 - trigger routing

> "Using the ledger's 'Hydrate when' column, list the entries you would read before changing the harness that launches agents for a service that holds persistent state. Say why each matched."

KEY (must-include groups, not an exact set):
- **D3** tooling-harness;
- **a work-type route** - any work-type entry, or W0;
- **a binding route** - any trait entry, T0, or A0.

2 for all three groups. 1 for D3 plus one group, or D3 alone. 0 for no D3.\
Recorded but not scored: how many entries were listed, and whether runs agree - the determinism signal.

---

## P7 - which declaration wins

> "(a) A domain entry's list of work-types and a work-type's list of domains disagree. Which governs, and where does the corpus say so? (b) A trait entry lists the axioms it brings into force. If that list disagreed with an axiom's applies-to field, which would govern, and where does the corpus say so?"

KEY: **(a) the work-type** - W0 constraint 3; D0 says the domain lists are not consulted and the work-type governs.\
**(b) the axiom's `applies-to`** - A0: `applies-to` answers whether an axiom binds, and it is the only field that does; T0 in support.\
The corpus does not address the conflict directly and does not mark the trait's list as a view, so "not stated explicitly; inferred from A0" is fully grounded.

2 for both grounded. 1 for one. 0 for neither.

---

## What would count as the composition record FAILING

- Baseline already scores full marks: there is nothing to fix, and the record is unearned.
- The record raises P1-P5 or P7 and leaves P6 unchanged: composition is clear but routing is not.
- The record restates relationships the entries already declare, rather than stating the rule once: it becomes a third copy.

---

## Key review - before any evaluator ran

A fresh reader holding only the corpus layers audited this key before it was committed or used, computing every set itself.\
P1, P2, P4 and P7(a) were correct.\
Four probes would have mis-scored:

| Probe | Error | Corrected |
|---|---|---|
| P3 | credited W25 without saying it is pinned to coordination-substrate and ineligible to an engineer - rewarding a rejected pairing | W25 credited only as an additional bracketing node |
| P5 | said independent assurance "falls to the director" - **the error the director caught in the R0 key**, repeated by the same author from recall; R0 says the gate waits or the director ratifies, and the director does not become a verifier. Also scored 0 an answer that correctly reads W0 constraint 2's downgrade | defer-or-ratify; the downgrade path credited when it concludes "not assurance" |
| P6 | work-type and binding routes too narrow; "D3 alone" unscored | any work-type or W0; any trait, T0 or A0 |
| P7(b) | grounded in T0, which does not address the conflict; the decisive text is A0 | A0 primary, inference accepted |

**A finding in the corpus, not the key:** W0 constraint 2 lets a collapsed roster downgrade an attestation to `kind:review`; constraint 9 says same-agent review is never a valid degradation.\
The two contradict, and a careful reader can land on either.
