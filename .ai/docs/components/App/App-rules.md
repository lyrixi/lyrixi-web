# App Rules

> 源文档：`src/components/App/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-web` 引入 `App`，**禁止**自造同类 UI。
- 子组件写法：`App.Sub`（与库导出一致）。

## 何时使用
- 需要应用初始化时
- 需要配置全局设置时
- 需要启用日志、调试等功能时

## 查阅顺序
- Props：`App-props.ts`
- 示例：`App-example.md`