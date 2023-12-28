import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SpecialProductTwo = ({ products }) => {
  return (
    <Wrapper className="section-center">
      <div class="homepage-product-zx7-speaker">
        {products
          .filter((product) => product.name === 'ZX7 SPEAKER')
          .map((product) => {
            return (
              <div class="homepage-product-zx7-speaker-container">
                <h2>{product.name}</h2>
                <Link
                  class="btn secondary-btn"
                  to={`products/speakers/${product.id}`}
                >
                  see product
                </Link>
              </div>
            )
          })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-bottom: 60px;
  .homepage-product-zx7-speaker {
    display: flex;
    align-items: center;
    /* background: gray;
    background-image: url({specialImge}); */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 90% center;
    height: 367px;
    margin-top: 25px;
    padding-left: 20px;
  }

  h2 {
    color: #000;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 32px;
  }
  .btn-secondary {
    color: #000000;
    border: 1px solid #000;
    margin-top: 24px;
  }
  .homepage-product-zx7-speaker-container {
    margin-left: 35px;
  }
  @media (min-width: 768px) {
    .homepage-product-zx7-speaker-container {
      margin-left: 64px;
    }
  }
  @media (min-width: 1020px) {
    .homepage-product-zx7-speaker-container {
      margin-left: 100px;
    }
  }
`
export default SpecialProductTwo
