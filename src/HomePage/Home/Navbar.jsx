import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import LogoImg1 from "./hom_imgs/logo.png.webp";
import LogoImg2 from "./hom_imgs/logo2.png.webp";
import CardSubmenu from "./CardSubmenu";
import { Link, NavLink } from "react-router-dom";
// import ProductsPage from "../../prodectsPage/ProdectsPage";
import { useCart } from "../context/CartContext"; // ✅ use the shared cart

function Navbar() {
  const { showCart, toggleCart, cart, removeFromCart } = useCart(); // ✅ get from context
  const onClose = () => {
    if (showCart) toggleCart(); // if it open  revers show statuse
  };
  // navbar scroling
  const [showNavbar, setShowNavbar] = useState(true);
  const [LogoImg, setLogoImg] = useState(LogoImg1);
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      if (y === 0) {
        setShowNavbar(true); // Show on top or after 800px
        setLogoImg(LogoImg1);
      } else if (y >= 500) {
        setShowNavbar(true); // Show on top or after 800px
        setLogoImg(LogoImg2);
      } else {
        setShowNavbar(false); // Hide between 1px and 800px
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.hom_header}  ${
        showNavbar ? styles.visible : styles.hidden
      }`}
    >
      <nav className="navbar navbar-expand-lg py-0">
        <div
          className={`${styles.nav_container} container-fluid ps-0 pe-lg-5 pe-sm-4`}
        >
          {/* Logo */}
          <div className={styles.logo_div}>
            <a className="navbar-brand pt-0  me-0" href="#">
              <img
                className={`img-fluid`}
                src={LogoImg}
                alt="logo"
                style={
                  LogoImg === LogoImg2
                    ? {
                        padding: "2px 10px ", transition : '0.4s' , zIndex:'1'
                        
                      }
                    : { padding: "0px" }
                }
              />
            </a>
          </div>

          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu items */}
          <div className={`${styles.nav_content} collapse navbar-collapse `} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ProdectsPage">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AboutPage">
                  About
                </Link>
              </li>
              <li className={styles.nav_pages}>
                <a className="nav-link" href="#">
                  Pages
                </a>
                <div className={styles.pages_supmenu}>
                  <span className={styles.arrw_to_top}>
                    <i className="fa-solid fa-caret-up"></i>
                  </span>
                  <ul>
                    <li>
                      <Link to="/Login">Login</Link>
                    </li>
                    <li>
                      <Link to="/CartPage">Cart</Link>
                    </li>
                    <li>
                      <Link to="/Categories">Categories</Link>
                    </li>
                    <li>
                      <Link to="/Checkout">Checkout</Link>
                    </li>
                    <li>
                      <Link to="/ProductDetails">Product Details</Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className={styles.nav_blog}>
                <a className="nav-link" href="#">
                  blog
                </a>
                <div className={styles.blog_supmenu}>
                  <span className={styles.arrw_to_top}>
                    <i className="fa-solid fa-caret-up"></i>
                  </span>
                  <ul>
                    <li>
                      <Link to="/blog">blog</Link>
                    </li>
                    <li>
                      <Link to="/blogDetailes">blog detailes</Link>
                    </li>
                    <li>
                      <Link to="">elemnts</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link className="nav-link" to="/contactUs">
                  contact
                </Link>
              </li>
            </ul>

            {/* Search */}
            <form className="d-flex align-items-center me-3" role="search">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
              />
              <button type="submit" className="btn ps-0">
                <i className="fas fa-search fs-4"></i>
              </button>
            </form>

            {/* Account + Cart */}
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/myAcount">
                  My Account
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleCart();
                  }}
                  className="nav-link"
                >
                  <span id="showCard">
                    <i className="fa-solid fa-cart-arrow-down fs-4"></i>
                    {/* Show total quantity of items in cart, not just unique
                    products */}
                    <sup className={`${styles.navbar_badge_icon} badge  ms-1`}>
                      {cart.reduce((total, item) => total + item.quantity, 0)}
                    </sup>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Cart Submenu */}
      <CardSubmenu
        showCart={showCart}
        cart={cart}
        removeFromCart={removeFromCart}
        onClose={onClose}
      />
    </header>
  );
}

export default Navbar;
