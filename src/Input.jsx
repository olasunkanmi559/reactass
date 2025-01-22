import React from 'react'
import Ola from './Ola'
import Button from './Button'
import logo from './assets/react.svg'

const Input = ({para, ola}) => {
  return (
    <div className='col-sm-4'>
      <img src={logo} alt="" /> 
      <h2>{para}</h2>
      <p>{ola}</p>
      <Button/>
    </div>
  )
}

export default Input
