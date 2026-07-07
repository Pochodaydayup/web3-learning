# Web3 Book Phase 1 Restructure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure the current VitePress handbook into a deployable ten-volume book skeleton with a new navigation model, front matter pages, migrated seed chapters, legacy transition pages, and validation rules that enforce the new publishing contract.

**Architecture:** Keep `book/` as the published root and treat the current flat pages as seed material for canonical `part-* / chapter-*` routes. Use a strengthened validator as the main testing harness for content structure, then let VitePress build act as the integration test for navigation and routing. Phase 1 stops at a strong book skeleton plus migrated seed chapters; later manuscript expansion belongs to separate plans.

**Tech Stack:** Node.js, VitePress, Markdown, Mermaid, GitHub Actions, GitHub Pages

---

## Scope Check

This plan intentionally covers only **Phase 1: Book Restructuring Edition** from the approved spec. Do **not** use this plan to write the full long-form manuscript for Volumes 1 through 10. After this plan ships, write two separate follow-up plans:

1. Phase 2 plan for core-volume expansion: Volumes 1 through 6
2. Phase 3 plan for protocol and training expansion: Volumes 7 through 10

## File Structure

### Modify

- `scripts/validate-book.mjs`
- `book/.vitepress/config.ts`
- `book/.vitepress/theme/custom.css`
- `book/index.md`
- `book/preface.md`
- `book/learning-map.md`
- `book/mental-model/index.md`
- `book/solidity-state/index.md`
- `book/evm-gas/index.md`
- `book/security/index.md`
- `book/engineering-testing/index.md`
- `book/protocol-reading/index.md`
- `book/project-roadmap/index.md`
- `book/appendix/resources.md`
- `README.md`

### Create

- `book/how-to-read.md`
- `book/full-toc.md`
- `book/study-method.md`
- `book/source-code-reading-guide.md`
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
- `book/part-1-foundations/chapter-01-transaction-mental-model/index.md`
- `book/part-1-foundations/chapter-01-transaction-mental-model/from-click-to-state.md`
- `book/part-1-foundations/chapter-01-transaction-mental-model/exercises.md`
- `book/part-1-foundations/chapter-01-transaction-mental-model/practice.md`
- `book/part-1-foundations/chapter-01-transaction-mental-model/reading.md`
- `book/part-2-solidity/chapter-01-solidity-state-foundations/index.md`
- `book/part-2-solidity/chapter-01-solidity-state-foundations/state-and-data-locations.md`
- `book/part-2-solidity/chapter-01-solidity-state-foundations/exercises.md`
- `book/part-2-solidity/chapter-01-solidity-state-foundations/practice.md`
- `book/part-2-solidity/chapter-01-solidity-state-foundations/reading.md`
- `book/part-3-foundry/chapter-01-foundry-engineering-workflow/index.md`
- `book/part-3-foundry/chapter-01-foundry-engineering-workflow/foundry-loop.md`
- `book/part-3-foundry/chapter-01-foundry-engineering-workflow/exercises.md`
- `book/part-3-foundry/chapter-01-foundry-engineering-workflow/practice.md`
- `book/part-3-foundry/chapter-01-foundry-engineering-workflow/reading.md`
- `book/part-4-evm/chapter-01-evm-execution-model/index.md`
- `book/part-4-evm/chapter-01-evm-execution-model/storage-memory-calldata.md`
- `book/part-4-evm/chapter-01-evm-execution-model/exercises.md`
- `book/part-4-evm/chapter-01-evm-execution-model/practice.md`
- `book/part-4-evm/chapter-01-evm-execution-model/reading.md`
- `book/part-5-gas/chapter-01-gas-cost-mental-model/index.md`
- `book/part-5-gas/chapter-01-gas-cost-mental-model/why-sstore-hurts.md`
- `book/part-5-gas/chapter-01-gas-cost-mental-model/exercises.md`
- `book/part-5-gas/chapter-01-gas-cost-mental-model/practice.md`
- `book/part-5-gas/chapter-01-gas-cost-mental-model/reading.md`
- `book/part-6-security/chapter-01-security-review-basics/index.md`
- `book/part-6-security/chapter-01-security-review-basics/reentrancy-and-access-control.md`
- `book/part-6-security/chapter-01-security-review-basics/exercises.md`
- `book/part-6-security/chapter-01-security-review-basics/practice.md`
- `book/part-6-security/chapter-01-security-review-basics/reading.md`
- `book/part-9-protocol-reading/chapter-01-reading-real-protocols/index.md`
- `book/part-9-protocol-reading/chapter-01-reading-real-protocols/reading-order-and-questions.md`
- `book/part-9-protocol-reading/chapter-01-reading-real-protocols/exercises.md`
- `book/part-9-protocol-reading/chapter-01-reading-real-protocols/practice.md`
- `book/part-9-protocol-reading/chapter-01-reading-real-protocols/reading.md`
- `book/part-10-training/chapter-01-roadmap-and-100-days/index.md`
- `book/part-10-training/chapter-01-roadmap-and-100-days/project-ladder.md`
- `book/part-10-training/chapter-01-roadmap-and-100-days/exercises.md`
- `book/part-10-training/chapter-01-roadmap-and-100-days/practice.md`
- `book/part-10-training/chapter-01-roadmap-and-100-days/reading.md`

## Task 1: Establish The Phase 1 Validation Contract And Front Matter Pages

**Files:**
- Modify: `scripts/validate-book.mjs`
- Modify: `book/index.md`
- Modify: `book/preface.md`
- Modify: `book/learning-map.md`
- Create: `book/how-to-read.md`
- Create: `book/full-toc.md`
- Create: `book/study-method.md`
- Create: `book/source-code-reading-guide.md`

- [ ] **Step 1: Replace the validator with the Phase 1 book contract**

Update `scripts/validate-book.mjs`:

