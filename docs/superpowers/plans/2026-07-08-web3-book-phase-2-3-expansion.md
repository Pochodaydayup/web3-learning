# Web3 Book Phase 2 And Phase 3 Expansion Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the current ten-volume book from a skeleton with one chapter per volume into a more convincing manuscript batch by adding chapter two across Volumes 1 through 10, wiring those chapters into navigation, and preserving a deployable VitePress site.

**Architecture:** Keep the existing `part-* / chapter-*` hierarchy and extend each volume with a second chapter bundle that follows the same teaching contract as chapter one: chapter landing page, one main explanatory section, `exercises.md`, `practice.md`, and `reading.md`. Update the validator, full table of contents, and VitePress sidebar together so the content contract and published navigation stay in sync.

**Tech Stack:** Node.js, VitePress, Markdown, Mermaid, GitHub Pages

---

## File Structure

### Modify

- `book/.vitepress/config.ts`
- `book/full-toc.md`
- `scripts/validate-book.mjs`

### Create

- `book/part-1-foundations/chapter-02-account-model-and-nonce/*`
- `book/part-2-solidity/chapter-02-functions-events-and-errors/*`
- `book/part-3-foundry/chapter-02-testing-fuzz-and-fork/*`
- `book/part-4-evm/chapter-02-call-context-and-opcodes/*`
- `book/part-5-gas/chapter-02-storage-layout-and-packing/*`
- `book/part-6-security/chapter-02-signatures-replay-and-delegatecall/*`
- `book/part-7-ethereum-internals/chapter-02-mempool-reorg-and-finality/*`
- `book/part-8-defi/chapter-02-amm-design/*`
- `book/part-9-protocol-reading/chapter-02-reading-openzeppelin/*`
- `book/part-10-training/chapter-02-interview-system-and-output/*`

## Task 1: Expand Phase 2 Core Volumes

**Files:**
- Create: `book/part-1-foundations/chapter-02-account-model-and-nonce/index.md`
- Create: `book/part-1-foundations/chapter-02-account-model-and-nonce/account-nonce-and-ordering.md`
- Create: `book/part-1-foundations/chapter-02-account-model-and-nonce/exercises.md`
- Create: `book/part-1-foundations/chapter-02-account-model-and-nonce/practice.md`
- Create: `book/part-1-foundations/chapter-02-account-model-and-nonce/reading.md`
- Create: `book/part-2-solidity/chapter-02-functions-events-and-errors/index.md`
- Create: `book/part-2-solidity/chapter-02-functions-events-and-errors/function-boundaries.md`
- Create: `book/part-2-solidity/chapter-02-functions-events-and-errors/exercises.md`
- Create: `book/part-2-solidity/chapter-02-functions-events-and-errors/practice.md`
- Create: `book/part-2-solidity/chapter-02-functions-events-and-errors/reading.md`
- Create: `book/part-3-foundry/chapter-02-testing-fuzz-and-fork/index.md`
- Create: `book/part-3-foundry/chapter-02-testing-fuzz-and-fork/testing-modes.md`
- Create: `book/part-3-foundry/chapter-02-testing-fuzz-and-fork/exercises.md`
- Create: `book/part-3-foundry/chapter-02-testing-fuzz-and-fork/practice.md`
- Create: `book/part-3-foundry/chapter-02-testing-fuzz-and-fork/reading.md`
- Create: `book/part-4-evm/chapter-02-call-context-and-opcodes/index.md`
- Create: `book/part-4-evm/chapter-02-call-context-and-opcodes/call-context.md`
- Create: `book/part-4-evm/chapter-02-call-context-and-opcodes/exercises.md`
- Create: `book/part-4-evm/chapter-02-call-context-and-opcodes/practice.md`
- Create: `book/part-4-evm/chapter-02-call-context-and-opcodes/reading.md`
- Create: `book/part-5-gas/chapter-02-storage-layout-and-packing/index.md`
- Create: `book/part-5-gas/chapter-02-storage-layout-and-packing/storage-layout.md`
- Create: `book/part-5-gas/chapter-02-storage-layout-and-packing/exercises.md`
- Create: `book/part-5-gas/chapter-02-storage-layout-and-packing/practice.md`
- Create: `book/part-5-gas/chapter-02-storage-layout-and-packing/reading.md`
- Create: `book/part-6-security/chapter-02-signatures-replay-and-delegatecall/index.md`
- Create: `book/part-6-security/chapter-02-signatures-replay-and-delegatecall/signature-boundaries.md`
- Create: `book/part-6-security/chapter-02-signatures-replay-and-delegatecall/exercises.md`
- Create: `book/part-6-security/chapter-02-signatures-replay-and-delegatecall/practice.md`
- Create: `book/part-6-security/chapter-02-signatures-replay-and-delegatecall/reading.md`

