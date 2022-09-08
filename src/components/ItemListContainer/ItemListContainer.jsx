import './ItemListContainer.css';
import {React, useState, useEffect} from 'react';
import {libros} from '../../data/libros';
import {ItemList} from '../ItemListContainer/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { Orbit } from '@uiball/loaders'
import {Header} from '../Header/Header';

export const ItemListContainer = () => {
  
  const {categorias} = useParams();
  
  const [productos, setProductos] = useState([]);
      const getData = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(libros);
          reject('ERROR');
        }, 2000);
    });

    useEffect(() => {

    getData
      .then((response) => categorias ? response.filter(item => item.categoria ===categorias):response)
      .then((response) => setProductos(response))
      .catch((err) => console.log(err)) 
     

      return () => {
        setProductos([])
      }
  }, [categorias]);

   return (
    productos.length ? <><Header/><div className="itemContainer"><ItemList list={productos} /></div></> : <div className="spinnerContainer"><Orbit size={35} color="#231F20" /></div>
   )
   
}


