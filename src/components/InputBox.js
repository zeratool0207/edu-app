import React from 'react'

const InputBox = (props) => {
    // const  { label, placeholder } = props;
  return (
    <>
        <li>
            <label>
                { props.label }
            </label>
            <input
                type="text"
                placeholder={ props.placeholder }
                onChange = {props.onChange}
                value = {props.value}
            />
        </li>
    </>
  )
}

export default InputBox;