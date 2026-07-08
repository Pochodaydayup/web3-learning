# 第 3 章延伸阅读

## 必读

- OpenZeppelin 安全相关文章中关于价格预言机、攻击面分析和常见 DeFi 风险的内容
- Ethereum.org 或开发者文档中关于 MEV、预言机和交易排序的基础说明
- 公开协议 postmortem，尤其是价格操纵、清算失衡、Flash Loan 攻击相关案例

## 进阶

- Chainlink 文档里关于价格聚合、更新机制和喂价网络的设计说明
- Uniswap 关于 TWAP 与预言机机制的官方文档和技术说明
- 各大安全团队发布的 exploit analysis，例如 Cyfrin、Trail of Bits、OpenZeppelin Security 等

## 实战

- 选一个真实 DeFi 协议，画出它的价格依赖图：哪些函数读取价格、价格来源是什么、什么参数会影响最终决策
- 对照 Uniswap 或 Aave 的设计，比较“读取价格”和“执行高价值动作”之间是否存在缓冲层
- 跟踪一条真实清算交易，在区块浏览器中查看前后关联交易，观察是否存在明显 MEV 痕迹
