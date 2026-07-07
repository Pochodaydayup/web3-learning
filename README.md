# Web3 Learning Book

一个面向已经做过 dApp 的前端开发者的中文 Web3 全栈学习手册，重点覆盖：

- Solidity 与状态模型
- EVM 与 Gas
- 合约安全
- 工程化与测试
- 协议源码阅读
- 项目实战路线

站点使用 `VitePress` 构建，目标部署平台为 `GitHub Pages`。

## 本地开发

安装依赖：

```bash
npm install
```

启动本地开发站点：

```bash
npm run docs:dev
```

## 本地校验

结构校验：

```bash
npm run docs:check
```

生产构建：

```bash
npm run docs:build
```

本地预览构建产物：

```bash
npm run docs:preview
```

## 部署到 GitHub Pages

1. 将当前目录推送到名为 `web3-learning` 的 GitHub 仓库。
2. 打开仓库设置中的 `Pages`。
3. 将部署来源设置为 `GitHub Actions`。
4. 后续每次 push 到 `main`，工作流都会自动构建并部署。

如果你的实际仓库名不是 `web3-learning`，需要同步修改 [book/.vitepress/config.ts](/Users/zm00138ml/work/AI/web3-learning/book/.vitepress/config.ts) 里的 `base` 配置。

## 内容目录

- `book/`：书的正文与 VitePress 配置
- `scripts/validate-book.mjs`：章节结构校验脚本
- `.github/workflows/deploy.yml`：GitHub Pages 自动部署工作流
- `docs/superpowers/`：本次生成的设计与实现计划记录
