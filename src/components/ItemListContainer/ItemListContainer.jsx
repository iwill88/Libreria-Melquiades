import './ItemListContainer.css';
import {React, useState, useEffect} from 'react';
import {ItemList} from '../ItemListContainer/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { Orbit } from '@uiball/loaders'
import {Header} from '../Header/Header';
import {collection, getDocs, query, where} from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { EmptySearch } from './EmptySearch/EmptySearch';
export const ItemListContainer = () => {
  
  const {categorias} = useParams();
  const {nombre} = useParams();
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(()=>{
    
    const queryCollection = collection(db, 'libros');
    
    
      
  
      if (categorias) {
      
      const queryFilter = query(queryCollection, where('categoria', "==", categorias))
      
      getDocs(queryFilter)
     
      .then(res=>setProductos(res.docs.map(product =>({ id: product.id, ...product.data()}))))
      .catch(err => err)
      .finally(()=> setIsLoading(false))




      }
      
      else if (nombre) {
        getDocs(queryCollection)
      
        .then(res=>res.docs.map(product =>({ id: product.id, ...product.data()})))
        .then(res=>res.filter((el)=>el.nombre.includes(nombre)))
        .then(res=>setProductos(res))
        .catch(err => err)
        .finally(()=> setIsLoading(false))
      }
      
      else {
      
      getDocs(queryCollection)
      
      .then(res=>setProductos(res.docs.map(product =>({ id: product.id, ...product.data()}))))
      .catch(err => err)
        .finally(()=> setIsLoading(false))
   
    }
    

    
  
  },[nombre,categorias])




   return isLoading ? <div className="spinnerContainer"><Orbit size={35} color="#231F20" /></div>: productos.length?<><Header/><div className="itemContainer"><ItemList list={productos} /></div></>:<><Header/><EmptySearch/></> 
   
   
}


