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

export const Cart = () => {
  const {vaciarCarrito, carrito} = useContext(CarritoContext)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
  }, 3000)
  }, [])

    return (
        isLoading ? <div className="spinnerContainer"><Orbit size={35} color="#231F20" /></div> : carrito.length>0?

        <div className="d-flex justify-content-between">
        <div className="cartContainer d-grid col-7">
            <div className="row detalleCart">
                <h1 className="col-8">
                    Carrito de Compras
                </h1>
                <Link to="/">
                  <a   href=""><IoIosArrowRoundBack/>Comprar mas productos</a>
                </Link>
        
               
            </div>
            <div className="row bg-light py-3 titulosDetalle">
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
            <div className="row bg-light">
              <div className="col-md-8">
              </div>
              <div className="col-md-4 d-flex align-items-center justify-content-end">
                <button className="btn btn-danger my-2" onClick={()=>vaciarCarrito()}>Vaciar carrito</button>
              </div>
            </div>
            
        </div>
       <ResumenCart/>
        </div>:
        
        <CartEmpty/>
    );
}

