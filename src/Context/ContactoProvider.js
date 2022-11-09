import React from "react";

const nombre ="Leo";
const ContactoContext=React.createContext();
function ContactoProvider(props){

    return(
        <ContactoContext.Provider value={
                nombre
            }>
            {nombre}
            {props.children}
        </ContactoContext.Provider>
    );

}

export {ContactoContext,ContactoProvider};