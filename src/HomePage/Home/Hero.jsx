import React from "react";
import styles from "./home.module.css";
function Hero() {
  return (
    <section id="Hero" className="position-relative">
      <div
        className={`${styles.home_bg_container} container-fluid position-absolute `}
      ></div>

      <div
        className={`${styles.hero_bg_img} container-fluid position-relative ms-0  `}
      >
        <div className="container h-100 d-flex  align-items-center">
            <div className="row">
                <div className="col-lg-8 col-sm-6 ms-lg-5">
  <div className={` p-4 p-lg-5 ${styles.hero__caption}`}>
          <span>70% Sale off</span>
          <h1>
            Furniture at Cost
          </h1>
          <p
            data-animation="fadeInUp" >
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare, eros dolor interdum nulla.
          </p>

          <div
            className={styles.hero__btn}
            data-animation="fadeInUp">
            <a href="industries.html" className={`btn ${styles.hero_btn}`}>
              Discover More
            </a>
          </div>
        </div> 

                </div>
            </div>
         
        </div>
        
      </div>
    </section>
  );
}
export default Hero;
