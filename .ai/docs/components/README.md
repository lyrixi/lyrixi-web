# 组件 AI 文档

与 `src/components/` 一一对应，供 AI **仅查阅本目录** 生成业务代码，避免幻觉。

| 文件 | 说明 |
|------|------|
| `{Name}-props.ts` | Props / Ref（由 `index.zh-CN.md` API 表生成） |
| `{Name}-rules.md` | 何时使用、子组件、必须使用库组件 |
| `{Name}-example.md` | Demo 索引（链到 `demos/`，由脚本生成） |
| `demos/` | 与 `src/components/{Name}/demos` 同步的示例源码 |

**更新：** 直接编辑本目录下对应组件文件，并同步 [`../mapping.json`](../mapping.json) 的 `keywords`（源文档见 `src/components/{Name}/index.zh-CN.md`）。

索引：[`../mapping.json`](../mapping.json)
