import React from "react";





function ListaContactos(props) {
    return(
        <div>
            <h2>Mis Contactos</h2>
            {props.children}
        </div>
    )
}

export default ListaContactos;