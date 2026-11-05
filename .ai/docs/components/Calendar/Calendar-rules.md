# Calendar Rules

> 源文档：`src/components/Calendar/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-web` 引入 `Calendar`，**禁止**自造同类 UI。
- 子组件写法：`Calendar.Sub`（与库导出一致）。

## 何时使用
- 需要显示日历时
- 需要选择日期时
- 需要选择日期范围时

## 子组件
- `Calendar.Header`
- `Calendar.isDisabledDate`

## Demo 索引（本目录 `demos/`）
- `demos/Calendar.tsx`
- `demos/CalendarHeader.tsx`

## 查阅顺序
- Props：`Calendar-props.ts`
- 示例：`Calendar-example.md`