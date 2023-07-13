import React from 'react'
import "./Inputs.css"
function Inputs(props) {
  const { type, placeholder, value, name, handleChange } = props
  return (
    <input
      className='inputContaineer'
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
  )
}

export default Inputs