# VariablesUtil Rules

> 源文档：`src/utils/VariablesUtil/` 源码。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-web` 引入 `VariablesUtil`，**禁止**自造同类工具函数。
- 类名拼接等 DOM 场景用 `DOMUtil.classNames`；日期用 `DateUtil`；请求用 `Request`；存储用 `Storage`。
- 主题切换用 `Theme`；本工具提供 token 表与 class/value 解析。

## 何时使用
- 取语义色 / 字号 / 高度等 **class** 用 `get*Class`（如 `getColorClass('primary')`）；**仅 string** 可调，number 绝不能进 `get*Class`。
- 取对应 **CSS 值** 用 `get*Value`。尺寸类（字号 / 字重 / 高度 / 圆角 / 图标尺寸）允许传 `number`，但非 `string` 一律原样返回，只有 `string` 才查 token。
- 需要完整 token 表时用 `variables`（`var(--lyrixi-*)` 引用）、`variablesDefault` / `variablesDark`（实体值，供 Theme 使用）。

## API 索引
- `VariablesUtil.variables` / `variablesDefault` / `variablesDark`
- `VariablesUtil.getColorClass` / `getColorValue`
- `VariablesUtil.getBgColorClass` / `getBgColorValue`
- `VariablesUtil.getBorderColorClass` / `getBorderColorValue`
- `VariablesUtil.getFontSizeClass` / `getFontSizeValue`
- `VariablesUtil.getFontWeightClass` / `getFontWeightValue`
- `VariablesUtil.getHeightClass` / `getHeightValue`
- `VariablesUtil.getRadiusClass` / `getRadiusValue`
- `VariablesUtil.getIconSizeClass` / `getIconSizeValue`

## 查阅顺序
- API：`VariablesUtil-props.ts`
- 示例：`VariablesUtil-example.md`