```js
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const scopes = {
  frontmatter: [
    {
      file: "book/index.md",
      patterns: ["## 这本书适合谁", "## 你会怎么用这本书", "## 现在从哪里开始"]
    },
    {
      file: "book/preface.md",
      patterns: ["## 为什么把它写成一本书", "## 适合谁读", "## 不适合谁", "## 这本书怎么读"]
    },
    {
      file: "book/learning-map.md",
      patterns: ["## 先学什么", "## 哪些内容先不要深挖", "## 三个月主干路线", "## 主线与支线怎么配"]
    },
    {
      file: "book/how-to-read.md",
      patterns: ["## 适合谁按顺序读", "## 什么时候跳读", "## 每章怎么学", "## 输出节奏建议"]
    },
    {
      file: "book/full-toc.md",
      patterns: ["## 卷一：Web3 与 Ethereum 基础", "## 卷五：Gas 与性能优化", "## 卷十：训练与实战"]
    },
    {
      file: "book/study-method.md",
      patterns: ["## 主线学习法", "## 代码学习法", "## 输出学习法", "## 节奏建议"]
    },
    {
      file: "book/source-code-reading-guide.md",
      patterns: ["## 先看什么", "## 读源码时记什么", "## 常见误区", "## 推荐顺序"]
    }
  ],
  siteShell: [
    {
      file: "book/.vitepress/config.ts",
      patterns: [
        '{ text: "全书目录", link: "/full-toc" }',
        '{ text: "100 天计划", link: "/part-10-training/chapter-01-roadmap-and-100-days/" }',
        '{ text: "卷一：基础", link: "/part-1-foundations/" }',
        '{ text: "卷十：训练与实战", link: "/part-10-training/" }'
      ]
    },
    {
      file: "book/.vitepress/theme/custom.css",
      patterns: [".book-outline", ".book-card-grid", ".book-callout"]
    }
  ],
  volumesA: [
    {
      file: "book/part-1-foundations/index.md",
      patterns: ["## 这一卷解决什么", "## 建议阅读顺序", "## 本卷章节"]
    },
    {
      file: "book/part-2-solidity/index.md",
      patterns: ["## 这一卷解决什么", "## 建议阅读顺序", "## 本卷章节"]
    },
    {
      file: "book/part-3-foundry/index.md",
      patterns: ["## 这一卷解决什么", "## 建议阅读顺序", "## 本卷章节"]
    },
    {
      file: "book/part-4-evm/index.md",
      patterns: ["## 这一卷解决什么", "## 建议阅读顺序", "## 本卷章节"]
    },
    {
      file: "book/part-5-gas/index.md",
      patterns: ["## 这一卷解决什么", "## 建议阅读顺序", "## 本卷章节"]
    }
  ],
  volumesB: [
    {
      file: "book/part-6-security/index.md",
      patterns: ["## 这一卷解决什么", "## 建议阅读顺序", "## 本卷章节"]
    },
    {
      file: "book/part-7-ethereum-internals/index.md",
      patterns: ["## 这一卷解决什么", "## 建议阅读顺序", "## 本卷章节"]
    },
    {
      file: "book/part-8-defi/index.md",
      patterns: ["## 这一卷解决什么", "## 建议阅读顺序", "## 本卷章节"]
    },
    {
      file: "book/part-9-protocol-reading/index.md",
      patterns: ["## 这一卷解决什么", "## 建议阅读顺序", "## 本卷章节"]
    },
    {
      file: "book/part-10-training/index.md",
      patterns: ["## 这一卷解决什么", "## 建议阅读顺序", "## 本卷章节"]
    }
  ],
  chaptersA: [
    {
      file: "book/part-1-foundations/chapter-01-transaction-mental-model/index.md",
      patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"]
    },
    {
      file: "book/part-1-foundations/chapter-01-transaction-mental-model/from-click-to-state.md",
      patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"]
    },
    {
      file: "book/part-1-foundations/chapter-01-transaction-mental-model/exercises.md",
      patterns: ["## 概念题", "## 分析题", "## 代码题"]
    },
    {
      file: "book/part-1-foundations/chapter-01-transaction-mental-model/practice.md",
      patterns: ["## 实践目标", "## 操作步骤", "## 交付物"]
    },
    {
      file: "book/part-1-foundations/chapter-01-transaction-mental-model/reading.md",
      patterns: ["## 必读", "## 进阶", "## 实战"]
    },
    {
      file: "book/part-2-solidity/chapter-01-solidity-state-foundations/index.md",
      patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"]
    },
    {
      file: "book/part-2-solidity/chapter-01-solidity-state-foundations/state-and-data-locations.md",
      patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"]
    },
    {
      file: "book/part-2-solidity/chapter-01-solidity-state-foundations/exercises.md",
      patterns: ["## 概念题", "## 分析题", "## 代码题"]
    },
    {
      file: "book/part-2-solidity/chapter-01-solidity-state-foundations/practice.md",
      patterns: ["## 实践目标", "## 操作步骤", "## 交付物"]
    },
    {
      file: "book/part-2-solidity/chapter-01-solidity-state-foundations/reading.md",
      patterns: ["## 必读", "## 进阶", "## 实战"]
    },
    {
      file: "book/part-3-foundry/chapter-01-foundry-engineering-workflow/index.md",
      patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"]
    },
    {
      file: "book/part-3-foundry/chapter-01-foundry-engineering-workflow/foundry-loop.md",
      patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"]
    },
    {
      file: "book/part-3-foundry/chapter-01-foundry-engineering-workflow/exercises.md",
      patterns: ["## 概念题", "## 分析题", "## 代码题"]
    },
    {
      file: "book/part-3-foundry/chapter-01-foundry-engineering-workflow/practice.md",
      patterns: ["## 实践目标", "## 操作步骤", "## 交付物"]
    },
    {
      file: "book/part-3-foundry/chapter-01-foundry-engineering-workflow/reading.md",
      patterns: ["## 必读", "## 进阶", "## 实战"]
    }
  ],
  chaptersB: [
    {
      file: "book/part-4-evm/chapter-01-evm-execution-model/index.md",
      patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"]
    },
    {
      file: "book/part-4-evm/chapter-01-evm-execution-model/storage-memory-calldata.md",
      patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"]
    },
    {
      file: "book/part-4-evm/chapter-01-evm-execution-model/exercises.md",
      patterns: ["## 概念题", "## 分析题", "## 代码题"]
    },
    {
      file: "book/part-4-evm/chapter-01-evm-execution-model/practice.md",
      patterns: ["## 实践目标", "## 操作步骤", "## 交付物"]
    },
    {
      file: "book/part-4-evm/chapter-01-evm-execution-model/reading.md",
      patterns: ["## 必读", "## 进阶", "## 实战"]
    },
    {
      file: "book/part-5-gas/chapter-01-gas-cost-mental-model/index.md",
      patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"]
    },
    {
      file: "book/part-5-gas/chapter-01-gas-cost-mental-model/why-sstore-hurts.md",
      patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"]
    },
    {
      file: "book/part-5-gas/chapter-01-gas-cost-mental-model/exercises.md",
      patterns: ["## 概念题", "## 分析题", "## 代码题"]
    },
    {
      file: "book/part-5-gas/chapter-01-gas-cost-mental-model/practice.md",
      patterns: ["## 实践目标", "## 操作步骤", "## 交付物"]
    },
    {
      file: "book/part-5-gas/chapter-01-gas-cost-mental-model/reading.md",
      patterns: ["## 必读", "## 进阶", "## 实战"]
    },
    {
      file: "book/part-6-security/chapter-01-security-review-basics/index.md",
      patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"]
    },
    {
      file: "book/part-6-security/chapter-01-security-review-basics/reentrancy-and-access-control.md",
      patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"]
    },
    {
      file: "book/part-6-security/chapter-01-security-review-basics/exercises.md",
      patterns: ["## 概念题", "## 分析题", "## 代码题"]
    },
    {
      file: "book/part-6-security/chapter-01-security-review-basics/practice.md",
      patterns: ["## 实践目标", "## 操作步骤", "## 交付物"]
    },
    {
      file: "book/part-6-security/chapter-01-security-review-basics/reading.md",
      patterns: ["## 必读", "## 进阶", "## 实战"]
    }
  ],
  chaptersC: [
    {
      file: "book/part-9-protocol-reading/chapter-01-reading-real-protocols/index.md",
      patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"]
    },
    {
      file: "book/part-9-protocol-reading/chapter-01-reading-real-protocols/reading-order-and-questions.md",
      patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"]
    },
    {
      file: "book/part-9-protocol-reading/chapter-01-reading-real-protocols/exercises.md",
      patterns: ["## 概念题", "## 分析题", "## 代码题"]
    },
    {
      file: "book/part-9-protocol-reading/chapter-01-reading-real-protocols/practice.md",
      patterns: ["## 实践目标", "## 操作步骤", "## 交付物"]
    },
    {
      file: "book/part-9-protocol-reading/chapter-01-reading-real-protocols/reading.md",
      patterns: ["## 必读", "## 进阶", "## 实战"]
    },
    {
      file: "book/part-10-training/chapter-01-roadmap-and-100-days/index.md",
      patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"]
    },
    {
      file: "book/part-10-training/chapter-01-roadmap-and-100-days/project-ladder.md",
      patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"]
    },
    {
      file: "book/part-10-training/chapter-01-roadmap-and-100-days/exercises.md",
      patterns: ["## 概念题", "## 分析题", "## 代码题"]
    },
    {
      file: "book/part-10-training/chapter-01-roadmap-and-100-days/practice.md",
      patterns: ["## 实践目标", "## 操作步骤", "## 交付物"]
    },
    {
      file: "book/part-10-training/chapter-01-roadmap-and-100-days/reading.md",
      patterns: ["## 必读", "## 进阶", "## 实战"]
    }
  ],
  legacy: [
    {
      file: "book/mental-model/index.md",
      patterns: ["# 认知重建（旧路径）", "新入口", "练习题", "项目实践", "延伸阅读"]
    },
    {
      file: "book/solidity-state/index.md",
      patterns: ["# Solidity 与状态（旧路径）", "新入口", "练习题", "项目实践", "延伸阅读"]
    },
    {
      file: "book/evm-gas/index.md",
      patterns: ["# EVM 与 Gas（旧路径）", "新入口", "练习题", "项目实践", "延伸阅读"]
    },
    {
      file: "book/security/index.md",
      patterns: ["# 安全（旧路径）", "新入口", "练习题", "项目实践", "延伸阅读"]
    },
    {
      file: "book/engineering-testing/index.md",
      patterns: ["# 工程化与测试（旧路径）", "新入口", "练习题", "项目实践", "延伸阅读"]
    },
    {
      file: "book/protocol-reading/index.md",
      patterns: ["# 协议源码阅读（旧路径）", "新入口", "练习题", "项目实践", "延伸阅读"]
    },
    {
      file: "book/project-roadmap/index.md",
      patterns: ["# 项目路线（旧路径）", "新入口", "练习题", "项目实践", "延伸阅读"]
    }
  ],
  appendix: [
    {
      file: "book/appendix/resources.md",
      patterns: ["## 官方文档", "## 主线资料", "## 源码入口"]
    },
    {
      file: "book/appendix/faq.md",
      patterns: ["## 常见问题"]
    },
    {
      file: "book/appendix/glossary.md",
      patterns: ["## 术语表"]
    }
  ]
};

const requestedScopes = process.argv.slice(2);
const activeScopes = requestedScopes.length === 0 ? Object.keys(scopes) : requestedScopes;
const checks = activeScopes.flatMap((scope) => {
  if (!scopes[scope]) {
    throw new Error(`Unknown scope: ${scope}`);
  }

  return scopes[scope];
});

const errors = [];

for (const check of checks) {
  const filePath = path.resolve(check.file);

  if (!existsSync(filePath)) {
    errors.push(`Missing file: ${check.file}`);
    continue;
  }

  const content = await readFile(filePath, "utf8");

  for (const pattern of check.patterns) {
    if (!content.includes(pattern)) {
      errors.push(`Missing pattern "${pattern}" in ${check.file}`);
    }
  }

  const placeholderPattern = new RegExp("\\b(?:TO" + "DO|TB" + "D)\\b");

  if (placeholderPattern.test(content)) {
    errors.push(`Placeholder text found in ${check.file}`);
  }
}

if (errors.length > 0) {
  console.error("Book validation failed:");

  for (const error of errors) {
    console.error(`- ${error}`);
  }

  process.exit(1);
}

console.log(`Book validation passed for scopes: ${activeScopes.join(", ")}`);
```

- [ ] **Step 2: Run the front matter scope to confirm the red state**

Run: `npm run docs:check -- frontmatter`
Expected: FAIL with at least `Missing file: book/how-to-read.md`

- [ ] **Step 3: Rewrite the homepage and preface**

Update `book/index.md`:

```md
---
layout: home

hero:
  name: "Web3 前端转全栈书"
  text: "给已经做过 dApp 的前端开发者"
  tagline: "把会调合约的经验，升级成能理解状态、EVM、Gas、安全与协议设计的系统能力。"
  actions:
    - theme: brand
      text: 从前言开始
      link: /preface
    - theme: alt
      text: 查看全书目录
      link: /full-toc

features:
  - title: 面向有经验的前端
    details: 默认你已经理解钱包连接、签名、ABI、RPC、ethers 或 viem，不重复铺基础接入教程。
  - title: 从工程因果链往下学
    details: 先讲一笔交易怎样变成链上状态，再讲 Solidity、EVM、Gas、安全与协议源码。
  - title: 主线和资料一起给
    details: 每章都保留练习、实践和继续深入入口，方便长期学习而不是一次性看完。
---

## 这本书适合谁

这本书适合已经做过 dApp 前端、能完成钱包连接、交易发送、合约读写、事件监听和列表展示的开发者。你不缺“怎么调用合约”的教程，你缺的是一条能解释底层因果关系的主线。

## 你会怎么用这本书

先按顺序读前言、学习地图和卷一，再沿着 Solidity、Foundry、EVM、Gas、安全的主干走。遇到想深挖的地方，就进每章末尾的练习、实践和延伸阅读。

## 现在从哪里开始

1. 先读 [前言](/preface)，确认这本书的目标和边界。
2. 再读 [学习地图](/learning-map)，知道先学什么、后学什么。
3. 然后进入 [卷一：Web3 与 Ethereum 基础](/part-1-foundations/)。
```

Update `book/preface.md`:

```md
# 前言

## 为什么把它写成一本书

很多 Web3 学习资料要么停留在接钱包和调 ABI，要么直接跳进黄皮书和共识细节。对已经做过 dApp 的前端来说，这两种路径都不够顺手，所以这本书选择从工程因果链出发，逐层向下重建理解。

## 适合谁读

- 已经做过 dApp 前端
- 已经知道钱包、签名、ABI、RPC、ERC20、NFT 等概念
- 想独立写合约、读源码、做安全审查和协议分析

## 不适合谁

- 还没有写过任何链上交互页面
- 只想快速找一个接入钱包的复制粘贴方案
- 期待一本覆盖所有链和所有研究方向的百科全书

## 这本书怎么读

先顺着主线读，再用每章的练习和实践压实理解。不要一开始就把密码学、共识、MEV、L2 全部混在一起学。先把合约世界最常见的状态、执行和安全问题吃透。
```

