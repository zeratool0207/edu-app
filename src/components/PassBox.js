import React from 'react'

const PassBox = (props) => {
    const { label, placeholder, onChange } = props;
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
            />
        </li>
    </>
  )
}

export default PassBox;