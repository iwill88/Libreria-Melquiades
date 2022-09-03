import {ItemDetail} from './ItemDetail/ItemDetail';
import {libros} from '../../data/libros';
import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import '../ItemDetailContainer/ItemDetailContainer.css'
import { Orbit } from '@uiball/loaders'

export const ItemDetailContainer = () => {
    
  const {id} = useParams()

  const [producto, setProducto] = useState({});
  const [isLoading, setIsLoading] = useState(true);
    console.log(producto);
    useEffect(() => {
  
      const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(libros.find(libro => libro.id === Number(id)));
          reject('ERROR');
        }, 2000);
      });
  
      getItem
        .then((response) => setProducto(response))
        .catch((err) => console.log(err)) 
        .finally(() => setIsLoading(false));
    }, []);
  
    return isLoading ? <div className="spinnerContainer"><Orbit size={35} color="#231F20" /></div> : <div className="itemDetailContainer"><ItemDetail  seleccion={producto} /></div>;
  };
  
