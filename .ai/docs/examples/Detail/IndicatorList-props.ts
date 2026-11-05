/**
 * detail-indicator-list — 指标卡片列表（周期切换 + Card 指标项）
 * 模板：Detail/demos/IndicatorList/
 * 通常用于报表页：列表内容为卡片展示的指标项（目标 / 完成 / 完成率）
 * 示例仅展示；生成时将 queryData mock 换成真实 url
 */
import type { ApiEndpointSpec, PageDesignSpec, PageOutputSpec } from '../types/PageTemplate.types'

export interface DetailIndicatorListPageProps {
  templateId: 'detail-indicator-list'
  output: PageOutputSpec
  design: PageDesignSpec
  /** → Bridge.setTitle */
  pageTitle?: string
  api: {
    /** → api/queryData/；示例为 mock，生成时换成真实 url + serverData 入参 */
    queryData: ApiEndpointSpec
  }
  header?: {
    /** → Header/ DatePicker.TypeSwitcher；utils/constants DATE_TYPE_LIST */
    dateTypes?: string
    /** → utils/getUrlDateType；默认读 URL dateId / date */
    urlDateParams?: string
  }
  main?: {
    /** → Main/ MetricCard 字段映射（title / target / complete / rate） */
    metricsMapping?: string
    /** 是否展示主指标卡片（data.mainTarget） */
    showMainTarget?: boolean
  }
}
