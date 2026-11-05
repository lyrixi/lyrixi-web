# Edit Cache Rules

> 模板 ID：`edit-cache` · 源码：`demos/Cache/`

## 何时使用

- 编辑页需 **Storage 草稿**（无 id 新增时恢复、离开再进保留）

## 替换点

- 继承 Edit Common 全部替换点
- **`cacheConfig.name`** → `api/cacheConfig.ts`，Storage 键前缀
- 替换 `/api/examples/*` 为真实 queryData / saveData URL
