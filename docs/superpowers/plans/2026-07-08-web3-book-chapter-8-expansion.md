# Web3 Book Chapter 8 Expansion Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the ten-volume Web3 learning book with an eighth chapter in every volume, continuing the manuscript from a structured multi-volume curriculum toward a fuller long-form technical book.

**Architecture:** Keep the current `part-* / chapter-*` organization and add one complete chapter bundle per volume. Every new bundle must include a landing page, one substantial main explanatory page, `exercises.md`, `practice.md`, and `reading.md`. Navigation, printed TOC, and validation coverage must be updated in the same batch so the VitePress site remains coherent.

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

- `book/part-1-foundations/chapter-08-transaction-simulation-and-preflight-checks/*`
- `book/part-2-solidity/chapter-08-iteration-enumeration-and-onchain-data-structures/*`
- `book/part-3-foundry/chapter-08-static-analysis-coverage-and-security-tooling/*`
- `book/part-4-evm/chapter-08-code-introspection-extcode-and-selfdestruct/*`
- `book/part-5-gas/chapter-08-offchain-computation-and-cost-shifting/*`
- `book/part-6-security/chapter-08-denial-of-service-griefing-and-liveness/*`
- `book/part-7-ethereum-internals/chapter-08-mev-builders-and-block-construction/*`
- `book/part-8-defi/chapter-08-perpetuals-leverage-and-funding/*`
- `book/part-9-protocol-reading/chapter-08-reading-curve/*`
- `book/part-10-training/chapter-08-specialization-and-long-term-positioning/*`

## Task 1: Write Chapter 8 Manuscript Bundles

**Files:**
- Create: `book/part-1-foundations/chapter-08-transaction-simulation-and-preflight-checks/index.md`
- Create: `book/part-1-foundations/chapter-08-transaction-simulation-and-preflight-checks/what-simulation-can-and-cannot-promise.md`
- Create: `book/part-1-foundations/chapter-08-transaction-simulation-and-preflight-checks/exercises.md`
- Create: `book/part-1-foundations/chapter-08-transaction-simulation-and-preflight-checks/practice.md`
- Create: `book/part-1-foundations/chapter-08-transaction-simulation-and-preflight-checks/reading.md`
- Create: `book/part-2-solidity/chapter-08-iteration-enumeration-and-onchain-data-structures/index.md`
- Create: `book/part-2-solidity/chapter-08-iteration-enumeration-and-onchain-data-structures/why-onchain-state-is-hard-to-list.md`
- Create: `book/part-2-solidity/chapter-08-iteration-enumeration-and-onchain-data-structures/exercises.md`
- Create: `book/part-2-solidity/chapter-08-iteration-enumeration-and-onchain-data-structures/practice.md`
- Create: `book/part-2-solidity/chapter-08-iteration-enumeration-and-onchain-data-structures/reading.md`
- Create: `book/part-3-foundry/chapter-08-static-analysis-coverage-and-security-tooling/index.md`
- Create: `book/part-3-foundry/chapter-08-static-analysis-coverage-and-security-tooling/beyond-tests-in-the-contract-toolchain.md`
- Create: `book/part-3-foundry/chapter-08-static-analysis-coverage-and-security-tooling/exercises.md`
- Create: `book/part-3-foundry/chapter-08-static-analysis-coverage-and-security-tooling/practice.md`
- Create: `book/part-3-foundry/chapter-08-static-analysis-coverage-and-security-tooling/reading.md`
- Create: `book/part-4-evm/chapter-08-code-introspection-extcode-and-selfdestruct/index.md`
- Create: `book/part-4-evm/chapter-08-code-introspection-extcode-and-selfdestruct/what-contract-code-can-and-cannot-tell-you.md`
- Create: `book/part-4-evm/chapter-08-code-introspection-extcode-and-selfdestruct/exercises.md`
- Create: `book/part-4-evm/chapter-08-code-introspection-extcode-and-selfdestruct/practice.md`
- Create: `book/part-4-evm/chapter-08-code-introspection-extcode-and-selfdestruct/reading.md`
- Create: `book/part-5-gas/chapter-08-offchain-computation-and-cost-shifting/index.md`
- Create: `book/part-5-gas/chapter-08-offchain-computation-and-cost-shifting/deciding-what-not-to-do-onchain.md`
- Create: `book/part-5-gas/chapter-08-offchain-computation-and-cost-shifting/exercises.md`
- Create: `book/part-5-gas/chapter-08-offchain-computation-and-cost-shifting/practice.md`
- Create: `book/part-5-gas/chapter-08-offchain-computation-and-cost-shifting/reading.md`
- Create: `book/part-6-security/chapter-08-denial-of-service-griefing-and-liveness/index.md`
- Create: `book/part-6-security/chapter-08-denial-of-service-griefing-and-liveness/when-nothing-is-stolen-but-the-system-stops.md`
- Create: `book/part-6-security/chapter-08-denial-of-service-griefing-and-liveness/exercises.md`
- Create: `book/part-6-security/chapter-08-denial-of-service-griefing-and-liveness/practice.md`
- Create: `book/part-6-security/chapter-08-denial-of-service-griefing-and-liveness/reading.md`
- Create: `book/part-7-ethereum-internals/chapter-08-mev-builders-and-block-construction/index.md`
- Create: `book/part-7-ethereum-internals/chapter-08-mev-builders-and-block-construction/who-really-decides-transaction-order.md`
- Create: `book/part-7-ethereum-internals/chapter-08-mev-builders-and-block-construction/exercises.md`
- Create: `book/part-7-ethereum-internals/chapter-08-mev-builders-and-block-construction/practice.md`
- Create: `book/part-7-ethereum-internals/chapter-08-mev-builders-and-block-construction/reading.md`
- Create: `book/part-8-defi/chapter-08-perpetuals-leverage-and-funding/index.md`
- Create: `book/part-8-defi/chapter-08-perpetuals-leverage-and-funding/how-onchain-derivatives-stay-close-to-spot.md`
- Create: `book/part-8-defi/chapter-08-perpetuals-leverage-and-funding/exercises.md`
- Create: `book/part-8-defi/chapter-08-perpetuals-leverage-and-funding/practice.md`
- Create: `book/part-8-defi/chapter-08-perpetuals-leverage-and-funding/reading.md`
- Create: `book/part-9-protocol-reading/chapter-08-reading-curve/index.md`
- Create: `book/part-9-protocol-reading/chapter-08-reading-curve/reading-stableswap-systems.md`
- Create: `book/part-9-protocol-reading/chapter-08-reading-curve/exercises.md`
- Create: `book/part-9-protocol-reading/chapter-08-reading-curve/practice.md`
- Create: `book/part-9-protocol-reading/chapter-08-reading-curve/reading.md`
- Create: `book/part-10-training/chapter-08-specialization-and-long-term-positioning/index.md`
- Create: `book/part-10-training/chapter-08-specialization-and-long-term-positioning/choosing-what-to-be-known-for.md`
- Create: `book/part-10-training/chapter-08-specialization-and-long-term-positioning/exercises.md`
- Create: `book/part-10-training/chapter-08-specialization-and-long-term-positioning/practice.md`
- Create: `book/part-10-training/chapter-08-specialization-and-long-term-positioning/reading.md`

