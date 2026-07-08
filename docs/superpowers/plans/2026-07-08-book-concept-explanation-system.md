# Web3 Book Concept Explanation System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a consistent concept explanation system across the full Markdown book so every chapter introduces core terms clearly, every main page strengthens first-contact understanding, and the glossary becomes a stable cross-book reference.

**Architecture:** Keep the existing ten-volume, eight-chapter manuscript structure intact and work directly in the current workspace because the user explicitly asked not to use worktrees. The implementation modifies chapter `index.md` files to add `## 本章核心概念`, strengthens the first substantial concept explanations in each main chapter page, expands `book/appendix/glossary.md` into grouped reference sections, and updates `scripts/validate-book.mjs` so the new heading contract becomes part of the docs QA loop.

**Tech Stack:** Node.js, npm scripts, VitePress, Markdown, Mermaid, Git

---

## File Structure

### `book/part-1-foundations`

Responsible for transaction flow, account model, gas, logs, async state, RPC consistency, wallet providers, and simulation. Modify all eight chapter `index.md` files to add chapter-level concept orientation and all eight main pages to strengthen first-contact explanations for the core concepts that frontend developers usually gloss over.

### `book/part-2-solidity`

Responsible for Solidity state, function boundaries, standards, upgrades, state machines, composition, Ether flow, and iterable data patterns. Modify all eight chapter `index.md` files plus all eight main pages so this volume becomes the stable concept bridge from frontend interaction into contract reasoning.

### `book/part-3-foundry`

Responsible for the contract engineering workflow, testing modes, deploy scripts, debugging, CI, release operations, reproducibility, and security tooling. Modify all eight chapter `index.md` files plus all eight main pages so toolchain terms become explicit and reusable instead of being assumed from context.

### `book/part-4-evm`

Responsible for the execution model, call context, storage layout, low-level calls, selectors, deployment bytecode, precompiles, and code introspection. Modify all eight chapter `index.md` files plus all eight main pages so the reader gets stable mental models for execution-layer concepts before later gas and security chapters depend on them.

### `book/part-5-gas`

Responsible for gas accounting, layout and packing, optimization tradeoffs, batching, profiling, L1/L2 fee differences, and offchain cost shifting. Modify all eight chapter `index.md` files plus all eight main pages so performance terms are defined in engineering language rather than only implied through examples.

### `book/part-6-security`

Responsible for review basics, replay and delegatecall, oracle and flash-loan risk, proxy upgrades, audit collaboration, monitoring, invariants, and liveness failures. Modify all eight chapter `index.md` files plus all eight main pages so every security concept is introduced with definition, intuition, and operational consequence.

### `book/part-7-ethereum-internals`

Responsible for transactions, mempool behavior, trie and state root, inclusion economics, consensus and finality, clients and sync, rollups and bridges, and MEV block construction. Modify all eight chapter `index.md` files plus all eight main pages so protocol-internal concepts become teachable to the book’s target reader instead of feeling like a separate discipline.

### `book/part-8-defi`

Responsible for DeFi primitives, AMMs, lending, oracle design, MEV constraints, stablecoins, vaults, and perpetuals. Modify all eight chapter `index.md` files plus all eight main pages so the book consistently explains the protocol mechanisms beneath product-level vocabulary.

### `book/part-9-protocol-reading`

Responsible for reading real protocols, OpenZeppelin, Uniswap V2, Aave, EigenLayer, Uniswap V3, MakerDAO, and Curve. Modify all eight chapter `index.md` files plus all eight main pages so source-reading concepts are stable and each protocol chapter explains its distinctive vocabulary instead of assuming the reader already has it.

### `book/part-10-training`

Responsible for roadmap planning, interview output, portfolio building, public notes, long-term learning systems, collaboration signals, open source credibility, and specialization. Modify all eight chapter `index.md` files plus all eight main pages so the book’s career and training language becomes as explicit as its technical language.

### `book/appendix/glossary.md`

Rewrite the current flat glossary into grouped sections with concise, stable, developer-oriented definitions. This file becomes the consistency anchor for the whole concept explanation system.

### `scripts/validate-book.mjs`

Extend validation so every chapter `index.md` must contain `## 本章核心概念`, and `book/appendix/glossary.md` must contain the new grouped glossary section headings.

## Task 1: Add Concept Scaffolding To Volumes 1 And 2

