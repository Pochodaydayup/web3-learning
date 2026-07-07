# Web3 Frontend To Fullstack Guide Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a VitePress-based Chinese handbook for experienced dApp frontend engineers, with substantial v1 content, chapter-level deep-dive resources, and GitHub Pages deployment.

**Architecture:** Keep the repository content-first. Use `book/` as the VitePress content root so the published site stays isolated from internal planning files under `docs/superpowers/`. Use a small validation script to enforce that each major chapter contains the required structure, and publish the static build through GitHub Actions.

**Tech Stack:** Node.js, VitePress, Markdown, GitHub Actions, GitHub Pages

---

## File Structure

- Create: `package.json`
- Create: `package-lock.json`
- Create: `.gitignore`
- Create: `scripts/validate-book.mjs`
- Create: `book/.vitepress/config.ts`
- Create: `book/.vitepress/theme/index.ts`
- Create: `book/.vitepress/theme/custom.css`
- Create: `book/index.md`
- Create: `book/preface.md`
- Create: `book/learning-map.md`
- Create: `book/mental-model/index.md`
- Create: `book/solidity-state/index.md`
- Create: `book/evm-gas/index.md`
- Create: `book/security/index.md`
- Create: `book/engineering-testing/index.md`
- Create: `book/protocol-reading/index.md`
- Create: `book/project-roadmap/index.md`
- Create: `book/appendix/resources.md`
- Create: `book/appendix/faq.md`
- Create: `book/appendix/glossary.md`
- Create: `.github/workflows/deploy.yml`
- Create: `README.md`

Assumption locked into this plan: the GitHub repository name will be `web3-learning`, so the VitePress `base` should be `/web3-learning/`.

### Task 1: Initialize The Repository And Validation Harness

**Files:**
- Create: `package.json`
- Create: `.gitignore`
- Create: `scripts/validate-book.mjs`
- Create: `package-lock.json`

- [ ] **Step 1: Initialize git before any commits**

Run: `git init -b main`
Expected: output includes `Initialized empty Git repository`

- [ ] **Step 2: Write the package manifest first**

Create `package.json`:

```json
{
  "name": "web3-learning",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "docs:dev": "vitepress dev book",
    "docs:build": "vitepress build book",
    "docs:preview": "vitepress preview book",
    "docs:check": "node scripts/validate-book.mjs"
  },
  "devDependencies": {
    "vitepress": "^1.0.0"
  }
}
```

- [ ] **Step 3: Add a minimal ignore file**

Create `.gitignore`:

```gitignore
node_modules
book/.vitepress/dist
.DS_Store
```

- [ ] **Step 4: Write the failing validation script**

Create `scripts/validate-book.mjs`:

```js
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const scopes = {
  shell: [
    {
      file: "book/index.md",
      headings: ["## 这本书适合谁", "## 你会得到什么", "## 主干学习路径"]
    }
  ],
  foundation: [
    {
      file: "book/preface.md",
      headings: ["## 适合谁读", "## 不适合谁", "## 这本书怎么读", "## 继续深入看什么"]
    },
    {
      file: "book/learning-map.md",
      headings: ["## 先学什么", "## 不要一开始就钻进去的内容", "## 三个月主干路线", "## 继续深入看什么"]
    },
    {
      file: "book/mental-model/index.md",
      headings: ["## 先理解什么", "## 为什么重要", "## 常见误区", "## 怎么练", "## 继续深入看什么"]
    }
  ],
  core1: [
    {
      file: "book/solidity-state/index.md",
      headings: ["## 先理解什么", "## 为什么重要", "## 常见误区", "## 怎么练", "## 继续深入看什么"]
    },
    {
      file: "book/evm-gas/index.md",
      headings: ["## 先理解什么", "## 为什么重要", "## 常见误区", "## 怎么练", "## 继续深入看什么"]
    }
  ],
  core2: [
    {
      file: "book/security/index.md",
      headings: ["## 先理解什么", "## 为什么重要", "## 常见误区", "## 怎么练", "## 继续深入看什么"]
    },
    {
      file: "book/engineering-testing/index.md",
      headings: ["## 先理解什么", "## 为什么重要", "## 常见误区", "## 怎么练", "## 继续深入看什么"]
    }
  ],
  advanced: [
    {
      file: "book/protocol-reading/index.md",
      headings: ["## 先理解什么", "## 为什么重要", "## 常见误区", "## 怎么练", "## 继续深入看什么"]
    },
    {
      file: "book/project-roadmap/index.md",
      headings: ["## 先理解什么", "## 为什么重要", "## 常见误区", "## 怎么练", "## 继续深入看什么"]
    }
  ],
  appendix: [
    {
      file: "book/appendix/resources.md",
      headings: ["## 官方文档", "## 安全与工程", "## 源码阅读"]
    },
    {
      file: "book/appendix/faq.md",
      headings: ["## 常见问题"]
    },
    {
      file: "book/appendix/glossary.md",
      headings: ["## 术语表"]
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

  for (const heading of check.headings) {
    if (!content.includes(heading)) {
      errors.push(`Missing heading "${heading}" in ${check.file}`);
    }
  }

  if (content.includes("TODO") || content.includes("TBD")) {
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

- [ ] **Step 5: Run the validator to confirm the red state**

Run: `npm run docs:check -- shell`
Expected: FAIL with `Missing file: book/index.md`

- [ ] **Step 6: Install dependencies**

Run: `npm install`
Expected: `package-lock.json` is created and install completes without errors

- [ ] **Step 7: Re-run the failing validator after install**

Run: `npm run docs:check -- shell`
Expected: FAIL with `Missing file: book/index.md`

- [ ] **Step 8: Commit the initialized baseline**

Run: `git add package.json package-lock.json .gitignore scripts/validate-book.mjs`

Run: `git commit -m "chore: initialize docs site tooling"`
Expected: commit succeeds on `main`

### Task 2: Scaffold The VitePress Shell And Homepage

**Files:**
- Create: `book/.vitepress/config.ts`
- Create: `book/.vitepress/theme/index.ts`
- Create: `book/.vitepress/theme/custom.css`
- Create: `book/index.md`

- [ ] **Step 1: Verify the docs build fails before the shell exists**

Run: `npm run docs:build`
Expected: FAIL because the `book/` site content is not ready

- [ ] **Step 2: Add the site configuration**

Create `book/.vitepress/config.ts`:

```ts
import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "Web3 前端转全栈指南",
  description: "给已经做过 dApp 的前端开发者的 Solidity、EVM、安全与协议源码学习书",
  base: "/web3-learning/",
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: "前言", link: "/preface" },
      { text: "学习地图", link: "/learning-map" },
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
```

- [ ] **Step 3: Add the theme entry**

Create `book/.vitepress/theme/index.ts`:

```ts
import DefaultTheme from "vitepress/theme";
import "./custom.css";

