# 卷四：EVM 原理

这一卷要把你从“会写 Solidity”继续往下带一层，进入真正的执行环境。很多人学合约开发时，知道 `storage` 贵、`memory` 便宜、`calldata` 更省，但只停留在结论层。要想真正理解 gas、优化和一些底层设计，这一卷必须补上。

## 这一卷解决什么

你会建立一套更清晰的 EVM 执行心智模型：stack 怎么参与操作，memory 和 calldata 怎样在一次调用里配合，storage 为什么贵，字节码和 opcode 在工程理解上应该怎么看。你不需要一开始就手写汇编，但至少要能把高级语言表达重新映射到底层资源结构。

## 建议阅读顺序

1. 先读第 1 章，建立 stack、memory、storage、calldata 的最小模型。
2. 再把你前面写过的 Solidity 合约拿出来，逐段思考它会落到哪些底层资源。
3. 遇到 gas 问题时，不要急着找技巧，先回到执行资源模型。

## 本卷章节

- [第 1 章 EVM 执行模型](./chapter-01-evm-execution-model/)
- [第 2 章 Opcode 与调用上下文](./chapter-02-call-context-and-opcodes/)
- [第 3 章 存储布局与 Slot](./chapter-03-storage-slots-and-layout/)
- 第 4 章 低级调用、返回数据与回滚
- 第 5 章 字节码、部署代码与运行时代码

这卷会成为你后面学 Gas、安全和协议源码时的底层参考层。
