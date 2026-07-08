# 卷一：Web3 与 Ethereum 基础

这一卷的目标，不是把所有底层术语一次讲完，而是帮你把已经会用的钱包、RPC、ABI、合约调用，重新放回一条完整执行链路里。很多前端做 Web3 时最大的卡点，不是不会写按钮，而是不知道一笔交易从点击开始，到链上状态变化结束，中间到底发生了什么。只要这条主干通了，后面的 Solidity、EVM、Gas、安全、协议源码阅读都会更容易落位。

## 这一卷解决什么

这卷主要解决三个常见断层。

第一，你会把“调用合约”从一个黑盒动作，拆成参数组织、ABI 编码、钱包签名、交易广播、mempool 排队、区块打包、EVM 执行、receipt 返回、前端消费结果这几个清晰阶段。

第二，你会建立一条更稳定的调试路径。以后遇到“签了名但失败”“事件到了但页面不对”“gas 估算不准”“交易一直 pending”这类问题时，你不再只会怀疑 RPC 或钱包，而是能判断问题更可能卡在哪一层。

第三，你会真正理解 Web3 交互和普通 HTTP 请求为什么是两套完全不同的工程模型。前者面对的是签名、排序、执行、回滚和最终状态提交；后者面对的是一次同步或异步的服务端处理。这种差异会直接决定你的前端状态设计、错误提示、重试逻辑和数据一致性策略。

## 建议阅读顺序

1. 先读第 1 章，把“从点击到状态”的主干模型建立起来。
2. 再回头看自己熟悉的前端代码，标记哪些信息属于签名前、广播中、执行后、确认后。
3. 做一遍项目实践，把一笔真实交易完整跟踪下来。
4. 最后用延伸阅读把交易、账户、手续费、区块这些底层名词串起来。

## 本卷章节

- [第 1 章 交易心智模型](./chapter-01-transaction-mental-model/)
- [第 2 章 账户模型与 Nonce](./chapter-02-account-model-and-nonce/)
- [第 3 章 Gas Fee、Receipt 与 Revert](./chapter-03-gas-fee-and-receipt/)
- [第 4 章 Event、Log 与链下索引](./chapter-04-events-logs-and-indexing/)
- [第 5 章 前端状态管理里的链上异步模型](./chapter-05-chain-async-state-management/)
- [第 6 章 RPC 一致性与多数据源读取](./chapter-06-rpc-consistency-and-multi-source-reads/)
- [第 7 章 钱包、Provider、链切换与权限边界](./chapter-07-wallet-providers-chain-switching-and-permissions/)

后续章节会继续沿这条主线展开，但第 1 章已经足够承担“认知重建”的入口作用。
