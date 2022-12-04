
import './App.css';
import React from 'react';

import Busqueda from './Busqueda';
import ListaContactos from './ListaContactos';
import Contacto from './Contacto';
import AgregaContacto from './AgregaContacto';
import {DirectorioContext,DirectorioProvider} from './Context/DirectorioProvider';
import AgregarContacto from './AgregaContacto';

function App() {
  /* let contactos=[
    {
      nombre:"Guillermo",
      telefono:"123456789",
      correo:"guillermo@gmail.com",
    },
    {
      nombre:"Marcelo",
      telefono:"987654321",
      correo:"marcelo@gmail.com",
    },
    {
      nombre:"Fabian",
      telefono:"112233445",
      correo:"fabian@gamail.com",
    },
    {
      nombre:'Ivan',
      telefono:"222233445",
      correo:"ivan@gamail.com",
    },
  ]
 */
return (
  <DirectorioProvider>
  <DirectorioContext.Consumer>
{
  ({
    contactosFiltrados,
    borrarContacto,
    contadorContactos,
    modal,
    setModal
  })=>(

    <React.Fragment>
      <center>
        <h1 className="directory">DIRECTORIO ({contadorContactos})</h1>
        <Busqueda/>
        <button onClick={()=>{setModal(true)}}>Agrega Contacto</button>
        <ListaContactos>
          {
            contactosFiltrados.map((contacto)=>{
              return(
                <Contacto
                nombre={contacto.nombre}
                correo={contacto.correo}
                telefono={contacto.telefono}
                borrarContacto={()=>{borrarContacto(contacto.nombre)}}
            
              />  
              )
            })
          }

        </ListaContactos>       
        {modal &&<AgregaContacto/>} 
        </center>     
        </React.Fragment>
        
        )
}
  </DirectorioContext.Consumer>
  </DirectorioProvider>

  );
}

export default App;
