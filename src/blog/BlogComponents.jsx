import React from "react";
import styles from "./blog.module.css";
import Navbar from "../HomePage/Home/Navbar";
import HeroAbout from "../aboutPage/AboutHero";
import BlogStorey from "./BlogStorey";
import Footer from "../HomePage/home-footer/Footer";

function BlogComponents() {
  const posts = [
    {
      img: "https://preview.colorlib.com/theme/furn/assets/img/post/post_1.png",
      title: "From life was you fish...",
      date: "January 12, 2019",
      link: "blog_details.html",
    },
    {
      img: "https://preview.colorlib.com/theme/furn/assets/img/post/post_2.png",
      title: "The Amazing Hubble",
      date: "02 Hours ago",
      link: "blog_details.html",
    },
    {
      img: "https://preview.colorlib.com/theme/furn/assets/img/post/post_3.png",
      title: "Astronomy Or Astrology",
      date: "03 Hours ago",
      link: "blog_details.html",
    },
    {
      img: "https://preview.colorlib.com/theme/furn/assets/img/post/post_4.png",
      title: "Asteroids telescope",
      date: "01 Hours ago",
      link: "blog_details.html",
    },
  ];

  return (
    <>
      <Navbar />
      <HeroAbout pageTitle="blog" />
      <section className={styles.blog_content}>
        <div className="container">
          <div className="row justify-content-between g-4">
            <div className="col-md-7">
              <BlogStorey story_img="https://preview.colorlib.com/theme/furn/assets/img/blog/single_blog_1.png" />
            </div>
            <div className="col-md-5 px-5 text-center">
              <div className={styles.search_form}>
                <form role="search">
                  <div className={styles.input_wrapper}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input
                      id="input"
                      name="inputt"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </div>

                  <button
                    className={`${styles.search_btn} btn mt-3`}
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </div>

              {/* cotagory  */}
              <div className={styles.catagory_content}>
                <h4 className="mb-5 fw-bold">Category</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Resaurant food 37</a>
                  </li>
                  <li>
                    <a href="#">Travel news</a>
                  </li>
                  <li>
                    <a href="#">Modern technology</a>
                  </li>
                  <li>
                    <a href="#">Product</a>
                  </li>
                  <li>
                    <a href="#">Inspiration</a>
                  </li>
                  <li>
                    <a href="#">Health Care 27</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* second conrainer  */}
        <div className={`${styles.blog_containers} container`}>
          <div className="row">
            <div className="col-md-7">
              <BlogStorey story_img="https://preview.colorlib.com/theme/furn/assets/img/blog/single_blog_2.png" />
            </div>
            <div className="col-md-5 text-center">
              <div className={styles}>
                <aside className={styles.sidebarWidget}>
                  <h3 className={`mb-5 ${styles.widgetTitle}`}>Recent Post</h3>
                  {posts.map((post, index) => (
                    <div className={styles.postItem} key={index}>
                      <img src={post.img} alt="post" />
                      <div className={styles.mediaBody}>
                        <a href={post.link}>
                          <h3>{post.title}</h3>
                        </a>
                        <p>{post.date}</p>
                      </div>
                    </div>
                  ))}
                </aside>
              </div>
            </div>
          </div>
        </div>

        {/* third container  */}
        <div className={`${styles.blog_containers} container`}>
          <div className="row">
            <div className="col-md-7">
              <BlogStorey story_img="https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_1280.jpg" />
            </div>

            {/* left  */}
            <div className="col-md-5">
              <aside className={styles.tagWidget}>
                <h4 className={styles.widgetTitle}>Tag Clouds</h4>
                <ul className={styles.tagList}>
                  <li>
                    <a href="#">project</a>
                  </li>
                  <li>
                    <a href="#">love</a>
                  </li>
                  <li>
                    <a href="#">technology</a>
                  </li>
                  <li>
                    <a href="#">travel</a>
                  </li>
                  <li>
                    <a href="#">restaurant</a>
                  </li>
                  <li>
                    <a href="#">life style</a>
                  </li>
                  <li>
                    <a href="#">design</a>
                  </li>
                  <li>
                    <a href="#">illustration</a>
                  </li>
                </ul>
              </aside>
              {/* aside tow  */}
              <aside className={styles.instagramWidget}>
                <h4 className={styles.widgetTitle}>Instagram Feeds</h4>
                <ul className={styles.instagramRow}>
                  <li>
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="https://cdn.pixabay.com/photo/2016/11/19/12/15/bicycle-1838972_1280.jpg"
                        alt="instagram"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="https://cdn.pixabay.com/photo/2023/05/13/19/36/woman-7991234_1280.jpg"
                        alt="instagram"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="https://cdn.pixabay.com/photo/2016/11/21/18/07/automotive-1846910_1280.jpg"
                        alt="instagram"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="https://cdn.pixabay.com/photo/2014/12/08/14/23/pocket-watch-560937_1280.jpg"
                        alt="instagram"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="https://cdn.pixabay.com/photo/2015/04/07/14/27/camera-711025_1280.jpg"
                        alt="instagram"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="https://cdn.pixabay.com/photo/2020/07/06/13/21/mercedes-benz-5377019_1280.jpg"
                        alt="instagram"
                      />
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </div>

        {/* fourd container  */}
        <div className={`${styles.blog_containers} container`}>
          <div className="row">
            <div className="col-md-7">
              <BlogStorey story_img="https://cdn.pixabay.com/photo/2016/07/30/00/03/winding-road-1556177_1280.jpg" />
            </div>

            {/* left  */}
            <div className="col-md-5">
              <aside className={styles.newsletterWidget}>
                <h4 className={styles.widgetTitle}>Newsletter</h4>
                <form action="#">
                  <div className={styles.formGroup}>
                    <input
                      type="email"
                      className={styles.input}
                      placeholder="Enter email"
                      required
                    //   value={null}
                    //   onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button className={styles.subscribeBtn} type="submit">
                    Subscribe
                  </button>
                </form>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default BlogComponents;
