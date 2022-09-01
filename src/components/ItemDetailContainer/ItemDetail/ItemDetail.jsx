import {CounterCustomHook} from '../../Counter/CounterCustomHook';
import '../ItemDetail/ItemDetail.css';

export const ItemDetail = ({seleccion}) => {
    function onAdd(count){
        console.log(`Se han agregado ${count} productos`)
      }
    return (
    <div className="item-seleccion">
        <div className="item-seleccion-img">
            <img src={seleccion.img} alt={seleccion.nombre} />
        </div>
        <div className="item-seleccion-info">
            <h4>{seleccion.nombre}</h4>
            <h5>{seleccion.autor}</h5>
            <div className="item-seleccion-compra">
                <p>Precio: S/. {seleccion.precio}</p>
                <CounterCustomHook stock={seleccion.stock} onAdd={onAdd}/>
            </div>
            
        </div>
            
    </div>
  
    );
}

