# Bridge Rules

> 源文档：`src/utils/Bridge/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-web` 引入 `Bridge`，**禁止**自造同类工具函数。
- 类名拼接等 DOM 场景用 `DOMUtil.classNames`；日期用 `DateUtil`；请求用 `Request`；存储用 `Storage`。

## 何时使用
- 见 `src/utils/Bridge/index.zh-CN.md` 说明与 demos。

## API 索引（节选）
- `Bridge.load`
- `Bridge.config`
- `Bridge.back`
- `Bridge.closeWindow`
- `Bridge.onHistoryBack`
- `Bridge.setTitle`
- `Bridge.openWindow`
- `Bridge.goHome`
- `Bridge.tel`
- `Bridge.getLocation`
- `Bridge.getBrowserLocation`
- `Bridge.openLocation`
- `Bridge.scanCode`
- `Bridge.chooseMedia`
- `Bridge.uploadFile`
- `Bridge.previewMedia`
- `Bridge.previewFile`
- `Bridge.detectFace`
- `Bridge.share`
- `Bridge._customBridges`
- `Bridge.addBridge`
- `Bridge.utils.back`
- `Bridge.utils.formatOpenLocationCoord`

## Demo 索引（本目录 `demos/`）
- `demos/Bridge.tsx`

## 查阅顺序
- API：`Bridge-props.ts`
- 示例：`Bridge-example.md`