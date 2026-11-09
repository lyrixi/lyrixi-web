import React, { forwardRef, useImperativeHandle, useRef } from 'react'

import type { MouseEvent } from 'react'

import type { MenuGridItemProps, MenuGridItemRef } from './types'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
import Row from './../Row'
import Text from './../Text'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Row, Text } from 'lyrixi-mobile'
测试使用-end */

const MenuGridItem = forwardRef<MenuGridItemRef, MenuGridItemProps>(
  (
    {
      // Value & Display Value
      title,
      span = 6,

      // Status
      disabled = false,

      // Style
      style,
      className,

      // Elements
      icon,
      badge,

      // Events
      onClick
    },
    ref
  ) => {
    const rootRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => {
      return {
        get element() {
          return rootRef.current
        }
      }
    })

    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
      if (disabled) {
        return
      }
      onClick?.(e)
    }

    return (
      <Row.Col span={span}>
        <div
          ref={rootRef}
          className={DOMUtil.classNames(
            'lyrixi-menugrid-item',
            disabled ? 'lyrixi-disabled' : '',
            className
          )}
          style={style}
          onClick={handleClick}
        >
          {icon || badge ? (
            <div className="lyrixi-menugrid-item-icon">
              {icon}
              {badge ? <div className="lyrixi-menugrid-item-badge">{badge}</div> : null}
            </div>
          ) : null}
          {title ? (
            <div className="lyrixi-menugrid-item-title" color="secondary">
              {title}
            </div>
          ) : null}
        </div>
      </Row.Col>
    )
  }
)

export default MenuGridItem
