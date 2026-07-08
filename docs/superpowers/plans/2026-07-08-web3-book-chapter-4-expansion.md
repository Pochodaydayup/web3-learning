# Web3 Book Chapter 4 Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the current ten-volume manuscript from three chapters per volume to four chapters per volume by adding chapter four bundles across Volumes 1 through 10, updating the public navigation, and extending validation coverage.

**Architecture:** Keep the existing `part-* / chapter-*` manuscript structure and extend each volume with one more full chapter bundle that matches the publishing contract already used by chapters one through three: chapter landing page, one main explanatory page, `exercises.md`, `practice.md`, and `reading.md`. Update `book/.vitepress/config.ts`, `book/full-toc.md`, the ten volume index pages, and `scripts/validate-book.mjs` in the same batch so the site shell and validator remain aligned with the content tree.

**Tech Stack:** Node.js, VitePress, Markdown, Mermaid, GitHub Pages

---

## Scope Check

This plan covers one coherent manuscript batch: the fourth chapter in each of the ten existing volumes. It does not attempt final-book completion in one pass, but it materially extends the main learning path and keeps the repository deployable after the batch lands.

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

- `book/part-1-foundations/chapter-04-events-logs-and-indexing/*`
- `book/part-2-solidity/chapter-04-upgradeability-and-initialization/*`
- `book/part-3-foundry/chapter-04-debugging-trace-and-gas/*`
- `book/part-4-evm/chapter-04-low-level-calls-and-revert-data/*`
- `book/part-5-gas/chapter-04-batching-loops-and-complexity/*`
- `book/part-6-security/chapter-04-upgrade-proxy-and-init-risks/*`
- `book/part-7-ethereum-internals/chapter-04-gas-limit-base-fee-and-inclusion/*`
- `book/part-8-defi/chapter-04-oracle-twap-and-manipulation/*`
- `book/part-9-protocol-reading/chapter-04-reading-aave/*`
- `book/part-10-training/chapter-04-portfolio-and-notes-repository/*`

## Task 1: Expand Volumes 1 Through 5 With Chapter 4 Bundles

**Files:**
- Create: `book/part-1-foundations/chapter-04-events-logs-and-indexing/index.md`
- Create: `book/part-1-foundations/chapter-04-events-logs-and-indexing/what-events-can-and-cannot-do.md`
- Create: `book/part-1-foundations/chapter-04-events-logs-and-indexing/exercises.md`
- Create: `book/part-1-foundations/chapter-04-events-logs-and-indexing/practice.md`
- Create: `book/part-1-foundations/chapter-04-events-logs-and-indexing/reading.md`
- Create: `book/part-2-solidity/chapter-04-upgradeability-and-initialization/index.md`
- Create: `book/part-2-solidity/chapter-04-upgradeability-and-initialization/proxy-init-and-storage-discipline.md`
- Create: `book/part-2-solidity/chapter-04-upgradeability-and-initialization/exercises.md`
- Create: `book/part-2-solidity/chapter-04-upgradeability-and-initialization/practice.md`
- Create: `book/part-2-solidity/chapter-04-upgradeability-and-initialization/reading.md`
- Create: `book/part-3-foundry/chapter-04-debugging-trace-and-gas/index.md`
- Create: `book/part-3-foundry/chapter-04-debugging-trace-and-gas/trace-first-debugging.md`
- Create: `book/part-3-foundry/chapter-04-debugging-trace-and-gas/exercises.md`
- Create: `book/part-3-foundry/chapter-04-debugging-trace-and-gas/practice.md`
- Create: `book/part-3-foundry/chapter-04-debugging-trace-and-gas/reading.md`
- Create: `book/part-4-evm/chapter-04-low-level-calls-and-revert-data/index.md`
- Create: `book/part-4-evm/chapter-04-low-level-calls-and-revert-data/call-return-and-revert.md`
- Create: `book/part-4-evm/chapter-04-low-level-calls-and-revert-data/exercises.md`
- Create: `book/part-4-evm/chapter-04-low-level-calls-and-revert-data/practice.md`
- Create: `book/part-4-evm/chapter-04-low-level-calls-and-revert-data/reading.md`
- Create: `book/part-5-gas/chapter-04-batching-loops-and-complexity/index.md`
- Create: `book/part-5-gas/chapter-04-batching-loops-and-complexity/cost-growth-and-batching.md`
- Create: `book/part-5-gas/chapter-04-batching-loops-and-complexity/exercises.md`
- Create: `book/part-5-gas/chapter-04-batching-loops-and-complexity/practice.md`
- Create: `book/part-5-gas/chapter-04-batching-loops-and-complexity/reading.md`

- [ ] **Step 1: Create chapter-04 directories for Volumes 1 through 5**

Run:

```bash
mkdir -p \
  book/part-1-foundations/chapter-04-events-logs-and-indexing \
  book/part-2-solidity/chapter-04-upgradeability-and-initialization \
  book/part-3-foundry/chapter-04-debugging-trace-and-gas \
  book/part-4-evm/chapter-04-low-level-calls-and-revert-data \
  book/part-5-gas/chapter-04-batching-loops-and-complexity
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

Expected: each chapter reads like the fourth natural stop in that volume’s learning path.

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

## Task 2: Expand Volumes 6 Through 10 With Chapter 4 Bundles

**Files:**
- Create: `book/part-6-security/chapter-04-upgrade-proxy-and-init-risks/index.md`
- Create: `book/part-6-security/chapter-04-upgrade-proxy-and-init-risks/proxy-risk-review.md`
- Create: `book/part-6-security/chapter-04-upgrade-proxy-and-init-risks/exercises.md`
- Create: `book/part-6-security/chapter-04-upgrade-proxy-and-init-risks/practice.md`
- Create: `book/part-6-security/chapter-04-upgrade-proxy-and-init-risks/reading.md`
- Create: `book/part-7-ethereum-internals/chapter-04-gas-limit-base-fee-and-inclusion/index.md`
- Create: `book/part-7-ethereum-internals/chapter-04-gas-limit-base-fee-and-inclusion/inclusion-economics.md`
- Create: `book/part-7-ethereum-internals/chapter-04-gas-limit-base-fee-and-inclusion/exercises.md`
- Create: `book/part-7-ethereum-internals/chapter-04-gas-limit-base-fee-and-inclusion/practice.md`
- Create: `book/part-7-ethereum-internals/chapter-04-gas-limit-base-fee-and-inclusion/reading.md`
- Create: `book/part-8-defi/chapter-04-oracle-twap-and-manipulation/index.md`
- Create: `book/part-8-defi/chapter-04-oracle-twap-and-manipulation/oracle-design-and-failure-modes.md`
- Create: `book/part-8-defi/chapter-04-oracle-twap-and-manipulation/exercises.md`
- Create: `book/part-8-defi/chapter-04-oracle-twap-and-manipulation/practice.md`
- Create: `book/part-8-defi/chapter-04-oracle-twap-and-manipulation/reading.md`
- Create: `book/part-9-protocol-reading/chapter-04-reading-aave/index.md`
- Create: `book/part-9-protocol-reading/chapter-04-reading-aave/lending-state-and-risk-flow.md`
- Create: `book/part-9-protocol-reading/chapter-04-reading-aave/exercises.md`
- Create: `book/part-9-protocol-reading/chapter-04-reading-aave/practice.md`
- Create: `book/part-9-protocol-reading/chapter-04-reading-aave/reading.md`
- Create: `book/part-10-training/chapter-04-portfolio-and-notes-repository/index.md`
- Create: `book/part-10-training/chapter-04-portfolio-and-notes-repository/build-a-public-learning-asset.md`
- Create: `book/part-10-training/chapter-04-portfolio-and-notes-repository/exercises.md`
- Create: `book/part-10-training/chapter-04-portfolio-and-notes-repository/practice.md`
- Create: `book/part-10-training/chapter-04-portfolio-and-notes-repository/reading.md`

- [ ] **Step 1: Create chapter-04 directories for Volumes 6 through 10**

Run:

```bash
mkdir -p \
  book/part-6-security/chapter-04-upgrade-proxy-and-init-risks \
  book/part-7-ethereum-internals/chapter-04-gas-limit-base-fee-and-inclusion \
  book/part-8-defi/chapter-04-oracle-twap-and-manipulation \
  book/part-9-protocol-reading/chapter-04-reading-aave \
  book/part-10-training/chapter-04-portfolio-and-notes-repository
```

Expected: all five new chapter directories exist.

- [ ] **Step 2: Write chapter index pages and core explanatory pages**

Use the same heading contract as Task 1.

Expected: each back-half chapter materially deepens security, internals, DeFi, protocol reading, or training coverage.

- [ ] **Step 3: Write support pages**

Use the same `exercises.md`, `practice.md`, and `reading.md` contract as Task 1.

Expected: the advanced half of the book keeps the same chapter rhythm as the front half.

## Task 3: Update Volume Indexes, Navigation, Table Of Contents, And Validation

**Files:**
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
- Modify: `book/.vitepress/config.ts`
- Modify: `book/full-toc.md`
- Modify: `scripts/validate-book.mjs`

- [ ] **Step 1: Link chapter-04 bundles from all ten volume index pages**

Replace the current plain-text chapter four placeholder in each volume index with a Markdown link that matches the new directory.

Expected: each volume landing page directly exposes four completed chapters.

- [ ] **Step 2: Add chapter-04 links to the VitePress sidebar**

Update each volume group in `book/.vitepress/config.ts` so it now shows:

- volume landing page
- chapter 1
- chapter 2
- chapter 3
- chapter 4

Expected: all ten volume groups visibly expose four chapters in the published sidebar.

- [ ] **Step 3: Expand the full table of contents**

Update `book/full-toc.md` so every volume lists the first four actual chapter titles that now exist on disk.

Expected: the printed table of contents matches the repository structure.

- [ ] **Step 4: Extend validator coverage**

Add validation checks for all ten chapter-04 bundles in `scripts/validate-book.mjs`, preserving the same heading contract already used for chapter 1 through chapter 3 bundles.

Run:

```bash
npm run docs:check
```

Expected: structure validation passes with new chapter-04 scope groups.

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
git commit -m "docs: expand book with fourth chapter batch"
```

Expected: commit succeeds with the new fourth-chapter manuscript bundle.

- [ ] **Step 4: Push**

Run:

```bash
git push origin main
```

Expected: GitHub `main` contains the new manuscript expansion.
