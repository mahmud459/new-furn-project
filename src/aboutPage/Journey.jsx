import React from "react";
import styles from "./About.module.css";
function Journey() {
  let heading = "Journey start from";
  let headinng_info =
    "Lorem ipsum dolor, sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco consectetur adipisicing elit. Nihil nulla necessitatibus consequuntur fugiat iste fugit assumenda fuga voluptas nobis quis?";

  return (
    <>
      <section className={styles.second_container}>
        <div className={`${styles.section_heading} container`}>
          <div className="mx-auto w-50 text-center mb-5">
            <h1>{heading} </h1>
            <p> {headinng_info} </p>
          </div>
        </div>
        <div className="container">
          <div className={styles.row_img}>
            <div className={styles.rows_inside_img}>
              <div className={styles.row}></div>
              <div className={styles.row}></div>
              <div className={styles.row}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Journey;