**Files:**
- Modify: `book/part-1-foundations/chapter-01-transaction-mental-model/index.md`
- Modify: `book/part-1-foundations/chapter-01-transaction-mental-model/from-click-to-state.md`
- Modify: `book/part-1-foundations/chapter-02-account-model-and-nonce/index.md`
- Modify: `book/part-1-foundations/chapter-02-account-model-and-nonce/account-nonce-and-ordering.md`
- Modify: `book/part-1-foundations/chapter-03-gas-fee-and-receipt/index.md`
- Modify: `book/part-1-foundations/chapter-03-gas-fee-and-receipt/fee-receipt-and-revert.md`
- Modify: `book/part-1-foundations/chapter-04-events-logs-and-indexing/index.md`
- Modify: `book/part-1-foundations/chapter-04-events-logs-and-indexing/what-events-can-and-cannot-do.md`
- Modify: `book/part-1-foundations/chapter-05-chain-async-state-management/index.md`
- Modify: `book/part-1-foundations/chapter-05-chain-async-state-management/frontend-state-under-chain-latency.md`
- Modify: `book/part-1-foundations/chapter-06-rpc-consistency-and-multi-source-reads/index.md`
- Modify: `book/part-1-foundations/chapter-06-rpc-consistency-and-multi-source-reads/why-data-sources-disagree.md`
- Modify: `book/part-1-foundations/chapter-07-wallet-providers-chain-switching-and-permissions/index.md`
- Modify: `book/part-1-foundations/chapter-07-wallet-providers-chain-switching-and-permissions/wallet-provider-boundaries.md`
- Modify: `book/part-1-foundations/chapter-08-transaction-simulation-and-preflight-checks/index.md`
- Modify: `book/part-1-foundations/chapter-08-transaction-simulation-and-preflight-checks/what-simulation-can-and-cannot-promise.md`
- Modify: `book/part-2-solidity/chapter-01-solidity-state-foundations/index.md`
- Modify: `book/part-2-solidity/chapter-01-solidity-state-foundations/state-and-data-locations.md`
- Modify: `book/part-2-solidity/chapter-02-functions-events-and-errors/index.md`
- Modify: `book/part-2-solidity/chapter-02-functions-events-and-errors/function-boundaries.md`
- Modify: `book/part-2-solidity/chapter-03-openzeppelin-and-standard-tokens/index.md`
- Modify: `book/part-2-solidity/chapter-03-openzeppelin-and-standard-tokens/why-standards-matter.md`
- Modify: `book/part-2-solidity/chapter-04-upgradeability-and-initialization/index.md`
- Modify: `book/part-2-solidity/chapter-04-upgradeability-and-initialization/proxy-init-and-storage-discipline.md`
- Modify: `book/part-2-solidity/chapter-05-state-machine-thinking/index.md`
- Modify: `book/part-2-solidity/chapter-05-state-machine-thinking/modeling-contract-lifecycle.md`
- Modify: `book/part-2-solidity/chapter-06-modularity-inheritance-and-composition/index.md`
- Modify: `book/part-2-solidity/chapter-06-modularity-inheritance-and-composition/how-to-split-contract-responsibilities.md`
- Modify: `book/part-2-solidity/chapter-07-ether-flow-receive-and-fallback/index.md`
- Modify: `book/part-2-solidity/chapter-07-ether-flow-receive-and-fallback/how-eth-enters-and-leaves-contracts.md`
- Modify: `book/part-2-solidity/chapter-08-iteration-enumeration-and-onchain-data-structures/index.md`
- Modify: `book/part-2-solidity/chapter-08-iteration-enumeration-and-onchain-data-structures/why-onchain-state-is-hard-to-list.md`

- [ ] **Step 1: Add `## 本章核心概念` to the eight foundations chapter landing pages**

Insert the new section between `## 读完后你应该会什么` and `## 本章目录` in each foundations `index.md`. Use this exact shape and tailor the terms to the chapter topic:

```md
## 本章核心概念

- **EOA（Externally Owned Account）**：由私钥控制、能够主动发起交易和支付 gas 的账户。
- **Contract Account**：由链上代码控制、负责执行业务逻辑和保存状态的账户。
- **Nonce**：账户级递增计数器，用来约束交易顺序并防止同一交易被简单重放。
```

Foundations chapter focus map:
- `from-click-to-state.md`: transaction lifecycle, signer, RPC, receipt, state transition
- `account-nonce-and-ordering.md`: EOA, contract account, nonce
- `fee-receipt-and-revert.md`: gas limit, gas fee, receipt, revert
- `what-events-can-and-cannot-do.md`: event, log, topic, offchain indexing
- `frontend-state-under-chain-latency.md`: pending, confirmation, finality, async state
- `why-data-sources-disagree.md`: RPC node, consistency, block tag, multi-source read
- `wallet-provider-boundaries.md`: provider, signer, chain switch, permission
- `what-simulation-can-and-cannot-promise.md`: simulation, `eth_call`, gas estimation, preflight

Expected: all eight foundations landing pages gain a reader-orientation block with 4-8 terms that match the chapter rather than generic repeated definitions.

- [ ] **Step 2: Strengthen the first major concept explanations in the eight foundations main pages**

For each page, make the first substantial concept explanation do three jobs in prose: define the term, give intuition, and state the engineering implication. Use this pattern when expanding the page:

```md
### 1. Nonce 是什么

Nonce 是账户级递增计数器，每发出一笔新交易都要消费下一个编号。直觉上可以把它看成“账户自己的排队号”，因为链需要知道同一个发送者的多笔意图谁先谁后。工程上这直接解释了 pending 堵塞、替换交易、取消交易为什么都围绕同一个 nonce 展开。
```

Expected: a frontend engineer can read the first third of each foundations main page without needing to infer the core vocabulary from surrounding examples.

- [ ] **Step 3: Add `## 本章核心概念` to the eight Solidity chapter landing pages**

Insert the same section in each Solidity `index.md`, again between `## 读完后你应该会什么` and `## 本章目录`. Keep every bullet short and book-oriented:

```md
## 本章核心概念

- **Storage**：合约持久化保存链上状态的数据区，写入贵但状态能长期存在。
- **Memory**：一次调用执行期间临时使用的数据区，便宜但调用结束后就消失。
- **Calldata**：外部调用传入合约的只读输入区，适合读取而不适合修改。
```

Solidity chapter focus map:
- `state-and-data-locations.md`: state variable, storage, memory, calldata
- `function-boundaries.md`: visibility, modifier, event, custom error
- `why-standards-matter.md`: ERC20, ERC721, allowance, interface
- `proxy-init-and-storage-discipline.md`: proxy, implementation, initializer, storage layout
- `modeling-contract-lifecycle.md`: state machine, transition, invariant, guard
- `how-to-split-contract-responsibilities.md`: inheritance, composition, module, abstraction
- `how-eth-enters-and-leaves-contracts.md`: receive, fallback, payable, Ether flow
- `why-onchain-state-is-hard-to-list.md`: mapping, enumeration, iterable structure, indexing

Expected: each Solidity chapter preview gives the reader a concept checklist before the deeper contract examples begin.

- [ ] **Step 4: Strengthen the first major concept explanations in the eight Solidity main pages**

Use the same three-part prose rule and make the first encounter with each chapter’s core abstraction explicit. Use this pattern where it fits:

