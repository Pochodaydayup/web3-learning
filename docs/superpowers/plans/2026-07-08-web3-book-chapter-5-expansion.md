# Web3 Book Chapter 5 Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the current ten-volume manuscript from four chapters per volume to five chapters per volume by adding chapter five bundles across Volumes 1 through 10, updating the public navigation, and extending validation coverage.

**Architecture:** Keep the existing `part-* / chapter-*` manuscript structure and extend each volume with one more full chapter bundle that matches the publishing contract already established by chapters one through four: chapter landing page, one main explanatory page, `exercises.md`, `practice.md`, and `reading.md`. Update the ten volume index pages, `book/.vitepress/config.ts`, `book/full-toc.md`, and `scripts/validate-book.mjs` in the same batch so the site shell and validator remain aligned with the content tree.

**Tech Stack:** Node.js, VitePress, Markdown, Mermaid, GitHub Pages

---

## Scope Check

This plan covers one coherent manuscript batch: the fifth chapter in each of the ten existing volumes. It does not finish the entire long-form manuscript, but it completes the first visible five-chapter arc for every volume and makes the site feel much closer to a real book than a partial draft.

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

- `book/part-1-foundations/chapter-05-chain-async-state-management/*`
- `book/part-2-solidity/chapter-05-state-machine-thinking/*`
- `book/part-3-foundry/chapter-05-ci-and-engineering-automation/*`
- `book/part-4-evm/chapter-05-bytecode-and-selectors/*`
- `book/part-5-gas/chapter-05-readability-maintainability-and-tradeoffs/*`
- `book/part-6-security/chapter-05-security-testing-and-audit-collaboration/*`
- `book/part-7-ethereum-internals/chapter-05-consensus-validators-and-finality/*`
- `book/part-8-defi/chapter-05-mev-arbitrage-and-protocol-constraints/*`
- `book/part-9-protocol-reading/chapter-05-reading-eigenlayer/*`
- `book/part-10-training/chapter-05-long-term-learning-system/*`

## Task 1: Expand Volumes 1 Through 5 With Chapter 5 Bundles

**Files:**
- Create: `book/part-1-foundations/chapter-05-chain-async-state-management/index.md`
- Create: `book/part-1-foundations/chapter-05-chain-async-state-management/frontend-state-under-chain-latency.md`
- Create: `book/part-1-foundations/chapter-05-chain-async-state-management/exercises.md`
- Create: `book/part-1-foundations/chapter-05-chain-async-state-management/practice.md`
- Create: `book/part-1-foundations/chapter-05-chain-async-state-management/reading.md`
- Create: `book/part-2-solidity/chapter-05-state-machine-thinking/index.md`
- Create: `book/part-2-solidity/chapter-05-state-machine-thinking/modeling-contract-lifecycle.md`
- Create: `book/part-2-solidity/chapter-05-state-machine-thinking/exercises.md`
- Create: `book/part-2-solidity/chapter-05-state-machine-thinking/practice.md`
- Create: `book/part-2-solidity/chapter-05-state-machine-thinking/reading.md`
- Create: `book/part-3-foundry/chapter-05-ci-and-engineering-automation/index.md`
- Create: `book/part-3-foundry/chapter-05-ci-and-engineering-automation/reliable-contract-delivery.md`
- Create: `book/part-3-foundry/chapter-05-ci-and-engineering-automation/exercises.md`
- Create: `book/part-3-foundry/chapter-05-ci-and-engineering-automation/practice.md`
- Create: `book/part-3-foundry/chapter-05-ci-and-engineering-automation/reading.md`
- Create: `book/part-4-evm/chapter-05-bytecode-and-selectors/index.md`
- Create: `book/part-4-evm/chapter-05-bytecode-and-selectors/from-signature-to-runtime.md`
- Create: `book/part-4-evm/chapter-05-bytecode-and-selectors/exercises.md`
- Create: `book/part-4-evm/chapter-05-bytecode-and-selectors/practice.md`
- Create: `book/part-4-evm/chapter-05-bytecode-and-selectors/reading.md`
- Create: `book/part-5-gas/chapter-05-readability-maintainability-and-tradeoffs/index.md`
- Create: `book/part-5-gas/chapter-05-readability-maintainability-and-tradeoffs/when-not-to-optimize.md`
- Create: `book/part-5-gas/chapter-05-readability-maintainability-and-tradeoffs/exercises.md`
- Create: `book/part-5-gas/chapter-05-readability-maintainability-and-tradeoffs/practice.md`
- Create: `book/part-5-gas/chapter-05-readability-maintainability-and-tradeoffs/reading.md`

- [ ] **Step 1: Create chapter-05 directories for Volumes 1 through 5**

Run:

```bash
mkdir -p \
  book/part-1-foundations/chapter-05-chain-async-state-management \
  book/part-2-solidity/chapter-05-state-machine-thinking \
  book/part-3-foundry/chapter-05-ci-and-engineering-automation \
  book/part-4-evm/chapter-05-bytecode-and-selectors \
  book/part-5-gas/chapter-05-readability-maintainability-and-tradeoffs
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

Expected: each chapter closes the first five-chapter arc in a way that feels like a natural culmination of its volume.

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

## Task 2: Expand Volumes 6 Through 10 With Chapter 5 Bundles

**Files:**
- Create: `book/part-6-security/chapter-05-security-testing-and-audit-collaboration/index.md`
- Create: `book/part-6-security/chapter-05-security-testing-and-audit-collaboration/how-to-hand-off-risk.md`
- Create: `book/part-6-security/chapter-05-security-testing-and-audit-collaboration/exercises.md`
- Create: `book/part-6-security/chapter-05-security-testing-and-audit-collaboration/practice.md`
- Create: `book/part-6-security/chapter-05-security-testing-and-audit-collaboration/reading.md`
- Create: `book/part-7-ethereum-internals/chapter-05-consensus-validators-and-finality/index.md`
- Create: `book/part-7-ethereum-internals/chapter-05-consensus-validators-and-finality/why-finality-is-probabilistic-and-economic.md`
- Create: `book/part-7-ethereum-internals/chapter-05-consensus-validators-and-finality/exercises.md`
- Create: `book/part-7-ethereum-internals/chapter-05-consensus-validators-and-finality/practice.md`
- Create: `book/part-7-ethereum-internals/chapter-05-consensus-validators-and-finality/reading.md`
- Create: `book/part-8-defi/chapter-05-mev-arbitrage-and-protocol-constraints/index.md`
- Create: `book/part-8-defi/chapter-05-mev-arbitrage-and-protocol-constraints/when-protocols-compete-in-public.md`
- Create: `book/part-8-defi/chapter-05-mev-arbitrage-and-protocol-constraints/exercises.md`
- Create: `book/part-8-defi/chapter-05-mev-arbitrage-and-protocol-constraints/practice.md`
- Create: `book/part-8-defi/chapter-05-mev-arbitrage-and-protocol-constraints/reading.md`
- Create: `book/part-9-protocol-reading/chapter-05-reading-eigenlayer/index.md`
- Create: `book/part-9-protocol-reading/chapter-05-reading-eigenlayer/reading-restaking-systems.md`
- Create: `book/part-9-protocol-reading/chapter-05-reading-eigenlayer/exercises.md`
- Create: `book/part-9-protocol-reading/chapter-05-reading-eigenlayer/practice.md`
- Create: `book/part-9-protocol-reading/chapter-05-reading-eigenlayer/reading.md`
- Create: `book/part-10-training/chapter-05-long-term-learning-system/index.md`
- Create: `book/part-10-training/chapter-05-long-term-learning-system/how-to-keep-compounding.md`
- Create: `book/part-10-training/chapter-05-long-term-learning-system/exercises.md`
- Create: `book/part-10-training/chapter-05-long-term-learning-system/practice.md`
- Create: `book/part-10-training/chapter-05-long-term-learning-system/reading.md`

- [ ] **Step 1: Create chapter-05 directories for Volumes 6 through 10**

Run:

```bash
mkdir -p \
  book/part-6-security/chapter-05-security-testing-and-audit-collaboration \
  book/part-7-ethereum-internals/chapter-05-consensus-validators-and-finality \
  book/part-8-defi/chapter-05-mev-arbitrage-and-protocol-constraints \
  book/part-9-protocol-reading/chapter-05-reading-eigenlayer \
  book/part-10-training/chapter-05-long-term-learning-system
```

Expected: all five new chapter directories exist.

- [ ] **Step 2: Write chapter index pages and core explanatory pages**

Use the same heading contract as Task 1.

Expected: each back-half chapter deepens security workflow, chain internals, DeFi system constraints, complex protocol reading, or long-term training discipline.

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

- [ ] **Step 1: Link chapter-05 bundles from all ten volume index pages**

Replace the current plain-text chapter five placeholder in each volume index with a Markdown link that matches the new directory.

Expected: each volume landing page directly exposes five completed chapters.

- [ ] **Step 2: Add chapter-05 links to the VitePress sidebar**

Update each volume group in `book/.vitepress/config.ts` so it now shows:

- volume landing page
- chapter 1
- chapter 2
- chapter 3
- chapter 4
- chapter 5

Expected: all ten volume groups visibly expose five chapters in the published sidebar.

- [ ] **Step 3: Expand the full table of contents**

Update `book/full-toc.md` so every volume lists the first five actual chapter titles that now exist on disk.

Expected: the printed table of contents matches the repository structure.

- [ ] **Step 4: Extend validator coverage**

Add validation checks for all ten chapter-05 bundles in `scripts/validate-book.mjs`, preserving the same heading contract already used for chapter 1 through chapter 4 bundles.

Run:

```bash
npm run docs:check
```

Expected: structure validation passes with new chapter-05 scope groups.

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
git commit -m "docs: expand book with fifth chapter batch"
```

Expected: commit succeeds with the new fifth-chapter manuscript bundle.

- [ ] **Step 4: Push**

Run:

```bash
git push origin main
```

Expected: GitHub `main` contains the new manuscript expansion.
