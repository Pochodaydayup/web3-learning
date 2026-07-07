# 安全（旧路径）

旧版安全页已经迁移到新的“卷六：智能合约安全”。新版按章节拆分了正文、练习、项目实践和延伸阅读，更适合系统训练。

## 新入口

建议直接从新版入口进入：

- [卷六导读](/part-6-security/)
- [第 1 章 安全审查基础](/part-6-security/chapter-01-security-review-basics/)
- [重入与权限控制](/part-6-security/chapter-01-security-review-basics/reentrancy-and-access-control)

## 练习题

新版练习题在这里：

- [第 1 章练习题](/part-6-security/chapter-01-security-review-basics/exercises)

## 项目实践

建议你直接用自己的小合约做一次安全走查：

- [第 1 章项目实践](/part-6-security/chapter-01-security-review-basics/practice)

## 延伸阅读

相关资料与后续深入入口：

- [第 1 章延伸阅读](/part-6-security/chapter-01-security-review-basics/reading)
- [资料索引](/appendix/resources)
- 外部合约的恶意行为
- 权限绕过
- 价格或状态瞬时扭曲

所以测试全绿不等于安全。  
没有攻击视角的测试，往往只能说明“理想用户场景是对的”。

### 误区三：把安全理解成“高深黑客技术”

很多真实事故并不神秘，反而非常朴素：

- 权限没加
- 顺序写反
- 签名边界不全
- 初始化没锁
- 升级入口暴露

安全思维不是“变成顶级攻防专家”，而是先学会系统性地怀疑自己的假设。

### 误区四：觉得项目小就没人打

链上攻击的一个现实是：  
很多系统一旦资产可得、路径明确，攻击者不会因为它“小”就放过它。

更何况小项目通常防守更薄弱。  
所以“项目不大、应该没事”并不是风险判断，而是一种自我安慰。

## 怎么练

### 练习一：故意写一个可重入的 Bank

这是最经典、也最值得做的练习。  
你可以：

1. 写一个简单存取款合约
2. 故意把“先转账、后改状态”写进去
3. 再写一个攻击合约去重入它
4. 最后把它修成“先改状态、后外部调用”并加防护

只要你亲手做过一次，重入就不再只是名词。

### 练习二：检查权限边界

给自己一个简单系统，比如金库或投票合约，列出所有关键函数：

- 初始化
- 提现
- 参数修改
- 暂停
- 恢复
- 升级

然后逐个写清楚：

- 谁能调
- 凭什么能调
- 调完影响什么

这个练习能让你开始形成权限图谱，而不是只在函数头上补 modifier。

### 练习三：写一次签名校验

自己设计一个最小签名授权流程，并强制把下面这些都纳入考虑：

- signer
- nonce
- deadline
- chain id
- contract address
- action payload

只要你把这些边界真正思考一遍，后面看到 permit、订单签名、白名单签名都会更清楚。

### 练习四：写安全审查笔记

挑一个最小合约，哪怕只有几十行，也按下面结构做一次审查：

- 核心状态是什么
- 哪些函数能改状态
- 哪些地方有外部调用
- 哪些输入来自不可信来源
- 哪些地方依赖外部价格或外部结果
- 哪些地方需要权限保护

这类笔记会非常直接地提升你的风险敏感度。

## 继续深入看什么

### 必读

- [OpenZeppelin Security](https://docs.openzeppelin.com/contracts/4.x/api/security)
- [Solidity Security Considerations](https://docs.soliditylang.org/en/latest/security-considerations.html)
- [Smart Contract Best Practices Archive](https://consensysdiligence.github.io/smart-contract-best-practices/)

### 进阶

- [Cyfrin Updraft](https://updraft.cyfrin.io/)
- [SWC Registry](https://swcregistry.io/)
- [Damn Vulnerable DeFi](https://www.damnvulnerabledefi.xyz/)

### 实战

- 选一个最小金库合约，分别从重入、权限、签名三个角度写一份审查笔记。
- 挑一篇真实安全事故复盘，按“前提 -> 攻击路径 -> 被利用假设 -> 如何修复”重写成你自己的版本。
