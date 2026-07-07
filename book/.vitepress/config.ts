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
        items: [
          { text: "卷七导读", link: "/part-7-ethereum-internals/" },
          { text: "第 1 章 交易、区块与状态", link: "/part-7-ethereum-internals/chapter-01-transaction-block-state/" }
        ]
      },
      {
        text: "卷八：DeFi",
        items: [
          { text: "卷八导读", link: "/part-8-defi/" },
          { text: "第 1 章 DeFi 基础积木", link: "/part-8-defi/chapter-01-defi-primitives/" }
        ]
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
