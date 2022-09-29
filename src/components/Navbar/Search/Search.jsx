import './Search.css'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';
export const Search = () => {

    const [valorIngresado,setValorIngresado] = useState()

    //La funcion buscarProductos setea el nombre que se ingrese en input del buscador que se usara como parametro en la ruta 

    const buscarProductos = (e) => {
        setValorIngresado(e.target.value)
        console.log(valorIngresado);
      
    }

    const nombre = valorIngresado;

    return (
        <>
            <form className="d-flex form">
                <input className="form-control me-sm-0 formSearch" type="text" placeholder="Buscar en toda la tienda..." onChange={buscarProductos} />
                 <Link to={(nombre==="")?`/`:`/buscar/${nombre}`}>
                    <button className="btn btn-dark my-2 my-sm-0 buttonSearch" type="submit" ><FaSearch/></button>
                 </Link>
                 
            </form>
        </>
    );
}


