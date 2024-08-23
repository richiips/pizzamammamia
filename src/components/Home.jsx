import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import pizzas from '../assets/pizzas.js'

const Home = () => {
  return (
    <>
    <div className='containerBody'>
      <Header></Header>
      
      <div className='cardPizzaContainer'>
      {pizzas.map((pizza) => (<CardPizza key={pizza.id} nombre={pizza.name} ingredientes={pizza.ingredients} precio={pizza.price} imagen={pizza.img}></CardPizza>))}
      </div>
    </div>
    </>
  )
}

export default Home