export default DefaultTheme;
```

- [ ] **Step 4: Add lightweight book styling**

Create `book/.vitepress/theme/custom.css`:

```css
:root {
  --vp-c-brand-1: #0f766e;
  --vp-c-brand-2: #115e59;
  --vp-c-brand-3: #134e4a;
  --vp-home-hero-name-color: #0f172a;
  --vp-home-hero-image-background-image: radial-gradient(circle at top, rgba(15, 118, 110, 0.18), transparent 60%);
  --vp-home-hero-image-filter: blur(72px);
}

.VPDoc.has-aside .content-container,
.VPDoc .content-container {
  max-width: 820px;
}

.vp-doc h2 {
  margin-top: 2rem;
}

.vp-doc a {
  text-decoration: none;
}
```

- [ ] **Step 5: Create a substantial homepage**

Create `book/index.md`:

```md
---
layout: home

hero:
  name: "Web3 前端转全栈指南"
  text: "给已经做过 dApp 的前端开发者"
  tagline: "从会调用合约，到真正理解 Solidity、EVM、安全、测试与协议源码。"
  actions:
    - theme: brand
      text: 开始阅读
      link: /preface
    - theme: alt
      text: 查看学习地图
      link: /learning-map

features:
  - title: 面向有经验的前端
    details: 默认你已经理解钱包连接、ABI、RPC、ethers 或 viem，不重复做入门级铺垫。
  - title: 讲主干，不讲资料海
    details: 每章都先帮你抓主干路径，再补上官方文档、源码和练习入口。
  - title: 目标是能独立设计合约
    details: 重点不只是会调合约，而是理解状态、Gas、安全边界与协议设计。
---

## 这本书适合谁

这本书适合已经做过 dApp 前端的工程师。你也许已经把钱包连接、签名、交易发送、合约读写、事件监听都接过了，但在真正往下追问时会卡住：为什么 `mapping` 不可遍历，为什么 `SSTORE` 这么贵，为什么有些合约非要写成代理模式，为什么别人一眼就能看出重入风险，而你只能靠“感觉不太对”。

如果你也遇到过这种断层，这本书就是为你写的。

## 你会得到什么

读完第一版，你应该能建立起一条更完整的因果链：

- 前端一次合约调用，到底是怎样变成链上状态变化的。
- Solidity 中常见设计为什么会那样写，而不是只会照着模板抄。
- Gas 到底花在哪，哪些优化值得做，哪些只是噪音。
- 常见合约安全问题的攻击面在哪，为什么测试不只是“跑通 happy path”。
- 阅读 OpenZeppelin、Uniswap V2、Aave 这类源码时，应该抓哪些关键点。

## 主干学习路径

这本书的主干路径不是从密码学开始，而是从你每天更容易碰到、也最应该先吃透的部分开始：

1. 先重建对交易、状态与执行链路的理解。
2. 再把 Solidity 与状态模型吃透。
3. 再往下钻到 EVM、Gas 和存储布局。
4. 接着补安全与工程化。
5. 最后进入真实协议源码和项目实战路线。

每一章最后都会告诉你三类延伸资料：

