import React from "react";
import Navbar from "../../HomePage/Home/Navbar";
import HeroAbout from "../../aboutPage/AboutHero";
import CartPageContent from "./CartPageContent";
import Footer from "../../HomePage/home-footer/Footer";


function PageCart (){
    return(
     <>
     <Navbar/>
     <HeroAbout pageTitle = 'card list'/>
     <CartPageContent/>
     <Footer/>
     
     </>
    );
};
export default PageCart ;