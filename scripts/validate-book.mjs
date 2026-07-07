import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const scopes = {
  shell: [
    {
      file: "book/index.md",
      headings: ["## 这本书适合谁", "## 你会得到什么", "## 主干学习路径"]
    }
  ],
  foundation: [
    {
      file: "book/preface.md",
      headings: ["## 适合谁读", "## 不适合谁", "## 这本书怎么读", "## 继续深入看什么"]
    },
    {
      file: "book/learning-map.md",
      headings: ["## 先学什么", "## 不要一开始就钻进去的内容", "## 三个月主干路线", "## 继续深入看什么"]
    },
    {
      file: "book/mental-model/index.md",
      headings: ["## 先理解什么", "## 为什么重要", "## 常见误区", "## 怎么练", "## 继续深入看什么"]
    }
  ],
  core1: [
    {
      file: "book/solidity-state/index.md",
      headings: ["## 先理解什么", "## 为什么重要", "## 常见误区", "## 怎么练", "## 继续深入看什么"]
    },
    {
      file: "book/evm-gas/index.md",
      headings: ["## 先理解什么", "## 为什么重要", "## 常见误区", "## 怎么练", "## 继续深入看什么"]
    }
  ],
  core2: [
    {
      file: "book/security/index.md",
      headings: ["## 先理解什么", "## 为什么重要", "## 常见误区", "## 怎么练", "## 继续深入看什么"]
    },
    {
      file: "book/engineering-testing/index.md",
      headings: ["## 先理解什么", "## 为什么重要", "## 常见误区", "## 怎么练", "## 继续深入看什么"]
    }
  ],
  advanced: [
    {
      file: "book/protocol-reading/index.md",
      headings: ["## 先理解什么", "## 为什么重要", "## 常见误区", "## 怎么练", "## 继续深入看什么"]
    },
    {
      file: "book/project-roadmap/index.md",
      headings: ["## 先理解什么", "## 为什么重要", "## 常见误区", "## 怎么练", "## 继续深入看什么"]
    }
  ],
  appendix: [
    {
      file: "book/appendix/resources.md",
      headings: ["## 官方文档", "## 安全与工程", "## 源码阅读"]
    },
    {
      file: "book/appendix/faq.md",
      headings: ["## 常见问题"]
    },
    {
      file: "book/appendix/glossary.md",
      headings: ["## 术语表"]
    }
  ]
};

const requestedScopes = process.argv.slice(2);
const activeScopes = requestedScopes.length === 0 ? Object.keys(scopes) : requestedScopes;

const checks = activeScopes.flatMap((scope) => {
  if (!scopes[scope]) {
    throw new Error(`Unknown scope: ${scope}`);
  }

  return scopes[scope];
});

const errors = [];

for (const check of checks) {
  const filePath = path.resolve(check.file);

  if (!existsSync(filePath)) {
    errors.push(`Missing file: ${check.file}`);
    continue;
  }

  const content = await readFile(filePath, "utf8");

  for (const heading of check.headings) {
    if (!content.includes(heading)) {
      errors.push(`Missing heading "${heading}" in ${check.file}`);
    }
  }

  if (content.includes("TODO") || content.includes("TBD")) {
    errors.push(`Placeholder text found in ${check.file}`);
  }
}

if (errors.length > 0) {
  console.error("Book validation failed:");

  for (const error of errors) {
    console.error(`- ${error}`);
  }

  process.exit(1);
}

console.log(`Book validation passed for scopes: ${activeScopes.join(", ")}`);
