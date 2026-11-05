# Theme Rules

> 源文档：`src/utils/Theme/` 源码。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-web` 引入 `Theme`，**禁止**自造同类主题管理。
- 类名拼接等 DOM 场景用 `DOMUtil.classNames`；日期用 `DateUtil`；请求用 `Request`；存储用 `Storage`。

## 何时使用
- 切换 / 应用主题用 `Theme.setTheme(themeName)`（仅写 CSS 变量，无需 Context）。
- 读取主题 token 用 `Theme.getTheme(themeName?)`。
- 注册自定义主题用 `Theme.config({ themeName: {}, ... })`，写入 `window.lyrixiThemes`。
- 内置主题：`default`、`dark`（来自 `VariablesUtil.variablesDefault` / `variablesDark`；`initConfig` 在 import Theme 时自动注册）。
- 应用根节点可通过 `App` 的 `themeName`（默认 `'default'`）自动 `setTheme`。

## API 索引
- `Theme.getTheme`
- `Theme.setTheme`
- `Theme.config`

## Demo 索引（本目录 `demos/`）
- `demos/Theme.tsx` — getTheme / setTheme / config（default、dark、自定义 custom）

## 查阅顺序
- API：`Theme-props.ts`
- 示例：`Theme-example.md`
