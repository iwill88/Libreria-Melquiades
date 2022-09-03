
import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'

export const App = () => {

    return (
        <BrowserRouter>
        <Navbar/>
        <div className="saludo">
              <h1>"Librería Melquíades"</h1>
          </div>
        <Routes>
            <Route path='/' element={<ItemListContainer/>}></Route>
            <Route path='/detalles/:id' element={<ItemDetailContainer/>}></Route>
            <Route path='/categorias/:categorias' element={<ItemListContainer/>}></Route>
        </Routes>
        </BrowserRouter>
    );
}


