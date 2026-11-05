# AI 资源说明

所有 AI 客户端先读取 [`rules/ai.mdc`](./rules/ai.mdc)。创建或修改文件时，按 [`rules/ai-load-map.md`](./rules/ai-load-map.md) 加载命中的 Rules。

| 目录      | 用途                         |
| --------- | ---------------------------- |
| `skills/` | 执行特定场景任务（按需加载） |
| `rules/`  | 制定开发规范（按需加载）     |
| `docs/`   | API 与示例知识库（按需检索） |

# 创建软链接共享配置

在本仓库开发时，可在项目根目录执行：

```bash
npm run create-ai
```

业务项目安装 `lyrixi-web` 后使用 `npx lyrixi-ai`（逻辑相同，模板来自 `node_modules`）。

运行 `npm run create-ai`（或业务项目中的 `npx lyrixi-ai`）会读取 `client-links.json`，同步 Cursor、Claude、Codex 的软链接。

## 同步实现

- `bin/lyrixi-ai.js`（npm bin，内部调用 `.ai/initAI.js`）：初始化 AI 资源和客户端软链接。
- `.ai/initAI.js`：实际初始化逻辑（库内 `npm run create-ai` 仍可直接调用）。
- `.ai/updateAI.js`：同步 `.ai` 模板、规则、技能和软链接。
- `.ai/updateScripts.js`：同步项目辅助脚本和 package scripts。
