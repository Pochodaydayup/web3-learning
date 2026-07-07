# 第 1 章延伸阅读

## 必读

- Solidity 官方文档里和 storage、constant、immutable 相关的章节
- Foundry gas 报告或其他你熟悉的 gas 测试输出
- OpenZeppelin 代码里一些常见的状态与事件设计

## 进阶

- 深入理解 slot、packing、cold/warm access 等更细粒度成本
- 学习真实协议如何平衡 gas、可读性和安全
- 阅读几篇高质量 gas 优化文章，并尝试反向验证其中建议是否适合你的场景

## 实战

- 给一个已有项目做一次 gas 复盘，而不是盲目优化
- 对照 Uniswap 或 Aave 的某个函数，分析它为什么把某些信息只做 event 暴露
- 在团队里整理一份“高收益 Gas 优化清单”
