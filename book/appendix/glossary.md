# 术语表

## 术语表

- **ABI**：Application Binary Interface，合约与外部世界交互时使用的接口编码规范。
- **Allowance**：ERC20 中授权某个地址代为转账的额度记录。
- **Calldata**：外部调用传给合约的只读输入区域。
- **Delegatecall**：在当前合约上下文里执行另一个合约代码的低级调用方式。
- **EIP**：Ethereum Improvement Proposal，以太坊改进提案。
- **ERC20**：最常见的可替代代币接口标准。
- **ERC721**：最常见的 NFT 接口标准。
- **Event / Log**：合约执行时发给链下世界消费的事件输出记录。
- **EVM**：Ethereum Virtual Machine，以太坊智能合约执行环境。
- **Fork Test**：在本地分叉真实链状态后进行的测试方式。
- **Gas**：执行链上操作所需的资源计费单位。
- **Getter**：对外提供状态读取能力的访问接口，`public` 状态变量会自动生成对应 getter。
- **Invariant**：系统在任意合法执行路径下都应该保持成立的条件。
- **Mempool**：待打包交易传播与排队的区域。
- **Nonce**：账户发送交易时使用的递增计数器。
- **Opcode**：EVM 可执行的低级操作指令。
- **Oracle**：为链上系统提供外部信息或价格输入的机制。
- **Receipt**：交易执行后的结果摘要，包含状态、gas 使用和 logs 等信息。
- **Reentrancy**：合约在外部调用后被再次进入原逻辑路径，导致状态被重复利用的风险。
- **Slot**：EVM storage 的逻辑存储单元。
- **State Root**：某一区块执行完成后，全局状态对应的根哈希。
- **Storage**：合约持久化链上状态所在的数据区域。
- **Trace**：交易执行过程的逐步调用与操作轨迹。
