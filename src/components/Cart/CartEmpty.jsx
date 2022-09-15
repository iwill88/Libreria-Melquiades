import { Link } from "react-router-dom";
export const CartEmpty = () => {
    return (
      
        <div className="cartEmpty">
            

            <h2>Ops! Su carrito esta vacio. </h2>
            <img src="../assets/empty-cart-image.svg" alt="carrito vacio" />
            <h3>No ha agregado ningún producto a su carrito.</h3>
            
            <Link to="/">  <button className="btn btn-danger continuarBoton">Continuar comprando</button> </Link>

        </div>
    );
}

