# 卷七：Ethereum 底层原理

这一卷会把你从“会开发合约”继续带到“知道链本身怎样工作”。目标不是让你一上来就啃 Yellow Paper，而是让你能把一笔交易从账户、手续费、传播、区块、执行、状态根、收据这些环节完整讲清楚。

## 这一卷解决什么

你会理解账户模型、nonce、gas limit、base fee、priority fee、区块、receipt、state root、trie 等核心概念为什么存在，以及它们如何支撑前面已经学过的开发体验。这样你在遇到 pending、替换交易、区块确认、链上最终性和节点差异时，会更有底层坐标。

## 建议阅读顺序

1. 先读第 1 章，建立交易、区块与状态的闭环。
2. 遇到具体问题时，再回到 nonce、费用模型或 trie 等专题深挖。
3. 用区块浏览器和 RPC 调试一次真实交易，把抽象概念落回可见数据。

## 本卷章节

- [第 1 章 交易、区块与状态](./chapter-01-transaction-block-state/)
- [第 2 章 Mempool、重组与最终性](./chapter-02-mempool-reorg-and-finality/)
- [第 3 章 Trie 与 State Root](./chapter-03-trie-and-state-root/)
- [第 4 章 Gas Limit、Base Fee 与打包激励](./chapter-04-gas-limit-base-fee-and-inclusion/)
- [第 5 章 共识、验证者与最终性基础](./chapter-05-consensus-validators-and-finality/)
- [第 6 章 客户端、同步与数据可用性](./chapter-06-clients-sync-and-data-availability/)
- [第 7 章 Rollup、桥与结算层](./chapter-07-rollups-bridges-and-settlement/)

这卷不用你先成为底层研究员，但它会让你成为更稳的应用和合约工程师。
