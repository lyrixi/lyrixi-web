# 典型页面示例（examples）

供 **create-page-list / edit / detail / login** 选用的典型页面示例。清单见 [`catalog.json`](catalog.json)。

每个 catalog 条目在 `{Category}/` 下有三份 AI 文档（与 `components/` 约定对齐）：

| 文件                   | 用途                                                                          |
| ---------------------- | ----------------------------------------------------------------------------- |
| `{Variant}-props.ts`   | **可替换项**：create-page 问答结果映射到模板哪些动态内容（API、字段、文案等） |
| `{Variant}-rules.md`   | 何时用此模板、目录结构、替换点与禁止项                                        |
| `{Variant}-example.md` | Demo 薄索引，链到 `demos/{Variant}/` 源码                                     |
| `demos/{Variant}/`     | 完整模板源码（可与 `src/examples/` 同构同步）                                 |

公共类型：[`types/PageTemplate.types.ts`](types/PageTemplate.types.ts)

## 维护

1. 改模板源码 → 同步 `demos/`
2. 改可替换项 → 编辑 `{Variant}-props.ts`
3. 刷新 example 索引：`node .ai/skills/sync-ai-docs/scripts/generate-page-example-index.mjs`（详见 [sync-ai-docs 技能](../../skills/sync-ai-docs/SKILL.md)）

AI 以本目录为准；生成业务页时读 **props + rules**，需要代码片段再 Read `demos/`。