- [ ] **Step 4: Rewrite the learning map and add the reading guide**

Update `book/learning-map.md`:

```md
# 学习地图

## 先学什么

先把卷一到卷六当成主干。它们会解决一笔交易如何执行、状态如何变化、为什么要花 gas、如何写和测合约、哪里最容易出安全问题。

## 哪些内容先不要深挖

不要一开始就钻进共识细节、桥、零知识证明或复杂 MEV 研究。先让自己能完整解释 Ethereum 合约执行链路，再回头深入这些主题。

## 三个月主干路线

第一个月读卷一到卷三，第二个月读卷四到卷六，第三个月开始进入卷九与卷十，把源码阅读和项目实践接上来。

## 主线与支线怎么配

主线负责建立判断力，支线负责放大深度。每读完一章，先做练习和实践，再挑一到两个延伸材料继续往下走。
```

Create `book/how-to-read.md`:

```md
# 怎么读这本书

## 适合谁按顺序读

如果你已经能完成合约读写和交易发送，但对状态、EVM、Gas 和安全没有系统理解，最好的方式是按卷一到卷六顺序推进。

## 什么时候跳读

如果你当前工作里正好遇到具体问题，例如 Gas 优化、重入风险或 Foundry 测试，可以先跳到对应卷，再回到主线补基础。

## 每章怎么学

每章都先读 `index.md`，明确本章目标，再读正文节文件，最后做 `exercises.md`、`practice.md` 和 `reading.md`。

## 输出节奏建议

每章至少产出一次口头讲解、一次笔记整理和一次代码练习。不要只看不写，也不要只抄代码不解释。
```

- [ ] **Step 5: Add the full table of contents and two support pages**

Create `book/full-toc.md`:

```md
# 全书目录

## 卷一：Web3 与 Ethereum 基础

1. Web3 全景与学习策略
2. 账户模型与状态模型
3. 交易生命周期
4. Gas、Nonce、Fee 与 Receipt
5. Event、Log 与前端可观察性

## 卷二：Solidity（从零到高级）

1. 基础语法与类型
2. Storage / Memory / Calldata
3. Function / Modifier / Event / Error
4. 状态设计与数据结构
5. 权限、接口与库
6. OpenZeppelin 与标准代币
7. Upgradeable 与 UUPS

## 卷三：Foundry 完整开发指南

1. Toolchain 与项目结构
2. Forge / Cast / Anvil / Script
3. 单元测试与 Cheatcodes
4. Fuzz / Invariant / Fork Test
5. Debug / Deploy / Verify / CI

## 卷四：EVM 原理

1. 执行模型
2. Stack / Memory / Storage / Calldata
3. Opcode 与调用上下文
4. Storage Slot 与 Layout
5. Bytecode 与 ABI Encoding

## 卷五：Gas 与性能优化

1. Gas 计量模型
2. Storage 成本
3. Memory / Calldata 成本
4. Packing / Immutable / Constant
5. 优化模式与反模式
6. 实战案例

## 卷六：智能合约安全

1. 威胁建模
2. Reentrancy
3. Access Control
4. Signature / Permit / Replay
5. Delegatecall / Proxy / Upgrade
6. Oracle / Flash Loan / MEV
7. 审计前自查

## 卷七：Ethereum 底层原理

1. Transaction / Block / State Transition
2. Mempool / Reorg / Finality
3. Merkle / Trie
4. Consensus / Validator
5. Hash / ECDSA / Wallet

## 卷八：DeFi 原理

1. DeFi 积木
2. AMM
3. Lending
4. Oracle
5. Liquidation
6. MEV

## 卷九：协议源码阅读

1. OpenZeppelin
2. Uniswap V2
3. Uniswap V3
4. Aave
5. EigenLayer
6. 阅读方法总结

## 卷十：训练与实战

1. 100 天学习计划
2. 面试题体系
3. 项目实战路线
4. 从 Todo 到 DEX
5. 长期学习系统
```

Create `book/study-method.md`:

```md
# 学习方法

## 主线学习法

先用主线搭建认知框架，再用源码、练习和项目把框架压实。不要把所有资料同时打开。

## 代码学习法

学 Solidity 和协议源码时，先画状态结构，再看关键函数，最后再看边界情况和测试。不要一行一行地从头硬读。

## 输出学习法

每次学习都要有输出。可以是图、表、复盘、最小合约、测试案例或安全审查笔记。

## 节奏建议

如果你每天能投入 2 到 3 小时，建议一周完成 1 到 2 个章节单元，并预留一天只做练习和复盘。
```

Create `book/source-code-reading-guide.md`:

```md
# 源码阅读指南

## 先看什么

先看协议入口、核心状态、权限边界和资金流，再看辅助库和边缘功能。先看“为什么这样设计”，再看“具体写法”。

## 读源码时记什么

记录四类信息：状态怎么存、谁能改、外部依赖是什么、失败路径怎么处理。

## 常见误区

最常见的误区是把源码阅读变成顺序翻文件，或者只看 happy path，不看回滚、权限和资产边界。

## 推荐顺序

先读 OpenZeppelin，再读 Uniswap V2，然后才去看 Uniswap V3、Aave 和 EigenLayer 这样的复杂系统。
```

- [ ] **Step 6: Run the front matter scope to verify it passes**

Run: `npm run docs:check -- frontmatter`
Expected: PASS with `Book validation passed for scopes: frontmatter`

- [ ] **Step 7: Commit the front matter foundation**

```bash
git add scripts/validate-book.mjs book/index.md book/preface.md book/learning-map.md book/how-to-read.md book/full-toc.md book/study-method.md book/source-code-reading-guide.md
git commit -m "docs: add phase 1 front matter pages"
```

## Task 2: Rebuild The VitePress Shell For Book Navigation

**Files:**
- Modify: `book/.vitepress/config.ts`
- Modify: `book/.vitepress/theme/custom.css`

- [ ] **Step 1: Run the site shell scope to confirm the red state**

Run: `npm run docs:check -- siteShell`
Expected: FAIL with at least `Missing pattern "{ text: "全书目录", link: "/full-toc" }" in book/.vitepress/config.ts`

- [ ] **Step 2: Replace the VitePress configuration with the book navigation**

Update `book/.vitepress/config.ts`:

```ts
import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "Web3 前端转全栈书",
  description: "给已经做过 dApp 的前端开发者的长期学习型 Web3 工程书",
  base: "/web3-learning/",
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: "前言", link: "/preface" },
      { text: "学习地图", link: "/learning-map" },
      { text: "全书目录", link: "/full-toc" },
      { text: "100 天计划", link: "/part-10-training/chapter-01-roadmap-and-100-days/" },
      { text: "附录", link: "/appendix/resources" }
    ],
    search: {
      provider: "local"
    },
    outline: {
      level: [2, 3],
      label: "本页目录"
    },
    docFooter: {
      prev: "上一页",
      next: "下一页"
    },
    sidebar: [
      {
        text: "开始阅读",
        items: [
          { text: "首页", link: "/" },
          { text: "前言", link: "/preface" },
          { text: "怎么读这本书", link: "/how-to-read" },
          { text: "学习地图", link: "/learning-map" },
          { text: "全书目录", link: "/full-toc" },
          { text: "学习方法", link: "/study-method" },
          { text: "源码阅读指南", link: "/source-code-reading-guide" }
        ]
      },
      {
        text: "卷一：基础",
        items: [
          { text: "卷一导读", link: "/part-1-foundations/" },
          { text: "第 1 章 交易心智模型", link: "/part-1-foundations/chapter-01-transaction-mental-model/" }
        ]
      },
      {
        text: "卷二：Solidity",
        items: [
          { text: "卷二导读", link: "/part-2-solidity/" },
          { text: "第 1 章 Solidity 与状态基础", link: "/part-2-solidity/chapter-01-solidity-state-foundations/" }
        ]
      },
      {
        text: "卷三：Foundry",
        items: [
          { text: "卷三导读", link: "/part-3-foundry/" },
          { text: "第 1 章 Foundry 工程工作流", link: "/part-3-foundry/chapter-01-foundry-engineering-workflow/" }
        ]
      },
      {
        text: "卷四：EVM",
        items: [
          { text: "卷四导读", link: "/part-4-evm/" },
          { text: "第 1 章 EVM 执行模型", link: "/part-4-evm/chapter-01-evm-execution-model/" }
        ]
      },
      {
        text: "卷五：Gas",
        items: [
          { text: "卷五导读", link: "/part-5-gas/" },
          { text: "第 1 章 Gas 成本心智模型", link: "/part-5-gas/chapter-01-gas-cost-mental-model/" }
        ]
      },
      {
        text: "卷六：安全",
        items: [
          { text: "卷六导读", link: "/part-6-security/" },
          { text: "第 1 章 安全审查基础", link: "/part-6-security/chapter-01-security-review-basics/" }
        ]
      },
      {
        text: "卷七：Ethereum 底层",
        items: [{ text: "卷七导读", link: "/part-7-ethereum-internals/" }]
      },
      {
        text: "卷八：DeFi",
        items: [{ text: "卷八导读", link: "/part-8-defi/" }]
      },
      {
        text: "卷九：协议源码阅读",
        items: [
          { text: "卷九导读", link: "/part-9-protocol-reading/" },
          { text: "第 1 章 如何读真实协议", link: "/part-9-protocol-reading/chapter-01-reading-real-protocols/" }
        ]
      },
      {
        text: "卷十：训练与实战",
        items: [
          { text: "卷十导读", link: "/part-10-training/" },
          { text: "第 1 章 项目路线与 100 天计划", link: "/part-10-training/chapter-01-roadmap-and-100-days/" }
        ]
      },
      {
        text: "附录",
        items: [
          { text: "资料索引", link: "/appendix/resources" },
          { text: "常见问题", link: "/appendix/faq" },
          { text: "术语表", link: "/appendix/glossary" }
        ]
      }
    ]
  }
});
```

- [ ] **Step 3: Update the custom CSS for the book shell**

Update `book/.vitepress/theme/custom.css`:

