# lyrixi-mobile → lyrixi-web 迁移说明

目标仓库：`/Users/jamie/Documents/development/lyrixi/lyrixi-web`（**已创建**）

同步脚本：

- 源码：`node scripts/bootstrap-lyrixi-web.mjs`（勿覆盖 web 专属 `variables.less` / `Bridge` / 根 `index.ts`）
- AI：在 mobile 仓库执行 `node scripts/sync-ai-to-lyrixi-web.mjs`（`.ai` 排除未迁项，包名改为 `lyrixi-web`）
- 脚本（translate / docs-after 等）：`node scripts/sync-scripts-to-lyrixi-web.mjs`（本仓库路径 `scripts/lyrixi-web/LocaleUtil/`）

---

## 迁移进度（逐项标注，续迁时从此表接着做）

状态：`已完成` | `不迁` | `待迁` | `进行中`

### 工程 / 阶段

| 项                                   | 状态       | 备注                                                                                      |
| ------------------------------------ | ---------- | ----------------------------------------------------------------------------------------- |
| 0 仓库基线（father、dumi、TS、Less） | **已完成** | 无 `dumi-theme-mobile`；dumi 默认 PC 文档                                                 |
| 1 设计系统（Web token）              | **已完成** | `src/assets/variables.less` + `VariablesUtil/variablesDefault.ts` 蓝系 PC，非 mobile 橙皮 |
| 2 基础工具                           | **已完成** | 见 Utils 表                                                                               |
| 3 网络与状态                         | **已完成** | Request、Storage、EventBus、Logger、Debugger                                              |
| 4 反馈层                             | **已完成** |                                                                                           |
| 5–10 组件批次                        | **已完成** | `father build` 已通过（2025-11-05）                                                       |
| 11 Router                            | **已完成** | 不迁 HistoryUtil                                                                          |
| 12 Bridge.getLocation                | **已完成** | 库内占位 preview\* / load（不文档化）                                                     |
| 13 文档 / `.ai`                      | **已完成** | `node scripts/sync-ai-to-lyrixi-web.mjs`；未迁组件/工具文档已排除；web 可 `npm run build:ai-docs` 按 `src` 刷新 |
| 14 工程脚本（translate 等）          | **已完成** | `npm run translate` / `translate:bing` / `translate:google`；`docs:build` 含 `docs-after`；UMD + `build-after` → `lyrixi-web.min.css` |

### 组件

| 组件                                               | 状态       | 备注                                          |
| -------------------------------------------------- | ---------- | --------------------------------------------- |
| Button                                             | **已完成** |                                               |
| Icon                                               | **已完成** |                                               |
| Text                                               | **已完成** |                                               |
| Badge                                              | **已完成** |                                               |
| Divider                                            | **已完成** |                                               |
| Flex                                               | **已完成** |                                               |
| Row                                                | **已完成** |                                               |
| Card                                               | **已完成** |                                               |
| Breadcrumb                                         | **已完成** |                                               |
| Form                                               | **已完成** |                                               |
| Input                                              | **已完成** | 无 NumberKeyboard；OTP 改用系统键盘           |
| Checkbox                                           | **已完成** |                                               |
| Switch                                             | **已完成** |                                               |
| Selector                                           | **已完成** |                                               |
| Combo                                              | **已完成** |                                               |
| Select                                             | **已完成** | Web 交互待产品化                              |
| Cascader                                           | **已完成** | 依赖 Page/ToolBar（库内）                     |
| DatePicker                                         | **已完成** |                                               |
| Picker                                             | **已完成** |                                               |
| Transfer                                           | **已完成** |                                               |
| List                                               | **已完成** |                                               |
| ListAsync                                          | **已完成** |                                               |
| ListPagination                                     | **已完成** |                                               |
| Modal                                              | **已完成** | NavBarModal 依赖 NavBar（库内）               |
| Toast / Message / Loading                          | **已完成** | 依赖 ReactDOMClientCompat（库内，不 export）  |
| Progress / Skeleton / Result / Tooltip / NoticeBar | **已完成** |                                               |
| ActionSheet                                        | **已完成** |                                               |
| Calendar / Amount / Stamp / Steps / Accordion      | **已完成** |                                               |
| Attach / AttachUploader                            | **已完成** | Browser + 本地 uploadList；依赖 Media（库内） |
| Signature / QRCode / VideoPlayer                   | **已完成** |                                               |
| Page / NavBar / ToolBar / FooterBar / Float / TabBar | **已完成** | 原样迁入，已从 `index.ts` export              |
| Map / Location                                     | **已完成** | 原样迁入；Map 需配置 Key；Bridge 含 getLocation / getBrowserLocation / openLocation（浏览器） |
| Media / MediaUploader                              | **已完成** | 原样迁入，已从 `index.ts` export              |
| Tree                                               | **不迁**   | rc-tree 自建                                  |
| Table                                              | **不迁**   | rc-table 自建                                 |
| IndexBar                                           | **不迁**   | 库内已拷贝供 Cascader，**不 export**          |
| Keyboard                                           | **不迁**   |                                               |
| SafeArea                                           | **不迁**   | 库内已拷贝供 Page/Modal，**不 export**        |
| TabBar                                             | **不迁**   | 库内已拷贝供 DatePicker 等，**不 export**     |
| FooterBar                                          | **不迁**   | 库内已拷贝供 ToolBar，**不 export**           |
| App                                                | **已完成** | 原样迁入，已从 `index.ts` export              |
| WebView                                            | **不迁**   |                                               |
| Chat                                               | **不迁**   |                                               |

