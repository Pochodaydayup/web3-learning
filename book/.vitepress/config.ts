import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "Web3 前端转全栈书",
  description: "给已经做过 dApp 的前端开发者的长期学习型 Web3 工程书",
  base: "/web3-learning/",
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: "前言", link: "/preface" },
      { text: "学习地图", link: "/learning-map" },
      { text: "全书目录", link: "/full-toc" },
      { text: "100 天计划", link: "/part-10-training/chapter-01-roadmap-and-100-days/" },
      { text: "附录", link: "/appendix/resources" }
    ],
    search: {
      provider: "local"
    },
    outline: {
      level: [2, 3],
      label: "本页目录"
    },
    docFooter: {
      prev: "上一页",
      next: "下一页"
    },
    sidebar: [
      {
        text: "开始阅读",
        items: [
          { text: "首页", link: "/" },
          { text: "前言", link: "/preface" },
          { text: "怎么读这本书", link: "/how-to-read" },
          { text: "学习地图", link: "/learning-map" },
          { text: "全书目录", link: "/full-toc" },
          { text: "学习方法", link: "/study-method" },
          { text: "源码阅读指南", link: "/source-code-reading-guide" }
        ]
      },
      {
        text: "卷一：基础",
        items: [
          { text: "卷一导读", link: "/part-1-foundations/" },
          { text: "第 1 章 交易心智模型", link: "/part-1-foundations/chapter-01-transaction-mental-model/" },
          { text: "第 2 章 账户模型与 Nonce", link: "/part-1-foundations/chapter-02-account-model-and-nonce/" },
          { text: "第 3 章 Gas Fee、Receipt 与 Revert", link: "/part-1-foundations/chapter-03-gas-fee-and-receipt/" },
          { text: "第 4 章 Event、Log 与链下索引", link: "/part-1-foundations/chapter-04-events-logs-and-indexing/" },
          { text: "第 5 章 前端状态管理里的链上异步模型", link: "/part-1-foundations/chapter-05-chain-async-state-management/" },
          { text: "第 6 章 RPC 一致性与多数据源读取", link: "/part-1-foundations/chapter-06-rpc-consistency-and-multi-source-reads/" },
          { text: "第 7 章 钱包、Provider、链切换与权限边界", link: "/part-1-foundations/chapter-07-wallet-providers-chain-switching-and-permissions/" }
        ]
      },
      {
        text: "卷二：Solidity",
        items: [
          { text: "卷二导读", link: "/part-2-solidity/" },
          { text: "第 1 章 Solidity 与状态基础", link: "/part-2-solidity/chapter-01-solidity-state-foundations/" },
          { text: "第 2 章 Function、Event、Error 与边界设计", link: "/part-2-solidity/chapter-02-functions-events-and-errors/" },
          { text: "第 3 章 OpenZeppelin 与标准代币", link: "/part-2-solidity/chapter-03-openzeppelin-and-standard-tokens/" },
          { text: "第 4 章 升级模式与初始化", link: "/part-2-solidity/chapter-04-upgradeability-and-initialization/" },
          { text: "第 5 章 合约设计中的状态机思维", link: "/part-2-solidity/chapter-05-state-machine-thinking/" },
          { text: "第 6 章 模块化、继承与组合", link: "/part-2-solidity/chapter-06-modularity-inheritance-and-composition/" },
          { text: "第 7 章 ETH 流转、`receive` 与 `fallback`", link: "/part-2-solidity/chapter-07-ether-flow-receive-and-fallback/" }
        ]
      },
      {
        text: "卷三：Foundry",
        items: [
          { text: "卷三导读", link: "/part-3-foundry/" },
          { text: "第 1 章 Foundry 工程工作流", link: "/part-3-foundry/chapter-01-foundry-engineering-workflow/" },
          { text: "第 2 章 Forge Test、Fuzz 与 Fork", link: "/part-3-foundry/chapter-02-testing-fuzz-and-fork/" },
          { text: "第 3 章 Script、部署与验证", link: "/part-3-foundry/chapter-03-scripts-deploy-and-verify/" },
          { text: "第 4 章 调试、Trace 与 Gas 报告", link: "/part-3-foundry/chapter-04-debugging-trace-and-gas/" },
          { text: "第 5 章 更完整的 CI 与工程自动化", link: "/part-3-foundry/chapter-05-ci-and-engineering-automation/" },
          { text: "第 6 章 发布管理与多网络交付", link: "/part-3-foundry/chapter-06-release-management-and-multi-network-delivery/" },
          { text: "第 7 章 依赖管理与可复现环境", link: "/part-3-foundry/chapter-07-dependencies-and-reproducible-environments/" }
        ]
      },
      {
        text: "卷四：EVM",
        items: [
          { text: "卷四导读", link: "/part-4-evm/" },
          { text: "第 1 章 EVM 执行模型", link: "/part-4-evm/chapter-01-evm-execution-model/" },
          { text: "第 2 章 Opcode 与调用上下文", link: "/part-4-evm/chapter-02-call-context-and-opcodes/" },
          { text: "第 3 章 存储布局与 Slot", link: "/part-4-evm/chapter-03-storage-slots-and-layout/" },
          { text: "第 4 章 低级调用、返回数据与回滚", link: "/part-4-evm/chapter-04-low-level-calls-and-revert-data/" },
          { text: "第 5 章 字节码、部署代码与运行时代码", link: "/part-4-evm/chapter-05-bytecode-and-selectors/" },
          { text: "第 6 章 合约创建与部署路径", link: "/part-4-evm/chapter-06-contract-creation-and-deployment-path/" },
          { text: "第 7 章 预编译合约与密码学原语", link: "/part-4-evm/chapter-07-precompiles-and-crypto-primitives/" }
        ]
      },
      {
        text: "卷五：Gas",
        items: [
          { text: "卷五导读", link: "/part-5-gas/" },
          { text: "第 1 章 Gas 成本心智模型", link: "/part-5-gas/chapter-01-gas-cost-mental-model/" },
          { text: "第 2 章 Storage 布局与 Packing", link: "/part-5-gas/chapter-02-storage-layout-and-packing/" },
          { text: "第 3 章 常见优化手法与收益判断", link: "/part-5-gas/chapter-03-optimization-patterns-and-tradeoffs/" },
          { text: "第 4 章 批处理、循环与复杂度", link: "/part-5-gas/chapter-04-batching-loops-and-complexity/" },
          { text: "第 5 章 可读性、可维护性与优化取舍", link: "/part-5-gas/chapter-05-readability-maintainability-and-tradeoffs/" },
          { text: "第 6 章 测量、剖析与基准测试", link: "/part-5-gas/chapter-06-measuring-profiling-and-benchmarking/" },
          { text: "第 7 章 L1 / L2 费用模型与 Calldata 成本", link: "/part-5-gas/chapter-07-l1-l2-fee-models-and-calldata/" }
        ]
      },
      {
        text: "卷六：安全",
        items: [
          { text: "卷六导读", link: "/part-6-security/" },
          { text: "第 1 章 安全审查基础", link: "/part-6-security/chapter-01-security-review-basics/" },
          { text: "第 2 章 签名、重放与 Delegatecall", link: "/part-6-security/chapter-02-signatures-replay-and-delegatecall/" },
          { text: "第 3 章 Oracle、Flash Loan 与 MEV 风险", link: "/part-6-security/chapter-03-oracle-flash-loan-and-mev/" },
          { text: "第 4 章 升级、代理与初始化风险", link: "/part-6-security/chapter-04-upgrade-proxy-and-init-risks/" },
          { text: "第 5 章 安全测试与审计协作", link: "/part-6-security/chapter-05-security-testing-and-audit-collaboration/" },
          { text: "第 6 章 监控、响应与运营安全", link: "/part-6-security/chapter-06-monitoring-response-and-operational-security/" },
          { text: "第 7 章 不变量、威胁建模与形式化思维", link: "/part-6-security/chapter-07-invariants-threat-modeling-and-formal-reasoning/" }
        ]
      },
      {
        text: "卷七：Ethereum 底层",
        items: [
          { text: "卷七导读", link: "/part-7-ethereum-internals/" },
          { text: "第 1 章 交易、区块与状态", link: "/part-7-ethereum-internals/chapter-01-transaction-block-state/" },
          { text: "第 2 章 Mempool、重组与最终性", link: "/part-7-ethereum-internals/chapter-02-mempool-reorg-and-finality/" },
          { text: "第 3 章 Trie 与 State Root", link: "/part-7-ethereum-internals/chapter-03-trie-and-state-root/" },
          { text: "第 4 章 Gas Limit、Base Fee 与打包激励", link: "/part-7-ethereum-internals/chapter-04-gas-limit-base-fee-and-inclusion/" },
          { text: "第 5 章 共识、验证者与最终性基础", link: "/part-7-ethereum-internals/chapter-05-consensus-validators-and-finality/" },
          { text: "第 6 章 客户端、同步与数据可用性", link: "/part-7-ethereum-internals/chapter-06-clients-sync-and-data-availability/" },
          { text: "第 7 章 Rollup、桥与结算层", link: "/part-7-ethereum-internals/chapter-07-rollups-bridges-and-settlement/" }
        ]
      },
      {
        text: "卷八：DeFi",
        items: [
          { text: "卷八导读", link: "/part-8-defi/" },
          { text: "第 1 章 DeFi 基础积木", link: "/part-8-defi/chapter-01-defi-primitives/" },
          { text: "第 2 章 AMM 与流动性池设计", link: "/part-8-defi/chapter-02-amm-design/" },
          { text: "第 3 章 借贷、抵押与清算", link: "/part-8-defi/chapter-03-lending-collateral-and-liquidation/" },
          { text: "第 4 章 Oracle、TWAP 与价格操纵", link: "/part-8-defi/chapter-04-oracle-twap-and-manipulation/" },
          { text: "第 5 章 MEV、套利与协议设计约束", link: "/part-8-defi/chapter-05-mev-arbitrage-and-protocol-constraints/" },
          { text: "第 6 章 稳定币、锚定与系统性风险", link: "/part-8-defi/chapter-06-stablecoins-peg-and-systemic-risk/" },
          { text: "第 7 章 Vault、策略与收益聚合", link: "/part-8-defi/chapter-07-vaults-strategies-and-yield/" }
        ]
      },
      {
        text: "卷九：协议源码阅读",
        items: [
          { text: "卷九导读", link: "/part-9-protocol-reading/" },
          { text: "第 1 章 如何读真实协议", link: "/part-9-protocol-reading/chapter-01-reading-real-protocols/" },
          { text: "第 2 章 OpenZeppelin 阅读法", link: "/part-9-protocol-reading/chapter-02-reading-openzeppelin/" },
          { text: "第 3 章 阅读 Uniswap V2", link: "/part-9-protocol-reading/chapter-03-reading-uniswap-v2/" },
          { text: "第 4 章 Aave 借贷主线阅读法", link: "/part-9-protocol-reading/chapter-04-reading-aave/" },
          { text: "第 5 章 EigenLayer 与复杂系统阅读策略", link: "/part-9-protocol-reading/chapter-05-reading-eigenlayer/" },
          { text: "第 6 章 阅读 Uniswap V3", link: "/part-9-protocol-reading/chapter-06-reading-uniswap-v3/" },
          { text: "第 7 章 阅读 MakerDAO", link: "/part-9-protocol-reading/chapter-07-reading-makerdao/" }
        ]
      },
      {
        text: "卷十：训练与实战",
        items: [
          { text: "卷十导读", link: "/part-10-training/" },
          { text: "第 1 章 项目路线与 100 天计划", link: "/part-10-training/chapter-01-roadmap-and-100-days/" },
          { text: "第 2 章 面试题系统与输出节奏", link: "/part-10-training/chapter-02-interview-system-and-output/" },
          { text: "第 3 章 项目复盘与作品资产化", link: "/part-10-training/chapter-03-project-review-and-portfolio/" },
          { text: "第 4 章 作品集与源码笔记仓库", link: "/part-10-training/chapter-04-portfolio-and-notes-repository/" },
          { text: "第 5 章 持续迭代的长期学习系统", link: "/part-10-training/chapter-05-long-term-learning-system/" },
          { text: "第 6 章 协作、简历与求职路径", link: "/part-10-training/chapter-06-collaboration-resume-and-job-search/" },
          { text: "第 7 章 开源贡献与公开可信度", link: "/part-10-training/chapter-07-open-source-and-public-credibility/" }
        ]
      },
      {
        text: "附录",
        items: [
          { text: "资料索引", link: "/appendix/resources" },
          { text: "常见问题", link: "/appendix/faq" },
          { text: "术语表", link: "/appendix/glossary" }
        ]
      }
    ]
  }
});
