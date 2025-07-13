import React from 'react'

import Navbar from './Home/Navbar'
import Hero from './Home/Hero'
import Products from '../HomePage/first_products/Products'
import SecundProducts from '../HomePage/secund_prodects/secondProdects'
import ThirdProducts from '../HomePage/top_pick/thirdProdect'
import Footer from '../HomePage/home-footer/Footer'

function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Products/>
    <SecundProducts/>
    <ThirdProducts/>
    <Footer/>
    </>
  )
}

export default Home ;