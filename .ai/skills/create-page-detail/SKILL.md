---
name: create-page-detail
description: >-
  仅当用户明确点名 create-page-detail 时加载，未点名不要读取。用途：详情页架构说明与生成。
---

# create-page-detail

详情页**公开入口**：目录架构、**`.ai/docs/examples/Detail/`** 模板选型，以及从问答到生成业务页的完整流程（本 skill 自包含，不依赖其它 create-page skill）。

**约束：** 遵守 [`.ai/rules/page-structure.mdc`](../../rules/page-structure.mdc)、[`global-coding-sequence.mdc`](../../rules/global-coding-sequence.mdc)、[`global-coding-locale.mdc`](../../rules/global-coding-locale.mdc)、[`create-page-base/generation-constraints.md`](../create-page-base/generation-constraints.md)（**仅 `.ts`/`.tsx`；必须从 catalog 模板复制**）。生成代码时**不要修改** `.ai/rules/`。

## 何时启用

- 用户要新建**详情页**（只读展示、审批/确认 Footer）
- 用户问详情页与编辑页的区别、只读 Form 怎么写
- 用户要搭**报表指标卡片列表**（周期切换 + Card 指标项，非 Form 字段）
- 用户说「create-page-detail」「详情页架构」「参考详情模板」「生成详情页」

## 页面命名

后缀用 `Detail`（只读展示）。见 `page-structure.mdc`。

## 详情页 vs 编辑页

| 维度   | 详情页（Detail）                 | 编辑页（Edit）           |
| ------ | -------------------------------- | ------------------------ |
| 表单   | **只读**展示（`Text` 等）        | 可编辑控件               |
| 主接口 | `queryData`                      | `queryData` + `saveData` |
| Footer | 审批/确认（`approveData`，可选） | 保存（`saveData`）       |
| 禁止   | **不要** `saveData`              | —                        |

## 目录架构（业务页通用）

详情页结构比编辑页更轻，通常无 `validateData` / `saveData`：

```
{PageName}/
├── index.tsx          # 入口：loadData、只读 Form、handleApprove
├── api/
│   ├── index.ts       # 导出 queryData、approveData
│   ├── queryData/     # 加载详情（含 types.ts）
│   └── approveData/   # 审批/确认（可选，含 types.ts）
└── Footer/            # 审批按钮（含 types.ts；无审批时可省略）
```

### 各文件夹职责

| 文件夹             | 职责     | 详情页典型内容                                                    |
| ------------------ | -------- | ----------------------------------------------------------------- |
| `index.tsx`        | 只读展示 | `queryData` 加载；`Form` + `Form.Item` + `Text`；`Result` 空/错态 |
| `Footer/`          | 底部操作 | 审批通过按钮 → `handleApprove`                                    |
| `api/queryData/`   | 详情接口 | id 来自 URL；映射到展示字段                                       |
| `api/approveData/` | 审批接口 | 防重复 `token`；成功 Toast                                        |

`detail-form` **无 Header / Main**（字段在 `index.tsx` 内用 `Card` / `Divider` 分组展示）。`detail-indicator-list` 有 `Header/`（周期切换）和 `Main/`（指标 Card 列表），无 Footer。

### api 命名约定

- 查询：`queryData`
- 审批/确认：`approveData`（非 `saveData`）
- 无提交保存接口

### index.tsx 骨架

```tsx
const tokenRef = useRef(String(Date.now()))

async function loadData() {
  const newResult = await queryData()
  setResult(newResult)
}

async function handleApprove() {
  const res = await approveData({ token: tokenRef.current })
  // Toast；code === '2' 防重复
}

return (
  <Page>
    <Form>
      <Form.Item label="字段" name="field">
        <Text />
      </Form.Item>
    </Form>
    <Footer onApprove={handleApprove} />
  </Page>
)
```

## 参考文档位置（`.ai/docs/examples/Detail/`）

| 文件                   | 用途                                                       |
| ---------------------- | ---------------------------------------------------------- |
| `{Variant}-props.ts`   | 可替换项（displayFields / 指标卡片映射、api、footer 文案） |
| `{Variant}-rules.md`   | 何时用、目录结构、替换点、禁止项                           |
| `{Variant}-example.md` | Demo 索引                                                  |
| `demos/{Variant}/`     | 完整参考源码                                               |

