# 状态与数据区域

## 先理解什么

很多前端开发者第一次学 Solidity 时，会自然地把它理解成“JavaScript/TypeScript 风格语法 + 一些特殊关键字”。这种理解只能帮助你看懂表面，很难帮你设计出好的合约。

Solidity 真正的关键，是每一段数据都要对应到明确的数据区域和生命周期。你写的不只是变量，而是在决定：

- 它是不是链上长期状态
- 它是不是当前执行过程的临时值
- 它是不是来自外部调用的只读输入
- 它会不会影响 gas 成本
- 它会不会影响可读性和安全边界

所以学 Solidity，最好的切入点不是从 `uint256` 或 `mapping` 的语法表开始，而是先从“数据住在哪里”开始。

## 为什么重要

理解数据区域以后，很多你原来只是死记的现象都会变得有解释：

- 为什么改 `storage` 要消耗真实 gas
- 为什么 `view` 读取状态通常不需要用户直接付费
- 为什么复杂参数常常建议写成 `calldata`
- 为什么你能点查 `mapping[key]`，却不能天然拿到“全部 key”
- 为什么同样是一段逻辑，写在 memory 和 storage 上的成本和语义差异很大

一旦没有这层理解，你写出的合约即使能跑，也很容易出现三类问题：

- 状态冗余，导致不必要的写入成本
- 边界模糊，导致主状态和链下展示职责混乱
- 安全脆弱，导致权限、失败路径和外部依赖没有被明确表达

## 核心机制

### 1. Storage 是合约真正的长期记忆

合约部署到链上以后，最核心的价值就是它能持有持久化状态。Solidity 里凡是要在交易结束后仍然保留下来的信息，最终都要落在 storage 上。

典型例子包括：

```solidity
mapping(address => uint256) public balances;
address public owner;
uint256 public totalSupply;
```

这些值的共同特征是：

- 它们属于合约的长期状态
- 下一笔交易还能继续读取
- 写入它们需要付出真实 gas 成本

这也是为什么 Solidity 合约设计的首要问题通常不是“函数怎么写”，而是“哪些信息值得变成长期状态”。

### 2. Memory 是当前执行里的临时工作区

`memory` 最适合承载当前函数执行过程中的临时数据。它可以修改，但生命周期只持续到本次调用结束。

常见场景包括：

- 构造临时数组
- 处理函数内部的中间结果
- 把某些结构体作为副本拉到当前上下文里操作

例如：

```solidity
function sum(uint256[] memory values) public pure returns (uint256 total) {
  for (uint256 i = 0; i < values.length; i++) {
    total += values[i];
  }
}
```

这里的数组只服务于当前执行，不需要在链上长期保存，因此不应该落进 storage。

### 3. Calldata 是外部调用带进来的只读输入

`calldata` 对前端开发者尤其值得重视，因为你平时用 ABI 构造出来的参数，最终就是以 calldata 的形式进入合约。

它的几个关键特征是：

- 来自外部调用
- 只读
- 不会像 `memory` 那样天然可改
- 在很多场景下更节省，因为不需要先复制到可变内存

例如：

```solidity
function batchTransfer(address[] calldata users, uint256[] calldata amounts) external {
  for (uint256 i = 0; i < users.length; i++) {
    _transfer(msg.sender, users[i], amounts[i]);
  }
}
```

这类只读输入如果没有修改需求，通常用 `calldata` 比先拷贝到 `memory` 更自然。

### 4. `mapping` 是状态结构，不是数据库表

你会在几乎所有真实协议里大量看到 `mapping`：

```solidity
mapping(address => uint256) public balances;
mapping(uint256 => address) private owners;
mapping(address => bool) public whitelist;
```

原因很简单：链上最常见的问题本来就是“给定 key 查 value”。`mapping` 对这件事非常高效，但它有一个天然代价：它不适合在链上做完整枚举。

因此你需要形成一个成熟判断：

- 如果业务需要高频点查，`mapping` 往往很适合
- 如果业务需要链上完整遍历，你要非常谨慎，因为这通常意味着更高成本和更复杂的状态设计

很多前端工程师第一次写合约时会问：“为什么我存了数据，却拿不出全部列表？”答案往往不是“你哪里写错了”，而是“你选择的是适合点查的状态结构，不是通用数据库模型”。

### 5. Event 是链下接口，不是主状态

Solidity 里 event 很常见：

```solidity
event Deposited(address indexed user, uint256 amount);
event Withdrawn(address indexed user, uint256 amount);
```

它的价值很大，因为前端、索引器、分析系统和通知系统都能通过 event 获取执行记录。但 event 的职责是暴露执行结果给链下系统，不是替代主状态。

正确的分工应该是：

- storage 负责链上真实状态
- event 负责高效暴露给链下消费

如果你为了省状态写入，强行把本来需要长期持有的关键信息只放在 event 里，短期看似轻量，长期会让系统边界变得很糟。

### 6. Error、Modifier 和 Visibility 都在表达边界

很多人一开始把这些语法点看成“语法补充”，其实它们都在表达边界。

例如：

```solidity
error NotOwner();

modifier onlyOwner() {
  if (msg.sender != owner) revert NotOwner();
  _;
}
```

这里做的不是“写法好看”，而是在编码：

- 谁能调用
- 错误如何暴露
- 失败路径是否清晰

同样地，`public`、`external`、`internal`、`private` 也不仅是访问修饰，而是接口设计的一部分。你应该越来越习惯从“对外暴露了什么边界”来看它们。

## 工程判断

学习 Solidity 最有价值的改变，是把“语法思维”切换成“状态思维”。

以后当你要写一个新合约时，先问下面这些问题：

1. 哪些值必须长期持久化？
2. 哪些值只是执行中的临时中间产物？
3. 哪些参数只应该作为输入读一次？
4. 哪些信息适合进 event，而不是写入主状态？
5. 哪些状态是冗余的，可以从别的值推导出来？
6. 哪些操作必须受权限保护？

一旦你用这组问题先审视合约设计，代码质量通常会自然提升。

再进一步，当你开始读 OpenZeppelin 或真实协议源码时，不要只看“它怎么写的”，更要看“它为什么把这段状态放在这里、为什么这段接口这样暴露、为什么这里宁愿写得啰嗦一些也不偷懒”。这才是 Solidity 从入门走向成熟的转折点。
