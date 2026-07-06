import React from 'react'

import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <div>

        <Link className="bg bg-success text-light p-2 border" style={{ textDecoration: 'none' }} to="/add-contact">Add New Contact</Link>
      
    </div>
  )
}

export default Button
