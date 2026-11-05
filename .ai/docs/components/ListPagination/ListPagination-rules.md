# ListPagination Rules

> 源文档：`src/components/ListPagination/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-web` 引入 `ListPagination`，**禁止**自造同类 UI。
- 子组件写法：`ListPagination.Sub`（与库导出一致）。

## 何时使用
- 需要显示分页数据列表时
- 需要自动加载数据、下拉刷新和上拉加载时
- 需要从分页列表中单选/多选并展示在输入框或弹窗时

## 子组件
- `ListPagination.Combo`
- `ListPagination.Main`
- `ListPagination.Modal`

## Demo 索引（本目录 `demos/`）
- `demos/ListPaginationMain/index.tsx`
- `demos/ListPaginationCombo/index.tsx`
- `demos/ListPaginationModal/index.tsx`

## 查阅顺序
- Props：`ListPagination-props.ts`
- 示例：`ListPagination-example.md`