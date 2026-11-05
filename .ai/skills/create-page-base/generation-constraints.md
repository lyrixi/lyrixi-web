# create-page 生成强制约定

适用于 `create-page-list` / `create-page-edit` / `create-page-detail` / `create-page-login` 问答结束后生成 `src/pages/**` 业务页。

## 文件语言（强制）

| 允许          | 禁止          |
| ------------- | ------------- |
| `.ts`、`.tsx` | `.js`、`.jsx` |

- 新页面及子目录（`index`、`Header/`、`Main/`、`Footer/`、`api/**`、`utils/**`）**一律 TypeScript**。
- **不得**因目标目录旁已有旧 `.js` 页、或同模块历史代码为 JS，而生成 JavaScript。
- 路由 lazy import 指向目录即可（如 `import('.../subTask')`），由构建解析 `index.tsx`。

## 模板复制（强制）

1. 在 [`.ai/docs/examples/catalog.json`](../../docs/examples/catalog.json) 中按 Q3 / 规则判定 `templateId`，读取对应 `templatePath`（如 `Detail/demos/IndicatorList`）。
2. **以模板目录为唯一骨架来源**：复制其目录结构与文件清单，再按 `props` / `rules` / `generation.md` 替换 URL、字段、文案。
3. **禁止**跳过模板、参照同业务旧页手写、或只「借鉴思路」重写一套目录。
4. 生成前 **必须 Read** 已判定模板的：
   - `{Variant}-props.ts`
   - `{Variant}-rules.md`
   - `demos/{Variant}/` 下全部源码（至少 `index.tsx`、`api/**`；Detail 的 form 含 `Footer/`）
5. 若 IDE Glob 读不到 `.ai/docs/examples/**`，**必须用终端 `find` / `Read` 绝对路径**读取模板，不得因此改用旧 JS 页。

## 校验

- 完成后执行 `npx tsc --noEmit`，修复新增 TS 错误。
- 产出说明中须写明：**模板 id**、**templatePath**、相对模板的 main 改动点。