```css
:root {
  --vp-c-brand-1: #0f766e;
  --vp-c-brand-2: #115e59;
  --vp-c-brand-3: #134e4a;
  --vp-c-brand-soft: rgba(15, 118, 110, 0.14);
  --vp-home-hero-name-color: #0f172a;
  --vp-home-hero-image-background-image: radial-gradient(circle at top, rgba(15, 118, 110, 0.18), transparent 60%);
  --vp-home-hero-image-filter: blur(72px);
}

.VPDoc.has-aside .content-container,
.VPDoc .content-container {
  max-width: 840px;
}

.vp-doc h1,
.vp-doc h2,
.vp-doc h3 {
  letter-spacing: -0.02em;
}

.vp-doc h2 {
  margin-top: 2.2rem;
}

.vp-doc p,
.vp-doc li {
  line-height: 1.85;
}

.vp-doc a {
  text-decoration: none;
}

.book-outline {
  padding: 1rem 1.1rem;
  border: 1px solid rgba(15, 118, 110, 0.14);
  border-radius: 16px;
  background: rgba(15, 118, 110, 0.04);
}

.book-card-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.book-callout {
  margin: 1.5rem 0;
  padding: 1rem 1.1rem;
  border-left: 4px solid var(--vp-c-brand-1);
  background: rgba(15, 118, 110, 0.06);
  border-radius: 10px;
}
```

- [ ] **Step 4: Run the site shell scope to verify it passes**

Run: `npm run docs:check -- siteShell`
Expected: PASS with `Book validation passed for scopes: siteShell`

- [ ] **Step 5: Commit the navigation shell**

```bash
git add book/.vitepress/config.ts book/.vitepress/theme/custom.css
git commit -m "feat: rebuild book navigation shell"
```

## Task 3: Add Volume Landing Pages For Volumes 1 Through 5

**Files:**
- Create: `book/part-1-foundations/index.md`
- Create: `book/part-2-solidity/index.md`
- Create: `book/part-3-foundry/index.md`
- Create: `book/part-4-evm/index.md`
- Create: `book/part-5-gas/index.md`

- [ ] **Step 1: Run the first volume scope to confirm the red state**

Run: `npm run docs:check -- volumesA`
Expected: FAIL with at least `Missing file: book/part-1-foundations/index.md`

- [ ] **Step 2: Create the landing pages for volumes 1 and 2**

Create `book/part-1-foundations/index.md`:

```md
# 卷一：Web3 与 Ethereum 基础

## 这一卷解决什么

这一卷负责把“前端点一下按钮，链上到底发生了什么”讲清楚。你会先建立交易、状态和可观察性的完整心智模型。

## 建议阅读顺序

先读本卷导读，再进入第 1 章交易心智模型，后续章节按账户模型、交易生命周期、Gas、Event 的顺序展开。

## 本卷章节

- 第 1 章：交易心智模型
- 第 2 章：账户模型与状态模型
- 第 3 章：交易生命周期
- 第 4 章：Gas、Nonce、Fee 与 Receipt
- 第 5 章：Event、Log 与前端可观察性
```

Create `book/part-2-solidity/index.md`:

```md
# 卷二：Solidity（从零到高级）

## 这一卷解决什么

这一卷负责把你从“会调用别人写好的合约”推进到“能自己设计状态和接口”。重点不是背语法，而是理解状态、权限和链上成本。

## 建议阅读顺序

先读 Solidity 与状态基础，再沿着数据位置、状态设计、OpenZeppelin、Upgradeable 的路线逐步往下读。

## 本卷章节

- 第 1 章：Solidity 与状态基础
- 第 2 章：Storage / Memory / Calldata
- 第 3 章：Function / Modifier / Event / Error
- 第 4 章：状态设计与数据结构
- 第 5 章：权限、接口与库
- 第 6 章：OpenZeppelin 与标准代币
- 第 7 章：Upgradeable 与 UUPS
```

- [ ] **Step 3: Create the landing pages for volumes 3 and 4**

Create `book/part-3-foundry/index.md`:

```md
# 卷三：Foundry 完整开发指南

## 这一卷解决什么

这一卷负责建立合约工程工作流。你会把“写得出来”推进到“能测试、能调试、能部署、能验证”。

## 建议阅读顺序

先读 Foundry 工程工作流，再进入测试、脚本、调试和持续集成章节。

## 本卷章节

- 第 1 章：Foundry 工程工作流
- 第 2 章：Forge / Cast / Anvil / Script
- 第 3 章：单元测试与 Cheatcodes
- 第 4 章：Fuzz / Invariant / Fork Test
- 第 5 章：Debug / Deploy / Verify / CI
```

Create `book/part-4-evm/index.md`:

```md
# 卷四：EVM 原理

## 这一卷解决什么

这一卷负责解释交易进入执行环境之后，EVM 究竟在做什么。你会第一次真正理解 stack、memory、storage 和 call context 的区别。

## 建议阅读顺序

先读执行模型，再看数据区域，再看 opcode、storage layout 和 bytecode。

## 本卷章节

- 第 1 章：EVM 执行模型
- 第 2 章：Stack / Memory / Storage / Calldata
- 第 3 章：Opcode 与调用上下文
- 第 4 章：Storage Slot 与 Layout
- 第 5 章：Bytecode 与 ABI Encoding
```

- [ ] **Step 4: Create the landing page for volume 5**

Create `book/part-5-gas/index.md`:

```md
# 卷五：Gas 与性能优化

## 这一卷解决什么

这一卷负责把 gas 从“经验口号”变成“可以解释和推理的成本模型”。重点不是为了炫技式优化，而是为了建立正确的设计判断。

## 建议阅读顺序

先读 Gas 成本心智模型，再进入 storage、memory、calldata 和 slot-aware 设计。

## 本卷章节

- 第 1 章：Gas 成本心智模型
- 第 2 章：Storage 成本
- 第 3 章：Memory / Calldata 成本
- 第 4 章：Packing / Immutable / Constant
- 第 5 章：优化模式与反模式
- 第 6 章：实战案例
```

- [ ] **Step 5: Run the first volume scope to verify it passes**

Run: `npm run docs:check -- volumesA`
Expected: PASS with `Book validation passed for scopes: volumesA`

- [ ] **Step 6: Commit the first five volume landings**

```bash
git add book/part-1-foundations/index.md book/part-2-solidity/index.md book/part-3-foundry/index.md book/part-4-evm/index.md book/part-5-gas/index.md
git commit -m "docs: scaffold volumes one through five"
```

## Task 4: Add Volume Landing Pages For Volumes 6 Through 10

**Files:**
- Create: `book/part-6-security/index.md`
- Create: `book/part-7-ethereum-internals/index.md`
- Create: `book/part-8-defi/index.md`
- Create: `book/part-9-protocol-reading/index.md`
- Create: `book/part-10-training/index.md`

- [ ] **Step 1: Run the second volume scope to confirm the red state**

Run: `npm run docs:check -- volumesB`
Expected: FAIL with at least `Missing file: book/part-6-security/index.md`

- [ ] **Step 2: Create the landing pages for volumes 6 and 7**

Create `book/part-6-security/index.md`:

```md
# 卷六：智能合约安全

## 这一卷解决什么

这一卷负责把你从“功能开发视角”切到“攻击与防御视角”。重点是重入、权限、签名、代理和外部依赖带来的系统风险。

## 建议阅读顺序

先读安全审查基础，再进入重入、权限、签名、代理与 Oracle/Flash Loan/MEV 相关主题。

## 本卷章节

- 第 1 章：安全审查基础
- 第 2 章：Reentrancy
- 第 3 章：Access Control
- 第 4 章：Signature / Permit / Replay
- 第 5 章：Delegatecall / Proxy / Upgrade
- 第 6 章：Oracle / Flash Loan / MEV
- 第 7 章：审计前自查
```

Create `book/part-7-ethereum-internals/index.md`:

```md
# 卷七：Ethereum 底层原理

## 这一卷解决什么

这一卷负责把交易、区块、Trie、共识和签名这些底层概念放回开发者的工程语境，而不是孤立地背术语。

## 建议阅读顺序

先看交易与状态变更，再看 mempool、Trie、共识和钱包原理。当前 Phase 1 先提供卷级导读，正文在下一阶段展开。

## 本卷章节

- 第 1 章：Transaction / Block / State Transition
- 第 2 章：Mempool / Reorg / Finality
- 第 3 章：Merkle / Trie
- 第 4 章：Consensus / Validator
- 第 5 章：Hash / ECDSA / Wallet
```

- [ ] **Step 3: Create the landing pages for volumes 8 and 9**

Create `book/part-8-defi/index.md`:

```md
# 卷八：DeFi 原理

## 这一卷解决什么

这一卷负责建立读 DeFi 协议前必须掌握的积木：AMM、借贷、预言机、清算和 MEV。

## 建议阅读顺序

先看 DeFi 积木和 AMM，再进入借贷、Oracle、清算和博弈问题。当前 Phase 1 先提供卷级导读，正文在下一阶段展开。

## 本卷章节

- 第 1 章：DeFi 积木
- 第 2 章：AMM
- 第 3 章：Lending
- 第 4 章：Oracle
- 第 5 章：Liquidation
- 第 6 章：MEV
```

Create `book/part-9-protocol-reading/index.md`:

```md
# 卷九：协议源码阅读

## 这一卷解决什么

这一卷负责回答一个常见问题：打开一个大型协议仓库后，第一眼到底该看什么，第二眼看什么，怎么避免被复杂度淹没。

## 建议阅读顺序

先读如何读真实协议，再按 OpenZeppelin、Uniswap V2、Uniswap V3、Aave、EigenLayer 的顺序推进。

## 本卷章节

- 第 1 章：如何读真实协议
- 第 2 章：OpenZeppelin
- 第 3 章：Uniswap V2
- 第 4 章：Uniswap V3
- 第 5 章：Aave
- 第 6 章：EigenLayer
```

- [ ] **Step 4: Create the landing page for volume 10**

Create `book/part-10-training/index.md`:

```md
# 卷十：训练与实战

## 这一卷解决什么

这一卷负责把前面所有理论压回手上，形成可执行的 100 天计划、项目阶梯和面试准备路径。

## 建议阅读顺序

先读项目路线与 100 天计划，再进入面试题体系和个人长期学习系统。

## 本卷章节

- 第 1 章：项目路线与 100 天计划
- 第 2 章：面试题体系
- 第 3 章：项目实战路线
- 第 4 章：从 Todo 到 DEX
- 第 5 章：长期学习系统
```

