import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import images from '../assets/home/mobile/image-best-gear.jpg'
const YouMayLikeProduct = (props) => {
  return (
    <Wrapper>
      <img src={props.image} alt="headset" />
      <h2>{props.name}</h2>
      <Link
        to={`/products/${props.category}/${props.id}`}
        className="btn hero-btn"
      >
        see product
      </Link>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  text-align: center;

  img {
    width: 100%;
    min-height: 50vh;
    object-fit: cover;
  }
  h2 {
    color: #000;
    text-align: center;
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.714px;
    text-transform: uppercase;
    margin: 15px 0;
  }
  @media (min-width: 768px) {
    margin-bottom: -85px;
  }
`
export default YouMayLikeProduct
