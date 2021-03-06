import React from 'react'
import { Button, Purchase } from '../styles/components'
import Seo from '../components/Seo'
import { Link } from 'gatsby'

const gracias = () => {
  return (
    <>
      <Seo title='Compra Exitosa' />
      <Purchase>
        <h2>Compra Exitosa</h2>
        <p>Espero que disfrutes tu swag, lucelo con orgullo</p>
        <p>Te esperamos de vuelta, no pares de aprender!</p>
        <span role='img' aria-label='emoji'>❤️</span>
        <Link to='/'>
          <Button>Volver al Catalogo</Button>
        </Link>
      </Purchase>
    </>
  )
}

export default gracias