- [ ] **Step 5: Run the second volume scope to verify it passes**

Run: `npm run docs:check -- volumesB`
Expected: PASS with `Book validation passed for scopes: volumesB`

- [ ] **Step 6: Commit the last five volume landings**

```bash
git add book/part-6-security/index.md book/part-7-ethereum-internals/index.md book/part-8-defi/index.md book/part-9-protocol-reading/index.md book/part-10-training/index.md
git commit -m "docs: scaffold volumes six through ten"
```

## Task 5: Migrate Canonical Seed Chapters For Volumes 1 Through 3

**Files:**
- Create: `book/part-1-foundations/chapter-01-transaction-mental-model/index.md`
- Create: `book/part-1-foundations/chapter-01-transaction-mental-model/from-click-to-state.md`
- Create: `book/part-1-foundations/chapter-01-transaction-mental-model/exercises.md`
- Create: `book/part-1-foundations/chapter-01-transaction-mental-model/practice.md`
- Create: `book/part-1-foundations/chapter-01-transaction-mental-model/reading.md`
- Create: `book/part-2-solidity/chapter-01-solidity-state-foundations/index.md`
- Create: `book/part-2-solidity/chapter-01-solidity-state-foundations/state-and-data-locations.md`
- Create: `book/part-2-solidity/chapter-01-solidity-state-foundations/exercises.md`
- Create: `book/part-2-solidity/chapter-01-solidity-state-foundations/practice.md`
- Create: `book/part-2-solidity/chapter-01-solidity-state-foundations/reading.md`
- Create: `book/part-3-foundry/chapter-01-foundry-engineering-workflow/index.md`
- Create: `book/part-3-foundry/chapter-01-foundry-engineering-workflow/foundry-loop.md`
- Create: `book/part-3-foundry/chapter-01-foundry-engineering-workflow/exercises.md`
- Create: `book/part-3-foundry/chapter-01-foundry-engineering-workflow/practice.md`
- Create: `book/part-3-foundry/chapter-01-foundry-engineering-workflow/reading.md`

- [ ] **Step 1: Run the first chapter bundle scope to confirm the red state**

Run: `npm run docs:check -- chaptersA`
Expected: FAIL with at least `Missing file: book/part-1-foundations/chapter-01-transaction-mental-model/index.md`

- [ ] **Step 2: Create the canonical chapter bundle for volume 1**

Create `book/part-1-foundations/chapter-01-transaction-mental-model/index.md`:

```md
# 第 1 章：交易心智模型

## 本章要解决什么

把一次前端交互如何变成链上状态变化完整讲清楚。

## 读完后你应该会什么

- 解释一笔交易从签名到 receipt 的完整链路
- 说清 event、log 和状态变化分别属于哪一层
- 能画出一次熟悉业务的交易流程图

## 本章目录

- [从点击到状态变化](/part-1-foundations/chapter-01-transaction-mental-model/from-click-to-state)

## 练习与实践入口

- [练习题](/part-1-foundations/chapter-01-transaction-mental-model/exercises)
- [项目实践](/part-1-foundations/chapter-01-transaction-mental-model/practice)

## 延伸阅读入口

- [继续深入](/part-1-foundations/chapter-01-transaction-mental-model/reading)
```

Create `book/part-1-foundations/chapter-01-transaction-mental-model/from-click-to-state.md`:

```md
# 从点击到状态变化

## 先理解什么

前端发起的不是“直接改链上数据”，而是构造交易、签名、广播，再由节点和区块生产者决定什么时候执行。

## 为什么重要

如果这条链路不清楚，你就很难解释 pending、失败回滚、event、receipt 和前端状态更新之间的差别。

## 核心机制

用户点击按钮以后，前端会编码参数、构造交易、请求钱包签名，再把交易发给 RPC 节点。交易进入 mempool 之后，等待打包进块，再由 EVM 执行，最后产生状态变化、日志和 receipt。

## 常见误区

很多人会把 RPC 返回成功当成链上执行成功，也会把 event 当成状态本身。实际上，交易广播成功、交易执行成功、交易确认完成，是三个不同层次。

## 工程判断

前端应该把“提交中、已广播、已确认、失败回滚”拆开建模，而不是只用一个 loading 状态覆盖所有链上阶段。

## 本节小结

把交易看成一条跨越钱包、RPC、mempool、区块和 EVM 的执行链，而不是一次同步函数调用。
```

Create `book/part-1-foundations/chapter-01-transaction-mental-model/exercises.md`:

```md
# 练习题

## 概念题

1. 交易广播成功和交易执行成功有什么区别？
2. receipt、log、state change 分别代表什么？

## 分析题

画出你最熟悉的一个 dApp 功能，从点击按钮到前端 UI 最终更新的完整链路。

## 代码题

用任意熟悉的前端框架，实现一个把交易状态拆成 `idle`、`signing`、`broadcasted`、`confirmed`、`failed` 的最小状态机。
```

Create `book/part-1-foundations/chapter-01-transaction-mental-model/practice.md`:

```md
# 项目实践

## 实践目标

把一个真实合约交互流程画成可解释的状态图。

## 操作步骤

1. 选一个你熟悉的写操作
2. 标出签名、广播、等待打包、确认、失败回滚几个阶段
3. 记录每个阶段前端应该展示什么

## 交付物

- 一张流程图
- 一段文字解释每个阶段为什么存在
- 一个最小前端状态实现
```

Create `book/part-1-foundations/chapter-01-transaction-mental-model/reading.md`:

```md
# 延伸阅读

## 必读

- Ethereum.org 的 transactions 与 blocks 文档
- Ethers 或 viem 的 transaction lifecycle 文档

## 进阶

- Yellow Paper 中和交易执行相关的术语定义
- client 实现里关于 mempool 和 receipt 的代码入口

## 实战

- 用区块浏览器对比一笔成功交易和一笔失败交易的详情页
- 记录同一笔交易在钱包、RPC 和区块浏览器中的不同可观察信号
```

- [ ] **Step 3: Create the canonical chapter bundle for volume 2**

Create `book/part-2-solidity/chapter-01-solidity-state-foundations/index.md`:

```md
# 第 1 章：Solidity 与状态基础

## 本章要解决什么

把 Solidity 从语法表面推进到状态设计层。

## 读完后你应该会什么

- 区分 storage、memory 和 calldata
- 解释为什么 state write 要花明显 gas
- 理解 mapping 为什么天然不适合枚举

## 本章目录

- [状态与数据位置](/part-2-solidity/chapter-01-solidity-state-foundations/state-and-data-locations)

## 练习与实践入口

- [练习题](/part-2-solidity/chapter-01-solidity-state-foundations/exercises)
- [项目实践](/part-2-solidity/chapter-01-solidity-state-foundations/practice)

## 延伸阅读入口

- [继续深入](/part-2-solidity/chapter-01-solidity-state-foundations/reading)
```

Create `book/part-2-solidity/chapter-01-solidity-state-foundations/state-and-data-locations.md`:

```md
# 状态与数据位置

## 先理解什么

Solidity 不只是“声明变量”，而是在描述数据最终放在哪一层：持久状态、临时内存还是只读输入。

## 为什么重要

数据放在哪，决定了 gas 成本、可修改性和函数边界。很多合约设计习惯其实都来自这个选择。

## 核心机制

`storage` 对应链上持久状态，写入昂贵但可跨交易保留。`memory` 用于单次执行过程中的临时数据。`calldata` 用于外部调用输入，便宜且只读。`mapping` 用哈希方式定位键值，因此天然适合按键查，不适合全量遍历。

## 常见误区

最常见的误区是把 `view` 理解成“完全免费”，或者把 `mapping` 当成普通对象数组来想象。

## 工程判断

当你设计状态结构时，先问自己哪些数据必须持久化，哪些只是执行过程中的中间态，哪些应该从事件或离线索引里恢复。

## 本节小结

理解数据位置，就是理解 Solidity 状态成本和接口设计的起点。
```

Create `book/part-2-solidity/chapter-01-solidity-state-foundations/exercises.md`:

```md
# 练习题

## 概念题

1. `storage`、`memory`、`calldata` 的边界分别是什么？
2. 为什么 `mapping` 不能自然遍历？

## 分析题

给一个简单的银行合约列出哪些字段必须在 `storage`，哪些逻辑只需要 `memory`。

## 代码题

写一个最小合约，同时演示 `storage` 引用修改和 `memory` 拷贝修改的行为差异。
```

Create `book/part-2-solidity/chapter-01-solidity-state-foundations/practice.md`:

```md
# 项目实践

## 实践目标

写一个最小金库或投票合约，并解释每个状态字段为什么放在那里。

## 操作步骤

1. 设计 3 到 5 个状态字段
2. 写出读写函数
3. 标注每个字段的存在理由和成本含义

## 交付物

- 一份最小合约
- 一张状态字段说明表
- 一段关于 gas 成本的短说明
```

Create `book/part-2-solidity/chapter-01-solidity-state-foundations/reading.md`:

```md
# 延伸阅读

## 必读

- Solidity 官方文档中的 state variables 与 data location
- OpenZeppelin 文档中的 access control 与 token standards

## 进阶

- Solidity layout 文档
- storage slot 相关深入文章

## 实战

- 用 Remix 或 Foundry 比较不同数据位置的 gas 差异
- 给一个真实协议画出它的核心状态结构
```

- [ ] **Step 4: Create the canonical chapter bundle for volume 3**

Create `book/part-3-foundry/chapter-01-foundry-engineering-workflow/index.md`:

```md
# 第 1 章：Foundry 工程工作流

## 本章要解决什么

把合约开发从“会写代码”推进到“会迭代、会测试、会调试、会部署”。

## 读完后你应该会什么

- 解释 Forge、Cast、Anvil 和 Script 的角色
- 建立本地开发与测试闭环
- 把测试当成状态边界保护，而不只是功能验证

## 本章目录

- [Foundry 的工程闭环](/part-3-foundry/chapter-01-foundry-engineering-workflow/foundry-loop)

## 练习与实践入口

- [练习题](/part-3-foundry/chapter-01-foundry-engineering-workflow/exercises)
- [项目实践](/part-3-foundry/chapter-01-foundry-engineering-workflow/practice)

## 延伸阅读入口

- [继续深入](/part-3-foundry/chapter-01-foundry-engineering-workflow/reading)
```

