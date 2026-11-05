# ValidatorUtil Rules

> 源文档：`src/utils/ValidatorUtil/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用

- 从 `lyrixi-web` 引入 `ValidatorUtil`，**禁止**自造同类校验函数。
- 空值、深度相等、纯对象、邮箱、手机号校验一律用本工具，不要再用已移除的 `ObjectUtil.isEmpty` 等旧 API。

## 何时使用

- 见 `src/utils/ValidatorUtil/index.zh-CN.md` 说明与 demos。

## API 索引（节选）

- `ValidatorUtil.isEmail`
- `ValidatorUtil.isMobilePhone`
- `ValidatorUtil.isEmpty`
- `ValidatorUtil.isEqual`
- `ValidatorUtil.isPlainObject`

## Demo 索引（本目录 `demos/`）

- `demos/ValidatorUtil.tsx`

## 查阅顺序

- API：`ValidatorUtil-props.ts`
- 示例：`ValidatorUtil-example.md`
