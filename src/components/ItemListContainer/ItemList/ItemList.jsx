import {Item} from '../Item/Item';

//El componente ItemList recibe los productos cargados desde ItemListContainer 

export const ItemList = ({ list }) => {
  return (
    <>
      {list.map((libro) => (
        <Item libro={libro} key={libro.id} />
      ))}
    </>
  );
};

