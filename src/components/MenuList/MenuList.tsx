import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

import type {
  MenuListChangeOptions,
  MenuListItem as MenuListItemData,
  MenuListProps,
  MenuListRef
} from './types'
import isSelected from './utils/isSelected'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
import Accordion from './../Accordion'
import List from './../List'
import Item from './Item'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, List } from 'lyrixi-mobile'
测试使用-end */

const MenuList = forwardRef<MenuListRef, MenuListProps>(
  (
    {
      // Value & Display Value
      id,
      items = [],
      defaultOpenIds = [],

      // Status
      animated = true,

      // Style
      style,
      className,

      // Events
      onChange
    },
    ref
  ) => {
    const rootRef = useRef<HTMLDivElement>(null)

    const [selectedIds, setSelectedIds] = useState<string[]>([])
    const [openIds, setOpenIds] = useState(defaultOpenIds)

    useImperativeHandle(ref, () => {
      return {
        get element() {
          return rootRef.current
        }
      }
    })

    const handleItemChange = (item: MenuListItemData, options: MenuListChangeOptions) => {
      if (item.disabled || !item.id) {
        return
      }

      if (options.action === 'expand') {
        setOpenIds((prev) => (prev.includes(item.id!) ? prev : [...prev, item.id!]))
      } else if (options.action === 'collapse') {
        setOpenIds((prev) => prev.filter((id) => id !== item.id))
      } else if (options.action === 'select') {
        setSelectedIds([item.id])
      }

      onChange?.(item, options)
    }

    const _childrenContainerRender = (
      children: MenuListItemData[],
      {
        depth,
        childrenType = 'group',
        open = true
      }: {
        depth: number
        childrenType?: 'expandable' | 'group'
        open?: boolean
      }
    ) => {
      const content = (
        <div className={`lyrixi-menulist-${childrenType}-children`}>
          {_listRender(children, depth + 1)}
        </div>
      )

      if (childrenType === 'expandable') {
        return (
          <Accordion.Transition open={open} animated={animated}>
            {content}
          </Accordion.Transition>
        )
      }

      return content
    }

    const _listRender = (list: MenuListItemData[], depth: number) => {
      return list.map((item, index) => {
        const key = item.id ?? `${item.type ?? 'node'}-${depth}-${index}`

        // 分组
        if (item.type === 'group') {
          return (
            <React.Fragment key={key}>
              {item.name ? <List.HeaderItem id={item.id} title={item.name} /> : null}
              {item.children?.length
                ? _childrenContainerRender(item.children, { depth, childrenType: 'group' })
                : null}
            </React.Fragment>
          )
        }

        // 可展开列表
        if (item.children?.length) {
          const open = item.id !== undefined && openIds.includes(item.id)

          return (
            <React.Fragment key={key}>
              <Item
                item={item}
                expanded={open}
                selected={isSelected(item, selectedIds)}
                onChange={handleItemChange}
              />
              {_childrenContainerRender(item.children, { depth, childrenType: 'expandable', open })}
            </React.Fragment>
          )
        }

        // 普通列表
        return (
          <Item
            key={key}
            item={item}
            selected={isSelected(item, selectedIds)}
            onChange={handleItemChange}
          />
        )
      })
    }

    return (
      <div
        id={id}
        ref={rootRef}
        style={style}
        className={DOMUtil.classNames('lyrixi-menulist', 'lyrixi-menulist-inline', className)}
      >
        {_listRender(items, 0)}
      </div>
    )
  }
)

export default MenuList
