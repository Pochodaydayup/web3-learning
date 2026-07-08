# Web3 Book Chapter 6 Expansion Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the ten-volume Web3 learning book with a sixth chapter in every volume, keeping the manuscript structurally consistent while deepening the path from frontend interaction literacy to protocol reasoning and long-term career execution.

**Architecture:** Continue the established `part-* / chapter-*` structure. Every new chapter bundle must contain a landing page, one substantial main explanatory page, `exercises.md`, `practice.md`, and `reading.md`. Navigation, sidebars, full table of contents, and the validation script must all be updated in the same batch so the published VitePress book stays coherent.

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

- `book/part-1-foundations/chapter-06-rpc-consistency-and-multi-source-reads/*`
- `book/part-2-solidity/chapter-06-modularity-inheritance-and-composition/*`
- `book/part-3-foundry/chapter-06-release-management-and-multi-network-delivery/*`
- `book/part-4-evm/chapter-06-contract-creation-and-deployment-path/*`
- `book/part-5-gas/chapter-06-measuring-profiling-and-benchmarking/*`
- `book/part-6-security/chapter-06-monitoring-response-and-operational-security/*`
- `book/part-7-ethereum-internals/chapter-06-clients-sync-and-data-availability/*`
- `book/part-8-defi/chapter-06-stablecoins-peg-and-systemic-risk/*`
- `book/part-9-protocol-reading/chapter-06-reading-uniswap-v3/*`
- `book/part-10-training/chapter-06-collaboration-resume-and-job-search/*`

## Task 1: Write Chapter 6 Manuscript Bundles

**Files:**
- Create: `book/part-1-foundations/chapter-06-rpc-consistency-and-multi-source-reads/index.md`
- Create: `book/part-1-foundations/chapter-06-rpc-consistency-and-multi-source-reads/why-data-sources-disagree.md`
- Create: `book/part-1-foundations/chapter-06-rpc-consistency-and-multi-source-reads/exercises.md`
- Create: `book/part-1-foundations/chapter-06-rpc-consistency-and-multi-source-reads/practice.md`
- Create: `book/part-1-foundations/chapter-06-rpc-consistency-and-multi-source-reads/reading.md`
- Create: `book/part-2-solidity/chapter-06-modularity-inheritance-and-composition/index.md`
- Create: `book/part-2-solidity/chapter-06-modularity-inheritance-and-composition/how-to-split-contract-responsibilities.md`
- Create: `book/part-2-solidity/chapter-06-modularity-inheritance-and-composition/exercises.md`
- Create: `book/part-2-solidity/chapter-06-modularity-inheritance-and-composition/practice.md`
- Create: `book/part-2-solidity/chapter-06-modularity-inheritance-and-composition/reading.md`
- Create: `book/part-3-foundry/chapter-06-release-management-and-multi-network-delivery/index.md`
- Create: `book/part-3-foundry/chapter-06-release-management-and-multi-network-delivery/shipping-contracts-with-fewer-surprises.md`
- Create: `book/part-3-foundry/chapter-06-release-management-and-multi-network-delivery/exercises.md`
- Create: `book/part-3-foundry/chapter-06-release-management-and-multi-network-delivery/practice.md`
- Create: `book/part-3-foundry/chapter-06-release-management-and-multi-network-delivery/reading.md`
- Create: `book/part-4-evm/chapter-06-contract-creation-and-deployment-path/index.md`
- Create: `book/part-4-evm/chapter-06-contract-creation-and-deployment-path/create-opcode-and-init-code.md`
- Create: `book/part-4-evm/chapter-06-contract-creation-and-deployment-path/exercises.md`
- Create: `book/part-4-evm/chapter-06-contract-creation-and-deployment-path/practice.md`
- Create: `book/part-4-evm/chapter-06-contract-creation-and-deployment-path/reading.md`
- Create: `book/part-5-gas/chapter-06-measuring-profiling-and-benchmarking/index.md`
- Create: `book/part-5-gas/chapter-06-measuring-profiling-and-benchmarking/profile-before-you-optimize.md`
- Create: `book/part-5-gas/chapter-06-measuring-profiling-and-benchmarking/exercises.md`
- Create: `book/part-5-gas/chapter-06-measuring-profiling-and-benchmarking/practice.md`
- Create: `book/part-5-gas/chapter-06-measuring-profiling-and-benchmarking/reading.md`
- Create: `book/part-6-security/chapter-06-monitoring-response-and-operational-security/index.md`
- Create: `book/part-6-security/chapter-06-monitoring-response-and-operational-security/when-security-becomes-an-operations-problem.md`
- Create: `book/part-6-security/chapter-06-monitoring-response-and-operational-security/exercises.md`
- Create: `book/part-6-security/chapter-06-monitoring-response-and-operational-security/practice.md`
- Create: `book/part-6-security/chapter-06-monitoring-response-and-operational-security/reading.md`
- Create: `book/part-7-ethereum-internals/chapter-06-clients-sync-and-data-availability/index.md`
- Create: `book/part-7-ethereum-internals/chapter-06-clients-sync-and-data-availability/what-your-node-is-actually-doing.md`
- Create: `book/part-7-ethereum-internals/chapter-06-clients-sync-and-data-availability/exercises.md`
- Create: `book/part-7-ethereum-internals/chapter-06-clients-sync-and-data-availability/practice.md`
- Create: `book/part-7-ethereum-internals/chapter-06-clients-sync-and-data-availability/reading.md`
- Create: `book/part-8-defi/chapter-06-stablecoins-peg-and-systemic-risk/index.md`
- Create: `book/part-8-defi/chapter-06-stablecoins-peg-and-systemic-risk/how-stable-systems-break.md`
- Create: `book/part-8-defi/chapter-06-stablecoins-peg-and-systemic-risk/exercises.md`
- Create: `book/part-8-defi/chapter-06-stablecoins-peg-and-systemic-risk/practice.md`
- Create: `book/part-8-defi/chapter-06-stablecoins-peg-and-systemic-risk/reading.md`
- Create: `book/part-9-protocol-reading/chapter-06-reading-uniswap-v3/index.md`
- Create: `book/part-9-protocol-reading/chapter-06-reading-uniswap-v3/concentrated-liquidity-reading-map.md`
- Create: `book/part-9-protocol-reading/chapter-06-reading-uniswap-v3/exercises.md`
- Create: `book/part-9-protocol-reading/chapter-06-reading-uniswap-v3/practice.md`
- Create: `book/part-9-protocol-reading/chapter-06-reading-uniswap-v3/reading.md`
- Create: `book/part-10-training/chapter-06-collaboration-resume-and-job-search/index.md`
- Create: `book/part-10-training/chapter-06-collaboration-resume-and-job-search/turn-learning-into-team-signal.md`
- Create: `book/part-10-training/chapter-06-collaboration-resume-and-job-search/exercises.md`
- Create: `book/part-10-training/chapter-06-collaboration-resume-and-job-search/practice.md`
- Create: `book/part-10-training/chapter-06-collaboration-resume-and-job-search/reading.md`