```md
### 1. Storage 是什么

Storage 是合约真正写进链上状态的数据区，调用结束后它仍然存在。直觉上可以把它看成“合约长期保存资料的硬盘”，而不是函数运行时的临时工作台。工程上这意味着任何 `SSTORE` 都会直接影响 gas 成本、状态布局和升级安全。
```

Expected: the Solidity volume reads like a system-building book instead of a syntax notes collection.

- [ ] **Step 5: Run the chapter-heading progress check and docs validator**

Run:

```bash
rg -n "^## 本章核心概念$" book/part-*/*/index.md | wc -l
npm run docs:check
```

Expected: the first command returns `16`, and `npm run docs:check` exits successfully.

- [ ] **Step 6: Commit the phase**

Run:

```bash
git add book/part-1-foundations book/part-2-solidity
git commit -m "docs: add concept scaffolding for foundations and solidity"
```

Expected: the commit succeeds and contains only the intended volume-one and volume-two concept-system edits.

## Task 2: Add Concept Scaffolding To Volumes 3 And 4

**Files:**
- Modify: `book/part-3-foundry/chapter-01-foundry-engineering-workflow/index.md`
- Modify: `book/part-3-foundry/chapter-01-foundry-engineering-workflow/foundry-loop.md`
- Modify: `book/part-3-foundry/chapter-02-testing-fuzz-and-fork/index.md`
- Modify: `book/part-3-foundry/chapter-02-testing-fuzz-and-fork/testing-modes.md`
- Modify: `book/part-3-foundry/chapter-03-scripts-deploy-and-verify/index.md`
- Modify: `book/part-3-foundry/chapter-03-scripts-deploy-and-verify/deploy-repeatability.md`
- Modify: `book/part-3-foundry/chapter-04-debugging-trace-and-gas/index.md`
- Modify: `book/part-3-foundry/chapter-04-debugging-trace-and-gas/trace-first-debugging.md`
- Modify: `book/part-3-foundry/chapter-05-ci-and-engineering-automation/index.md`
- Modify: `book/part-3-foundry/chapter-05-ci-and-engineering-automation/reliable-contract-delivery.md`
- Modify: `book/part-3-foundry/chapter-06-release-management-and-multi-network-delivery/index.md`
- Modify: `book/part-3-foundry/chapter-06-release-management-and-multi-network-delivery/shipping-contracts-with-fewer-surprises.md`
- Modify: `book/part-3-foundry/chapter-07-dependencies-and-reproducible-environments/index.md`
- Modify: `book/part-3-foundry/chapter-07-dependencies-and-reproducible-environments/keeping-foundry-projects-reproducible.md`
- Modify: `book/part-3-foundry/chapter-08-static-analysis-coverage-and-security-tooling/index.md`
- Modify: `book/part-3-foundry/chapter-08-static-analysis-coverage-and-security-tooling/beyond-tests-in-the-contract-toolchain.md`
- Modify: `book/part-4-evm/chapter-01-evm-execution-model/index.md`
- Modify: `book/part-4-evm/chapter-01-evm-execution-model/storage-memory-calldata.md`
- Modify: `book/part-4-evm/chapter-02-call-context-and-opcodes/index.md`
- Modify: `book/part-4-evm/chapter-02-call-context-and-opcodes/call-context.md`
- Modify: `book/part-4-evm/chapter-03-storage-slots-and-layout/index.md`
- Modify: `book/part-4-evm/chapter-03-storage-slots-and-layout/how-layout-maps-to-slots.md`
- Modify: `book/part-4-evm/chapter-04-low-level-calls-and-revert-data/index.md`
- Modify: `book/part-4-evm/chapter-04-low-level-calls-and-revert-data/call-return-and-revert.md`
- Modify: `book/part-4-evm/chapter-05-bytecode-and-selectors/index.md`
- Modify: `book/part-4-evm/chapter-05-bytecode-and-selectors/from-signature-to-runtime.md`
- Modify: `book/part-4-evm/chapter-06-contract-creation-and-deployment-path/index.md`
- Modify: `book/part-4-evm/chapter-06-contract-creation-and-deployment-path/create-opcode-and-init-code.md`
- Modify: `book/part-4-evm/chapter-07-precompiles-and-crypto-primitives/index.md`
- Modify: `book/part-4-evm/chapter-07-precompiles-and-crypto-primitives/special-contracts-inside-the-evm.md`
- Modify: `book/part-4-evm/chapter-08-code-introspection-extcode-and-selfdestruct/index.md`
- Modify: `book/part-4-evm/chapter-08-code-introspection-extcode-and-selfdestruct/what-contract-code-can-and-cannot-tell-you.md`

- [ ] **Step 1: Add `## 本章核心概念` to the eight Foundry chapter landing pages**

Insert the new concept section in each Foundry `index.md`, keeping the bullets focused on toolchain vocabulary instead of product outcomes.

Foundry chapter focus map:
- `foundry-loop.md`: forge, script, reproducibility, feedback loop
- `testing-modes.md`: unit test, fuzz test, invariant test, fork test
- `deploy-repeatability.md`: deploy script, broadcast, verification, idempotency
- `trace-first-debugging.md`: trace, revert data, debugger, gas snapshot
- `reliable-contract-delivery.md`: CI, lint, release gate, automation
- `shipping-contracts-with-fewer-surprises.md`: environment, network config, artifacts, release checklist
- `keeping-foundry-projects-reproducible.md`: dependency pinning, remapping, version drift, deterministic setup
- `beyond-tests-in-the-contract-toolchain.md`: static analysis, coverage, symbolic reasoning, security tooling

Expected: Foundry chapters stop assuming the reader already knows what each tooling term means and when to use it.

- [ ] **Step 2: Strengthen the first major concept explanations in the eight Foundry main pages**

Use the same prose rule as Task 1. A model paragraph for this volume is:

