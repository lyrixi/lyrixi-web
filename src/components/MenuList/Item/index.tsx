import React from 'react'

import type { MenuListItemProps } from '../types'

// 内库使用-start
import Icons from '../../../icons'
import DOMUtil from './../../../utils/DOMUtil'
import Icon from './../../Icon'
import List from './../../List'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Icon, Icons, List } from 'lyrixi-mobile'
测试使用-end */

const MenuListItem = ({
  // Value & Display Value
  item,
  expanded,
  selected = false,

  // Style
  style,
  className,

  // Events
  onChange
}: MenuListItemProps) => {
  return (
    <List.Item
      id={item.id}
      title={item.name}
      disabled={item.disabled}
      checked={false}
      iconSvg={item.iconSvg}
      actionRender={
        typeof expanded === 'boolean'
          ? () => (
              <Icon
                svg={expanded ? Icons.ArrowUp : Icons.ArrowDown}
                size="xxxs"
                color="quaternary"
                className="lyrixi-menulist-expandable-icon"
              />
            )
          : undefined
      }
      style={style}
      className={DOMUtil.classNames(
        typeof expanded === 'boolean' ? 'lyrixi-menulist-expandable' : 'lyrixi-menulist-item',
        selected ? 'lyrixi-active' : '',
        className
      )}
      onChange={() => {
        if (typeof expanded === 'boolean') {
          onChange?.(item, { action: expanded ? 'collapse' : 'expand' })
        } else {
          onChange?.(item, { action: 'select' })
        }
      }}
    />
  )
}

export default MenuListItem
