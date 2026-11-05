---
name: create-page-list
description: >-
  仅当用户明确点名 create-page-list 时加载，未点名不要读取。用途：列表页架构说明与生成。
---

# create-page-list

列表页**公开入口**：目录架构、**`.ai/docs/examples/List/`** 模板选用，以及从问答到生成业务页的完整流程（本 skill 自包含，不依赖其它 create-page skill）。

**约束：** 遵守 [`.ai/rules/page-structure.mdc`](../../rules/page-structure.mdc)、[`global-coding-sequence.mdc`](../../rules/global-coding-sequence.mdc)、[`global-coding-locale.mdc`](../../rules/global-coding-locale.mdc)、[`create-page-base/generation-constraints.md`](../create-page-base/generation-constraints.md)（**仅 `.ts`/`.tsx`；必须从 catalog 模板复制**）。生成代码时**不要修改** `.ai/rules/`。

## 何时启用

- 用户要新建**列表页**（分页列表、筛选列表、IndexBar、虚拟滚动等）
- 用户问列表页的 Header / Main / api 该怎么拆
- 用户说「create-page-list」「列表页架构」「参考列表模板」「生成列表页」

## 页面命名

后缀用 `List`（下钻仍为列表时用 `Record`）。见 `page-structure.mdc`。

## 目录架构（业务页通用）

列表页在 `src/pages/{PageName}/` 下按区域拆分，数据请求与转换集中在 `api/`：

```
{PageName}/
├── index.tsx          # 入口：queryParams、组合 Header / Main / Footer
├── index.less         # 页面样式（可选）
├── api/               # 数据请求、server/local 转换（各 queryXxx 含 types.ts）
│   └── queryData/
├── Header/            # 头部：搜索、筛选（Filter 子目录；各含 types.ts）
├── Main/              # 列表主体（含 types.ts）
├── Footer/            # 底部操作（可选；含 types.ts）
└── utils/             # 页面级工具（可选）
```

类型约定：`types.ts` 放在各组件 / api 文件夹下；无子组件的薄封装页（如 Virtual/Cache）可放根目录。

### 各文件夹职责

| 文件夹      | 职责                        | 列表页典型内容                                                                                       |
| ----------- | --------------------------- | ---------------------------------------------------------------------------------------------------- |
| `index.tsx` | 页面入口，`Page` 容器       | `[queryParams, setQueryParams]`；`Header` onSearch 更新参数；`Main` 传入 `queryParams`、`cacheName`  |
| `Header/`   | 头部 UI，暴露 `onSearch` 等 | `ToolBar` 搜索；`Header/Filter/` 筛选项                                                              |
| `Main/`     | 主列表区域                  | `ListPagination.Main`；`formatPayload`（入参）、`formatResponse`（出参）、`formatViewItem`（行渲染） |
| `Footer/`   | 底部按钮（可选）            | 缓存列表：保存/清除 Storage                                                                          |
| `api/`      | 请求与数据转换              | `queryData`；`serverData` / `localData` 命名见 rules                                                 |

### api 命名约定

- 查询：`queryXxx`（列表为 `queryData`）
- 前端 → 服务端：`serverXxx`（如 `serverData`、`formatPayload`）
- 服务端 → 前端：`localXxx`（如 `localData`、`formatResponse`）

### index.tsx 骨架

```tsx
const [queryParams, setQueryParams] = useState({})

return (
  <Page>
    <Header
      queryParams={queryParams}
      onSearch={(newQueryParams) => setQueryParams(newQueryParams)}
    />
    <Main cacheName="..." queryParams={queryParams} />
    {/* Footer 按需 */}
  </Page>
)
```

## 参考文档位置（`.ai/docs/examples/List/`）

每个模板在 `List/` 下有三件套 + demo 源码：

| 文件                   | 用途                                             |
| ---------------------- | ------------------------------------------------ |
| `{Variant}-props.ts`   | 可替换项（api、filters、listItem、cacheName 等） |
| `{Variant}-rules.md`   | 何时用、目录结构、替换点、禁止项                 |
| `{Variant}-example.md` | Demo 索引，链到 `demos/{Variant}/`               |
| `demos/{Variant}/`     | 完整参考源码                                     |