### Utils

| Util                                                                          | 状态       | 备注                       |
| ----------------------------------------------------------------------------- | ---------- | -------------------------- |
| ArrayUtil / AssetUtil / Clipboard / DataUtil / DateUtil / DOMUtil             | **已完成** |                            |
| EventBus / FunctionUtil / IdUtil / LocaleUtil / Logger / MathUtil             | **已完成** |                            |
| Request / Router / Storage / Theme / VariablesUtil / ValidatorUtil / Debugger | **已完成** |                            |
| Bridge                                                                        | **已完成** | 对外文档仅 **getLocation** |
| Device / GeoUtil                                                              | **已完成** | 已从 `index.ts` export       |
| ReactDOMClientCompat                                                          | **已完成** | 库内，**不 export**        |
| FullScreen                                                                    | **不迁**   |                            |
| HistoryUtil                                                                   | **不迁**   |                            |
| Bridge 全量（微信/钉钉等）                                                    | **不迁**   |                            |

`lyrixi-mobile` 已是 React DOM 的 **mobile-first H5** 组件库，迁到 `lyrixi-web` 主要是 **交互范式、布局语义、渠道能力裁剪**，不是 RN→DOM 重写。

---

## 产品定案

| 项     | 决定                             | 对范围的影响                                                                 |
| ------ | -------------------------------- | ---------------------------------------------------------------------------- |
| 主场景 | **纯 PC 管理后台**               | 不面向移动浏览器/Hybrid；弱化全屏页、底 Tab、SafeArea、自定义键盘等          |
| 列表   | **不造 Table**；**保留 List 族** | `List` / `ListAsync` / `ListPagination` 迁入；表格后续基于 **rc-table** 自建 |
| Tree   | **完全不迁**                     | 不 export、不复制源码；后续基于 **rc-tree** 自建                             |
| 桥接   | **无 Hybrid**                    | 不迁整包 `Bridge`；对外仅 **`Bridge.getLocation`**（浏览器定位）             |

---

## 开发阶段建议

