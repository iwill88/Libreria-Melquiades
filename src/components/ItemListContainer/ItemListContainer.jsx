import './ItemListContainer.css';
import {React, useState, useEffect} from 'react';
import {libros} from '../../data/libros';
import {ItemList} from '../ItemListContainer/ItemList/ItemList';


export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  
    const getData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(libros);
        reject('ERROR');
      }, 2000);
    });

    getData
      .then((response) => setProductos(response))
      .catch((err) => console.log(err)) 
      .finally(() => setIsLoading(false));
  }, []);

   return isLoading ? <h2>Cargando...</h2> : <ItemList list={productos} />;
}

