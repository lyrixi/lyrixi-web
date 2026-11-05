# Button Rules

> 源文档：`src/components/Button/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用

- 从 `lyrixi-web` 引入 `Button`，**禁止**自造同类 UI。
- 子组件写法：`Button.Text`、`Button.Icon`（与库导出一致）。

## 何时使用

- 需要触发一个操作时
- 需要提交表单时
- 需要执行确认、取消等操作时

## 样式 API（variant + color）

- 使用 **`variant` + `color`** 控制外观，**不要**再使用已移除的 `backgroundColor` / `borderColor` / `border`。
- `color` 为语义色：`default` | `secondary` | `tertiary` | `quaternary` | `primary` | `info` | `warning` | `danger` | `success`。
- `variant` 为外观：`solid` | `text` | `outlined` | `filled` | `dashed`。
- 推荐从 barrel 引入枚举：`import { Button, ButtonColor, ButtonVariant } from 'lyrixi-web'`。

## 子组件
- `Button.Group`
- `Button.Icon`
- `Button.Text`

## Demo 索引（本目录 `demos/`）

- `demos/Button.tsx` — variant × color 矩阵、size、block
- `demos/ButtonText.tsx` — Button.Text、与 Icon 组合
- `demos/ButtonIcon.tsx` — Button.Icon 尺寸与圆形按钮

## 查阅顺序

- Props：`Button-props.ts`
- 示例：`Button-example.md`
