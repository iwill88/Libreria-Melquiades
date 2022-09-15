import { useContext } from 'react';
import { CarritoContext } from "../../context/CarritoContext";
export const ResumenCart = () => {

    const {total} = useContext(CarritoContext)

    return (
             <aside className="resumenCart col-5">
          <div className="py-3">
              Resumen del pedido
          </div>
          <div className="d-flex justify-content-between fs-6 border border-start-0 border-end-0 border-bottom-0 pt-2">
            <div>
              Subtotal
            </div>
            <div>
              S/.{total()}
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
            S/.{total()}
            </div> 
          </div>
          <button className="btn btn-warning">Finalizar compra</button>
        
        </aside>
    );
}


