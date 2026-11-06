import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'

import InputText from './../../Text'

import type { NumberOTPProps, NumberOTPRef } from './Input.OTP.NumberOTP.types'
import type { InputTextRef } from '../../types'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-web'
测试使用-end */

const NumberOTP = forwardRef<NumberOTPRef, NumberOTPProps>(
  ({ id, values, disabled, readOnly, onChange, onPaste }, ref) => {
    const inputRef = useRef<InputTextRef | null>(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [focused, setFocused] = useState(false)

    const currentValue = values[currentIndex] || ''

    useEffect(() => {
      const el = inputRef.current?.inputElement
      if (!el || !onPaste) return
      const handlePaste = (e: Event) => {
        onPaste(e as unknown as React.ClipboardEvent<HTMLInputElement>)
      }
      el.addEventListener('paste', handlePaste)
      return () => el.removeEventListener('paste', handlePaste)
    }, [onPaste])

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

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled || readOnly) return

      if (e.key === 'Backspace') {
        if (!values[currentIndex] && currentIndex > 0) {
          setCurrentIndex(currentIndex - 1)
        }
        return
      }

      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1)
        return
      }

      if (e.key === 'ArrowRight' && currentIndex < values.length - 1) {
        setCurrentIndex(currentIndex + 1)
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

        {/* 隐藏真实 Input.Text：只负责唤起键盘，切换格子时不切换焦点 */}
        <InputText
          ref={inputRef}
          value={currentValue}
          disabled={disabled}
          readOnly={readOnly}
          className="lyrixi-input-otp-hidden-input"
          cursor={false}
          autoComplete="off"
          inputMode="numeric"
          onChange={(val) => {
            const diff = val.replace(currentValue, '')
            if (!diff) {
              onChange(currentIndex, '')
              return
            }
            const digit = diff.replace(/\D/g, '').slice(-1)
            if (digit) {
              onChange(currentIndex, digit)
            }
          }}
          onKeyDown={handleKeyDown}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </>
    )
  }
)

export default NumberOTP
