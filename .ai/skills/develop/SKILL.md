---
name: develop
description: >-
  仅当用户明确点名 develop 时加载，未点名不要读取。用途：按 .ai/docs 检索组件与工具并写 UI。
  维护文档用 sync-ai-docs，且同样要用户点名。
---

# develop（写代码 · 查阅文档）

生成或修改使用 **lyrixi-web** 组件/工具的代码时，**默认以 `.ai/docs` 为准**；仅当文档缺失或未覆盖时再查 `src/components`、`src/utils` 或 `.cursorrules`。

**不要**一次性读完整 `mapping.json` 以外的全部 docs；用 **mapping 索引 + 按需精读** 控制上下文。

**本技能只管「读文档写代码」**（含在已有页面插入库内已有组件）；从 `src` 同步 demos / props / rules、刷新 example 索引等维护工作 → 使用 [sync-ai-docs](../sync-ai-docs/SKILL.md)。

## 何时启用

- 用户显式使用本技能（`develop`），或要求「按文档 / 按库规范」写 UI
- 选用、组合、**插入**组件（表单、列表、弹窗、导航等）或工具（Request、DateUtil、DOMUtil 等）
- 用户说「插入组件」「页面里加个…」「给表单加上…」——在已有页补充库内现成组件
- 需要 props、子组件名、示例写法，且希望减少编造 API

## 检索流程（必须按序）

### 1. 提取检索词

从用户任务归纳英文组件名、中文场景词、子组件（如 `Input.Text`、`DatePicker.Combo`）、工具名。

### 2. 解析索引（优先脚本，省 token）

在仓库根目录执行：

```bash
node .ai/skills/develop/scripts/resolve-docs.mjs --query "按钮,列表,Request"
```

或无 `--query`，直接跟关键词：

```bash
node .ai/skills/develop/scripts/resolve-docs.mjs 加载 弹窗 Form
```

- 解析 `hits`：按 `score` 从高到低取相关项（通常 1 ～ 5 个即可，避免贪多）
- **无命中**：再 `Read` [`.ai/docs/mapping.json`](../../docs/mapping.json)，对 `keywords` / `name` 做人工匹配；仍无则进入「回退」

### 3. 按需读取文档（渐进披露）

对每个命中项，**默认只读**：

1. `{name}-props.ts` — API / Ref（生成代码的主要依据）
2. `{name}-rules.md` — 何时使用、子组件、禁止自造组件

**仅当**需要具体写法或 demo 片段时：

1. 先读 `{name}-example.md` 的 **Demo 索引表**（薄索引，不含完整代码）
2. 再 **Read** 表中链接的 `demos/*.tsx`（示例源码唯一来源）

路径以 `resolve-docs` 输出为准（相对仓库根，如 `.ai/docs/components/Button/Button-props.ts`）。

### 4. 生成 / 修改代码

- 组件/工具从 `lyrixi-web` barrel 引入（业务代码）；内库改动用相对路径（见 `.cursorrules`）
- Props、子组件名、默认值 **必须与 props.ts 一致**，禁止编造未出现的 API
- 遵守 `.ai/rules/`（命名、import 顺序、页面结构等）
- **往已有页面插入时**：先确认目标文件与插入位置；只选库中已有组件/子组件；改动尽量小；库内无对应能力时说明缺口并建议相近组件，**禁止**借此新建 `src/components` 包

### 5. 回退（文档未覆盖时）

| 情况                     | 做法                                                                                                                                                                                                       |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mapping 无条目           | 查 `src/components/{Name}/index.zh-CN.md` 或 `src/utils/{Name}/`                                                                                                                                           |
| props 与实现不一致       | 以 `src` 源码为准；同步 `.ai/docs` 时用 [sync-ai-docs](../sync-ai-docs/SKILL.md)                                                                                                                           |
| 页面级模板（从零搭整页） | 另用 [create-page-list](../create-page-list/SKILL.md) / [edit](../create-page-edit/SKILL.md) / [detail](../create-page-detail/SKILL.md) / [login](../create-page-login/SKILL.md) + `examples/catalog.json` |

## mapping.json 与 keywords

- 索引文件：[`.ai/docs/mapping.json`](../../docs/mapping.json)
- `keywords` 为 `|` 分隔，手工维护；检索不全时通过 [sync-ai-docs](../sync-ai-docs/SKILL.md) 编辑对应条目
- **keywords 不全会影响检索**：`resolve-docs.mjs` 为子串/相等打分，同义词未写入则易漏检

## 业务页面

整页骨架 → 使用 **create-page-list / edit / detail / login** 选 `examples/` 示例并按各自 skill 问答生成；报表看板用 `examples/catalog.json` 中 `category: "Report"`（`report-card`），周期切换 + 指标卡片列表用 Detail 的 `detail-indicator-list`。  
在已有页插入/改用组件与工具 → **本技能**查 `components/`、`utils/` 文档后改页面。

## 输出自检

- [ ] 已用 mapping / resolve-docs 定位文档
- [ ] 已读对应 props（+ rules）
- [ ] 未使用 docs 中不存在的 props / 子组件
- [ ] 文档缺失处已说明回退依据
