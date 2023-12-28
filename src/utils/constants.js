import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'products',
    url: '/products',
  },
  {
    id: 3,
    text: 'headphones',
    url: '/products/headphones',
  },
  {
    id: 4,
    text: 'speakers',
    url: '/products/speakers',
  },
  {
    id: 5,
    text: 'earphones',
    url: '/products/earphones',
  },
  {
    id: 6,
    text: 'about',
    url: '/about',
  },
  {
    id: 7,
    text: 'checkout',
    url: '/checkout',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: 'Our mission is to elevate audio enjoyment, offering high-quality products that resonate with the passion of audiophiles worldwide.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'Our vision is to become the ultimate destination for audiophiles, providing not just exceptional products but also fostering a community where enthusiasts can share knowledge, passion, and appreciation for premium audio experiences.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: "Founded in 2021, Audiophile emerged from a shared passion for exceptional sound. Growing from a desire to redefine audio standards, we've become a global destination for audiophiles seeking immersive experiences.",
  },
]

export const products_url = '/.netlify/functions/products'

export const single_product_url = `/.netlify/functions/single-product?id=`
