import React from "react";
import img1 from '../Home/hom_imgs/badroom.png'
import img2 from '../Home/hom_imgs/chair.png'
import img3 from '../Home/hom_imgs/long chair.png'
import styles from "../Home/home.module.css";
import ProductList from "../first_products/ProdactsList";
import { useCart } from "../context/CartContext"; // 🌎global cart context

function SecundProducts() {
    const { cart, addToCart } = useCart();

    const products = [
        {
            id: 7,
            name: "chair",
            description: "High quality metal chair.",
            price: 200,
            image:
                img1,
        },
        {
            id: 8,
            name: "table",
            description: "High quality wooden table.",
            price: 300,
            image:
                img2,
        },
        {
            id: 9,
            name: "sofa",
            description: "High quality fabric type sofa.",
            price: 400,
            image: img3,
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
            <div className={`${styles.second_prodect_section} container-fluid h-75 `} >
                <div className="row ">
                    <div className="col-md-4 px-5 ">  <div className={styles.secund_prodect}>
                        <span><i className="fa-brands fa-instagram"></i></span>
                        <h1>Best Furniture manufacturer</h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
                            fuga impedit ut molestiae, accusantium accusantium e odit
                          
                        </p>
                      
                        <div className={styles.hero__btn} data-animation="fadeInUp">
                            <a href="industries.html" className={`btn ${styles.hero_btn}`}>
                                Discover More
                            </a>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 pe-0">
                        <img
                            className="img-fluid h-100"
                            src="https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_1280.jpg"
                            alt=""
                        />
                    </div>
                    <div className="col-md-4 ps-0">
                        <img
                            className="img-fluid h-100"
                            src="https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_1280.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SecundProducts;
