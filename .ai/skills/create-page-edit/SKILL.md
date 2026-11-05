---
name: create-page-edit
description: >-
  仅当用户明确点名 create-page-edit 时加载，未点名不要读取。用途：编辑页架构说明与生成。
---

# create-page-edit

编辑页**公开入口**：目录架构、**`.ai/docs/examples/Edit/`** 模板选型，以及从问答到生成业务页的完整流程（本 skill 自包含，不依赖其它 create-page skill）。

**约束：** 遵守 [`.ai/rules/page-structure.mdc`](../../rules/page-structure.mdc)、[`global-coding-sequence.mdc`](../../rules/global-coding-sequence.mdc)、[`global-coding-locale.mdc`](../../rules/global-coding-locale.mdc)、[`create-page-base/generation-constraints.md`](../create-page-base/generation-constraints.md)（**仅 `.ts`/`.tsx`；必须从 catalog 模板复制**）。生成代码时**不要修改** `.ai/rules/`。

## 何时启用

- 用户要新建**编辑页**（新建/修改表单、带校验提交、草稿缓存）
- 用户问编辑页的 Form / api/saveData / validateData 该怎么组织
- 用户说「create-page-edit」「编辑页架构」「参考编辑模板」「生成编辑页」

## 页面命名

后缀用 `Edit`。见 `page-structure.mdc`。

## 目录架构（业务页通用）

编辑页以 `Form` 为中心，加载、校验、提交均在 `api/` 完成：

```
{PageName}/
├── index.tsx          # 入口：Form、loadData、handleSave、Result 全屏态
├── index.less         # 页面样式（可选）
├── api/
│   ├── index.ts       # 统一导出 queryData / saveData / validateData
│   ├── queryData/     # 加载详情或空白表单（含 types.ts）
│   ├── saveData/      # 提交（serverData 转换，含 types.ts）
│   ├── validateData/  # 提交前校验（可选）
│   └── cacheConfig.ts # Storage 草稿配置（仅 Cache 模板）
├── Footer/            # 提交按钮（含 types.ts），onSave → handleSave
└── utils/             # 页面级工具（可选，如 scrollToErrorElement）
```

类型约定：各组件 / api 文件夹内放 `types.ts`；无子组件时（如 Common 全量表单单文件）可放页面根目录 `types.ts`。

编辑页**通常无 Header / Main**（字段直接在 `index.tsx` 的 `Form` 内，或用 `Card` / `Divider` 分组）。复杂布局可拆子组件，但保持 `api/` 集中数据逻辑。

### 各文件夹职责

| 文件夹               | 职责                                       | 编辑页典型内容                                                   |
| -------------------- | ------------------------------------------ | ---------------------------------------------------------------- |
| `index.tsx`          | `Form.useForm()`、`loadData`、`handleSave` | `useEffect` 调 `queryData`；`Form.Item` + 控件；`Result` 空/错态 |
| `Footer/`            | 底部提交                                   | `FooterBar` 保存按钮，触发 `onSave`                              |
| `api/queryData/`     | 初始化数据                                 | id 来自 URL；`localData` 转表单值                                |
| `api/saveData/`      | 提交                                       | `serverData` 转请求体；防重复 `token`                            |
| `api/validateData/`  | 校验                                       | 失败时 `scrollToErrorElement`                                    |
| `api/cacheConfig.ts` | 草稿键名                                   | 仅 `edit-cache` 模板                                             |

### api 命名约定

- 查询：`queryData`（编辑页加载已有数据）
- 增/改提交：`saveData`
- 校验：`validateData`
- 转换：`serverData`（表单 → 接口）、`localData`（接口 → 表单）

### index.tsx 骨架

```tsx
const form = Form.useForm()
const tokenRef = useRef(String(Date.now()))

async function loadData() {
  const newResult = await queryData()
  setResult(newResult)
  // 成功时 form.setFieldsValue(localData)
}

async function handleSave() {
  const res = await saveData({ token: tokenRef.current, ... })
  // Toast、防重复 code === '2'
}

return (
  <Page>
  <Form form={form}>...</Form>
  <Footer onSave={handleSave} />
  </Page>
)
```

## 参考文档位置（`.ai/docs/examples/Edit/`）

