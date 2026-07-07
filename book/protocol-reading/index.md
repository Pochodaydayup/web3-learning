# 协议源码阅读（旧路径）

旧版源码阅读页已经迁移到新的“卷九：协议源码阅读”。新版把阅读方法、练习、项目实践和延伸阅读都拆开了，更适合做长期阅读训练。

## 新入口

建议从这里进入新版内容：

- [卷九导读](/part-9-protocol-reading/)
- [第 1 章 如何读真实协议](/part-9-protocol-reading/chapter-01-reading-real-protocols/)
- [阅读顺序与问题清单](/part-9-protocol-reading/chapter-01-reading-real-protocols/reading-order-and-questions)

## 练习题

新版练习题入口：

- [第 1 章练习题](/part-9-protocol-reading/chapter-01-reading-real-protocols/exercises)

## 项目实践

建议你直接对一个真实模块做结构化阅读：

- [第 1 章项目实践](/part-9-protocol-reading/chapter-01-reading-real-protocols/practice)

## 延伸阅读

进一步深入可以看：

- [第 1 章延伸阅读](/part-9-protocol-reading/chapter-01-reading-real-protocols/reading)
- [源码阅读指南](/source-code-reading-guide)
- 四周写入口函数
- 用箭头标明哪些函数读、哪些函数写

这会强迫你从“逐行阅读”切换到“结构阅读”。

### 练习三：写“为什么这样设计”

每次读到一个你觉得“写得很怪”的地方，不要急着判断难看，先试着回答：

- 它解决了什么约束？
- 如果不这么写，会出什么问题？
- 这个选择是在权衡什么？

源码阅读最大的成长，往往就发生在这里。

## 继续深入看什么

### 必读

- [OpenZeppelin Contracts](https://github.com/OpenZeppelin/openzeppelin-contracts)
- [Uniswap V2 Core](https://github.com/Uniswap/v2-core)
- [OpenZeppelin Upgrades 文档](https://docs.openzeppelin.com/upgrades)

### 进阶

- [Aave V3 Core](https://github.com/aave/aave-v3-core)
- [Uniswap V3 Core](https://github.com/Uniswap/v3-core)
- [EIPs](https://eips.ethereum.org/)

### 实战

- 先从 OpenZeppelin 的 `ERC20` 开始，写出状态与函数关系图，再去读 Uniswap V2 Pair 合约。
- 每读完一个模块，强制产出一页笔记，连续做三周。
