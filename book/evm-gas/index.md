# EVM 与 Gas（旧路径）

旧版的 EVM 与 Gas 页面已经拆分成了新的“卷四：EVM 原理”和“卷五：Gas 与性能优化”。这样分开以后，执行模型和成本模型会更容易分别理解。

## 新入口

建议按下面顺序进入新版内容：

- [卷四导读](/part-4-evm/)
- [第 1 章 EVM 执行模型](/part-4-evm/chapter-01-evm-execution-model/)
- [Storage、Memory 与 Calldata](/part-4-evm/chapter-01-evm-execution-model/storage-memory-calldata)
- [卷五导读](/part-5-gas/)
- [第 1 章 Gas 成本心智模型](/part-5-gas/chapter-01-gas-cost-mental-model/)

## 练习题

对应练习已经分开整理在两卷内：

- [EVM 练习题](/part-4-evm/chapter-01-evm-execution-model/exercises)
- [Gas 练习题](/part-5-gas/chapter-01-gas-cost-mental-model/exercises)

## 项目实践

如果你想把 EVM 和 Gas 真正连到代码上，建议做这两个实践：

- [EVM 项目实践](/part-4-evm/chapter-01-evm-execution-model/practice)
- [Gas 项目实践](/part-5-gas/chapter-01-gas-cost-mental-model/practice)

## 延伸阅读

深入资料在这里：

- [EVM 延伸阅读](/part-4-evm/chapter-01-evm-execution-model/reading)
- [Gas 延伸阅读](/part-5-gas/chapter-01-gas-cost-mental-model/reading)

- 先理解 packing 为什么成立
- 再判断你的合约是否真的受这部分成本影响
- 最后衡量收益是否值得引入复杂度

优化的目标不是“证明你很会”，而是让系统整体更合理。

## 怎么练

这一章最好的学习方式不是单看文章，而是做对比实验。

### 实验一：对比 `storage` 与 `memory`

写两个版本的合约逻辑：

- 一个直接在状态结构上做修改
- 一个先拷贝到临时区域处理再回写

然后对比 gas report。  
不要只看数字，要写清楚：

- 改动了什么
- 为什么数字会不同
- 这种差异说明了什么

### 实验二：观察 slot packing

写几个结构体，尝试不同字段排列顺序：

- `uint256`
- `uint128`
- `bool`
- `address`

观察它们的布局差异。  
做这件事的重点不是为了记住所有规则，而是为了让你第一次意识到“字段排列顺序也会影响底层存储”。

### 实验三：比较 event 与状态写入的使用场景

挑一个业务动作，比如“用户完成签到”或“用户执行一次奖励领取”，思考：

- 哪些信息必须作为状态存下来？
- 哪些信息只需要给链下系统消费？
- 哪些信息完全可以从现有状态推导？

这个练习能让你对“什么应该落链、什么应该作为输出”有更稳的判断。

### 实验四：读一次 gas report

很多人跑过 gas report，但没有真正读懂。  
你的目标不是“看到数字”，而是能说出：

- 哪个函数最贵
- 贵在哪类资源
- 是设计问题还是实现问题
- 有没有值得做的优化

只要你能对着 gas report 讲出这些话，你就已经比只会说“链上好贵”的阶段更进一步了。

## 继续深入看什么

### 必读

- [EVM Overview](https://ethereum.org/developers/docs/evm/)
- [evm.codes](https://www.evm.codes/)
- [Solidity Storage Layout](https://docs.soliditylang.org/en/latest/internals/layout_in_storage.html)

### 进阶

- [Ethereum Yellow Paper](https://ethereum.github.io/yellowpaper/paper.pdf)
- [Solidity Internals](https://docs.soliditylang.org/en/latest/internals/layout_in_storage.html)
- [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559)

### 实战

- 写两个版本的合约并记录 gas report：一个朴素实现，一个做适度优化，然后解释为什么数据不同。
- 挑一个你熟悉的合约函数，尝试从“stack / memory / storage / calldata”的视角重新解释它。
