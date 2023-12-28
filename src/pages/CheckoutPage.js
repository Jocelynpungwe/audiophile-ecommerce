import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'

// extra imports

import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const initialState = {
  fullName: '',
  email: '',
  phoneNumber: '',
  address: '',
  zipCode: '',
  city: '',
  country: '',
  paymenetMethod: '',
}

const CheckoutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { cart } = useCartContext()
  const [billing, setBilling] = useState(initialState)

  function changeBilling(e) {
    const name = e.target.name
    const value = e.target.value
    console.log(name)
    console.log(value)
    setBilling((prevData) => {
      return {
        ...prevData,
        [name]: value,
      }
    })
  }

  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>Your cart is empty</h2>
            <Link to="/products" className="btn">
              fill it
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  .empty {
    text-align: center;
  }
`
export default CheckoutPage
