import { UseCounter } from '../../hooks/UseCounter';
import './CounterCustomHook.css'

export const CounterCustomHook = ({stock, onAdd}) => {
   const {add, substract, reset, count} = UseCounter(stock, onAdd)
    return (
       <>
       <div className='counterContainer'>
        <p>Stock: {stock}</p>
        <p>Cantidad: {count} </p>
        <div>
            <button className= "btn btn-dark" onClick={substract}>-</button>
            <button className= "btn btn-dark mx-1" onClick={reset}>Reset </button>
            <button className= "btn btn-dark" onClick={add}>+</button>
        </div>
        <div>
            <button className= "btn btn-danger mt-1 counter-confirmar" onClick={()=>onAdd(count)}>Comprar</button>

        </div>
        </div>
        
    </>
    );
}

