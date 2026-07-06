import React from 'react'
import Contact from '../components/Contact'
import Button from '../components/Button'

const ContactPage = () => {
  return (
    <div className="container my-4">

      {/* Contenedor del Botón: Alineado a la derecha con un margen controlado */}
      <div className="d-flex justify-content-end mb-3 px-2">
        <Button />
      </div>

      {/* Contenedor de los Contactos: Compartirá la misma alineación horizontal */}
      <div className="px-2">
        <Contact />
      </div>

    </div>
  )
}

export default ContactPage
