# Web3 Book Chapter 3 Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the current ten-volume manuscript from two chapters per volume to three chapters per volume by adding chapter three bundles across Volumes 1 through 10, updating the published navigation, and extending validation coverage.

**Architecture:** Keep the existing `part-* / chapter-*` tree and extend each volume with one more full chapter bundle that follows the same publishing contract: chapter landing page, one main explanatory page, `exercises.md`, `practice.md`, and `reading.md`. Update `book/.vitepress/config.ts`, `book/full-toc.md`, and `scripts/validate-book.mjs` in the same batch so the site shell and validator both recognize the new chapter layer.

**Tech Stack:** Node.js, VitePress, Markdown, Mermaid, GitHub Pages

---

## Scope Check

This plan covers one clear manuscript batch: the third chapter in each of the ten existing volumes. It does not try to finish the entire long-form book in one pass, but it does make the published book materially more complete and better aligned with the approved Phase 2 / Phase 3 direction.

## File Structure

### Modify

- `book/.vitepress/config.ts`
- `book/full-toc.md`
- `scripts/validate-book.mjs`

### Create

- `book/part-1-foundations/chapter-03-gas-fee-and-receipt/*`
- `book/part-2-solidity/chapter-03-openzeppelin-and-standard-tokens/*`
- `book/part-3-foundry/chapter-03-scripts-deploy-and-verify/*`
- `book/part-4-evm/chapter-03-storage-slots-and-layout/*`
- `book/part-5-gas/chapter-03-optimization-patterns-and-tradeoffs/*`
- `book/part-6-security/chapter-03-oracle-flash-loan-and-mev/*`
- `book/part-7-ethereum-internals/chapter-03-trie-and-state-root/*`
- `book/part-8-defi/chapter-03-lending-collateral-and-liquidation/*`
- `book/part-9-protocol-reading/chapter-03-reading-uniswap-v2/*`
- `book/part-10-training/chapter-03-project-review-and-portfolio/*`

## Task 1: Expand Volumes 1 Through 5 With Chapter 3 Bundles

**Files:**
- Create: `book/part-1-foundations/chapter-03-gas-fee-and-receipt/index.md`
- Create: `book/part-1-foundations/chapter-03-gas-fee-and-receipt/fee-receipt-and-revert.md`
- Create: `book/part-1-foundations/chapter-03-gas-fee-and-receipt/exercises.md`
- Create: `book/part-1-foundations/chapter-03-gas-fee-and-receipt/practice.md`
- Create: `book/part-1-foundations/chapter-03-gas-fee-and-receipt/reading.md`
- Create: `book/part-2-solidity/chapter-03-openzeppelin-and-standard-tokens/index.md`
- Create: `book/part-2-solidity/chapter-03-openzeppelin-and-standard-tokens/why-standards-matter.md`
- Create: `book/part-2-solidity/chapter-03-openzeppelin-and-standard-tokens/exercises.md`
- Create: `book/part-2-solidity/chapter-03-openzeppelin-and-standard-tokens/practice.md`
- Create: `book/part-2-solidity/chapter-03-openzeppelin-and-standard-tokens/reading.md`
- Create: `book/part-3-foundry/chapter-03-scripts-deploy-and-verify/index.md`
- Create: `book/part-3-foundry/chapter-03-scripts-deploy-and-verify/deploy-repeatability.md`
- Create: `book/part-3-foundry/chapter-03-scripts-deploy-and-verify/exercises.md`
- Create: `book/part-3-foundry/chapter-03-scripts-deploy-and-verify/practice.md`
- Create: `book/part-3-foundry/chapter-03-scripts-deploy-and-verify/reading.md`
- Create: `book/part-4-evm/chapter-03-storage-slots-and-layout/index.md`
- Create: `book/part-4-evm/chapter-03-storage-slots-and-layout/how-layout-maps-to-slots.md`
- Create: `book/part-4-evm/chapter-03-storage-slots-and-layout/exercises.md`
- Create: `book/part-4-evm/chapter-03-storage-slots-and-layout/practice.md`
- Create: `book/part-4-evm/chapter-03-storage-slots-and-layout/reading.md`
- Create: `book/part-5-gas/chapter-03-optimization-patterns-and-tradeoffs/index.md`
- Create: `book/part-5-gas/chapter-03-optimization-patterns-and-tradeoffs/high-value-optimizations.md`
- Create: `book/part-5-gas/chapter-03-optimization-patterns-and-tradeoffs/exercises.md`
- Create: `book/part-5-gas/chapter-03-optimization-patterns-and-tradeoffs/practice.md`
- Create: `book/part-5-gas/chapter-03-optimization-patterns-and-tradeoffs/reading.md`

- [ ] **Step 1: Create chapter-03 directories for Volumes 1 through 5**

Run:

```bash
mkdir -p \
  book/part-1-foundations/chapter-03-gas-fee-and-receipt \
  book/part-2-solidity/chapter-03-openzeppelin-and-standard-tokens \
  book/part-3-foundry/chapter-03-scripts-deploy-and-verify \
  book/part-4-evm/chapter-03-storage-slots-and-layout \
  book/part-5-gas/chapter-03-optimization-patterns-and-tradeoffs
```

Expected: all five new chapter directories exist.

- [ ] **Step 2: Write chapter index pages and core explanatory pages**

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

Expected: each chapter reads like the third natural stop in that volume’s learning path.

