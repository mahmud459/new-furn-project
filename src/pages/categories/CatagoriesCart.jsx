import React from "react";
import styles from "../../HomePage/Home/home.module.css";
import img from "../../HomePage/Home/hom_imgs/vecteezy_dining-table-with-wooden-chairs-on-transparent-background_48718876.png";
import img_2 from "../../HomePage/Home/hom_imgs/neo.png";
import img_4 from '../../HomePage/Home/hom_imgs/long chair.png'
import img_3 from "../../HomePage/Home/hom_imgs/vecteezy_interior-of-modern-living-room-with-a-wooden-chest-of_48719079.png";
// import leftImg from 'https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_1280.jpg'
import ProductList from "../../HomePage/first_products/ProdactsList";
import { useCart } from "../../HomePage/context/CartContext"; // 🌎global cart context

function CtagoriesProducts() {
  const { cart, addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "chair",
      description: "High quality metal chair.",
      price: 599,
      image:
        "https://cdn.pixabay.com/photo/2017/09/27/02/47/throne-2790789_1280.png",
    },
    {
      id: 2,
      name: "table",
      description: "High quality wooden table.",
      price: 999,
      image:
        img_2,
    },
    {
      id: 3,
      name: "sofa",
      description: "High quality fabric type sofa.",
      price: 199,
      image: "https://cdn.pixabay.com/photo/2017/02/24/19/21/armchair-2095981_1280.jpg",
    },
    // ----
    {
      id: 4,
      name: "table",
      description: "High quality fabric type table.",
      price: 199,
      image: img,
    },
    {
      id: 5,
      name: "table",
      description: "High quality fabric type table.",
      price: 199,
      image: img_4,
    },
    {
      id: 6,
      name: "table",
      description: "High quality fabric type table.",
      price: 199,
      image: img_3,
    },
  ];

  return (
    <section id="products" className={styles.catagorise_product_section}>
      <div className="container">
        {/* Product listing */}
        <ProductList products={products} addToCart={addToCart} />
        <div className={`${styles.hero__btn} mx-auto text-center mt-5`} >
                <a href="#" className={`btn ${styles.hero_btn}`}>
                  Discover More
                </a>
              </div>
      </div>

    
    </section>
  );
}

export default CtagoriesProducts;
