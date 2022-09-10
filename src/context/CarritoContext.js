import React, { createContext, useState} from 'react';

export const CarritoContext = createContext([]) 

export const CarritoContextProvider = (props) => {
    
    const [carrito, setCarrito] = useState([]);
    const auxCarrito = carrito
    const agregarProductoCarrito = (producto) => {
    
        const indice=auxCarrito.findIndex(i => i.id === producto.id)
        
        if (indice >-1 ) {
            const cantidadActual= carrito[indice].cantidad
            let cantidadNueva= cantidadActual + producto.cantidad
            carrito[indice].cantidad =cantidadNueva
            setCarrito(auxCarrito)
            console.log(auxCarrito)
        } else {
            auxCarrito.push(producto)
            setCarrito(auxCarrito)
            console.log(auxCarrito)
        }
    }

    const quitarProductoCarrito = (producto) => {
        setCarrito(auxCarrito.filter(i => i.id !== producto.id));
        console.log(auxCarrito)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const totalProductos = () => {
        return auxCarrito.reduce((acc,curr) => acc + curr.cantidad, 0)
    }

    
    return (
       
            <>
            <CarritoContext.Provider value = {{carrito, agregarProductoCarrito, quitarProductoCarrito, vaciarCarrito, totalProductos}}>
            {props.children}
            </CarritoContext.Provider>
            </>
    );
}

