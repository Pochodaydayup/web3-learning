# Solidity 与状态（旧路径）

旧版的 Solidity 入口已经迁移到新的“卷二：Solidity”中。新的章节结构把正文、练习、实践和延伸阅读拆得更清楚，也更适合长期学习。

## 新入口

建议从新的卷页和主章节进入：

- [卷二导读](/part-2-solidity/)
- [第 1 章 Solidity 与状态基础](/part-2-solidity/chapter-01-solidity-state-foundations/)
- [状态与数据区域](/part-2-solidity/chapter-01-solidity-state-foundations/state-and-data-locations)

## 练习题

对应练习题已经单独整理：

- [第 1 章练习题](/part-2-solidity/chapter-01-solidity-state-foundations/exercises)

## 项目实践

如果你想真正把 Solidity 学扎实，优先做这里的项目实践：

- [第 1 章项目实践](/part-2-solidity/chapter-01-solidity-state-foundations/practice)

## 延伸阅读

深入资料和标准实现入口见：

- [第 1 章延伸阅读](/part-2-solidity/chapter-01-solidity-state-foundations/reading)
- [源码阅读指南](/source-code-reading-guide)

- `Ownable` 解决什么问题
- `AccessControl` 何时比 `Ownable` 更合适
- `ERC20` 的状态核心是什么
- `ERC721` 和 `ERC20` 在状态结构上最大的不同是什么

否则你只是把别人已经编码好的边界拷了过来，并没有真正建立自己的判断。

## 怎么练

这一章最有效的练习方式，不是刷很多零散语法题，而是按难度渐进地写几个最小合约。

### 练习一：Todo

目标不是做产品，而是练最基础的状态操作：

- `struct`
- `array`
- 状态更新
- 只读与写入函数区分

你需要在写的时候强制回答：

- Todo 存在哪？
- 更新时改了什么状态？
- 为什么某些函数应该是 `view`？

### 练习二：Bank / Vault

这一层开始进入更典型的合约状态思维：

- 用 `mapping(address => uint256)` 记录余额
- 定义存入和提取
- 思考资金流和失败条件

这里会第一次真正把“状态”“权限”“失败路径”三个问题合起来。

### 练习三：Voting

投票合约特别适合练：

- `mapping`
- 权限边界
- 事件表达
- 状态流转

例如：

- 谁能发起提案？
- 谁能投票？
- 同一地址能不能重复投？
- 结果应该通过什么状态读取？
- 哪些地方该发 event？

### 练习四：最小 ERC20

写一个最小 ERC20 非常值得。  
不是为了和 OpenZeppelin 比谁更强，而是为了让你亲手经历：

- `totalSupply`
- `balanceOf`
- `allowance`
- `transfer`
- `approve`
- `transferFrom`

这些机制如何共同构成一个标准 Token 的状态系统。

### 练习时一定要问的四个问题

不管你写哪个练习，都强制问自己这四个问题：

1. 状态存在哪？
2. 谁能改？
3. 谁能读？
4. 失败时怎么暴露原因？

只要这四个问题没有答案，你写出来的代码就还只是“会运行”，还没进入真正的合约设计状态。

## 继续深入看什么

### 必读

- [Solidity 官方文档](https://docs.soliditylang.org/en/latest/)
- [OpenZeppelin Contracts 文档](https://docs.openzeppelin.com/contracts)
- [Solidity By Example](https://solidity-by-example.org/)

### 进阶

- [Solidity Storage Layout](https://docs.soliditylang.org/en/latest/internals/layout_in_storage.html)
- [Solidity ABI Specification](https://docs.soliditylang.org/en/latest/abi-spec.html)
- [OpenZeppelin Contracts 源码](https://github.com/OpenZeppelin/openzeppelin-contracts)

### 实战

- 自己写一个最小版 ERC20 和 Vault，并分别为余额变化、权限边界、错误场景写测试。
- 重写你以前项目里最熟悉的一个简单合约交互，把它背后的状态设计完整讲一遍。
