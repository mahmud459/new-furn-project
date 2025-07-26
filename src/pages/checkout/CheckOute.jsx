import styles from "../pages.module.css";
import Navbar from "../../HomePage/Home/Navbar";
import HeroAbout from "../../aboutPage/AboutHero";
import Footer from "../../HomePage/home-footer/Footer";


const Checkout = () => {
 

  return (
    <>
      <Navbar />
      <HeroAbout pageTitle="Checkout" />

      <section className={`${styles.checkoutArea} section-padding40`}>
        <div className="container">
          {/* Returning Customer */}
          <div className={styles.returningCustomer} data-aos="fade-up">
            <div className={styles.checkTitle}>
              <h2>
                Returning Customer? <a href="/login">Click here to login</a>
              </h2>
            </div>
            <p>
              If you have shopped with us before, please enter your details in
              the boxes below. If you are a new customer, please proceed to the
              Billing & Shipping section.
            </p>
            <form className="row g-4">
              {/* ... form inputs remain the same ... */}
            </form>
          </div>

          {/* Coupon Area */}
          <div className={styles.couponArea} data-aos="fade-up" data-aos-delay="100">
            <div className={styles.checkTitle}>
              <h2>
                Have a coupon? <a href="#">Click here to enter your code</a>
              </h2>
            </div>
            <div className={styles.couponForm}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter coupon code"
              />
              <a className={`btn ${styles.btn}`} href="#">
                Apply Coupon
              </a>
            </div>
          </div>

          {/* Billing Details */}
          <div className={styles.billingDetails}>
            <div className="row">
              {/* Left Column */}
              <div className="col-lg-8" data-aos="fade-right">
                <h3>Billing Details</h3>
                <form className="row g-3">
                <div className="col-md-6 form-group">
                  <input
                    id="First"
                    type="text"
                    className="form-control"
                    placeholder="First name"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    id="Last"
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                  />
                </div>
                <div className="col-md-12 form-group">
                  <input
                    id="Company"
                    type="text"
                    className="form-control"
                    placeholder="Company name"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    id="Phone"
                    type="text"
                    className="form-control"
                    placeholder="Phone number"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    id="Email"
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
                <div className="col-md-12 form-group">
                  <select id="selecct" className="form-control">
                    <option value={null}>Country</option>
                    <option value={null}>Country 1</option>
                    <option value={null}>Country 2</option>
                  </select>
                </div>
                <div className="col-md-12 form-group">
                  <input
                    id="Address"
                    type="text"
                    className="form-control"
                    placeholder="Address line 01"
                  />
                </div>
                <div className="col-md-12 form-group">
                  <input
                    id="line"
                    type="text"
                    className="form-control"
                    placeholder="Address line 02"
                  />
                </div>
                <div className="col-md-12 form-group">
                  <input
                    id="Town"
                    type="text"
                    className="form-control"
                    placeholder="Town / City"
                  />
                </div>
                <div className="col-md-12 form-group">
                  <select id="select2" className="form-control">
                    <option value={null}>District</option>
                    <option value={null}>District 1</option>
                    <option value={null}>District 2</option>
                  </select>
                </div>
                <div className="col-md-12 form-group">
                  <input
                    id="Postcode"
                    type="text"
                    className="form-control"
                    placeholder="Postcode / ZIP"
                  />
                </div>
                <div className="col-md-12 form-group">
                  <div className={styles.checkoutCap}>
                    <input type="checkbox" id="create-account" />
                    <label htmlFor="create-account">Create an account?</label>
                  </div>
                </div>
                <div className="col-md-12 form-group">
                  <div className={styles.createAccount}>
                    <h3>Shipping Details</h3>
                    <div className={styles.checkoutCap}>
                      <input type="checkbox" id="ship-different" />
                      <label htmlFor="ship-different">
                        Ship to a different address?
                      </label>
                    </div>
                  </div>
                  <textarea
                    className="form-control mt-4"
                    rows="3"
                    placeholder="Order Notes"
                  ></textarea>
                </div>
              </form>
            </div>

              {/* Right Column */}
              <div className="col-lg-4" data-aos="fade-left" data-aos-delay="200">
                <div className={styles.orderBox}>
                  <h2>Your Order</h2>
                  <ul className={styles.list}>
                  <li>
                    <span>Product</span>
                    <span>Total</span>
                  </li>
                  <li>
                    <span>Fresh Blackberry x 02</span>
                    <span>$720.00</span>
                  </li>
                  <li>
                    <span>Fresh Tomatoes x 02</span>
                    <span>$720.00</span>
                  </li>
                  <li>
                    <span>Fresh Broccoli x 02</span>
                    <span>$720.00</span>
                  </li>
                </ul>
                <ul className={`${styles.list} ${styles.list2}`}>
                  <li>
                    <span>Subtotal</span>
                    <span>$2160.00</span>
                  </li>
                  <li>
                    <span>Shipping</span>
                    <span>Flat rate: $50.00</span>
                  </li>
                  <li>
                    <span>Total</span>
                    <span>$2210.00</span>
                  </li>
                </ul>
                <div className={styles.paymentItem}>
                  <div className={styles.radioBtn}>
                    <input type="radio" id="check-payment" name="payment" />
                    <label htmlFor="check-payment">Check payments</label>
                    <div className={styles.check}></div>
                  </div>
                  <p className={styles.check_info_bg}>
                    Please send a check to Store Name, Store Street, Store Town,
                    Store State / County, Store Postcode.
                  </p>
                </div>
                <div className={`${styles.paymentItem} ${styles.active}`}>
                  <div className={styles.radioBtn}>
                    <input type="radio" id="paypal" name="payment" />
                    <label htmlFor="paypal">Paypal</label>
                    <img
                      src="https://preview.colorlib.com/theme/furn/assets/img/gallery/card.jpg"
                      alt="cards"
                    />
                    <div className={styles.check}></div>
                  </div>
                  <p className={styles.check_info_bg}>
                    Please send a check to Store Name, Store Street, Store Town,
                    Store State / County, Store Postcode.
                  </p>
                </div>
                <div
                  className={`${styles.createAccount} ${styles.checkoutCap}`}
                >
                  <input type="checkbox" id="terms" />
                  <label htmlFor="terms">
                    I've read and accept the{" "}
                    <a href="#">terms &amp; conditions*</a>
                  </label>
                </div>
                <a className={`btn w-100 mt-4 ${styles.btn}`} href="#">
                  Proceed to Paypal
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Checkout;
