import React, { useEffect, useState, forwardRef, useRef, useImperativeHandle } from 'react'
import Main from './../Main'

import type { SelectItem, SelectMainRef, SelectModalProps, SelectModalRef } from './../types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import DropdownModal from './../../../components/Modal/DropdownModal'
import NavBarOk from './../../../components/Modal/NavBarModal/NavBar/Ok'
import NavBarCancel from './../../../components/Modal/NavBarModal/NavBar/Cancel'
import type { ListProps, ListItem } from './../../List/types'
import type { ModalRef } from './../../Modal/types'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Modal } from 'lyrixi-web'
const DropdownModal = Modal.DropdownModal
测试使用-end */

const Modal = forwardRef<SelectModalRef, SelectModalProps>(
  (
    {
      // Value & Display Value
      id,
      value,

      // Main
      // Main: Value & Display Value
      list,
      formatViewItem,
      multiple,
      checkable,
      itemLayout,
      checkboxVariant,
      checkboxPlacement,

      // Status
      open,

      // Modal
      // Modal: Status
      maskClosable,

      // Main: Style
      itemStyle,
      itemClassName,

      // Modal: Style
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,
      offset,
      left,
      right,
      referenceElement,

      // Main: Elements
      headerRender,
      itemRender,

      // Modal: Elements
      portal,
      title,
      cancel,
      cancelVisible,

      // Events
      onOk,
      onChange,
      onClose
    },
    ref
  ) => {
    const [currentValue, setCurrentValue] = useState<SelectItem | SelectItem[] | null | undefined>(
      value
    )

    const modalRef = useRef<ModalRef | null>(null)
    const mainRef = useRef<SelectMainRef | null>(null)

    useEffect(() => {
      if (open) {
        setCurrentValue(value)
      }
    }, [open, value])

    useImperativeHandle(ref, () => {
      return {
        ...(modalRef.current ?? {}),
        ...(mainRef.current ?? {})
      } as SelectModalRef
    })

    useEffect(() => {
      if (!open) return
      const referenceEl =
        typeof referenceElement === 'function' ? referenceElement() : referenceElement
      const modalEl = modalRef.current?.modalElement
      if (!referenceEl || !modalEl) return
      const { width } = referenceEl.getBoundingClientRect()
      modalEl.style.width = `${width}px`
      modalEl.style.minWidth = `${width}px`
    }, [open, referenceElement, list])

    async function handleConfirm() {
      let next: SelectItem | SelectItem[] | null | undefined = currentValue
      if (typeof onOk === 'function') {
        const goOn = await onOk(currentValue ?? null)
        if (goOn === false) return false
        if (
          goOn instanceof Array ||
          (goOn !== null && goOn !== undefined && typeof goOn === 'object' && 'id' in goOn)
        ) {
          next = goOn as SelectItem | SelectItem[] | null
          setCurrentValue(next)
        }
      }
      onChange?.(next ?? null, undefined)
      onClose?.()
    }

    function handleChange(
      newValue: ListItem | ListItem[] | null,
      options?: { action?: string; currentItem: ListItem }
    ) {
      const nextValue = newValue as SelectItem | SelectItem[] | null
      setCurrentValue(nextValue)
      if (!multiple) {
        onChange?.(
          nextValue,
          options ? { ...options, currentItem: options.currentItem as SelectItem } : undefined
        )
        onClose?.()
      }
    }

    function handleCancelClick() {
      onClose?.()
    }

    function renderHeader() {
      if (typeof headerRender === 'function') {
        return headerRender({
          open: open ?? false,
          value: value,
          list: list
        })
      }
      if (title) {
        return <div className="lyrixi-select-modal-title">{title}</div>
      }
      return null
    }

    function renderFooter() {
      if (!multiple) return null
      return (
        <div className="lyrixi-select-modal-footer">
          {cancelVisible !== false ? (
            <NavBarCancel onClick={handleCancelClick}>{cancel}</NavBarCancel>
          ) : null}
          <NavBarOk
            onClick={() => {
              void handleConfirm()
            }}
          />
        </div>
      )
    }

    const headerNode = renderHeader()
    const footerNode = renderFooter()

    return (
      <DropdownModal
        id={id}
        ref={modalRef}
        open={open}
        maskClosable={maskClosable}
        modalStyle={modalStyle}
        modalClassName={DOMUtil.classNames('lyrixi-modal-select', modalClassName)}
        maskStyle={maskStyle}
        maskClassName={DOMUtil.classNames('lyrixi-mask-select-dropdown', maskClassName)}
        portal={portal}
        offset={offset ?? { top: 4 }}
        left={left}
        right={right}
        referenceElement={referenceElement}
        onClose={onClose}
      >
        {headerNode}
        <Main
          ref={mainRef}
          multiple={multiple}
          checkable={checkable}
          value={currentValue as ListProps['value']}
          list={list as ListProps['list']}
          formatViewItem={formatViewItem}
          itemRender={itemRender}
          itemStyle={itemStyle}
          itemClassName={itemClassName}
          itemLayout={itemLayout}
          checkboxVariant={checkboxVariant}
          checkboxPlacement={checkboxPlacement}
          onChange={handleChange}
        />
        {footerNode}
      </DropdownModal>
    )
  }
)

export default Modal
