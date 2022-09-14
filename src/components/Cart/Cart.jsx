import {IoIosArrowRoundBack}  from "react-icons/io";
import './Cart.css'
import { BsTrash } from "react-icons/bs";
import { ResumenCart } from "./ResumenCart";
import { useContext } from 'react';
import { CarritoContext } from "../../context/CarritoContext";
export const Cart = () => {
  const {carrito, quitarProductoCarrito} = useContext(CarritoContext)
  
    return (
      
        <div className="d-flex justify-content-between">
        <div className="cartContainer d-grid col-7">
            <div className="row detalleCart">
                <h1 className="col-8">
                    Carrito de Compras
                </h1>
                <a className="col-4" href="">
                    <IoIosArrowRoundBack/>Comprar mas productos
                </a>
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
            <div>
              {carrito.map(prod => (
                <div className="row cartProductos pb-2">
                <div className="col-md-6  d-flex align-items-center pt-2" key={prod.id}>
                <img src={prod.img} className="me-2"alt={prod.nombre} />
                  {prod.nombre}
                </div>
                <div className="col-md-2 align-self-center text-center">
                  S/.{prod.precio}
                </div>
                <div className="col-md-2 align-self-center text-center">
                  {prod.cantidad}
                </div>
                <div className="col-md-2 d-flex align-self-center text-center justify-content-end">
                  S/.{(prod.precio) * prod.cantidad}
                  <a className="ps-2" onClick={()=>quitarProductoCarrito(prod.id)}><BsTrash/></a>
                </div>
              </div>
              ))}
              
            </div>
            <div className="row bg-light">
              <div className="col-md-8">
              </div>
              <div className="col-md-4 d-flex align-items-center">
                <button className="btn btn-warning my-2">Actualizar carrito</button>
              </div>
            </div>
            
        </div>
       <ResumenCart/>
        </div>
    );
}

