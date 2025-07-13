import React from "react";
import styles from "../Home/home.module.css";
function Footer() {
  return (
    <section className={styles.footer_section}>
      <div className={`${styles.Footer}  `}>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-3 pt-5 ">
              <div className={styles.col_content}>
                <img
                  className="img-fluid "
                  src="	https://preview.colorlib.com/theme/furn/assets/img/icon/services1.svg"
                  alt=""
                />
                <h4>Fast & Free Delivery</h4>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="col-md-3 pt-5 ">
              <div className={styles.col_content}>
                <img
                  className="img-fluid "
                  src="	https://preview.colorlib.com/theme/furn/assets/img/icon/services2.svg"
                  alt=""
                />
                <h4>Secure Payment</h4>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="col-md-3 pt-5 ">
              <div className={styles.col_content}>
                <img
                  className="img-fluid "
                  src="	https://preview.colorlib.com/theme/furn/assets/img/icon/services3.svg"
                  alt=""
                />
                <h4>Money Back Guarantee</h4>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="col-md-3 pt-5 ">
              <div className={styles.col_content}>
                <img
                  className="img-fluid "
                  src="	https://preview.colorlib.com/theme/furn/assets/img/icon/services4.svg"
                  alt=""
                />
                <h4>24h sepport</h4>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>

        {/* footer bottum  */}
        <div className={styles.bottum_footer_bg}>
          <div className="container">
            <div className="row d-flex justify-content-around">
              <div className="col-md-4">
                <div className={styles.footer_about}>
                  <a href="index.html" className={styles.logo}>
                    <img
                      src="https://preview.colorlib.com/theme/furn/assets/img/logo/logo2_footer.png"
                      alt=""
                    />
                  </a>
                  <div className={styles.footer_contact}>
                    <p>A108 Adam Street</p>
                    <p>New York, NY 535022</p>
                    <p>
                      <strong>Phone:</strong> +1 5589 55488 55
                    </p>
                    <p>
                      <strong>Email:</strong> info@example.com
                    </p>
                  </div>
                  <div className={styles.social_links}>
                    <a href="#">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-square-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-2">
                <div className={styles.footer_links}>
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Terms of service</a>
                    </li>
                    <li>
                      <a href="#">Privacy policy</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-2">
                <div className={styles.footer_links}>
                  <h4>Our Services</h4>
                  <ul>
                    <li>
                      <a href="#">Web Design</a>
                    </li>
                    <li>
                      <a href="#">Web Development</a>
                    </li>
                    <li>
                      <a href="#">Product Management</a>
                    </li>
                    <li>
                      <a href="#">Marketing</a>
                    </li>
                    <li>
                      <a href="#">Graphic Design</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-2">
                <div className={styles.footer_links}>
                  <h4>Hic solutasetp</h4>
                  <ul>
                    <li>
                      <a href="#">Molestiae accusamus iure</a>
                    </li>
                    <li>
                      <a href="#">Excepturi dignissimos</a>
                    </li>
                    <li>
                      <a href="#">Suscipit distinctio</a>
                    </li>
                    <li>
                      <a href="#">Dilecta</a>
                    </li>
                    <li>
                      <a href="#">Sit quas consectetur</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* .copyright start ----------  */}
          <div className={`${styles.copyright} container  text-center mt-5`}>
            <p>
              © <strong className="sitename">FORN</strong> All Rights Reserved
            </p>
            <div className="credits">
              <span> Designed by:</span>
              <a href="https://mahmud459.github.io/Medilab-Hospital/">
                Mahmud Mari
              </a>
              <span>| Distributed by: </span>
              <a href="https://mahmud459.github.io/Medilab-Hospital/">
              Mahmud Mari 
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Footer;
