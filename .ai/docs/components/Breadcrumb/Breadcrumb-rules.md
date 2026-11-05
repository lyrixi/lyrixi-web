# Breadcrumb Rules

> 源文档：`src/components/Breadcrumb/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用

- 从 `lyrixi-web` 引入 `Breadcrumb`，**禁止**自造同类 UI。
- `BreadcrumbItem` 字段与 `TabBarItem` 一致；层级切换用 `Breadcrumb`，同级 Tab 用 `TabBar.Tabs`。

## 何时使用

- 需要展示页面层级路径、点击返回上级时
- **不要**用于同级内容切换（用 `TabBar.Tabs`）

## Demo 索引（本目录 `demos/`）

- `demos/Breadcrumb.tsx`

## 查阅顺序

- Props：`Breadcrumb-props.ts`
- 示例：`Breadcrumb-example.md`
