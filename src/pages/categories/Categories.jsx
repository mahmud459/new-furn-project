import React from "react";
import Navbar from "../../HomePage/Home/Navbar";
import HeroAbout from "../../aboutPage/AboutHero";
import Footer from "../../HomePage/home-footer/Footer";
import CtagoriesProducts from "./CatagoriesCart";
import styles from '../pages.module.css'
function PageCatagories() {
  return (
    <>
      <Navbar />
      <HeroAbout pageTitle="catagories" />

      <div className={styles.catagories_section}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className={styles.selects}>
                <select id="selectType" className={styles.selectInput}>
                  <option value="">Type</option>
                  <option value="">Sofa</option>
                  <option value="">Table</option>
                  <option value="">Chair</option>
                  <option value="">Bead</option>
                  <option value="">Lightning</option>
                  <option value="">Decore</option>
                </select>


                {/* secund select  */}
                <select id="selectType" className={styles.selectInput}>
                <option value="">Type</option>
                <option value="">Sofa</option>
                <option value="">Table</option>
                <option value="">Chair</option>
                <option value="">Bead</option>
                <option value="">Lightning</option>
                <option value="">Decore</option>
              </select>

              {/* third elct  */}
              <select id="selectType" className={styles.selectInput}>
                <option value="">Type</option>
                <option value="">Sofa</option>
                <option value="">Table</option>
                <option value="">Chair</option>
                <option value="">Bead</option>
                <option value="">Lightning</option>
                <option value="">Decore</option>
              </select>

              {/* fourd selct  */}
              <select id="selectType" className={styles.selectInput}>
                <option value="">Type</option>
                <option value="">Sofa</option>
                <option value="">Table</option>
                <option value="">Chair</option>
                <option value="">Bead</option>
                <option value="">Lightning</option>
                <option value="">Decore</option>
              </select>
              </div>
              {/* start rang ---- */}
              <div className={styles}>
              <div className={`${styles.rangeSlider} mt-5`}>
      <div className={styles.title}>
        <h4>Price Range</h4>
      </div>

      <div className={styles.rangeItem}>
        {/* Placeholder for future slider */}
        <div className={styles.sliderMock}>
            <input type="range" id="volume" name="volume" min={100} max={2000} />
        </div>

        <div className={`d-flex align-items-center justify-content-between w-75 ${styles.priceWrap}`}>
          <p className={styles.label}>Price :</p>
          <p>200$</p>
           <p> <span className={styles.separator}>to</span></p> 
           <p>500$</p>
          </div>
        </div>

        {/* cheke div  */}
        <div className={`${styles.selectCheckbox} mt-3 mb-3`}>
      <div className={styles.smallTitle}>
        <h4>Latest Product</h4>
      </div>

      <label className={styles.container}>
        Any
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>

      <label className={styles.container}>
        Today
        <input type="checkbox" defaultChecked />
        <span className={styles.checkmark}></span>
      </label>

      <label className={styles.container}>
        Last 2 days
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>

      <label className={styles.container}>
        Last 5 days
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>

      <label className={styles.container}>
        Last 10 days
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>

      <label className={styles.container}>
        Last 15 days
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>
    </div>
      </div>
    </div>
              </div>
            
            <div className="col-md-9">
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