公共类型：[`types/PageTemplate.types.ts`](../../docs/examples/types/PageTemplate.types.ts)

清单索引：[`catalog.json`](../../docs/examples/catalog.json)（`category: "List"` 条目）

## 模板选用（由 Agent 判定，禁止开场让用户选）

**默认模板：`list-common`（普通列表）。** 不要一上来让用户选择题选模板。

| id              | 标题          | 源码                   | 何时采用                                                      |
| --------------- | ------------- | ---------------------- | ------------------------------------------------------------- |
| `list-common`   | 普通列表      | `List/demos/Common/`   | **默认**；标准分页 + Header 筛选 + Main 列表                  |
| `list-cache`    | 缓存列表      | `List/demos/Cache/`    | 用户在展示内容轮明确需要缓存（会增加代码复杂性）              |
| `list-virtual`  | 虚拟滚动列表  | `List/demos/Virtual/`  | 用户在展示内容轮明确需要虚拟滚动（会增加代码复杂性）          |
| `list-indexbar` | IndexBar 列表 | `List/demos/IndexBar/` | **看效果图自行判断**（如右侧 A–Z 字母索引）；正常业务极少用到 |

**不考虑：** `list-common-manual`（手动加载 / ListAsync）——业务生成流程中忽略，除非用户事后明确点名要求。

### 判定优先级（展示内容轮结束后结算）

1. 效果图能明确看出 IndexBar → `list-indexbar`
2. 否则用户确认需要虚拟滚动 → `list-virtual`
3. 否则用户确认需要缓存 → `list-cache`
4. 否则 → `list-common`

缓存与虚拟滚动目前是**独立模板、不可叠加**。若用户两者都要，**本轮内**追问以哪个为准（并提醒都会增加复杂性）；不得擅自叠两套逻辑。

模板确定后 Read：

1. `List/{Variant}-props.ts`
2. `List/{Variant}-rules.md`
3. 需要代码细节时再 Read `List/demos/{Variant}/`（至少 `index.tsx`、`Main/`、`api/`）

准备阶段可先 Read `list-common` 的 props/rules 作默认底稿；若最终模板变更，再改读对应三件套。

## Common 模板目录详解（最常用）

`List/demos/Common/` 结构可作为其他 List 变体的基准：

```
Common/
├── index.tsx
├── index.less
├── Header/
│   ├── index.tsx
│   ├── types.ts
│   └── Filter/
│       ├── index.tsx
│       └── types.ts
├── Main/
│   ├── index.tsx          # ListPagination.Main、url、cacheName
│   ├── formatPayload.ts   # queryParams → 请求体
│   ├── formatResponse.ts  # 响应 → 列表数据
│   ├── formatViewItem.tsx # 单行渲染
│   ├── types.ts
│   └── mockResult.ts      # demo 用，业务页删除
├── Footer/                # 本模板默认占位，Cache 变体启用
└── api/                   # 部分模板在 Main 内直连 url，或独立 api/
```

`list-cache` **复用** `Common` 的 Header、Main、Footer，主要改 `cacheName` 与 Footer 文案（见 `Cache-rules.md`）。

---

# 生成业务页（问答 + 改写）

仅问架构、不生成代码时，到此为止即可。需要生成 `src/pages/` 时，按下列流程执行。

## 准备

1. Read [`catalog.json`](../../docs/examples/catalog.json) — 只使用 `category: "List"` 的条目。
2. Read [reference/generation.md](reference/generation.md) — 复制模板后的 API / 目录改写规则。
3. 默认 `templateId = list-common`；可先 Read Common 的 props + rules（最终以展示内容轮判定结果为准）。

## 问答原则（必读）

