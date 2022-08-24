import { UseCounter } from '../../hooks/UseCounter';
import './Counter.css';

export const CounterCustomHook = ({stock, onAdd}) => {
   const {add, substract, reset, count} = UseCounter(stock, onAdd)
    return (
        <div className="card-new">
        <div className="counter-box">
            <img src="imagenes/cien-años-de-soledad.jpg" alt="Cien Años de soledad" />
            <h4>Cien años de soledad</h4>
            <h5>Garcia Marquez, Gabriel </h5>
            <p>Stock: {stock}</p>
            <p>Cantidad: {count} </p>
        </div>

        <div>
            <button className= "btn btn-dark" onClick={substract}>-</button>
            <button className= "btn btn-dark mx-1" onClick={reset}>Reset </button>
            <button className= "btn btn-dark" onClick={add}>+</button>
        </div>
        <div>
            <button className= "btn btn-danger mt-1" onClick={()=>onAdd(count)}>Confirmar</button>
        </div>
    </div>
    );
}

