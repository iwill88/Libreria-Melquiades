import './Navbar.css';
import {CartWidget} from '../CartWidget/CartWidget';
import { Search } from './Search/Search';
export const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid d-flex">
      <a className="navbar-brand logo_nav" href="index.html"><img src="assets/Logo_melquiades.png" alt="Logo Melquiades" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarColor02">
        <Search/>
        <CartWidget/>
      </div>
    </div>
  </nav>
  </>
  );
}


