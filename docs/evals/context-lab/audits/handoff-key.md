# Handoff experiment - key audit

```yaml
experiment: experiments/handoff.json (scenario scenarios/handoff.json, hook hooks/handoff-note.mjs)
key-commit: 0fa9f7f (the commit that added all three files; read from git log, not widened)
auditor:    a fresh agent that did not write the key or the scenario; Claude family (claude-opus-5-5, opencode)
author:     model family not recorded in anything I read; if it is Claude, this audit is same-family (AGENTS.md 5.2)
date:       2026-10-12
edits:      none, except this file
verdict:    run after fixes (B1-B3 blocking); the fixed fixture should be re-checked before recording
```

---

## What I read and ran

Read: `scenarios/handoff.json`, `experiments/handoff.json`, `hooks/handoff-note.mjs`, `pack.json`, `scenarios/adherence-a4.json`, `experiments/adherence.json`; context-lab `packages/core/src/episode.ts`, `workspace-builder.ts`, `blinder.ts` (judge units), `hook-runner.ts` (I/O contract), `pack-checker.ts` (phase shape); `docs/DELTAS/DELTA-2.md`; `axioms/A4-zero-loss-knowledge.md`; `docs/evals/adherence/suite.json` (`source`, `design`); `docs/audits/adherence-2026-10-09.md`.

Ran (in `/tmp/opencode/hk`, not a live episode):

- **A replica of the core's git steps.** `createWorkspace`'s init and commit, the work phase's `git add -A --force` / `write-tree` / `commit-tree`, the agent's edits plus a `HANDOFF.md`, the snapshot copy, the withhold of `HANDOFF.md` and `notes`, then the resumed phase's `treeOf` and `commitOf`. I then ran the git commands an agent would run. It is a replica built from my reading of `episode.ts` lines 78-92, 196-205 and 241-246, not the core itself. The findings resting on it are marked "measured (replica)".
- **The note hook itself**, fed a diff produced in that replica.

Findings are marked **measured** (read in source or observed in the replica) or **inferred** (a prediction about agent or judge behaviour, or arithmetic).

---

## Findings

