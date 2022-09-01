import {Item} from '../Item/Item';

export const ItemList = ({ list }) => {
  return (
    <>
      {list.map((libro) => (
        <Item libro={libro} key={libro.id} />
      ))}
    </>
  );
};

