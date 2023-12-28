import React, { useEffect } from 'react'
import {
  Error,
  FeaturedProducts,
  Loading,
  PageHero,
  ProductCategoryHeader,
  ProductCategoryItems,
  SmallWebDescription,
} from '../components'
import { useParams } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import styled from 'styled-components'
const ProductCategoryPage = () => {
  const { category } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [category])

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

  const productCategory = products.filter((item) => item.category === category)

  return (
    <Wrapper>
      {/* delete the productCategoryHeader */}
      {/* <ProductCategoryHeader products={productCategory} /> */}
      <PageHero title={category} product />
      <ProductCategoryItems products={productCategory} />
      <FeaturedProducts />
      <SmallWebDescription />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding-bottom: 30px;
`

export default ProductCategoryPage
