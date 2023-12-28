import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SpecialProductThree = ({ products }) => {
  return (
    <Wrapper className="section-center">
      <div class="homepage-product-YX1-earphones">
        <div className="special-product-yx1-earphone-background"></div>
        {/* <img src={specialImage} alt="earphones" /> */}

        <div class="homepage-product-YX1-earphones-container">
          {products
            .filter((product) => product.name === 'YX1 WIRELESS EARPHONES')
            .map((product) => {
              return (
                <div class="homepage-product-YX1-earphones-info">
                  <h2>YX1 EARPHONES</h2>
                  <Link
                    class="btn secondary-btn"
                    to={`products/earphones/${product.id}`}
                  >
                    see product
                  </Link>
                </div>
              )
            })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .homepage-product-YX1-earphones {
    display: grid;
    /* place-items: center; */
    margin-top: 24px;
    margin-bottom: 50px;
  }

  img {
    width: 100%;
    height: 200px;
  }

  .homepage-product-YX1-earphones-container {
    text-align: left;
    width: 100%;
    height: 200px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #f1f1f1;
    margin-top: 20px;
    padding-top: 41px;
    padding-left: 20px;
  }
  @media (min-width: 768px) {
    .homepage-product-YX1-earphones {
      grid-template-columns: 1fr 1fr;
    }
    .homepage-product-YX1-earphones-container {
      margin-top: 0;
    }
    .homepage-product-YX1-earphones-info {
      margin-left: 41px;
    }
  }
  @media (min-width: 1020px) {
    .homepage-product-YX1-earphones-info {
      margin-left: 55px;
    }
  }
`

export default SpecialProductThree
