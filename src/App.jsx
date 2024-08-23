import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
//import Home from './components/Home'
import Footer from './components/Footer'
//import Registro from './components/Registro'
//import Login from './components/Login'
import Cart from './components/Cart'
import pizzas from './assets/pizzas'
import HeaderCart from './components/HeaderCart'

function App() {
  const [cartItems, setCartItems] = useState(pizzas.map(pizza => ({...pizza, cantidad: 1})));

  const eliminarPizza = (id) => {
    setCartItems(cartItems.filter(pizzas => pizzas.id !== id));
  }

  const actualizarCantidad = (id, nuevaCantidad) => {
    setCartItems(cartItems.map(pizza =>
      pizza.id === id ? { ...pizza, cantidad: nuevaCantidad } : pizza
    ));
  }

  const total = cartItems.reduce((totalPizzas, pizza) => {
    return totalPizzas + pizza.price * pizza.cantidad;
  }, 0);

  return (
    <>
    <div className='mainContainer'>
        <Navbar total={total}></Navbar>
       {/*<Home></Home>*/}
       {/*<Registro></Registro>*/}
       {/*<Login></Login>*/}
       <HeaderCart></HeaderCart>
       {cartItems.map((pizza) => (<Cart key={pizza.id} nombre={pizza.name} precio={pizza.price} imagen={pizza.img} cantidad={pizza.cantidad} onRemove={() => eliminarPizza(pizza.id)} onUpdateQuantity={(nuevaCantidad) => actualizarCantidad(pizza.id, nuevaCantidad)}></Cart>))}
      <Footer></Footer>
      </div>
    </>
  )
}

export default App