- [ ] **Step 1: Create the six new chapter directories**

Run:

```bash
mkdir -p \
  book/part-1-foundations/chapter-02-account-model-and-nonce \
  book/part-2-solidity/chapter-02-functions-events-and-errors \
  book/part-3-foundry/chapter-02-testing-fuzz-and-fork \
  book/part-4-evm/chapter-02-call-context-and-opcodes \
  book/part-5-gas/chapter-02-storage-layout-and-packing \
  book/part-6-security/chapter-02-signatures-replay-and-delegatecall
```

Expected: all six directories exist under their respective `part-*` roots.

- [ ] **Step 2: Write the chapter landing pages and main explanatory pages**

Each chapter must include:

```md
## 本章要解决什么
## 读完后你应该会什么
## 本章目录
## 练习与实践入口
```

Each main section page must include:

```md
## 先理解什么
## 为什么重要
## 核心机制
## 工程判断
```

Expected: all six new chapters read like the next natural step after chapter one, not like isolated notes.

- [ ] **Step 3: Write exercises, practice, and reading modules**

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

Expected: chapter support pages reinforce practice, not just repeat the正文.

## Task 2: Expand Phase 3 Advanced Volumes

**Files:**
- Create: `book/part-7-ethereum-internals/chapter-02-mempool-reorg-and-finality/*`
- Create: `book/part-8-defi/chapter-02-amm-design/*`
- Create: `book/part-9-protocol-reading/chapter-02-reading-openzeppelin/*`
- Create: `book/part-10-training/chapter-02-interview-system-and-output/*`

- [ ] **Step 1: Create the four new chapter directories**

Run:

```bash
mkdir -p \
  book/part-7-ethereum-internals/chapter-02-mempool-reorg-and-finality \
  book/part-8-defi/chapter-02-amm-design \
  book/part-9-protocol-reading/chapter-02-reading-openzeppelin \
  book/part-10-training/chapter-02-interview-system-and-output
```

Expected: all four directories exist.

- [ ] **Step 2: Write the four new chapter landing pages and main explanatory pages**

Main page contract:

```md
## 先理解什么
## 为什么重要
## 核心机制
## 工程判断
```

Expected: Volume 7 explains chain behavior, Volume 8 explains protocol mechanics, Volume 9 explains reading methodology in practice, and Volume 10 explains training outputs and interview framing.

- [ ] **Step 3: Write exercises, practice, and reading modules**

Use the same three support-page contracts from Task 1.

Expected: the back half of the book feels like a training system rather than a stub.

## Task 3: Update Navigation, TOC, And Validation

**Files:**
- Modify: `book/.vitepress/config.ts`
- Modify: `book/full-toc.md`
- Modify: `scripts/validate-book.mjs`

- [ ] **Step 1: Add chapter two links to the sidebar**

Update each volume section in `book/.vitepress/config.ts` so it includes both chapter one and chapter two links.

Expected: each of the ten volume groups shows three items: volume landing page, chapter one, chapter two.

- [ ] **Step 2: Expand the printed table of contents**

Update `book/full-toc.md` so each volume now includes at least the first two concrete chapter titles that match the new files.

Expected: the public table of contents reflects the repository structure.

- [ ] **Step 3: Extend validation coverage**

Add checks for all ten new chapter bundles in `scripts/validate-book.mjs`, using the same heading contract already enforced for chapter one bundles.

Run:

```bash
npm run docs:check
```

Expected: validator passes for front matter, site shell, volumes, existing chapters, and the new chapter two bundles.

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

Expected: only the intended manuscript expansion files are modified or created.

- [ ] **Step 3: Commit**

Run:

```bash
git add .
git commit -m "docs: expand phase 2 and 3 book chapters"
```

Expected: commit succeeds with the new chapter batch.

- [ ] **Step 4: Push**

Run:

```bash
git push origin main
```

Expected: GitHub `main` contains the new manuscript expansion.
