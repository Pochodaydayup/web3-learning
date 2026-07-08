# 第 4 章延伸阅读

## 必读

- OpenZeppelin Upgrades 文档与安全说明
- 审计报告中关于 initializer、upgrade auth、storage collision 的典型问题
- 代理模式基础资料与安全最佳实践

## 进阶

- 真实协议升级 postmortem 与治理提案
- UUPS / Transparent Proxy 相关实现源码
- 更深入的 `delegatecall` 安全分析资料

## 实战

- 跟踪一个真实协议的一次升级提案，梳理它做了哪些安全保障
- 对自己熟悉的一个系统做“如果升级权被接管，损失半径如何扩散”的演练
- 把一个旧项目的普通合约改造成升级架构，再做一次安全边界复盘
