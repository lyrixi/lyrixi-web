# Picker Rules

> 源文档：`src/components/Picker/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-web` 引入 `Picker`，**禁止**自造同类 UI。
- 子组件写法：`Picker.Sub`（与库导出一致）。

## 何时使用
- 需要从多个选项中选择时
- 需要滚动选择时
- 需要选择日期、时间等时

## 子组件
- `Picker.Combo`
- `Picker.Main`
- `Picker.Modal`

## Demo 索引（本目录 `demos/`）
- `demos/PickerCombo.tsx`
- `demos/PickerComboInput.tsx` — `Picker.Combo` 输入框形态
- `demos/PickerModal.tsx`
- `demos/PickerMain.tsx`

## 查阅顺序
- Props：`Picker-props.ts`
- 示例：`Picker-example.md`