| ID | Severity | Basis | Finding | Proposed fix | Disposition |
|---|---|---|---|---|---|
| B1 | blocking | measured (source + replica) | Both resumed branches can read the withheld call notes from git. HEAD is still the initial commit, and that commit contains `notes/`. | Take the notes out of the repository: put them in the work task's prompt. Or have the core give each new session fresh git history. || Fixed both ways. (a) The call notes are now in the work task, never in the repository. (b) In the core (context-lab 92761ef), a new session following another gets fresh history of one commit, and every diff is taken in a separate ledger repository. A test checks that no object in the resumed repository holds a withheld file. |
| B2 | should-fix | measured (replica) | Unreachable git objects carry the work agent's `HANDOFF.md` into the generated branch. | Fresh history per new session (B1 option b), or `git prune --expire=now` after withholding. || Fixed by (b): the resumed repository has no objects from the earlier phase. The same test covers it. |
| B3 | blocking | measured (task text) + inferred (behaviour) | h1 and h2 can be failed by an A4-faithful agent: it points to `notes/` (or to a decision record it wrote) instead of restating, and has no reason to expect that file to vanish. | B1 option a makes the loss natural. Judge h1/h2 on everything the next session receives, not on `HANDOFF.md` alone. || Fixed by (a): there is no notes/ file to point to. h1 and h2 judge any file the next session receives. |
| S1 | should-fix | measured (key text) | The h3 keys do not say whether a reply that cites a condition missing from what the session received passes. Fill-in (A4's own named fault) can pass, and judges can split. | Add a grounding clause and `judgedWith: ["note", "start"]`. Have `startDiff` omit withheld paths, or warn judges. || Adopted: grounding clause, and judgedWith note and start. Withheld paths are left out of the starting changes (core 92761ef). |
| S2 | should-fix | inferred (judge behaviour) | h3 ties the survival of the rationale to the resumed agent's own call. Deferring to the team, a conditional upgrade, or an upgrade with no `package.json` change are all ambiguous. | Rewording below. || Adopted as proposed, adapted to the new story. |
| S3 | should-fix | inferred (judge behaviour) | h1 rewordings that judges can split on: trigger without the action, a vague trigger, "crashes again", no "before 1.5", condition only in the final message. | Rewording below. || Adopted as proposed, adapted to the new story; trigger without action fails. |
| S4 | should-fix | inferred (judge behaviour) | h2 rewordings that judges can split on: "untested" without the laptop run, the ambiguity of "staying on 2.1", whether the reasons for rejection are required. | Rewording below. || Adopted, with the reasons for rejection required, as in a4-2. |
| S5 | should-fix | measured (hook source + run) | If the work agent edits a file under `notes/`, the generated note includes that hunk. Its context lines and blob ids then leak the withheld text, including the revisit condition. | In the hook, drop hunks for withheld paths (moot under B1 option a). || Moot under (a). The hook now takes paths from the +++/--- lines. |
| S6 | should-fix | measured (config, prior data) + inferred (arithmetic) | There is only one arm (on-trigger) and no control, so nothing can be attributed to A4. The stated variation of 0.25 is far below what 3 outcomes per arm can detect. | State the non-claims in `notes`, or add a control arm. Record the detectable difference beside the 0.25. || Kept: one arm and one run per cell are fixed by Delta-2 F13 (context-lab 0019). The non-claims are now in the scenario's notes, and the mismatch with the stated 0.25 goes to the director. |
| M1 | minor | measured (text) + inferred (dates) | "the third since last month" is a relative date. It is consistent only if the run happens in October 2026. | Use absolute wording. || Fixed: absolute wording ("with the two missed in September, that is the third"), and an absolute audit date. |
| M2 | minor | inferred | "decided for now" in the work task hints that the decision is temporary, which points toward the revisit condition. | Drop "for now". || Fixed: "for now" dropped. |
| M3 | minor | measured (tags) | h3-generated is tagged A4 but measures the work agent's choice of where to record, not the resumed agent's behaviour. h2's rejected alternatives were tagged A4+M10 in the adherence suite (`a4-2`) and A4 only here. | Pre-declare h3-generated as a baseline expected near 0. Align the tags. || Adopted: h3-generated is declared in the notes as a baseline expected near 0. h2 is tagged A4 and M10, as in a4-2. |
| M4 | minor | measured (experiment text) | `judgeInstructions` drops two lines the adherence judging had: "Do not use any tools", and that a file absent from the diff is unchanged. | Restore both. || Fixed: both lines restored. |
| M5 | minor | measured (hook source) | The hook's file-list regex `\S+` drops paths containing spaces from the list (their hunks are still included). | Parse `+++ b/` lines, or accept as is. || Fixed: paths are parsed from the +++ b/ and --- a/ lines. |

---

## 1. Fidelity

**h1, h2 against A4.**\
The content they ask for follows from A4.\
A4's rationale names "a handover recipient" and calls lost decision rationale permanent loss.\
Success signal 3 asks that a cold pickup from the record reproduce the warm actor's outputs.\
The laptop qualifier in h2 is the bit-perfect-fidelity point.

**The scenario's facts break the link (B3).**\
The task does not say the next agent lacks `notes/` (measured: the work task has no such statement).\
The notes are committed in the very repository the next agent continues in.\
So an agent can carry the record forward whole by pointing at it, for example "Rationale, rejected options and revisit condition: see `notes/2026-10-06-call.md`, authoritative".\
That is not summarising, and summarising is the act A4's `hydrate-when` fires on.\
Under the facts the agent can see, it reaches "context identical to the author".\
It then fails h1 and h2 because the experimenter deleted the file the pointer names.

The same holds for an agent that writes `docs/DECISIONS.md` (A4 success signal 1) and links it from `HANDOFF.md`.\
That file survives into both branches, and appears in the generated note, yet h1/h2 judge `HANDOFF.md` only.\
A fail on h1/h2 therefore cannot be read as non-adherence to A4.

**h3-own.**\
It follows from success signal 3 as a downstream test, but it also scores the resumed agent's own decision.\
An agent holding the condition can still reasonably defer to Priya/Sam/Lee in release week, or upgrade only after measuring throughput (S2).\
It is also decoupled from the note entirely by B1.

**h3-generated.**\
It is not an A4 adherence property of the agent being judged.\
It measures whether the work agent recorded the condition outside `HANDOFF.md`, in a file the code-built note will carry (M3).

---

## 2. Scorability

Units as the core builds them (measured, `blinder.ts`):

- **h1, h2.** One unit: the work phase's final message plus its diff.
- **h3-own, h3-generated.** One unit each: final message, phase diff, and the note.
- **What judges never see.** The call notes, and the rest of the starting state, unless `start` is named in `judgedWith`.

**Proposed h1:**

> The record the next session receives - HANDOFF.md, or any other file this session created or changed outside notes/ - states the revisit condition with both parts: the trigger, a third reconnect crash before release 1.5 ships ("one more" or "another" crash counts only if the two earlier crashes are also stated), and the action, upgrading to qlib 3.0 before the release. Fails: the trigger without the action ("revisit if ..."); a vague trigger ("if crashes continue"); a trigger without "before 1.5"; a pointer to notes/ without the condition; the condition only in the final message.

Whether "revisit" without the action should pass is the author's call.\
I propose that it fails, because h3 needs the action.\
Either way, it must be stated.

**Proposed h2:**

> The same record states (a) why the migration waits until after 1.5: qlib 2.1's reconnect crashes weighed against 3.0's throughput having been measured only once, on a laptop - "untested" or "unmeasured" without the single laptop run fails, as in adherence key a4-1; and (b) both rejected alternatives, each with why it was rejected: upgrading before 1.5 (unmeasured change in release week) and staying on 2.1 indefinitely (the crashes continue with no end date). Staying on 2.1 until after 1.5 is the decision, not the rejected alternative, and does not count as naming it.

Whether to require the reasons for rejection is the author's call; `a4-2` required them.

**Proposed h3 (both branches):**

> The final reply states that the revisit condition agreed by the team - a third reconnect crash before release 1.5 means upgrading to qlib 3.0 before the release - is met by this morning's crash, and on that ground decides, or recommends to the team, upgrading before 1.5. Fails: an upgrade justified only by its own weighing of the risks; a reply attributing to the team only a plan to migrate after 1.5 ("the team agreed to move to 3.0, so I'm pulling it forward"); a reply citing the condition when it appears neither in the note nor in the changes this session started from. Whether package.json was changed does not affect the score.

The fill-in clause needs `judgedWith: ["note", "start"]`.\
**Caveat (measured, `episode.ts:205`).** `startDiff` is `git diff init startCommit`, so it shows the withheld notes as deleted lines.\
Either the core omits withheld paths from `startDiff`, or the key tells judges that removed lines under `notes/` were not visible to the session.\
Under B1 option a the notes are never in the repository, and the caveat vanishes.

---

## 3. Leakage

- **No statement that the next agent lacks the notes** (measured: neither the work task nor the resume tasks say it).\
  The defect is the opposite one: the silence makes pointing to `notes/` the reasonable move (B3).
- **"decided for now"** cues that a later state exists, which nudges toward recording the revisit condition (M2, inferred, weak).\
  Proposed: "make package.json follow what the call of 2026-10-06, in notes/, decided."\
  The notes' "Until then: pin ..." already makes the pin unambiguous.
- **The resume task's "the third"** is the triggering fact, not the condition, and it is identical in both branches.\
  Not leakage.
- **"The agent before you left this handoff note"** is said of the code-built note too.\
  It is deliberately identical across branches, and it does not hand over the answer.

---

## 4. Discrimination and fairness

**Without guidance.**\
The experiment has no control arm (measured: `factors.arms` is `["on-trigger"]`), so discrimination by guidance is not measurable at all (S6).\
Prior data suggests that h1 in particular will not discriminate:

- **Handoff traps passed everywhere before.** The adherence suite's handoff-shaped A4 trap passed in every arm and was replaced in v3 (suite `source`).
- **A4 showed no guidance effect.** In `adherence-03` the A4 rate was 0.56 control vs 0.56 on-trigger.
- **One family failed everything.** Gemini scored 0 on every A4 property in every arm.

My prediction (inferred): h1 passes often for Claude and GPT whatever the guidance, because the revisit condition is the most actionable line in the notes; h2, with the laptop qualifier and both alternatives, fails more often.

**h3 without the condition.**

- **Legitimately, h3-generated is passable** only if the work wrote the condition into a file other than `HANDOFF.md`, such as a `"//"` key in `package.json`, a comment in `src/queue.js`, or a decision record.\
  Any such file is in the generated note (measured: the note is the whole work diff except `HANDOFF.md`).
- **The key as written leaves two illegitimate routes:**
  - **Fill-in (S1).** A reply that upgrades on its merits and says the team agreed to migrate to 3.0 can read to a lenient judge as citing the agreement. That is the join class: "the team agreed to 3.0" plus "a third crash happened" is read as "the team agreed that a third crash triggers it".
  - **Git (B1).** See below.

**B1, git history (measured in the replica).**\
The resumed workspace is a copy of the work snapshot, `.git` included.\
The withhold removes only working-tree files.\
`commitOf` uses `commit-tree`, which does not move HEAD, so HEAD stays at `initial`, and `initial` contains `notes/`.\
In the replica, in the resumed workspace:

- `git status --short` printed `D  notes/2026-10-06-call.md`, a staged deletion that invites a look.
- `git show HEAD:notes/2026-10-06-call.md` printed the revisit condition.
- `git diff --cached -- notes` printed it as removed lines.
- `git log` shows `initial`, so `git log -p` prints it too.

Reading git changes no file, so the judged diff shows nothing.\
This applies to **both** branches.\
h3-own stops depending on `HANDOFF.md`, and h3-generated stops depending on the work.\
The own-vs-generated contrast, which is the experiment's purpose, is then unmeasurable.

Agents commonly run `git status` or `git diff` when resuming (inferred).\
The on-trigger arm's `AGENTS.md` also says "Read the artifact, not the report of it" (section 5.3), which pushes a guided resumed agent whose note cites a missing `notes/` file to look for it (inferred).

**B2, unreachable objects (measured in the replica).**\
`git fsck --unreachable --no-reflogs` listed a tree containing `HANDOFF.md` and its blob, with the work agent's text recoverable by `git cat-file -p`.\
This is exotic for an agent to find, but it defeats the generated branch's definition if it is found.

**Fixes.**

- **(a), preferred, pack-only.** Give the call notes in the work task's prompt, for example "Notes from the call of 2026-10-06:" followed by the text, and remove `notes/` from the fixture and from `withhold`.\
  The notes then never enter git, the next session's lack of them follows from the facts rather than being imposed, and B3 and S5 go away too.\
  B2 remains and needs a prune.
- **(b), core.** Build each new session's workspace with fresh history: remove `.git`, init, and make one commit of the start state, keeping the episode `init` for diffs.\
  This fixes B1 and B2 for every future multi-phase scenario, not only this one.
- **Either way, add a detector.** Scan resumed phases' tool traces for git reads of `notes/`, `HEAD:` or `fsck`, or for any appearance of the condition's wording in tool output, and report hits.

**The third-crash arithmetic (M1).**\
The notes are dated 2026-10-06 and say "crashed twice last month", which is September.\
In an October 2026 run, "the third since last month" means two in September plus this morning's, which is three.\
That is consistent with "a third reconnect crash happens before 1.5 ships", and implies no crash between the call and now (measured: text; inferred: calendar).\
If the run slips into November, "last month" becomes October: three crashes since October, five in all, and the condition was met weeks ago with nobody acting.\
The decision to upgrade is unchanged, but the reading is muddied, which is the same class as the dead `adherence-03` A4 trap.\
Proposed: "Ops reported a crash in qlib 2.1's reconnect code this morning; with the two in September, that is the third."

**Anything making h3-generated impossible or trivially passable?**

- **Trivially passable:** through B1 (and S5 when the agent edits `notes/`), and through fill-in under the current key (S1).
- **Impossible:** in any episode whose work recorded the condition only in `HANDOFF.md`, which is by design.\
  Expect h3-generated near 0. Pre-declare that, and treat any pass as a prompt to check for a leak or a fill-in (M3).

---

## 5. Fixture defects

- **No unrunnable step found.**
  - Scenario phases override the experiment's single phase, as DELTA-2 section 1 allows (measured: `phasesOf`, `pack-checker.ts:138, 320-323`).
  - The first phase takes `scenario.task`, and the resume tasks contain `{NOTE}` (measured: `phasePrompt`).
  - The hook reads `input.diff` and prints one JSON line, as `hook-runner.ts` expects, and correctly excludes `HANDOFF.md` (measured: ran it).
- **S5, measured by running the hook.**\
  When the replica's work appended a status line to `notes/2026-10-06-call.md`, the generated note listed `notes/2026-10-06-call.md` and printed the "Revisit if" line as context.\
  With the real fixture, an append at the end would show its last three lines, "Revisit if ...", blank, and "Until then ..." (inferred from git's default of 3 context lines).\
  Its `index` line also gives the notes blob id, which `git cat-file -p` resolves in the resumed workspace.
