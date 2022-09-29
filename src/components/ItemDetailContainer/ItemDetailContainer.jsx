import {ItemDetail} from './ItemDetail/ItemDetail';
import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import '../ItemDetailContainer/ItemDetailContainer.css'
import { Orbit } from '@uiball/loaders'
import '../Header/Header.css'
import {doc, getDoc, getFirestore} from 'firebase/firestore';

export const ItemDetailContainer = ({darkMode}) => {
    
const {id} = useParams()

  const [producto, setProducto] = useState()
  const [isLoading, setIsLoading] = useState(true)
  
  //La funcion doc de firebase llama al item dependiendo del id que se pase por parametro
  useEffect(() => {

        const db = getFirestore();
        const queryProd = doc(db, 'libros', id);
        getDoc(queryProd)
        .then((resp)=>{setProducto({id: resp.id, ...resp.data()})})
        .catch(err => err)
        .finally(()=> setIsLoading(false))
  }, [id]);


    return isLoading ? <div className="spinnerContainer"><Orbit size={35} color="#231F20" /></div> : <div className="itemDetailContainer"><div className="saludo"><h1>Detalles del producto</h1></div><ItemDetail  seleccion={producto} darkMode={darkMode}/></div>;
  };
  