| 文件                   | 用途                                     |
| ---------------------- | ---------------------------------------- |
| `{Variant}-props.ts`   | 可替换项（api、formFields、footer 文案） |
| `{Variant}-rules.md`   | 何时用、目录结构、替换点、禁止项         |
| `{Variant}-example.md` | Demo 索引                                |
| `demos/{Variant}/`     | 完整参考源码                             |

公共类型：[`types/PageTemplate.types.ts`](../../docs/examples/types/PageTemplate.types.ts)

清单索引：[`catalog.json`](../../docs/examples/catalog.json)（`category: "Edit"` 条目）

## 模板选型（Edit）

| id             | 标题                 | 源码                  | 适用场景                                                    |
| -------------- | -------------------- | --------------------- | ----------------------------------------------------------- |
| `edit-common`  | 表单编辑（全量控件） | `Edit/demos/Common/`  | **默认**；新建/编辑；多种 Form 控件；**无** Storage 草稿    |
| `edit-cache`   | 带缓存的表单编辑     | `Edit/demos/Cache/`   | 用户在 Q4（生成路径轮）明确需要缓存（将会增加代码的复杂性） |
| `edit-virtual` | 虚拟滚动表单编辑     | `Edit/demos/Virtual/` | 用户主动要求虚拟滚动时使用；**不要**在问答中主动询问        |

注意：`Edit/demos/Common/index.tsx` 为控件展示，实际 **api / Footer** 引用 `Cache` 目录实现；生成 `edit-common` 业务页时以 `Cache` 的 `api/` 结构为完整参考（可不复制 `cacheConfig`）。

### 判定优先级（Q4 结束后结算）

1. 用户主动要求虚拟滚动 → `edit-virtual`（不主动询问）
2. 否则用户在 Q4 确认需要缓存 → `edit-cache`
3. 否则 → `edit-common`

缓存与虚拟滚动目前是**独立模板、不可叠加**。若用户两者都要，**本轮内**追问以哪个为准（并提醒都会增加复杂性）；不得擅自叠两套逻辑。

模板确定后 Read：

1. `Edit/{Variant}-props.ts`
2. `Edit/{Variant}-rules.md`
3. `Edit/demos/Cache/`（api 完整结构）+ `Edit/demos/{Variant}/`（表单字段）

准备阶段可先 Read `edit-common` 的 props/rules 作默认底稿；若最终模板变更，再改读对应三件套。

## Cache 模板目录详解（api 完整参考）

`Edit/demos/Cache/` 是编辑页 api 层的标准结构：

```
Cache/
├── index.tsx
├── Footer/
│   ├── index.tsx
│   └── types.ts
└── api/
    ├── index.ts
    ├── cacheConfig.ts       # Storage 键前缀
    ├── queryData/
    │   ├── index.ts
    │   └── types.ts
    ├── saveData/
    │   ├── index.ts
    │   ├── types.ts
    │   └── serverData.ts
    └── validateData/
        ├── index.ts
        └── scrollToErrorElement.ts
```

`edit-common` 替换点：增删 `Form.Item`、改 `api.*` URL、去掉 demo 专有 mock；可不保留 `cacheConfig`。

`edit-cache` 额外替换：`cacheConfig.name`、真实 query/save URL。

## 禁止项（Edit 通用）

- 使用已废弃 Button API（用 `variant` + `color`）
- 在 `index.tsx` 内直接 `fetch` 而不经 `api/`
- 详情只读页误用 `saveData`（应使用 [create-page-detail](../create-page-detail/SKILL.md)）

---

# 生成业务页（问答 + 改写）

仅问架构、不生成代码时，到此为止即可。需要生成 `src/pages/` 时，按下列流程执行。

## 准备

1. Read [`catalog.json`](../../docs/examples/catalog.json) — 只使用 `category: "Edit"` 的条目。
2. Read [reference/generation.md](reference/generation.md) — 复制模板后的 API / 目录改写规则。
3. 默认 `templateId = edit-common`；可先 Read Common 的 props + rules（最终以 Q4 是否缓存判定结果为准）。

## 问答原则（必读）

