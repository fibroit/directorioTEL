
import './App.css';
import React from 'react';

import Busqueda from './Busqueda';
import ListaContactos from './ListaContactos';
import Contacto from './Contacto';
import AgregaContacto from './AgregaContacto';
import {ContactoContext,ContactoProvider} from './Context/ContactoProvider';

function App() {
  let contactos=[
    {
      nombre:"Guillermo",
      telefono:"123456789",
      correo:"guillermo@gmail.com"
    },
    {
      nombre:"Marcelo",
      telefono:"987654321",
      correo:"marcelo@gmail.com"
    },
    {
      nombre:"Fabian",
      telefono:"112233445",
      correo:"fabian@gamail.com",
    },
  ]
  let [textoBusqueda,setTextoBusqueda]=React.useState('');

if(textoBusqueda.length>0){
  let textoBusquedaLowerCase=textoBusqueda.toLowerCase();
  contactosFiltrados=contactos.filter((contacto)=>{
    return contacto.nombre.toLocaleLowerCase().includes(textoBusquedaLowerCase);
  })
}
else{
contactosFiltrados=contactos;
}

  return (
    <React.Fragment>
      <h1>Mis contactos</h1>
      <Busqueda textoBusqueda={textoBusqueda} setTextoBusqueda={setTextoBusqueda}/>
      <ListaContactos>
        {
          contactosFiltrados.map((contacto)=>{
            return(
              <Contacto
              nombre={contacto.nombre}
              correo={contacto.correo}
              telefono={contacto.telefono}
              />)
            
          })
        }
      </ListaContactos>
      <ContactoProvider></ContactoProvider>
    </React.Fragment>
  );
}

export default App;