- **一次只问一件事**：每一轮只收集一个主题；拿到用户回复后再问下一项。
- **对用户提问必须带题号**：面向用户的问句以 `Qn：` 开头（与本节编号一致），例如 `Q1：请提供接口地址与入参：`（同 create-page-detail 等 create-page-\* 的问答标注习惯）。
- **禁止开场问模板**：模板由 Agent 按默认值 + 效果图 + 展示内容轮附带确认判定，不得用选择题让用户「选具体模板」。
- **顺序固定**：接口入参 → 接口出参 → 展示内容（含缓存/虚拟滚动确认）→ **最后**问生成路径。不得提前问输出路径。
- **自由填写**禁止合并成「请在下一条消息补充 1、2、3…」跨主题清单；同一主题内可一次给齐（见 Q1 / Q2 / Q3）。
- **例外：**
  - **Q1** — 地址与入参同轮；method / Content-Type 未说明则默认 `POST` + `application/json`。
  - **Q2** — 用 **mock JSON 描述出参**；并从 mock 结构推导 `success` / `data` / `message`（结构不符默认时再追问映射）。
  - **Q3** — 展示内容来源（图片 / MCP 设计稿 / 文字）与字段映射同轮收集；**并附带**询问是否需要缓存、是否需要虚拟滚动。
- 表述不清时**只追问当前主题缺项**，不要猜测业务含义。
- 未完成全部问答前**不要**开始写业务代码。

## 问答流程（必须按序）

### Q1 — 接口地址与入参（单独一轮文字问）

**问：** `Q1：请提供接口地址与入参：（可一并说明请求方式、Content-Type）`

示例：

```
地址：/api/order/list
入参：keyword 来自 queryParams；page/rows 分页
方式：POST（可选）
Content-Type：application/json（可选）
```

**默认值（用户未说明时）：**

| 项                   | 默认               |
| -------------------- | ------------------ |
| 请求方式 `apiMethod` | `POST`             |
| Content-Type         | `application/json` |

记录：`apiUrl`、`apiRequest`（映射到 props 的 `api.*.request`）、`apiMethod`、`apiContentType`。地址或入参缺失时**只追问本轮缺项**（追问仍带 `Q1：` 前缀）。

### Q2 — 接口出参（用 mock 描述；单独一轮文字问）

**问：** `Q2：请用后台 mock 数据描述接口出参（建议粘贴完整 response，含 code / message / data）。`

可参考 [reference/mock-data-template.txt](reference/mock-data-template.txt)。

**解析与默认：**

| 情况                                    | 处理                                                                                               |
| --------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 用户粘贴了合法 JSON                     | `mockData.source = 'user'`，`mockData.sample` = 解析结果                                           |
| 暂时没有 mock                           | `mockData.source = 'inferred'`；后续按 Q3 推测字段，产出注明「字段为推测，联调后需校正」           |
| mock 含常见 `code` / `data` / `message` | `api.*.response` 用默认映射                                                                        |
| mock 结构明显不同                       | **本轮内**对照 [reference/api-response-template.txt](reference/api-response-template.txt) 追问映射 |

JSON 无法解析时**只追问本轮**（追问仍带 `Q2：` 前缀）。

### Q3 — 展示内容 + 模板能力确认（单独一轮）

**问：** `Q3：页面要展示哪些内容？请任选一种（或组合）说明：`

1. **图片设计稿** — 上传高保真截图 / 导出图
2. **MCP 设计稿** — 提供 Figma（等）链接
3. **文字描述** — 写清布局（Header/Main/Footer）、交互，以及**展示字段 ↔ 后台字段**对应关系

并在同一轮**附带**说明（默认均为否；提醒会增加复杂性）：

```
另外请确认（可选，默认都不要）：
- 是否需要缓存？（会增加代码复杂性）
- 是否需要虚拟滚动？（会增加代码复杂性）
```

文字示例：

```
布局：顶部搜索 + 列表；点击进详情
展示字段：
- 标题 → data.name
- 状态 → data.status（文案：待审/已通过）
- 简介 → data.introduce
```

| 用户提供          | 记录                                                       |
| ----------------- | ---------------------------------------------------------- |
| 图片              | `design.source = 'image'`；分析图写入 `design.designNotes` |
| MCP / Figma       | `design.source = 'mcp'`；拉取后整理进 `design.designNotes` |
| 文字              | `design.source = 'text'`；原文写入 `design.designNotes`    |
| 字段对应          | `design.fieldMapping`                                      |
| 需要缓存          | 记入 design / page-spec；倾向 `list-cache`（见判定优先级） |
| 需要虚拟滚动      | 记入 design / page-spec；倾向 `list-virtual`               |
| 效果图含 IndexBar | Agent 自行判为 `list-indexbar`，无需用户点名               |

