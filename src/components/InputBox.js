import React from 'react'

const InputBox = (props) => {
    const { label, placeholder } = props;
  return (
    <>
        <li>
            <label>
                { label }
            </label>
            <input
                type="text"
                placeholder={placeholder}
            />
        </li>
    </>
  )
}

export default InputBox