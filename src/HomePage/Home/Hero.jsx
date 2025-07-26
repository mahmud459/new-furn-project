import React from "react";
import styles from "./home.module.css";

function Hero() {
  return (
    <section id="Hero" className="position-relative">
      <div
        className={`${styles.home_bg_container} container-fluid position-absolute `}
      ></div>

      <div
        className={`${styles.hero_bg_img} container-fluid position-relative ms-0`}
      >
        <div className="container h-100 d-flex align-items-center">
          <div className="row">
            <div className="col-lg-8 col-sm-6 ms-lg-5">
              <div
                className={`p-4 p-lg-5 ${styles.hero__caption}`}
                data-aos="fade-right"
              >
                <span data-aos="zoom-in" data-aos-delay="100">70% Sale off</span>

                <h1 data-aos="fade-up" data-aos-delay="200">
                  Furniture at Cost
                </h1>

                <p data-aos="fade" data-aos-delay="300">
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </p>

                <div
                  className={styles.hero__btn}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
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
