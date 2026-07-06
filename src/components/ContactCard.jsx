import React from 'react'

import { Link } from 'react-router-dom';

import Button from './Button';




const ContactCard = ({ contact, onDeleteContact }) => {

  console.log(contact);
  return (

    




    <div className="container my-2 p-2 border rounded shadow-sm">

      



      <div className="row align-items-center flex-nowrap g-2">



        {/* Contenedor de la imagen con tamaño ajustado */}
        <div className="col-auto">
          <img
            src="https://i.pravatar.cc"
            alt={contact.name}
            className="rounded-circle"
            style={{
              width: '100px',
              height: '100px',
              objectFit: 'cover', // Evita que la foto se deforme
              minWidth: '60px'    // Evita que Bootstrap la encoja
            }}
          />
        </div>

        <div className="col text-truncate">

          <div className="col-3 fw-bold text-truncate mx-2">{contact.name}</div>
          <div className="col-3 fw-bold text-truncate mx-2"><i className="fa-solid fa-location-dot text-body-secondary me-2"></i>
            {contact.address}
          </div>

          <div className="col-3 fw-bold text-truncate mx-2"><i className="fa-solid fa-phone text-body-secondary me-2"></i>{contact.phone}</div>

          <div className="col-3 fw-bold text-truncate mx-2"><i className="fa-solid fa-envelope text-body-secondary me-2"></i>{contact.email}</div>


        </div>

        <div className="col-auto d-flex gap-2 w-25 mb-5 justify-content-around">


          <Link className="btn btn-link text-secondary" to={`/edit-contact/${contact.id}`} >


            <i className="fa-solid fa-pen"></i>


          </Link>



          <button className="btn btn-link text-secondary" onClick={()=>onDeleteContact(contact.id)}>

            <i className="fa-solid fa-trash"></i>


          </button>


        </div>








      </div>


    </div>





  )
}

export default ContactCard