公共类型：[`types/PageTemplate.types.ts`](../../docs/examples/types/PageTemplate.types.ts)

清单索引：[`catalog.json`](../../docs/examples/catalog.json)（`category: "Detail"` 条目）

## 模板选型（Detail）

| id                      | 标题                 | 源码                          | 适用场景                                           |
| ----------------------- | -------------------- | ----------------------------- | -------------------------------------------------- |
| `detail-form`           | 只读详情（表单展示） | `Detail/demos/Form/`          | **默认**；Form 只读字段 + 可选 Footer 审批         |
| `detail-indicator-list` | 指标卡片列表         | `Detail/demos/IndicatorList/` | 报表页：周期切换 + Card 指标项（目标/完成/完成率） |

### 判定优先级（Q3 结束后结算）

1. 效果图 / 设计稿 / 文字描述呈现**周期切换**（月/季/年/YTM 等 DatePicker Tab）+ **指标 Card 列表**（**目标 / 完成 / 完成率** 三列或等价文案）→ `detail-indicator-list`
2. Q2 mock 出参含 `mainTarget` + `subTargets[]`（`target` / `complete` / `dim_name` 等）且展示为 Card 而非 Form 字段 → `detail-indicator-list`
3. 用户主动要求指标卡片列表 / 报表页 → `detail-indicator-list`
4. 否则 → `detail-form`

**识别说明：** 子目标下钻页（周期 Tab + 主/子指标 Card）属于本模板；判定为 `detail-indicator-list` 后**必须**从 `Detail/demos/IndicatorList/` 复制生成，不得因路径在旧 JS 模块内而手写 JS 页。

**禁止**用 `AskQuestion` 让用户选择模板；AI 根据 Q3 展示内容（效果图优先）自行判定，并在摘要中说明判定理由。用户若明确纠正模板，以用户为准。

模板确定后 Read：

1. `Detail/{Variant}-props.ts`
2. `Detail/{Variant}-rules.md`
3. `Detail/demos/{Variant}/`（至少 `index.tsx`、`api/**`；`detail-form` 含 `Footer/`）

准备阶段可先 Read `detail-form` 的 props/rules 作默认底稿；若 Q3 判定为 `detail-indicator-list`，再改读对应三件套。

## Form 模板目录详解

`Detail/demos/Form/` 结构：

```
Form/
├── index.tsx
├── Footer/
│   ├── index.tsx
│   └── types.ts
└── api/
    ├── index.ts
    ├── queryData/
    │   ├── index.ts
    │   └── types.ts
    └── approveData/
        ├── index.ts
        └── types.ts
```

### 替换点

| page-spec / props 字段 | 代码位置                              |
| ---------------------- | ------------------------------------- |
| `displayFields`        | `index.tsx` 只读 `Form.Item` + `Text` |
| `api.queryData`        | `loadData`、`api/queryData/`          |
| `api.approveData`      | `handleApprove`、`Footer/`            |
| `design.designNotes`   | `Card` / `Divider` 分组与字段增删     |

## 禁止项

- 详情页添加 `saveData` 或可编辑输入控件
- 误用编辑页模板生成只读页
- 照抄 demo mock 路径（`/api/examples/*`）

## IndicatorList 模板目录详解

`Detail/demos/IndicatorList/` 结构：

```
IndicatorList/
├── index.tsx
├── Header/
│   ├── index.tsx
│   └── types.ts
├── Main/
│   ├── index.tsx
│   └── types.ts
├── api/
│   ├── index.ts
│   └── queryData/
│       ├── index.ts
│       ├── types.ts
│       ├── localData.ts
│       └── serverData.ts
└── utils/
    ├── constants.ts
    └── getUrlDateType.ts
```

### 替换点

| page-spec / props 字段 | 代码位置                             |
| ---------------------- | ------------------------------------ |
| `pageTitle`            | `index.tsx` `Bridge.setTitle`        |
| `api.queryData`        | `api/queryData/` mock → 真实 url     |
| `header.dateTypes`     | `utils/constants.ts`、`Header/`      |
| `main.metricsMapping`  | `Main/` `MetricCard`、`localData.ts` |
| `design.designNotes`   | 卡片列增删、是否展示主指标           |

