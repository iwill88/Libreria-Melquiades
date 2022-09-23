import '../../ItemListContainer/Item/Item.css';
import { Link } from 'react-router-dom';
export const Item = ({libro}) => {
    const {img, nombre, autor, precio, id} =libro;
    return (

        <div className="item">
            <div className="itemBox">
                <img src={img} alt={nombre} />
                <h4>{nombre}</h4>
                <h5>{autor}</h5>
                <p>Precio: S/. {precio}</p>
                <Link to={`/detalles/${id}`}>
                    <button className="btn btn-danger">Ver más detalles</button>
                </Link>
                

                
            </div>
        </div>
    )
}
        

