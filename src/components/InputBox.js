import React from 'react'

const InputBox = (props) => {
    const { label, type, placeholder } = props;
  return (
    <>
        <li>
            <label>
                { label }
            </label>
            <input
                type={type}
                placeholder={placeholder}
            />
        </li>
    </>
  )
}

export default InputBox