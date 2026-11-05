# LocaleUtil Rules

> 源文档：`src/utils/LocaleUtil/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-web` 引入 `LocaleUtil`，**禁止**自造同类工具函数。
- 类名拼接等 DOM 场景用 `DOMUtil.classNames`；日期用 `DateUtil`；请求用 `Request`；存储用 `Storage`。

## 何时使用
- 展示文案用 `LocaleUtil.locale(remark, key?, variables?)`（读 `window.lyrixiLocaleData`）。
- 初始化 / 切换语言用 `LocaleUtil.loadLocale(language)`（默认同时加载 dayjs locale）。
- 自定义语言探测用 `LocaleUtil.addLanguage(() => ...)`，当前语言用 `LocaleUtil.getLanguage()`。
- 手动灌入文案用 `LocaleUtil.setLocale(language, data)`；语言表用 `LocaleUtil.getLanguageMap(language?)`。
- 应用根节点可通过 `App` 的 `language` prop 触发加载。

## API 索引
- `LocaleUtil.locale`
- `LocaleUtil.loadLocale`
- `LocaleUtil.setLocale`
- `LocaleUtil.getLanguage`
- `LocaleUtil.addLanguage`
- `LocaleUtil.getLanguageMap`

## Demo 索引（本目录 `demos/`）
- `demos/LocaleUtil.tsx` — loadLocale 切换语言 + locale 变量插值

## 查阅顺序
- API：`LocaleUtil-props.ts`
- 示例：`LocaleUtil-example.md`
