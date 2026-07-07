# 认知重建（旧路径）

这条旧路径已经并入新的“卷一：Web3 与 Ethereum 基础”。旧页面保留，主要是为了兼容你之前收藏的链接，以及帮助你把原先的碎片化认知迁移到新的书籍结构里。

## 新入口

请优先阅读新的主干章节：

- [卷一导读](/part-1-foundations/)
- [第 1 章 交易心智模型](/part-1-foundations/chapter-01-transaction-mental-model/)
- [从点击到状态变更](/part-1-foundations/chapter-01-transaction-mental-model/from-click-to-state)

## 练习题

新的练习题已经独立成页，建议你直接进入：

- [第 1 章练习题](/part-1-foundations/chapter-01-transaction-mental-model/exercises)

## 项目实践

如果你想把“认知重建”真正落地，最推荐的入口是项目实践：

- [第 1 章项目实践](/part-1-foundations/chapter-01-transaction-mental-model/practice)

## 延伸阅读

延伸材料和后续深入入口在这里：

- [第 1 章延伸阅读](/part-1-foundations/chapter-01-transaction-mental-model/reading)
- [学习地图](/learning-map)
- [怎么读这本书](/how-to-read)

### 练习一：把一次真实业务动作拆成九步

挑一个你熟悉的功能，比如：

- 领取奖励
- 质押
- 购买 NFT
- 兑换 Token

把它强制拆成这些步骤：

1. 用户触发了什么
2. 前端准备了什么参数
3. 编码后的 calldata 大致是什么
4. 钱包签了什么
5. 交易进入哪条链的 mempool
6. 打包前会受哪些条件影响
7. 合约执行时会读写哪些状态
8. 成功后会产生哪些 logs
9. 前端最终基于什么更新 UI

如果你能稳定写出这九步，你对系统的理解会清晰很多。

### 练习二：手动跟踪一笔测试网交易

自己发一笔测试网交易，然后记录：

- hash
- nonce
- gas price / fee
- status
- logs
- block number

再用区块浏览器把它完整追一遍。  
只要你认真做过几次，你对“链上到底发生了什么”的感知会强很多。

### 练习三：区分四种前端状态

给你自己的 dApp 交互页做一次状态拆分：

- 钱包弹窗前
- 用户签名后但未打包
- 已打包但执行失败
- 执行成功并完成前端刷新

很多糟糕的 Web3 UX，根源就在于把这些状态全部混成一个“loading”。

## 继续深入看什么

### 必读

- [Ethereum Transactions](https://ethereum.org/developers/docs/transactions/)
- [JSON-RPC API 概览](https://ethereum.org/developers/docs/apis/json-rpc/)
- [EVM Overview](https://ethereum.org/developers/docs/evm/)

### 进阶

- [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559)
- [Ethereum Blocks](https://ethereum.org/developers/docs/blocks/)
- [Receipt Trie 与执行结果相关资料](https://ethereum.org/developers/docs/data-structures-and-encoding/patricia-merkle-trie/)

### 实战

- 在测试网手动发三笔不同场景的交易：成功、回滚、被替换，并分别记录它们的 hash、receipt、logs 和最终前端表现。
- 给你最熟悉的一个合约交互流程写一份“一页纸架构说明”，要求非项目成员也能看懂链路。