Create `book/part-3-foundry/chapter-01-foundry-engineering-workflow/foundry-loop.md`:

```md
# Foundry 的工程闭环

## 先理解什么

Foundry 不是单一命令，而是一整套本地执行、测试、脚本和调试工具链。

## 为什么重要

如果你只会写 Solidity，却没有稳定的测试和调试回路，合约很容易停留在 demo 阶段。

## 核心机制

`forge build` 负责编译，`forge test` 负责执行测试，`anvil` 提供本地链，`cast` 负责命令行交互，`forge script` 负责可复用部署与执行脚本。

## 常见误区

很多人把测试当成“最后补一下”，或者把脚本只当成部署入口，不把它视为可重复的工程流程。

## 工程判断

对合约项目来说，最稳的节奏是写最小功能、补最小测试、跑本地链验证、再扩展边界条件，而不是一口气写完整个协议。

## 本节小结

Foundry 的核心价值在于把合约开发变成一个可以反复验证的小闭环。
```

Create `book/part-3-foundry/chapter-01-foundry-engineering-workflow/exercises.md`:

```md
# 练习题

## 概念题

1. Forge、Cast、Anvil、Script 分别解决什么问题？
2. 为什么本地链和脚本是工程工作流的一部分？

## 分析题

为一个最小 ERC20 项目设计一条从编译到部署验证的本地工作流。

## 代码题

创建一个最小 Foundry 项目，写一条部署脚本和一条测试命令说明。
```

Create `book/part-3-foundry/chapter-01-foundry-engineering-workflow/practice.md`:

```md
# 项目实践

## 实践目标

把一个最小合约项目跑通完整的本地工程闭环。

## 操作步骤

1. 新建 Foundry 项目
2. 写一个最小合约
3. 写一条单元测试
4. 用本地链和脚本完成一次部署

## 交付物

- 合约文件
- 测试文件
- 部署脚本
- 一段命令执行记录
```

Create `book/part-3-foundry/chapter-01-foundry-engineering-workflow/reading.md`:

```md
# 延伸阅读

## 必读

- Foundry Book
- Cheatcodes 文档

## 进阶

- invariant testing 文档
- fork testing 示例仓库

## 实战

- 为一个已有练习合约补齐测试与部署脚本
- 对一次失败测试做 trace 分析
```

- [ ] **Step 5: Run the first chapter bundle scope to verify it passes**

Run: `npm run docs:check -- chaptersA`
Expected: PASS with `Book validation passed for scopes: chaptersA`

- [ ] **Step 6: Commit the first three canonical chapter bundles**

```bash
git add book/part-1-foundations/chapter-01-transaction-mental-model book/part-2-solidity/chapter-01-solidity-state-foundations book/part-3-foundry/chapter-01-foundry-engineering-workflow
git commit -m "docs: migrate seed chapters for foundations to foundry"
```

## Task 6: Migrate Canonical Seed Chapters For Volumes 4 Through 6

**Files:**
- Create: `book/part-4-evm/chapter-01-evm-execution-model/index.md`
- Create: `book/part-4-evm/chapter-01-evm-execution-model/storage-memory-calldata.md`
- Create: `book/part-4-evm/chapter-01-evm-execution-model/exercises.md`
- Create: `book/part-4-evm/chapter-01-evm-execution-model/practice.md`
- Create: `book/part-4-evm/chapter-01-evm-execution-model/reading.md`
- Create: `book/part-5-gas/chapter-01-gas-cost-mental-model/index.md`
- Create: `book/part-5-gas/chapter-01-gas-cost-mental-model/why-sstore-hurts.md`
- Create: `book/part-5-gas/chapter-01-gas-cost-mental-model/exercises.md`
- Create: `book/part-5-gas/chapter-01-gas-cost-mental-model/practice.md`
- Create: `book/part-5-gas/chapter-01-gas-cost-mental-model/reading.md`
- Create: `book/part-6-security/chapter-01-security-review-basics/index.md`
- Create: `book/part-6-security/chapter-01-security-review-basics/reentrancy-and-access-control.md`
- Create: `book/part-6-security/chapter-01-security-review-basics/exercises.md`
- Create: `book/part-6-security/chapter-01-security-review-basics/practice.md`
- Create: `book/part-6-security/chapter-01-security-review-basics/reading.md`

- [ ] **Step 1: Run the second chapter bundle scope to confirm the red state**

Run: `npm run docs:check -- chaptersB`
Expected: FAIL with at least `Missing file: book/part-4-evm/chapter-01-evm-execution-model/index.md`

- [ ] **Step 2: Create the canonical chapter bundle for volume 4**

Create `book/part-4-evm/chapter-01-evm-execution-model/index.md`:

```md
# 第 1 章：EVM 执行模型

## 本章要解决什么

解释交易进入执行环境后，EVM 到底如何处理数据和上下文。

## 读完后你应该会什么

- 区分 stack、memory、storage、calldata
- 解释为什么不同区域的成本差异很大
- 把常见 gas 结论和执行模型关联起来

## 本章目录

- [Storage、Memory 与 Calldata](/part-4-evm/chapter-01-evm-execution-model/storage-memory-calldata)

## 练习与实践入口

- [练习题](/part-4-evm/chapter-01-evm-execution-model/exercises)
- [项目实践](/part-4-evm/chapter-01-evm-execution-model/practice)

## 延伸阅读入口

- [继续深入](/part-4-evm/chapter-01-evm-execution-model/reading)
```

Create `book/part-4-evm/chapter-01-evm-execution-model/storage-memory-calldata.md`:

```md
# Storage、Memory 与 Calldata

## 先理解什么

EVM 不是一整块内存，它区分多种数据区域，而且这些区域的生命周期和成本完全不同。

## 为什么重要

很多 Solidity 写法只有在你理解这些执行区域之后，才会从“经验法则”变成“可解释设计”。

## 核心机制

`storage` 持久保存在链上，`memory` 只在单次执行期间存在，`calldata` 是只读的输入载体。不同区域的读写方式和 gas 成本都不一样，这决定了函数参数、内部处理和状态更新该如何组织。

## 常见误区

常见误区是把 `memory` 当成“更快版本的 storage”，或者把 `calldata` 误解成“只是语法写法差异”。

## 工程判断

当函数只是消费外部输入时，优先考虑 `calldata`。当你需要中间态或临时聚合时，再进入 `memory`。只有真正要跨交易保存的信息才值得进入 `storage`。

## 本节小结

执行区域不是细枝末节，而是 EVM 成本模型和 Solidity 接口设计的核心。
```

Create `book/part-4-evm/chapter-01-evm-execution-model/exercises.md`:

```md
# 练习题

## 概念题

1. 为什么 `calldata` 常常是外部函数参数的首选？
2. `memory` 和 `storage` 的生命周期差异是什么？

## 分析题

选一个真实合约函数，分析其中哪些数据应该留在 `calldata`，哪些需要拷贝到 `memory`。

## 代码题

写一个最小函数，比较 `memory` 数组和 `calldata` 数组在处理流程上的差异。
```

Create `book/part-4-evm/chapter-01-evm-execution-model/practice.md`:

```md
# 项目实践

## 实践目标

用一个最小合约实验三种数据区域的使用方式。

## 操作步骤

1. 写一个接收数组的外部函数
2. 分别尝试 `memory` 和 `calldata` 参数
3. 增加一次 `storage` 写入并记录 gas 差异

## 交付物

- 实验合约
- gas 对比记录
- 一段关于差异来源的解释
```

Create `book/part-4-evm/chapter-01-evm-execution-model/reading.md`:

```md
# 延伸阅读

## 必读

- Solidity 官方文档中的 data location
- evm.codes 关于 memory 和 storage 的说明

## 进阶

- Yellow Paper 中和 machine state 相关的定义
- 深入讲 storage layout 的文章

## 实战

- 用 Foundry 跑一次 gas snapshot，对比不同数据位置写法
- 打开一个真实协议的合约函数，标注每种数据区域的角色
```

- [ ] **Step 3: Create the canonical chapter bundles for volumes 5 and 6**

Create `book/part-5-gas/chapter-01-gas-cost-mental-model/index.md`:

```md
# 第 1 章：Gas 成本心智模型

## 本章要解决什么

解释 gas 为什么花在这些地方，而不是只背“什么贵什么便宜”。

## 读完后你应该会什么

- 理解状态写入为什么昂贵
- 把 gas 优化和状态设计联系起来
- 分辨结构性优化与微优化

## 本章目录

- [为什么 SSTORE 特别疼](/part-5-gas/chapter-01-gas-cost-mental-model/why-sstore-hurts)

## 练习与实践入口

- [练习题](/part-5-gas/chapter-01-gas-cost-mental-model/exercises)
- [项目实践](/part-5-gas/chapter-01-gas-cost-mental-model/practice)

## 延伸阅读入口

- [继续深入](/part-5-gas/chapter-01-gas-cost-mental-model/reading)
```

Create `book/part-5-gas/chapter-01-gas-cost-mental-model/why-sstore-hurts.md`:

```md
# 为什么 SSTORE 特别疼

## 先理解什么

gas 本质上是在为执行环境的资源消耗定价，而持久状态是最昂贵的资源之一。

## 为什么重要

如果不理解 storage 成本，你就很容易把 gas 优化误解成语法技巧，而忽略真正有价值的状态设计。

## 核心机制

`SSTORE` 涉及链上持久状态更新，后续状态读取和全局状态结构都要为它承担成本。相比之下，`memory` 和 `calldata` 只服务于单次执行或输入读取，因此便宜得多。

## 常见误区

常见误区是只盯着 `unchecked`、短变量名或者一些零碎写法，却不先看状态字段是否真的需要存在。

## 工程判断

先减少不必要的持久写入，再考虑局部微优化。真正高价值的 gas 优化，往往来自状态结构和调用模式设计。

## 本节小结

最贵的通常不是语法，而是你决定把什么永久写进链上。
```

Create `book/part-5-gas/chapter-01-gas-cost-mental-model/exercises.md`:

```md
# 练习题

## 概念题

1. 为什么 `SSTORE` 通常比 `memory` 写入贵很多？
2. 什么叫结构性 gas 优化？

## 分析题

分析一个最小合约，找出哪些状态字段其实可以不持久化。

## 代码题

写两种版本的计数器或金库合约，对比一次操作中的 gas 成本差异。
```

Create `book/part-5-gas/chapter-01-gas-cost-mental-model/practice.md`:

