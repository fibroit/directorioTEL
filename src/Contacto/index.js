import React from "react";
import './Contacto.css';





function Contacto(props){
    function borrar() {
        props.borrarContacto()
    }
    return(
        <div className="lasp">
            <p className="pe1">{props.nombre}</p>
            <p className="pe2">{props.correo}</p>
            <p className="pe3">{props.telefono}</p>
            <button onClick={borrar} className="borrar">Borrar</button>
        </div>
    )
}

export default Contacto;