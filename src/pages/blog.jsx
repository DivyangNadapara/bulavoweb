import Header from "../components/Header.jsx";
import page from "../assets/images/backgrounds/page-header-bg-img.jpg";
import blog1 from "../assets/images/blog/blog-page-img-1.jpg";
import blog2 from "../assets/images/blog/blog-page-img-2.jpg";
import blog3 from "../assets/images/blog/blog-page-img-3.jpg";
import blog4 from "../assets/images/blog/blog-page-img-4.jpg";
import bloglp from "../assets/images/blog/lp-1-1.jpg";
import bloglp2 from "../assets/images/blog/lp-1-2.jpg";
import bloglp3 from "../assets/images/blog/lp-1-3.jpg";
import bloglp4 from "../assets/images/blog/lp-1-4.jpg";
import Footer from "../components/footer/Footer.jsx";
import { Link } from "react-router-dom";

function blog() {
  return (
    <div className="page-wrapper">
      <Header />
      {/* <!--Page Header Start--> */}
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: `url(${page})` }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-header__inner">
                <h2 className="page-header__title">Blog</h2>
                <ul className="thm-breadcrumb list-unstyled">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Page Header End--> */}
      {/* <!--Blog Page single Start--> */}
      <section className="blog-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              {/* <!--Blog Grid Single Start--> */}
              <div className="blog-grid__single">
                <div className="blog-grid__img-box">
                  <div className="blog-grid__img">
                    <img src={blog1} alt="blog1" />
                  </div>
                </div>
                <div className="blog-grid__content-box">
                  <div className="blog-grid__meta-box">
                    <div className="blog-grid__date">
                      <p>22 Feb. 2022</p>
                    </div>
                    <ul className="list-unstyled blog-grid__meta">
                      <li>
                        <a href="blog-details.html">By : Admin</a>
                      </li>
                      <li>
                        <a href="blog-details.html">repairing, maintenance</a>
                      </li>
                    </ul>
                  </div>
                  <div className="blog-grid__content">
                    <h3 className="blog-grid__title">
                      <Link to="/">
                        How to Hire a Machanic for Appliances Fix
                      </Link>
                    </h3>
                    <p className="blog-grid__text">
                      Our objective at assimox is to bring together our
                      visitor's societies and spirits with our own,
                      communicating enthusiasm and liberality in the food we
                      share.{" "}
                    </p>
                    <div className="blog-grid__btn-box">
                      <Link to="/blogs" className="blog-grid__btn">
                      View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--Blog Grid Single End-->
                        <!--Blog Grid Single Start--> */}
              <div className="blog-grid__single">
                <div className="blog-grid__img-box">
                  <div className="blog-grid__img">
                    <img src={blog2} alt="blog2" />
                  </div>
                </div>
                <div className="blog-grid__content-box">
                  <div className="blog-grid__meta-box">
                    <div className="blog-grid__date">
                      <p>22 Feb. 2022</p>
                    </div>
                    <ul className="list-unstyled blog-grid__meta">
                      <li>
                        <a href="blog-details.html">By : Admin</a>
                      </li>
                      <li>
                        <a href="blog-details.html">repairing, maintenance</a>
                      </li>
                    </ul>
                  </div>
                  <div className="blog-grid__content">
                    <h3 className="blog-grid__title">
                      <a href="blog-details.html">
                        spirits with our own, communicating
                      </a>
                    </h3>
                    <p className="blog-grid__text">
                      Our objective at assimox is to bring together our
                      visitor's societies and spirits with our own,
                      communicating enthusiasm and liberality in the food we
                      share.{" "}
                    </p>
                    <div className="blog-grid__btn-box">
                      <a href="blog-details.html" className="blog-grid__btn">
                      View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--Blog Grid Single End-->
                        <!--Blog Grid Single Start--> */}
              <div className="blog-grid__single">
                <div className="blog-grid__img-box">
                  <div className="blog-grid__img">
                    <img src={blog3} alt="blog3" />
                  </div>
                </div>
                <div className="blog-grid__content-box">
                  <div className="blog-grid__meta-box">
                    <div className="blog-grid__date">
                      <p>22 Feb. 2022</p>
                    </div>
                    <ul className="list-unstyled blog-grid__meta">
                      <li>
                        <a href="blog-details.html">By : Admin</a>
                      </li>
                      <li>
                        <a href="blog-details.html">repairing, maintenance</a>
                      </li>
                    </ul>
                  </div>
                  <div className="blog-grid__content">
                    <h3 className="blog-grid__title">
                      <a href="blog-details.html">
                        assimox is to bring together our visitor's
                      </a>
                    </h3>
                    <p className="blog-grid__text">
                      Our objective at assimox is to bring together our
                      visitor's societies and spirits with our own,
                      communicating enthusiasm and liberality in the food we
                      share.{" "}
                    </p>
                    <div className="blog-grid__btn-box">
                      <a href="blog-details.html" className="blog-grid__btn">
                      View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--Blog Grid Single End-->
                        <!--Blog Grid Single Start--> */}
              <div className="blog-grid__single">
                <div className="blog-grid__img-box">
                  <div className="blog-grid__img">
                    <img src={blog4} alt="blog4" />
                  </div>
                </div>
                <div className="blog-grid__content-box">
                  <div className="blog-grid__meta-box">
                    <div className="blog-grid__date">
                      <p>22 Feb. 2022</p>
                    </div>
                    <ul className="list-unstyled blog-grid__meta">
                      <li>
                        <a href="blog-details.html">By : Admin</a>
                      </li>
                      <li>
                        <a href="blog-details.html">repairing, maintenance</a>
                      </li>
                    </ul>
                  </div>
                  <div className="blog-grid__content">
                    <h3 className="blog-grid__title">
                      <a href="blog-details.html">
                        at assimox is to bring together our
                      </a>
                    </h3>
                    <p className="blog-grid__text">
                      Our objective at assimox is to bring together our
                      visitor's societies and spirits with our own,
                      communicating enthusiasm and liberality in the food we
                      share.{" "}
                    </p>
                    <div className="blog-grid__btn-box">
                      <a href="blog-details.html" className="blog-grid__btn">
                      View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--Blog Grid Single End--> */}
              <div className="blog-page__pagination">
                <ul className="pg-pagination list-unstyled">
                  <li className="count">
                    <a href="#">1</a>
                  </li>
                  <li className="count">
                    <a href="#">2</a>
                  </li>
                  <li className="count">
                    <a href="#">3</a>
                  </li>
                  <li className="next">
                    <a href="#" aria-label="Next">
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="sidebar">
                
                <div className="sidebar__single sidebar__category">
                  <h3 className="sidebar__title">Categories</h3>
                  <ul className="sidebar__category-list list-unstyled">
                    <li>
                      <a href="blog-details.html">
                        Home Construction
                        <span className="fas fa-angle-right"></span>
                      </a>
                    </li>
                    <li className="active">
                      <a href="blog-details.html">
                        General Construction
                        <span className="fas fa-angle-right"></span>
                      </a>
                    </li>
                    <li>
                      <a href="blog-details.html">
                        Roof Renovation<span className="fas fa-angle-right"></span>
                      </a>
                    </li>
                    <li>
                      <a href="blog-details.html">
                        Company Profile<span className="fas fa-angle-right"></span>
                      </a>
                    </li>
                    <li>
                      <a href="blog-details.html">
                        Constrcution Projects
                        <span className="fas fa-angle-right"></span>
                      </a>
                    </li>
                    <li>
                      <a href="blog-details.html">
                        Roof Gutter<span className="fas fa-angle-right"></span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="sidebar__single sidebar__post">
                  <h3 className="sidebar__title">Recent News</h3>
                  <ul className="sidebar__post-list list-unstyled">
                    <li>
                      <div className="sidebar__post-image">
                        <img src={bloglp} alt="bglp" />
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          <a href="blog-details.html">
                            Know the secreat of Repairing Work ...
                          </a>
                        </h3>
                        <p>22 Jan. 2022</p>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__post-image">
                        <img src={bloglp2} alt="bglp2" />
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          <a href="blog-details.html">
                            We Can Inspect Your Venting Path for Mold If Needed
                          </a>
                        </h3>
                        <p>22 Nov. 2021</p>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__post-image">
                        <img src={bloglp3} alt="bglp3" />
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          <a href="blog-details.html">
                            Our Customer enjoy in our work in real ...
                          </a>
                        </h3>
                        <p>22 Nov. 2021</p>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__post-image">
                        <img src={bloglp4} alt="bglp4" />
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          <a href="blog-details.html">
                            It is a long established fact that a reader
                          </a>
                        </h3>
                        <p>22 Nov. 2021</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="sidebar__single sidebar__tags">
                  <h3 className="sidebar__title">Tages</h3>
                  <div className="sidebar__tags-list">
                    <a href="#">Repairing</a>
                    <a href="#">Renovation</a>
                    <br />
                    <a href="#">Wooden</a>
                    <a href="#">Prices</a>
                    <br />
                    <a href="#">Tips</a>
                    <a href="#">Side Layer</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Blog Page single End--> */}
      <Footer />
      <a 
       aria-label="top"
        href="#"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          backgroundColor: "#00a7eb",
          color: "#fff",
          height: "50px",
          width: "50px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        <i className="fa fa-angle-up"></i>
      </a>
    </div>
  );
}

export default blog;
