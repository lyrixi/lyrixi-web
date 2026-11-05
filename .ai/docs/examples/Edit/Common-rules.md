# Edit Common Rules

> 模板 ID：`edit-common` · 源码：`demos/Common/`

## 何时使用

- 新建/编辑页，Form 含多种控件（Input、Select、DatePicker、Attach 等）
- 无 Storage 草稿缓存

## 目录结构

| 路径 | 职责 |
|------|------|
| `index.tsx` | Form、loadData、handleSave |
| `Footer/` | 提交按钮 |
| `api/queryData|saveData|validateData/` | 加载、校验、保存 |

## 替换点

| 问答 | 位置 |
|------|------|
| `api.queryData` | 初始化 formData；id 来自 URL |
| `api.saveData` | Footer 提交 |
| `formFields` | 增删 Form.Item 与控件 |
| `design.designNotes` | 布局、Card/Divider 分组 |

## 禁止

- 不要使用已废弃的 Button `backgroundColor` 等旧 API，用 `variant` + `color`
