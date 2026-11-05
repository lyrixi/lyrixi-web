# 模板复制与 API 改写（List）

> **强制：** 仅生成 `.ts`/`.tsx`；必须从 catalog 模板目录复制。见 [generation-constraints.md](../../create-page-base/generation-constraints.md)。

模板根目录：`.ai/docs/examples/{templatePath}/`  
文档三件套：`.ai/docs/examples/List/{Variant}-props.ts`、`-rules.md`、`-example.md`  
生成目标：`page-spec.output.outputPath`（相对仓库根；命名习惯见 [page-structure.mdc](../../../rules/page-structure.mdc)）

生成时以 **props.ts 中的可替换项** 为准，将 page-spec.json / 问答结果写入模板对应文件（见各 `-rules.md` 替换点表）。

## 目录映射

| 模板    | 典型结构                                                                               | 生成时                       |
| ------- | -------------------------------------------------------------------------------------- | ---------------------------- |
| List/\* | `index.tsx`, `Header/`, `Main/`, `Footer/`（可选）, `api/queryData/`（或 Main 内 url） | 保留；`queryData` 接真实 URL |

入口组件名 = 目录末级名（`OrderList` 目录 → `const OrderList = () => …`）。

## API 改写

以模板中的 `api/queryData/index.ts`（或 Main 内 url / `formatPayload`）为蓝本：

1. **url** — 替换为 `page-spec.json` 的 `apiUrl`（或 `api.*.url`）。
2. **method** — `GET` / `POST`，与 `Request.get` / `Request.post` 一致；未说明时默认 `POST`。
3. **Content-Type** — 写入请求 `headers`（如 `{ 'Content-Type': 'application/json' }`）；未说明时默认 `application/json`。
4. **入参** — 根据 `apiRequest` / `api.*.request`：
   - URL 参数：`Device.getUrlParameter('id')`
   - 查询 state：`queryParams.xxx` → 经 `formatPayload` / `serverData` / `toServerParams` 转出（模板有则沿用文件名）
5. **出参** — 根据 `api.*.response`（`ApiResponseMapping`）映射到统一形态：
   - `success` → 成功时 `result.status = 'success'`（或模板约定的 loading/empty 等）
   - `error` → 失败时 `result.status = 'error'`
   - `data` → 业务数据；列表用 `localData` / `formatResponse` 转前端字段
   - `message` → 错误文案，写入 `result.message`

命名约定：查询 `queryXxx`；`serverData` / `localData`（或 `formatPayload` / `formatResponse`）用于前后端结构转换。

## Mock 与视图字段

**Q3** 用 mock 描述出参（写入 `mockData`，并推导 `api.*.response`）；**Q4** 再定展示内容与字段映射。生成视图时二者结合：

| 来源                               | 生成策略                                                                                                 |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `mockData.source = 'user'`         | 从 `sample` 的业务 `data` 取字段候选；再按 `design.fieldMapping` / `listItem` / `designNotes` 决定行展示 |
| `mockData.source = 'inferred'`     | 优先用 Q4；否则推测 `titleField`/`descriptionField`。**必须在产出说明标注「字段为推测」**                |
| `design.source = 'image' \| 'mcp'` | 按稿调整 Header/Main/Footer 布局；字段仍尽量对齐 mock / `fieldMapping`                                   |
| `design.source = 'text'`           | 在模板骨架上按文字增删筛选项、`formatViewItem` 等                                                        |

- 有 mock 时：**禁止**无视 sample 自行编造与 sample 无关的后台字段名。
- 无 mock 时：推测字段宜少不宜多（3–5 个）。
- `mockData.sample` **仅写入 page-spec**，不要作为运行时 mock 留在 `api/**`。

## 视图改写

- **有图片 / MCP 设计稿**：按稿调整 Header/Main/Footer；组件选用 `lyrixi-web` 与模板一致。
- **仅文字描述**：在模板骨架上按 `fieldMapping` 增删字段，不推翻模板数据流。

未启用的区块（如不需要的 Footer）可删除引用。

## 导入

- 业务页使用 `import { … } from 'lyrixi-web'`（测试包名模式）。
- `import type` 放在第三方 import 之后、相对路径之前（见 `global-coding-sequence.mdc`）。

## 不要复制

- 模板里的 `/api/examples/*` 若仅为 demo，一律换成用户提供的 `apiUrl`。
- `mockResult`、纯演示用 `console.log` 不要带入新页。

写完页面后若工程有 react-router，按 [create-page-base/react-router.md](../../create-page-base/react-router.md) 注册路由。
