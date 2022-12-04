import React from "react";
import { DirectorioContext } from "../Context/DirectorioProvider";
import './Busqueda.css';

 function Busqueda(props) 
 {
    const {TextoBusqueda,setTextoBusqueda}=React.useContext(DirectorioContext);

    function onBusquedaChange(event){
        setTextoBusqueda(event.target.value);
    }
    return(
        <React.Fragment>
            <div className="elreact">
            <input onChange={onBusquedaChange} value={TextoBusqueda} className="elinput"></input>
            </div>
        </React.Fragment>
    );
 }

export default Busqueda; 