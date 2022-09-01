import {ItemDetail} from './ItemDetail/ItemDetail';
import {libros} from '../../data/libros';
import {React, useState, useEffect} from 'react';
import '../ItemDetailContainer/ItemDetailContainer.css'
export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    console.log(producto);
    useEffect(() => {
  
      const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(libros);
          reject('ERROR');
        }, 2000);
      });
  
      getItem
        .then((response) => setProducto(response))
        .catch((err) => console.log(err)) 
        .finally(() => setIsLoading(false));
    }, []);
  
    return isLoading ? <h2>Cargando...</h2> : <div className="itemDetailContainer"><ItemDetail  seleccion={producto[0]} /></div>;
  };
  
