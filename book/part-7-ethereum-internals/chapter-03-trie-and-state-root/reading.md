# 第 3 章延伸阅读

## 必读

- Ethereum 开发者文档中关于账户模型、state trie、storage trie 的说明
- 解释 `stateRoot`、proof 和区块头字段关系的官方或高质量技术文章
- 支持 `eth_getProof` 的 JSON-RPC 文档说明

## 进阶

- Yellow Paper 中与世界状态、账户状态和 trie 结构有关的章节
- 客户端实现文档或源码中关于 state database、proof 生成的部分
- L2、桥接和 light client 相关资料里对 state proof 的使用方式

## 实战

- 对一个 ERC20 合约的 `balances` 槽做一次状态定位练习，观察高层映射与底层 slot 的连接方式
- 查找一个桥接协议或轻客户端实现，标记它依赖哪些 root 和 proof
- 结合区块浏览器、RPC 和源码，整理一份“stateRoot 给普通合约开发带来的实际意义”笔记
