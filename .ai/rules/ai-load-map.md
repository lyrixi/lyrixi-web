# AI 资源按需加载表

本文件只负责选择当前修改需要的 Rules。先完成判定，再读取命中的规则文件；禁止预读整个目录。Skills 和 Docs 默认不读取，只有用户明确点名后才加载被点名的那一项。

## 判定顺序

对每个目标文件依次判断：

1. **任务意图**：截图开发、新增功能、修改已有实现、修复缺陷、只改类型、只改样式、修改文档、查询 API 或同步 Docs。
2. **目标路径**：页面/示例、组件库、组件文档、工具或其他配置。
3. **文件类型**：`.ts/.tsx`、`.less`、`.md/.mdc`、`.json` 或其他格式。
4. **修改动作**：结构、实现、类型、Props、命名、样式、可见文案、注释或格式化。

多文件任务逐文件判定，最后合并并去重资源。无法预先确定目标文件时，先检查相关源码和目录，再完成判定。

## 作用域优先级

按以下顺序匹配，命中后不再使用更宽泛的作用域：

1. `**/demos/**`、`src/examples/**`、`src/pages/**`：页面或示例作用域。
2. `src/components/**/index.zh-CN.md`、`src/components/**/index.en-US.md`：组件文档作用域。
3. `src/components/**`：组件库作用域。
4. `src/utils/**` 和其他源码：通用代码作用域。

组件包内的 Demo 属于页面侧，不加载 `component-*` 规则。

## Skills 与 Docs

默认不加载，也不要根据任务意图自行匹配。

用户在当前任务里明确点名后，只读取对应文件：

| 用户点名                                 | 只读取                                   |
| ---------------------------------------- | ---------------------------------------- |
| `develop`                                | `.ai/skills/develop/SKILL.md`            |
| `create-page-list`                       | `.ai/skills/create-page-list/SKILL.md`   |
| `create-page-edit`                       | `.ai/skills/create-page-edit/SKILL.md`   |
| `create-page-detail`                     | `.ai/skills/create-page-detail/SKILL.md` |
| `create-page-login`                      | `.ai/skills/create-page-login/SKILL.md`  |
| `rn-to-h5`                               | `.ai/skills/rn-to-h5/SKILL.md`           |
| `sync-ai-docs`                           | `.ai/skills/sync-ai-docs/SKILL.md`       |
| `grill-me`                               | `.ai/skills/grill-me/SKILL.md`           |
| 某个 `.ai/docs` 路径、组件名或「查文档」 | 被点名的文档；有索引时只读命中项         |

点名某个 Skill 之后，是否继续读 Docs 以该 Skill 正文为准。只点名 Docs 时，不要打开 Skill。未出现在上表、但用户点了名的其他 Skill，按 `.ai/skills/<name>/SKILL.md` 读取。Skills 索引不是启动必读项。

## 截图与 UI 开发

收到截图或视觉参考时，先判断目标属于组件库、业务页面、示例还是 Demo，再只根据最终修改文件和动作加载下列 Rules。不要打开 `develop`，也不要检索 `.ai/docs`。用户点名后再按上一节读取。

## 共用规则

`global-*` 表示跨作用域复用，不表示默认全部加载。

| 规则                                | 加载条件                                                |
| ----------------------------------- | ------------------------------------------------------- |
| `global-coding-format.mdc`          | 所有代码、配置或文档写入任务                            |
| `global-coding-risk.mdc`            | 新增/修改实现、修复缺陷或代码审查                       |
| `global-coding-habit.mdc`           | 条件判断、可选回调、真值判断、变量声明或 className 拼接 |
| `global-coding-types.mdc`           | TypeScript 类型、React 事件、Ref 或 `forwardRef`        |
| `global-coding-structure-types.mdc` | 新建/拆分 `types/`、组织公共类型或组件入口挂载类型      |
| `global-coding-sequence.mdc`        | 新增文件、整理 import 或调整组件内部代码块顺序          |
| `global-coding-name.mdc`            | props、refs、state、handlers、expose 或回调参数命名     |
| `global-coding-locale.mdc`          | 新增或修改按钮、标题、placeholder、Toast 等可见文案     |
| `global-coding-annotation.mdc`      | 复杂业务逻辑需要说明性注释                              |

## 组件库规则

仅适用于 `src/components/**` 中排除 Demo 和组件文档后的库实现。

| 规则                             | 加载条件                                 |
| -------------------------------- | ---------------------------------------- |
| `component-structure.mdc`        | 新建组件包，或调整目录、入口、子组件挂载 |
| `component-coding-styles.mdc`    | 修改库组件 Less 或 `lyrixi-*` class      |
| `component-annotation-props.mdc` | 编写 Props 解构、透传或类型分组          |

修改已有组件逻辑通常加载 `global-coding-risk` 和 `global-coding-habit`，再按实际动作追加类型、Props、命名、顺序、样式、国际化或注释规则；不得自动加载全部组件规则。

## 页面、示例与 Demo 规则

适用于 `**/demos/**`、`src/examples/**` 和 `src/pages/**`。

| 规则                     | 加载条件                                                             |
| ------------------------ | -------------------------------------------------------------------- |
| `page-structure.mdc`     | 新建或调整 List、Edit、Detail、Login、API、Header、Main、Footer 结构 |
| `page-coding-styles.mdc` | 修改页面、示例或 Demo 的 Less、页面级 class                          |

新增或修改页面实现时加载 `global-coding-risk`；有可见文案时追加 `global-coding-locale`，其他全局规则继续按动作选择。

## 文档规则

修改 `src/components/**/index.zh-CN.md` 或 `index.en-US.md` 时加载 `doc-structure.mdc`。只有需要判断组件包形态或入口时才追加 `component-structure.mdc`。其他 Markdown 或 MDC 只加载 `global-coding-format.mdc`。

## 典型最小组合

| 场景                       | 最小加载集合                                                                     |
| -------------------------- | -------------------------------------------------------------------------------- |
| 纯问答、代码解释、状态查看 | 不加载 Rules、Skills、Docs；只读任务相关文件                                     |
| 截图开发业务页面           | `page-*` + 必要 `global-*`                                                       |
| 截图开发库组件             | 必要 `component-*` + 必要 `global-*`                                             |
| 修改已有组件逻辑           | `global-coding-risk` + `global-coding-habit` + 实际动作命中的规则                |
| 只改组件 Less              | `global-coding-format` + `component-coding-styles`                               |
| 只改页面或 Demo Less       | `global-coding-format` + `page-coding-styles`                                    |
| 只改公共 TypeScript 类型   | `global-coding-format` + `global-coding-types` + `global-coding-structure-types` |
| 修改组件文档               | `global-coding-format` + `doc-structure`                                         |
| 用户点名某个 Skill 或 Docs | 上表 Rules 之外，只加被点名的那一项                                              |

完成选择后只读取表中命中的文件，每个文件最多读取一次。
