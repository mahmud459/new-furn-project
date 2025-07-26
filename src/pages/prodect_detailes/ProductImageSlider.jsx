import React, { useState, useEffect } from "react";
import styles from "../../pages/pages.module.css";
import { useCart } from "../../HomePage/context/CartContext";

import img from "../../HomePage/Home/hom_imgs/vecteezy_dining-table-with-wooden-chairs-on-transparent-background_48718876.png";
import img_2 from "../../HomePage/Home/hom_imgs/neo.png";
import img_4 from "../../HomePage/Home/hom_imgs/long chair.png";
import img_3 from "../../HomePage/Home/hom_imgs/vecteezy_interior-of-modern-living-room-with-a-wooden-chest-of_48719079.png";

const products = [
  {
    id: 1,
    name: "chair",
    description:
      "This high-quality metal chair combines durability with sleek design. Perfect for dining rooms or offices, it offers lasting comfort, modern appeal, and easy maintenance for daily use.",
    price: 599,
    image:
      "https://www.pngarts.com/files/13/Chaise-Longue-PNG-High-Quality-Image.png",
  },
  {
    id: 2,
    name: "table",
    description:
      "A premium wooden table crafted for style and strength. Its smooth finish and sturdy build make it ideal for everyday meals, work, or display in any room setting.",
    price: 999,
    image: img_2,
  },
  {
    id: 3,
    name: "sofa",
    description:
      "Relax in style with our fabric sofa. Designed for maximum comfort and minimal space, it's a perfect centerpiece for your living room or cozy corner seating.",
    price: 199,
    image: "https://www.pngarts.com/files/13/Sofa-Couch-PNG-File.png",
  },
  {
    id: 4,
    name: "table",
    description:
      "Elegant and practical, this fabric-top table adds charm to any home. Great for casual dining or display, it enhances your decor with texture and functionality.",
    price: 199,
    image: img,
  },
  {
    id: 5,
    name: "table",
    description:
      "This long-style table blends minimalist design with superior craftsmanship. Its versatile size fits perfectly in hallways, living rooms, or open-plan areas needing extra surface space.",
    price: 199,
    image: img_4,
  },
  {
    id: 6,
    name: "table",
    description:
      "Add warmth to your space with this modern wooden chest table. Functional and fashionable, it's ideal for organizing essentials or showcasing decorative pieces stylishly.",
    price: 199,
    image: img_3,
  },
];

function ProductDetailsSlider({ onProductChange }) {
  const { addToCart } = useCart();
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProduct = products[activeIndex];

  const handleAddToCart = () => {
    const itemToAdd = { ...activeProduct, quantity: 1 };
    addToCart(itemToAdd);
  };

  useEffect(() => {
    onProductChange?.(activeProduct.id);
  }, [activeIndex]);

  return (
    <section className={styles.prodect_detailes_content}>
      <div className="container">
        <div className="row">
          {/* Image Slider */}
          <div
            className="col-md-6"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className={styles.productSliderImg}>
              <div className={styles.mainImage}>
                <img
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  className={styles.prdect_detailes_img}
                />
              </div>
              <ul
                className={`${styles.prodects_small_imgs}  d-flex mt-3 gap-2 list-unstyled`}
              >
                {products.map((item, index) => (
                  <li
                    key={index}
                    className={index === activeIndex ? styles.activeThumb : ""}
                    style={{ cursor: "pointer" }}
                    onClick={() => setActiveIndex(index)}
                   
                  >
                    <img
                      src={item.image}
                      alt={`Thumb ${index + 1}`}
                      width="100"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product Info */}
          <div
            className="col-md-6 px-5"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="s_product_text ps-5">
              <h3 className="fw-bold">{activeProduct.name}</h3>
              <h2 className={styles.prodect_pric}>${activeProduct.price}</h2>
              <ul className={`list-unstyled`}>
                <li className="py-3">
                  <span>Category</span>: Furniture
                </li>
                <li>
                  <span>Availability</span>: In Stock
                </li>
              </ul>
              <hr />
              <p className={styles.prodect_detailes_desc}>
                {activeProduct.description}
              </p>

              <div className="card_area" data-aos="fade-up" data-aos-delay="200">
                <div className="add_to_cart d-inline-block">
                  <button
                    className={styles.ProductDetailsSlider_add_bottun}
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                </div>

                <div
                  className={`${styles.prodect_detailes_social_icon} mt-3`}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <span>
                    <a href="#">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailsSlider;
