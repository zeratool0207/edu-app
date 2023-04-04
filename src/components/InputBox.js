import React from 'react'

const InputBox = (props) => {
    const { label, placeholder,onChange } = props;
  return (
    <>
        <li>
            <label>
                { label }
            </label>
            <input
                type="text"
                placeholder={placeholder}
                onChange = {onChange}
            />
        </li>
    </>
  )
}

export default InputBox;