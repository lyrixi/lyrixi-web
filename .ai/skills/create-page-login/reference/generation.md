# 模板复制与 API 改写（Login）

> **强制：** 仅生成 `.ts`/`.tsx`；必须从 catalog 模板目录复制。见 [generation-constraints.md](../../create-page-base/generation-constraints.md)。

模板根目录：`.ai/docs/examples/{templatePath}/`  
文档三件套：`.ai/docs/examples/Login/{Variant}-props.ts`、`-rules.md`、`-example.md`  
生成目标：`page-spec.output.outputPath`（相对仓库根；命名习惯见 [page-structure.mdc](../../../rules/page-structure.mdc)）

生成时以 **props.ts 中的可替换项** 为准，将 page-spec.json / 问答结果写入模板对应文件（见 `Common-rules.md` 替换点表）。

## 目录映射

| 模板         | 典型结构                                                                                    | 生成时                           |
| ------------ | ------------------------------------------------------------------------------------------- | -------------------------------- |
| Login/Common | `index.tsx`、`CodeLoginPage/`、`PhoneLoginPage/`、`UserLoginPage/`、`components/`、`utils/` | 只保留 `loginMethods` 勾选的模块 |

入口组件名 = 目录末级名（`Login` 目录 → `const Login = () => …`）。

## 按登录方式裁剪

| 未选                  | 删除 / 改写                                                |
| --------------------- | ---------------------------------------------------------- |
| 无 `phone`            | 删除 `PhoneLoginPage/`；`index.tsx` 不再渲染一键登录       |
| 无 `code`             | 删除 `CodeLoginPage/`；去掉「验证码登录 / 其它手机号登录」 |
| 无 `user`             | 删除 `UserLoginPage/`；去掉「用户名密码登录」              |
| 无 `wechat` 且无 `qq` | 去掉各页 `Page.Footer` 中的 `SocialButtons`                |
| 仅微信或仅 QQ         | `SocialButtons` 只保留对应按钮                             |

切换按钮只指向仍启用的账号方式。若只启用一种账号登录，不要再渲染切换按钮。

默认 `type`：含 `phone` 且 `Device.platform === 'lyrixi'` → `'phone'`；否则优先 `'code'`，再 `'user'`。

## API 改写

以各子页 `api/**/index.ts` 为蓝本：

1. **url** — 替换为 page-spec 中对应端点的 `url`。
2. **method** — `GET` / `POST`；未说明默认 `POST`。
3. **Content-Type** — 写入 headers；未说明默认 `application/json`。
4. **入参** — 按 Q2 JSON 的 `request` 改 `serverData` / `Request` 参数名；`clientInfo` 继续由 `getClientInfo()` 合并，除非用户明确不要。
5. **出参** — 登录成功默认 `result.code === '1'`，token 在 `result.data.token`（与模板 `goHome` 一致）。结构明显不同时按用户 JSON 调整 `goHome`，不要编造字段。

| 端点                                | 说明                                                                           |
| ----------------------------------- | ------------------------------------------------------------------------------ |
| `queryPhoneNumber`                  | 默认 **Bridge** `getPhoneNumber`；不要改成 demo HTTP，除非用户明确给了取号接口 |
| `loginByPhoneOneClick.request.code` | 运营商编码（Bridge 的 `data.code` → `carrierCode`）                            |
| `loginByWeChat` / `loginByQq`       | 有 url 则按模板登录接口风格实现；无 url 则保留 Toast「即将上线」               |

## 导入

- 业务页使用 `import { … } from 'lyrixi-web'`。
- `import type` 放在第三方 import 之后、相对路径之前。

## 不要复制

- 纯演示用 `console.log`。
- 未启用方式对应的整页目录。

写完页面后若工程有 react-router，按 [create-page-base/react-router.md](../../create-page-base/react-router.md) 注册路由。
