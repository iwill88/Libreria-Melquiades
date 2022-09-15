import React, { createContext, useState} from 'react';

export const CarritoContext = createContext() 

export const CarritoContextProvider = (props) => {
    
    const [carrito, setCarrito] = useState([]);
    const [cantidad, setCantidad] = useState(0);
    const auxCarrito = carrito
    const agregarProductoCarrito = (producto) => {
    
        const indice=auxCarrito.findIndex(i => i.id === producto.id)
        
        if (indice >-1 ) {
            const cantidadActual= auxCarrito[indice].cantidad
            let cantidadNueva= cantidadActual + producto.cantidad
            auxCarrito[indice].cantidad =cantidadNueva
            setCarrito(auxCarrito)
            totalProductos(auxCarrito)
        } else {
            auxCarrito.push(producto)
            setCarrito(auxCarrito)
            totalProductos(auxCarrito)
        }
    }

    const quitarProductoCarrito = (producto) => {
        let indice = auxCarrito.findIndex(prod => prod.id === producto.id)
        auxCarrito.splice(indice, 1)
        setCarrito(auxCarrito)
        totalProductos(auxCarrito)
        console.log(auxCarrito)
    }

    const vaciarCarrito = () => {
        setCarrito([])
        
    }

    const totalProductos = (auxCarrito) => {
            const resultado = auxCarrito.reduce((acc,curr) => acc + curr.cantidad, 0)
            setCantidad(resultado)
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
            <CarritoContext.Provider value = {{mensaje, cantidad, carrito, agregarProductoCarrito, quitarProductoCarrito, vaciarCarrito, total}}>
            {props.children}
            </CarritoContext.Provider>
            </>
    );
}

