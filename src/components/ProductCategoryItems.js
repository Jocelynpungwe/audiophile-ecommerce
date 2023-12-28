import React from 'react'
import ProductItems from './ProductItems'

const ProductCategoryItems = ({ products }) => {
  let change = ''

  return (
    <section>
      {products.map((c, index) => {
        change = ''
        if (index % 2 !== 0) {
          change = 'even-index'
        }

        return (
          <ProductItems
            key={c.id}
            category={c.category}
            description={c.description}
            name={c.name}
            id={c.id}
            images={c.image}
            order={change}
          />
        )
      })}
    </section>
  )
}

export default ProductCategoryItems
