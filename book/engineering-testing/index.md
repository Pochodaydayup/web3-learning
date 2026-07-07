# 工程化与测试（旧路径）

旧版的工程化与测试内容已经并入新的“卷三：Foundry 完整开发指南”。新的结构把工作流、练习、项目实践和延伸阅读做了更清晰的拆分。

## 新入口

建议从这里开始：

- [卷三导读](/part-3-foundry/)
- [第 1 章 Foundry 工程工作流](/part-3-foundry/chapter-01-foundry-engineering-workflow/)
- [Foundry 工作流闭环](/part-3-foundry/chapter-01-foundry-engineering-workflow/foundry-loop)

## 练习题

对应练习题入口：

- [第 1 章练习题](/part-3-foundry/chapter-01-foundry-engineering-workflow/exercises)

## 项目实践

建议用一个最小项目把工程闭环走通：

- [第 1 章项目实践](/part-3-foundry/chapter-01-foundry-engineering-workflow/practice)

## 延伸阅读

更多工作流与测试资料见：

- [第 1 章延伸阅读](/part-3-foundry/chapter-01-foundry-engineering-workflow/reading)
- `transferFrom` 的成功与失败

这个练习能让你把“状态变化”和“失败路径”一起看。

### 练习二：给 Vault 写一套完整测试

Vault 非常适合练工程化，因为它同时涉及：

- 余额状态
- 资金流
- 权限或调用顺序
- 潜在安全问题

你可以要求自己至少写：

- 成功路径测试
- 权限测试
- 失败路径测试
- 一个与重入或外部调用顺序相关的测试

### 练习三：第一次使用 fuzz

不要一开始就在复杂协议上用 fuzz。  
先找一个状态机简单但输入空间明显的场景，例如：

- 充值和提现区间
- 投票权重变化
- 奖励结算

把重点放在“它帮我发现了哪些我没手写出来的边界”上。

### 练习四：对接一次 fork test

选一个你熟悉的真实协议，做一次最小 fork test，比如：

- 和主网某个 ERC20 交互
- 模拟一次 router 调用
- 检查某个真实池子的状态读写假设

一旦你做过一次，你就会更清楚什么叫“真实环境验证”。

## 继续深入看什么

### 必读

- [Foundry Book](https://book.getfoundry.sh/)
- [Forge Std Reference](https://book.getfoundry.sh/reference/forge-std/overview)
- [Anvil Reference](https://book.getfoundry.sh/anvil/)

### 进阶

- [OpenZeppelin Upgrades](https://docs.openzeppelin.com/upgrades)
- [Foundry Cheatcodes](https://book.getfoundry.sh/cheatcodes/)
- [Foundry Debugger / Trace 相关文档](https://book.getfoundry.sh/forge/debugger)

### 实战

- 用 Foundry 给你最熟悉的一个合约写一套完整测试：成功路径、失败路径、fuzz、fork test 各至少一个。
- 对你自己的一个旧项目，补上一份“部署脚本 + 部署后校验清单”。
