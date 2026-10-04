# History purge - evaluation runs - 2026-10-04

The log [`RU4`](../../rules/RU4-publishing-rewritten-history.md) condition 8 requires for a force-push of rewritten history.

```yaml
justification: director ruling - eval runs and their results polluted the published repo; purge, as a defect
removed:       docs/evals/runs/ and docs/evals/human/runs/, from every commit
range:         the first commit touching them (5fbe0ec, 2026-10-03) to main; earlier history untouched
pre-tip:       11449e0cd87c353e2876148f72438d4bbff03012
post-tip:      4cd6a6b87eb2e0d2133d7cbaa3fc57a07f4c0791 (the purge), then 4ad36f1 (citations repointed)
origin before: ef41c74163d52c8bbaf5c5482a08722387b217c2
backup:        /home/apnex/taceng/mission-kit-prepurge-11449e0, a filesystem copy with .git, kept until the push is confirmed good
runs kept:     /home/apnex/taceng/mission-kit-eval-runs/ and, ignored by git, docs/evals/runs/ in the working copy
```

---

## Harm test

- **Competing work:** every commit is the director's, through several accounts; one local clone; no unpushed work but this change.
- **Forks:** three - `abzzta`, `apnex-greg`, `apnex-lily` - each with a tip that is an ancestor of, or unrelated to, the first rewritten commit, checked against the commit graph; none holds a rewritten commit. Under `RU4` as amended in this change, no owner is contacted.
- **Open pull requests:** none.
- **External references:** the installed skill copies' provenance files, repinned after the push. A provenance record in another repository pins one rewritten commit; the director ruled it external and out of scope. The old-to-new map below serves anyone holding an old id.

---

## Safeguards

- **Range-diff clean, checked commit by commit:** for every rewritten pair, the trees differ only under the two removed paths, and every message is identical except one, where filter-repo rewrote a cited commit id to its new identity.
- **Tip tree unchanged:** `1d5a1b4a5c6076a0c912f72cb56fe2480d5465b6` before and after, because the runs were untracked in the commit before the rewrite.
- **Commit count unchanged:** 338 before and after; empty commits were kept, so no message is lost.
- **Earlier history untouched:** the rewrite was limited to the affected range, because a whole-history rewrite strips the signatures of earlier signed commits and changes every one of them; the first attempt did, was caught by the changed-commit count, and was discarded in favour of the backup.
- **Pushed with an explicit lease** on `ef41c74163d52c8bbaf5c5482a08722387b217c2`.

---

## Old to new

