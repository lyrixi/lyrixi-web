import React, { useEffect, useRef, useState } from 'react'

import { Form, Input, LocaleUtil, ToolBar } from 'lyrixi-web'

import type { FilterHeaderProps, ToolBarFilterOkParams, ToolBarFilterProps } from './types'

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

  // 取消还原激活状态
  const handleCancel = () => {
    modifiedRef.current = active
  }

  const handleConfig = () => {}

  const handleReset = () => {
    modifiedRef.current = false
    ;(form as { resetFields: () => void }).resetFields()
  }

  const handleOk = ({ close }: ToolBarFilterOkParams) => {
    setActive(modifiedRef.current)
    onSearch?.({
      ...queryParams,
      ...(form as { getFieldsValue: () => Record<string, unknown> }).getFieldsValue()
    })
    close()
  }

  const handleValuesChange = () => {
    modifiedRef.current = true
  }

  const filterProps = {
    sizeEqual: true,
    color: active ? 'primary' : 'default',
    onOpen: handleOpen,
    onClose: handleClose,
    onCancel: handleCancel,
    onConfig: handleConfig,
    onReset: handleReset,
    onOk: handleOk,
    modalRender: () => {
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
    }
  } as unknown as ToolBarFilterProps

  return <ToolBar.Filter {...filterProps} />
}

export default Filter
