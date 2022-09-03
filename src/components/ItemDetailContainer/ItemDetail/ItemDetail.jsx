import {CounterCustomHook} from '../../Counter/CounterCustomHook';
import '../ItemDetail/ItemDetail.css';
export const ItemDetail = ({seleccion}) => {

    const {img, nombre, autor, precio, stock} =seleccion;
    function onAdd(){
        console.log("Se agrego al carrito")
      }
    return (
    <div className="item-seleccion">
        <div className="item-seleccion-img">
            <img src={img} alt={nombre} />
        </div>
        <div className="item-seleccion-info">
            <h4>{nombre}</h4>
            <h5>{autor}</h5>
            <div className="item-seleccion-compra">
                <p>Precio: S/. {precio}</p>
                <CounterCustomHook stock={stock} onAdd={onAdd}/>
            </div>
            
        </div>
            
            
    </div>
  
    );
}

