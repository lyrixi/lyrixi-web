/**
 * 文档站全局布局：为全站（含所有 demo 预览）统一引入组件库样式
 * 这样无需在每个 demo 里单独写 import 'index.less'
 */
import { useOutlet } from 'dumi'

// 引入组件库全局样式，对所有 demo 生效
import 'src/assets/index.less'

export default function GlobalLayout() {
  const outlet = useOutlet()
  return outlet
}
