# System boundary - which systems' axioms does a piece of work answer to?

Written before the system entity or any amendment was drafted, and before any evaluator ran.\
Not shown to evaluators.

## Source of the answers

The director's Q-A ruling, recorded in backlog `B32`: axioms bind systems; work answers to every system it changes - the system it modifies and every system containing it - but not a system it only composes with, unless it changes the contract between them; where no boundary is declared, both bind.\
The axiom sets are computed from `applies-to`: floor A3, A4, A8, A9, A14; stateful A1; declarative A2; multi-agent A5, A6, A7, A10, A13; autonomous A7, A10, A13; llm-in-the-loop A5, A11, A12.

Both the corpus before and after the amendment are evaluated on these probes.\
Before the amendment the ruling is in no file an evaluator can read, so the baseline measures what the corpus implies on its own.

Scoring 0 / 1 / 2.\
A labelled guess scores at most 1.

---

## Fixtures used by S1 to S5

Evaluators receive the fixture text below, in the probe preamble, and **not** the axiom lists.

> **The launcher** is a small one-shot script. One operator runs it and watches it; it holds no state, has no model in the loop, and does not restart anything that dies. It is not part of the service, and no larger system containing both is declared.
> **The service** is long-running and holds persistent state. Several agents operate it, each an independent actor handing work to the others, with no human in the synchronous loop and no model in the loop.

Traits, by each trait's Test: the launcher has none; the service is stateful, multi-agent and autonomous.\
Axioms - not shown: launcher, the floor; service, floor plus A1, A5, A6, A7, A10, A13.\
Autonomous adds nothing multi-agent has not already brought.

---

## S1 - change inside one system, contract unchanged

> "You change the launcher's log line format. Nothing crosses between the launcher and the service except a declared session interface, and that interface is unchanged. Which axioms does your change answer to?"

KEY: **the launcher's only - the floor: A3, A4, A8, A9, A14.**\
The change alters neither the service nor the contract. 2 for the floor with that reason; a stated condition - "provided nothing else consumes the format" - is not a hedge. 1 for the floor without a reason, or with the service's axioms added "to be safe". 0 for the service's axioms.

---

## S2 - change to the contract between two systems

> "You change how the launcher hands sessions to the service - the declared interface between them. Which axioms does your change answer to?"

KEY: **both - A1, A3, A4, A5, A6, A7, A8, A9, A10, A13, A14.**\
The change alters the contract the service depends on, so the service's axioms bind as well as the launcher's. 2 for that set with either reason - the contract changed, or the service's receiving side is itself modified. 1 for "both" with at most one axiom wrong, or the right set with no reason. 0 for the floor only.

---

## S3 - change inside a contained system

> "You change one module inside the service. The module on its own holds no state. Which axioms does your change answer to?"

KEY: **the service's - A1, A3, A4, A5, A6, A7, A8, A9, A10, A13, A14.**\
Changing a module changes the system that contains it. 2 for that set with the containment reason. 1 for the set without the reason. 0 for the floor only, on the ground that the module is stateless.

---

## S4 - a shared component, interface unchanged

> "A small library - no state, no model - is separately owned and published. Ten systems depend on a declared, versioned interface to it, several of them stateful and multi-agent, and each adopts a new version as its own separate change. You change the library's internals; the interface and its behaviour are unchanged. Which axioms does your change answer to?"

KEY: **the library's only - the floor: A3, A4, A8, A9, A14.**\
It composes with its consumers through a declared contract and does not alter them; each consumer's adoption of the new version is a change to that consumer and answers to its axioms. 2 for the floor with the composition reason. 1 for the floor without a reason. 0 for the union of the consumers' axioms.

---

## S5 - no declared boundary

> "As in S1, you change the launcher's log line format. This time no interface between the launcher and the service is declared, and the service is known to parse some of the launcher's output. Which axioms does your change answer to, and is anything else wrong?"

KEY: **both bind - the S2 set** - with either reason: nothing declared shows the change is contained, or the parsed format is a contract in fact and the change alters it.\
Separately, the undeclared dependency is a boundary fault - a unit consuming another's output without a declared contract, against A3. 2 for both bind with a reason, plus the fault. 1 for either alone. 0 for the floor only.

---

## S6 - what a system is

> "In this corpus, what is a 'system'? Cite where it is defined, or say that it is not."

KEY, before the amendment: **not defined**; a reader who infers a definition from the corpus and says so scores up to 1.\
KEY, after: the system entity - **a unit with a declared boundary; systems contain other systems and compose with others through contracts; traits describe a system and axioms bind it.** 2 for boundary, containment and composition with a correct citation. 1 for part, or for "not defined" with a sourced inference. 0 for a fabricated citation, or a definition with no boundary.

**Circularity, stated:** the entity will be written knowing this key. S6 therefore measures whether the entity conveys its definition to a cold reader, not whether the definition is right; S1 to S5 measure whether it can be applied.

---

## Key review - before any evaluator ran

A fresh reader audited this key against the axioms, the traits and the ruling as quoted, computing every set.\
Every axiom set was correct.\
Corrected:
- **S4** relied on a contain-versus-compose distinction the probe never set up - a linked library is usually inside its consumers - so a ruling-faithful answer scored 0. The library is now separately published behind a versioned interface.
- **S6** scored an honest "not defined" 0 and never scored the citation it asked for.
- **Fixtures**: the service is also autonomous, its agents' independence was unstated, the launcher's freedom from traits rested on unstated details, and the key did not say what evaluators see.
- **S1, S2, S5** scored down conditional or alternative reasoning faithful to the ruling.