- 必读：优先看的官方文档或标准。
- 进阶：适合继续深挖的源码、文章或课程。
- 实战：适合立刻动手练习的项目或题目。
```

- [ ] **Step 6: Run the shell validator and confirm it turns green**

Run: `npm run docs:check -- shell`
Expected: PASS with `Book validation passed for scopes: shell`

- [ ] **Step 7: Run the docs build and confirm VitePress now compiles**

Run: `npm run docs:build`
Expected: PASS and output includes `building client + server bundles`

- [ ] **Step 8: Commit the shell**

Run: `git add book/.vitepress book/index.md`

Run: `git commit -m "feat: scaffold vitepress shell"`

### Task 3: Write The Reading Foundation Chapters

**Files:**
- Create: `book/preface.md`
- Create: `book/learning-map.md`
- Create: `book/mental-model/index.md`

- [ ] **Step 1: Verify the foundation chapter scope fails first**

Run: `npm run docs:check -- foundation`
Expected: FAIL with missing files under `book/preface.md`, `book/learning-map.md`, and `book/mental-model/index.md`

- [ ] **Step 2: Write the preface**

Create `book/preface.md`:

```md
# 前言

## 适合谁读

这本书默认你已经做过 dApp 前端，知道钱包怎么接、交易怎么发、合约怎么调、事件怎么读，也知道 `ethers`、`viem`、RPC 和 ABI 这些词分别指什么。你来这里，不是为了再学一遍“如何连接 MetaMask”，而是为了补上那条总觉得没真正打通的底层主线。

## 不适合谁

如果你还没有接触过任何 Web3 前端项目，这本书不会是最省力的第一本。它会默认你已经踩过一点坑，也能看懂常见的合约调用代码。对完全零基础读者来说，更适合先做一轮入门级 dApp 项目，再回来读这本书。

## 这本书怎么读

最推荐的读法是按顺序读主干章节，再把每章最后的延伸资料接上。不要急着从黄皮书、共识算法、密码学证明开始，因为那样很容易让学习路径一开始就失焦。先把你每天最容易碰到、也最应该先吃透的 Solidity、状态、EVM、Gas、安全和源码阅读真正弄懂，后面再往下钻会顺得多。

## 这本书的假设

这本书假设你已经懂：

- 基本前端开发与调试流程
- 钱包连接与签名
- 合约读写、ABI、RPC
- Web3 项目里的常见 UI/交互流程

这本书会重点补：

- 为什么状态会这样变化
- 为什么合约会这样设计
- 为什么 Gas 会这样消耗
- 为什么安全问题会这样发生

## 继续深入看什么

### 必读

