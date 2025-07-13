import React from 'react';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <div className={styles.loginFormArea}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className={styles.loginForm}>
              {/* Login Heading */}
              <div className={styles.loginHeading}>
                <span>Login</span>
                <p>Enter Login details to get access</p>
              </div>

              {/* Input Fields */}
              <div className={styles.inputBox}>
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
                  <a href="#" className="f-right">Forgot Password?</a>
                </div>
              </div>

              {/* Footer */}
              <div className={styles.loginFooter}>
                <p>Don't have an account? <a href="register.html">Sign Up</a> here</p>
                <button className={styles.submitBtn}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
