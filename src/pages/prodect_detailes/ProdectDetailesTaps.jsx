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
          <div className="col-md-12">
            <ul className="nav nav-pills mb-5 d-flex flex-row" id="pills-tab" role="tablist">
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
                  class={`${styles.taps_nav_link} nav-link`}
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
              <div
                className="tab-pane fade show active"
                id="pills-Descreption"
                role="tabpanel"
                aria-labelledby="pills-Descreption-tab"
              >
                {/*Description */}
                <div className={styles.description_title}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse explicabo maiores sapiente facere odio, eos optio
                    repudiandae. Asperiores unde laboriosam consectetur. Ipsam
                    earum in numquam consectetur, culpa accusamus repellendus
                    ad, eos facere, atque quos. Possimus sequi officia laborum
                    delectus quia fuga ipsa. Eos, amet! Nihil laborum sunt
                    perspiciatis sequi quisquam et. Nam modi, maxime qui
                    corrupti neque facere tempora fuga error iusto deleniti
                    consectetur, hic tenetur officiis? Amet totam odio tenetur
                    ut? Quis at a aspernatur molestias sequi, tenetur veniam
                    unde facere tempore dolorum officiis voluptatum
                    perspiciatis. Blanditiis facilis minus voluptatibus rerum,
                    magnam quaerat, dolorum odit fuga sit, dicta saepe.
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quibusdam placeat nostrum similique commodi, quaerat nobis
                    voluptate pariatur ratione sed sunt eos facere dolore
                    officiis suscipit ullam in alias accusantium est iusto?sed
                    sunt eos facere dolore officiis suscipit ullam in alias
                    accusantium est Inventore perspiciatis, veritatis, vel sit
                    nihil aliquam perferendis reiciendis dolor ea officia
                    repellendus, nam voluptates similique quis fugiat a.
                  </p>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="pills-Specificatin"
                role="tabpanel"
                aria-labelledby="pills-Specificatin-tab"
              >
                {/* Specification */}
                <div className={styles.Specificatin_list}>
                  <ul className="list-unstyled">
                    <li>
                      <p>Width</p>
                      <p>128mm</p>
                    </li>
                    <li>
                      <p>Height</p>
                      <p>508mm</p>
                    </li>
                    <li>
                      <p>Depth</p>
                      <p>85mm</p>
                    </li>
                    <li>
                      <p>Weight</p>
                      <p>52gm</p>
                    </li>
                    <li>
                      <p>Quality checking</p>
                      <p>yes</p>
                    </li>
                    <li>
                      <p>Freshness Duration</p>
                      <p>03days</p>
                    </li>
                    <li>
                      <p>When packeting</p>
                      <p>Without touch of hand</p>
                    </li>
                    <li>
                      <p>Each Box contains</p>
                      <p>60pcs</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="pills-Comments"
                role="tabpanel"
                aria-labelledby="pills-Comments-tab"
              >
                {/* Comments */}
                <div className="row">
                  <div className="col-md-6">
                    <CommentsList productId={productId} />
                  </div>
                  <div className="col-md-6">
                    <ReviewForm productId={productId} />
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="pills-Reviews"
                role="tabpanel"
                aria-labelledby="pills-Reviews-tab"
              >
                {/*Reviews content */}

                <div className="row">
                  <div className="col-md-6">
                    <div className="row justify-content-between gy-3 align-items-center">
                      {/* Overall  */}
                      <div className="col-md-4">
                        <div className={styles.Overall}>
                        <h5>Overall</h5>
                        <h1>4.0</h1>
                        <small>03 Reviews</small>
                      </div>
                      </div>

                      <div className="col-md-5">
                        {/* stars - */}
                      <div className={styles.stars}>
                        {/* five stars  */}
                        <h5>Based on 3 Reviews</h5>
                        <span>5star</span>
                        <span><i className="fa-solid fa-star" style={{color: '#FFD43B'}}></i></span>
                        <span><i className="fa-solid fa-star" style={{color: '#FFD43B'}}></i></span>
                        <span><i className="fa-solid fa-star" style={{color: '#FFD43B'}}></i></span>
                        <span><i className="fa-solid fa-star" style={{color: '#FFD43B'}}></i></span>
                        <span><i className="fa-solid fa-star" style={{color: '#FFD43B'}}></i></span>
                        <span>01</span>
                        <br />
                        <span>4star</span>
                        <span><i className="fa-solid fa-star" style={{color: '#FFD43B'}}></i></span>
                        <span><i className="fa-solid fa-star" style={{color: '#FFD43B'}}></i></span>
                        <span><i className="fa-solid fa-star" style={{color: '#FFD43B'}}></i></span>
                        <span><i className="fa-solid fa-star" style={{color: '#FFD43B'}}></i></span>
                        <span className={styles.star_passif_color}><i class="fa-solid fa-star"></i></span>
                        <span>01</span>
                        <br />
                        <span>3star</span>
                        <span><i className="fa-solid fa-star" style={{color: '#FFD43B'}}></i></span>
                        <span><i className="fa-solid fa-star" style={{color: '#FFD43B'}}></i></span>
                        <span><i className="fa-solid fa-star" style={{color: '#FFD43B'}}></i></span>
                        <span className={styles.star_passif_color}><i class="fa-solid fa-star"></i></span>
                        <span className={styles.star_passif_color}><i class="fa-solid fa-star"></i></span>
                        <span>01</span>
                        <br />
                        <span>2star</span>
                        <span><i className="fa-solid fa-star" style={{color: '#FFD43B'}}></i></span>
                        <span><i className="fa-solid fa-star" style={{color: '#FFD43B'}}></i></span>
                        <span className={styles.star_passif_color}><i class="fa-solid fa-star"></i></span>
                        <span className={styles.star_passif_color}><i class="fa-solid fa-star"></i></span>
                        <span className={styles.star_passif_color}><i class="fa-solid fa-star"></i></span>
                        <span>01</span>
                        <br />
                        <span>1star</span>
                        <span><i className="fa-solid fa-star" style={{color: '#FFD43B'}}></i></span>
                        <span className={styles.star_passif_color}><i class="fa-solid fa-star"></i></span>
                        <span className={styles.star_passif_color}><i class="fa-solid fa-star"></i></span>
                        <span className={styles.star_passif_color}><i class="fa-solid fa-star"></i></span>
                        <span className={styles.star_passif_color}><i class="fa-solid fa-star"></i></span>
                        <span>01</span>
                      </div>
                      </div>
                      
                      {/* coment lists components  */}
                      <div className="mt-4">
                        <CommentsList productId={productId} />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                  <h4 className="mb-3">{form_name}</h4>
                  <ReviewForm productId={productId} form_name="Add your review for this product" 
                  
                  />
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
