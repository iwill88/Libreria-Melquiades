import { useState } from 'react';
import {CounterCustomHook} from '../../Counter/CounterCustomHook';
import '../ItemDetail/ItemDetail.css';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../../context/CarritoContext';
import { toast } from 'react-toastify';

export const ItemDetail = ({seleccion,darkMode}) => {

    const {img, nombre, autor, precio, stock, id} =seleccion;

    const [goToCart,setGoToCart] = useState(false);
    
    const {carrito, agregarProductoCarrito} = useContext(CarritoContext)

    // Con la funcion onAdd  se agrega el producto al array carrito usando las funciones de CarritoContext

    function onAdd( count){
            const productoCarrito = {id: id, nombre: nombre, precio:precio, img: img, autor: autor, stock: stock, cantidad: count}
            agregarProductoCarrito(productoCarrito)
            console.log(carrito)
            setGoToCart(true);
            toast.success("Se ha agregado al carrito", {autoClose: 1500})
        }


    return (
    <div className="itemSeleccion">
        <div className="itemSeleccionImg">
            <img src={img} alt={nombre} />
            <p>{carrito.id}</p>
        </div>
        <div className={!darkMode ? "itemSeleccionInfo":"itemSeleccionDarkMode"}>
            <h4>{nombre}</h4>
            <h5>{autor}</h5>
            <div className="itemSeleccionCompra">
                <p>Precio: S/. {precio}</p>
                {goToCart ? 
                (<><div className="d-flex flex-column containerFinalizar"><Link to ="/">
                    <button className= "btn btn-dark mt-1 botonFinalizar">Seguir comprando</button>
                    
                </Link> 
                <Link to ="/cart">
                    <button className= "btn btn-danger mt-1 botonFinalizar">Finalizar compra</button>
                </Link>
                </div></>): 
                (<CounterCustomHook stock={stock} onAdd={onAdd}/>)}
            </div>
            
        </div>
            
            
    </div>
  
    );
}