| 阶段 | 内容           | 说明                                                                                                       |
| ---- | -------------- | ---------------------------------------------------------------------------------------------------------- |
| 0    | 仓库基线       | 对齐 mobile：React 19、TS、ESM、`sideEffects`、Less/CSS、`Theme/initConfig`、dumi、`.ai` 文档策略          |
| 1    | 设计系统       | `Theme`、`VariablesUtil`、Icon、`LocaleUtil`；Web 独立 token（间距/字号/圆角/色板）                        |
| 2    | 基础工具       | `DOMUtil`、`IdUtil`、`FunctionUtil`、`DataUtil`、`ArrayUtil`、`DateUtil`、`MathUtil`、`ValidatorUtil`      |
| 3    | 网络与状态     | `Request`、`Storage`、`EventBus`、`Logger`、`Debugger`                                                     |
| 4    | 反馈层         | `Modal`、`Toast`、`Message`、`Loading`、`Progress`、`Skeleton`、`Result`、`Tooltip`                        |
| 5    | 布局与文字     | `Flex`、`Row`、`Card`、`Divider`、`Text`、`Badge`、`Breadcrumb`                                            |
| 6    | 表单核心       | `Form`、`Input.*`、`Button`、`Checkbox`、`Switch`、`Selector`                                              |
| 7    | 选型（Web 化） | `Select`、`Cascader`、`DatePicker`、`Picker`；默认 **Combo + Popover/Dropdown**，弱化全屏 Modal 为推荐用法 |
| 8    | 列表           | `List`、`ListAsync`、`ListPagination`                                                                      |
| 9    | 其它展示       | `Calendar`、`Amount`、`Stamp`、`Steps`、`Accordion`、`Transfer`                                            |
| 10   | 文件           | `Attach`、`AttachUploader`（仅 Browser）                                                                   |
| 11   | 路由           | `Router`（注入 react-router）；**不迁** `HistoryUtil`                                                      |
| 12   | 定位           | 薄 `Bridge`：**仅** `getLocation`                                                                          |
| 13   | 文档           | 组件 md + demos + `.ai/docs`；写明无 Tree、无 Table、Bridge 仅 getLocation                                 |

---

## 组件清单

### P0 建议迁入

**基础 / 布局**

- `Button`、`Icon`、`Text`、`Badge`、`Divider`
- `Flex`、`Row`、`Card`、`Breadcrumb`

**表单**

- `Form`、`Input`（各子组件；**不迁 / 不暴露**与 `Keyboard`、NumberKeyboard 的联动）
- `Checkbox`、`Switch`、`Selector`、`Combo`

**选型**

- `Select`、`Cascader`、`DatePicker`、`Picker`、`Transfer`

**列表**

- `List`、`ListAsync`、`ListPagination`  
  用于消息列表、设置项、可选中条目等；**不是**表格替代品，与后续 rc-table 并存。

**反馈**

- `Modal`、`Toast`、`Message`、`Loading`、`Progress`、`Skeleton`、`Result`、`Tooltip`、`NoticeBar`、`ActionSheet`  
  PC 上可作操作菜单/确认面板；UI 可后续偏 Dialog + 菜单，API 可先对齐 mobile。

**展示 / 其它**

- `Calendar`、`Amount`、`Stamp`、`Steps`、`Accordion`
- `Attach`、`AttachUploader`（**仅 Browser** 路径）
- `Signature`、`QRCode`、`VideoPlayer`

### P1 可选（页壳 / 移动范式碎片）

按需迁入或只迁子能力，不作为 PC 后台主布局：

- `NavBar`、`ToolBar`、`TabBar`、`Page`、`FooterBar`、`Float`  
  PC 后台优先 **Layout + Breadcrumb**；若迁 `ToolBar`，可只迁 Search / Filter / Button 等子模块。

### P2 延后（无明确后台需求时不首批打包）

- `Map`、`Location`（组件）
- `Media`、`MediaUploader`  
  附件场景优先 `Attach*`；若要图片墙再开。

### 明确不迁

| 组件         | 原因                                           |
| ------------ | ---------------------------------------------- |
| **Tree**     | 移动端下钻 Modal 树；Web 后续 **rc-tree** 自建 |
| **Table**    | 库内不存在、**不创造**；后续 **rc-table**      |
| **IndexBar** | 右侧字母索引 + 列表滚动，典型移动端通讯录      |
| **Keyboard** | 替代系统键盘；PC 无收益                        |
| **SafeArea** | 刘海 / Home Indicator                          |
| **App**      | Mobile 应用根；Web 用业务自己的根组件 + 路由   |
| **WebView**  | 宿主内嵌 H5；浏览器用 iframe / 新窗口          |
| **Chat**     | IM 业务模块，非通用 UI 库核心                  |

