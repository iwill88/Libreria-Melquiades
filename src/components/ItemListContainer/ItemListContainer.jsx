import './ItemListContainer.css';
import {React, useState, useEffect} from 'react';
import {libros} from '../../data/libros';
import {ItemList} from '../ItemListContainer/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { Orbit } from '@uiball/loaders'
export const ItemListContainer = () => {
  
  const {categorias} = useParams();
  
  const [productos, setProductos] = useState([]);
      const getData = new Promise((resolve, reject) => {
      if (categorias){
        setTimeout(() => {
          resolve(libros.filter(item => item.categoria ===categorias));
          reject('ERROR');
        }, 2000);
      } else {
        setTimeout(() => {
          resolve(libros);
          reject('ERROR');
        }, 2000);
      }
      
    });

    useEffect(() => {

    getData
      .then((response) => setProductos(response))
      .catch((err) => console.log(err)) 
     

      return () => {
        setProductos([])
      }
  }, [categorias]);

   return (
    productos.length ? <div className="itemContainer"><ItemList list={productos} /></div> : <div className="spinnerContainer"><Orbit size={35} color="#231F20" /></div>
   )
   
}


