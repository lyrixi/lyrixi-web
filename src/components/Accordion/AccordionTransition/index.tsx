import React from 'react'

import type { AccordionTransitionProps } from '../types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-web'
测试使用-end */

// AccordionTransition组件
const AccordionTransition = ({
  // Value & Display Value
  open,
  children,
  minHeight = 0,

  // Status
  animated = true
}: AccordionTransitionProps) => {
  return (
    <div
      className={DOMUtil.classNames(
        animated ? 'lyrixi-accordion-transition' : 'lyrixi-accordion-transition-no-animated',
        open ? 'lyrixi-expanded' : 'lyrixi-collapsed'
      )}
      style={{
        minHeight: minHeight
      }}
    >
      <div className="lyrixi-accordion-transition-inner">{children}</div>
    </div>
  )
}

export default AccordionTransition
