
import React from "react";
import styles from "./About.module.css";
function HeroAbout() {
    const pageTittle ='about'
  return (
    <section id="Hero" className="position-relative">
      <div
        className={`${styles.home_bg_container} container-fluid position-absolute `}
      ></div>

      <div
        className={`${styles.hero_bg_img} container-fluid position-relative ms-0  `}
      >
        <div className={`${styles.prodect_hero_header} position-abslute d-flex align-items-center h-100 p-5`}>
                <h1>{pageTittle}</h1>
        </div>
      </div>
    </section>
  );
}
export default HeroAbout;
