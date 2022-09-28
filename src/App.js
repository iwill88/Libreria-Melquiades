
import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import { DarkModeContext } from './context/DarkModeContext';
import { useContext } from 'react';
import { Cart } from './components/Cart/Cart';
import { CarritoContextProvider } from './context/CarritoContext';
import { Footer } from './components/Footer/Footer';
import { Checkout } from './components/Checkout/Checkout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext)
   
    return (
        <CarritoContextProvider>
        <div className={darkMode ? 'darkMode' : 'lightMode'}>
        <BrowserRouter>
        <Navbar/>
        <div className="botonMode">
        <button className={darkMode ? 'btn btn-light': 'btn btn-dark'} onClick={()=>toggleDarkMode()}>Mode</button>
        </div>
        <Routes>
            <Route path='/' element={<ItemListContainer/>}></Route>
            <Route path='/detalles/:id' element={<ItemDetailContainer darkMode={darkMode}/>}></Route>
            <Route path='/categorias/:categorias' element={<ItemListContainer/>}></Route>
            <Route path='/buscar/:nombre' element={<ItemListContainer/>}></Route>
            <Route path='/cart' element={<Cart darkMode={darkMode}/>}></Route>
            <Route path='/checkout' element={<Checkout darkMode={darkMode}/>}></Route>
        </Routes>
        <Footer/>
        </BrowserRouter>
        </div>
        <ToastContainer theme='colored'/>
        </CarritoContextProvider>
    );
}


