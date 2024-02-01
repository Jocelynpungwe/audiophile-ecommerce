import '@stripe/stripe-js'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
  ProductCategoryPage,
  CancelPage,
  SuccessPage,
} from './pages'
function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:category" element={<ProductCategoryPage />} />
          <Route path="products/:category/:id" element={<SingleProduct />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="success" element={<SuccessPage />} />
          <Route path="cancel" element={<CancelPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  )
}

export default App
