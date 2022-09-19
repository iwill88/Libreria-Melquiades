import './ItemListContainer.css';
import {React, useState, useEffect} from 'react';
import {libros} from '../../data/libros';
import {ItemList} from '../ItemListContainer/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { Orbit } from '@uiball/loaders'
import {Header} from '../Header/Header';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';

export const ItemListContainer = () => {
  
  const {categorias} = useParams();
  
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(()=>{
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'libros');
    setTimeout(()=>{
      setIsLoading(false)},
    2000)
    
      
  
    if (categorias) {
      
      const queryFilter = query(queryCollection, where('categoria', "==", categorias))
      
      getDocs(queryFilter)
     
      .then(res=>setProductos(res.docs.map(product =>({ id: product.id, ...product.data()}))))
      .finally(() => setIsLoading(true))

    }else {
      
      getDocs(queryCollection)
      
      .then(res=>setProductos(res.docs.map(product =>({ id: product.id, ...product.data()}))))
      .finally(() => setIsLoading(true))
   
    }
    

    
  
  },[categorias])



/*
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
*/
   return (
    isLoading ? <div className="spinnerContainer"><Orbit size={35} color="#231F20" /></div>:<><Header/><div className="itemContainer"><ItemList list={productos} /></div></> 
   )
   
}


