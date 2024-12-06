import { useState } from 'react'
import './App.css'
import Nav from './nav'
import Button from './Button'
import Input from './Input'


function App() {
  const [test, setTest] = useState("")
  const [count, setCount] = useState(0)

  let forola = (event) => {
    setTest(event.target.value)
  }
  let forcount = () => {
    setCount(count + 1)
  }
  let fordec = () => {
    setCount(count - 1)
  }
  let forreset = () => {
    setCount(count == 0)
  }

  return (
    <div>
      <div className='ola'>
        <Input para={"Best 4G Network"} ola={"Enjoy SuperFast internet across Nigeria with 4G LTE data and SuperClear voice services"} />
        <Input para={"24x7 Help & support"} ola={"Our virtual chat assistant & Customer care services available to help you 24x7"} />
        <Input para={"Bestvalue"} ola={"Get the BestValue for your money our data and voice services"} /> <br /> <br /><br /><br /><br /><br />


      </div> <br /> <br />
      <div className="cover">
        <div className='forgreet'>
          <p className='p'>Hello: {test} </p>
          <input type="text" onChange={forola} />
        </div> <br /><br />
        <div className='change'>
          <h1>Counter App</h1>
          <center><p className='para'> {count} </p></center>
          <button onClick={forcount} className='butts'>Icrease</button>
          <button onClick={fordec} className='butts'>Decrease</button> 
          <button onClick={forreset} className='butts'>Reset</button> <br />
        </div>
      </div>
    </div>


  )
}

export default App
