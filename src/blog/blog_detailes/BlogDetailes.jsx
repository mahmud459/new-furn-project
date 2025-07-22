import React from "react";
import styles from "../blog.module.css";
import Navbar from "../../HomePage/Home/Navbar";
import HeroAbout from "../../aboutPage/AboutHero";
import ReviewForm from "../../pages/prodect_detailes/CommentsForm";
import Footer from "../../HomePage/home-footer/Footer";

function BlogDetailes({ story_img }) {
  story_img =
    "https://cdn.pixabay.com/photo/2018/05/09/08/15/train-3384786_1280.jpg";
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
      <HeroAbout pageTitle="blog detailes" />
      <section className={styles.blog_detailes}>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className={`pb-4 ${styles.blog_storey}`}>
                <div className={`${styles.stores_img}`}>
                  <img className="img-fluid" src={story_img} alt="storey img" />
                  <div className={styles.small_div}>
                    <h2>15</h2>
                    <h6>JAN</h6>
                  </div>
                </div>
                <div className="p-4">
                  <div className={styles.stores_info}>
                    <h4>
                      <a href="#">
                        Second divided from form fish beast made every of seas
                        all gathered us saying he our
                      </a>
                    </h4>
                    <div className={styles.links}>
                      <a href="#">
                        <span>
                          <i className="fa-solid fa-user"></i>
                        </span>
                        <span className="ms-2">Travel, Lifestyle</span>
                      </a>
                      <span className="mx-3">|</span>
                      <a href="#">
                        <span>
                          {" "}
                          <i className="fa-solid fa-envelope-open-text"></i>
                        </span>
                        <span className="ms-2">03 Comments</span>
                      </a>
                    </div>
                    <p className="my-5">
                      MCSE boot camps have its supporters and its detractors.
                      Some people do not understand why you should have to spend
                      money on boot camp when you can get the MCSE study
                      materials yourself at a fraction of the camp price.
                      However, who has the willpower
                    </p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Vitae, consectetur incidunt? Reprehenderit eaque magni
                      error doloribus. Sequi odit voluptatibus praesentium
                      possimus nihil, porro vero blanditiis? Explicabo, quisquam
                      voluptatem nihil dolorum tempore necessitatibus, magni
                      laudantium? Possimus qui at veniam laborum, similique sit
                      ad, sint, pariatur iusto architecto voluptas.
                    </p>

                    <div className={styles.boot_camp}>
                      <div className={styles.insid_boot_camp}>
                        <p>
                          MCSE boot camps have its supporters and its
                          detractors. Some people do not understand why you
                          should have to spend money on boot camp when you can
                          get the MCSE study materials yourself at a fraction of
                          the camp price. However, who has the willpower to
                          actually sit through a self-imposed MCSE training.
                        </p>
                      </div>
                    </div>

                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium nam unde quibusdam fuga velit sed voluptatibus,
                      dolore cumque repudiandae vitae recusandae eum totam
                      veniam consectetur officiis blanditiis obcaecati nisi
                      optio.
                    </p>
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Vel aliquam optio unde, recusandae autem quis nostrum
                      impedit sint ab nam vero sunt repudiandae cumque a
                      voluptas illo esse odio deleniti hic, reprehenderit ex.
                      Repudiandae, ab maxime error explicabo assumenda quis!
                      Incidunt illum veniam molestiae eos accusantium neque
                      explicabo at labore.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-md-12">
                  <div className={styles.social_links}>
                    <div>
                      <span>
                        <i className="fa-solid fa-heart"></i>
                      </span>
                      <span className="ms-2">Lily and 4 people like this</span>
                    </div>
                    {/* sochial left  */}
                    <div className={styles.sochial_left}>
                      <span>
                        {" "}
                        <a href="#">
                          <i className="fa-brands fa-facebook"></i>
                        </a>
                      </span>
                      <span>
                        {" "}
                        <a href="#">
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>
                      </span>
                      <span>
                        {" "}
                        <a href="#">
                          <i className="fa-brands fa-dribbble"></i>
                        </a>
                      </span>
                      <span>
                        {" "}
                        <a href="#">
                          <i className="fa-brands fa-behance"></i>
                        </a>
                      </span>
                    </div>

                    {/* secod row  */}
                    {/* ------  */}
                  </div>
                  <hr />
                  {/* comments first */}
                  <div className={styles.blogAuthor}>
                    <div className={`media d-flex align-items-center`}>
                      <img
                        src="https://preview.colorlib.com/theme/furn/assets/img/blog/author.png"
                        alt="Author"
                        className={styles.authorImg}
                      />
                      <div className="media-body">
                        <a href="#">
                          <h4 className={styles.authorName}>Harvard Milan</h4>
                        </a>
                        <p className={styles.authorDesc}>
                          Second divided from form fish beast made. Every of
                          seas all gathered use saying you're, he our dominion
                          twon Second divided from
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className={styles}>
                    <h4 className="mb-5">05 Comments</h4>
                    <div className={styles.blogAuthor}>
                      <div className={`media d-flex align-items-center`}>
                        <img
                          src="https://preview.colorlib.com/theme/furn/assets/img/blog/author.png"
                          alt="Author"
                          className={styles.authorImg}
                        />
                        <div className="media-body">
                          <a href="#">
                            <h4 className={styles.authorName}>Harvard Milan</h4>
                          </a>
                          <p className={styles.authorDesc}>
                            Second divided from form fish beast made. Every of
                            seas all gathered use saying you're, he our dominion
                            twon Second divided from
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* secund commit  */}
                    <div className={styles.blogAuthor}>
                      <div className={`media d-flex align-items-center`}>
                        <img
                          src="https://preview.colorlib.com/theme/furn/assets/img/blog/author.png"
                          alt="Author"
                          className={styles.authorImg}
                        />
                        <div className="media-body">
                          <a href="#">
                            <h4 className={styles.authorName}>Harvard Milan</h4>
                          </a>
                          <p className={styles.authorDesc}>
                            Second divided from form fish beast made. Every of
                            seas all gathered use saying you're, he our dominion
                            twon Second divided from
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* third comment  */}
                    <div className={styles.blogAuthor}>
                      <div className={`media d-flex align-items-center`}>
                        <img
                          src="https://preview.colorlib.com/theme/furn/assets/img/blog/author.png"
                          alt="Author"
                          className={styles.authorImg}
                        />
                        <div className="media-body">
                          <a href="#">
                            <h4 className={styles.authorName}>Harvard Milan</h4>
                          </a>
                          <p className={styles.authorDesc}>
                            Second divided from form fish beast made. Every of
                            seas all gathered use saying you're, he our dominion
                            twon Second divided from
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* ford comment  */}
                    <div className={styles.blogAuthor}>
                      <div className={`media d-flex align-items-center`}>
                        <img
                          src="https://preview.colorlib.com/theme/furn/assets/img/blog/author.png"
                          alt="Author"
                          className={styles.authorImg}
                        />
                        <div className="media-body">
                          <a href="#">
                            <h4 className={styles.authorName}>Harvard Milan</h4>
                          </a>
                          <p className={styles.authorDesc}>
                            Second divided from form fish beast made. Every of
                            seas all gathered use saying you're, he our dominion
                            twon Second divided from
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* comment form  */}
                    <div className="mt-5">
                      <ReviewForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* left col in page  */}
            <div className="col-md-4 text-center">
              {/* first  */}
              <div className={`${styles.search_form} mt-3`}>
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
                    className={`${styles.search_btn} btn mt-3 `}
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </div>

              {/* second ----- */}
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

              {/* third----  */}
              <div className={`${styles}`}>
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

              {/* ford ----  */}
              <aside className={`mt-5 ${styles.tagWidget}`}>
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

              {/* fivee-----  */}
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

              {/* six ---  */}
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

export default BlogDetailes;