```md
### 1. Fork Test 是什么

Fork test 是在本地把某条真实链的状态复制一份，再在这份分叉状态上运行测试。直觉上可以把它看成“拿主网现场做排练”，而不是只在完全虚构的本地数据上演练。工程上这让你能验证集成行为、真实 token 交互和复杂协议路径，但也要求你明确区块高度与外部依赖。
```

Expected: the Foundry volume becomes understandable to readers who know the word `forge` but have not yet built a disciplined contract workflow.

- [ ] **Step 3: Add `## 本章核心概念` to the eight EVM chapter landing pages**

Insert the same section into every EVM `index.md`.

EVM chapter focus map:
- `storage-memory-calldata.md`: stack, memory, storage, calldata
- `call-context.md`: `msg.sender`, `msg.value`, call context, delegatecall
- `how-layout-maps-to-slots.md`: slot, packing, layout, keccak derivation
- `call-return-and-revert.md`: low-level call, return data, revert data, bubbling
- `from-signature-to-runtime.md`: selector, ABI encoding, bytecode, dispatcher
- `create-opcode-and-init-code.md`: `CREATE`, init code, runtime code, constructor
- `special-contracts-inside-the-evm.md`: precompile, cryptographic primitive, gas schedule
- `what-contract-code-can-and-cannot-tell-you.md`: `EXTCODEHASH`, introspection, selfdestruct semantics, trust boundary

Expected: every EVM landing page previews the vocabulary that later gas and security chapters rely on.

- [ ] **Step 4: Strengthen the first major concept explanations in the eight EVM main pages**

Use this style when reinforcing the first key concept:

```md
### 1. Calldata 是什么

Calldata 是外部调用带进合约的只读输入区，函数参数最初就放在这里。直觉上可以把它看成“用户交给这次调用的封装包裹”，合约可以拆开读，但不会原地改写。工程上这意味着读取 `calldata` 往往比复制到 `memory` 更省成本，也决定了很多函数参数为什么会写成 `calldata`。
```

Expected: the EVM volume explains execution mechanics in an engineer-friendly way without losing low-level correctness.

- [ ] **Step 5: Run the chapter-heading progress check and docs validator**

Run:

```bash
rg -n "^## 本章核心概念$" book/part-*/*/index.md | wc -l
npm run docs:check
```

Expected: the first command returns `32`, and `npm run docs:check` exits successfully.

- [ ] **Step 6: Commit the phase**

Run:

```bash
git add book/part-3-foundry book/part-4-evm
git commit -m "docs: clarify concepts in foundry and evm volumes"
```

Expected: the commit succeeds and isolates the tooling and execution-layer concept edits.

## Task 3: Add Concept Scaffolding To Volumes 5 And 6

**Files:**
- Modify: `book/part-5-gas/chapter-01-gas-cost-mental-model/index.md`
- Modify: `book/part-5-gas/chapter-01-gas-cost-mental-model/why-sstore-hurts.md`
- Modify: `book/part-5-gas/chapter-02-storage-layout-and-packing/index.md`
- Modify: `book/part-5-gas/chapter-02-storage-layout-and-packing/storage-layout.md`
- Modify: `book/part-5-gas/chapter-03-optimization-patterns-and-tradeoffs/index.md`
- Modify: `book/part-5-gas/chapter-03-optimization-patterns-and-tradeoffs/high-value-optimizations.md`
- Modify: `book/part-5-gas/chapter-04-batching-loops-and-complexity/index.md`
- Modify: `book/part-5-gas/chapter-04-batching-loops-and-complexity/cost-growth-and-batching.md`
- Modify: `book/part-5-gas/chapter-05-readability-maintainability-and-tradeoffs/index.md`
- Modify: `book/part-5-gas/chapter-05-readability-maintainability-and-tradeoffs/when-not-to-optimize.md`
- Modify: `book/part-5-gas/chapter-06-measuring-profiling-and-benchmarking/index.md`
- Modify: `book/part-5-gas/chapter-06-measuring-profiling-and-benchmarking/profile-before-you-optimize.md`
- Modify: `book/part-5-gas/chapter-07-l1-l2-fee-models-and-calldata/index.md`
- Modify: `book/part-5-gas/chapter-07-l1-l2-fee-models-and-calldata/why-rollups-charge-differently.md`
- Modify: `book/part-5-gas/chapter-08-offchain-computation-and-cost-shifting/index.md`
- Modify: `book/part-5-gas/chapter-08-offchain-computation-and-cost-shifting/deciding-what-not-to-do-onchain.md`
- Modify: `book/part-6-security/chapter-01-security-review-basics/index.md`
- Modify: `book/part-6-security/chapter-01-security-review-basics/reentrancy-and-access-control.md`
- Modify: `book/part-6-security/chapter-02-signatures-replay-and-delegatecall/index.md`
- Modify: `book/part-6-security/chapter-02-signatures-replay-and-delegatecall/signature-boundaries.md`
- Modify: `book/part-6-security/chapter-03-oracle-flash-loan-and-mev/index.md`
- Modify: `book/part-6-security/chapter-03-oracle-flash-loan-and-mev/price-dependence-risk.md`
- Modify: `book/part-6-security/chapter-04-upgrade-proxy-and-init-risks/index.md`
- Modify: `book/part-6-security/chapter-04-upgrade-proxy-and-init-risks/proxy-risk-review.md`
- Modify: `book/part-6-security/chapter-05-security-testing-and-audit-collaboration/index.md`
- Modify: `book/part-6-security/chapter-05-security-testing-and-audit-collaboration/how-to-hand-off-risk.md`
- Modify: `book/part-6-security/chapter-06-monitoring-response-and-operational-security/index.md`
- Modify: `book/part-6-security/chapter-06-monitoring-response-and-operational-security/when-security-becomes-an-operations-problem.md`
- Modify: `book/part-6-security/chapter-07-invariants-threat-modeling-and-formal-reasoning/index.md`
- Modify: `book/part-6-security/chapter-07-invariants-threat-modeling-and-formal-reasoning/proving-more-than-tests-can-see.md`
- Modify: `book/part-6-security/chapter-08-denial-of-service-griefing-and-liveness/index.md`
- Modify: `book/part-6-security/chapter-08-denial-of-service-griefing-and-liveness/when-nothing-is-stolen-but-the-system-stops.md`

