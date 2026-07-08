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
        'text: "卷一：基础"',
        'link: "/part-1-foundations/"',
        'text: "卷十：训练与实战"',
        'link: "/part-10-training/"'
      ]
    },
    {
      file: "book/.vitepress/theme/custom.css",
      patterns: [".book-outline", ".book-card-grid", ".book-callout"]
    }
  ],
  volumesA: [
    { file: "book/part-1-foundations/index.md", patterns: ["## 这一卷解决什么", "## 建议阅读顺序", "## 本卷章节"] },
    { file: "book/part-2-solidity/index.md", patterns: ["## 这一卷解决什么", "## 建议阅读顺序", "## 本卷章节"] },
    { file: "book/part-3-foundry/index.md", patterns: ["## 这一卷解决什么", "## 建议阅读顺序", "## 本卷章节"] },
    { file: "book/part-4-evm/index.md", patterns: ["## 这一卷解决什么", "## 建议阅读顺序", "## 本卷章节"] },
    { file: "book/part-5-gas/index.md", patterns: ["## 这一卷解决什么", "## 建议阅读顺序", "## 本卷章节"] }
  ],
  volumesB: [
    { file: "book/part-6-security/index.md", patterns: ["## 这一卷解决什么", "## 建议阅读顺序", "## 本卷章节"] },
    { file: "book/part-7-ethereum-internals/index.md", patterns: ["## 这一卷解决什么", "## 建议阅读顺序", "## 本卷章节"] },
    { file: "book/part-8-defi/index.md", patterns: ["## 这一卷解决什么", "## 建议阅读顺序", "## 本卷章节"] },
    { file: "book/part-9-protocol-reading/index.md", patterns: ["## 这一卷解决什么", "## 建议阅读顺序", "## 本卷章节"] },
    { file: "book/part-10-training/index.md", patterns: ["## 这一卷解决什么", "## 建议阅读顺序", "## 本卷章节"] }
  ],
  chaptersA: [
    { file: "book/part-1-foundations/chapter-01-transaction-mental-model/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-1-foundations/chapter-01-transaction-mental-model/from-click-to-state.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-1-foundations/chapter-01-transaction-mental-model/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-1-foundations/chapter-01-transaction-mental-model/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-1-foundations/chapter-01-transaction-mental-model/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-2-solidity/chapter-01-solidity-state-foundations/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-2-solidity/chapter-01-solidity-state-foundations/state-and-data-locations.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-2-solidity/chapter-01-solidity-state-foundations/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-2-solidity/chapter-01-solidity-state-foundations/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-2-solidity/chapter-01-solidity-state-foundations/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-3-foundry/chapter-01-foundry-engineering-workflow/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-3-foundry/chapter-01-foundry-engineering-workflow/foundry-loop.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-3-foundry/chapter-01-foundry-engineering-workflow/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-3-foundry/chapter-01-foundry-engineering-workflow/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-3-foundry/chapter-01-foundry-engineering-workflow/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] }
  ],
  chaptersB: [
    { file: "book/part-4-evm/chapter-01-evm-execution-model/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-4-evm/chapter-01-evm-execution-model/storage-memory-calldata.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-4-evm/chapter-01-evm-execution-model/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-4-evm/chapter-01-evm-execution-model/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-4-evm/chapter-01-evm-execution-model/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-5-gas/chapter-01-gas-cost-mental-model/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-5-gas/chapter-01-gas-cost-mental-model/why-sstore-hurts.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-5-gas/chapter-01-gas-cost-mental-model/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-5-gas/chapter-01-gas-cost-mental-model/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-5-gas/chapter-01-gas-cost-mental-model/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-6-security/chapter-01-security-review-basics/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-6-security/chapter-01-security-review-basics/reentrancy-and-access-control.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-6-security/chapter-01-security-review-basics/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-6-security/chapter-01-security-review-basics/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-6-security/chapter-01-security-review-basics/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] }
  ],
  chaptersC: [
    { file: "book/part-7-ethereum-internals/chapter-01-transaction-block-state/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-7-ethereum-internals/chapter-01-transaction-block-state/transaction-block-state.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-7-ethereum-internals/chapter-01-transaction-block-state/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-7-ethereum-internals/chapter-01-transaction-block-state/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-7-ethereum-internals/chapter-01-transaction-block-state/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-8-defi/chapter-01-defi-primitives/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-8-defi/chapter-01-defi-primitives/amm-lending-oracle.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-8-defi/chapter-01-defi-primitives/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-8-defi/chapter-01-defi-primitives/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-8-defi/chapter-01-defi-primitives/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-9-protocol-reading/chapter-01-reading-real-protocols/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-9-protocol-reading/chapter-01-reading-real-protocols/reading-order-and-questions.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-9-protocol-reading/chapter-01-reading-real-protocols/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-9-protocol-reading/chapter-01-reading-real-protocols/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-9-protocol-reading/chapter-01-reading-real-protocols/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-10-training/chapter-01-roadmap-and-100-days/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-10-training/chapter-01-roadmap-and-100-days/project-ladder.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-10-training/chapter-01-roadmap-and-100-days/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-10-training/chapter-01-roadmap-and-100-days/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-10-training/chapter-01-roadmap-and-100-days/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] }
  ],
  chaptersD: [
    { file: "book/part-1-foundations/chapter-02-account-model-and-nonce/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-1-foundations/chapter-02-account-model-and-nonce/account-nonce-and-ordering.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-1-foundations/chapter-02-account-model-and-nonce/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-1-foundations/chapter-02-account-model-and-nonce/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-1-foundations/chapter-02-account-model-and-nonce/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-2-solidity/chapter-02-functions-events-and-errors/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-2-solidity/chapter-02-functions-events-and-errors/function-boundaries.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-2-solidity/chapter-02-functions-events-and-errors/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-2-solidity/chapter-02-functions-events-and-errors/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-2-solidity/chapter-02-functions-events-and-errors/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-3-foundry/chapter-02-testing-fuzz-and-fork/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-3-foundry/chapter-02-testing-fuzz-and-fork/testing-modes.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-3-foundry/chapter-02-testing-fuzz-and-fork/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-3-foundry/chapter-02-testing-fuzz-and-fork/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-3-foundry/chapter-02-testing-fuzz-and-fork/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-4-evm/chapter-02-call-context-and-opcodes/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-4-evm/chapter-02-call-context-and-opcodes/call-context.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-4-evm/chapter-02-call-context-and-opcodes/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-4-evm/chapter-02-call-context-and-opcodes/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-4-evm/chapter-02-call-context-and-opcodes/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-5-gas/chapter-02-storage-layout-and-packing/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-5-gas/chapter-02-storage-layout-and-packing/storage-layout.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-5-gas/chapter-02-storage-layout-and-packing/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-5-gas/chapter-02-storage-layout-and-packing/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-5-gas/chapter-02-storage-layout-and-packing/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] }
  ],
  chaptersE: [
    { file: "book/part-6-security/chapter-02-signatures-replay-and-delegatecall/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-6-security/chapter-02-signatures-replay-and-delegatecall/signature-boundaries.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-6-security/chapter-02-signatures-replay-and-delegatecall/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-6-security/chapter-02-signatures-replay-and-delegatecall/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-6-security/chapter-02-signatures-replay-and-delegatecall/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-7-ethereum-internals/chapter-02-mempool-reorg-and-finality/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-7-ethereum-internals/chapter-02-mempool-reorg-and-finality/mempool-finality.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-7-ethereum-internals/chapter-02-mempool-reorg-and-finality/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-7-ethereum-internals/chapter-02-mempool-reorg-and-finality/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-7-ethereum-internals/chapter-02-mempool-reorg-and-finality/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-8-defi/chapter-02-amm-design/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-8-defi/chapter-02-amm-design/pool-pricing-and-liquidity.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-8-defi/chapter-02-amm-design/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-8-defi/chapter-02-amm-design/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-8-defi/chapter-02-amm-design/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-9-protocol-reading/chapter-02-reading-openzeppelin/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-9-protocol-reading/chapter-02-reading-openzeppelin/openzeppelin-reading-map.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-9-protocol-reading/chapter-02-reading-openzeppelin/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-9-protocol-reading/chapter-02-reading-openzeppelin/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-9-protocol-reading/chapter-02-reading-openzeppelin/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-10-training/chapter-02-interview-system-and-output/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-10-training/chapter-02-interview-system-and-output/interview-output-loop.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-10-training/chapter-02-interview-system-and-output/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-10-training/chapter-02-interview-system-and-output/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-10-training/chapter-02-interview-system-and-output/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] }
  ],
  chaptersF: [
    { file: "book/part-1-foundations/chapter-03-gas-fee-and-receipt/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-1-foundations/chapter-03-gas-fee-and-receipt/fee-receipt-and-revert.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-1-foundations/chapter-03-gas-fee-and-receipt/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-1-foundations/chapter-03-gas-fee-and-receipt/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-1-foundations/chapter-03-gas-fee-and-receipt/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-2-solidity/chapter-03-openzeppelin-and-standard-tokens/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-2-solidity/chapter-03-openzeppelin-and-standard-tokens/why-standards-matter.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-2-solidity/chapter-03-openzeppelin-and-standard-tokens/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-2-solidity/chapter-03-openzeppelin-and-standard-tokens/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-2-solidity/chapter-03-openzeppelin-and-standard-tokens/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-3-foundry/chapter-03-scripts-deploy-and-verify/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-3-foundry/chapter-03-scripts-deploy-and-verify/deploy-repeatability.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-3-foundry/chapter-03-scripts-deploy-and-verify/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-3-foundry/chapter-03-scripts-deploy-and-verify/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-3-foundry/chapter-03-scripts-deploy-and-verify/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-4-evm/chapter-03-storage-slots-and-layout/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-4-evm/chapter-03-storage-slots-and-layout/how-layout-maps-to-slots.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-4-evm/chapter-03-storage-slots-and-layout/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-4-evm/chapter-03-storage-slots-and-layout/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-4-evm/chapter-03-storage-slots-and-layout/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-5-gas/chapter-03-optimization-patterns-and-tradeoffs/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-5-gas/chapter-03-optimization-patterns-and-tradeoffs/high-value-optimizations.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-5-gas/chapter-03-optimization-patterns-and-tradeoffs/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-5-gas/chapter-03-optimization-patterns-and-tradeoffs/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-5-gas/chapter-03-optimization-patterns-and-tradeoffs/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] }
  ],
  chaptersG: [
    { file: "book/part-6-security/chapter-03-oracle-flash-loan-and-mev/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-6-security/chapter-03-oracle-flash-loan-and-mev/price-dependence-risk.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-6-security/chapter-03-oracle-flash-loan-and-mev/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-6-security/chapter-03-oracle-flash-loan-and-mev/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-6-security/chapter-03-oracle-flash-loan-and-mev/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-7-ethereum-internals/chapter-03-trie-and-state-root/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-7-ethereum-internals/chapter-03-trie-and-state-root/state-root-intuition.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-7-ethereum-internals/chapter-03-trie-and-state-root/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-7-ethereum-internals/chapter-03-trie-and-state-root/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-7-ethereum-internals/chapter-03-trie-and-state-root/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-8-defi/chapter-03-lending-collateral-and-liquidation/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-8-defi/chapter-03-lending-collateral-and-liquidation/health-factor-and-liquidation.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-8-defi/chapter-03-lending-collateral-and-liquidation/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-8-defi/chapter-03-lending-collateral-and-liquidation/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-8-defi/chapter-03-lending-collateral-and-liquidation/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-9-protocol-reading/chapter-03-reading-uniswap-v2/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-9-protocol-reading/chapter-03-reading-uniswap-v2/pair-state-and-swap-flow.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-9-protocol-reading/chapter-03-reading-uniswap-v2/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-9-protocol-reading/chapter-03-reading-uniswap-v2/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-9-protocol-reading/chapter-03-reading-uniswap-v2/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-10-training/chapter-03-project-review-and-portfolio/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-10-training/chapter-03-project-review-and-portfolio/turn-work-into-assets.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-10-training/chapter-03-project-review-and-portfolio/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-10-training/chapter-03-project-review-and-portfolio/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-10-training/chapter-03-project-review-and-portfolio/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] }
  ],
  chaptersH: [
    { file: "book/part-1-foundations/chapter-04-events-logs-and-indexing/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-1-foundations/chapter-04-events-logs-and-indexing/what-events-can-and-cannot-do.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-1-foundations/chapter-04-events-logs-and-indexing/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-1-foundations/chapter-04-events-logs-and-indexing/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-1-foundations/chapter-04-events-logs-and-indexing/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-2-solidity/chapter-04-upgradeability-and-initialization/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-2-solidity/chapter-04-upgradeability-and-initialization/proxy-init-and-storage-discipline.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-2-solidity/chapter-04-upgradeability-and-initialization/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-2-solidity/chapter-04-upgradeability-and-initialization/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-2-solidity/chapter-04-upgradeability-and-initialization/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-3-foundry/chapter-04-debugging-trace-and-gas/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-3-foundry/chapter-04-debugging-trace-and-gas/trace-first-debugging.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-3-foundry/chapter-04-debugging-trace-and-gas/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-3-foundry/chapter-04-debugging-trace-and-gas/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-3-foundry/chapter-04-debugging-trace-and-gas/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-4-evm/chapter-04-low-level-calls-and-revert-data/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-4-evm/chapter-04-low-level-calls-and-revert-data/call-return-and-revert.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-4-evm/chapter-04-low-level-calls-and-revert-data/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-4-evm/chapter-04-low-level-calls-and-revert-data/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-4-evm/chapter-04-low-level-calls-and-revert-data/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-5-gas/chapter-04-batching-loops-and-complexity/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-5-gas/chapter-04-batching-loops-and-complexity/cost-growth-and-batching.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-5-gas/chapter-04-batching-loops-and-complexity/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-5-gas/chapter-04-batching-loops-and-complexity/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-5-gas/chapter-04-batching-loops-and-complexity/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] }
  ],
  chaptersI: [
    { file: "book/part-6-security/chapter-04-upgrade-proxy-and-init-risks/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-6-security/chapter-04-upgrade-proxy-and-init-risks/proxy-risk-review.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-6-security/chapter-04-upgrade-proxy-and-init-risks/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-6-security/chapter-04-upgrade-proxy-and-init-risks/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-6-security/chapter-04-upgrade-proxy-and-init-risks/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-7-ethereum-internals/chapter-04-gas-limit-base-fee-and-inclusion/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-7-ethereum-internals/chapter-04-gas-limit-base-fee-and-inclusion/inclusion-economics.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-7-ethereum-internals/chapter-04-gas-limit-base-fee-and-inclusion/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-7-ethereum-internals/chapter-04-gas-limit-base-fee-and-inclusion/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-7-ethereum-internals/chapter-04-gas-limit-base-fee-and-inclusion/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-8-defi/chapter-04-oracle-twap-and-manipulation/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-8-defi/chapter-04-oracle-twap-and-manipulation/oracle-design-and-failure-modes.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-8-defi/chapter-04-oracle-twap-and-manipulation/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-8-defi/chapter-04-oracle-twap-and-manipulation/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-8-defi/chapter-04-oracle-twap-and-manipulation/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-9-protocol-reading/chapter-04-reading-aave/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-9-protocol-reading/chapter-04-reading-aave/lending-state-and-risk-flow.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-9-protocol-reading/chapter-04-reading-aave/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-9-protocol-reading/chapter-04-reading-aave/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-9-protocol-reading/chapter-04-reading-aave/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-10-training/chapter-04-portfolio-and-notes-repository/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-10-training/chapter-04-portfolio-and-notes-repository/build-a-public-learning-asset.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-10-training/chapter-04-portfolio-and-notes-repository/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-10-training/chapter-04-portfolio-and-notes-repository/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-10-training/chapter-04-portfolio-and-notes-repository/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] }
  ],
  chaptersJ: [
    { file: "book/part-1-foundations/chapter-05-chain-async-state-management/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-1-foundations/chapter-05-chain-async-state-management/frontend-state-under-chain-latency.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-1-foundations/chapter-05-chain-async-state-management/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-1-foundations/chapter-05-chain-async-state-management/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-1-foundations/chapter-05-chain-async-state-management/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-2-solidity/chapter-05-state-machine-thinking/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-2-solidity/chapter-05-state-machine-thinking/modeling-contract-lifecycle.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-2-solidity/chapter-05-state-machine-thinking/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-2-solidity/chapter-05-state-machine-thinking/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-2-solidity/chapter-05-state-machine-thinking/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-3-foundry/chapter-05-ci-and-engineering-automation/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-3-foundry/chapter-05-ci-and-engineering-automation/reliable-contract-delivery.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-3-foundry/chapter-05-ci-and-engineering-automation/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-3-foundry/chapter-05-ci-and-engineering-automation/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-3-foundry/chapter-05-ci-and-engineering-automation/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-4-evm/chapter-05-bytecode-and-selectors/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-4-evm/chapter-05-bytecode-and-selectors/from-signature-to-runtime.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-4-evm/chapter-05-bytecode-and-selectors/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-4-evm/chapter-05-bytecode-and-selectors/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-4-evm/chapter-05-bytecode-and-selectors/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-5-gas/chapter-05-readability-maintainability-and-tradeoffs/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-5-gas/chapter-05-readability-maintainability-and-tradeoffs/when-not-to-optimize.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-5-gas/chapter-05-readability-maintainability-and-tradeoffs/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-5-gas/chapter-05-readability-maintainability-and-tradeoffs/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-5-gas/chapter-05-readability-maintainability-and-tradeoffs/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] }
  ],
  chaptersK: [
    { file: "book/part-6-security/chapter-05-security-testing-and-audit-collaboration/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-6-security/chapter-05-security-testing-and-audit-collaboration/how-to-hand-off-risk.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-6-security/chapter-05-security-testing-and-audit-collaboration/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-6-security/chapter-05-security-testing-and-audit-collaboration/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-6-security/chapter-05-security-testing-and-audit-collaboration/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-7-ethereum-internals/chapter-05-consensus-validators-and-finality/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-7-ethereum-internals/chapter-05-consensus-validators-and-finality/why-finality-is-probabilistic-and-economic.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-7-ethereum-internals/chapter-05-consensus-validators-and-finality/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-7-ethereum-internals/chapter-05-consensus-validators-and-finality/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-7-ethereum-internals/chapter-05-consensus-validators-and-finality/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-8-defi/chapter-05-mev-arbitrage-and-protocol-constraints/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-8-defi/chapter-05-mev-arbitrage-and-protocol-constraints/when-protocols-compete-in-public.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-8-defi/chapter-05-mev-arbitrage-and-protocol-constraints/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-8-defi/chapter-05-mev-arbitrage-and-protocol-constraints/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-8-defi/chapter-05-mev-arbitrage-and-protocol-constraints/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-9-protocol-reading/chapter-05-reading-eigenlayer/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-9-protocol-reading/chapter-05-reading-eigenlayer/reading-restaking-systems.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-9-protocol-reading/chapter-05-reading-eigenlayer/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-9-protocol-reading/chapter-05-reading-eigenlayer/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-9-protocol-reading/chapter-05-reading-eigenlayer/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-10-training/chapter-05-long-term-learning-system/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-10-training/chapter-05-long-term-learning-system/how-to-keep-compounding.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-10-training/chapter-05-long-term-learning-system/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-10-training/chapter-05-long-term-learning-system/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-10-training/chapter-05-long-term-learning-system/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] }
  ],
  chaptersL: [
    { file: "book/part-1-foundations/chapter-06-rpc-consistency-and-multi-source-reads/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-1-foundations/chapter-06-rpc-consistency-and-multi-source-reads/why-data-sources-disagree.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-1-foundations/chapter-06-rpc-consistency-and-multi-source-reads/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-1-foundations/chapter-06-rpc-consistency-and-multi-source-reads/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-1-foundations/chapter-06-rpc-consistency-and-multi-source-reads/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-2-solidity/chapter-06-modularity-inheritance-and-composition/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-2-solidity/chapter-06-modularity-inheritance-and-composition/how-to-split-contract-responsibilities.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-2-solidity/chapter-06-modularity-inheritance-and-composition/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-2-solidity/chapter-06-modularity-inheritance-and-composition/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-2-solidity/chapter-06-modularity-inheritance-and-composition/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-3-foundry/chapter-06-release-management-and-multi-network-delivery/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-3-foundry/chapter-06-release-management-and-multi-network-delivery/shipping-contracts-with-fewer-surprises.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-3-foundry/chapter-06-release-management-and-multi-network-delivery/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-3-foundry/chapter-06-release-management-and-multi-network-delivery/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-3-foundry/chapter-06-release-management-and-multi-network-delivery/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-4-evm/chapter-06-contract-creation-and-deployment-path/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-4-evm/chapter-06-contract-creation-and-deployment-path/create-opcode-and-init-code.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-4-evm/chapter-06-contract-creation-and-deployment-path/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-4-evm/chapter-06-contract-creation-and-deployment-path/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-4-evm/chapter-06-contract-creation-and-deployment-path/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-5-gas/chapter-06-measuring-profiling-and-benchmarking/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-5-gas/chapter-06-measuring-profiling-and-benchmarking/profile-before-you-optimize.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-5-gas/chapter-06-measuring-profiling-and-benchmarking/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-5-gas/chapter-06-measuring-profiling-and-benchmarking/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-5-gas/chapter-06-measuring-profiling-and-benchmarking/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] }
  ],
  chaptersM: [
    { file: "book/part-6-security/chapter-06-monitoring-response-and-operational-security/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-6-security/chapter-06-monitoring-response-and-operational-security/when-security-becomes-an-operations-problem.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-6-security/chapter-06-monitoring-response-and-operational-security/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-6-security/chapter-06-monitoring-response-and-operational-security/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-6-security/chapter-06-monitoring-response-and-operational-security/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-7-ethereum-internals/chapter-06-clients-sync-and-data-availability/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-7-ethereum-internals/chapter-06-clients-sync-and-data-availability/what-your-node-is-actually-doing.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-7-ethereum-internals/chapter-06-clients-sync-and-data-availability/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-7-ethereum-internals/chapter-06-clients-sync-and-data-availability/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-7-ethereum-internals/chapter-06-clients-sync-and-data-availability/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-8-defi/chapter-06-stablecoins-peg-and-systemic-risk/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-8-defi/chapter-06-stablecoins-peg-and-systemic-risk/how-stable-systems-break.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-8-defi/chapter-06-stablecoins-peg-and-systemic-risk/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-8-defi/chapter-06-stablecoins-peg-and-systemic-risk/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-8-defi/chapter-06-stablecoins-peg-and-systemic-risk/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-9-protocol-reading/chapter-06-reading-uniswap-v3/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-9-protocol-reading/chapter-06-reading-uniswap-v3/concentrated-liquidity-reading-map.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-9-protocol-reading/chapter-06-reading-uniswap-v3/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-9-protocol-reading/chapter-06-reading-uniswap-v3/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-9-protocol-reading/chapter-06-reading-uniswap-v3/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-10-training/chapter-06-collaboration-resume-and-job-search/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-10-training/chapter-06-collaboration-resume-and-job-search/turn-learning-into-team-signal.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-10-training/chapter-06-collaboration-resume-and-job-search/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-10-training/chapter-06-collaboration-resume-and-job-search/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-10-training/chapter-06-collaboration-resume-and-job-search/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] }
  ],
  chaptersN: [
    { file: "book/part-1-foundations/chapter-07-wallet-providers-chain-switching-and-permissions/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-1-foundations/chapter-07-wallet-providers-chain-switching-and-permissions/wallet-provider-boundaries.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-1-foundations/chapter-07-wallet-providers-chain-switching-and-permissions/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-1-foundations/chapter-07-wallet-providers-chain-switching-and-permissions/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-1-foundations/chapter-07-wallet-providers-chain-switching-and-permissions/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-2-solidity/chapter-07-ether-flow-receive-and-fallback/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-2-solidity/chapter-07-ether-flow-receive-and-fallback/how-eth-enters-and-leaves-contracts.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-2-solidity/chapter-07-ether-flow-receive-and-fallback/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-2-solidity/chapter-07-ether-flow-receive-and-fallback/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-2-solidity/chapter-07-ether-flow-receive-and-fallback/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-3-foundry/chapter-07-dependencies-and-reproducible-environments/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-3-foundry/chapter-07-dependencies-and-reproducible-environments/keeping-foundry-projects-reproducible.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-3-foundry/chapter-07-dependencies-and-reproducible-environments/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-3-foundry/chapter-07-dependencies-and-reproducible-environments/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-3-foundry/chapter-07-dependencies-and-reproducible-environments/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-4-evm/chapter-07-precompiles-and-crypto-primitives/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-4-evm/chapter-07-precompiles-and-crypto-primitives/special-contracts-inside-the-evm.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-4-evm/chapter-07-precompiles-and-crypto-primitives/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-4-evm/chapter-07-precompiles-and-crypto-primitives/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-4-evm/chapter-07-precompiles-and-crypto-primitives/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-5-gas/chapter-07-l1-l2-fee-models-and-calldata/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-5-gas/chapter-07-l1-l2-fee-models-and-calldata/why-rollups-charge-differently.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-5-gas/chapter-07-l1-l2-fee-models-and-calldata/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-5-gas/chapter-07-l1-l2-fee-models-and-calldata/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-5-gas/chapter-07-l1-l2-fee-models-and-calldata/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] }
  ],
  chaptersO: [
    { file: "book/part-6-security/chapter-07-invariants-threat-modeling-and-formal-reasoning/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-6-security/chapter-07-invariants-threat-modeling-and-formal-reasoning/proving-more-than-tests-can-see.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-6-security/chapter-07-invariants-threat-modeling-and-formal-reasoning/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-6-security/chapter-07-invariants-threat-modeling-and-formal-reasoning/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-6-security/chapter-07-invariants-threat-modeling-and-formal-reasoning/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-7-ethereum-internals/chapter-07-rollups-bridges-and-settlement/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-7-ethereum-internals/chapter-07-rollups-bridges-and-settlement/how-layer2-reuses-ethereum-security.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-7-ethereum-internals/chapter-07-rollups-bridges-and-settlement/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-7-ethereum-internals/chapter-07-rollups-bridges-and-settlement/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-7-ethereum-internals/chapter-07-rollups-bridges-and-settlement/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-8-defi/chapter-07-vaults-strategies-and-yield/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-8-defi/chapter-07-vaults-strategies-and-yield/when-yield-becomes-a-product-layer.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-8-defi/chapter-07-vaults-strategies-and-yield/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-8-defi/chapter-07-vaults-strategies-and-yield/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-8-defi/chapter-07-vaults-strategies-and-yield/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-9-protocol-reading/chapter-07-reading-makerdao/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-9-protocol-reading/chapter-07-reading-makerdao/reading-a-monetary-protocol.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-9-protocol-reading/chapter-07-reading-makerdao/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-9-protocol-reading/chapter-07-reading-makerdao/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-9-protocol-reading/chapter-07-reading-makerdao/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] },
    { file: "book/part-10-training/chapter-07-open-source-and-public-credibility/index.md", patterns: ["## 本章要解决什么", "## 读完后你应该会什么", "## 本章目录", "## 练习与实践入口"] },
    { file: "book/part-10-training/chapter-07-open-source-and-public-credibility/turning-contributions-into-compound-trust.md", patterns: ["## 先理解什么", "## 为什么重要", "## 核心机制", "## 工程判断"] },
    { file: "book/part-10-training/chapter-07-open-source-and-public-credibility/exercises.md", patterns: ["## 概念题", "## 分析题", "## 代码题"] },
    { file: "book/part-10-training/chapter-07-open-source-and-public-credibility/practice.md", patterns: ["## 实践目标", "## 操作步骤", "## 交付物"] },
    { file: "book/part-10-training/chapter-07-open-source-and-public-credibility/reading.md", patterns: ["## 必读", "## 进阶", "## 实战"] }
  ],
  legacy: [
    { file: "book/mental-model/index.md", patterns: ["# 认知重建（旧路径）", "新入口", "练习题", "项目实践", "延伸阅读"] },
    { file: "book/solidity-state/index.md", patterns: ["# Solidity 与状态（旧路径）", "新入口", "练习题", "项目实践", "延伸阅读"] },
    { file: "book/evm-gas/index.md", patterns: ["# EVM 与 Gas（旧路径）", "新入口", "练习题", "项目实践", "延伸阅读"] },
    { file: "book/security/index.md", patterns: ["# 安全（旧路径）", "新入口", "练习题", "项目实践", "延伸阅读"] },
    { file: "book/engineering-testing/index.md", patterns: ["# 工程化与测试（旧路径）", "新入口", "练习题", "项目实践", "延伸阅读"] },
    { file: "book/protocol-reading/index.md", patterns: ["# 协议源码阅读（旧路径）", "新入口", "练习题", "项目实践", "延伸阅读"] },
    { file: "book/project-roadmap/index.md", patterns: ["# 项目路线（旧路径）", "新入口", "练习题", "项目实践", "延伸阅读"] }
  ],
  appendix: [
    { file: "book/appendix/resources.md", patterns: ["## 官方文档", "## 主线资料", "## 源码入口"] },
    { file: "book/appendix/faq.md", patterns: ["## 常见问题"] },
    { file: "book/appendix/glossary.md", patterns: ["## 术语表"] }
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
const placeholderPattern = new RegExp("\\b(?:TO" + "DO|TB" + "D)\\b");

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