- [Ethereum Developer Docs](https://ethereum.org/developers/docs/)
- [Solidity 官方文档](https://docs.soliditylang.org/en/latest/)

### 进阶

- [Mastering Ethereum](https://github.com/ethereumbook/ethereumbook)
- [EIPs](https://eips.ethereum.org/)

### 实战

- 选一个你熟悉的 dApp，把一次最常见的用户操作完整画成“前端动作 -> 交易 -> 合约执行 -> 状态变化”流程图。
```

- [ ] **Step 3: Write the learning map**

Create `book/learning-map.md`:

```md
# 学习地图

## 先学什么

对已经做过 dApp 的前端来说，收益最高的学习顺序通常是：

1. Solidity 与状态模型
2. 交易执行链路
3. EVM 与 Gas
4. 安全
5. 工程化与测试
6. 协议源码阅读
7. 项目实战

这个顺序的核心，不是“从浅到深”这么简单，而是先把和工程决策最相关的部分学透。只有这样，你后面读源码、做优化、做安全审查时，脑子里才有稳定的参照系。

## 不要一开始就钻进去的内容

很多开发者一焦虑，就会去看最底层、最硬核、也最难马上转化为工程能力的内容，比如黄皮书、共识算法细节、零知识证明、桥的跨链消息验证、密码学原理推导。这些都重要，但不应该挡在你构建主干能力的第一阶段。

你需要先建立的是“从一次前端调用到一次链上状态变化”的完整解释能力，而不是先把所有理论最深处都看完。

## 三个月主干路线

### 第一个月

- 吃透 Solidity 常用语法
- 重点理解 `storage`、`memory`、`calldata`
- 自己写出 ERC20、简单 Bank、Voting
- 学会用 Foundry 写基础测试

### 第二个月

- 进入 EVM、Gas、存储布局
- 学重入、权限、签名、代理、预言机等安全问题
- 把 fuzz、fork test、调试流程接进日常开发

### 第三个月

- 开始读 OpenZeppelin、Uniswap V2、Aave 的关键源码
- 设计并实现自己的 MultiSig、Staking 或小型 DEX
- 把“会写”提升到“知道为什么这样写”

## 怎么判断自己真的学会了

你至少应该能做到：

- 解释一笔交易从签名到 receipt 的流程
- 解释常见合约中的状态读写成本差异
- 看懂 ERC20 与权限控制的核心实现
- 发现几个基础级安全问题
- 不靠抄模板独立写出一个中小型合约项目

## 继续深入看什么

### 必读

- [Foundry Book](https://book.getfoundry.sh/)
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts)

### 进阶

- [evm.codes](https://www.evm.codes/)
- [Ethereum Yellow Paper](https://ethereum.github.io/yellowpaper/paper.pdf)

### 实战

- 给自己定一个 30 天计划：每周一类主题，每周至少一个合约练习和一份测试。
```

- [ ] **Step 4: Write the mental-model chapter**

Create `book/mental-model/index.md`:

```md
# Part 1: 认知重建

## 先理解什么

你需要先理解，一次“前端调用合约”在链上世界里并不是一次普通 API 请求。它更像是一组被编码、签名、广播、排序、执行、结算的状态变更请求。中间经过 ABI 编码、RPC 传输、节点接收、mempool 排队、打包进块、EVM 执行，再生成 logs、receipt 和新的 state root。

很多前端开发者的问题，不是不会调合约，而是把这条链路理解成了“发个请求到链上”。一旦这样简化，后面所有 Gas、失败原因、pending 状态、nonce 冲突、事件顺序、安全边界都会显得像黑盒。

## 为什么重要

如果你不能把这条执行链路讲完整，你就很难定位问题究竟出在哪一层：

- 是前端参数编码错了？
- 是钱包签名前用户改了链或账户？
- 是 RPC 节点返回不稳定？
- 是交易进了 mempool 但迟迟没被打包？
- 是合约内部 `require` 或自定义 `error` 触发了回滚？

理解链路，本质上是在给你的工程判断加坐标轴。

## 常见误区

- 误以为 `view` 调用和真实交易只是“少了签名”。
- 误以为交易发出去就等于“成功了”。
- 误以为 receipt、log、state change 是同一层概念。
- 误以为前端看到的失败一定是合约代码本身的问题。

## 怎么练

挑一个你熟悉的功能，比如“领取奖励”或“质押”，把它拆成以下步骤写下来：

1. 用户在前端点了什么。
2. 前端编码了什么 calldata。
3. 钱包签了什么。
4. 交易进入哪条链的 mempool。
5. 验证者打包后 EVM 如何执行。
6. 成功后有哪些状态变化、哪些事件、哪些前端 UI 更新。

最好把这条流程画成一张图。只要你能稳定复述三次，这一章就真的开始进脑子了。

## 继续深入看什么

### 必读

- [Ethereum Transactions](https://ethereum.org/developers/docs/transactions/)
- [JSON-RPC API 概览](https://ethereum.org/developers/docs/apis/json-rpc/)

### 进阶

- [Execution Layer 概览](https://ethereum.org/developers/docs/evm/)
- [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559)

### 实战

- 在测试网手动发一笔交易，记录 nonce、gas、receipt、logs，并用区块浏览器把全过程串起来。
```

- [ ] **Step 5: Run the foundation validator and confirm it passes**

Run: `npm run docs:check -- foundation`
Expected: PASS with `Book validation passed for scopes: foundation`

- [ ] **Step 6: Commit the foundation chapters**

Run: `git add book/preface.md book/learning-map.md book/mental-model/index.md`

Run: `git commit -m "feat: add reading foundation chapters"`

### Task 4: Write The Solidity And EVM Core Chapters

**Files:**
- Create: `book/solidity-state/index.md`
- Create: `book/evm-gas/index.md`

- [ ] **Step 1: Verify the first core scope fails**

Run: `npm run docs:check -- core1`
Expected: FAIL with missing files under `book/solidity-state/index.md` and `book/evm-gas/index.md`

- [ ] **Step 2: Write the Solidity and state chapter**

Create `book/solidity-state/index.md`:

```md
# Part 2: Solidity 与状态

## 先理解什么

真正重要的 Solidity，不是把语法关键字背熟，而是理解这些语法最终如何落到状态、存储和访问控制上。你必须把下面这些概念连起来看：

- `storage`、`memory`、`calldata`
- `mapping`、`struct`、`array`
- `event`、`error`
- `modifier`、`inheritance`、`interface`

前端开发者最容易忽略的是：Solidity 代码看起来像普通高级语言，但每一个状态变量、每一次写入、每一个可见性选择，背后都对应真实的链上成本和权限边界。

## 为什么重要

理解状态模型以后，你会突然明白很多以前只是死记的结论：

- 为什么 `uint256 public totalSupply;` 的写入要花钱。
- 为什么 `view` 方法链上仍然是在执行，只是本地模拟调用时不需要付费。
- 为什么 `mapping(address => uint256)` 没法直接遍历所有 key。
- 为什么 event 适合做链下检索，却不适合当成链上真相来源。

这部分一旦打通，你写合约时就不会只是在拼语法，而是在做状态设计。

## 常见误区

- 把 `public` 当作“和前端对象暴露属性一样”的概念。
- 把 event 当数据库。
- 把 `memory` 和 `storage` 的差异理解成“只是语法要求”。
- 看到 OpenZeppelin 的继承层次就直接照抄，却不知道每层到底解决什么问题。

## 怎么练

按这个顺序写最小合约：

1. `Todo`：练 struct、array、状态更新。
2. `Bank`：练 payable、余额记录、提取逻辑。
3. `Voting`：练 mapping、权限和事件。
4. `ERC20`：练 total supply、allowance、transfer 流程。

练的时候强制回答四个问题：

- 状态存在哪？
- 谁能改？
- 谁能读？
- 失败时怎么暴露原因？

## 继续深入看什么

### 必读

- [Solidity 官方文档](https://docs.soliditylang.org/en/latest/)
- [OpenZeppelin Contracts 文档](https://docs.openzeppelin.com/contracts)

### 进阶

- [Solidity Storage Layout](https://docs.soliditylang.org/en/latest/internals/layout_in_storage.html)
- [Solidity ABI Specification](https://docs.soliditylang.org/en/latest/abi-spec.html)

### 实战

- 自己写一个最小版 ERC20 和 Vault，并分别为余额变化、权限边界、错误场景写测试。
```

- [ ] **Step 3: Write the EVM and gas chapter**

Create `book/evm-gas/index.md`:

```md
# Part 3: EVM 与 Gas

## 先理解什么

EVM 不是“合约运行环境”这么一句话就能带过的黑盒。你需要抓住四个最关键的区域：

- stack：操作码执行时的临时操作栈
- memory：一次调用期间临时可扩展的内存
- storage：真正持久化到链上状态的数据
- calldata：外部调用带进来的只读输入

只要这四者分工不清，你后面对 Gas、ABI、slot、packing、低级调用和优化的理解都会很虚。

## 为什么重要

Gas 不是抽象的手续费概念，它是你使用底层资源的成本映射。之所以 `SSTORE` 贵，是因为你在改持久状态；之所以 `memory` 相对便宜，是因为它只在当前执行上下文里存活；之所以 `calldata` 常常更省，是因为它是只读输入，不需要复制成可变内存。

一旦把资源模型想清楚，你会更明白为什么某些“优化写法”存在，也更知道哪些优化值得做，哪些只是牺牲可读性的噪音。

## 常见误区

- 以为 Gas 优化就是到处改短变量名或疯狂 `unchecked`。
- 只记住“storage 贵、memory 便宜”，却说不出为什么。
- 以为 event 一定比 storage 好，却不区分链上读取和链下消费场景。
- 看到 slot packing 就想全项目硬上，忽略可读性与变更成本。

## 怎么练

最适合的练法不是先背 opcode，而是做三类小实验：

1. 写两个版本的状态更新合约，对比 `storage` 与 `memory` 的 gas 差异。
2. 写结构体并观察 slot packing 是否生效。
3. 用区块浏览器或 Foundry 输出 gas report，比较不同实现的成本。

把每一次对比都写成“我改了什么、为什么更省、代价是什么”，你对 Gas 的理解才会开始沉淀成工程判断。

## 继续深入看什么

### 必读

- [EVM Overview](https://ethereum.org/developers/docs/evm/)
- [evm.codes](https://www.evm.codes/)

### 进阶

- [Yellow Paper](https://ethereum.github.io/yellowpaper/paper.pdf)
- [Solidity Storage Layout](https://docs.soliditylang.org/en/latest/internals/layout_in_storage.html)

### 实战

- 写两个版本的合约并记录 gas report：一个朴素实现，一个做适度优化，然后解释为什么数据会不同。
```

- [ ] **Step 4: Run the core validator and confirm it passes**

Run: `npm run docs:check -- core1`
Expected: PASS with `Book validation passed for scopes: core1`

- [ ] **Step 5: Commit the Solidity and EVM chapters**

Run: `git add book/solidity-state/index.md book/evm-gas/index.md`

Run: `git commit -m "feat: add solidity and evm chapters"`

### Task 5: Write The Security And Engineering Chapters

**Files:**
- Create: `book/security/index.md`
- Create: `book/engineering-testing/index.md`

- [ ] **Step 1: Verify the second core scope fails**

Run: `npm run docs:check -- core2`
Expected: FAIL with missing files under `book/security/index.md` and `book/engineering-testing/index.md`

- [ ] **Step 2: Write the security chapter**

Create `book/security/index.md`:

```md
# Part 4: 安全

## 先理解什么

Web3 里最残酷的一点是：很多 bug 不是“功能不可用”，而是“资金可被拿走”。因此安全不能放到项目最后，也不能理解成“审计前再补补”。对合约工程师来说，安全就是设计的一部分。

这一章先抓最常见、也最容易造成真实损失的几类问题：

- 重入
- 权限控制错误
- 签名重放
- `delegatecall` 风险
- `tx.origin` 误用
- 预言机操纵
- Flash Loan 辅助攻击

## 为什么重要

如果你不知道这些问题怎么发生，就很容易把代码写成“功能上能跑通，但攻击面完全敞开”。安全思维的核心不是背漏洞名词，而是始终追问：

- 谁能调用？
- 谁能受益？
- 谁能影响价格、状态或外部依赖？
- 外部调用之后，我的假设还成立吗？

## 常见误区

- 以为用了 OpenZeppelin 就自动安全。
- 以为单元测试全绿就等于没有风险。
- 只盯着合约本体，不看外部依赖和权限配置。
- 把安全问题理解成“黑客很高级，我项目太小没人打”。

## 怎么练

最有效的练习方式是“故意写出漏洞，再亲手打掉它”：

1. 写一个可重入的 Bank，再用攻击合约复现。
2. 写一个权限边界不清的管理函数，再补上 `Ownable` 或 `AccessControl`。
3. 写一个签名校验逻辑，检查链 ID、nonce、deadline 是否被正确纳入。

每次练习都要写出攻击前提、攻击路径和修复方式。

## 继续深入看什么

### 必读

- [OpenZeppelin Security](https://docs.openzeppelin.com/contracts/4.x/api/security)
- [Solidity Security Considerations](https://docs.soliditylang.org/en/latest/security-considerations.html)

### 进阶

- [Cyfrin Updraft](https://updraft.cyfrin.io/)
- [SWC Registry](https://swcregistry.io/)

### 实战

- 选一个最小金库合约，分别验证重入、权限和签名三个维度，写出你的审查笔记。
```

- [ ] **Step 3: Write the engineering and testing chapter**

Create `book/engineering-testing/index.md`:

```md
# Part 5: 工程化与测试

## 先理解什么

真正让你从“会写合约”走向“能交付合约系统”的，不只是语法和底层原理，而是工程化能力。对这本书的目标读者来说，最值得优先投入的工具链是 Foundry。

你需要会：

- 写单元测试
- 写失败路径测试
- 做 fuzz
- 做 fork test
- 看 trace 和 gas report
- 做部署与验证

## 为什么重要

合约开发和很多普通前端最大的差别之一，是错误代价极高，而且链上行为一旦部署就难以回退。所以你不能只靠手点几次前端页面确认“看起来能跑”。你需要让测试覆盖状态变化、权限边界、回滚场景和输入空间。

Foundry 的价值在于它把这些流程压到很短的反馈回路里，让你能边写边验证。

## 常见误区

- 只测 happy path，不测 revert 和权限失败。
- 把测试写成“证明我代码会工作”，而不是“尽量证明我的假设可能错”。
- 完全不做 fork test，导致和真实协议或真实 token 交互时才暴露问题。
- 把部署脚本当成上线前一次性文件，而不是工程资产。

## 怎么练

建议按这个顺序练：

1. 用 Foundry 给 ERC20 写基础转账测试。
2. 给 Vault 写失败路径与权限测试。
3. 为一个状态机更复杂的合约加 fuzz。
4. 对真实主网协议做 fork test，验证交互假设。

当你开始习惯“先写测试，再写代码，再看 trace 和 gas”，合约开发的可靠性会明显提升。

## 继续深入看什么

### 必读

- [Foundry Book](https://book.getfoundry.sh/)
- [OpenZeppelin Upgrades](https://docs.openzeppelin.com/upgrades)

### 进阶

- [Forge Std Reference](https://book.getfoundry.sh/reference/forge-std/overview)
- [Anvil Reference](https://book.getfoundry.sh/anvil/)

### 实战

- 用 Foundry 给你自己最熟悉的一个合约写一套完整测试：成功路径、失败路径、fuzz、fork test 各至少一个。
```

- [ ] **Step 4: Run the second core validator and confirm it passes**

Run: `npm run docs:check -- core2`
Expected: PASS with `Book validation passed for scopes: core2`

- [ ] **Step 5: Commit the security and engineering chapters**

Run: `git add book/security/index.md book/engineering-testing/index.md`

Run: `git commit -m "feat: add security and engineering chapters"`

### Task 6: Write The Protocol, Project, And Appendix Content

**Files:**
- Create: `book/protocol-reading/index.md`
- Create: `book/project-roadmap/index.md`
- Create: `book/appendix/resources.md`
- Create: `book/appendix/faq.md`
- Create: `book/appendix/glossary.md`

- [ ] **Step 1: Verify the advanced and appendix scopes fail**

Run: `npm run docs:check -- advanced appendix`
Expected: FAIL with missing files under `book/protocol-reading`, `book/project-roadmap`, and `book/appendix`

- [ ] **Step 2: Write the protocol-reading chapter**

Create `book/protocol-reading/index.md`:

```md
# Part 6: 协议源码阅读

## 先理解什么

读协议源码的关键，不是逐行从头读到尾，而是先抓结构，再抓状态流，再抓权限边界。源码阅读不应该像背课文，而应该像拆系统。

对这本书的读者，最推荐的顺序是：

1. OpenZeppelin 的 ERC20、Ownable、AccessControl
2. OpenZeppelin 的代理与升级模块
3. Uniswap V2
4. Aave

## 为什么重要

源码阅读是你把“知道概念”变成“理解真实工程决策”的最快方式。你会看到标准接口如何落地、状态如何组织、边界如何防守、事件如何定义、为什么一些看似奇怪的写法其实是在处理约束。

## 常见误区

- 一上来就读最复杂的协议主合约。
- 只看函数，不看状态变量和事件。
- 只关心业务逻辑，不关心权限、升级、暂停、外部依赖。
- 读不懂就怀疑自己，其实多数时候只是阅读顺序错了。

## 怎么练

每次读源码，都强制输出一页笔记，至少包含：

- 核心状态有哪些
- 核心入口函数有哪些
- 谁能调用
- 资金或状态如何流动
- 有哪些事件
- 最值得追的 3 个内部函数

如果你做不到这一页总结，说明你还没有真正读懂。

## 继续深入看什么

### 必读

- [OpenZeppelin Contracts](https://github.com/OpenZeppelin/openzeppelin-contracts)
- [Uniswap V2 Core](https://github.com/Uniswap/v2-core)

### 进阶

- [Aave V3 Core](https://github.com/aave/aave-v3-core)
- [Uniswap V3 Core](https://github.com/Uniswap/v3-core)

### 实战

- 先从 OpenZeppelin 的 ERC20 开始，画出状态与函数关系，再去读 Uniswap V2 Pair 合约。
```

- [ ] **Step 3: Write the project-roadmap chapter**

Create `book/project-roadmap/index.md`:

```md
# Part 7: 项目实战路线

## 先理解什么

项目顺序会决定你的成长曲线。太简单的项目学不到状态复杂度，太复杂的项目会让你只剩复制粘贴。最好的顺序是让每个项目都只多出一层新难点。

推荐顺序：

1. ERC20
2. NFT
3. Voting
4. MultiSig
5. Staking
6. DEX
7. Marketplace
8. Lending

## 为什么重要

如果项目顺序合理，你每做完一个项目，脑子里都会多一块稳定模型：

- ERC20 帮你理解余额与授权
- MultiSig 帮你理解权限和签名
- Staking 帮你理解奖励结算
- DEX 帮你理解池子、定价和状态变化
- Lending 帮你理解抵押、清算与风险边界

## 常见误区

- 一开始就做桥或复杂借贷协议。
- 做项目只重功能，不重测试与安全。
- 一边写一边搜模板，最后自己也说不清状态设计。
- 每个项目都只写 happy path demo。

## 怎么练

每做一个项目都写这四样东西：

1. 状态设计说明
2. 权限模型说明
3. 失败路径清单
4. 测试覆盖说明

做完再问自己：这个项目最值得我迁移到下一个项目里的能力是什么？

## 继续深入看什么

### 必读

- [Solidity By Example](https://solidity-by-example.org/)
- [Foundry Book](https://book.getfoundry.sh/)

### 进阶

- [Damn Vulnerable DeFi](https://www.damnvulnerabledefi.xyz/)
- [Paradigm CTF Archive](https://github.com/paradigmxyz/paradigm-ctf)

### 实战

- 在 ERC20、MultiSig、Staking、DEX 四个项目里至少做完两个，并为每个项目补上测试与审查笔记。
```

- [ ] **Step 4: Write the resources appendix**

Create `book/appendix/resources.md`:

```md
# 资料索引

## 官方文档

- [Ethereum Developer Docs](https://ethereum.org/developers/docs/)
- [Solidity 官方文档](https://docs.soliditylang.org/en/latest/)
- [Foundry Book](https://book.getfoundry.sh/)
- [OpenZeppelin Docs](https://docs.openzeppelin.com/contracts)

## 安全与工程

- [Solidity Security Considerations](https://docs.soliditylang.org/en/latest/security-considerations.html)
- [OpenZeppelin Security](https://docs.openzeppelin.com/contracts/4.x/api/security)
- [SWC Registry](https://swcregistry.io/)
- [Cyfrin Updraft](https://updraft.cyfrin.io/)

## 源码阅读

- [OpenZeppelin Contracts](https://github.com/OpenZeppelin/openzeppelin-contracts)
- [Uniswap V2 Core](https://github.com/Uniswap/v2-core)
- [Aave V3 Core](https://github.com/aave/aave-v3-core)
- [EIPs](https://eips.ethereum.org/)
```

- [ ] **Step 5: Write the FAQ appendix**

Create `book/appendix/faq.md`:

```md
# 常见问题

## 常见问题

### 我是不是要先把密码学学完？

不用。对合约与 dApp 工程师来说，先把 Solidity、状态、EVM、Gas、安全和测试吃透，收益更高。

### 我应该先学 Hardhat 还是 Foundry？

如果你的目标是补强合约开发和测试，我推荐先学 Foundry。它的反馈回路更短，也更适合你把测试、调试和 fork 场景接进日常开发。

### 我为什么总觉得自己“会调合约但不会设计合约”？

因为这两者中间隔着状态模型、权限边界、失败路径、Gas 成本和安全思维。前者是接口消费，后者是系统设计。

### 我应该什么时候开始读源码？

当你已经能独立写出基础合约、知道常见状态设计，并能读懂 OpenZeppelin 的标准实现时，就可以开始。
```

- [ ] **Step 6: Write the glossary appendix**

Create `book/appendix/glossary.md`:

```md
# 术语表

## 术语表

- **ABI**：合约与外部世界交互时使用的接口编码规范。
- **Calldata**：外部调用传给合约的只读输入区域。
- **Delegatecall**：在当前合约上下文中执行另一个合约代码的低级调用方式。
- **EVM**：Ethereum Virtual Machine，执行智能合约字节码的运行环境。
- **Gas**：执行链上操作所需的资源计费单位。
- **Mempool**：待打包交易的传播与排队区域。
- **Nonce**：账户发出交易的递增计数器。
- **Receipt**：交易执行后的结果摘要，包含状态、gas 使用、logs 等。
- **Slot**：EVM storage 的逻辑存储单元。
- **State Root**：区块执行后全局状态的根哈希。
```

- [ ] **Step 7: Run the advanced and appendix validators**

Run: `npm run docs:check -- advanced appendix`
Expected: PASS with `Book validation passed for scopes: advanced, appendix`

- [ ] **Step 8: Commit the advanced content**

Run: `git add book/protocol-reading/index.md book/project-roadmap/index.md book/appendix`

Run: `git commit -m "feat: add advanced chapters and appendix"`

### Task 7: Add Deployment And Repository Documentation

**Files:**
- Create: `.github/workflows/deploy.yml`
- Create: `README.md`

- [ ] **Step 1: Confirm the full validator passes before deployment setup**

Run: `npm run docs:check`
Expected: PASS with all scopes listed

- [ ] **Step 2: Add the GitHub Pages workflow**

Create `.github/workflows/deploy.yml`:

```yml
name: Deploy Book

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Install dependencies
        run: npm ci

      - name: Validate book structure
        run: npm run docs:check

      - name: Build VitePress site
        run: npm run docs:build

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: book/.vitepress/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 3: Add the root README**

Create `README.md`:

````md
# Web3 Learning Book

一个面向已经做过 dApp 的前端开发者的中文 Web3 全栈学习手册，内容重点包括 Solidity、状态模型、EVM、Gas、安全、工程化、协议源码阅读和项目实战路径。

## 本地开发

```bash
npm install
npm run docs:dev
```

默认本地地址通常是 `http://localhost:5173/web3-learning/` 或 VitePress 输出的开发地址。

## 本地校验

```bash
npm run docs:check
npm run docs:build
```

## 部署到 GitHub Pages

1. 把这个目录推到 GitHub 仓库 `web3-learning`
2. 在 GitHub 仓库设置中启用 Pages，并选择 `GitHub Actions`
3. push 到 `main` 后，工作流会自动构建并部署

## 内容目录

- `book/`：书的正文与 VitePress 配置
- `scripts/validate-book.mjs`：章节结构校验脚本
- `.github/workflows/deploy.yml`：GitHub Pages 自动部署工作流
````

- [ ] **Step 4: Run the final validation suite**

Run: `npm run docs:check`
Expected: PASS with all scopes listed

Run: `npm run docs:build`
Expected: PASS and static output appears under `book/.vitepress/dist`

- [ ] **Step 5: Commit deployment support**

Run: `git add .github/workflows/deploy.yml README.md`

Run: `git commit -m "feat: add github pages deployment workflow"`

### Task 8: Final Local Review And Publishing Prep

**Files:**
- Modify: `book/.vitepress/config.ts` if base URL or repo link needs correction after the first full build

- [ ] **Step 1: Preview the built book locally**

Run: `npm run docs:preview`
Expected: local preview server starts and pages are navigable

- [ ] **Step 2: Click through the main route list**

Check these routes in the local preview:

- `/`
- `/preface`
- `/learning-map`
- `/mental-model/`
- `/solidity-state/`
- `/evm-gas/`
- `/security/`
- `/engineering-testing/`
- `/protocol-reading/`
- `/project-roadmap/`
- `/appendix/resources`

Expected: each page resolves and the sidebar links remain usable.

- [ ] **Step 3: Fix repo-specific metadata if needed**

If the repository name differs from `web3-learning`, update the `base` string in `book/.vitepress/config.ts` so it exactly matches the real GitHub repository name. If you later want a GitHub icon in the nav, add a `socialLinks` entry only after the final repository URL is known.

- [ ] **Step 4: Re-run build after metadata fixes**

Run: `npm run docs:build`
Expected: PASS

- [ ] **Step 5: Commit final polish**

Run: `git add book/.vitepress/config.ts`

Run: `git commit -m "chore: finalize site metadata"`

## Self-Review

### Spec coverage

- GitBook-style self-hosted docs site: covered by Tasks 1, 2, 7, and 8.
- Chinese v1 with substantial content: covered by Tasks 3 through 6.
- Mainline path for experienced dApp frontend engineers: reflected in all chapter files created in Tasks 3 through 6.
- Chapter-level deep-dive resources: enforced structurally in every content task and by the validation script.
- GitHub Pages deployment: covered in Task 7 and checked in Task 8.

### Placeholder scan

- No unresolved placeholders remain in the plan.
- Every task names exact files and exact commands.

### Type consistency

- The content root is consistently `book/`.
- Validation script scopes and file paths match the planned chapter paths.
- The deployment artifact path matches the VitePress default output for `book/`.

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-07-07-web3-frontend-to-fullstack-guide.md`. Two execution options:

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

Which approach?
