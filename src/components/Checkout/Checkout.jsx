import './Checkout.css'
import { useContext,useState } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { addDoc,collection,/*updateDoc,doc*/ } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { Orbit } from '@uiball/loaders'

export const Checkout = () => {
    const {carrito, total, vaciarCarrito} = useContext(CarritoContext)
    const [orderId, setOrderId] = useState()
    const [isLoading, setIsLoading] = useState(true);


    /*const stockUpdate = (id, stock, cantidad) => {
            updateDoc(doc(db,"libros",id), 
            {"stock": stock - cantidad})
        }*/

    setTimeout(() => {
        setIsLoading(false)
    }, 2000)

    const [buyer, setBuyer] = useState({
        Nombre:"",
        Email:"",
        Telefono:""
    })

    const {Nombre, Email, Telefono} = buyer
    const navigate = useNavigate()
    const generateOrder = async(data) => {
        try {
            const col = collection(db,"Orders")
            const order = await addDoc(col, data)
            console.log(order)
            setOrderId(order.id)
            vaciarCarrito()
        } catch (error) {
            console.log(error)
        }
    }

    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const items = carrito.map(e=>{return {id:e.id, title:e.nombre,price:e.precio,cantidad:e.cantidad}})
        const dia = new Date()
        const precioTotal = total()
        const data = {buyer,items,dia,precioTotal}
        /*stockUpdate(e.id,e.stock, e.cantidad)*/
        generateOrder(data)
    }

    const handleCarrito = () => {
        navigate("/cart")
    }

    const handleHome = () => {
        vaciarCarrito()
        navigate("/")
    }



    return (
         isLoading ? <div className="spinnerContainer"><Orbit size={35} color="#231F20" /></div> :<div className='checkContainer'>

            <h2>Finalizar Compra</h2>
            <br />
            {!orderId?
            
            <div>
                <div className='tituloDatos'>
                <h4 >Completar Datos:</h4>
                </div>
                <form className='formContainer' onSubmit={handleSubmit} >
                     
                    <input type="text" 
                            name="Nombre"
                            placeholder="Nombre"
                            value={Nombre}
                            onChange={handleInputChange}
                    />
                    
                    <input type="text" 
                            name="Email"
                            placeholder="Email"
                            value={Email}
                            onChange={handleInputChange}
                    />
                    <input type="text" 
                            name="Telefono"
                            placeholder="Telefono"
                            value={Telefono}
                            onChange={handleInputChange}
                    />
                    
                    <input type="submit"
                            value="Finalizar compra"
                            className="btn btn-success botonesCheck"
                    />
                        

                        <button className="btn btn-danger botonesCheck" onClick={handleCarrito}>Volver al carrito</button>
                </form>
             
                   
        
            </div>
                
            :
            <div className='ordenCompra'>
                <h4 className='pb-5'> Su orden de compra es "{orderId}"</h4>
                <button className="btn btn-danger" onClick={handleHome}>Volver al inicio</button>
            </div> }
        </div>
    );
}

