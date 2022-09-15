import { useContext } from 'react';
import { CarritoContext } from "../../context/CarritoContext";
import { BsTrash } from "react-icons/bs";
export const DetailCart = () => {
    const {carrito, quitarProductoCarrito} = useContext(CarritoContext)
    return (
        <div>
        {carrito.map(prod => (
          <div className="row cartProductos pb-2">
          <div className="col-md-6  d-flex align-items-center pt-2" key={prod.id}>
          <img src={prod.img} className="me-2"alt={prod.nombre} />
            {prod.nombre} 
            <br/>
            <br/>
            {prod.autor}
         
           
          </div>
          <div className="col-md-2 align-self-center text-center">
            S/.{prod.precio}
          </div>
          <div className="col-md-2 align-self-center text-center">
            {prod.cantidad}
          </div>
          <div className="col-md-2 d-flex align-self-center text-center justify-content-end">
            S/.{(prod.precio) * prod.cantidad}
            <button className="ps-2 text-danger fs-5 trash" onClick={()=>quitarProductoCarrito(prod.id)}><BsTrash/></button>
          </div>
        </div>
        ))}
        
      </div>
    );
}


