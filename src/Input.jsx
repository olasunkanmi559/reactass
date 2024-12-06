import React from 'react'
import App from './App'
import Button from './Button'
import logo from './assets/react.svg'

const Input = ({para, ola}) => {
  return (
    <div>
       <img src={logo} alt="" /> 
      <h2>{para}</h2>
      <p>{ola}</p>
      <Button/>
    </div>
  )
}

export default Input
