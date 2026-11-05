import React, { useEffect, useRef, useState } from 'react'

import { FooterBar, Form, Input, LocaleUtil, ToolBar } from 'lyrixi-web'

import type {
  FilterHeaderProps,
  ToolBarFilterFooterRenderParams,
  ToolBarFilterModalRenderParams,
  ToolBarFilterProps
} from './types'

const locale = LocaleUtil.locale

function Filter({ queryParams, onSearch }: FilterHeaderProps) {
  const modifiedRef = useRef(false)
  const form = Form.useForm()

  const [active, setActive] = useState(false)
  const [visible, setVisible] = useState(false)

  // 显示弹窗时需要还原值
  useEffect(() => {
    if (!visible) return
    ;(form as { setFieldsValue: (v: Record<string, unknown>) => void }).setFieldsValue({
      keyword: queryParams?.keyword || '',
      input: queryParams?.input || ''
    })
    // eslint-disable-next-line
  }, [visible])

  const handleOpen = () => {
    setVisible(true)
  }

  const handleClose = () => {
    setVisible(false)
  }

  const handleConfirm = (onClose: () => void) => {
    const values = (form as { getFieldsValue: () => Record<string, unknown> }).getFieldsValue()
    setActive(!!modifiedRef.current)
    onSearch?.({ ...queryParams, ...values })
    onClose()
  }

  const handleValuesChange = () => {
    modifiedRef.current = true
  }

  const filterProps = {
    sizeEqual: true,
    color: active ? 'primary' : 'default',
    onOpen: handleOpen,
    onClose: handleClose,
    modalRender: ({ onClose: _onClose }: ToolBarFilterModalRenderParams) => {
      return (
        <Form
          layout="vertical"
          form={form}
          onValuesChange={handleValuesChange}
          style={{ marginLeft: '12px' }}
        >
          <Form.Item name="input" label={String(locale('单行文本框'))}>
            <Input.Text allowClear placeholder={String(locale('请输入'))} maxLength={50} />
          </Form.Item>
        </Form>
      )
    },
    footerRender: (params: ToolBarFilterFooterRenderParams) => {
      const close = () => {
        params.onClose?.()
      }
      return (
        <FooterBar>
          <FooterBar.Button block variant="filled" color="default" onClick={close}>
            {String(locale('取消'))}
          </FooterBar.Button>
          <FooterBar.Button
            block
            variant="solid" color="primary"
            onClick={() =>
              handleConfirm(() => {
                params.onClose?.()
              })
            }
          >
            {String(locale('确定'))}
          </FooterBar.Button>
        </FooterBar>
      )
    }
  } as unknown as ToolBarFilterProps

  return <ToolBar.Filter {...filterProps} />
}

export default Filter
