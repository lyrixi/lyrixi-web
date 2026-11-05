# ListAsync Rules

> 源文档：`src/components/ListAsync/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-web` 引入 `ListAsync`，**禁止**自造同类 UI。
- 子组件写法：`ListAsync.Sub`（与库导出一致）。

## 何时使用
- 需要显示分页数据列表时
- 需要自动加载数据时
- 需要支持下拉刷新和上拉加载时

## Demo 索引（本目录 `demos/`）
- `demos/ListAsyncList.tsx`
- `demos/ListAsyncVirtualList.tsx`

## 查阅顺序
- Props：`ListAsync-props.ts`
- 示例：`ListAsync-example.md`