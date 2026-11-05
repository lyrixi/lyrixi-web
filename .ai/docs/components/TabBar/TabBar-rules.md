# TabBar Rules

> 源文档：`src/components/TabBar/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-web` 引入 `TabBar`，**禁止**自造同类 UI。
- 子组件写法：`TabBar.Sub`（与库导出一致）。

## 何时使用
- 需要显示内容标签页（页面分区、内容切换）时
- **不要**用于日 / 月 / 季 / 年 / 周等日期类型或周期切换；此类场景用 `DatePicker.TypeSwitcher`

## 子组件
- `TabBar.Group`
- `TabBar.Menus`
- `TabBar.Slide`
- `TabBar.Tabs`

## Demo 索引（本目录 `demos/`）
- `demos/TabBarTabs.tsx`
- `demos/TabBarSlide.tsx`
- `demos/TabBarMenus.tsx`
- `demos/TabBarGroup.tsx`

## 查阅顺序
- Props：`TabBar-props.ts`
- 示例：`TabBar-example.md`
