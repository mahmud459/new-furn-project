import React from "react";
import styles from "../pages.module.css";
import ReviewForm from "./CommentsForm";
import CommentsList from "./CommentList";

function ProdactDatailesTabs({ productId, form_name }) {
  return (
    <section className={styles.tabs_section}>
      <div className="container">
        <div className="row">
          {/* nav tabs start -----------  */}
          <div className="col-md-12" data-aos="fade-up">
            <ul
              className="nav nav-pills mb-5 d-flex flex-row"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className={`${styles.taps_nav_link} nav-link active`}
                  id="pills-Descreption-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Descreption"
                  type="button"
                  role="tab"
                  aria-controls="pills-Descreption"
                  aria-selected="true"
                >
                  Descreption
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`${styles.taps_nav_link} nav-link`}
                  id="pills-Specificatin-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Specificatin"
                  type="button"
                  role="tab"
                  aria-controls="pills-Specificatin"
                  aria-selected="false"
                >
                  Specificatin
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`${styles.taps_nav_link} nav-link`}
                  id="pills-Comments-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Comments"
                  type="button"
                  role="tab"
                  aria-controls="pills-Comments"
                  aria-selected="false"
                >
                  Comments
                </button>
              </li>
              <li className="nav-item mt-sm-4 mt-md-0" role="presentation">
                <button
                  className={`${styles.taps_nav_link} nav-link`}
                  id="pills-Reviews-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Reviews"
                  type="button"
                  role="tab"
                  aria-controls="pills-Reviews"
                  aria-selected="false"
                >
                  Reviews
                </button>
              </li>
            </ul>

            <div className="tab-content" id="pills-tabContent">
              {/* Description */}
              <div
                className="tab-pane fade show active"
                id="pills-Descreption"
                role="tabpanel"
                aria-labelledby="pills-Descreption-tab"
                data-aos="fade-right"
              >
                <div className={styles.description_title}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit...
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit...
                  </p>
                </div>
              </div>

              {/* Specification */}
              <div
                className="tab-pane fade"
                id="pills-Specificatin"
                role="tabpanel"
                aria-labelledby="pills-Specificatin-tab"
                data-aos="fade-left"
              >
                <div className={styles.Specificatin_list}>
                  <ul className="list-unstyled">
                    <li><p>Width</p><p>128mm</p></li>
                    <li><p>Height</p><p>508mm</p></li>
                    <li><p>Depth</p><p>85mm</p></li>
                    <li><p>Weight</p><p>52gm</p></li>
                    <li><p>Quality checking</p><p>yes</p></li>
                    <li><p>Freshness Duration</p><p>03days</p></li>
                    <li><p>When packeting</p><p>Without touch of hand</p></li>
                    <li><p>Each Box contains</p><p>60pcs</p></li>
                  </ul>
                </div>
              </div>

              {/* Comments */}
              <div
                className="tab-pane fade"
                id="pills-Comments"
                role="tabpanel"
                aria-labelledby="pills-Comments-tab"
                data-aos="fade-up"
              >
                <div className="row">
                  <div className="col-md-6">
                    <CommentsList productId={productId} />
                  </div>
                  <div className="col-md-6">
                    <ReviewForm productId={productId} />
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div
                className="tab-pane fade"
                id="pills-Reviews"
                role="tabpanel"
                aria-labelledby="pills-Reviews-tab"
                data-aos="fade-up"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="row justify-content-between gy-3 align-items-center">
                      <div className="col-md-4">
                        <div className={styles.Overall}>
                          <h5>Overall</h5>
                          <h1>4.0</h1>
                          <small>03 Reviews</small>
                        </div>
                      </div>

                      <div className="col-md-5">
                        <div className={styles.stars}>
                          {/* Stars markup... (unchanged) */}
                        </div>
                      </div>

                      <div className="mt-4">
                        <CommentsList productId={productId} />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <h4 className="mb-3">{form_name}</h4>
                    <ReviewForm productId={productId} form_name="Add your review for this product" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProdactDatailesTabs;
