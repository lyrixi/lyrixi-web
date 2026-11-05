# DataUtil Rules

> 源文档：`src/utils/DataUtil/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用

- 从 `lyrixi-web` 引入 `DataUtil`，**禁止**自造同类对象/数据工具函数。
- 深拷贝、按条件挑选对象属性、字符串脱敏一律用本工具。
- `isEmpty` / `isEqual` / `isPlainObject` / `isEmail` / `isMobilePhone` 用 `ValidatorUtil`。
- 防抖用 `FunctionUtil.debounce`；生成 UUID 用 `IdUtil.randomUUID`。

## 何时使用

- 见 `src/utils/DataUtil/index.zh-CN.md` 说明与 demos。

## API 索引（节选）

- `DataUtil.pickBy`
- `DataUtil.cloneDeep`
- `DataUtil.desensitize`

## Demo 索引（本目录 `demos/`）

- `demos/DataUtil.tsx`

## 查阅顺序

- API：`DataUtil-props.ts`
- 示例：`DataUtil-example.md`
