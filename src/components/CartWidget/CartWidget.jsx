import { BsBasket } from "react-icons/bs";
import { useContext } from 'react';
import { CarritoContext } from "../../context/CarritoContext";

export const CartWidget = () => {
    const {totalProductos} = useContext(CarritoContext)

    return (
        <div className="pe-3 cart">
            <button type="button" className="btn btn-danger position-relative">
                <BsBasket/> 
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{totalProductos()}
                </span>
            </button>
        </div>
    );
}

