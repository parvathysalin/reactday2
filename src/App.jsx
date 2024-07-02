import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Read from './components/Read'
import Madd from './components/Madd'
import Navbar from './components/Navbar'
import {Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/'element={<Read/>}></Route>
      <Route path='/add' element={<Madd/>}></Route>
    </Routes>


    </>
  )
}

export default App
