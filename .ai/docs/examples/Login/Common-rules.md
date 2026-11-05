# Login Common Rules

> 模板 ID：`login-common` · 源码：`demos/Common/` · 源页面：`src/examples/Login/demos/Common/`

## 何时使用

- 业务登录页：用户名密码、手机验证码、本机号一键登录可组合
- 底部可选微信 / QQ 第三方入口
- 默认模板；当前 Login 类仅此一套

## 目录结构

| 路径                                           | 职责                                                 |
| ---------------------------------------------- | ---------------------------------------------------- |
| `index.tsx`                                    | 按平台与 `loginMethods` 切换 Phone / Code / User     |
| `utils/types.ts`                               | `LoginType`、登录结果                                |
| `PhoneLoginPage/api/queryPhoneNumber/types.ts` | Bridge 取号类型                                      |
| `CodeLoginPage/`                               | 手机号 + 验证码；`sendLoginCode`、`loginByPhoneCode` |
| `PhoneLoginPage/`                              | 本机号一键；Bridge 取号 + `loginByPhoneOneClick`     |
| `UserLoginPage/`                               | 用户名 + 密码；`loginByUsername`                     |
| `components/Logo`                              | 品牌 Logo                                            |
| `components/SocialButtons`                     | 微信 / QQ                                            |
| `utils/`                                       | `getClientInfo`、`goHome`（token + 跳转）            |

## 登录方式与保留模块

| `loginMethods`  | 保留                                                 |
| --------------- | ---------------------------------------------------- |
| `phone`         | `PhoneLoginPage/`（含 `queryPhoneNumber` Bridge）    |
| `code`          | `CodeLoginPage/`                                     |
| `user`          | `UserLoginPage/`                                     |
| `wechat` / `qq` | `SocialButtons` 对应按钮；都未选则去掉 Footer 社交区 |

未选中的账号方式：**删除对应目录**，并去掉其它页上的切换按钮。

默认页：`Device.platform === 'lyrixi'` 且含 `phone` → 一键登录；否则优先 `code`，再 `user`。

## 替换点

| 问答 / page-spec 字段             | 替换位置                                      |
| --------------------------------- | --------------------------------------------- |
| `loginMethods`                    | `index.tsx` 初始 type、条件渲染；各页切换按钮 |
| `api.loginByUsername`             | `UserLoginPage/api/loginByUsername/`          |
| `api.sendLoginCode`               | `CodeLoginPage/api/sendLoginCode/`            |
| `api.loginByPhoneCode`            | `CodeLoginPage/api/loginByPhoneCode/`         |
| `api.loginByPhoneOneClick`        | `PhoneLoginPage/api/loginByPhoneOneClick/`    |
| `api.loginByWeChat` / `loginByQq` | `components/SocialButtons/`                   |
| `output`                          | 生成目录、入口组件名                          |

## 入参约定

表单/桥接字段与请求体（未说明时沿用模板字段名）：

| 中文       | 前端字段                            | 典型请求字段            |
| ---------- | ----------------------------------- | ----------------------- |
| 用户名     | `username`                          | `username`              |
| 密码       | `password`                          | `password`              |
| 手机号码   | `phone` / `phoneNumber`             | `phone`                 |
| 验证码     | `code`                              | `code`                  |
| 运营商编码 | `carrierCode`（Bridge `data.code`） | 一键登录请求里的 `code` |

`clientInfo`（`getClientInfo()`）由模板自动附带，不问用户。登录成功：`result.code === '1'` 且 `data.token`。

## 禁止

- 把 `queryPhoneNumber` 改成随意 HTTP mock 而不说明；一键登录默认走 Bridge
- 未选的登录方式仍保留完整页面与切换入口
- 照抄 demo 的 `console.log`
- 用户可见文案不用 `LocaleUtil.locale`

## 查阅

- 可替换项：`Common-props.ts`
- 示例索引：`Common-example.md`
