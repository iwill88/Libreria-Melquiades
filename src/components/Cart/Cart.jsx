import {IoIosArrowRoundBack}  from "react-icons/io";
import './Cart.css'

export const Cart = () => {

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
              <div className="col-md-6">
                Producto
              </div>
              <div className="col-md-2">
                Precio
              </div>
              <div className="col-md-2">
                Cantidad
              </div>
              <div className="col-md-2">
                Subtotal
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
              </div>
              <div className="col-md-2">
              </div>
              <div className="col-md-2">
              </div>
              <div className="col-md-2">
              </div>
            </div>
            <div className="row bg-light">
              <div className="col-md-8">
              </div>
              <div className="col-md-4 d-flex align-items-center">
                <button className="btn btn-warning my-2">Actualizar carrito</button>
              </div>
            </div>
            
        </div>
        <aside className="resumenCart col-5">
          <div className="py-3">
              Resumen del pedido
          </div>
          <div className="d-flex justify-content-between fs-6 border border-start-0 border-end-0 border-bottom-0 pt-2">
            <div>
              Subtotal
            </div>
            <div>
              S/.188
            </div> 
          </div>
          <div className="d-flex justify-content-between fs-6 border border-start-0 border-end-0 border-top-0 pb-2">
            <div>
              IGV
            </div>
            <div>
              S/.0
            </div> 
          </div>
          <div className="d-flex justify-content-between fs-5 py-3">
            <div>
              Total
            </div>
            <div>
              S/.0
            </div> 
          </div>
          <button className="btn btn-danger">Finalizar compra</button>
        
        </aside>
        </div>
    );
}

