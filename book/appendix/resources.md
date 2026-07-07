# 资料索引

这份索引不是为了堆链接，而是为了给你提供一张“从主干路径继续向下深挖”的地图。  
如果你已经按本书顺序阅读过主章节，可以把这里当作长期参考手册。

## 官方文档

这些是最值得优先建立长期连接的官方资料：

- [Ethereum Developer Docs](https://ethereum.org/developers/docs/)
- [Solidity 官方文档](https://docs.soliditylang.org/en/latest/)
- [Foundry Book](https://book.getfoundry.sh/)
- [OpenZeppelin Docs](https://docs.openzeppelin.com/contracts)
- [EIPs](https://eips.ethereum.org/)

如果你只能稳定跟 4 到 5 份资料，优先保留这些。

## Solidity 与状态

- [Solidity By Example](https://solidity-by-example.org/)
- [Solidity ABI Specification](https://docs.soliditylang.org/en/latest/abi-spec.html)
- [Solidity Storage Layout](https://docs.soliditylang.org/en/latest/internals/layout_in_storage.html)
- [OpenZeppelin Contracts](https://github.com/OpenZeppelin/openzeppelin-contracts)

适合什么时候看：

- 你已经开始自己写合约
- 你对数据区域和状态布局产生具体疑问
- 你开始想读标准实现

## EVM 与执行模型

- [EVM Overview](https://ethereum.org/developers/docs/evm/)
- [evm.codes](https://www.evm.codes/)
- [Ethereum Yellow Paper](https://ethereum.github.io/yellowpaper/paper.pdf)
- [Patricia Merkle Trie 资料](https://ethereum.org/developers/docs/data-structures-and-encoding/patricia-merkle-trie/)

适合什么时候看：

- 你想弄清 stack / memory / storage / calldata
- 你开始认真对待 gas 差异
- 你想更系统地理解执行过程

## 安全与工程

- [Solidity Security Considerations](https://docs.soliditylang.org/en/latest/security-considerations.html)
- [OpenZeppelin Security](https://docs.openzeppelin.com/contracts/4.x/api/security)
- [SWC Registry](https://swcregistry.io/)
- [Cyfrin Updraft](https://updraft.cyfrin.io/)
- [Damn Vulnerable DeFi](https://www.damnvulnerabledefi.xyz/)

适合什么时候看：

- 你已经会写基础合约，开始关心安全
- 你想把安全从“漏洞词汇”变成“系统判断”
- 你准备补强测试和攻击复现能力

## 源码阅读

- [OpenZeppelin Contracts](https://github.com/OpenZeppelin/openzeppelin-contracts)
- [Uniswap V2 Core](https://github.com/Uniswap/v2-core)
- [Uniswap V3 Core](https://github.com/Uniswap/v3-core)
- [Aave V3 Core](https://github.com/aave/aave-v3-core)

建议顺序：

1. OpenZeppelin 的 `ERC20`、`Ownable`、`AccessControl`
2. Proxy 与 UUPS
3. Uniswap V2
4. Aave 或 Uniswap V3

## 实战训练

- [Paradigm CTF Archive](https://github.com/paradigmxyz/paradigm-ctf)
- [Ethernaut](https://ethernaut.openzeppelin.com/)
- [Damn Vulnerable DeFi](https://www.damnvulnerabledefi.xyz/)
- [Capture The Ether Archive](https://capturetheether.com/)

如果你想通过题目训练安全感觉，这一组资料非常适合。
