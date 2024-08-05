import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'

const Home = () => {
  return (
    <>
    <div>
      <Header></Header>
      
      <div className='cardPizzaContainer'>
        <CardPizza nombre="Napolitana" ingredientes="Mozarella, Tomate, Jamón, Orégano" precio="5950" imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9
080-784dcc87ec2c"></CardPizza>
        <CardPizza nombre="Española" ingredientes="Mozarella, gorgonzola, parmesano, provolone" precio="6950" imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-
a1c6-8c57bc388fab"></CardPizza>
        <CardPizza nombre="Pepperoni" ingredientes="Mozarella, Pepperoni, Orégano" precio="6950" imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-
ac54-90f6c31eb3e3"></CardPizza>
      </div>
    </div>
    </>
  )
}

export default Home