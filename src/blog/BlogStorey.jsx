import React from "react";
import styles from "./blog.module.css";

function BlogStorey({ story_img }) {
  let stores_info_header = "Google inks pact for new 35-storey office";
  let stores_info_header_pargraf =
    "That dominion stars lights dominion divide years for fourth have dont stars is that he earth it first without heaven in place seed it second morning saying.";

  return (
    <div className={`pb-4 ${styles.blog_storey}`} data-aos="fade-up" data-aos-duration="800">
      <div className={`${styles.stores_img}`} data-aos="zoom-in" data-aos-duration="800">
        <img className="img-fluid" src={story_img} alt="storey img" />
        <div className={styles.small_div}>
          <h2>15</h2>
          <h6>JAN</h6>
        </div>
      </div>
      <div className="p-4">
        <div className={styles.stores_info} data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">
          <h4>
            <a href="#">{stores_info_header}</a>
          </h4>
          <p className="my-3">{stores_info_header_pargraf}</p>
        </div>
        <div className={styles.links} data-aos="fade-left" data-aos-duration="800" data-aos-delay="500">
          <a href="#">
            <span>
              <i className="fa-solid fa-user"></i>
            </span>
            <span className="ms-2">Travel, Lifestyle</span>
          </a>
          <span className="mx-3">|</span>
          <a href="#">
            <span>
              <i className="fa-solid fa-envelope-open-text"></i>
            </span>
            <span className="ms-2">03 Comments</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlogStorey;
