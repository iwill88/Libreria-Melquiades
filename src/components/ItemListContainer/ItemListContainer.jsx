import './ItemListContainer.css';

import { Products } from '../Products/Products';

export const ItemListContainer = ({saludo}) => {
    
    return (
        <>
        <div className="saludo">
          <h1>{saludo}</h1>
        </div>
        <div className="itemContainer">
        <Products/>
        </div>
        </>
    );
}

