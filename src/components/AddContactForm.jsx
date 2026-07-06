import React, { useEffect, useState } from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer'
import { useNavigate, useParams, Link } from 'react-router-dom'

import { URL_BASE } from '../api/api';


const AddContactForm = () => {

 
  

  const navigate = useNavigate();
  const { id } = useParams()//detecta si es edicion
  
  
  const { store } = useGlobalReducer();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {

    if (id && store?.contacts) {

      const contactoEditar = store.contacts.find(contacto => contacto.id === parseInt(id));
      if (contactoEditar) {

        setName(contactoEditar.name);
        setEmail(contactoEditar.email);
        setPhone(contactoEditar.phone);
        setAddress(contactoEditar.address);

      }
    }


  }, [id, store?.contacts]);


  const guardarContacto = async (evento) => {

    evento.preventDefault();

    const objetoContacto = {
       name:name,
       email: email,
       phone: phone,
       address: address
       };

    const URL = id 
    ? `${URL_BASE}/agendas/pruebaMig/contacts/${id}` // Modo Edición (agrega / al inicio y el ${id} al final)
    : `${URL_BASE}/agendas/pruebaMig/contacts`; //URL crear

    const metodoHTTP = id ? "PUT" : "POST";

    try {

      const response = await fetch(URL, {

        method: metodoHTTP,
        headers: {

          "Content-Type": "application/json"
        },

        body: JSON.stringify(objetoContacto)


      });
      if(response.ok){

         console.log(`¡Contacto ${id ? 'actualizado' : 'creado'} con exito`)
         navigate("/");


      }else{

        console.log('Error al conectar');
        
      }
      
    } catch (error) {

      console.log('Error:', error)
      
    }


  }





  return (
    <div className='container'>
      

      <div className='row'>
        <h1 className="text-center">{id ? "Edit Contact" : "Add a new contact"}</h1>

        <form onSubmit={guardarContacto}>


          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder='Full Name'
              onChange={(evento)=>setName(evento.target.value)}
            />
            
          </div>          
          
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              type="email"
              value={email}
              className="form-control"
              id="exampleInputPassword1"
              placeholder='Enter email'
              onChange={(evento)=>setEmail(evento.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Phone number
            </label>
            <input
              type="text"
              value={phone}
              className="form-control"
              id="exampleInputPassword1"
              placeholder='Enter phone'
              onChange={(evento)=> setPhone(evento.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              type="text"
              value={address}
              className="form-control"
              id="exampleInputPassword1"
              placeholder='Enter Adress'
              onChange={(evento)=>setAddress(evento.target.value)}
            />
          </div>
          
          <button type="submit"  className="btn btn-primary w-100">
            Save
          </button>
          <div >

            <Link to="/">

              get back to contacts
            
            </Link>
            
          </div>
        </form>

      </div>
    </div>
  )
}

export default AddContactForm
