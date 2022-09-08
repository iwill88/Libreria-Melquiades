/*import React, {createContext, useState} from 'react';

export const CarritoContext = createContext() 

export const CarritoProvider = (props) => {
    
    const [carrito, setCarrito] = useState([]);

    const agregarProductoCarrito = (producto) => {
        
        setCarrito(carrito.push(producto))
    }

    const quitarProductoCarrito = (indice) => {
        let indice = carrito.findIndex(producto => producto.id ===producto.id)
        setCarrito(carrito.splice(indice, 1))
    }

    
    return (
        <div>
            
            <CarritoProvider.Provider value = {{carrito, agregarProductoCarrito, quitarProductoCarrito}}>
            {props.children}
            </CarritoProvider.Provider>
        </div>
    );
}

*/