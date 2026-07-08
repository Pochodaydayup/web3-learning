# 第 6 章：合约创建与部署路径

EVM 前几章已经把执行模型、调用上下文、存储布局、回滚数据和字节码关系铺起来了。现在该把它们汇到另一个关键问题上：一个合约地址到底是怎么诞生的，部署时 EVM 在执行什么，为什么 init code 和 runtime code 是两套东西。

## 本章要解决什么

本章要解决的是“部署合约时到底发生了什么，以及为什么部署失败、地址计算、构造参数和运行时代码都和普通函数调用完全不同”这个问题。你会把 CREATE、init code、constructor、runtime code 和 address derivation 串成一条完整的创建路径。

## 读完后你应该会什么

- 理解合约创建和普通调用的关键差别
- 知道 init code 如何产生 runtime code
- 解释部署地址为什么可预测，以及哪些条件会影响它
- 更好理解部署失败、构造参数错误和 factory 模式

## 本章目录

1. [CREATE、init code 与 runtime code 到底怎样协作](./create-opcode-and-init-code)
2. [练习题](./exercises)
3. [项目实践](./practice)
4. [延伸阅读](./reading)

## 练习与实践入口

这一章特别适合结合你已经写过的部署脚本和浏览器 bytecode 页面来学。只要把“部署也是一次 EVM 执行”想清楚，很多以前觉得抽象的行为都会落地。

## 延伸阅读入口

理解合约创建之后，你对 factory、proxy、deterministic deployment 这些主题也会更容易进入。
