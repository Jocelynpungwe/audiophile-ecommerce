import React from 'react'
import styled from 'styled-components'

const ProductCategoryHeader = ({ products }) => {
  return (
    <Wrapper>
      <h1>{products[0].category}</h1>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  height: 25vh;
  background: black;
  padding: 50px;
  h1 {
    color: #fff;
    text-align: center;
    font-family: Manrope;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; /* 110% */
    letter-spacing: 1.429px;
    text-transform: uppercase;
  }
`
export default ProductCategoryHeader
