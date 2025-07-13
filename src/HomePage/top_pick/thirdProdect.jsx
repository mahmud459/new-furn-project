import React from "react";
import img11 from '../Home/hom_imgs/11.png'
import img12 from '../Home/hom_imgs/12.png'
import img13 from '../Home/hom_imgs/13.png'
import styles from "../Home/home.module.css";
import ProductList from "../first_products/ProdactsList";
import { useCart } from "../context/CartContext"; // 🌎global cart context

function ThirdProducts() {
    const { cart, addToCart } = useCart();

    const products = [
        {
            id: 7,
            name: "chair",
            description: "High quality metal chair.",
            price: 200,
            image:
                img11,
        },
        {
            id: 8,
            name: "table",
            description: "High quality wooden table.",
            price: 300,
            image:
                img12,
        },
        {
            id: 9,
            name: "sofa",
            description: "High quality fabric type sofa.",
            price: 400,
            image: img13,
        },
        // ----
    ];

    return (
        <section id="products" className={styles.product_section}>
            <div className={`${styles.section_heading} container w-50`}>
                <h1 className="text-center">Products you may like</h1>
                <p className="text-center mt-4 pb-5">
                    Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
                    eros dolor interdum nulla.
                    quis viverra ornare, eros dolor interdum nulla.
                </p>
            </div>
            <div className="container">
                {/* Product listing */}
                <ProductList products={products} addToCart={addToCart} />
            </div>
            <div className={`${styles.hero__btn} mt-5  text-center`} >
                <a href="industries.html" className={`btn ${styles.hero_btn}`}>
                    Discover More
                </a>
            </div>

            {/* last container --------  */}
           
        </section>
    );
}

export default ThirdProducts;