- 有 Q2 mock 时：字段名优先与 `sample` 对齐，**禁止**编造与 mock 无关的后台字段。
- 无 mock 且文字也未列字段：可少许推测（3–5 个），须标注「推测」。
- 信息过少时**只追问本轮**（追问仍带 `Q3：` 前缀）。
- 本轮结束后按「模板选用」结算 `templateId`，并 Read 对应 props + rules（若与已读 Common 不同则改读）。

### Q4 — 输出路径（必填；单独一轮文字问）

**问：** `Q4：页面生成到哪里？请给出相对仓库根的完整目录，例如 src/pages/OrderList/。`

- **必填**；未给出有效路径时**只追问此项**（仍带 `Q4：`），不得猜测或自动生成。
- 记录 `output.outputPath`；`output.pageName` = 路径末级目录名（PascalCase）。
- 路径有效后**不要**再问路由地址。生成时若工程有 react-router，按 [create-page-base/react-router.md](../create-page-base/react-router.md) 自动注册，并把 URL 入参写在对应 Route 注释上。

### Q5 — 确认（可选）

用简短摘要列出：判定后的模板、接口、出参 mock 来源、展示来源与字段映射、缓存/虚拟滚动意向、`output.outputPath`。用户确认后再生成。

## 生成步骤

1. **读文档与模板** — Read 已判定模板的 props/rules；再递归 Read `.ai/docs/examples/{templatePath}/` **全部源码**（至少 `index.tsx`、`Main/`、`api/**`）。Glob 失败时用 `find` + 绝对路径 Read（见 [generation-constraints.md](../create-page-base/generation-constraints.md)）。
2. **写 `page-spec.json`** — 在目标页面目录写入本次问答结果，字段结构与 props.ts 对齐（见 [reference/page-spec.schema.json](reference/page-spec.schema.json)）。
3. **复制并改写** — **从模板目录复制**到目标路径（仅 `.ts`/`.tsx`）；按 props/rules 替换点与 [reference/generation.md](reference/generation.md) 改 URL、字段、文案；删除 demo 专有逻辑（`mockResult`、`/api/examples/*`、`console.log`）。**禁止**参照同目录旧 JS 页或跳过模板手写。
4. **注册路由** — 工程有 react-router 时按 [create-page-base/react-router.md](../create-page-base/react-router.md) 追加与页面对应的 Route，注释写 URL 入参；没有则跳过。
5. **校验** — `npx tsc --noEmit`；修复新增文件中的类型错误。

## 产出清单

- `{output.outputPath}/index.tsx` 及子目录
- `{output.outputPath}/page-spec.json`
- 有 react-router 时：对应 Route（含 URL 入参注释）
- 向用户说明：模板来源（含判定理由）、主要改动、如何联调接口；若注册了路由一并给出 path

## 不允许

- 在列表页 `Main/` 外散落请求逻辑（应走 `api/` 或 `format*`）
- 随意自造与 `page-structure.mdc` 冲突的目录名
- 跳过 Read `{Variant}-props.ts` + `{Variant}-rules.md` 直接写页面
- 跳过问答直接生成
- **开场让用户选择题选择列表模板**（必须默认 `list-common`，再按效果图 / Q3 确认结算）
- **主动推荐或默认使用 `list-common-manual`**
- **跳过 Q2**（接口出参 / mock）直接编造与接口无关的视图字段
- **在拿到展示内容（Q3）之前询问或写入输出路径（Q4）**
- **在一轮消息里同时索要跨主题内容**；Q1 / Q2 / Q3 各自主题内可一次给齐
- **跳过或自动填充输出路径**（Q4 必填）
- **工程有 react-router 时跳过注册路由**，或为路由 path 再开一轮问答
- 使用与 catalog 无关的随意目录当模板（除非用户明确指定路径）
- 引导用户去用不存在的公开入口 `create-page`
- **生成 `.js` / `.jsx` 业务页**（只允许 `.ts` / `.tsx`，见 [generation-constraints.md](../create-page-base/generation-constraints.md)）
- **未 Read 并复制 catalog 模板目录**就手写页面，或仅参照同模块旧 JS 页实现
