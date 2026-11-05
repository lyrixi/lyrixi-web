# Detail Form Rules

> 模板 ID：`detail-form` · 源码：`demos/Form/`

## 何时使用

- **只读详情**：Form 展示字段，不可编辑
- 可选 Footer **审批/确认**（approveData）
- 报表指标卡片列表（非 Form 字段）用 `detail-indicator-list`

## 目录结构

| 路径               | 职责                      |
| ------------------ | ------------------------- |
| `index.tsx`        | queryData 加载、只读 Form |
| `Footer/`          | 审批按钮（含 types.ts）   |
| `api/queryData/`   | 详情接口（含 types.ts）   |
| `api/approveData/` | 审批接口（含 types.ts）   |

## 替换点

| 字段              | 位置                  |
| ----------------- | --------------------- |
| `displayFields`   | Form.Item + Text 展示 |
| `api.queryData`   | loadData              |
| `api.approveData` | handleApprove         |

## 禁止

- 详情页不要加 saveData（只读）
