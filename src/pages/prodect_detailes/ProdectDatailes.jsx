import React, { useState } from "react";
import Navbar from "../../HomePage/Home/Navbar";
import Footer from "../../HomePage/home-footer/Footer";
import HeroAbout from "../../aboutPage/AboutHero";
import ProductImageSlider from "./ProductImageSlider";
// import CartPageContent from './ProdectDetailesCrt'
// import pagesProducts from './ProdectDetailesCrt'
import ProdactDatailesTabs from './ProdectDetailesTaps'

function ProdectDetailes() {
    const [productId, setProductId] = useState(1);
  return (
    <>
      <Navbar />
      <HeroAbout pageTitle="Prodect Detailes" />

      
      
        <ProductImageSlider  onProductChange={setProductId} />
       

        <ProdactDatailesTabs productId={productId}/>
        
    
      <Footer />
    </>
  );
}
export default ProdectDetailes;
