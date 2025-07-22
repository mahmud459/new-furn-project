import React from "react";

import styles from "./blog.module.css";

function BlogStorey({story_img}) {
  
  let stores_info_header = "Google inks pact for new 35-storey office";
  let stores_info_header_pargraf =
    "That dominion stars lights dominion divide years for fourth have dont stars is that he earth it first without heaven in place seed it second morning saying.";

  return (
    <div className={`pb-4 ${styles.blog_storey}`}>
      <div className={`${styles.stores_img}`}>
        <img className="img-fluid" src={story_img} alt="storey img" />
        <div className={styles.small_div}>
          <h2>15</h2>
          <h6>JAN</h6>
        </div>
      </div>
      <div className="p-4">
          <div className={styles.stores_info}>
        <h4>
          <a href="#">{stores_info_header}</a>
        </h4>
        <p className="my-3">{stores_info_header_pargraf}</p>
      </div>
      <div className={styles.links}>
        <a href="#">
          <span>
            <i className="fa-solid fa-user"></i>
          </span>
          <span className="ms-2">Travel, Lifestyle</span>
        </a>
        <span className="mx-3">|</span>
        <a href="#">
          <span>
            {" "}
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