无 `approveData` / Footer。示例仅展示，生成时勿照抄 mock。

**空态 / 错态：** `queryData` 在后台 `data` 无有效指标时返回 `status: 'empty'`；失败时返回 `status: 'error'`。`index.tsx` 仅在上述两种 `status` 时渲染 `Result`，并直接透传 `status`。

---

# 生成业务页（问答 + 改写）

仅问架构、不生成代码时，到此为止即可。需要生成 `src/pages/` 时，按下列流程执行。

## 准备

1. Read [`catalog.json`](../../docs/examples/catalog.json) — 只使用 `category: "Detail"` 的条目。
2. Read [reference/generation.md](reference/generation.md) — 复制模板后的 API / 目录改写规则。
3. 默认 `templateId = detail-form`；可先 Read Form 的 props + rules（最终以 Q3 展示内容判定结果为准）。

## 模板确定后（Q3 结算后必读）

根据 catalog 中已判定项的 `props`、`rules`、`example` 路径：

1. **`{Variant}-props.ts`** — 本模板所有**可替换项**；问答收集的每个答案必须能映射到 props 中的字段。
2. **`{Variant}-rules.md`** — 目录结构、替换点表、禁止项。
3. **`{Variant}-example.md`** — 仅索引；需要看代码时再 Read `demos/{Variant}/` 下文件。

## 问答原则（必读）

- **一次只问一件事**：每一轮只收集一个主题；拿到用户回复后再问下一项。
- **对用户提问必须带题号**：面向用户的问句以 `Qn：` 开头（与本节编号一致），例如 `Q1：请提供接口地址与入参：`（同 create-page-list / create-page-edit 等 create-page-\* 的问答标注习惯）。
- **禁止开场问模板**：默认 `detail-form`；不得用选择题让用户「选具体模板」。AI 在 **Q3 展示内容** 轮根据效果图 / 设计稿 / 文字描述自行判定模板，并说明理由。
- **顺序固定**：接口入参 → 接口出参 → 展示内容（含模板判定）→ **最后**问生成路径。不得提前问输出路径。
- **自由填写**禁止合并成「请在下一条消息补充 1、2、3…」跨主题清单；同一主题内可一次给齐（见 Q1 / Q2 / Q3）。
- **例外：**
  - **Q1** — 地址与入参同轮；method / Content-Type 未说明则默认 `POST` + `application/json`。
  - **Q2** — 用 **mock JSON 描述出参**；并从 mock 结构推导 `success` / `data` / `message`（结构不符默认时再追问映射）。
  - **Q3** — 展示内容来源（图片 / MCP 设计稿 / 文字）与字段映射同轮收集；**本轮结束即结算 `templateId`**。
- 用户若在 Q3 之前已附效果图，暂存待 Q3 分析，**不要**提前让用户选模板。
- 表述不清时**只追问当前主题缺项**，不要猜测业务含义。
- 未完成全部问答前**不要**开始写业务代码。

## 问答流程（必须按序）

### Q1 — 接口地址与入参（单独一轮文字问）

**问：** `Q1：请提供接口地址与入参：（可一并说明请求方式、Content-Type）。detail-form 若有审批接口也可一并写上；detail-indicator-list 说明周期/日期入参即可（无审批）。`

示例：

