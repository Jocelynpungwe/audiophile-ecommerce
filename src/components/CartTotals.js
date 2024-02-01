import React, { useState } from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'

import { loadStripe } from '@stripe/stripe-js'

let stripePromise

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
  }
  return stripePromise
}

const CartTotals = () => {
  const { cart, total_amount, shipping_fee } = useCartContext()
  const [stripeError, setStripeError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const newItem = cart.map((product) => {
    if (product.name === 'YX1 WIRELESS EARPHONES') {
      return {
        price: 'price_1OekwiFH4y87VgL9Ma5n31Hp',
        quantity: product.amount,
      }
    }

    if (product.name === 'XX99 MARK I HEADPHONES') {
      return {
        price: 'price_1OejSnFH4y87VgL9U91A1CIq',
        quantity: product.amount,
      }
    }

    if (product.name === 'ZX9 SPEAKER') {
      return {
        price: 'price_1OejUrFH4y87VgL9m0JlMpmy',
        quantity: product.amount,
      }
    }

    return product
  })

  const checkoutOptions = {
    lineItems: newItem,
    mode: 'payment',
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  }

  const redirectToCheckout = async () => {
    setIsLoading(true)
    console.log('redirecttoCheckout')
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout(checkoutOptions)
    console.log('stripe checkout error:', error)

    if (error) setStripeError(error.message)
    setIsLoading(false)
  }

  if (stripeError) alert(stripeError)

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal :<span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            shipping fee :<span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            order total :<span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        <button
          disabled={isLoading}
          onClick={redirectToCheckout}
          className="btn"
        >
          {isLoading ? 'Loading...' : 'proceed to checkout'}
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`

export default CartTotals
