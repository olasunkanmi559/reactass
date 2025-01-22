import { useState } from 'react'
import './App.css'
import Input from './Input'
import List from './List'
import Crud from './Crud'
import { BrowserRouter  } from "react-router-dom";
import Shops from './Shops'
import About from './About'


function Ola() {
  const [test, setTest] = useState("")
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  const [stock, setstoct] = useState(0)
  const [tete, settete] = useState("")

  let forola = (event) => {
    setTest(event.target.value)
  }
  let change = () => {
    setName(test)
    setTest("")
    document.getElementById('p').innerText = `Hello: ${test}`
  }
  let forco = () => {
    setstoct(stock + 1)
  }
  let forrest = () => {
    setstoct(stock - 1)
  }
  let forcount = () => {
    setCount(count + 1)
  }
  let fordec = () => {
    setCount(count - 1)
  }
  let forreset = () => {
    setCount(0)
  }


  return (
    <div className='container'>
      <div className='ola row'>
        <Input para={"Best 4G Network"} ola={"Enjoy SuperFast internet across Nigeria with 4G LTE data and SuperClear voice services"} />
        <Input para={"24x7 Help & support"} ola={"Our virtual chat assistant & Customer care services available to help you 24x7"} />
        <Input para={"Bestvalue"} ola={"Get the BestValue for your money our data and voice services"} /> <br /> <br /><br /><br /><br /><br />
      </div> <br /> <br />
      <div className="cover container row">
        <div className='forgreet col-sm'>
          <input type="text" value={test} onChange={forola} className='inp' /><br />  <br />
          <center>
            <button className='didi' onClick={change}>
              Greet me
            </button>
          </center>
          <p id='p'>

          </p>
        </div> <br /><br />

        <div className='change col-sm'>
          <h1 className='h11'>Counter App</h1>
          <center><p className='para'> {count} </p></center>
          <button onClick={forcount} className='butts'>Icrease</button>
          <button onClick={fordec} className='butts'>Decrease</button>
          <button onClick={forreset} className='butts'>Reset</button> <br />
        </div>
      </div> <br />  <br /> <br /><br />
      <div className="olas container">
        <h1 className='h1'>Stock</h1>
        <div>
          <div className='coco'>
            <button onClick={forco} className='buts'>+</button>
            <p> {stock} {stock > 20 ? "out of stock" : "in stock"}</p>
            <button onClick={forrest} className='buts'>-</button> <br />
          </div>
        </div>
      </div> <br /> <br />
      {/* <Shops/> */}
    </div>


  )
}

export default Ola
