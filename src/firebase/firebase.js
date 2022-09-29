import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "libreria-melquiades-6e32c.firebaseapp.com",
  projectId: "libreria-melquiades-6e32c",
  storageBucket: "libreria-melquiades-6e32c.appspot.com",
  messagingSenderId: "194237384066",
  appId: "1:194237384066:web:50526c0d9e01801bdb7b9b",
  measurementId: "G-M8MXDZV2HC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

//Con esta funcion se carga la Base de Datos de firestore con los productos de un archivo .json que se tuviera

async function cargarBaseDeDatos  () {
    const promise = await fetch('./json/libros.json')
    const productos = await promise.json()
    productos.forEach(async (producto) => {
        await addDoc(collection(db, "libros"), {
            id: producto.id,
            categoria: producto.categoria,
            stock: producto.stock,
            nombre: producto.nombre,
            img: "",
            autor: producto.autor,
            precio: producto.precio,
            
          });
    })
    
}

export {db,app, cargarBaseDeDatos}