# Router Rules

> 源文档：`src/utils/Router/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-web` 引入 `Router`，**禁止**自造同类路由工具函数。
- 类名拼接等 DOM 场景用 `DOMUtil.classNames`；日期用 `DateUtil`；请求用 `Request`；存储用 `Storage`。

## 何时使用
- 业务页面需要与具体路由库解耦的统一导航 API
- 需要根据前进 / 返回动作决定是否清理页面缓存（如列表缓存）

## API 索引（节选）
- `Router.config`
- `Router.push`
- `Router.replace`
- `Router.back`
- `Router.getAction`

## Demo 索引（本目录 `demos/`）
- `demos/Router.tsx`

## 查阅顺序
- API：`Router-props.ts`
- 示例：`Router-example.md`
