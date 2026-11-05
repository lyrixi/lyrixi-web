# 工具 AI 文档

与 `src/utils/` 导出工具一一对应，供 AI **仅查阅本目录** 生成业务代码，避免幻觉。

| 文件 | 说明 |
|------|------|
| `{Name}-props.ts` | API / 方法（由 `index.zh-CN.md`、源码与 demos 生成） |
| `{Name}-rules.md` | 何时使用、必须使用库工具、demo 索引 |
| `{Name}-example.md` | Demo 索引（链到 `demos/`，由脚本生成） |
| `demos/` | 与 `src/utils/{Name}/demos` 同步的示例源码 |

**更新：** 直接编辑本目录下对应工具文件，并同步 [`../mapping.json`](../mapping.json) 的 `keywords`（源文档见 `src/utils/{Name}/`）。

索引：[`../mapping.json`](../mapping.json)
