import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

import Text from './../../Text'

import type { NumberOTPProps, NumberOTPRef } from './Input.OTP.NumberOTP.types'
import type { InputTextRef } from '../../types'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

const NumberOTP = forwardRef<NumberOTPRef, NumberOTPProps>(
  ({ id, values, disabled, readOnly, onChange }, ref) => {
    const inputRef = useRef<InputTextRef | null>(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [focused, setFocused] = useState(false)

    useImperativeHandle(ref, () => ({
      focus: (index: number) => {
        if (index >= 0 && index < values.length) {
          setCurrentIndex(index)
          inputRef.current?.focus()
          setFocused(true)
        }
      },
      blur: () => {
        inputRef.current?.blur()
        setFocused(false)
      }
    }))

    const handleItemClick = (index: number) => {
      if (!disabled && !readOnly) {
        setCurrentIndex(index)
        inputRef.current?.focus()
        setFocused(true)
      }
    }

    return (
      <>
        {values.map((value, index) => (
          <div
            key={index}
            id={id ? `${id}-${index}` : undefined}
            className={DOMUtil.classNames(
              'lyrixi-input-otp-item',
              currentIndex === index && focused ? 'lyrixi-active' : ''
            )}
            onClick={() => handleItemClick(index)}
          >
            {value || ''}
          </div>
        ))}

        <Text
          ref={inputRef}
          type="number"
          value={values[currentIndex]}
          disabled={disabled}
          readOnly={readOnly}
          className="lyrixi-input-otp-hidden-input"
          onChange={(val) => {
            const next = (val ?? '').replace(/\D/g, '').slice(-1)
            onChange(currentIndex, next)
          }}
          onBlur={() => setFocused(false)}
        />
      </>
    )
  }
)

export default NumberOTP
