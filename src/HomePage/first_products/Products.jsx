import React from "react";
import styles from "../Home/home.module.css";
import img from "../Home/hom_imgs/vecteezy_dining-table-with-wooden-chairs-on-transparent-background_48718876.png";
import img_2 from "../Home/hom_imgs/neo.png";
import img_4 from '../Home/hom_imgs/long chair.png'
import img_3 from "../Home/hom_imgs/vecteezy_interior-of-modern-living-room-with-a-wooden-chest-of_48719079.png";
// import leftImg from 'https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_1280.jpg'
import ProductList from "./ProdactsList";
import { useCart } from "../context/CartContext"; // 🌎global cart context

function Products() {
  const { cart, addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "chair",
      description: "High quality metal chair.",
      price: 599,
      image:
        "https://www.pngarts.com/files/13/Chaise-Longue-PNG-High-Quality-Image.png",
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
      image: "https://www.pngarts.com/files/13/Sofa-Couch-PNG-File.png",
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
    <section id="products" className={styles.product_section}>
      <div className={`${styles.section_heading} container`}>
        <h1 className="text-center">Popular Products</h1>
        <p className="text-center mt-4 pb-5">
          Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
          quis viverra ornare, eros dolor interdum nulla.
        </p>
      </div>
      <div className="container">
        {/* Product listing */}
        <ProductList products={products} addToCart={addToCart} />
      </div>

      <div className="container-fluid ps-0  py-5 mt-5">
        <div className="row">
          <div className="col-md-7 pe-0">
            <div className={styles.img_cont}>
              <img
                className="img-fluid"
                src="https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_1280.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-5 ms-0 px-0">
            <div className={styles.Product_right}>
              <h1>Best Furniture manufacturer</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
                fuga impedit ut molestiae, accusantium accusantium e odit
                consequatur asperiores accusantium accusantium accusantium
                accusantium eerror hic ratione? error hic ratione?
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
                fuga impedit ut accusantium accusantium e accusantium
                accusantium e molestiae, odit consequatur asperiores accusantium
                accusantium accusantium e error hic ratione?
              </p>
              <div className={styles.hero__btn} data-animation="fadeInUp">
                <a href="industries.html" className={`btn ${styles.hero_btn}`}>
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
