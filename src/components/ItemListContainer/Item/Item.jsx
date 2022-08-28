import React from 'react';
import '../../ItemListContainer/Item/Item.css';
import { CounterCustomHook } from '../../Counter/CounterCustomHook';
export const Item = ({libro}) => {
    function onAdd(count){
        console.log(`Se han agregado ${count} productos`)
      }
    return (

        <div className="item">
            <div className="item-box">
                <img src={libro.img} alt={libro.nombre} />
                <h4>{libro.nombre}</h4>
                <h5>{libro.autor}</h5>
                <p className="item-text">Precio: S/. {libro.precio}</p>
                

                <CounterCustomHook stock={libro.stock} onAdd={onAdd}/>
            </div>
        </div>
    )
}
        

