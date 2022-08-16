import './App.css';

function App() {
  return (
    <div id="" className="">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid d-flex">
      
      <a className="navbar-brand logo_nav" href="index.html"><img src="../imagenes/Logo_melquiades.png" alt="" /></a>
      
     
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse " id="navbarColor02">
        <ul className="navbar-nav me-auto nav-list">
          <li className="nav-item">
            <a className="nav-link active" href="#">Home
              <span className="visually-hidden">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Nosotros</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Tienda</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>
          
        </ul>
      </div>
      
      
    </div>
  </nav>
  </div>
  );
}

export default App;
