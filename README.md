# Web3 Learning Book

一个面向已经做过 dApp 的前端开发者的中文 Web3 长期学习型书籍仓库。

当前仓库已经进入“书籍模式”：

- VitePress 站点已升级为“卷 -> 章 -> 节”的结构
- 主干路径覆盖 Solidity、Foundry、EVM、Gas、安全、底层原理、DeFi、协议源码与训练计划
- 每章都配有练习题、项目实践和延伸阅读入口
- 旧路径保留为过渡页，方便从早期目录跳转到新书结构

## 本地开发

- `npm install`
- `npm run docs:dev`

## 本地校验

- `npm run docs:check`
- `npm run docs:build`
- `npm run docs:preview`

## 目录说明

- `book/`：书的正文与 VitePress 配置
- `book/part-*`：卷级目录
- `book/part-*/chapter-*`：章节与练习支持页
- `scripts/validate-book.mjs`：章节结构校验脚本
- `.github/workflows/deploy.yml`：GitHub Pages 自动部署工作流
- `docs/superpowers/`：本次设计与执行计划记录