- [ ] **Step 1: Create the ten new chapter directories**

Run:

```bash
mkdir -p \
  book/part-1-foundations/chapter-06-rpc-consistency-and-multi-source-reads \
  book/part-2-solidity/chapter-06-modularity-inheritance-and-composition \
  book/part-3-foundry/chapter-06-release-management-and-multi-network-delivery \
  book/part-4-evm/chapter-06-contract-creation-and-deployment-path \
  book/part-5-gas/chapter-06-measuring-profiling-and-benchmarking \
  book/part-6-security/chapter-06-monitoring-response-and-operational-security \
  book/part-7-ethereum-internals/chapter-06-clients-sync-and-data-availability \
  book/part-8-defi/chapter-06-stablecoins-peg-and-systemic-risk \
  book/part-9-protocol-reading/chapter-06-reading-uniswap-v3 \
  book/part-10-training/chapter-06-collaboration-resume-and-job-search
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

Expected: each chapter reads like a real next step after chapter five, not a disconnected appendix.

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

Expected: the support pages reinforce the learning loop with concrete drills, source reading, and project-oriented practice.

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

- [ ] **Step 1: Link chapter six from all volume landing pages**

Expected: each `part-* / index.md` page lists six live chapters instead of five.

- [ ] **Step 2: Add chapter six to sidebars and printed table of contents**

Expected: `book/.vitepress/config.ts` and `book/full-toc.md` both expose the new chapter paths for all ten volumes.

- [ ] **Step 3: Extend validation coverage**

Add new validation scopes for the chapter-six bundles, following the same heading contract already enforced for earlier chapters.

Run:

```bash
npm run docs:check
```

Expected: the validator passes with the new chapter-six files included.

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

Expected: only the intended manuscript and navigation changes are present.

- [ ] **Step 3: Commit**

Run:

```bash
git add .
git commit -m "docs: expand book with sixth chapter batch"
```

Expected: commit succeeds with the chapter-six manuscript batch.

- [ ] **Step 4: Push**

Run:

```bash
git push origin main
```

Expected: GitHub `main` contains the sixth chapter expansion.