- **一次只问一件事**：每一轮只收集一个主题；拿到用户回复后再问下一项。
- **对用户提问必须带题号**：面向用户的问句以 `Qn：` 开头（与本节编号一致），例如 `Q1：请提供接口地址与入参：`（同 create-page-list / create-page-detail 等 create-page-\* 的问答标注习惯）。
- **禁止开场问模板**：默认 `edit-common`；不得用选择题让用户「选具体模板」。是否缓存在 **Q4 生成路径** 轮附带询问，不要单独开一轮。
- **顺序固定**：接口入参 → 接口出参 → 展示内容 → **最后**问生成路径（同轮附带是否缓存）。不得提前问输出路径。
- **自由填写**禁止合并成「请在下一条消息补充 1、2、3…」跨主题清单；同一主题内可一次给齐（见 Q1 / Q2 / Q3；Q2 含 queryData 与 saveData 两份出参）。
- **例外：**
  - **Q1** — 地址与入参同轮；method / Content-Type 未说明则默认 `POST` + `application/json`。
  - **Q2** — **queryData 与 saveData 各贴一份** mock JSON；同轮收集，并从各自结构推导 `success` / `data` / `message`（结构不符默认时再追问映射）。
  - **Q3** — 展示内容来源（图片 / MCP 设计稿 / 文字）与字段映射同轮收集。
  - **Q4** — 输出路径必填；同轮附带问是否需要缓存（默认否）。**不要**主动询问虚拟滚动。
- 表述不清时**只追问当前主题缺项**，不要猜测业务含义。
- 未完成全部问答前**不要**开始写业务代码。

## 问答流程（必须按序）

### Q1 — 接口地址与入参（单独一轮文字问）

**问：** `Q1：请提供接口地址与入参：（可一并说明请求方式、Content-Type）。通常含 queryData 与 saveData。`

示例：

```
queryData：/api/order/detail
入参：id (string) 来自 Device.getUrlParameter('id')
saveData：/api/order/save
入参：表单字段 + token
方式：POST（可选）
Content-Type：application/json（可选）
```

**默认值（用户未说明时）：**

| 项                   | 默认               |
| -------------------- | ------------------ |
| 请求方式 `apiMethod` | `POST`             |
| Content-Type         | `application/json` |

记录：`apiUrl`、`apiRequest`（映射到 props 的 `api.*.request`）、`apiMethod`、`apiContentType`。地址或入参缺失时**只追问本轮缺项**（追问仍带 `Q1：` 前缀）。

### Q2 — 接口出参（queryData / saveData 各一份 mock；单独一轮）

**问：** `Q2：请分别用后台 mock 描述 queryData 和 saveData 的出参（各贴一份完整 response，含 code / message / data）。`

可参考 [reference/mock-data-template.txt](reference/mock-data-template.txt)。

示例：

```
queryData 出参：
{ "code": "1", "message": "", "data": { "name": "示例名称", "status": "1" } }

saveData 出参：
{ "code": "1", "message": "保存成功", "data": null }
```

**解析与默认：**

| 情况                                   | 处理                                                                                                          |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 两份均为合法 JSON                      | `mockData.queryData` / `mockData.saveData` 各自 `source = 'user'`，`sample` = 解析结果                        |
| 只贴了一份且未标明接口                 | 记为 `queryData`；`saveData.source = 'inferred'`，成功/失败映射沿用 query 的 `code` / `message`，产出注明推测 |
| 标明了接口但缺另一份                   | 已给的记 `user`；缺的记 `inferred`（query 缺则后续按 Q3 推测表单字段；save 缺则沿用 query 的成功/失败映射）   |
| 两份都没有                             | 两者 `source = 'inferred'`；后续按 Q3 推测字段，产出注明「字段为推测，联调后需校正」                          |
| 某份含常见 `code` / `data` / `message` | 写入对应 `api.queryData.response` 或 `api.saveData.response`                                                  |
| 某份结构明显不同                       | **本轮内**对照 [reference/api-response-template.txt](reference/api-response-template.txt) 只追问该接口的映射  |

JSON 无法解析时**只追问本轮缺项**（追问仍带 `Q2：` 前缀）。Q3 表单字段只对齐 **queryData** 的 `sample`，不要用 saveData 的 `data` 当表单字段。

### Q3 — 展示内容（单独一轮）

**问：** `Q3：页面要展示哪些内容？请任选一种（或组合）说明：`

1. **图片设计稿** — 上传高保真截图 / 导出图
2. **MCP 设计稿** — 提供 Figma（等）链接
3. **文字描述** — 写清布局、交互，以及**表单字段 ↔ 后台字段**对应关系

