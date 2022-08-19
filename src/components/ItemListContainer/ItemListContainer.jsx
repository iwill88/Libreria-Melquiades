import './ItemListContainer.css';

export const ItemListContainer = ({saludo}) => {
    console.log({saludo})
    return (
        <div className="saludo">
          <h1>{saludo}</h1>
        </div>
    );
}

export default ItemListContainer;
