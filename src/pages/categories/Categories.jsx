

import Navbar from "../../HomePage/Home/Navbar";
import HeroAbout from "../../aboutPage/AboutHero";
import Footer from "../../HomePage/home-footer/Footer";
import CtagoriesProducts from "./CatagoriesCart";
import styles from "../pages.module.css";

function PageCatagories() {


  return (
    <>
      <Navbar />
      <HeroAbout pageTitle="catagories" />

      <div className={styles.catagories_section}>
        <div className="container">
          <div className="row">
            {/* Filters Section */}
            <div className="col-md-3" data-aos="fade-right">
              <div className={styles.selects}>
                <select id="selectType1" className={styles.selectInput}>
                  <option value="">Type</option>
                  <option value="sofa">Sofa</option>
                  <option value="table">Table</option>
                  <option value="chair">Chair</option>
                  <option value="bed">Bed</option>
                  <option value="lighting">Lightning</option>
                  <option value="decor">Decor</option>
                </select>

                <select id="selectType2" className={styles.selectInput}>
                  <option value="">Style</option>
                  <option value="modern">Modern</option>
                  <option value="classic">Classic</option>
                  <option value="industrial">Industrial</option>
                </select>

                <select id="selectType3" className={styles.selectInput}>
                  <option value="">Color</option>
                  <option value="white">White</option>
                  <option value="black">Black</option>
                  <option value="brown">Brown</option>
                </select>

                <select id="selectType4" className={styles.selectInput}>
                  <option value="">Material</option>
                  <option value="wood">Wood</option>
                  <option value="metal">Metal</option>
                  <option value="plastic">Plastic</option>
                </select>
              </div>

              {/* Price range + checkbox */}
              <div className={`${styles.rangeSlider} mt-5`} data-aos="fade-up">
                <label htmlFor="priceRange">Price Range:</label>
                <input
                  type="range"
                  className={styles.slider}
                  id="priceRange"
                  min="0"
                  max="5000"
                />
                <div className="mt-4">
                  <div>
                    <input type="checkbox" id="inStock" />
                    <label htmlFor="inStock">In Stock</label>
                  </div>
                  <div>
                    <input type="checkbox" id="onSale" />
                    <label htmlFor="onSale">On Sale</label>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Section */}
            <div className="col-md-9" data-aos="fade-left">
              <CtagoriesProducts />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PageCatagories;
