
import "aos/dist/aos.css";
import styles from "./LoginForm.module.css";
import Navbar from "../HomePage/Home/Navbar";
import Footer from "../HomePage/home-footer/Footer";

const LoginForm = () => {


  return (
    <>
      <Navbar />
      <div className={styles.loginFormArea}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8" data-aos="fade-up">
              <div className={styles.loginForm}>
                {/* Login Heading */}
                <div className={styles.loginHeading} data-aos="fade-right" data-aos-delay="200">
                  <span>Login</span>
                  <p>Enter Login details to get access</p>
                </div>

                {/* Input Fields ---- */}
                <div className={styles.inputBox} data-aos="fade-left" data-aos-delay="400">
                  <div className={styles.singleInputField}>
                    <label>Username or Email Address</label>
                    <input type="text" placeholder="Username / Email address" />
                  </div>

                  <div className={styles.singleInputField}>
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password" />
                  </div>

                  <div className={`${styles.singleInputField} ${styles.loginCheck}`}>
                    <div>
                      <input type="checkbox" id="keepLogged" name="keep-log" />
                      <label htmlFor="keepLogged">Keep me logged in</label>
                    </div>
                    <a href="#" className="f-right">
                      Forgot Password?
                    </a>
                  </div>
                </div>

                {/* Footer */}
                <div className={styles.loginFooter} data-aos="zoom-in" data-aos-delay="600">
                  <p>
                    Don't have an account? <a href="#">Sign Up</a> here
                  </p>
                  <button className={styles.submitBtn}>Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginForm;
