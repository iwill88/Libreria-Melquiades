import { BsBasket } from "react-icons/bs";
import { useContext } from 'react';
import { CarritoContext } from "../../context/CarritoContext";

export const CartWidget = () => {
    const {cantidad,carrito} = useContext(CarritoContext)

    return (

        carrito.length? <div className="pe-3 cart">
            <button type="button" className="btn btn-danger position-relative">
                <BsBasket/> 
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cantidad}
                </span>
            </button>
        </div> : <button type="button" className="d-none"></button>
    );
}

