import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
export const App = () => {
    return (
        <>
          <Navbar/>
          <ItemListContainer saludo="Bievenido a la Librería Melquiades"/>
        </>
    );
}


