import { useState } from 'react';
import {CounterCustomHook} from '../../Counter/CounterCustomHook';
import '../ItemDetail/ItemDetail.css';
import {Link} from 'react-router-dom';
export const ItemDetail = ({seleccion,darkMode}) => {

    const {img, nombre, autor, precio, stock, id} =seleccion;

    const [goToCart,setGoToCart] = useState(false);
    
    function onAdd(count){
            const productoCarrito = {id: id, count: count}
            console.log(productoCarrito);
            setGoToCart(true);
            

        }
    return (
    <div className="item-seleccion">
        <div className="item-seleccion-img">
            <img src={img} alt={nombre} />
        </div>
        <div className={!darkMode ? "item-seleccion-info":"item-seleccion-darkMode"}>
            <h4>{nombre}</h4>
            <h5>{autor}</h5>
            <div className="item-seleccion-compra">
                <p>Precio: S/. {precio}</p>
                {goToCart ? 
                (<Link to ="/cart">
                    <button className= "btn btn-danger mt-1 botonFinalizar">Finalizar compra</button>
                </Link>) : 
                (<CounterCustomHook stock={stock} onAdd={onAdd}/>)}
                
            </div>
            
        </div>
            
            
    </div>
  
    );
}

