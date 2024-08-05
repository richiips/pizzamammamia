import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='mainContainer'>
        <Navbar></Navbar>
        <Home></Home>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