- [ ] **Step 1: Add `## 本章核心概念` to the eight gas chapter landing pages**

Gas chapter focus map:
- `why-sstore-hurts.md`: gas unit, `SSTORE`, state persistence, warm and cold access
- `storage-layout.md`: packing, slot, read amplification, layout discipline
- `high-value-optimizations.md`: immutable, constant, caching, tradeoff
- `cost-growth-and-batching.md`: batching, loop complexity, asymptotic growth, upper bound
- `when-not-to-optimize.md`: readability, maintainability, auditability, tradeoff
- `profile-before-you-optimize.md`: benchmark, gas snapshot, regression, measurement
- `why-rollups-charge-differently.md`: base fee, calldata cost, DA cost, L2 fee model
- `deciding-what-not-to-do-onchain.md`: offchain computation, proof boundary, trust assumption, verifier

Expected: every gas chapter preview tells the reader which performance concepts actually drive the chapter’s reasoning.

- [ ] **Step 2: Strengthen the first major concept explanations in the eight gas main pages**

Use this prose model where relevant:

```md
### 1. SSTORE 为什么贵

`SSTORE` 是把新值真正写回合约持久化状态的操作。直觉上可以把它看成“把草稿写进永久档案”，所以它比只在一次调用里临时搬运数据要昂贵得多。工程上这解释了为什么状态写入次数、写入模式和状态布局，会主导很多合约的总成本。
```

Expected: the gas volume explains cost from system behavior, not just from memorized optimization slogans.

- [ ] **Step 3: Add `## 本章核心概念` to the eight security chapter landing pages**

Security chapter focus map:
- `reentrancy-and-access-control.md`: reentrancy, access control, CEI, privileged path
- `signature-boundaries.md`: ECDSA, replay, domain separator, delegatecall
- `price-dependence-risk.md`: oracle, flash loan, manipulation window, MEV
- `proxy-risk-review.md`: upgrade admin, initializer, storage collision, pause
- `how-to-hand-off-risk.md`: threat model, severity, remediation, audit finding
- `when-security-becomes-an-operations-problem.md`: monitoring, incident response, key management, circuit breaker
- `proving-more-than-tests-can-see.md`: invariant, assumption, formal reasoning, threat boundary
- `when-nothing-is-stolen-but-the-system-stops.md`: denial of service, griefing, liveness, queue blockage

Expected: every security landing page explains the vocabulary before the reader has to reason about attacks and defenses.

- [ ] **Step 4: Strengthen the first major concept explanations in the eight security main pages**

Use this style when upgrading the first concept sections:

```md
### 1. Reentrancy 是什么

Reentrancy 是合约在尚未完成本轮状态更新时，被外部调用重新带回同一逻辑路径的情况。直觉上可以把它看成“门还没锁好，人已经第二次进来了”，所以旧状态会被重复利用。工程上这要求你把状态更新顺序、外部调用边界和提款模式一起考虑，而不是只盯着某一行代码。
```

Expected: the security volume becomes much safer for self-study because the reader gets stable definitions before encountering exploit narratives.

- [ ] **Step 5: Run the chapter-heading progress check and docs validator**

Run:

```bash
rg -n "^## 本章核心概念$" book/part-*/*/index.md | wc -l
npm run docs:check
```

Expected: the first command returns `48`, and `npm run docs:check` exits successfully.

- [ ] **Step 6: Commit the phase**

Run:

```bash
git add book/part-5-gas book/part-6-security
git commit -m "docs: strengthen gas and security explanations"
```

Expected: the commit succeeds and keeps the performance and security concept work isolated.

## Task 4: Add Concept Scaffolding To Volumes 7 And 8

**Files:**
- Modify: `book/part-7-ethereum-internals/chapter-01-transaction-block-state/index.md`
- Modify: `book/part-7-ethereum-internals/chapter-01-transaction-block-state/transaction-block-state.md`
- Modify: `book/part-7-ethereum-internals/chapter-02-mempool-reorg-and-finality/index.md`
- Modify: `book/part-7-ethereum-internals/chapter-02-mempool-reorg-and-finality/mempool-finality.md`
- Modify: `book/part-7-ethereum-internals/chapter-03-trie-and-state-root/index.md`
- Modify: `book/part-7-ethereum-internals/chapter-03-trie-and-state-root/state-root-intuition.md`
- Modify: `book/part-7-ethereum-internals/chapter-04-gas-limit-base-fee-and-inclusion/index.md`
- Modify: `book/part-7-ethereum-internals/chapter-04-gas-limit-base-fee-and-inclusion/inclusion-economics.md`
- Modify: `book/part-7-ethereum-internals/chapter-05-consensus-validators-and-finality/index.md`
- Modify: `book/part-7-ethereum-internals/chapter-05-consensus-validators-and-finality/why-finality-is-probabilistic-and-economic.md`
- Modify: `book/part-7-ethereum-internals/chapter-06-clients-sync-and-data-availability/index.md`
- Modify: `book/part-7-ethereum-internals/chapter-06-clients-sync-and-data-availability/what-your-node-is-actually-doing.md`
- Modify: `book/part-7-ethereum-internals/chapter-07-rollups-bridges-and-settlement/index.md`
- Modify: `book/part-7-ethereum-internals/chapter-07-rollups-bridges-and-settlement/how-layer2-reuses-ethereum-security.md`
- Modify: `book/part-7-ethereum-internals/chapter-08-mev-builders-and-block-construction/index.md`
- Modify: `book/part-7-ethereum-internals/chapter-08-mev-builders-and-block-construction/who-really-decides-transaction-order.md`
- Modify: `book/part-8-defi/chapter-01-defi-primitives/index.md`
- Modify: `book/part-8-defi/chapter-01-defi-primitives/amm-lending-oracle.md`
- Modify: `book/part-8-defi/chapter-02-amm-design/index.md`
- Modify: `book/part-8-defi/chapter-02-amm-design/pool-pricing-and-liquidity.md`
- Modify: `book/part-8-defi/chapter-03-lending-collateral-and-liquidation/index.md`
- Modify: `book/part-8-defi/chapter-03-lending-collateral-and-liquidation/health-factor-and-liquidation.md`
- Modify: `book/part-8-defi/chapter-04-oracle-twap-and-manipulation/index.md`
- Modify: `book/part-8-defi/chapter-04-oracle-twap-and-manipulation/oracle-design-and-failure-modes.md`
- Modify: `book/part-8-defi/chapter-05-mev-arbitrage-and-protocol-constraints/index.md`
- Modify: `book/part-8-defi/chapter-05-mev-arbitrage-and-protocol-constraints/when-protocols-compete-in-public.md`
- Modify: `book/part-8-defi/chapter-06-stablecoins-peg-and-systemic-risk/index.md`
- Modify: `book/part-8-defi/chapter-06-stablecoins-peg-and-systemic-risk/how-stable-systems-break.md`
- Modify: `book/part-8-defi/chapter-07-vaults-strategies-and-yield/index.md`
- Modify: `book/part-8-defi/chapter-07-vaults-strategies-and-yield/when-yield-becomes-a-product-layer.md`
- Modify: `book/part-8-defi/chapter-08-perpetuals-leverage-and-funding/index.md`
- Modify: `book/part-8-defi/chapter-08-perpetuals-leverage-and-funding/how-onchain-derivatives-stay-close-to-spot.md`

