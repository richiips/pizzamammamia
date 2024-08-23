import React from 'react'

const CardPizza = ({imagen, nombre, ingredientes, precio}) => {
  return (
    <>
        <div className='cardPizza'>
            <img className='imagePizza' src={imagen} alt="" />
            <div className='detallePizzaContainer'>
            <div className='pizzaInformationContainer'>
                <h3>Pizza {nombre}</h3>
                <p>Ingredientes 🍕</p>
                <ul>
                  {ingredientes.map((ingrediente, index) => (
                    <li key={index}>{ingrediente}</li>
                  ))}
                </ul>
                  <h3>Precio: ${precio}</h3>
                  <div className='buttonsContainer'>
                      <button>Ver más</button>
                      <button>Añadir</button>
                  </div>
                  </div>
            </div>
        </div>
    </>
  )
}

export default CardPizza