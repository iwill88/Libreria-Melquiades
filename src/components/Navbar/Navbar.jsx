import './Navbar.css';
import {CartWidget} from '../CartWidget/CartWidget';
import { Search } from './Search/Search';
import { Link } from 'react-router-dom';

export const Navbar = () => {


  return (
   
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex flex-column">
    <div className="container-fluid d-flex">
      <Link to="/">
      <a className="navbar-brand logo_nav"><img src="../assets/Logo_melquiades.png" alt="Logo Melquiades" /></a>
      </Link>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarColor02">
        <Search/>
        <CartWidget/>
      </div>
    </div>
    <div className="btn btn-dark dropdown categoria">
        <a className="nav-link dropdown-toggle show" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">Categorías</a>
        <div className="dropdown-menu links" data-bs-popper="static">
          <Link to="/categorias/ciencia-ficcion">
            <a className="dropdown-item">Ciencia ficción</a>
          </Link>
          <Link to="/categorias/fantasia">
            <a className="dropdown-item">Fantasía</a>
          </Link>
          <Link to="/categorias/filosofia">
            <a className="dropdown-item">Filosofía</a>
          </Link>
          
        <div />
        </div>
      </div>
  </nav>

  );
}