- [ ] **Step 3: Write support pages**

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

Expected: each chapter bundle is complete and structurally consistent.

## Task 2: Expand Volumes 6 Through 10 With Chapter 3 Bundles

**Files:**
- Create: `book/part-6-security/chapter-03-oracle-flash-loan-and-mev/index.md`
- Create: `book/part-6-security/chapter-03-oracle-flash-loan-and-mev/price-dependence-risk.md`
- Create: `book/part-6-security/chapter-03-oracle-flash-loan-and-mev/exercises.md`
- Create: `book/part-6-security/chapter-03-oracle-flash-loan-and-mev/practice.md`
- Create: `book/part-6-security/chapter-03-oracle-flash-loan-and-mev/reading.md`
- Create: `book/part-7-ethereum-internals/chapter-03-trie-and-state-root/index.md`
- Create: `book/part-7-ethereum-internals/chapter-03-trie-and-state-root/state-root-intuition.md`
- Create: `book/part-7-ethereum-internals/chapter-03-trie-and-state-root/exercises.md`
- Create: `book/part-7-ethereum-internals/chapter-03-trie-and-state-root/practice.md`
- Create: `book/part-7-ethereum-internals/chapter-03-trie-and-state-root/reading.md`
- Create: `book/part-8-defi/chapter-03-lending-collateral-and-liquidation/index.md`
- Create: `book/part-8-defi/chapter-03-lending-collateral-and-liquidation/health-factor-and-liquidation.md`
- Create: `book/part-8-defi/chapter-03-lending-collateral-and-liquidation/exercises.md`
- Create: `book/part-8-defi/chapter-03-lending-collateral-and-liquidation/practice.md`
- Create: `book/part-8-defi/chapter-03-lending-collateral-and-liquidation/reading.md`
- Create: `book/part-9-protocol-reading/chapter-03-reading-uniswap-v2/index.md`
- Create: `book/part-9-protocol-reading/chapter-03-reading-uniswap-v2/pair-state-and-swap-flow.md`
- Create: `book/part-9-protocol-reading/chapter-03-reading-uniswap-v2/exercises.md`
- Create: `book/part-9-protocol-reading/chapter-03-reading-uniswap-v2/practice.md`
- Create: `book/part-9-protocol-reading/chapter-03-reading-uniswap-v2/reading.md`
- Create: `book/part-10-training/chapter-03-project-review-and-portfolio/index.md`
- Create: `book/part-10-training/chapter-03-project-review-and-portfolio/turn-work-into-assets.md`
- Create: `book/part-10-training/chapter-03-project-review-and-portfolio/exercises.md`
- Create: `book/part-10-training/chapter-03-project-review-and-portfolio/practice.md`
- Create: `book/part-10-training/chapter-03-project-review-and-portfolio/reading.md`

- [ ] **Step 1: Create chapter-03 directories for Volumes 6 through 10**

Run:

```bash
mkdir -p \
  book/part-6-security/chapter-03-oracle-flash-loan-and-mev \
  book/part-7-ethereum-internals/chapter-03-trie-and-state-root \
  book/part-8-defi/chapter-03-lending-collateral-and-liquidation \
  book/part-9-protocol-reading/chapter-03-reading-uniswap-v2 \
  book/part-10-training/chapter-03-project-review-and-portfolio
```

Expected: all five new chapter directories exist.

- [ ] **Step 2: Write chapter index pages and core explanatory pages**

Use the same heading contract as Task 1.

Expected: each back-half chapter materially deepens protocol, internals, DeFi, or training coverage.

- [ ] **Step 3: Write support pages**

Use the same `exercises.md`, `practice.md`, and `reading.md` contract as Task 1.

Expected: the advanced half of the book keeps the same chapter rhythm as the front half.

## Task 3: Update Published Navigation, Table Of Contents, And Validation

**Files:**
- Modify: `book/.vitepress/config.ts`
- Modify: `book/full-toc.md`
- Modify: `scripts/validate-book.mjs`

- [ ] **Step 1: Add chapter-03 links to the VitePress sidebar**

Update each volume group in `book/.vitepress/config.ts` so it now shows:

- volume landing page
- chapter 1
- chapter 2
- chapter 3

Expected: all ten volume groups visibly expose three chapters in the published sidebar.

- [ ] **Step 2: Expand the full table of contents**

Update `book/full-toc.md` so every volume lists the first three actual chapter titles that now exist on disk.

Expected: the printed table of contents matches the repository structure.

- [ ] **Step 3: Extend validator coverage**

Add validation checks for all ten chapter-03 bundles in `scripts/validate-book.mjs`, preserving the same heading contract already used for chapter 1 and chapter 2 bundles.

Run:

```bash
npm run docs:check
```

Expected: structure validation passes with the new `chaptersF` and `chaptersG` scope groups or equivalent grouping.

## Task 4: Verify, Commit, And Publish

**Files:**
- Modify: all touched files from Tasks 1 through 3

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

Expected: only the intended manuscript expansion files are staged for publication.

- [ ] **Step 3: Commit**

Run:

```bash
git add .
git commit -m "docs: expand book with third chapter batch"
```

Expected: commit succeeds with the new third-chapter manuscript bundle.

- [ ] **Step 4: Push**

Run:

```bash
git push origin main
```

Expected: GitHub `main` contains the new chapter-03 expansion.
