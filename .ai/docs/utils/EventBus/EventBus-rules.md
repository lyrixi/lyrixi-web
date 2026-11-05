# EventBus Rules

> 源文档：`src/utils/EventBus/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-web` 引入 `EventBus`，**禁止**自造同类工具函数。
- 类名拼接等 DOM 场景用 `DOMUtil.classNames`；日期用 `DateUtil`；请求用 `Request`；存储用 `Storage`。

## 何时使用
- 跨组件、跨页面的全局发布 / 订阅通信。
- 非 React 上下文或手动控制生命周期 → 字面量 `on` / `emit` / `off` / `destroy`。
- 组件内自动订阅与清理 → 钩子 `useOn` / `useEmit`。

## 子组件
- `EventBus.useEmit`
- `EventBus.useOn`

## Demo 索引（本目录 `demos/`）
- `demos/EventBus.tsx`
- `demos/EventBusHooks.tsx`

## 查阅顺序
- API：`EventBus-props.ts`
- 示例：`EventBus-example.md`