- [ ] **Step 1: Create the ten new chapter directories**

Run:

```bash
mkdir -p \
  book/part-1-foundations/chapter-08-transaction-simulation-and-preflight-checks \
  book/part-2-solidity/chapter-08-iteration-enumeration-and-onchain-data-structures \
  book/part-3-foundry/chapter-08-static-analysis-coverage-and-security-tooling \
  book/part-4-evm/chapter-08-code-introspection-extcode-and-selfdestruct \
  book/part-5-gas/chapter-08-offchain-computation-and-cost-shifting \
  book/part-6-security/chapter-08-denial-of-service-griefing-and-liveness \
  book/part-7-ethereum-internals/chapter-08-mev-builders-and-block-construction \
  book/part-8-defi/chapter-08-perpetuals-leverage-and-funding \
  book/part-9-protocol-reading/chapter-08-reading-curve \
  book/part-10-training/chapter-08-specialization-and-long-term-positioning
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

Expected: every new chapter feels like the next natural step after chapter seven and materially deepens the book.

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

Expected: the support pages continue the read-practice-read-source loop established in earlier batches.

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

- [ ] **Step 1: Link chapter eight from all volume landing pages**

Expected: each volume landing page now lists eight live chapters.

- [ ] **Step 2: Add chapter eight to sidebars and printed TOC**

Expected: VitePress sidebar and `book/full-toc.md` both expose the new chapter-eight paths for all ten volumes.

- [ ] **Step 3: Extend validation coverage**

Add chapter-eight scopes to `scripts/validate-book.mjs` using the same heading contract as the prior batches.

Run:

```bash
npm run docs:check
```

Expected: validator passes with the new chapter-eight files included.

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

Expected: only the intended chapter-eight manuscript, navigation, and validator changes are present.

- [ ] **Step 3: Commit**

Run:

```bash
git add .
git commit -m "docs: expand book with eighth chapter batch"
```

Expected: commit succeeds with the chapter-eight manuscript batch.

- [ ] **Step 4: Push**

Run:

```bash
git push origin main
```

Expected: GitHub `main` contains the eighth chapter expansion.
