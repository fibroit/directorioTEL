import React from "react";
import './AgregarContacto.css';
import {DirectorioContext} from '../Context/DirectorioProvider';




function AgregarContacto() {
    const {setModal,guardarContacto} =React.useContext(DirectorioContext);
    const [contact,setContactos]=React.useState({
        nombre:'',
        correo:'',
        telefono:'',
    })
    function onChangeNombre(event){
        let contactoTemporal=contact;
        contactoTemporal.nombre=event.target.value;
        setContactos(contactoTemporal);
    }
    function onChangeCorreo(event){
        let contactoTemporal=contact;
        contactoTemporal.correo=event.target.value;
        setContactos(contactoTemporal);
    }
    function onChangeTelefono(event){
        let contactoTemporal=contact;
        contactoTemporal.telefono=event.target.value;
        setContactos(contactoTemporal);
    }
    function modalCancelar(){
        setModal(false);
    }
    function modalGuardar(event){
        event.preventDefault();
        guardarContacto(contact);
        setModal(false);
    }
    return(
        <div className="contenedor">
            <h1 className="palh1">Nuevo Amigo+</h1>
            <form className="elform">
                <input className="input1" typeof="text" placeholder="Nombre" onChange={onChangeNombre}></input>
                <input className="input2" typeof="text" placeholder="Correo" onChange={onChangeCorreo}></input>
                <input className="input3" typeof="text" placeholder="Telefono" onChange={onChangeTelefono}></input>
                <div>
                    <button className="guardar" typeof="submit" onClick={modalGuardar}>Guardar</button>
                    <button className="cancelar" onClick={modalCancelar}>Cancelar</button>
                </div>
            </form>

        </div>
       /*  <div>
            <form>
                
                <div className="contenedor" id="cont">
                    <div className="back">NUEVO AMIGO<br/>
                        <input typeof="text" placeholder="Nombre" className="boton2" onChange={onChangeNombre}></input>
                        <input typeof="text" placeholder="Email" className="boton2" onChange={onChangeCorreo}></input><br/>
                        <input typeof="text" placeholder="Telefono" className="boton2" onChange={onChangeTelefono}></input><br/>
                        <input typeof="button" value="Guardar" className="boton3" onClick={modalGuardar}>Guardar</input>
                        <input type="button" value="Cancelar" className="boton3" onClick={modalCancelar}>Cancelar</input>
                    </div>
                </div>
            </form>
        </div> */
    )
}

export default AgregarContacto;