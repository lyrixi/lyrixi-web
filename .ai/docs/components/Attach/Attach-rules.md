# Attach Rules

> 源文档：`src/components/Attach/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-web` 引入 `Attach`，**禁止**自造同类 UI。
- 子组件写法：`Attach.Sub`（与库导出一致）。

## 何时使用
- 需要显示附件文件时
- 需要上传附件文件时
- 需要预览附件文件时

## 子组件
- `Attach.Button`
- `Attach.List`
- `Attach.Uploading`
- `Attach.supportTypes`
- `Attach.validateListStatus`

## Demo 索引（本目录 `demos/`）
- `demos/Attach.tsx`
- `demos/AttachList.tsx`
- `demos/AttachButton.tsx`
- `demos/AttachUploading.tsx`

## 查阅顺序
- Props：`Attach-props.ts`
- 示例：`Attach-example.md`