- [ ] **Step 1: Add `## 本章核心概念` to the eight internals chapter landing pages**

Internals chapter focus map:
- `transaction-block-state.md`: transaction, block, receipt, state root
- `mempool-finality.md`: mempool, reorg, confirmation, finality
- `state-root-intuition.md`: trie, proof, state root, commitment
- `inclusion-economics.md`: gas limit, base fee, priority fee, inclusion
- `why-finality-is-probabilistic-and-economic.md`: validator, epoch, checkpoint, economic finality
- `what-your-node-is-actually-doing.md`: client, sync mode, execution client, data availability
- `how-layer2-reuses-ethereum-security.md`: rollup, bridge, settlement, proof system
- `who-really-decides-transaction-order.md`: MEV, builder, proposer, block construction

Expected: the protocol-internals volume becomes readable without requiring the reader to already think like a client engineer.

- [ ] **Step 2: Strengthen the first major concept explanations in the eight internals main pages**

Use this pattern when upgrading the first concept-heavy passages:

```md
### 1. State Root 是什么

State root 是某个区块执行完成后，全局账户状态对应的根哈希承诺。直觉上可以把它看成“整张世界状态表压缩后的总指纹”，你不需要把所有账户都带在身边，也能验证某条状态证明是否属于这棵树。工程上这决定了轻客户端、状态证明、跨系统验证为什么都围绕根哈希展开。
```

Expected: the first encounter with each protocol-internal concept becomes digestible and reusable.

- [ ] **Step 3: Add `## 本章核心概念` to the eight DeFi chapter landing pages**

DeFi chapter focus map:
- `amm-lending-oracle.md`: AMM, lending, oracle, liquidation
- `pool-pricing-and-liquidity.md`: reserve, liquidity, slippage, LP share
- `health-factor-and-liquidation.md`: collateral, LTV, health factor, liquidation bonus
- `oracle-design-and-failure-modes.md`: TWAP, update window, manipulation, price feed
- `when-protocols-compete-in-public.md`: arbitrage, MEV, protocol constraint, slippage protection
- `how-stable-systems-break.md`: peg, collateralization, redemption, systemic risk
- `when-yield-becomes-a-product-layer.md`: vault, strategy, share price, harvest
- `how-onchain-derivatives-stay-close-to-spot.md`: perpetual, leverage, funding rate, mark price

Expected: the DeFi landing pages tell the reader what the mechanisms are before discussing why protocols behave that way.

- [ ] **Step 4: Strengthen the first major concept explanations in the eight DeFi main pages**

Use this style when reinforcing first-contact definitions:

```md
### 1. Health Factor 是什么

Health factor 是借贷协议用来衡量仓位距离清算线还有多远的安全指标。直觉上可以把它看成“仓位剩余缓冲垫的厚度”，数值越低，市场再小幅波动就越容易触发清算。工程上这决定了前端风险提示、清算机器人机会和借贷参数设计该怎么联动。
```

Expected: the DeFi volume reads like a mechanism book rather than a loose collection of product terms.

- [ ] **Step 5: Run the chapter-heading progress check and docs validator**

Run:

```bash
rg -n "^## 本章核心概念$" book/part-*/*/index.md | wc -l
npm run docs:check
```

Expected: the first command returns `64`, and `npm run docs:check` exits successfully.

- [ ] **Step 6: Commit the phase**

Run:

```bash
git add book/part-7-ethereum-internals book/part-8-defi
git commit -m "docs: reinforce ethereum internals and defi concepts"
```

Expected: the commit succeeds and isolates the chain-internal and DeFi concept work.

## Task 5: Add Concept Scaffolding To Volumes 9 And 10

