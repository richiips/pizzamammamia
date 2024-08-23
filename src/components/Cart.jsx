import React, { useState } from 'react'

const Cart = ({nombre, precio, imagen, cantidad, onRemove, onUpdateQuantity}) => {

    const sumarCantidad = () => {
        onUpdateQuantity(cantidad + 1);
    }

    const restarCantidad = () => {
        if (cantidad > 1){
            onUpdateQuantity(cantidad - 1);
        } else {
            onRemove();
        }
    }

  return (
    <>
    <div className='cartPizzaContainer'>
        <div className='pizzaListCart'>
            <div className='infoPizzaContainer'>
                <img className='pizzaimg' src={imagen} alt=""/>

                <div className='infoPizzaCart'>
                    <h3>Pizza {nombre}</h3>
                    <h3>Precio: ${precio}</h3>
                </div>
            </div>

            <div className='buttonsContainer'>
                <button onClick={restarCantidad}> - </button>
                <h3> {cantidad} </h3>
                <button onClick={sumarCantidad}> + </button>
            </div>
                
            </div>
    </div>
    </>
  )
}

export default Cart