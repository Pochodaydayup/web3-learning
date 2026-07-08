# 卷二：Solidity

这一卷的目标，不是把 Solidity 学成一张语法表，而是学成一种“链上状态设计语言”。对已经会前端交互的开发者来说，最大的跃迁不是多背几个关键字，而是第一次真正开始自己设计状态、权限、错误表达和对外接口。

## 这一卷解决什么

这卷要解决的是“我会调别人的合约，但我自己不会设计合约”这个问题。你会从状态和数据区域出发，理解变量为什么要分 `storage`、`memory`、`calldata`，为什么 `mapping` 这么重要，为什么 event 不能代替主状态，为什么错误处理、权限边界、标准接口和模块拆分都与状态设计直接相关。

你还会建立一个重要习惯：以后看到 Solidity 代码，不先问“语法是什么意思”，而先问“这段状态要存多久、谁能改、改它要花什么成本、失败时怎么表达”。

## 建议阅读顺序

1. 先把第 1 章读透，尤其是状态、数据区域和接口边界。
2. 自己手写一个最小 Bank 或 Todo 合约，不要直接照搬模板。
3. 再去读 OpenZeppelin 的 `Ownable`、`ERC20`、`ERC721`，验证你对状态和边界的理解。
4. 最后把练习题和项目实践做完，形成自己的设计语言。

## 本卷章节

- [第 1 章 Solidity 与状态基础](./chapter-01-solidity-state-foundations/)
- [第 2 章 Function、Event、Error 与边界设计](./chapter-02-functions-events-and-errors/)
- [第 3 章 OpenZeppelin 与标准代币](./chapter-03-openzeppelin-and-standard-tokens/)
- [第 4 章 升级模式与初始化](./chapter-04-upgradeability-and-initialization/)
- [第 5 章 合约设计中的状态机思维](./chapter-05-state-machine-thinking/)

这卷读完以后，你应该已经能独立写出结构清晰、边界明确的小型合约，而不是只会调用标准接口。