**Files:**
- Modify: `book/part-9-protocol-reading/chapter-01-reading-real-protocols/index.md`
- Modify: `book/part-9-protocol-reading/chapter-01-reading-real-protocols/reading-order-and-questions.md`
- Modify: `book/part-9-protocol-reading/chapter-02-reading-openzeppelin/index.md`
- Modify: `book/part-9-protocol-reading/chapter-02-reading-openzeppelin/openzeppelin-reading-map.md`
- Modify: `book/part-9-protocol-reading/chapter-03-reading-uniswap-v2/index.md`
- Modify: `book/part-9-protocol-reading/chapter-03-reading-uniswap-v2/pair-state-and-swap-flow.md`
- Modify: `book/part-9-protocol-reading/chapter-04-reading-aave/index.md`
- Modify: `book/part-9-protocol-reading/chapter-04-reading-aave/lending-state-and-risk-flow.md`
- Modify: `book/part-9-protocol-reading/chapter-05-reading-eigenlayer/index.md`
- Modify: `book/part-9-protocol-reading/chapter-05-reading-eigenlayer/reading-restaking-systems.md`
- Modify: `book/part-9-protocol-reading/chapter-06-reading-uniswap-v3/index.md`
- Modify: `book/part-9-protocol-reading/chapter-06-reading-uniswap-v3/concentrated-liquidity-reading-map.md`
- Modify: `book/part-9-protocol-reading/chapter-07-reading-makerdao/index.md`
- Modify: `book/part-9-protocol-reading/chapter-07-reading-makerdao/reading-a-monetary-protocol.md`
- Modify: `book/part-9-protocol-reading/chapter-08-reading-curve/index.md`
- Modify: `book/part-9-protocol-reading/chapter-08-reading-curve/reading-stableswap-systems.md`
- Modify: `book/part-10-training/chapter-01-roadmap-and-100-days/index.md`
- Modify: `book/part-10-training/chapter-01-roadmap-and-100-days/project-ladder.md`
- Modify: `book/part-10-training/chapter-02-interview-system-and-output/index.md`
- Modify: `book/part-10-training/chapter-02-interview-system-and-output/interview-output-loop.md`
- Modify: `book/part-10-training/chapter-03-project-review-and-portfolio/index.md`
- Modify: `book/part-10-training/chapter-03-project-review-and-portfolio/turn-work-into-assets.md`
- Modify: `book/part-10-training/chapter-04-portfolio-and-notes-repository/index.md`
- Modify: `book/part-10-training/chapter-04-portfolio-and-notes-repository/build-a-public-learning-asset.md`
- Modify: `book/part-10-training/chapter-05-long-term-learning-system/index.md`
- Modify: `book/part-10-training/chapter-05-long-term-learning-system/how-to-keep-compounding.md`
- Modify: `book/part-10-training/chapter-06-collaboration-resume-and-job-search/index.md`
- Modify: `book/part-10-training/chapter-06-collaboration-resume-and-job-search/turn-learning-into-team-signal.md`
- Modify: `book/part-10-training/chapter-07-open-source-and-public-credibility/index.md`
- Modify: `book/part-10-training/chapter-07-open-source-and-public-credibility/turning-contributions-into-compound-trust.md`
- Modify: `book/part-10-training/chapter-08-specialization-and-long-term-positioning/index.md`
- Modify: `book/part-10-training/chapter-08-specialization-and-long-term-positioning/choosing-what-to-be-known-for.md`

- [ ] **Step 1: Add `## 本章核心概念` to the eight protocol-reading chapter landing pages**

Protocol-reading chapter focus map:
- `reading-order-and-questions.md`: module boundary, invariant, state flow, privileged actor
- `openzeppelin-reading-map.md`: standard, inheritance tree, hook, extension
- `pair-state-and-swap-flow.md`: reserve accounting, `k` invariant, fee path, LP mint and burn
- `lending-state-and-risk-flow.md`: reserve, debt token, liquidity index, liquidation path
- `reading-restaking-systems.md`: operator, AVS, restaking, slashing
- `concentrated-liquidity-reading-map.md`: tick, liquidity range, fee growth, position accounting
- `reading-a-monetary-protocol.md`: collateralized debt, vault, stability fee, governance
- `reading-stableswap-systems.md`: amplification coefficient, invariant curve, virtual price, imbalance

Expected: source-reading chapters become easier to study sequentially because each protocol’s vocabulary is established up front.

- [ ] **Step 2: Strengthen the first major concept explanations in the eight protocol-reading main pages**

Use this style where it fits:

```md
### 1. Invariant 在源码阅读里是什么意思

Invariant 是协议在所有合法执行路径下都应该保持成立的核心条件。直觉上可以把它看成“你读源码时最不能丢的那条主线”，因为很多函数细节都只是围绕它展开。工程上这意味着读协议时应该先找不变量，再看状态如何被维护，而不是先陷进每一个局部实现细节。
```

Expected: the protocol-reading volume teaches a repeatable reading method instead of only providing case-by-case commentary.

- [ ] **Step 3: Add `## 本章核心概念` to the eight training chapter landing pages**

Training chapter focus map:
- `project-ladder.md`: roadmap, milestone, project ladder, feedback loop
- `interview-output-loop.md`: output system, interview bank, mock, artifact
- `turn-work-into-assets.md`: portfolio asset, case study, review signal, proof of work
- `build-a-public-learning-asset.md`: knowledge base, notes repository, public log, synthesis
- `how-to-keep-compounding.md`: learning loop, review cycle, compounding, retention
- `turn-learning-into-team-signal.md`: collaboration signal, resume narrative, job search loop, trust
- `turning-contributions-into-compound-trust.md`: open source, credibility, public proof, long-term signal
- `choosing-what-to-be-known-for.md`: specialization, positioning, niche, reputation moat

Expected: the training volume explains its career-system vocabulary as clearly as the technical volumes explain protocol vocabulary.

- [ ] **Step 4: Strengthen the first major concept explanations in the eight training main pages**

Use this prose model where relevant:

```md
### 1. Specialization 是什么

Specialization 不是把自己缩成只会一种工具，而是长期在某个问题域里建立更高识别度的能力组合。直觉上可以把它看成“别人一想到这类问题，就会想到你”的位置，而不是一串技术标签。工程上这会影响你选项目、读源码、写内容和塑造公开作品集的方式。
```

Expected: the last volume feels like part of the same book-wide teaching system, not a looser advice appendix.