---

## Utils 清单

### P0 整包迁入

`ArrayUtil`、`AssetUtil`、`Clipboard`、`DataUtil`、`DateUtil`、`DOMUtil`、`EventBus`、`FunctionUtil`、`IdUtil`、`LocaleUtil`、`Logger`、`MathUtil`、`Request`、`Router`、`Storage`、`Theme`、`VariablesUtil`、`ValidatorUtil`、`Debugger`

- **Router**：注入 `push` / `replace` / `back`，配合 react-router，保留。
- **Request / Storage / Locale / Theme / VariablesUtil**：与端无关。

### Bridge（特例）

- **不迁** mobile 整包 `Bridge`（微信、企业微信、钉钉、飞书、小程序、扫码、上传等全部不要）。
- **P0 仅导出**：

  ```ts
  Bridge.getLocation(/* params */)
  ```

  实现只走浏览器定位（沿用 mobile `Bridge/Browser` 中定位逻辑即可），**不**做多平台 `Device.platform` 分发，**不**提供 `load`、`scanCode` 等其它 API。

- 对外命名已定：**`Bridge.getLocation`**（不叫 `LocationUtil` / 薄包其它名字）。

### 精简或延后

| Util           | 说明                                                             |
| -------------- | ---------------------------------------------------------------- |
| **Device**     | P0 可不 export，或仅保留视口/触摸检测（List 滚动加载需要时再补） |
| **FullScreen** | 按需                                                             |
| **GeoUtil**    | 无 Map/Location 组件时可不首批迁                                 |

### 明确不迁

| Util                            | 原因                                                                                                              |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **HistoryUtil**                 | `pushState` + URL 参数模拟嵌套页/Modal 返回栈，配合 Mobile NavBar；SPA 用 react-router + `Router`，Modal 用 state |
| **ReactDOMClientCompat**        | Mobile 渲染兼容层，Web 新项目不需要                                                                               |
| **Bridge（除 getLocation 外）** | 见上                                                                                                              |

---

## 从 mobile 迁出时的必做裁剪

1. **AttachUploader**：不打包 `Wechat`、`Dingtalk`、`WechatMiniProgram`、`Custom` 等非 Browser 入口。
2. **Input**：文档与 export 不含 `NumberKeyboard`、`Keyboard.*`。
3. **Select / DatePicker / Cascader / Picker**：源码可保留 Modal 子组件；**对外文档默认 Combo + 弹出层**。
4. **ListAsync**：API 可保留；PC 弱化下拉刷新手势文案，滚动加载仍可用。
5. **依赖**：不引入微信 JSSDK、钉钉 SDK 等。

---

## 数量参考（修订后）

| 类别         | 约数                                                                  |
| ------------ | --------------------------------------------------------------------- |
| 组件 P0 迁入 | ~40（含 List 三件套）                                                 |
| 组件明确不做 | Tree、Table（不造）、IndexBar、Keyboard、SafeArea、App、WebView、Chat |
| 组件建议 P2  | Map、Location、Media、MediaUploader                                   |
| Utils P0     | ~18 整包 + **Bridge.getLocation**                                     |
| Utils 不做   | HistoryUtil、ReactDOMClientCompat、Bridge 其余 API                    |

---

## 实施顺序（PC 后台）

1. 工程 + `Theme` / `VariablesUtil` / `LocaleUtil` / `DOMUtil`
2. `Request`、`Storage`、`Router`、`Modal`、`Toast`、`Loading`
3. `Form` + `Input` + `Button` + `Checkbox` + `Switch`
4. `List` → `ListPagination` → `ListAsync`
5. `Select` / `DatePicker` / `Cascader` / `Picker` / `Transfer`（Web 交互调整）
6. 其余展示类 + `Attach*` + **`Bridge.getLocation`**
7. 文档 / demos / `.ai/docs`（注明：**无 Tree、无 Table、Bridge 仅 getLocation**）

---

## 后续自建（不在 lyrixi-web P0）

- **表格**：基于 rc-table
- **树**：基于 rc-tree

---

_文档版本：与产品定案同步；定位 API 命名：`Bridge.getLocation`。_
