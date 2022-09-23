import './Footer.css'
import { Link } from 'react-router-dom';
export const Footer = () => {
    return (
        <div className="container-fluid pt-3">
        <div className="row bg-light ">
          <div className="col-md-12">
            <div className="row footerContainer">
              <div className="col-md-3 ">
                <Link to="/">
                <div className="navbar-brand logoNav"><img src="../assets/Logo_melquiades.png" alt="Logo Melquiades" /></div>
                </Link>
              </div>
              <div className="col-md-3  d-flex flex-column  certificados">
                Certificados
                <img src="../assets/Footer/visa-verified.png" alt="Certificado Visa" />
              </div>
              <div className="col-md-3  d-flex flex-column  pago">
                Formas de pago
                <img src="../assets/Footer/formas-pago.png" alt="Formas de pago" />
              </div>
              <div className="col-md-3  d-flex flex-column  libro">
                Libro de reclamaciones
                <img src="../assets/Footer/libro-de-reclamaciones.png" alt="Libro de reclamaciones" />
              </div>
            </div>
            <div className="row copyright">
              <div className="col-md-12">
                <span>Copyright 2022 Todos los derechos reservados para "Librería Melquíades"</span> 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}


