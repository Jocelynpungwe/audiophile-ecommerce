import React from 'react'
import { useCartContext } from '../context/cart_context'
import { formatPrice } from '../utils/helpers'
import { useNavigate } from 'react-router-dom'

function SuccessPage() {
  const { cart, total_amount, shipping_fee, clearCart } = useCartContext()
  const navigate = useNavigate()

  setTimeout(() => {
    navigate('/')
  }, 10000)

  return (
    <article className="success-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
      >
        <circle cx="32" cy="32" r="32" fill="#D87D4A" />
        <path
          d="M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812"
          stroke="white"
          stroke-width="4"
        />
      </svg>
      <h4 className="thank-message">THANK YOU FOR YOUR ORDER</h4>
      <p className="result-message">
        Payment succeeded, see the result in your
        <a href={`https://dashboard.stripe.com/test/payments`}>
          {' '}
          Stripe dashboard.
        </a>{' '}
      </p>
      <div className="sucessfull-grand-total">
        <h4 className="grand-total">GRAND TOTAL</h4>
        <h4 className="actual-total">{formatPrice(total_amount)}</h4>
      </div>
      <p>Redirecting to home page shortly</p>
    </article>
  )
}

export default SuccessPage
