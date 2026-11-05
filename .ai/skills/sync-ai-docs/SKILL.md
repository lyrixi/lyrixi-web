---
name: sync-ai-docs
description: >-
  仅当用户明确点名 sync-ai-docs 时加载，未点名不要读取。用途：从 src 同步 .ai/docs。
---

# sync-ai-docs（维护 · 同步文档）

**本技能只管「更新 `.ai/docs`」**；用组件/工具写页面或业务代码 → 使用 [develop](../develop/SKILL.md)。

`.ai/docs` 是 AI 写代码时的主知识库，结构见 [`.ai/docs/ai-docs-index.md`](../../docs/ai-docs-index.md)。

## 何时启用

- `src/components`、`src/utils` 的 props / 子组件 / demo 有变更，需要同步到 `.ai/docs`
- 用户要求执行 `npm run build:ai-docs` 或 `npm run check:ai-docs`
- 新建库组件后补充 `.ai/docs` 三件套与 `mapping.json`
- 发现 AI 生成的 props 与实现不一致，需要修 docs 而非改业务代码

## 文档结构（每个组件/工具）

| 文件                | 用途                                        |
| ------------------- | ------------------------------------------- |
| `{Name}-props.ts`   | Props / Ref / API（生成代码时 AI 以此为准） |
| `{Name}-rules.md`   | 何时使用、子组件、必须用库组件              |
| `{Name}-example.md` | Demo 薄索引（链到 `demos/`）                |
| `demos/*.tsx`       | 示例源码（从 `src` 同步）                   |

页面示例见 `.ai/docs/examples/`，清单 [`examples/catalog.json`](../../docs/examples/catalog.json)。

## 一键同步（推荐）

仓库根目录：

```bash
npm run build:ai-docs
```

等价于依次执行：demos → props → rules → example 索引。

检查 props 是否与 `src` 漂移（CI 可用）：

```bash
npm run check:ai-docs
```

## 分步脚本

均在仓库根目录执行；可加组件/工具名只更新部分（如 `Button DatePicker`）。

| 脚本                              | 作用                                                   |
| --------------------------------- | ------------------------------------------------------ |
| `sync-ai-docs-demos.mjs`          | `src/**/demos` → `.ai/docs/**/demos`                   |
| `sync-ai-docs-props.mjs`          | `src` types / index → `*-props.ts`（`--check` 仅报告） |
| `sync-ai-docs-rules.mjs`          | `index.ts` 挂载 → `*-rules.md` 子组件清单              |
| `generate-example-index.mjs`      | 刷新 `{Name}-example.md` 索引                          |
| `generate-page-example-index.mjs` | 刷新 `examples/` 示例 example 索引                     |
| `convert-props-json-to-ts.mjs`    | 历史 `*-props.json` → `*-props.ts` 迁移                |

```bash
node .ai/skills/sync-ai-docs/scripts/sync-ai-docs-demos.mjs [Name...]
node .ai/skills/sync-ai-docs/scripts/sync-ai-docs-props.mjs [Name...]
node .ai/skills/sync-ai-docs/scripts/sync-ai-docs-rules.mjs [Name...]
node .ai/skills/sync-ai-docs/scripts/generate-example-index.mjs [Name...]
node .ai/skills/sync-ai-docs/scripts/generate-page-example-index.mjs
node .ai/skills/sync-ai-docs/scripts/check-ai-docs-props.mjs
```

## 新建组件文档

在 `.ai/docs/components/{Name}/` 创建三件套 + `demos/`，并更新 [`.ai/docs/mapping.json`](../../docs/mapping.json)：

- `name`、`keywords`（`|` 分隔）
- `props` / `rule` / `example` 路径

完成后：

```bash
node .ai/skills/sync-ai-docs/scripts/generate-example-index.mjs {Name}
```

## mapping.json

- 路径：[`.ai/docs/mapping.json`](../../docs/mapping.json)
- `keywords` 影响 [develop](../develop/SKILL.md) 的 `resolve-docs.mjs` 检索；新增组件或同义词时务必更新
- props 路径统一为 `*-props.ts`（非 json）

## 手工编辑原则

- **props 与 src 不一致时以 src 为准**，改 docs 后跑 `npm run check:ai-docs` 验证
- `*-props.ts` 禁止 `import` 指向 `src/`；跨组件类型引用 docs 内路径（如 `../Modal/Modal-props`）
- `*-rules.md` 顶部「源文档」行保留；子组件清单优先用 `sync-ai-docs-rules.mjs` 自动同步
- util 的 `*-props.ts` 可手写精确 `function` / `const` 签名与 namespace 前的 `type`；`sync-ai-docs-props.mjs` 会保留这些，不会冲成 `unknown` stub

## 维护自检

- [ ] 已跑 `npm run build:ai-docs` 或对应分步脚本
- [ ] `npm run check:ai-docs` 无漂移（或已说明例外）
- [ ] 新组件/工具已写入 `mapping.json` keywords
- [ ] 未把「写代码查阅」流程写进本技能（那是 develop 技能职责）
