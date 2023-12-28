import React from 'react'
import YouMayLikeProduct from './YouMayLikeProduct'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import Loading from './Loading'
import Error from './Error'

const YouMayLike = () => {
  const {
    product_loading: loading,
    product_error: error,
    products,
  } = useProductsContext()

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }

  function randomArr() {
    const randomIndexOne = Math.floor(Math.random() * products.length)
    const randomIndexTwo = Math.floor(Math.random() * products.length)
    const randomIndexThree = Math.floor(Math.random() * products.length)
    return [
      products[randomIndexOne],
      products[randomIndexTwo],
      products[randomIndexThree],
    ]
  }
  console.log(randomArr())
  return (
    <Wrapper className="section-center">
      <h1>YOU MAY ALSO LIKE</h1>
      <div className="featured">
        {randomArr().map((c, i) => {
          return (
            <YouMayLikeProduct
              key={i}
              image={c.image}
              category={c.category}
              name={c.name}
              id={c.id}
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h1 {
    color: #000;
    text-align: center;
    font-family: Manrope;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 112.5% */
    letter-spacing: 1.143px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
  }

  @media (min-width: 768px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }
`

export default YouMayLike
