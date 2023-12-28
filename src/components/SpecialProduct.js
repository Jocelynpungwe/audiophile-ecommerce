import React from 'react'
import SpecialProductOne from './SpecialProductOne'
import SpecialProductTwo from './SpecialProductTwo'
import SpecialProductThree from './SpecialProductThree'
import { useProductsContext } from '../context/products_context'

const SpecialProduct = () => {
  const { products } = useProductsContext()

  return (
    <>
      <SpecialProductOne products={products} />
      <SpecialProductTwo products={products} />
      <SpecialProductThree products={products} />
    </>
  )
}

export default SpecialProduct
