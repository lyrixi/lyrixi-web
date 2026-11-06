import React, { forwardRef, useRef, useImperativeHandle, useCallback } from 'react'

import type { SelectMainProps, SelectMainRef, SelectItem } from './../types'

// 内库使用-start
import ValidatorUtil from './../../../utils/ValidatorUtil'
import Result from './../../Result'
import List from './../../List'
import Icon from './../../Icon'
import Icons from './../../../icons'
import DOMUtil from './../../../utils/DOMUtil'
import type { ListProps, ListViewItem } from './../../List/types'
// 内库使用-end

/* 测试使用-start
import { ValidatorUtil, Result, List, Icon, Icons } from 'lyrixi-web'
测试使用-end */

const Main = forwardRef<SelectMainRef, SelectMainProps>(
  (
    {
      // Value & Display Value
      id,
      value,
      list,
      formatViewItem,
      multiple,
      checkable = false,
      // Style
      className,
      style,
      itemStyle,
      itemClassName,
      // Value & Display Value
      itemLayout,
      checkboxVariant,
      checkboxPlacement,
      // Elements
      itemRender,
      // Events
      onChange
    },
    ref
  ) => {
    const mainRef = useRef<HTMLDivElement | null>(null)
    useImperativeHandle(ref, () => {
      return {
        mainElement: mainRef.current,
        getMainElement: () => mainRef.current
      }
    })

    const mergedFormatViewItem = useCallback(
      (item: SelectItem, options: { index: number }): ListViewItem => {
        const viewItem = formatViewItem ? formatViewItem(item, options) : { ...item }
        const userActionRender = viewItem.actionRender

        return {
          ...viewItem,
          checkable: viewItem.checkable ?? checkable,
          actionRender: (renderOptions) => {
            const customNode =
              typeof userActionRender === 'function' ? userActionRender(renderOptions) : null
            if (checkable || !renderOptions.checked) {
              return customNode
            }
            return (
              <>
                {customNode}
                <Icon svg={Icons.Ok} color="info" size="xs" className="lyrixi-select-main-check" />
              </>
            )
          }
        }
      },
      [checkable, formatViewItem]
    )

    return (
      <div
        id={id}
        ref={mainRef}
        style={style}
        className={DOMUtil.classNames('lyrixi-select-main', className)}
      >
        {ValidatorUtil.isEmpty(list) && (
          <Result className="lyrixi-select-main-result" status="empty" />
        )}

        <List
          value={value}
          list={list}
          formatViewItem={mergedFormatViewItem}
          allowClear={multiple ? true : false}
          multiple={multiple}
          checkable={checkable}
          itemStyle={itemStyle}
          itemClassName={itemClassName}
          itemLayout={itemLayout}
          checkboxVariant={checkboxVariant}
          checkboxPlacement={checkboxPlacement}
          itemRender={itemRender}
          onChange={onChange as ListProps['onChange']}
        />
      </div>
    )
  }
)

export default Main
