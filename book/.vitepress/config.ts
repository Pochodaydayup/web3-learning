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
          { text: "第 1 章 交易心智模型", link: "/part-1-foundations/chapter-01-transaction-mental-model/" },
          { text: "第 2 章 账户模型与 Nonce", link: "/part-1-foundations/chapter-02-account-model-and-nonce/" },
          { text: "第 3 章 Gas Fee、Receipt 与 Revert", link: "/part-1-foundations/chapter-03-gas-fee-and-receipt/" }
        ]
      },
      {
        text: "卷二：Solidity",
        items: [
          { text: "卷二导读", link: "/part-2-solidity/" },
          { text: "第 1 章 Solidity 与状态基础", link: "/part-2-solidity/chapter-01-solidity-state-foundations/" },
          { text: "第 2 章 Function、Event、Error 与边界设计", link: "/part-2-solidity/chapter-02-functions-events-and-errors/" },
          { text: "第 3 章 OpenZeppelin 与标准代币", link: "/part-2-solidity/chapter-03-openzeppelin-and-standard-tokens/" }
        ]
      },
      {
        text: "卷三：Foundry",
        items: [
          { text: "卷三导读", link: "/part-3-foundry/" },
          { text: "第 1 章 Foundry 工程工作流", link: "/part-3-foundry/chapter-01-foundry-engineering-workflow/" },
          { text: "第 2 章 Forge Test、Fuzz 与 Fork", link: "/part-3-foundry/chapter-02-testing-fuzz-and-fork/" },
          { text: "第 3 章 Script、部署与验证", link: "/part-3-foundry/chapter-03-scripts-deploy-and-verify/" }
        ]
      },
      {
        text: "卷四：EVM",
        items: [
          { text: "卷四导读", link: "/part-4-evm/" },
          { text: "第 1 章 EVM 执行模型", link: "/part-4-evm/chapter-01-evm-execution-model/" },
          { text: "第 2 章 Opcode 与调用上下文", link: "/part-4-evm/chapter-02-call-context-and-opcodes/" },
          { text: "第 3 章 存储布局与 Slot", link: "/part-4-evm/chapter-03-storage-slots-and-layout/" }
        ]
      },
      {
        text: "卷五：Gas",
        items: [
          { text: "卷五导读", link: "/part-5-gas/" },
          { text: "第 1 章 Gas 成本心智模型", link: "/part-5-gas/chapter-01-gas-cost-mental-model/" },
          { text: "第 2 章 Storage 布局与 Packing", link: "/part-5-gas/chapter-02-storage-layout-and-packing/" },
          { text: "第 3 章 常见优化手法与收益判断", link: "/part-5-gas/chapter-03-optimization-patterns-and-tradeoffs/" }
        ]
      },
      {
        text: "卷六：安全",
        items: [
          { text: "卷六导读", link: "/part-6-security/" },
          { text: "第 1 章 安全审查基础", link: "/part-6-security/chapter-01-security-review-basics/" },
          { text: "第 2 章 签名、重放与 Delegatecall", link: "/part-6-security/chapter-02-signatures-replay-and-delegatecall/" },
          { text: "第 3 章 Oracle、Flash Loan 与 MEV 风险", link: "/part-6-security/chapter-03-oracle-flash-loan-and-mev/" }
        ]
      },
      {
        text: "卷七：Ethereum 底层",
        items: [
          { text: "卷七导读", link: "/part-7-ethereum-internals/" },
          { text: "第 1 章 交易、区块与状态", link: "/part-7-ethereum-internals/chapter-01-transaction-block-state/" },
          { text: "第 2 章 Mempool、重组与最终性", link: "/part-7-ethereum-internals/chapter-02-mempool-reorg-and-finality/" },
          { text: "第 3 章 Trie 与 State Root", link: "/part-7-ethereum-internals/chapter-03-trie-and-state-root/" }
        ]
      },
      {
        text: "卷八：DeFi",
        items: [
          { text: "卷八导读", link: "/part-8-defi/" },
          { text: "第 1 章 DeFi 基础积木", link: "/part-8-defi/chapter-01-defi-primitives/" },
          { text: "第 2 章 AMM 与流动性池设计", link: "/part-8-defi/chapter-02-amm-design/" },
          { text: "第 3 章 借贷、抵押与清算", link: "/part-8-defi/chapter-03-lending-collateral-and-liquidation/" }
        ]
      },
      {
        text: "卷九：协议源码阅读",
        items: [
          { text: "卷九导读", link: "/part-9-protocol-reading/" },
          { text: "第 1 章 如何读真实协议", link: "/part-9-protocol-reading/chapter-01-reading-real-protocols/" },
          { text: "第 2 章 OpenZeppelin 阅读法", link: "/part-9-protocol-reading/chapter-02-reading-openzeppelin/" },
          { text: "第 3 章 阅读 Uniswap V2", link: "/part-9-protocol-reading/chapter-03-reading-uniswap-v2/" }
        ]
      },
      {
        text: "卷十：训练与实战",
        items: [
          { text: "卷十导读", link: "/part-10-training/" },
          { text: "第 1 章 项目路线与 100 天计划", link: "/part-10-training/chapter-01-roadmap-and-100-days/" },
          { text: "第 2 章 面试题系统与输出节奏", link: "/part-10-training/chapter-02-interview-system-and-output/" },
          { text: "第 3 章 项目复盘与作品资产化", link: "/part-10-training/chapter-03-project-review-and-portfolio/" }
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