| old | new |
|---|---|
| `016b61d75a08` | `6260d9d14d12` |
| `016e2b467be9` | `04893f6b9b78` |
| `0a3fe981dd4d` | `cdfba5266e0f` |
| `0d3d2a91e180` | `16f2c54936a2` |
| `1121187a29bc` | `04654872a689` |
| `11449e0cd87c` | `4cd6a6b87eb2` |
| `15f0d6df0f15` | `80b4dbea7691` |
| `18c792143032` | `13d4253144a0` |
| `1958518ef100` | `09cb0345ba61` |
| `199644c131cd` | `38b152f776a9` |
| `1b2358506aab` | `69230da444cb` |
| `21f9321f1f4f` | `f00cc1d5f760` |
| `231bd516a27a` | `2783c8125ce1` |
| `24aa952feb04` | `9bd53332144b` |
| `2710898ca71b` | `800ee2e37d47` |
| `28ea523e7652` | `16a872c0a5c8` |
| `29bac8e61fdd` | `9dd7f6fe4004` |
| `29f6229df113` | `a824e9b61a1f` |
| `2a22b71fdf9b` | `9982957174db` |
| `2c2751311d9d` | `be2bea3a2426` |
| `2de277bbc9b5` | `596a92441d15` |
| `2fbb350195bd` | `b746a7bfd1d8` |
| `300c82a3461e` | `0ad8f73ac12e` |
| `3094a6fd87aa` | `bffbaef27182` |
| `3565e0367b86` | `724d7ce5214e` |
| `35bc32fa968a` | `8e14b5c971a0` |
| `35e5bb036bc9` | `57311e6d533a` |
| `3714dd4f1045` | `00db1d3f9220` |
| `3855e25e24dc` | `61cadfb4e04a` |
| `3a4569b2654d` | `3ba835b0f6c3` |
| `3d55cc60092b` | `4f1669854c96` |
| `3da03793994b` | `6fb10812437e` |
| `3ef329f34d12` | `78058727c693` |
| `422df7cc5a82` | `805d17ec7c58` |
| `462cb1cfa41e` | `8acf1a122a70` |
| `479049213b76` | `7197fc4bdb47` |
| `4a5c73a7375f` | `d08b6576c386` |
| `4d9498f013ce` | `7456b8427380` |
| `50240bfa1f39` | `07bf0ef23537` |
| `5043f2f1291c` | `004327849800` |
| `589b29b06c00` | `f2252244319b` |
| `5a28cc304d89` | `dc308854d5bb` |
| `5be7babd6daf` | `e19a2171fa8c` |
| `5f38bd97f5d4` | `2157b71ddeb1` |
| `5fbe0ec86e8d` | `2c374a41b577` |
| `67609bce4bed` | `2aa945418750` |
| `6a77aecd9706` | `ae46cdaf8e2f` |
| `6aad3a5fd8b7` | `ab840d20f31a` |
| `6c120130e58f` | `8e43c7059b15` |
| `719351db24f4` | `bac8b35cc214` |
| `7222c6eae19e` | `da5400a24b98` |
| `72f4186da6b3` | `a18ffe7c3169` |
| `7563827fcfce` | `fd48426ff388` |
| `769b81cdb8e2` | `8933c68623ce` |
| `76c183f43060` | `428bcd2a3681` |
| `79cc4c09404b` | `36263e03953a` |
| `7cd4bfbf94b1` | `67f091eb357a` |
| `7df51d121d1e` | `1f9dae893767` |
| `7f1092b9e468` | `8fce60a905d5` |
| `801296b4003a` | `8bbafa80adc3` |
| `80823c4231a2` | `8e8caaaa5d13` |
| `81c6ed167fa7` | `4b3a9a73c67c` |
| `82fd03bbd127` | `4c2d75fee48f` |
| `846403ea8fb9` | `395d3df8274f` |
| `859f8da5b2c8` | `4eb158876354` |
| `8698a08079ed` | `8fba49bc9f54` |
| `8788892f4875` | `3fb8dcb697e6` |
| `8893ece82b57` | `e81e9dbedb12` |
| `89e65e63405e` | `dcaec95813b0` |
| `8e55a02d2e35` | `540e64b288b8` |
| `9206ee32bc54` | `460552750333` |
| `92fc31cfe13c` | `73f13f301e3d` |
| `95814dbc9b92` | `eee321c84be9` |
| `980e751346bd` | `c9cf6ce3d8c1` |
| `99b6b32bf864` | `0a6c30154699` |
| `9db6261dae69` | `1a862fe702f9` |
| `9e8b40fe0932` | `38f83491d4a0` |
| `9fac3068d588` | `3ac6bdd933a8` |
| `a09b21a39183` | `3aaad98a2e17` |
| `a19b935944bd` | `fdcdd7565440` |
| `a5a16a57cf6f` | `498c1c06225d` |
| `a86585036171` | `3e086984d3d2` |
| `a8c469ff9505` | `4a4fd1ade5bb` |
| `a9b4c9487384` | `df79939df174` |
| `ab9f4d0d0265` | `26cfc80e697b` |
| `addf947ea8b7` | `dc1db13de0b8` |
| `b0168d3bf887` | `9be5e8b294ac` |
| `b03528473355` | `99d59a48a748` |
| `b120ede4da1e` | `038dfa253faf` |
| `b141de132830` | `a293b1c906a5` |
| `b555d61da1c3` | `0670795bde07` |
| `b8ef50c6cdad` | `7c2ebc29c0e6` |
| `be06e615ce9f` | `6d15a466ae16` |
| `be6e1084d1ba` | `7929a4e07de9` |
| `c002a9c082b1` | `3a9017ae0d0e` |
| `c10ec40510f2` | `a32fb4e6a46f` |
| `c13d98025996` | `c09c9fd35797` |
| `c37726e4da80` | `16213e25c72d` |
| `c3b1a54ca014` | `2b34070b4545` |
| `c4ebc71110c9` | `d20536dc8748` |
| `ca9932456365` | `5fa242bbd405` |
| `cc92406a6c91` | `66977a91ea55` |
| `cf0d0e2a08ea` | `baf0fc01d669` |
| `d1aacdc5e2f9` | `fe58e321882d` |
| `d25bcc0de91f` | `38475499bb87` |
| `d39808e1c637` | `66761727d8b1` |
| `d3cda7bf5157` | `f7beaf83e93d` |
| `d52065f5204d` | `ad459f872b0a` |
| `d5a47cec5527` | `576ba1870d58` |
| `d5b0037ee65c` | `da79bd8bcc68` |
| `d68ee7beb456` | `ccfc8b941665` |
| `dcd82cd989f5` | `10221ca47447` |
| `e2d9bb998343` | `8a3b545ef3ae` |
| `e3266f87e436` | `d1452acfe4e7` |
| `e39d721b573d` | `ecacfcab7add` |
| `e47b4771b0fe` | `68195cc532f5` |
| `e583ec3d6e81` | `f6d90e2e2bcd` |
| `e629403cff82` | `03671c0fdb74` |
| `e815ced2eb1c` | `f12bce43c96a` |
| `e8c73119d6fa` | `3f85f1bb9758` |
| `ea34d11042d2` | `3305087b09ab` |
| `ef41c74163d5` | `b84ecf83797f` |
| `ef5c9022ad83` | `5e6376f261ec` |
| `f07449bc3c95` | `0ac7383dd527` |
| `f55fc33e6e78` | `31e3b137bf54` |
| `f8094b0c2780` | `0acba2816f90` |
| `f92b6449ed2d` | `8a12675753ed` |
| `f9a7de0146a3` | `acae2a4a62c8` |
