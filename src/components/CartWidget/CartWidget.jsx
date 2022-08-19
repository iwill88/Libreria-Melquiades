import { BsBasket } from "react-icons/bs";

export const CartWidget = () => {
    return (
        <div className="pe-3">
            <button type="button" className="btn btn-danger position-relative">
                <BsBasket/> 
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0
                </span>
            </button>
        </div>
    );
}

