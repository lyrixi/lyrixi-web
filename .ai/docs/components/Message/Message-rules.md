# Message Rules

> 源文档：`src/components/Message/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-web` 引入 `Message`，**禁止**自造同类 UI。
- 子组件写法：`Message.Sub`（与库导出一致）。

## 何时使用
- 需要居中展示标题、正文与操作按钮的对话框时
- 需要命令式唤起全局消息框（如操作确认、结果提示）时
- 需要自定义对话框结构（图标、标题、内容、底部按钮分区）时

## 子组件
- `Message.Combo`
- `Message.Main`
- `Message.Modal`
- `Message.close`
- `Message.open`

## 静态方法
- `Message.open`
- `Message.close`

## Demo 索引（本目录 `demos/`）
- `demos/MessageApi.tsx`
- `demos/MessageModal.tsx`
- `demos/MessageCombo.tsx`
- `demos/MessageMain.tsx`
- `demos/MessageHeader.tsx`
- `demos/MessageFooter.tsx`
- `demos/MessageIcon.tsx` — 在 Header 内使用 `Icon` 展示图标（非独立子组件）
- `demos/MessageTitle.tsx`
- `demos/MessageButton.tsx`

## 查阅顺序
- Props：`Message-props.ts`
- 示例：`Message-example.md`