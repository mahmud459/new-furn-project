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
                  {/* ... all input fields remain the same ... */}
                </form>
              </div>

              {/* Right Column */}
              <div className="col-lg-4" data-aos="fade-left" data-aos-delay="200">
                <div className={styles.orderBox}>
                  <h2>Your Order</h2>
                  {/* ... order summary remains ... */}
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
