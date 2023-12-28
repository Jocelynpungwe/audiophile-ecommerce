import React from 'react'
import styled from 'styled-components'
const ProductBox = ({ images = [[]] }) => {
  return (
    <Wrapper>
      <div className="product-image-container">
        <div>
          <img
            src={images[1].url}
            className="smaller-img"
            alt="featured images one"
          />
          <img
            src={images[2].url}
            className="smaller-img"
            alt="featured images two"
          />
        </div>
        <img
          src={images[3].url}
          className="large-img"
          alt="featured images three"
        />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 50px 0px;
  h6 {
    color: #000;
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 150% */
    letter-spacing: 0.857px;
    text-transform: uppercase;
    margin: 20px 0;
  }
  .smaller-img {
    height: 200px;
    object-fit: cover;
  }
  .large-img {
    height: 407px;
    object-fit: cover;
  }
`

export default ProductBox
