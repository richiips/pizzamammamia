import React from 'react'

const CardPizza = (detallePizza) => {
  return (
    <>
        <div className='cardPizza'>
            <img className='imagePizza' src={detallePizza.imagen} alt="" />
            <div className='detallePizzaContainer'>
            <div className='pizzaInformationContainer'>
                <h3>Pizza {detallePizza.nombre}</h3>
                <hr/>
                  <p>Ingredientes: 🍕 {detallePizza.ingredientes}</p>
                  <h3>Precio: ${detallePizza.precio}</h3>
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