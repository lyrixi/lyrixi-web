# List Cache Rules

> 模板 ID：`list-cache` · 源码：`demos/Cache/`

## 何时使用

- 在 Common 列表基础上，需用 Storage 缓存 queryParams / 列表状态
- 底部 Footer 提供「保存缓存 / 清除缓存」

## 说明

- **复用** `demos/Common/` 的 Header、Main、Footer 组件
- 替换 `cacheName` 与 Footer 文案即可接入新业务

## 替换点

见 `Cache-props.ts`；除 `cacheName`、Footer 文案外，列表 API 与 Common 相同。