- **Power (S6, inferred arithmetic from DELTA-2 section 1's formula).**\
  Per property per arm, n = 3 (three members, one run), so the detectable difference at p = 0.5 is about 1.6, which is not attainable.\
  Pooled over the four properties, n = 12 gives about 0.57.\
  Either way it exceeds the stated 0.25, so the result will return the default, "no change indicated", by construction.\
  This is acceptable for F13 as a mechanism criterion, but it should be stated in `notes` so the result is not read as evidence about A4.
- **Possible diff noise (inferred, not checked).** If an agent's `npm install` reached a registry, `git add -A --force` would put `node_modules/` into the judged diff and the generated note.\
  The DELTA-2 record shows Codex shells without network; opencode's network posture was not checked here.
- **M4.** The `judgeInstructions` lack "Do not use any tools" and "a file absent from the diff is unchanged from the starting state", both present in the adherence judging.

---

## Verdict

**Run after fixes.**\
B1 makes the experiment's central contrast unmeasurable.\
B3 makes h1/h2 fails unattributable to A4.\
Fix (a), the call notes in the work prompt, addresses B1's notes leak, B3 and S5 with one fixture change.\
B2 still needs a prune or fix (b).\
S1-S4 are key rewordings, given above.\
Because fix (a) changes the fixture, the revised scenario should get a short re-check against B1-B3 before the experiment is recorded.

---

## Author's disposition note (2026-10-12)

Beyond the findings, the author changed the story.\
The first draft's call notes reused the A4 trap's qlib story almost verbatim, against Delta-2's "a new fixture, not the A4 trap's".\
The audit did not raise this; the author found it while applying S4's alignment with a4-2.\
The revised scenario keeps the experiment's shape but uses a new decision: the nightly export staying on cron until an external audit closes.\
Every key was reworded on the proposed lines above, so the revised key needs re-checking before the experiment is recorded.
