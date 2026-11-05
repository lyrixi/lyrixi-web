# Form Rules

> 源文档：`src/components/Form/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-web` 引入 `Form`，**禁止**自造同类 UI。
- 子组件写法：`Form.Sub`（与库导出一致）。

## 何时使用
- 需要收集用户输入数据时
- 需要对输入进行校验时
- 需要提交表单数据时

## 用法要点
- 结构：`Form` → `Form.Item` → `Form.Label` + `Form.Field`
- 初始化赋值用 `formRef.current?.setFieldsValue`，无 `initialValues`
- `onFieldsChange` 仅用户修改表单控件时触发，`setFieldsValue` 不会触发
- `Form.Field` 的 `validator` 签名为 `(value) => Promise`；必填等规则一律用 `validator`，无 `rules` / `required` 简写
- 校验失败用 `Toast.open` 展示第一条错误，不在字段下方展示
- 滚动到字段用 `formRef.current?.scrollToField(name)`

## 子组件
- `Form.Field`
- `Form.Item`
- `Form.Label`

## Demo 索引（本目录 `demos/`）
- `demos/FormEdit.tsx` — 新增 / 编辑
- `demos/FormDetail.tsx` — 详情
- `demos/FormRef.tsx` — Form ref API
- `demos/FormScrollToField.tsx` — scrollToField 滚动到指定字段

## 查阅顺序
- Props：`Form-props.ts`
- 示例：`Form-example.md`
