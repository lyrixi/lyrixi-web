import React, { forwardRef, useImperativeHandle, useRef } from 'react'

import type { MenuGridProps, MenuGridRef } from './types'
import type { RowRef } from './../Row/types'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
import Row from './../Row'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Row } from 'lyrixi-mobile'
测试使用-end */

const MenuGrid = forwardRef<MenuGridRef, MenuGridProps>(
  (
    {
      // Value & Display Value
      gap = { row: 20, column: 6 },

      // Style
      style,
      className,

      // Elements
      children
    },
    ref
  ) => {
    const rowRef = useRef<RowRef | null>(null)

    useImperativeHandle(ref, () => {
      return {
        get element() {
          return rowRef.current?.element ?? null
        }
      }
    })

    return (
      <Row
        ref={rowRef}
        gap={gap}
        style={style}
        className={DOMUtil.classNames('lyrixi-menugrid', className)}
      >
        {children}
      </Row>
    )
  }
)

export default MenuGrid
