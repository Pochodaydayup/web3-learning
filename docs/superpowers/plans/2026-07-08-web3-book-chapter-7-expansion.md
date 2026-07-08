# Web3 Book Chapter 7 Expansion Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the ten-volume Web3 learning book with a seventh chapter in every volume so the manuscript grows from a stable multi-volume outline into a more convincing long-form learning system.

**Architecture:** Keep the existing `part-* / chapter-*` hierarchy and extend every volume with one more full chapter bundle. Each new chapter bundle must contain a landing page, a substantial main explanatory page, `exercises.md`, `practice.md`, and `reading.md`. Navigation, printed TOC, and validation coverage must be updated in the same batch.

**Tech Stack:** Node.js, VitePress, Markdown, Mermaid, GitHub Pages

---

## File Structure

### Modify

- `book/.vitepress/config.ts`
- `book/full-toc.md`
- `book/part-1-foundations/index.md`
- `book/part-2-solidity/index.md`
- `book/part-3-foundry/index.md`
- `book/part-4-evm/index.md`
- `book/part-5-gas/index.md`
- `book/part-6-security/index.md`
- `book/part-7-ethereum-internals/index.md`
- `book/part-8-defi/index.md`
- `book/part-9-protocol-reading/index.md`
- `book/part-10-training/index.md`
- `scripts/validate-book.mjs`

### Create

- `book/part-1-foundations/chapter-07-wallet-providers-chain-switching-and-permissions/*`
- `book/part-2-solidity/chapter-07-ether-flow-receive-and-fallback/*`
- `book/part-3-foundry/chapter-07-dependencies-and-reproducible-environments/*`
- `book/part-4-evm/chapter-07-precompiles-and-crypto-primitives/*`
- `book/part-5-gas/chapter-07-l1-l2-fee-models-and-calldata/*`
- `book/part-6-security/chapter-07-invariants-threat-modeling-and-formal-reasoning/*`
- `book/part-7-ethereum-internals/chapter-07-rollups-bridges-and-settlement/*`
- `book/part-8-defi/chapter-07-vaults-strategies-and-yield/*`
- `book/part-9-protocol-reading/chapter-07-reading-makerdao/*`
- `book/part-10-training/chapter-07-open-source-and-public-credibility/*`

## Task 1: Write Chapter 7 Manuscript Bundles

