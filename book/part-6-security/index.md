# 卷六：智能合约安全

安全不是上线前额外补的一道工序，而是合约设计本身的一部分。很多人学安全时会被一堆漏洞名词压住，但真正重要的不是名词表，而是能否把漏洞重新看成状态边界、调用顺序、权限模型和外部依赖问题。

## 这一卷解决什么

这一卷会帮你建立安全的最小主干：重入、权限控制、签名重放、`delegatecall` 风险、`tx.origin` 误用、预言机操纵、Flash Loan 放大攻击。重点不是追求一次记全，而是学会用工程视角分析系统的危险面。

## 建议阅读顺序

1. 先抓第 1 章里的几个高频风险面。
2. 把它们带回你自己写过的小合约，做一次安全走查。
3. 再逐步接入更复杂的话题，例如代理升级、签名授权和价格依赖。

## 本卷章节

- [第 1 章 安全审查基础](./chapter-01-security-review-basics/)
- [第 2 章 签名、重放与 Delegatecall](./chapter-02-signatures-replay-and-delegatecall/)
- [第 3 章 Oracle、Flash Loan 与 MEV 风险](./chapter-03-oracle-flash-loan-and-mev/)
- [第 4 章 升级、代理与初始化风险](./chapter-04-upgrade-proxy-and-init-risks/)
- [第 5 章 安全测试与审计协作](./chapter-05-security-testing-and-audit-collaboration/)

这卷的目标不是让你“会背漏洞”，而是让你在写代码时天然开始问：这个边界安全吗？