文字示例：

```
布局：Form 分组；底部保存
表单字段：
- 名称 Input.Text → data.name
- 状态 Select → data.status
```

| 用户提供    | 记录                                                       |
| ----------- | ---------------------------------------------------------- |
| 图片        | `design.source = 'image'`；分析图写入 `design.designNotes` |
| MCP / Figma | `design.source = 'mcp'`；拉取后整理进 `design.designNotes` |
| 文字        | `design.source = 'text'`；原文写入 `design.designNotes`    |
| 字段对应    | `design.fieldMapping`                                      |

- 有 Q2 **queryData** mock 时：字段名优先与 `mockData.queryData.sample` 对齐，**禁止**编造与该 mock 无关的后台字段。
- 无 queryData mock 且文字也未列字段：可少许推测（3–5 个），须标注「推测」。
- 信息过少时**只追问本轮**（追问仍带 `Q3：` 前缀）。
- **本轮不要**询问生成路径或是否缓存（留给 Q4）。

### Q4 — 输出路径 + 是否缓存（必填路径；单独一轮）

**问：** `Q4：页面生成到哪里？请给出相对仓库根的完整目录，例如 src/pages/OrderEdit/。另外此页面要不要缓存（将会增加代码的复杂性，默认否）？`

- **路径必填**；未给出有效路径时**只追问路径**（仍带 `Q4：`），不得猜测或自动生成。
- 记录 `output.outputPath`；`output.pageName` = 路径末级目录名（PascalCase）。
- **缓存**：需要 → 记入 design / page-spec，倾向 `edit-cache`；否 / 未答 → 保持 `edit-common`。
- **不要**在本轮主动询问虚拟滚动。
- 路径有效后按「模板选用」结算 `templateId`，并 Read 对应 props + rules（若与已读 Common 不同则改读）。
- 路径有效后**不要**再问路由地址。生成时若工程有 react-router，按 [create-page-base/react-router.md](../create-page-base/react-router.md) 自动注册，并把 URL 入参写在对应 Route 注释上。

### Q5 — 确认（可选）

用简短摘要列出：判定后的模板、接口、queryData / saveData 出参 mock 来源、展示来源与字段映射、是否缓存、`output.outputPath`。用户确认后再生成。

## 生成步骤

1. **读文档与模板** — Read 已判定模板的 props/rules；再递归 Read `.ai/docs/examples/{templatePath}/` **全部源码**（至少 `index.tsx`、`api/**`、`Footer/`；api 完整结构可参考 `Edit/demos/Cache/`）。Glob 失败时用 `find` + 绝对路径 Read（见 [generation-constraints.md](../create-page-base/generation-constraints.md)）。
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

- 跳过 `validateData` 约定直接提交（模板有校验层时保留）
- 跳过 Read `{Variant}-props.ts` + `{Variant}-rules.md` 直接写页面
- 编辑页使用 `approveData`（审批属详情页）
- 跳过问答直接生成
- **开场让用户选择题选择编辑模板**（必须默认 `edit-common`，再按 Q4 是否缓存结算）
- **跳过 Q2**（queryData / saveData 出参 mock）直接编造与接口无关的视图字段
- **在拿到展示内容（Q3）之前询问或写入输出路径（Q4）**
- **单独开一轮只问缓存 / 虚拟滚动**（缓存必须附带在 Q4 生成路径轮；虚拟滚动不主动问）
- **在一轮消息里同时索要跨主题内容**；Q1 / Q2 / Q3 各自主题内可一次给齐（Q2 为 queryData 与 saveData 两份出参）；Q4 允许路径与是否缓存同轮
- **跳过或自动填充输出路径**（Q4 路径必填）
- **工程有 react-router 时跳过注册路由**，或为路由 path 再开一轮问答
- 使用与 catalog 无关的随意目录当模板（除非用户明确指定路径）
- 引导用户去用不存在的公开入口 `create-page`
- **生成 `.js` / `.jsx` 业务页**（只允许 `.ts` / `.tsx`，见 [generation-constraints.md](../create-page-base/generation-constraints.md)）
- **未 Read 并复制 catalog 模板目录**就手写页面，或仅参照同模块旧 JS 页实现
