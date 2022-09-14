import React, { createContext, useState} from 'react';

export const CarritoContext = createContext() 

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
        } else {
            auxCarrito.push(producto)
            setCarrito(auxCarrito)
        }
    }

    const quitarProductoCarrito = (producto) => {
        let indice = auxCarrito.findIndex(prod => prod.id === producto.id)
        auxCarrito.splice(indice, 1)
        setCarrito(auxCarrito)
        console.log(auxCarrito)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const totalProductos = () => {
        if(auxCarrito.length === 0 ){
            return 0
        }else {
            const resultado = auxCarrito.reduce((acc,curr) => acc + curr.cantidad, 0)
            return resultado
        }

    }

    const total=() => {
        const resultado = auxCarrito.map(valorTotal => valorTotal.cantidad * valorTotal.precio).reduce((acc,curr) => acc + curr, 0)
        return resultado
    }

    const mensaje = () => {
        return <div>Hola</div>
    }

    
    return (
       
            <>
            <CarritoContext.Provider value = {{mensaje, carrito, agregarProductoCarrito, quitarProductoCarrito, vaciarCarrito, totalProductos, total}}>
            {props.children}
            </CarritoContext.Provider>
            </>
    );
}

