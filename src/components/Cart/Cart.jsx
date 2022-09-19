import {IoIosArrowRoundBack}  from "react-icons/io";
import './Cart.css'
import { useContext } from 'react';
import { CarritoContext } from "../../context/CarritoContext";
import { ResumenCart } from "./ResumenCart";
import { DetailCart } from "./DetailCart";
import { Link } from 'react-router-dom';
import { CartEmpty } from "./CartEmpty";
import React, {useEffect, useState} from 'react';
import { Orbit } from '@uiball/loaders'

export const Cart = ({darkMode}) => {
  const {vaciarCarrito, carrito} = useContext(CarritoContext)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
  }, 2000)
  }, [])

    return (
        isLoading ? <div className="spinnerContainer"><Orbit size={35} color="#231F20" /></div> : carrito.length>0?

        <div className="d-flex justify-content-between cartContainerFull ">
        <div className="cartContainer d-grid col-md-7">
            <div className="row detalleCart">
                <h1 >
                    Carrito de Compras
                </h1>
                <Link to="/">
                  <IoIosArrowRoundBack/>Comprar mas productos
                </Link>
        
               
            </div>
            <div className={!darkMode ?"row bg-dark py-3 titulosDetalle":"row bg-dark py-3 titulosDetalleDark"} >
              <div className="col-md-6 text-start">
                Producto
              </div>
              <div className="col-md-2 ">
                Precio
              </div>
              <div className="col-md-2">
                Cantidad
              </div>
              <div className="col-md-2">
                Subtotal
              </div>
            </div>
            <DetailCart/>
            <div className="row bg-dark ">
              <div className="col-md-12 botonVaciar">
                <button className="btn btn-danger my-2 " onClick={()=>vaciarCarrito()}>Vaciar carrito</button>
              </div>
            </div>
            
        </div>
       <ResumenCart/>
        </div>:
        
        <CartEmpty/>
    );
}

