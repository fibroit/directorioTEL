import React from "react";

const DirectorioContext=React.createContext();
function DirectorioProvider(props){
    let contactos, contadorContactos;
  if(!localStorage.contactos)
  {
    localStorage.setItem("contactos",JSON.stringify([]));
  }
  else
  {
    contactos=JSON.parse(localStorage.contactos);
  }
  let [textoBusqueda,setTextoBusqueda]=React.useState('');
  let [contactosState,setContaxtosState]=React.useState(contactos);
  let [modal, setModal] =React.useState(false);
  let contactosFiltrados=[];


function borrarContacto(name)
{
  let indice=contactosState.findIndex((contacto)=>{
    return contacto.nombre==name;
  });
  let contactosTemporal=[...contactosState];
  contactosTemporal.splice(indice,1);
  localStorage.setItem("contactos",JSON.stringify(contactosTemporal));
  setContaxtosState(contactosTemporal);
  console.log(indice);
}
function guardarContacto(contacto){
  let contactosTemporal=[...contactosState];
  contactosTemporal.push(contacto);
  localStorage.setItem("contactos",JSON.stringify(contactosTemporal));
  setContaxtosState(contactosTemporal);
}
if(textoBusqueda.length>0){
  let textoBusquedaLowerCase=textoBusqueda.toLowerCase();
  contactosFiltrados=contactosState.filter((contacto)=>{
    return contacto.nombre.toLocaleLowerCase().includes(textoBusquedaLowerCase);
  })
}
else{
contactosFiltrados=contactosState;
}
contadorContactos=contactosFiltrados.length;

    return(
        <DirectorioContext.Provider
        value={{
            textoBusqueda,
            setTextoBusqueda,
            contactosFiltrados,
            contactosState,
            setContaxtosState,
            borrarContacto,
            contadorContactos,
            modal,
            setModal,
            guardarContacto
        }}>
            {props.children}
        </DirectorioContext.Provider>
    );

}

export {DirectorioContext,DirectorioProvider};