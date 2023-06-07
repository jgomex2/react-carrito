import { useState } from "react";



function Producto (props : any) {

    props = {
        nombre: String,
        descripcion: String,
        precio: Number,
    }

    const[nombre, setNombre] = useState("");
    const[descripcion, setDescripcion] = useState("");
    const[precio, setPrecio] = useState();
    /*const[listaProductos, setListaProductos] = useState([]);*/
    const[cantidad, setCantidad]= useState(0);

    function sumarProducto() {
        
        setCantidad(cantidad + 1);
        
    }

    function restarProducto() {
        
       if (!(cantidad==0)) {
        setCantidad(cantidad - 1);
       }
        
    }



    return(
        <div >
            <label>Listado de Productos</label>
            <form>

                <div>
                <label>Nombre</label>
                <h1>{nombre}</h1>
                <label>Descripción</label>
                <h1>{descripcion}</h1>

                <label>Precio</label>
                <h1>{precio}</h1>
                </div>
                
                
                <button onClick={restarProducto} type="button">-</button>
                <label>{cantidad}</label>
                <button onClick={sumarProducto} type="button">+</button>

                <div>
                    <label htmlFor="nombre">{nombre}</label>
                    <label htmlFor="descripcion">{descripcion}</label>
                    <label htmlFor="precio">{nombre}</label>

                </div>


            </form>


        </div>
    );

       
}

export default Producto;