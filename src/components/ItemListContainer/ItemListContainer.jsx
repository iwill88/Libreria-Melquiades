import './ItemListContainer.css';
import { CounterCustomHook } from '../Counter/CounterCustomHook';

export const ItemListContainer = ({saludo}) => {
    function onAdd(count){
      console.log(`Se han agregado ${count} productos`)
    }
    return (
        <>
        <div className="saludo">
          <h1>{saludo}</h1>
        </div>
          <CounterCustomHook stock={4} onAdd={onAdd}/>
        </>
    );
}