```md
# 项目实践

## 实践目标

做一次以状态设计为中心的 gas 对比实验。

## 操作步骤

1. 选一个最小业务模型
2. 写一个“状态较重”的版本
3. 写一个“状态较轻”的版本
4. 对比 gas 并解释原因

## 交付物

- 两份合约
- 一份 gas 对比表
- 一段设计复盘
```

Create `book/part-5-gas/chapter-01-gas-cost-mental-model/reading.md`:

```md
# 延伸阅读

## 必读

- Solidity docs 中与 gas optimization 相关的部分
- evm.codes 上的 `SSTORE` 与 `SLOAD`

## 进阶

- storage packing 深入文章
- 一些真实协议的 gas review

## 实战

- 对自己的练习合约做一次 slot packing 复盘
- 为一个函数写出“先结构、后语法”的优化清单
```

Create `book/part-6-security/chapter-01-security-review-basics/index.md`:

```md
# 第 1 章：安全审查基础

## 本章要解决什么

建立最基本的安全审查视角：看资产、看权限、看外部调用、看失败路径。

## 读完后你应该会什么

- 从攻击者视角检查最小合约
- 识别最基础的重入和权限风险
- 把功能测试和安全边界测试区分开

## 本章目录

- [重入与权限边界](/part-6-security/chapter-01-security-review-basics/reentrancy-and-access-control)

## 练习与实践入口

- [练习题](/part-6-security/chapter-01-security-review-basics/exercises)
- [项目实践](/part-6-security/chapter-01-security-review-basics/practice)

## 延伸阅读入口

- [继续深入](/part-6-security/chapter-01-security-review-basics/reading)
```

Create `book/part-6-security/chapter-01-security-review-basics/reentrancy-and-access-control.md`:

```md
# 重入与权限边界

## 先理解什么

很多合约漏洞不是“语法不会写”，而是状态更新时机、外部调用和权限模型的边界没有设计清楚。

## 为什么重要

重入和权限问题是最常见、也最容易造成资产损失的漏洞类型之一。

## 核心机制

当合约在更新关键状态之前把控制权交给外部地址，就可能暴露重入窗口。权限问题则通常来自角色划分含糊、管理员能力过大或关键操作缺乏检查。

## 常见误区

很多人会把安全理解成“加个 onlyOwner 就够了”，或者认为“测试通过就说明没问题”。

## 工程判断

审查看三件事：谁能动钱，谁能改规则，谁能在外部调用期间拿到第二次机会。

## 本节小结

安全不是附加标签，而是对状态边界和控制流的持续检查。
```

Create `book/part-6-security/chapter-01-security-review-basics/exercises.md`:

```md
# 练习题

## 概念题

1. 重入的最小触发条件是什么？
2. 为什么权限边界不能只靠一个 `onlyOwner` 来理解？

## 分析题

阅读一个最小金库合约，分析它的资产入口、出口和管理员边界。

## 代码题

写一个带有重入缺陷的最小示例，再写出修复版本。
```

Create `book/part-6-security/chapter-01-security-review-basics/practice.md`:

```md
# 项目实践

## 实践目标

做一次最小合约的安全审查演练。

## 操作步骤

1. 选一个带余额或权限的合约
2. 检查外部调用顺序
3. 检查管理员能力
4. 列出至少 3 个潜在风险点

## 交付物

- 一份审查清单
- 一个漏洞说明
- 一个修复建议
```

Create `book/part-6-security/chapter-01-security-review-basics/reading.md`:

```md
# 延伸阅读

## 必读

- OpenZeppelin 安全文档
- Solidity 安全考虑章节

## 进阶

- Cyfrin 安全课程
- 典型重入与权限事故复盘

## 实战

- 对自己的练习合约做一次安全审查
- 为每个关键写操作补一条失败路径测试
```

- [ ] **Step 4: Run the second chapter bundle scope to verify it passes**

Run: `npm run docs:check -- chaptersB`
Expected: PASS with `Book validation passed for scopes: chaptersB`

- [ ] **Step 5: Commit the EVM, Gas, and security chapter bundles**

```bash
git add book/part-4-evm/chapter-01-evm-execution-model book/part-5-gas/chapter-01-gas-cost-mental-model book/part-6-security/chapter-01-security-review-basics
git commit -m "docs: migrate evm gas and security seed chapters"
```

## Task 7: Migrate Protocol And Training Seed Chapters And Preserve Legacy Routes

**Files:**
- Create: `book/part-9-protocol-reading/chapter-01-reading-real-protocols/index.md`
- Create: `book/part-9-protocol-reading/chapter-01-reading-real-protocols/reading-order-and-questions.md`
- Create: `book/part-9-protocol-reading/chapter-01-reading-real-protocols/exercises.md`
- Create: `book/part-9-protocol-reading/chapter-01-reading-real-protocols/practice.md`
- Create: `book/part-9-protocol-reading/chapter-01-reading-real-protocols/reading.md`
- Create: `book/part-10-training/chapter-01-roadmap-and-100-days/index.md`
- Create: `book/part-10-training/chapter-01-roadmap-and-100-days/project-ladder.md`
- Create: `book/part-10-training/chapter-01-roadmap-and-100-days/exercises.md`
- Create: `book/part-10-training/chapter-01-roadmap-and-100-days/practice.md`
- Create: `book/part-10-training/chapter-01-roadmap-and-100-days/reading.md`
- Modify: `book/mental-model/index.md`
- Modify: `book/solidity-state/index.md`
- Modify: `book/evm-gas/index.md`
- Modify: `book/security/index.md`
- Modify: `book/engineering-testing/index.md`
- Modify: `book/protocol-reading/index.md`
- Modify: `book/project-roadmap/index.md`

- [ ] **Step 1: Run the final chapter and legacy scopes to confirm the red state**

Run: `npm run docs:check -- chaptersC legacy`
Expected: FAIL with at least `Missing file: book/part-9-protocol-reading/chapter-01-reading-real-protocols/index.md`

- [ ] **Step 2: Create the canonical chapter bundle for volume 9**

Create `book/part-9-protocol-reading/chapter-01-reading-real-protocols/index.md`:

```md
# 第 1 章：如何读真实协议

## 本章要解决什么

建立一套能读下去、读得动、读得有收获的协议源码阅读顺序。

## 读完后你应该会什么

- 进入仓库后知道先看哪些文件
- 能围绕状态、权限、资金流提问题
- 不再被复杂目录和大量辅助代码吓退

## 本章目录

- [阅读顺序与问题清单](/part-9-protocol-reading/chapter-01-reading-real-protocols/reading-order-and-questions)

## 练习与实践入口

- [练习题](/part-9-protocol-reading/chapter-01-reading-real-protocols/exercises)
- [项目实践](/part-9-protocol-reading/chapter-01-reading-real-protocols/practice)

## 延伸阅读入口

- [继续深入](/part-9-protocol-reading/chapter-01-reading-real-protocols/reading)
```

Create `book/part-9-protocol-reading/chapter-01-reading-real-protocols/reading-order-and-questions.md`:

```md
# 阅读顺序与问题清单

## 先理解什么

协议源码阅读不是“从第一行读到最后一行”，而是先找到系统的状态核心和控制核心。

## 为什么重要

如果阅读顺序不对，你很容易被辅助函数、库和测试细节淹没，看半天却说不出协议真正的骨架。

## 核心机制

先看入口合约和核心状态，再看关键写操作，再看权限与外部依赖，最后再回到测试和边缘模块。阅读时持续追问：钱从哪来，到哪去，谁能改规则，失败会怎么暴露。

## 常见误区

最常见的误区是顺着文件树硬啃，或者先看测试却没有任何系统模型做支撑。

## 工程判断

读协议时先抓资产流和状态流。只要这两条线抓住了，剩下的大量实现细节就有了落点。

## 本节小结

协议源码阅读首先是一种提问方法，而不是阅读耐力比赛。
```

Create `book/part-9-protocol-reading/chapter-01-reading-real-protocols/exercises.md`:

```md
# 练习题

## 概念题

1. 为什么协议阅读应该先抓状态和资金流？
2. 阅读顺序错了会带来什么问题？

## 分析题

给一个你熟悉的仓库，写出“先看哪些文件、为什么先看这些”的顺序表。

## 代码题

为一个小型协议仓库写一份阅读清单，至少包含入口、状态、权限、测试四类文件。
```

Create `book/part-9-protocol-reading/chapter-01-reading-real-protocols/practice.md`:

```md
# 项目实践

## 实践目标

对一个真实仓库做第一次结构化阅读。

## 操作步骤

1. 选 OpenZeppelin 或 Uniswap V2
2. 标出入口合约和核心状态
3. 记录 3 个关键函数和 3 个关键问题

## 交付物

- 一份阅读顺序表
- 一张状态和资金流草图
- 一页阅读笔记
```

Create `book/part-9-protocol-reading/chapter-01-reading-real-protocols/reading.md`:

```md
# 延伸阅读

## 必读

- OpenZeppelin 仓库
- Uniswap V2 Core 仓库

## 进阶

- Uniswap V3 文档与源码
- Aave 核心仓库

## 实战

- 每天只读几十行并写提问笔记
- 给每个核心函数补一句“它为什么存在”
```

- [ ] **Step 3: Create the canonical chapter bundle for volume 10**

Create `book/part-10-training/chapter-01-roadmap-and-100-days/index.md`:

```md
# 第 1 章：项目路线与 100 天计划

## 本章要解决什么

把“应该学什么”变成“明天就能开始做什么”。

## 读完后你应该会什么

- 按阶段安排 100 天学习节奏
- 给自己选择合适的项目阶梯
- 把阅读和练习绑定到真实输出

## 本章目录

- [从 Todo 到 DEX 的项目阶梯](/part-10-training/chapter-01-roadmap-and-100-days/project-ladder)

## 练习与实践入口

- [练习题](/part-10-training/chapter-01-roadmap-and-100-days/exercises)
- [项目实践](/part-10-training/chapter-01-roadmap-and-100-days/practice)

## 延伸阅读入口

- [继续深入](/part-10-training/chapter-01-roadmap-and-100-days/reading)
```

Create `book/part-10-training/chapter-01-roadmap-and-100-days/project-ladder.md`:

```md
# 从 Todo 到 DEX 的项目阶梯

## 先理解什么

项目顺序会直接决定学习效率。先做小而闭环的项目，再进入高耦合系统，成长速度会快很多。

## 为什么重要

如果一开始就挑战桥、借贷或复杂 DEX，往往会把多个难点叠在一起，最后既没做完，也没真正理解原因。

## 核心机制

建议从 Todo、Bank、Voting、ERC20、NFT、MultiSig、Staking、DEX 这样的阶梯往上走。每一层只新增一到两个关键难点，让你知道自己在练什么。

## 常见误区

常见误区是只做 UI 接入项目，或者一开始就复制大型协议代码，却没有最小可解释版本。

## 工程判断

每做完一个项目，都要回答三个问题：状态是怎么设计的，测试覆盖了什么，最容易出漏洞的边界在哪里。

## 本节小结

项目不是为了“做过很多”，而是为了建立一层一层叠加的判断力。
```

Create `book/part-10-training/chapter-01-roadmap-and-100-days/exercises.md`:

```md
# 练习题

## 概念题

1. 为什么项目练习要按阶梯安排？
2. 一个好的练习项目应该新增哪些难点，而不是把所有难点堆在一起？

## 分析题

为自己设计一条 8 周项目路线，并说明每一周为什么这样排。

## 代码题

写一个最小项目清单，从合约、测试、前端到文档，列出你本周要完成的最小交付。
```

Create `book/part-10-training/chapter-01-roadmap-and-100-days/practice.md`:

```md
# 项目实践

## 实践目标

把你未来 30 天的学习计划压成一个真实执行清单。

## 操作步骤

1. 选一个当前阶段最合适的项目
2. 拆成功能、测试、复盘三条线
3. 为每周设一个可交付成果

## 交付物

- 30 天计划表
- 本周项目清单
- 一段风险预估说明
```

Create `book/part-10-training/chapter-01-roadmap-and-100-days/reading.md`:

```md
# 延伸阅读

## 必读

- Foundry Book
- OpenZeppelin 文档
- Ethereum.org 开发者文档

## 进阶

- Uniswap V2 和 V3 仓库
- Aave 与 EigenLayer 相关资料

## 实战

- 按 100 天节奏做每周复盘
- 每完成一个项目就补一份“状态、Gas、安全”复盘笔记
```

- [ ] **Step 4: Convert the legacy flat pages into transition pages**

Update `book/mental-model/index.md`:

```md
# 认知重建（旧路径）

这部分内容已经迁移到新的书籍结构。

- 新入口：[卷一：Web3 与 Ethereum 基础](/part-1-foundations/)
- 练习题：[第 1 章练习题](/part-1-foundations/chapter-01-transaction-mental-model/exercises)
- 项目实践：[第 1 章项目实践](/part-1-foundations/chapter-01-transaction-mental-model/practice)
- 延伸阅读：[第 1 章继续深入](/part-1-foundations/chapter-01-transaction-mental-model/reading)
```

Update `book/solidity-state/index.md`:

```md
# Solidity 与状态（旧路径）

这部分内容已经迁移到新的书籍结构。

- 新入口：[卷二：Solidity（从零到高级）](/part-2-solidity/)
- 练习题：[第 1 章练习题](/part-2-solidity/chapter-01-solidity-state-foundations/exercises)
- 项目实践：[第 1 章项目实践](/part-2-solidity/chapter-01-solidity-state-foundations/practice)
- 延伸阅读：[第 1 章继续深入](/part-2-solidity/chapter-01-solidity-state-foundations/reading)
```

Update `book/evm-gas/index.md`:

```md
# EVM 与 Gas（旧路径）

这部分内容已经拆分进新的卷四和卷五结构。

- 新入口：[卷四：EVM 原理](/part-4-evm/)
- 练习题：[卷四第 1 章练习题](/part-4-evm/chapter-01-evm-execution-model/exercises)
- 项目实践：[卷五第 1 章项目实践](/part-5-gas/chapter-01-gas-cost-mental-model/practice)
- 延伸阅读：[卷五第 1 章继续深入](/part-5-gas/chapter-01-gas-cost-mental-model/reading)
```

Update `book/security/index.md`:

```md
# 安全（旧路径）

这部分内容已经迁移到新的书籍结构。

- 新入口：[卷六：智能合约安全](/part-6-security/)
- 练习题：[第 1 章练习题](/part-6-security/chapter-01-security-review-basics/exercises)
- 项目实践：[第 1 章项目实践](/part-6-security/chapter-01-security-review-basics/practice)
- 延伸阅读：[第 1 章继续深入](/part-6-security/chapter-01-security-review-basics/reading)
```

Update `book/engineering-testing/index.md`:

```md
# 工程化与测试（旧路径）

这部分内容已经迁移到新的书籍结构。

- 新入口：[卷三：Foundry 完整开发指南](/part-3-foundry/)
- 练习题：[第 1 章练习题](/part-3-foundry/chapter-01-foundry-engineering-workflow/exercises)
- 项目实践：[第 1 章项目实践](/part-3-foundry/chapter-01-foundry-engineering-workflow/practice)
- 延伸阅读：[第 1 章继续深入](/part-3-foundry/chapter-01-foundry-engineering-workflow/reading)
```

Update `book/protocol-reading/index.md`:

```md
# 协议源码阅读（旧路径）

这部分内容已经迁移到新的书籍结构。

- 新入口：[卷九：协议源码阅读](/part-9-protocol-reading/)
- 练习题：[第 1 章练习题](/part-9-protocol-reading/chapter-01-reading-real-protocols/exercises)
- 项目实践：[第 1 章项目实践](/part-9-protocol-reading/chapter-01-reading-real-protocols/practice)
- 延伸阅读：[第 1 章继续深入](/part-9-protocol-reading/chapter-01-reading-real-protocols/reading)
```

Update `book/project-roadmap/index.md`:

```md
# 项目路线（旧路径）

这部分内容已经迁移到新的书籍结构。

- 新入口：[卷十：训练与实战](/part-10-training/)
- 练习题：[第 1 章练习题](/part-10-training/chapter-01-roadmap-and-100-days/exercises)
- 项目实践：[第 1 章项目实践](/part-10-training/chapter-01-roadmap-and-100-days/practice)
- 延伸阅读：[第 1 章继续深入](/part-10-training/chapter-01-roadmap-and-100-days/reading)
```

- [ ] **Step 5: Run the final chapter and legacy scopes to verify they pass**

Run: `npm run docs:check -- chaptersC legacy`
Expected: PASS with `Book validation passed for scopes: chaptersC, legacy`

- [ ] **Step 6: Commit the protocol, training, and legacy transitions**

```bash
git add book/part-9-protocol-reading/chapter-01-reading-real-protocols book/part-10-training/chapter-01-roadmap-and-100-days book/mental-model/index.md book/solidity-state/index.md book/evm-gas/index.md book/security/index.md book/engineering-testing/index.md book/protocol-reading/index.md book/project-roadmap/index.md
git commit -m "docs: migrate protocol and training seed chapters"
```

## Task 8: Refresh Appendix And README, Then Run Final Verification

**Files:**
- Modify: `book/appendix/resources.md`
- Modify: `README.md`

- [ ] **Step 1: Run the appendix scope to confirm the red state**

Run: `npm run docs:check -- appendix`
Expected: FAIL with at least `Missing pattern "## 主线资料" in book/appendix/resources.md`

- [ ] **Step 2: Rewrite the resources appendix for the new book structure**

Update `book/appendix/resources.md`:

```md
# 资料索引

## 官方文档

- Solidity 官方文档
- Foundry Book
- OpenZeppelin 文档
- Ethereum.org 开发者文档

## 主线资料

- 卷一到卷六的章节与练习
- 每章 `reading.md` 中的必读与进阶材料
- `study-method.md` 与 `source-code-reading-guide.md`

## 源码入口

- OpenZeppelin
- Uniswap V2
- Uniswap V3
- Aave
- EigenLayer
```

- [ ] **Step 3: Rewrite the README so it describes the book tree rather than the flat handbook**

Update `README.md`:

```md
# Web3 Learning Book

一个面向已经做过 dApp 的前端开发者的中文 Web3 长期学习型书籍仓库。

当前仓库已经完成 Phase 1 书籍重构：

- VitePress 站点已升级为“卷 -> 章 -> 节”的书籍结构
- 主干页面、卷级导读和种子章节已迁移到新路径
- 旧路径保留为过渡页
- 校验脚本会检查前言页、卷级导读、章节支持页和附录结构

## 本地开发

- `npm install`
- `npm run docs:dev`

## 本地校验

- `npm run docs:check`
- `npm run docs:build`

## 目录说明

- `book/`：站点正文
- `book/part-*`：卷级目录
- `book/part-*/chapter-*`：章节与练习支持页
- `scripts/validate-book.mjs`：结构校验脚本
- `docs/superpowers/`：设计与计划记录
```

- [ ] **Step 4: Run the appendix scope to verify it passes**

Run: `npm run docs:check -- appendix`
Expected: PASS with `Book validation passed for scopes: appendix`

- [ ] **Step 5: Run the full validation suite**

Run: `npm run docs:check -- frontmatter siteShell volumesA volumesB chaptersA chaptersB chaptersC legacy appendix`
Expected: PASS with `Book validation passed for scopes: frontmatter, siteShell, volumesA, volumesB, chaptersA, chaptersB, chaptersC, legacy, appendix`

- [ ] **Step 6: Run the production build**

Run: `npm run docs:build`
Expected: PASS with VitePress build output ending in a successful build summary

- [ ] **Step 7: Commit the appendix refresh and verified Phase 1 restructure**

```bash
git add book/appendix/resources.md README.md
git commit -m "docs: finish phase 1 book restructure"
```

## Self-Review

### Spec Coverage

- Front matter pages from the spec are covered in Task 1.
- Navigation and sidebar redesign are covered in Task 2.
- Ten-volume shell is covered in Tasks 3 and 4.
- Seed content migration into canonical chapter routes is covered in Tasks 5 through 7.
- Legacy route preservation is covered in Task 7.
- Appendix and repository guidance refresh are covered in Task 8.
- Validation strategy from the spec is implemented across Tasks 1 through 8.

### Placeholder Scan

This plan contains no unresolved placeholder markers or “similar to previous task” shortcuts. Each code step includes exact file contents or exact commands.

### Type And Name Consistency

- The validator scope names used in run commands exactly match the scope names defined in `scripts/validate-book.mjs`.
- Canonical chapter route names are consistent between the VitePress config, validator, canonical pages, and legacy transition pages.
- Volume directory names in the file structure match the route names used throughout the plan.
