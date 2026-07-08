# 第 8 章项目实践

## 实践目标

这次实践要做的是：从一次真实顺序敏感交互出发，解释谁在影响它的最终执行结果。

## 操作步骤

1. 选择一个场景，例如：
   - swap
   - liquidation
   - NFT mint
   - arbitrage-sensitive interaction
2. 画出它从用户点击到最终进块的链路：
   - 钱包签名
   - RPC 广播
   - public / private order flow
   - builder 候选区块
   - proposer 选择
3. 标记其中哪些环节可能改变顺序或暴露价值。
4. 评估页面参数是否足够保护用户：
   - slippage
   - deadline
   - route selection
   - 风险提示
5. 最后写一页复盘，说明如果你来优化这个流程，会先改哪三个地方。

## 交付物

你应该交付：

1. 一张交易排序路径图
2. 一份 MEV 风险点清单
3. 一页用户保护策略建议
