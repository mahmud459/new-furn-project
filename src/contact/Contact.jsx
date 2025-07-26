
import "aos/dist/aos.css";
import styles from "./contact.module.css";
import Navbar from "../HomePage/Home/Navbar";
import HeroAbout from "../aboutPage/AboutHero";
import MapComponent from "./MapContent";
import ReviewForm from "../pages/prodect_detailes/CommentsForm";
import Footer from "../HomePage/home-footer/Footer";

function ContactUs() {

  return (
    <>
      <Navbar />
      <HeroAbout pageTitle="contact us" />

      <section className={styles.contact_section}>
        <div className="container" data-aos="fade-up">
          <MapComponent />
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-8" data-aos="fade-right">
              <div className="mt-5">
                <ReviewForm />
              </div>
            </div>

            <div className="col-md-4 mt-5 ps-5" data-aos="fade-left">
              <div className={styles.contactInfo} data-aos="zoom-in" data-aos-delay="100">
                <span className={styles.contactIcon}>
                  <i className="fa-solid fa-house"></i>
                </span>
                <div className={styles.contactBody}>
                  <h3>Buttonwood, California.</h3>
                  <p>Rosemead, CA 91770</p>
                </div>
              </div>

              <div className={styles.contactInfo} data-aos="zoom-in" data-aos-delay="200">
                <span className={styles.contactIcon}>
                  <i className="fa-solid fa-phone"></i>
                </span>
                <div className={styles.contactBody}>
                  <h3>+1 253 565 2365</h3>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </div>

              <div className={styles.contactInfo} data-aos="zoom-in" data-aos-delay="300">
                <span className={styles.contactIcon}>
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <div className={styles.contactBody}>
                  <h3>support@colorlib.com</h3>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ContactUs;
