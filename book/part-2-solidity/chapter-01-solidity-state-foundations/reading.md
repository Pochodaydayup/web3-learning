# 第 1 章延伸阅读

## 必读

- Solidity 官方文档中的值类型、引用类型与数据位置章节
- OpenZeppelin `Ownable` 与 `ERC20` 的核心状态定义
- Ethereum 开发者文档中关于 storage 与 event 的基础说明

## 进阶

- 阅读 `AccessControl`，观察角色模型如何扩展权限边界
- 学习 custom error 与 revert data 的表达方式
- 观察不同协议如何在主状态和 event 之间分工

## 实战

- 自己实现一个最小 ERC20，然后和 OpenZeppelin 对照差异
- 给一个已有小项目做一次“状态体检”：删除冗余状态，补足必要 event
- 把你的设计说明写成团队文档，尝试向别人解释为什么某些数据不能只存在前端本地状态里
