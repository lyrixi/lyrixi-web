# 模板复制与 API 改写（Edit）

> **强制：** 仅生成 `.ts`/`.tsx`；必须从 catalog 模板目录复制。见 [generation-constraints.md](../../create-page-base/generation-constraints.md)。

模板根目录：`.ai/docs/examples/{templatePath}/`  
文档三件套：`.ai/docs/examples/Edit/{Variant}-props.ts`、`-rules.md`、`-example.md`  
生成目标：`page-spec.output.outputPath`（相对仓库根；命名习惯见 [page-structure.mdc](../../../rules/page-structure.mdc)）

生成时以 **props.ts 中的可替换项** 为准，将 page-spec.json / 问答结果写入模板对应文件（见各 `-rules.md` 替换点表）。

## 目录映射

| 模板    | 典型结构                               | 生成时   |
| ------- | -------------------------------------- | -------- | -------------- | -------------------------------------------------------- |
| Edit/\* | `index.tsx`, `Footer/`, `api/queryData | saveData | validateData/` | 按用户接口增删 `saveData`；有校验层时保留 `validateData` |

入口组件名 = 目录末级名（`OrderEdit` 目录 → `const OrderEdit = () => …`）。api 完整结构可参考 `Edit/demos/Cache/`。

## API 改写

以模板中的 `api/queryData/index.ts`、`api/saveData/index.ts`（或同类）为蓝本：

1. **url** — 替换为 `page-spec.json` 的 `apiUrl`（或 `api.*.url`）。
2. **method** — `GET` / `POST`，与 `Request.get` / `Request.post` 一致；未说明时默认 `POST`。
3. **Content-Type** — 写入请求 `headers`（如 `{ 'Content-Type': 'application/json' }`）；未说明时默认 `application/json`。
4. **入参** — 根据 `apiRequest` / `api.*.request`：
   - URL 参数：`Device.getUrlParameter('id')`
   - 表单字段 → 经 `serverData` 转请求体（模板有则沿用文件名）
5. **出参** — 根据各接口自己的 `api.queryData.response` / `api.saveData.response`（`ApiResponseMapping`）映射到统一形态：
   - `success` → 成功时 `result.status = 'success'`（或模板约定）
   - `error` → 失败时 `result.status = 'error'`
   - `data` → 业务数据；**queryData** 经 `localData` 转表单值；**saveData** 用于提交结果（Toast、防重复等），不要当表单字段源
   - `message` → 错误文案，写入 `result.message`

命名约定：查询 `queryXxx`，提交 `saveXxx`；`serverData` / `localData` 用于前后端结构转换。编辑页**不要**用 `approveData`。

## Mock 与视图字段

**Q2** 分别收集 queryData / saveData 出参 mock（写入 `mockData.queryData`、`mockData.saveData`，并推导对应 `api.*.response`）；**Q3** 再定展示内容与字段映射。生成视图时结合 **queryData** mock 与 Q3：

| 来源                                     | 生成策略                                                                                                       |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `mockData.queryData.source = 'user'`     | 从 query `sample` 的业务 `data` 取字段候选；再按 `design.fieldMapping` / `formFields` / `designNotes` 决定控件 |
| `mockData.queryData.source = 'inferred'` | 优先用 Q3；否则推测若干输入控件。**必须在产出说明标注「字段为推测」**                                          |
| `mockData.saveData.source = 'user'`      | 用于提交成功/失败、`code === '2'` 防重复、Toast 文案；**不要**把 save 的 `data` 当表单字段                     |
| `mockData.saveData.source = 'inferred'`  | 成功/失败映射沿用 query 的 `code` / `message`（或默认 `code === '1'`）；产出注明「提交出参为推测」             |
| `design.source = 'image' \| 'mcp'`       | 按稿调整布局与 `name`/`label`；字段仍尽量对齐 query mock / `fieldMapping`                                      |
| `design.source = 'text'`                 | 在模板骨架上按文字增删可编辑 `Form.Item`                                                                       |

- 有 queryData mock 时：**禁止**无视 sample 自行编造与 sample 无关的后台字段名。
- 无 queryData mock 时：推测字段宜少不宜多（3–5 个）。
- `mockData.*.sample` **仅写入 page-spec**，不要作为运行时 mock 留在 `api/**`。

## 视图改写

- **有图片 / MCP 设计稿**：按稿调整 Form / Footer 与表单项 `name`/`label`；组件选用 `lyrixi-web` 与模板一致。
- **仅文字描述**：在模板骨架上按 `fieldMapping` 增删字段，不推翻模板数据流。

无提交按钮需求时仍建议保留 `Footer/`（编辑页默认保存）；草稿键名仅 `edit-cache` 替换 `cacheConfig`。

## 导入

- 业务页使用 `import { … } from 'lyrixi-web'`（测试包名模式）。
- `import type` 放在第三方 import 之后、相对路径之前（见 `global-coding-sequence.mdc`）。

## 不要复制

- 模板里的 `/api/examples/*` 若仅为 demo，一律换成用户提供的 `apiUrl`。
- `mockResult`、纯演示用 `console.log` 不要带入新页。

写完页面后若工程有 react-router，按 [create-page-base/react-router.md](../../create-page-base/react-router.md) 注册路由。
