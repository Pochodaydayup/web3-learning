import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "Web3 前端转全栈指南",
  description: "给已经做过 dApp 的前端开发者的 Solidity、EVM、安全、测试与协议源码学习书",
  base: "/web3-learning/",
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: "前言", link: "/preface" },
      { text: "学习地图", link: "/learning-map" },
      { text: "认知重建", link: "/mental-model/" },
      { text: "项目路线", link: "/project-roadmap/" }
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
          { text: "学习地图", link: "/learning-map" }
        ]
      },
      {
        text: "主干路径",
        items: [
          { text: "Part 1: 认知重建", link: "/mental-model/" },
          { text: "Part 2: Solidity 与状态", link: "/solidity-state/" },
          { text: "Part 3: EVM 与 Gas", link: "/evm-gas/" },
          { text: "Part 4: 安全", link: "/security/" },
          { text: "Part 5: 工程化与测试", link: "/engineering-testing/" },
          { text: "Part 6: 协议源码阅读", link: "/protocol-reading/" },
          { text: "Part 7: 项目实战路线", link: "/project-roadmap/" }
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
