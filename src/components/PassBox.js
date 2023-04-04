import React from 'react'

const PassBox = (props) => {
    const { label, placeholder } = props;
  return (
    <>
        <li>
            <label>
                { label }
            </label>
            <input
                type="password"
                placeholder={placeholder}
            />
        </li>
    </>
  )
}

export default PassBox;