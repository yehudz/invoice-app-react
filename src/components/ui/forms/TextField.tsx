import React, { useRef, useState } from 'react'
import type {
  TextFiledProps
} from '../../../typings/common.interfaces'
export default 
function TextField(
  {
    labelText,
    type
  }: TextFiledProps
) {
  const [
    value, 
    setValue
  ] = useState<string>('')
  const [
    validated, 
    setValidated
  ] = useState<boolean>(true)
  const input = useRef(null)

  function textFieldValue(
    e: React.ChangeEvent<HTMLInputElement>) {
    setValidated(true)
    let target = e.target.value
    setValue(target)
  }

  function checkForValidation() {
    if (!value) {
      setValidated(false)
    }
  }
  return(
    <div>
      <div
        className='
          flex 
          justify-between
          items-center
          h-[30px]
        '
      >
        <label
          aria-label={labelText}
          data-cy='text-field-label'
          htmlFor='text-field'
          className={`
            text-[12px]
            text-secondary-dark
            dark:text-white
            
            ${validated ? 
              /*eslint indent: 0*/
              'text-secondary-dark' : 
              'text-warning dark:text-warning'
            }
          `}
        >
          {labelText}
        </label>
        <div 
          data-cy='error-message'
          className={`
            ${validated ? 'hidden' : ''}
            text-warning
            text-[11px]
          `}
        >
          
          Can`t be empty
        </div>
      </div>
      <input 
        aria-placeholder={labelText}  
        data-cy='text-field-component'
        name='text-field'
        ref={input}
        type={type}
        value={value}
        onChange={textFieldValue}
        onBlur={checkForValidation}
        className={`
          w-full
          h-[48px]
          text-[12px]
          text-[400]
          text-black
          dark:text-white
          px-3
          outline-none
          focus:border-primary
          ${validated ? 
            'border-gray-light' : 
            'border-warning'}
          border
          border-gray-light
          rounded
          bg-white
          dark:bg-gray-dark
        `}
          
      />
    </div>
  )
}