# AI Docs 知识库索引

本文件供 Codex、Claude、Cursor 等 AI 模型检索 `.ai/docs/` 使用。`.ai/docs/` 包含组件与工具的 API（入参、出参、Props、Ref 和方法签名）、使用规则、组件示例以及典型页面示例；本文件负责将任务路由到这些知识内容。`.ai/docs/` 不包含组件与工具的完整生产源码。

本索引仅在用户明确要求查阅 Docs 时读取。不要因此打开 Skills；用户同时点名了某个技能时，再读取该技能。查询组件、工具函数、典型页面示例、Props、API 和示例时，从 `.ai/docs/` 获取信息。不要一次性读取整个目录，只加载当前任务命中的文档。

## 业务侧优先

`.ai/docs/mapping.json` 中，顶层 `components`、`utils` 是库内基础组件与工具；同文件内与它们平级的 `business` 下也有 `components`、`utils`，供业务项目自行补充（本仓库中 `business` 通常为空，不需要为确认是否为空而去检索业务实现）。

当 `business.components` / `business.utils` 与顶层 `components` / `utils` 出现名称、描述或功能重复时，**必须优先使用 `business` 中的业务组件与方法**，不要改用库内同名或同功能的基础能力。`business` 无对应条目时，再使用顶层基础 `components`、`utils`。

## 先判断任务类型

### 查询或使用组件

例如按钮、表单、弹窗、日期选择、列表、上传等 UI 能力。

1. 用户同时点名了 `develop` 时，再读取 `.ai/skills/develop/SKILL.md`。未点名则直接按下列步骤检索。
2. 优先执行：

   ```bash
   node .ai/skills/develop/scripts/resolve-docs.mjs --query "任务关键词"
   ```

3. 无法执行脚本时，检索 `.ai/docs/mapping.json` 的 `business.components` 与顶层 `components`；两者描述或功能重复时优先 `business`。
4. 对命中的组件按顺序读取：
   - `{Name}-props.ts`：确认 Props、Ref、类型和子组件 API。
   - `{Name}-rules.md`：确认适用场景、组合方式和限制。
   - `{Name}-example.md`：仅在需要具体用法时读取 Demo 索引。
   - `demos/*.tsx`：仅读取 `example.md` 指向且与任务相关的示例。

路径格式：`.ai/docs/components/{Name}/`。

### 查询或使用工具函数

例如 `DateUtil`、`Request`、`DOMUtil`、`Storage` 等工具能力。

1. 用户同时点名了 `develop` 时，再读取 `.ai/skills/develop/SKILL.md`。未点名则直接按下列步骤检索。
2. 优先执行 `resolve-docs.mjs`，无法执行时检索 `.ai/docs/mapping.json` 的 `business.utils` 与顶层 `utils`；两者描述或功能重复时优先 `business`。
3. 对命中的工具按顺序读取：
   - `{Name}-props.ts`：确认方法签名、参数和返回值。
   - `{Name}-rules.md`：确认适用场景和使用限制。
   - `{Name}-example.md` 与 `demos/`：仅在需要调用示例时读取。

路径格式：`.ai/docs/utils/{Name}/`。

### 创建完整页面

适用于列表、编辑、详情、登录和报表等整页开发，不适用于只向已有页面插入一个组件。

1. 检索 `.ai/docs/examples/catalog.json`，根据 `category`、`title`、`variant` 和任务需求选择模板。
2. 按 catalog 返回的路径读取：
   - `props`：模板可替换项和输入结构。
   - `rules`：模板约束和生成要求。
   - `example`：示例索引。
   - `templatePath`：仅在生成页面时读取对应模板源码。
3. 列表、编辑、详情、登录任务只在用户点名对应技能时再读取：
   - `.ai/skills/create-page-list/SKILL.md`
   - `.ai/skills/create-page-edit/SKILL.md`
   - `.ai/skills/create-page-detail/SKILL.md`
   - `.ai/skills/create-page-login/SKILL.md`

路径格式：`.ai/docs/examples/{Category}/`。

### 修改已有页面中的组件或工具

先读取目标页面确认修改位置，再通过 `mapping.json` 定位组件或工具文档。用户点名了 `develop` 时再读取该技能。不要因为修改的是页面就读取完整页面示例。

### 维护或同步 Docs

只有用户点名 `sync-ai-docs`，且组件、工具 API、示例或文档本身发生变化时，才读取 `.ai/skills/sync-ai-docs/SKILL.md`。

- 完整同步：`npm run build:ai-docs`
- 漂移检查：`npm run check:ai-docs`
- 新增组件或工具文档时，必须同步更新 `.ai/docs/mapping.json`。
- 普通业务代码开发不得使用 `sync-ai-docs` 代替 `develop`。

## 核心索引

- `.ai/docs/mapping.json`：组件和工具的名称、关键词及文档路径映射。含顶层 `components`、`utils`，以及业务侧 `business.components`、`business.utils`。
- `.ai/docs/examples/catalog.json`：典型页面示例清单及 props、rules、example、templatePath 路径。
- `.ai/docs/components/README.md`：组件文档目录说明。
- `.ai/docs/utils/README.md`：工具文档目录说明。
- `.ai/docs/examples/README.md`：典型页面示例目录说明。

这些目录说明仅用于理解文档结构。实际检索必须以 `mapping.json` 或 `examples/catalog.json` 为入口。

## 读取原则

1. 先索引，后正文；先命中少量候选，再读取具体文件。
2. 默认先读 props 和 rules，只有需要具体写法时才读 example 和 demos。
3. Props、子组件、方法和枚举值必须以命中的 `*-props.ts` 为准，不得编造。
4. 组件或工具选型必须符合 `*-rules.md`，已有库能力不得重复实现。`mapping.json` 的 `business` 与顶层基础条目功能重复时，优先业务侧。
5. 同一任务只读取相关候选，通常保留最相关的 1 至 5 项。
6. 文档没有覆盖某项能力时，应明确说明知识库缺口，不得假设不存在的 API。

## 完成前检查

- 已通过 `mapping.json`、`examples/catalog.json` 或 `resolve-docs.mjs` 定位文档。
- 已读取相关 props 和 rules。
- 仅在需要时读取 example 和 demos。
- 未使用文档中不存在的 Props、子组件、方法或枚举值。
- 页面任务与组件插入任务使用了正确的技能和索引。
