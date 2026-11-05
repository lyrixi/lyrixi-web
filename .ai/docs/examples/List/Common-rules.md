# List Common Rules

> 模板 ID：`list-common` · 源码：`demos/Common/`

## 何时使用

- 标准分页列表，Header 筛选 + ListPagination 自动加载
- 不需要 IndexBar、虚拟滚动、手动 ListAsync

## 目录结构

| 路径 | 职责 |
|------|------|
| `index.tsx` | queryParams、Header/Main 组合 |
| `Header/` | ToolBar 搜索/筛选，onSearch 更新 queryParams |
| `Main/` | ListPagination.Main，url + formatPayload/Result/ViewItem |
| `Footer/` | 可选，本模板默认无 |

## 替换点

| 问答 / page-spec 字段 | 替换位置 |
|----------------------|----------|
| `output` | 生成目录、组件名 |
| `design.designNotes` | 增删 Header 筛选项、列表列 |
| `api.queryData` | `Main/index.tsx` url；`api/` 或 format 函数 |
| `cacheName` | `index.tsx` → Main |
| `main.listItem` | `Main/formatViewItem.tsx` |
| `header.filters` | `Header/Filter/` |

## 查阅

- 可替换项：`Common-props.ts`
- 示例索引：`Common-example.md`
