import React, { useEffect } from 'react'

import {
  FeaturedProducts,
  Hero,
  SpecialProduct,
  Services,
  Contact,
} from '../components'

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <SpecialProduct />
      <Services />
      <Contact />
    </main>
  )
}

export default HomePage
