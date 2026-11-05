# 生成页后注册 react-router

四个 `create-page-*` 共用。拿到 `output.outputPath` 之后、写页面代码时执行；**不要**为此再开一轮问答。

## 是否执行

工程「有 react-router」需同时满足：

1. 根目录 `package.json` 的 `dependencies` / `devDependencies` / `peerDependencies` 含 `react-router` 或 `react-router-dom`；或源码中已有 `from 'react-router-dom'` / `from 'react-router'`。
2. **不是**仅有 `@tanstack/react-router`、`vue-router`、dumi `conventionRoutes` 等其它方案。

未命中则跳过本步骤，不要新建路由文件。

## 路由 path

由 `output.outputPath` 推导，**不要问用户**「路由写什么」：

1. 去掉页面根前缀：`src/pages`、`src/views`、`src/page`、`app/pages`（按实际命中的那个）。
2. 目录分隔保留为 `/`。
3. **优先抄工程已有规则**：对照已有 `src/pages/Foo` 与现有 `Route path` 是 kebab、camel 还是与目录同名。
4. 无先例时：末级 PascalCase 改为 camelCase（`OrderDetail` → `orderDetail`），得到如 `/order/orderDetail`。
5. 用户在入参里写明了 path 形态（如 `/order/detail/:id`）时，用该 path，不要再改成 query-only。

`path` 以 `/` 开头（嵌套路由则跟已有子路由写法一致）。

## URL 入参注释

注释只写**页面 URL 上的入参**（问答里来自 `Device.getUrlParameter` / search / path 的字段），不要写接口 body、`queryParams` 筛选态。

- 无 URL 入参（常见于登录页、纯列表）：仍注册路由，注释写 `URL 入参：无`。
- 有入参：字段名 + 已知类型，例如 `id (string), copyId (string)`。
- 仅 query、路由 path 不含 `:id` 时，不要擅自改成 `/:id`。

写法跟工程现有 Route 风格：

JSX（`Route` 上一行块注释）：

```
{/* URL 入参：id (string), copyId (string) */}
<Route path="/orderDetail" element={<OrderDetail />} />
```

对象路由（`path` 同行注释）：

```
{
  path: '/orderDetail', // URL 入参：id (string), copyId (string)
  element: <OrderDetail />,
}
```

v5 `component={Page}` 时注释仍写在该 `<Route>` 上一行或 `path` 同行。

## 写入位置

1. Grep `createBrowserRouter`、`createHashRouter`、`useRoutes`、`<Routes`、`<Route`、`react-router-dom`，定位**现有路由表**（常见 `src/router/`、`src/routes/`、`src/App.tsx`）。
2. 按该文件已有风格追加一条：补页面 `import`（默认 `{output.outputPath}/index`），插入 `Route` / 路由对象。
3. 已有相同 `path` 或已指向同一页面：只补/更新 URL 入参注释，不要重复注册。
4. 有 react-router 但找不到路由表：新建 `src/router/index.tsx`（版本跟 `package.json`：v6 用 `element`，v5 用 `component`），在现有入口把 `RouterProvider` / `BrowserRouter`+`Routes` 接上；入口没有 Router 容器时在产出说明里写清还差哪一步，不要改无关业务页。

## 不要做

- 没有 react-router 时编造路由文件
- 为选路由 path 再问一轮
- 把接口 POST body 写进路由注释
- 为了加路由而改页面业务逻辑或 `page-structure` 目录
