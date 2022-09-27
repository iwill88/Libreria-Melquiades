import './Search.css'
import { FaSearch } from "react-icons/fa";
export const Search = () => {


    return (
        <>
            <form className="d-flex form">
                <input className="form-control me-sm-0 formSearch" type="text" placeholder="Buscar en toda la tienda..." />
                 <button className="btn btn-dark my-2 my-sm-0 buttonSearch" type="submit"><FaSearch/></button>
            </form>
        </>
    );
}


