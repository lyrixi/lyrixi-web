# List CommonManual Rules

> 模板 ID：`list-common-manual` · 源码：`demos/CommonManual/`

## 何时使用

- 使用 **ListAsync** 手动控制加载（下拉刷新 / 上拉加载）
- 不用 ListPagination 自动 url 模式

## 目录结构

| 路径 | 职责 |
|------|------|
| `index.tsx` | loadData 回调内调 api/queryData |
| `Main/` | ListAsync.Main + ref.reload |
| `api/queryData/` | 返回 list、status、message |

## 替换点

| 字段 | 位置 |
|------|------|
| `api.queryData` | `api/queryData/`；loadData 内合并分页 |
| `main.listItem` | Main 列表项渲染 |
