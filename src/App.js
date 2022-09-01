
import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
export const App = () => {

    return (
        <>
          <Navbar/>
          <div className="saludo">
            <h1>Bievenido a la Librería Melquíades"</h1>
          </div>
            <div className="itemContainer">
            <ItemListContainer/>
          </div>
          
          <ItemDetailContainer/>
        </>
    );
}


