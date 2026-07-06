import React, { useEffect } from 'react'
import ContactCard from './ContactCard'
import useGlobalReducer from '../hooks/useGlobalReducer'
import { Link } from 'react-router-dom';

import { URL_BASE } from '../api/api';
import Button from './Button';

const Contact = () => {

    const { store, dispatch } = useGlobalReducer();

    const obtenerContactos = async () => {



        try {

            const response = await fetch(`${URL_BASE}/agendas/pruebaMig/`);
            if (response.status === 404) {


                console.log("La agenda no existe o esta vacia")

                dispatch({
                    type: "add_contacts",
                    payload: []
                });


            }
            const data = await response.json();

            console.log(data);

            dispatch({
                type: "add_contacts",
                payload: data.contacts || []
            });






        } catch (error) {

            console.log(error);

        }




    }


     const eliminarContactoAPI = async (id) => {
        try {
            const response = await fetch(`${URL_BASE}/agendas/pruebaMig/contacts/${id}`, {
                method: "DELETE" // Método para borrar en la API
            });

            if (response.ok) {
                console.log(`Contacto ${id} eliminado con éxito`);
                obtenerContactos(); // Refrescamos la lista llamando al GET automáticamente
            } else {
                console.log("No se pudo eliminar el contacto");
            }
        } catch (error) {
            console.log("Error al eliminar:", error);
        }
    };

    useEffect(() => {

        obtenerContactos();

    }, [])
    return (
        <div >
            
            
            {store?.contacts?.map((contact, index) => {

                return <ContactCard key={contact.id} contact={contact} 
                onDeleteContact ={eliminarContactoAPI}
                
                />

            })}

        </div>
    )
}

export default Contact
