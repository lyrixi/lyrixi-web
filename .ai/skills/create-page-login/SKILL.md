---
name: create-page-login
description: >-
  仅当用户明确点名 create-page-login 时加载，未点名不要读取。用途：登录页架构说明与生成。
---

# create-page-login

登录页**公开入口**：目录架构、**`.ai/docs/examples/Login/`** 模板，以及从问答到生成业务页的完整流程（本 skill 自包含，不依赖其它 create-page skill）。

**约束：** 遵守 [`.ai/rules/page-structure.mdc`](../../rules/page-structure.mdc)、[`global-coding-sequence.mdc`](../../rules/global-coding-sequence.mdc)、[`global-coding-locale.mdc`](../../rules/global-coding-locale.mdc)、[`create-page-base/generation-constraints.md`](../create-page-base/generation-constraints.md)（**仅 `.ts`/`.tsx`；必须从 catalog 模板复制**）。生成代码时**不要修改** `.ai/rules/`。

## 何时启用

- 用户要新建**登录页**（用户名密码、手机验证码、本机号一键、微信/QQ）
- 用户问登录方式怎么组合、一键登录 / 验证码 / 第三方入口怎么拆
- 用户说「create-page-login」「登录页架构」「参考登录模板」「生成登录页」

## 页面命名

目录习惯用 `Login`（如 `src/pages/Login/`）。见 `page-structure.mdc`。

## 能力一览（模板已实现）

| 方式           | `loginMethods` | 页面             | 说明                                          |
| -------------- | -------------- | ---------------- | --------------------------------------------- |
| 本机号一键登录 | `phone`        | `PhoneLoginPage` | Bridge 取本机号与运营商编码，再调一键登录接口 |
| 手机验证码登录 | `code`         | `CodeLoginPage`  | 发码 + 手机号/验证码登录                      |
| 用户名密码登录 | `user`         | `UserLoginPage`  | 用户名 + 密码                                 |
| 微信登录       | `wechat`       | `SocialButtons`  | 模板默认为 Toast 占位，有 url 则接接口        |
| QQ 登录        | `qq`           | `SocialButtons`  | 同上                                          |

lyrixi 端默认进一键登录，其它端默认进验证码登录（见模板 `index.tsx`）。

## 目录架构

```
{PageName}/
├── index.tsx                 # 按 loginMethods 切换子页
├── CodeLoginPage/            # 验证码登录（可选；含 types.ts）
│   ├── api/sendLoginCode/
│   └── api/loginByPhoneCode/
├── PhoneLoginPage/           # 一键登录（可选；含 types.ts）
│   ├── api/queryPhoneNumber/ # Bridge（含 types.ts）
│   └── api/loginByPhoneOneClick/
├── UserLoginPage/            # 用户名密码（可选；含 types.ts）
│   └── api/loginByUsername/
├── components/
│   ├── Logo/
│   └── SocialButtons/        # 微信 / QQ（可选）
└── utils/                    # getClientInfo、goHome、共享 types.ts
```

登录页**无 Header / Main / Footer 业务拆分**（`Page.Footer` 仅放社交按钮）。数据请求在各子页 `api/`。

### api 命名约定

- 登录提交：`loginByUsername` / `loginByPhoneCode` / `loginByPhoneOneClick`（及微信/QQ）
- 发验证码：`sendLoginCode`
- 本机号码：`queryPhoneNumber`（Bridge，非 `queryData`）
- 转换：`serverData`

## 参考文档位置（`.ai/docs/examples/Login/`）

| 文件                   | 用途                                 |
| ---------------------- | ------------------------------------ |
| `{Variant}-props.ts`   | 可替换项（loginMethods、各登录接口） |
| `{Variant}-rules.md`   | 何时用、目录、裁剪规则、入参约定     |
| `{Variant}-example.md` | Demo 索引                            |
| `demos/{Variant}/`     | 完整参考源码                         |

公共类型：[`types/PageTemplate.types.ts`](../../docs/examples/types/PageTemplate.types.ts)

清单索引：[`catalog.json`](../../docs/examples/catalog.json)（`category: "Login"` 条目）

## 模板选型（Login）

| id             | 标题     | 源码                  | 适用场景                     |
| -------------- | -------- | --------------------- | ---------------------------- |
| `login-common` | 通用登录 | `Login/demos/Common/` | **唯一模板**；按 Q1 裁剪方式 |

