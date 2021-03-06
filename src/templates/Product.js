import React from 'react'
import ProdectDetail from '../components/Product'

const Product = ({ pageContext }) => {
  return (
    <ProdectDetail {...pageContext} />
  )
}

export default Product