```
地址：/api/order/detail
入参：id (string) 来自 Device.getUrlParameter('id')
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

### Q3 — 展示内容 + 模板判定（单独一轮）

**问：** `Q3：页面要展示哪些内容？请任选一种（或组合）说明：`

1. **图片设计稿** — 上传高保真截图 / 导出图
2. **MCP 设计稿** — 提供 Figma（等）链接
3. **文字描述** — 写清布局、交互，以及**展示字段 ↔ 后台字段**对应关系

文字示例：

```
布局：只读 Form；底部审批
展示字段：
- 标题 → data.name
- 状态 → data.status
```

| 用户提供    | 记录                                                       |
| ----------- | ---------------------------------------------------------- |
| 图片        | `design.source = 'image'`；分析图写入 `design.designNotes` |
| MCP / Figma | `design.source = 'mcp'`；拉取后整理进 `design.designNotes` |
| 文字        | `design.source = 'text'`；原文写入 `design.designNotes`    |
| 字段对应    | `design.fieldMapping`                                      |

- 有 Q2 mock 时：字段名优先与 `sample` 对齐，**禁止**编造与 mock 无关的后台字段。
- 无 mock 且文字也未列字段：可少许推测（3–5 个），须标注「推测」。
- 信息过少时**只追问本轮**（追问仍带 `Q3：` 前缀）。
- **本轮结束**按「模板选型 → 判定优先级」结算 `templateId`，简要说明判定依据；若与默认 `detail-form` 不同，Read 对应 props + rules。
- **本轮不要**询问生成路径（留给 Q4）。

### Q4 — 输出路径（必填；单独一轮文字问）

**问：** `Q4：页面生成到哪里？请给出相对仓库根的完整目录，例如 src/pages/OrderDetail/。`

- **必填**；未给出有效路径时**只追问此项**（仍带 `Q4：`），不得猜测或自动生成。
- 记录 `output.outputPath`；`output.pageName` = 路径末级目录名（PascalCase）。
- 路径有效后**不要**再问路由地址。生成时若工程有 react-router，按 [create-page-base/react-router.md](../create-page-base/react-router.md) 自动注册，并把 URL 入参写在对应 Route 注释上。

### Q5 — 确认（可选）

用简短摘要列出：判定后的模板（含理由）、接口、出参 mock 来源、展示来源与字段映射、`output.outputPath`。用户确认后再生成。

## 生成步骤

1. **读文档与模板** — Read 已判定模板的 props/rules；再递归 Read `.ai/docs/examples/{templatePath}/` **全部源码**（至少 `index.tsx`、`api/**`；`detail-form` 含 `Footer/`）。Glob 失败时用 `find` + 绝对路径 Read（见 [generation-constraints.md](../create-page-base/generation-constraints.md)）。
2. **写 `page-spec.json`** — 在目标页面目录写入本次问答结果，字段结构与 props.ts 对齐（见 [reference/page-spec.schema.json](reference/page-spec.schema.json)）。
3. **复制并改写** — **从模板目录复制**到目标路径（仅 `.ts`/`.tsx`）；按 props/rules 替换点与 [reference/generation.md](reference/generation.md) 改 URL、字段、文案；删除 demo 专有逻辑（`/api/examples/*`、`console.log`）。**禁止**参照同目录旧 JS 页或跳过模板手写。
4. **注册路由** — 工程有 react-router 时按 [create-page-base/react-router.md](../create-page-base/react-router.md) 追加与页面对应的 Route，注释写 URL 入参；没有则跳过。
5. **校验** — `npx tsc --noEmit`；修复新增文件中的类型错误。

## 产出清单

- `{output.outputPath}/index.tsx` 及子目录
- `{output.outputPath}/page-spec.json`
- 有 react-router 时：对应 Route（含 URL 入参注释）
- 向用户说明：模板来源（含判定理由）、主要改动、如何联调接口；若注册了路由一并给出 path

## 不允许

- 在详情页实现表单编辑与保存
- 跳过 Read `{Variant}-props.ts` + `{Variant}-rules.md` 直接写页面
- 跳过问答直接生成
- **开场让用户选择题选择详情模板**（必须默认 `detail-form`，再按 Q3 展示内容结算）
- **跳过 Q2**（接口出参 / mock）直接编造与接口无关的视图字段
- **在拿到展示内容（Q3）之前询问或写入输出路径（Q4）**
- **在一轮消息里同时索要跨主题内容**；Q1 / Q2 / Q3 各自主题内可一次给齐
- **跳过或自动填充输出路径**（Q4 必填）
- **工程有 react-router 时跳过注册路由**，或为路由 path 再开一轮问答
- 使用与 catalog 无关的随意目录当模板（除非用户明确指定路径）
- 引导用户去用不存在的公开入口 `create-page`
- **生成 `.js` / `.jsx` 业务页**（只允许 `.ts` / `.tsx`，见 [generation-constraints.md](../create-page-base/generation-constraints.md)）
- **未 Read 并复制 catalog 模板目录**就手写页面，或仅参照同模块旧 JS 页实现
