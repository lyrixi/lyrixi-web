/**
 * report-card — 报表卡片（Tabs + Slides + Content）
 * 模板：Report/demos/Card/
 */
import type { ApiEndpointSpec, PageDesignSpec, PageOutputSpec } from '../types/PageTemplate.types'

export interface ReportCardPageProps {
  templateId: 'report-card'
  output: PageOutputSpec
  design: PageDesignSpec
  /** → Device.getUrlParameter('title') 或默认标题 */
  pageTitle?: string
  api: {
    /** → api/queryTabs/ */
    queryTabs: ApiEndpointSpec
    /** → api/querySlides/ */
    querySlides: ApiEndpointSpec
    /** → api/queryData/；tabId + slideId 入参 */
    queryData: ApiEndpointSpec
  }
  header?: {
    tabsField?: string
    slidesField?: string
  }
  content?: {
    /** → Content/ 指标卡片字段映射 */
    metricsMapping?: string
    /** Bridge.openWindow 下钻 URL 模板 */
    drillDownUrl?: string
  }
}
