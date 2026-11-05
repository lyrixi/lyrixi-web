# Toast Rules

> 源文档：`src/components/Toast/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-web` 引入 `Toast`，**禁止**自造同类 UI。
- 子组件写法：`Toast.Sub`（与库导出一致）。

## 何时使用
- 需要显示简短的消息提示时
- 需要显示操作结果时
- 需要显示成功、错误、警告等信息时

## Demo 索引（本目录 `demos/`）
- `demos/Toast.tsx`
- `demos/ToastApi.tsx` — Toast.open / close 命令式 API

## 查阅顺序
- Props：`Toast-props.ts`
- 示例：`Toast-example.md`