**Files:**
- Create: `book/part-1-foundations/chapter-07-wallet-providers-chain-switching-and-permissions/index.md`
- Create: `book/part-1-foundations/chapter-07-wallet-providers-chain-switching-and-permissions/wallet-provider-boundaries.md`
- Create: `book/part-1-foundations/chapter-07-wallet-providers-chain-switching-and-permissions/exercises.md`
- Create: `book/part-1-foundations/chapter-07-wallet-providers-chain-switching-and-permissions/practice.md`
- Create: `book/part-1-foundations/chapter-07-wallet-providers-chain-switching-and-permissions/reading.md`
- Create: `book/part-2-solidity/chapter-07-ether-flow-receive-and-fallback/index.md`
- Create: `book/part-2-solidity/chapter-07-ether-flow-receive-and-fallback/how-eth-enters-and-leaves-contracts.md`
- Create: `book/part-2-solidity/chapter-07-ether-flow-receive-and-fallback/exercises.md`
- Create: `book/part-2-solidity/chapter-07-ether-flow-receive-and-fallback/practice.md`
- Create: `book/part-2-solidity/chapter-07-ether-flow-receive-and-fallback/reading.md`
- Create: `book/part-3-foundry/chapter-07-dependencies-and-reproducible-environments/index.md`
- Create: `book/part-3-foundry/chapter-07-dependencies-and-reproducible-environments/keeping-foundry-projects-reproducible.md`
- Create: `book/part-3-foundry/chapter-07-dependencies-and-reproducible-environments/exercises.md`
- Create: `book/part-3-foundry/chapter-07-dependencies-and-reproducible-environments/practice.md`
- Create: `book/part-3-foundry/chapter-07-dependencies-and-reproducible-environments/reading.md`
- Create: `book/part-4-evm/chapter-07-precompiles-and-crypto-primitives/index.md`
- Create: `book/part-4-evm/chapter-07-precompiles-and-crypto-primitives/special-contracts-inside-the-evm.md`
- Create: `book/part-4-evm/chapter-07-precompiles-and-crypto-primitives/exercises.md`
- Create: `book/part-4-evm/chapter-07-precompiles-and-crypto-primitives/practice.md`
- Create: `book/part-4-evm/chapter-07-precompiles-and-crypto-primitives/reading.md`
- Create: `book/part-5-gas/chapter-07-l1-l2-fee-models-and-calldata/index.md`
- Create: `book/part-5-gas/chapter-07-l1-l2-fee-models-and-calldata/why-rollups-charge-differently.md`
- Create: `book/part-5-gas/chapter-07-l1-l2-fee-models-and-calldata/exercises.md`
- Create: `book/part-5-gas/chapter-07-l1-l2-fee-models-and-calldata/practice.md`
- Create: `book/part-5-gas/chapter-07-l1-l2-fee-models-and-calldata/reading.md`
- Create: `book/part-6-security/chapter-07-invariants-threat-modeling-and-formal-reasoning/index.md`
- Create: `book/part-6-security/chapter-07-invariants-threat-modeling-and-formal-reasoning/proving-more-than-tests-can-see.md`
- Create: `book/part-6-security/chapter-07-invariants-threat-modeling-and-formal-reasoning/exercises.md`
- Create: `book/part-6-security/chapter-07-invariants-threat-modeling-and-formal-reasoning/practice.md`
- Create: `book/part-6-security/chapter-07-invariants-threat-modeling-and-formal-reasoning/reading.md`
- Create: `book/part-7-ethereum-internals/chapter-07-rollups-bridges-and-settlement/index.md`
- Create: `book/part-7-ethereum-internals/chapter-07-rollups-bridges-and-settlement/how-layer2-reuses-ethereum-security.md`
- Create: `book/part-7-ethereum-internals/chapter-07-rollups-bridges-and-settlement/exercises.md`
- Create: `book/part-7-ethereum-internals/chapter-07-rollups-bridges-and-settlement/practice.md`
- Create: `book/part-7-ethereum-internals/chapter-07-rollups-bridges-and-settlement/reading.md`
- Create: `book/part-8-defi/chapter-07-vaults-strategies-and-yield/index.md`
- Create: `book/part-8-defi/chapter-07-vaults-strategies-and-yield/when-yield-becomes-a-product-layer.md`
- Create: `book/part-8-defi/chapter-07-vaults-strategies-and-yield/exercises.md`
- Create: `book/part-8-defi/chapter-07-vaults-strategies-and-yield/practice.md`
- Create: `book/part-8-defi/chapter-07-vaults-strategies-and-yield/reading.md`
- Create: `book/part-9-protocol-reading/chapter-07-reading-makerdao/index.md`
- Create: `book/part-9-protocol-reading/chapter-07-reading-makerdao/reading-a-monetary-protocol.md`
- Create: `book/part-9-protocol-reading/chapter-07-reading-makerdao/exercises.md`
- Create: `book/part-9-protocol-reading/chapter-07-reading-makerdao/practice.md`
- Create: `book/part-9-protocol-reading/chapter-07-reading-makerdao/reading.md`
- Create: `book/part-10-training/chapter-07-open-source-and-public-credibility/index.md`
- Create: `book/part-10-training/chapter-07-open-source-and-public-credibility/turning-contributions-into-compound-trust.md`
- Create: `book/part-10-training/chapter-07-open-source-and-public-credibility/exercises.md`
- Create: `book/part-10-training/chapter-07-open-source-and-public-credibility/practice.md`
- Create: `book/part-10-training/chapter-07-open-source-and-public-credibility/reading.md`

