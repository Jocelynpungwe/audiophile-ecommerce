import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import imageNew from '../assets/home/tablet/image-best-gear.jpg'
const ProductItems = (props) => {
  return (
    <Wrapper className="section-center">
      {/* style={{ order: props.order ? -1 : 0 }} */}
      <img src={props.images} alt="" />
      <article className={`content ${props.order}`}>
        <div className="container">
          <p className="hero-product">NEW PRODUCT</p>
          <h1>{props.name}</h1>
          <p className="hero-description">{props.description}</p>
          <Link
            to={`/products/${props.category}/${props.id}`}
            className="btn hero-btn"
          >
            see product
          </Link>
        </div>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  /* padding-top: 50px; */
  margin-top: 70px;

  img {
    width: 100%;
    height: 352px;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }

  h1 {
    color: #000;
    text-align: center;
    font-family: Manrope;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .hero-product {
    color: #d87d4a;
    text-align: center;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 10px;
    text-transform: uppercase;
  }

  .hero-description {
    color: #000;
    text-align: center;
    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px; /* 166.667% */
  }

  @media (min-width: 768px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;

    h1 {
      font-size: 40px;
      line-height: 44px; /* 110% */
      /* width: 490px; */
      text-align: left;
    }
    img {
      height: 560px;
    }

    .container {
      justify-content: center;
      align-items: start;
    }

    .hero-product {
      text-align: left;
    }

    .hero-description {
      text-align: left;
    }

    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }

    .even-index {
      order: -1;
    }
  }
`

export default ProductItems