- [ ] **Step 5: Run the chapter-heading progress check and docs validator**

Run:

```bash
rg -n "^## 本章核心概念$" book/part-*/*/index.md | wc -l
npm run docs:check
```

Expected: the first command returns `80`, and `npm run docs:check` exits successfully.

- [ ] **Step 6: Commit the phase**

Run:

```bash
git add book/part-9-protocol-reading book/part-10-training
git commit -m "docs: expand concept guidance in protocol reading and training"
```

Expected: the commit succeeds and completes the manuscript-wide chapter and main-page pass.

## Task 6: Expand The Glossary And Enforce The New Heading Contract

**Files:**
- Modify: `book/appendix/glossary.md`
- Modify: `scripts/validate-book.mjs`

- [ ] **Step 1: Rewrite `book/appendix/glossary.md` into grouped concept families**

Replace the current flat list with these exact section headings, in this order:

```md
## 账户与交易
## Solidity 与合约结构
## EVM 与执行
## Gas 与性能
## 安全与权限
## 链与底层网络
## DeFi 与协议机制
## 工程化与训练
```

Expected: the glossary stops being a short appendix and becomes a real lookup layer for the full manuscript.

- [ ] **Step 2: Expand the glossary entries with stable developer-oriented definitions**

Seed the grouped glossary with these terms and write each entry as one concise definition plus one practical meaning sentence:

- `## 账户与交易`: address, EOA, contract account, nonce, signer, transaction, gas limit, base fee, priority fee, receipt, revert, mempool
- `## Solidity 与合约结构`: state variable, storage, memory, calldata, mapping, struct, modifier, event, custom error, interface, proxy, initializer
- `## EVM 与执行`: opcode, stack, slot, selector, bytecode, runtime code, delegatecall, return data, revert data, precompile
- `## Gas 与性能`: `SSTORE`, warm access, cold access, packing, immutable, constant, batching, complexity, benchmark
- `## 安全与权限`: reentrancy, access control, replay, oracle manipulation, flash loan, invariant, liveness, pause
- `## 链与底层网络`: block, state root, trie, validator, finality, reorg, rollup, bridge, data availability, MEV
- `## DeFi 与协议机制`: AMM, reserve, liquidity, slippage, LP, health factor, liquidation, TWAP, stablecoin, funding rate, vault, restaking
- `## 工程化与训练`: fork test, fuzz test, invariant test, deploy script, trace, static analysis, portfolio, specialization

Expected: the glossary becomes broad enough that readers can recover vocabulary without leaving the book.

- [ ] **Step 3: Update `scripts/validate-book.mjs` to require the new chapter and glossary headings**

Add `## 本章核心概念` to every chapter `index.md` validation pattern set, and add glossary checks that require the eight grouped glossary headings. Model the new glossary scope like this:

```js
{
  file: "book/appendix/glossary.md",
  patterns: [
    "## 账户与交易",
    "## Solidity 与合约结构",
    "## EVM 与执行",
    "## Gas 与性能",
    "## 安全与权限",
    "## 链与底层网络",
    "## DeFi 与协议机制",
    "## 工程化与训练"
  ]
}
```

Expected: future chapter additions cannot silently omit the new concept section, and the glossary structure becomes part of CI-level verification.

- [ ] **Step 4: Run the glossary and validation checks**

Run:

```bash
rg -n "^## (账户与交易|Solidity 与合约结构|EVM 与执行|Gas 与性能|安全与权限|链与底层网络|DeFi 与协议机制|工程化与训练)$" book/appendix/glossary.md
npm run docs:check
```

Expected: the `rg` command prints eight matching headings, and `npm run docs:check` exits successfully with the new validation contract enabled.

- [ ] **Step 5: Commit the phase**

Run:

```bash
git add book/appendix/glossary.md scripts/validate-book.mjs
git commit -m "docs: expand glossary and enforce concept headings"
```

Expected: the commit succeeds and contains only the glossary and validator changes.

## Task 7: Full Verification, Diff Review, And Publish

**Files:**
- Modify: all files touched in Tasks 1 through 6

- [ ] **Step 1: Run the full docs validation pass**

Run:

```bash
npm run docs:check
```

Expected: the command exits successfully with all chapter concept headings and glossary sections validated.

- [ ] **Step 2: Build the VitePress site**

Run:

```bash
npm run docs:build
```

Expected: the static site builds successfully without Markdown, navigation, or theme-shell regressions.

- [ ] **Step 3: Inspect the final git state**

Run:

```bash
git status --short
git diff --stat HEAD~6..HEAD
```

Expected: `git status --short` shows a clean working tree, and `git diff --stat HEAD~6..HEAD` summarizes the six concept-system commits.

- [ ] **Step 4: Push the completed manuscript update**

Run:

```bash
git push origin main
```

Expected: GitHub `main` contains the full concept explanation system rollout.

## Self-Review

### Spec Coverage

- Chapter-level concept orientation is covered by Tasks 1 through 5, which add `## 本章核心概念` to all eighty chapter landing pages.
- First-mention strengthening in main explanatory pages is covered by Tasks 1 through 5, each with explicit chapter focus maps for the relevant volumes.
- The grouped glossary reference layer is covered by Task 6, Steps 1 and 2.
- Consistency enforcement through validation is covered by Task 6, Step 3.
- Full-project verification and publication are covered by Task 7.

No spec gaps remain.

### Placeholder Scan

This plan contains no `TODO`, `TBD`, `implement later`, `fill in details`, or “similar to Task N” placeholders. Every task names exact files, exact verification commands, exact commit messages, and explicit concept focus maps.

### Type And Naming Consistency

- The new heading is consistently named `## 本章核心概念` across every task and the validator step.
- The glossary group names are consistent between Task 6, the validator snippet, and the verification command.
- The plan consistently distinguishes chapter `index.md` files from main explanatory pages and does not drift into support-page scope.