- [ ] **Step 1: Create the ten new chapter directories**

Run:

```bash
mkdir -p \
  book/part-1-foundations/chapter-07-wallet-providers-chain-switching-and-permissions \
  book/part-2-solidity/chapter-07-ether-flow-receive-and-fallback \
  book/part-3-foundry/chapter-07-dependencies-and-reproducible-environments \
  book/part-4-evm/chapter-07-precompiles-and-crypto-primitives \
  book/part-5-gas/chapter-07-l1-l2-fee-models-and-calldata \
  book/part-6-security/chapter-07-invariants-threat-modeling-and-formal-reasoning \
  book/part-7-ethereum-internals/chapter-07-rollups-bridges-and-settlement \
  book/part-8-defi/chapter-07-vaults-strategies-and-yield \
  book/part-9-protocol-reading/chapter-07-reading-makerdao \
  book/part-10-training/chapter-07-open-source-and-public-credibility
```

Expected: all ten chapter directories exist under the established volume roots.

- [ ] **Step 2: Write chapter landing pages and main explanatory pages**

Every `index.md` must include:

```md
## 本章要解决什么
## 读完后你应该会什么
## 本章目录
## 练习与实践入口
```

Every main explanatory page must include:

```md
## 先理解什么
## 为什么重要
## 核心机制
## 工程判断
```

Expected: every chapter reads like the next natural step after chapter six rather than an isolated essay.

- [ ] **Step 3: Write support modules**

Every `exercises.md` must include:

```md
## 概念题
## 分析题
## 代码题
```

Every `practice.md` must include:

```md
## 实践目标
## 操作步骤
## 交付物
```

Every `reading.md` must include:

```md
## 必读
## 进阶
## 实战
```

Expected: the support pages continue the book’s learn-build-read loop.

## Task 2: Update Navigation, TOC, And Validation

**Files:**
- Modify: `book/.vitepress/config.ts`
- Modify: `book/full-toc.md`
- Modify: `book/part-1-foundations/index.md`
- Modify: `book/part-2-solidity/index.md`
- Modify: `book/part-3-foundry/index.md`
- Modify: `book/part-4-evm/index.md`
- Modify: `book/part-5-gas/index.md`
- Modify: `book/part-6-security/index.md`
- Modify: `book/part-7-ethereum-internals/index.md`
- Modify: `book/part-8-defi/index.md`
- Modify: `book/part-9-protocol-reading/index.md`
- Modify: `book/part-10-training/index.md`
- Modify: `scripts/validate-book.mjs`

- [ ] **Step 1: Link chapter seven from all volume landing pages**

Expected: each volume landing page now lists seven live chapters.

- [ ] **Step 2: Add chapter seven to sidebars and printed TOC**

Expected: VitePress sidebar and `book/full-toc.md` both expose the new chapter paths for all ten volumes.

- [ ] **Step 3: Extend validation coverage**

Add chapter-seven scopes to `scripts/validate-book.mjs` following the same heading contract enforced for earlier chapter bundles.

Run:

```bash
npm run docs:check
```

Expected: validator passes with the new chapter-seven files included.

## Task 3: Verify, Commit, And Publish

**Files:**
- Modify: all touched files from Tasks 1 and 2

- [ ] **Step 1: Build the site**

Run:

```bash
npm run docs:build
```

Expected: VitePress build completes successfully.

- [ ] **Step 2: Inspect git state**

Run:

```bash
git status --short
git diff --stat
```

Expected: only the intended chapter-seven manuscript, navigation, and validation changes are present.

- [ ] **Step 3: Commit**

Run:

```bash
git add .
git commit -m "docs: expand book with seventh chapter batch"
```

Expected: commit succeeds with the chapter-seven manuscript batch.

- [ ] **Step 4: Push**

Run:

```bash
git push origin main
```

Expected: GitHub `main` contains the seventh chapter expansion.
