import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Registro from './components/Registro'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='mainContainer'>
        <Navbar></Navbar>
       {/*<Home></Home>*/}
       {/*<Registro></Registro>*/}
       <Login></Login>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
