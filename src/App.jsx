
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './HomePage/HomPageComponents'
import ProdectsPage from './prodectsPage/ProdectsPage.jsx'
import AboutPage from './aboutPage/AboutPage'
import LoginForm from './login/Login'
import PageCart from './pages/cart/PagesCard'
import PageCatagories from './pages/categories/Categories'
import Checkout from './pages/checkout/CheckOute'
import ProdectDetailes from './pages/prodect_detailes/ProdectDatailes'
import BlogComponents from './blog/BlogComponents.jsx'
import BlogDetailes from './blog/blog_detailes/BlogDetailes'
import ContactUs from './contact/Contact'
import MyAcount from './my_acount/MyAcount'
// import CardSubmenu from './HomePage/Home/CardSubmenu'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <BrowserRouter basename="/new-furn-project">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProdectsPage" element={<ProdectsPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/Login" element={<LoginForm/>}/>
        <Route path="/CartPage" element={<PageCart />} />
        <Route path="/Categories" element={<PageCatagories />}/>
        <Route path="/Checkout" element={<Checkout />}/>
        <Route path="/ProductDetails" element={<ProdectDetailes/>}/>
        <Route path="/blog" element={<BlogComponents/>}/>
        <Route path="/blogDetailes" element={<BlogDetailes />} />
        <Route path="/contactUs" element={<ContactUs/>} />
        <Route path= "/myAcount" element={<MyAcount/>}/>
        <Route path= "/CartPage" element={<PageCart/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