**跳过让用户选模板**，直接采用 `login-common`。选定后 Read：

1. `Login/Common-props.ts`
2. `Login/Common-rules.md`
3. 生成前再 Read `Login/demos/Common/`（`index.tsx` 与启用的子页、`api/`）

---

# 生成业务页（问答 + 改写）

仅问架构、不生成代码时，到此为止即可。需要生成 `src/pages/` 时，按下列流程执行。

## 准备

1. Read [`catalog.json`](../../docs/examples/catalog.json) — 只使用 `category: "Login"` 的条目。
2. Read [reference/generation.md](reference/generation.md)。
3. `templateId = login-common`；Read Common 的 props + rules。

## 问答原则（必读）

- **一次只问一件事**：每一轮只收集一个主题；拿到用户回复后再问下一项。
- **对用户提问必须带题号**：面向用户的问句以 `Qn：` 开头。
- **禁止开场问模板**：固定 `login-common`。
- **顺序固定**：登录方式 → 入参与接口地址 → **最后**问生成路径。不得提前问输出路径。
- 登录页**不问**展示设计稿、**不问**出参 mock（成功形态沿用模板：`code === '1'` + `data.token`）。用户主动提供出参时再改 `goHome`。
- 表述不清时**只追问当前主题缺项**。
- 未完成全部问答前**不要**开始写业务代码。

## 问答流程（必须按序）

### Q1 — 登录方式（AskQuestion；可多选）

**问：** `Q1：这个登录页需要支持哪些登录方式？（可多选）`

用 `AskQuestion`，`allow_multiple: true`，选项：

| id       | label          |
| -------- | -------------- |
| `phone`  | 本机号一键登录 |
| `code`   | 手机验证码登录 |
| `user`   | 用户名密码登录 |
| `wechat` | 微信登录       |
| `qq`     | QQ 登录        |

- 至少选择 **一种账号方式**（`phone` / `code` / `user`）。只选微信/QQ 时**本轮追问**补账号方式。
- 记录 `loginMethods`。
- **不要**在本轮要接口地址。

### Q2 — 入参与接口地址（单独一轮；给 JSON 让用户复制填写）

**问：** `Q2：请复制下面的 JSON，填好各登录方式的接口地址和入参字段后发回来。`

只保留 **Q1 已选方式** 对应的端点（未选手动删掉，不要把未选手的接口丢给用户填）：

| 已选     | 写入 JSON 的 key                                                           |
| -------- | -------------------------------------------------------------------------- |
| `user`   | `loginByUsername`                                                          |
| `code`   | `sendLoginCode`、`loginByPhoneCode`                                        |
| `phone`  | `loginByPhoneOneClick`（本机号默认 Bridge，不必填 `queryPhoneNumber` url） |
| `wechat` | `loginByWeChat`                                                            |
| `qq`     | `loginByQq`                                                                |

完整五字段对照（按需出现在 JSON 的 `request` 里）：

| 中文       | JSON 字段                | 用在                                       |
| ---------- | ------------------------ | ------------------------------------------ |
| 用户名     | `username`               | `loginByUsername`                          |
| 密码       | `password`               | `loginByUsername`                          |
| 手机号码   | `phone`                  | 发码、验证码登录、一键登录                 |
| 验证码     | `code`                   | `loginByPhoneCode`                         |
| 运营商编码 | `code`（一键登录请求体） | `loginByPhoneOneClick`；前端 `carrierCode` |

向用户展示时，用已裁剪后的示例（全量见 [reference/api-input-template.json](reference/api-input-template.json)）。**Q1 全选时**示例：

```json
{
  "loginByUsername": {
    "url": "/user/login/loginByUsername",
    "method": "POST",
    "contentType": "application/json",
    "request": {
      "username": "用户名",
      "password": "密码"
    }
  },
  "sendLoginCode": {
    "url": "/user/login/sendLoginCode",
    "method": "POST",
    "contentType": "application/json",
    "request": {
      "phone": "手机号码"
    }
  },
  "loginByPhoneCode": {
    "url": "/user/login/loginByPhoneCode",
    "method": "POST",
    "contentType": "application/json",
    "request": {
      "phone": "手机号码",
      "code": "验证码"
    }
  },
  "loginByPhoneOneClick": {
    "url": "/user/login/loginByPhoneOneClick",
    "method": "POST",
    "contentType": "application/json",
    "request": {
      "phone": "手机号码",
      "code": "运营商编码"
    }
  },
  "loginByWeChat": {
    "url": "/user/login/loginByWeChat",
    "method": "POST",
    "contentType": "application/json",
    "request": {}
  },
  "loginByQq": {
    "url": "/user/login/loginByQq",
    "method": "POST",
    "contentType": "application/json",
    "request": {}
  }
}
```

