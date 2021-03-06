import React, { useState, useContext } from 'react'
import priceFormat from '../../utils/priceFormat'
import {
  Tag,
  SizeButton,
  QtySelect,
  QtyButton,
  Button,
  SizeSelect,
  StyledProductDetail
} from '../../styles/components'
import Seo from '../Seo'
import Stars from '../Stars'
import { CartContext } from '../../context'

const Productdeail = ({
  id,
  price,
  product: { name, metadata }
}) => {
  const formatPrice = priceFormat(price)
  const [size, setSize] = useState(2)
  const [qty, setQty] = useState(1)
  const { addToCart } = useContext(CartContext)

  const handleSubmit = () => {
    addToCart({ id, price, name, metadata, qty })
  }

  return (
    <StyledProductDetail>
      <Seo title={name} />
      <img src={metadata.img} alt={name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>USD {formatPrice}</b>
        <Stars />
        {metadata.wear && <h3>Color: Azul</h3>}
        <small>{metadata.description}</small>
        {metadata.wear && (
          <SizeSelect selected={size}>
            <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
            <SizeButton onClick={() => setSize(2)}>S</SizeButton>
            <SizeButton onClick={() => setSize(3)}>M</SizeButton>
            <SizeButton onClick={() => setSize(4)}>L</SizeButton>
          </SizeSelect>
        )}
        <p>Cantidad: </p>
        <QtySelect>
          <button
            onClick={
              () => (qty > 1 ? setQty(qty - 1) : null)
            }
          >
            -
          </button>
          <input type='text' disabled value={qty} />
          <QtyButton onClick={() => setQty(qty + 1)}>+</QtyButton>
        </QtySelect>
        <Button onClick={() => handleSubmit()}>Agregar al Carrito</Button>
      </div>
    </StyledProductDetail>
  )
}

export default Productdeail
