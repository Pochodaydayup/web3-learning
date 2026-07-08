# 第 8 章延伸阅读

## 必读

- Solidity 和 EVM 资料中关于 `address.code`、`EXTCODESIZE`、`EXTCODEHASH` 的说明
- 合约创建、runtime code 与 init code 的官方或权威文档
- EIP-6780 对 `SELFDESTRUCT` 语义变化的说明

## 进阶

- EIP-1052 与 code hash 相关资料
- 代理模式、工厂模式和 `CREATE2` 的部署阅读材料
- 常见 `isContract` 误用的安全文章

## 实战

- 用区块浏览器或脚本检查一组地址的 code 相关信息
- 追踪一个代理协议的实现地址变化历史
- 为一个依赖 `isContract` 的限制逻辑写 review note
