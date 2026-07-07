# 第 1 章练习题

## 概念题

1. `storage`、`memory`、`calldata` 的生命周期和可变性分别是什么？
2. 为什么 `mapping(address => uint256)` 很适合余额系统，却不适合链上完整列表展示？
3. `public` 状态变量除了“可读”以外，还有什么接口层含义？
4. 为什么说 event 不能直接替代主状态？

## 分析题

1. 设计一个最小 Bank 合约时，哪些数据必须进 storage，哪些不需要？
2. 如果某业务同时在 storage 里保存余额列表，又在 event 里重复记录同样的信息，请分析这样设计的利弊。
3. 某函数参数使用 `memory`，但函数内部从未修改这些参数。请分析它是否更适合改成 `calldata`，以及这种调整意味着什么。

## 代码题

1. 写一个 `TodoList` 合约，至少包含：
   - `struct Todo`
   - `mapping(address => Todo[])`
   - `createTodo`
   - `toggleTodo`
2. 给上面的合约补一个 `event TodoCreated`，并说明它为什么不能替代 `todos` 主状态。
3. 写一个最小 `OwnableBank` 合约，要求：
   - 用户可存款
   - 只有 owner 可执行某个管理动作
   - 使用 custom error 表达权限失败
