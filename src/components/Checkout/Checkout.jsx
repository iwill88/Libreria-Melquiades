import './Checkout.css'
import { useContext,useState } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { addDoc,collection,query, getDocs , where, documentId, writeBatch } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { Orbit } from '@uiball/loaders'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'

export const Checkout = () => {

    
    const {carrito, total, vaciarCarrito} = useContext(CarritoContext)
    const [orderId, setOrderId] = useState()
    const [isLoading, setIsLoading] = useState(true);

    //La funcion fRegreshStock permite actualizar el stock de la Base de Datos del Firestore
    const fRefreshStock = async () => {
        const collectionStock = collection(db,'libros')
        const queryStockRefresh = query(
             collectionStock, where(documentId(), 'in', carrito.map(item=> item.id))
             )
    
          const batch = writeBatch(db)
          
          await getDocs(queryStockRefresh)
          .then(resp => resp.docs.forEach(res => batch.update(res.ref,{
              stock: res.data().stock - carrito.find(item => item.id === res.id).cantidad
          })
          ))
          .catch(err => console.log(err))
          .finally(()=> batch.commit())
    }  

    setTimeout(() => {
        setIsLoading(false)
    }, 2000)

    //La variable buyer contiene los datos que se recibiran en el input del formulario


    const [buyer, setBuyer] = useState({
        Nombre:"",
        Email:"",
        Telefono:"",
        Direccion:""
    })

    const {Nombre, Email, Telefono, Direccion} = buyer
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
    //La funcion handleSubmit permite generar la orden una vez que se hace submit al formulario ademas de vaciar el carrito

    const handleSubmit = (e) => {
        e.preventDefault()
        if(Nombre.length===0||Email.length===0||Telefono.length===0||Direccion.length===0){
            toast.error("Complete todos los datos!")
        } else {
            const items = carrito.map(e=>{return {id:e.id, title:e.nombre,price:e.precio,cantidad:e.cantidad}})
            const dia = new Date()
            const precioTotal = total()
            const data = {buyer,items,dia,precioTotal}
            fRefreshStock ()
            generateOrder(data)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Su orden de compra se ha generado',
                showConfirmButton: false,
                timer: 1500
              })
        }
        
    }

    const handleCarrito = () => {
        navigate("/cart")
    }

    const handleHome = () => {
       
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
                     <input type="text" 
                            name="Direccion"
                            placeholder="Direccion"
                            value={Direccion}
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
            
                <h4 className='pb-5'> Su orden de compra es: "{orderId}"</h4>
                <button className="btn btn-danger" onClick={handleHome}>Volver al inicio</button>
            </div> }
        </div>
    );
}

