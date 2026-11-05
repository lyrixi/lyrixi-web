# Page Rules

> 源文档：`src/components/Page/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-web` 引入 `Page`，**禁止**自造同类 UI。
- 子组件写法：`Page.Sub`（与库导出一致）。

## 何时使用
- 需要构建页面布局时
- 需要页面级别的容器时
- 需要带安全区的页面时

## 子组件
- `Page.Aside`
- `Page.Footer`
- `Page.Header`
- `Page.Main`

## Demo 索引（本目录 `demos/`）
- `demos/Page.tsx`
- `demos/Refresh.tsx`

## 查阅顺序
- Props：`Page-props.ts`
- 示例：`Page-example.md`