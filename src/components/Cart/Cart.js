import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { Button, StyledCart } from '../../styles/components'
import priceFormat from '../../utils/priceFormat'
import { CartContext } from '../../context'

const Cart = () => {
  const { cart } = useContext(CartContext)
  const [total, setTotal] = useState(0)
  const [stripe, setStripe] = useState(null)

  useEffect(() => {
    setStripe(window.Stripe(process.env.STRIPE_PK))
    getTotal()
  }, [])

  const handleSubmit = async (e) => {
    console.log('hola')
    e.preventDefault()

    const { error } = await stripe.redirectToCheckout({
      lineItems: cart.map(({ id, qty }) => {
        console.log('id', id)
        console.log('qty', qty)
        /*return ({ price: id, quantity: qty })*/
      }),
      mode: 'subscription',
      successUrl: process.env.SUCCESS_REDIRECT,
      cancelUrl: process.env.CANCEL_REDIRECT
    })
    if (error) {
      throw error
    }
  }

  const getTotal = () => {
    setTotal(
      cart.reduce(
        (acc, current) => acc + current.price * current.qty, 0)
    )
  }

  return (
    <StyledCart>
      <h2>Carrito de Compras</h2>
      <table>
        <tbody>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
          {cart.map((swag, index) => (
            <tr key={index}>
              <td>
                <img src={swag.metadata.img} alt={swag.name} />
                {swag.name}
              </td>
              <td>USD {priceFormat(swag.price)}</td>
              <td>{swag.qty}</td>
              <td>{priceFormat(swag.qty * swag.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <div>
          <h3>Subtotal:</h3>
          <small>USD {priceFormat(total)}</small>
        </div>
        <div>
          <Link to='/'>
            <Button type='outline'>Volver</Button>
          </Link>
          <Button
            onClick={(e) => handleSubmit(e)}
            disabled={cart.length === 0}
          >
            Comprar
          </Button>
        </div>
      </nav>
    </StyledCart>
  )
}

export default Cart
