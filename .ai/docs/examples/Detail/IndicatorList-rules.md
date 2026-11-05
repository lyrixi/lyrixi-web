# Detail IndicatorList Rules

> 模板 ID：`detail-indicator-list` · 源码：`demos/IndicatorList/`

## 何时使用

- **报表/指标详情**：列表内容为 **Card 展示的指标项**（如目标、完成、完成率），不是 Form 只读字段
- Header 用 `DatePicker.TypeSwitcher` 切换周期（月/季/年等），切换后重新 `queryData`
- 需要卡片列表而非 Tabs + Slides 看板时用本模板；多 Tab/Slide 看板用 `report-card`
- 示例**只负责展示**，不含点击下钻

## 与其它模板

| 模板          | 差异                                                            |
| ------------- | --------------------------------------------------------------- |
| `detail-form` | Form 只读字段 + 可选审批 Footer；无 Header/Main 指标卡片        |
| `report-card` | Tabs + Slides + Content 指标卡片；本模板是单列表卡片 + 周期切换 |

## 目录结构

| 路径             | 职责                                                                        |
| ---------------- | --------------------------------------------------------------------------- |
| `index.tsx`      | `queryData` 加载、`Header`/`Main`/`Result`（仅 `empty`/`error` 时展示）     |
| `Header/`        | 周期 Tab；`types.ts`                                                        |
| `Main/`          | 指标卡片列表；`types.ts` 含 MetricItem                                      |
| `api/queryData/` | mock、`types.ts`、`localData`、`serverData`；空数据时返回 `status: 'empty'` |
| `utils/`         | `DATE_TYPE_LIST`、`getUrlDateType`                                          |

无 Footer、无 `approveData` / `saveData`。

## 空态与错态

- `api/queryData/`：后台 `data.mainTarget` 与 `data.subTargets` 均为空时，返回 `{ status: 'empty', message: locale('暂无数据') }`，不返回 `data`
- 接口失败时返回 `{ status: 'error', message: ... }`
- `index.tsx`：仅在 `result.status === 'empty' || result.status === 'error'` 时渲染 `<Result status={result.status} title={result.message} />`；`status` 直接透传，不做类型断言

## 替换点

| 问答 / page-spec 字段  | 替换位置                                           |
| ---------------------- | -------------------------------------------------- |
| `output`               | 生成目录、组件名                                   |
| `pageTitle`            | `index.tsx` `Bridge.setTitle`                      |
| `api.queryData`        | `api/queryData/`：mock → 真实 url / 入参 / 出参    |
| `header.dateTypes`     | `utils/constants.ts`、`Header/`                    |
| `header.urlDateParams` | `utils/getUrlDateType.ts`                          |
| `main.metricsMapping`  | `Main/` `MetricCard`；`api/queryData/localData.ts` |
| `design.designNotes`   | 卡片列（目标/完成/完成率）增删                     |

## 禁止

- 不要加 `saveData` 或可编辑表单控件
- 不要把本模板改成 `detail-form` 的 Form.Item 详情
- 不要把示例 mock 当运行时接口；生成时换成用户提供的 url

## 查阅

- 可替换项：`IndicatorList-props.ts`
- 示例索引：`IndicatorList-example.md`