补充说明（写在 JSON 上方，简短即可）：

- 把 `"用户名"` 等中文占位换成**后台真实字段名**；`url` 换成真实地址。
- `method` / `contentType` 可删；未写则默认 `POST` + `application/json`。
- 一键登录的本机号码来自客户端 Bridge，不填取号 HTTP；`loginByPhoneOneClick.request.code` 是运营商编码。
- 微信/QQ 若暂无接口：`url` 留空字符串，生成 Toast 占位。

**解析：**

| 项           | 默认                                                |
| ------------ | --------------------------------------------------- |
| `apiMethod`  | `POST`                                              |
| Content-Type | `application/json`                                  |
| 登录成功     | `result.code === '1'`，token 在 `result.data.token` |

已选方式缺少对应 `url`（第三方允许空）时**只追问本轮缺项**。`request` 未改中文占位时，沿用模板英文字段名（`username` / `password` / `phone` / `code`）。

### Q3 — 输出路径（必填；单独一轮文字问）

**问：** `Q3：页面生成到哪里？请给出相对仓库根的完整目录，例如 src/pages/Login/。`

- **必填**；未给出有效路径时**只追问此项**，不得猜测或自动生成。
- 记录 `output.outputPath`；`output.pageName` = 路径末级目录名（PascalCase）。
- 路径有效后**不要**再问路由地址。生成时若工程有 react-router，按 [create-page-base/react-router.md](../create-page-base/react-router.md) 自动注册，并把 URL 入参写在对应 Route 注释上。

### Q4 — 确认（可选）

用简短摘要列出：`loginMethods`、各接口 url、`output.outputPath`。用户确认后再生成。

## 生成步骤

1. **读文档与模板** — Read props/rules；再递归 Read `.ai/docs/examples/Login/demos/Common/` 中**仍启用**的文件（**全部源码**）。Glob 失败时用 `find` + 绝对路径 Read（见 [generation-constraints.md](../create-page-base/generation-constraints.md)）。
2. **写 `page-spec.json`** — 字段对齐 `Common-props.ts`（见 [reference/page-spec.schema.json](reference/page-spec.schema.json)）。
3. **复制并改写** — **从模板目录复制**到目标路径（仅 `.ts`/`.tsx`）；按 [reference/generation.md](reference/generation.md) 裁剪方式、替换 URL / 入参；删除未启用子页与 demo `console.log`。**禁止**参照同目录旧 JS 页或跳过模板手写。
4. **注册路由** — 工程有 react-router 时按 [create-page-base/react-router.md](../create-page-base/react-router.md) 追加与页面对应的 Route，注释写 URL 入参；没有则跳过。
5. **校验** — `npx tsc --noEmit`；修复新增文件中的类型错误。

## 产出清单

- `{output.outputPath}/index.tsx` 及子目录
- `{output.outputPath}/page-spec.json`
- 有 react-router 时：对应 Route（含 URL 入参注释）
- 向用户说明：启用了哪些登录方式、接口改了哪些、如何联调；若注册了路由一并给出 path

## 不允许

- 跳过 Read `Common-props.ts` + `Common-rules.md` 直接写页面
- 跳过问答直接生成
- **在 Q1 之前或同一轮要接口 JSON**
- **在拿到 Q2 之前询问或写入输出路径（Q3）**
- **把未选登录方式的接口塞进 Q2 示例**
- **跳过或自动填充输出路径**（Q3 必填）
- **工程有 react-router 时跳过注册路由**，或为路由 path 再开一轮问答
- 使用与 catalog 无关的随意目录当模板（除非用户明确指定路径）
- 引导用户去用不存在的公开入口 `create-page`
- **生成 `.js` / `.jsx` 业务页**（只允许 `.ts` / `.tsx`，见 [generation-constraints.md](../create-page-base/generation-constraints.md)）
- **未 Read 并复制 catalog 模板目录**就手写页面，或仅参照同模块旧 JS 页实现
