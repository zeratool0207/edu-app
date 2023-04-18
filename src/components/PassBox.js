import React from 'react'

const PassBox = (props) => {
    const { label, placeholder, onChange, value } = props;
  return (
    <>
        <li>
            <label>
                { label }
            </label>
            <input
                type="password"
                placeholder={placeholder}
                onChange = {onChange}
                value={value}
            />
        </li>
    </>
  )
}

export default PassBox;