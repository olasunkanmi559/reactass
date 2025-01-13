import { useState } from 'react'
import './App.css'
import Input from './Input'
import List from './List'
import Ola from './Ola'
import Crud from './Crud'
import Shops from './Shops'
import  image from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from './About'


function App() {
  return (
    <Router>
      <div className='every'>
        <ul className='ull'>
          <ul><img src={image} alt="" /></ul>
          <li> <Link className='koko' to='/'> HOME</Link> <br /> <br /></li>
          <li> <Link className='koko' to='/list'>LIST</Link><br /> <br /></li>
          <li> <Link className='koko' to='/Shops'>SHOPCART</Link> <br /> <br /></li>
          <li> <Link className='koko' to='/crud'>JOBS</Link></li>
          <li> <Link className='koko' to='/About'>ABOUT ME</Link> </li>
        </ul>
      </div>
      <Routes>
        <Route path='/' element={<Ola />} />
        <Route path='/crud' element={<Crud />} />
        <Route path='/list' element={<List />} />
        <Route path='/Shops' element={<Shops />} />
        <Route path='/About' element={<About/>} />
      </Routes>
    </Router>
  )
}

export default App
