import Header from "../components/Header.jsx";
import page from "../assets/images/backgrounds/page-header-bg-img.jpg";
import service from "../assets/images/services/services-page-img-1.png";
import contact from "../assets/images/backgrounds/contact-bar-bg.jpg";
import bar from "../assets/images/icon/contact-bar-call-icon.png";
import { Link } from "react-router-dom";

import Footer from "../components/footer/Footer.jsx";
function Services() {
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
                <h2 className="page-header__title">Services</h2>
                <ul className="thm-breadcrumb list-unstyled">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Page Header End--> */}
      <section className="services-page">
        <div className="container">
          <div className="section-title text-left">
            <span className="section-title__tagline">our services</span>
            <h2 className="section-title__title">What We Do For Our Customers</h2>
            <p className="services-page__sec-title-text">
              At Bulavo, we prioritize our customers by providing reliable and
              comprehensive appliance repair services tailored to meet your
              needs. Our experienced technicians are dedicated to diagnosing and
              resolving issues with efficiency and expertise, ensuring minimal
              disruption to your daily life. We handle a wide range of
              appliances, from refrigerators and washing machines to ovens and
              dishwashers, delivering high-quality repairs that restore your
              appliances to optimal performance.
            </p>
          </div>
          <ul className="list-unstyled services-page__list-box">
            {/* <!--Services Page Single Start--> */}
            <li className="services-page__list">
              <div className="services-page__single">
                <div className="services-page__icon">
                  <span className="icon-refrigerator"></span>
                </div>
                <h3 className="services-page__title">
                  <a href="single-service.html">Refrigerator</a>
                </h3>
                <p className="services-page__text">
                  New normal that has done evolved from generation is on the
                  runway heading to wards a streamlined.
                </p>
                <div className="services-page__read-more">
                  <Link to="/singleservice">
                  View Details <span>+</span>
                  </Link>
                </div>
              </div>
            </li>
            {/* <!--Services Page Single End-->
                    <!--Services Page Single Start--> */}
            <li className="services-page__list">
              <div className="services-page__single">
                <div className="services-page__icon">
                  <span className="icon-washing-machine"></span>
                </div>
                <h3 className="services-page__title">
                  <a href="single-service.html">Washing Machine</a>
                </h3>
                <p className="services-page__text">
                  New normal that has done evolved from generation is on the
                  runway heading to wards a streamlined.
                </p>
                <div className="services-page__read-more">
                  <a href="single-service.html">
                  View Details <span>+</span>
                  </a>
                </div>
              </div>
            </li>
            {/* <!--Services Page Single End-->
                    <!--Services Page Single Start--> */}
            <li className="services-page__list">
              <div className="services-page__single">
                <div className="services-page__icon">
                  <span className="icon-oven"></span>
                </div>
                <h3 className="services-page__title">
                  <a href="single-service.html">Microwave & Oven</a>
                </h3>
                <p className="services-page__text">
                  New normal that has done evolved from generation is on the
                  runway heading to wards a streamlined.
                </p>
                <div className="services-page__read-more">
                  <a href="single-service.html">
                  View Details <span>+</span>
                  </a>
                </div>
              </div>
            </li>
            {/* <!--Services Page Single End-->
                    <!--Services Page Single Start--> */}
            <li className="services-page__list">
              <div className="services-page__single">
                <div className="services-page__icon">
                  <span className="icon-water-heater"></span>
                </div>
                <h3 className="services-page__title">
                  <a href="single-service.html">Water Heater</a>
                </h3>
                <p className="services-page__text">
                  New normal that has done evolved from generation is on the
                  runway heading to wards a streamlined.
                </p>
                <div className="services-page__read-more">
                  <a href="single-service.html">
                  View Details <span>+</span>
                  </a>
                </div>
              </div>
            </li>
            {/* <!--Services Page Single End-->
                    <!--Services Page Single Start--> */}
            <li className="services-page__list">
              <div className="services-page__single">
                <div className="services-page__icon">
                  <span className="icon-gas"></span>
                </div>
                <h3 className="services-page__title">
                  <a href="single-service.html">Cookware Stove</a>
                </h3>
                <p className="services-page__text">
                  New normal that has done evolved from generation is on the
                  runway heading to wards a streamlined.
                </p>
                <div className="services-page__read-more">
                  <a href="single-service.html">
                  View Details <span>+</span>
                  </a>
                </div>
              </div>
            </li>
            {/* <!--Services Page Single End-->
                    <!--Services Page Single Start--> */}
            <li className="services-page__list">
              <div className="services-page__single">
                <div className="services-page__icon">
                  <span className="icon-blender"></span>
                </div>
                <h3 className="services-page__title">
                  <a href="single-service.html">Juicer Mixer</a>
                </h3>
                <p className="services-page__text">
                  New normal that has done evolved from generation is on the
                  runway heading to wards a streamlined.
                </p>
                <div className="services-page__read-more">
                  <a href="single-service.html">
                  View Details <span>+</span>
                  </a>
                </div>
              </div>
            </li>
            {/* <!--Services Page Single End-->
                    <!--Services Page Single Start--> */}
            <li className="services-page__list">
              <div className="services-page__single">
                <div className="services-page__icon">
                  <span className="icon-ac"></span>
                </div>
                <h3 className="services-page__title">
                  <a href="single-service.html">Air Conditioner</a>
                </h3>
                <p className="services-page__text">
                  New normal that has done evolved from generation is on the
                  runway heading to wards a streamlined.
                </p>
                <div className="services-page__read-more">
                  <a href="single-service.html">
                  View Details <span>+</span>
                  </a>
                </div>
              </div>
            </li>
            {/* <!--Services Page Single End-->
                    <!--Services Page Single Start--> */}
            <li className="services-page__list">
              <div className="services-page__single">
                <div className="services-page__icon">
                  <span className="icon-plumbing"></span>
                </div>
                <h3 className="services-page__title">
                  <a href="single-service.html">Plumbing</a>
                </h3>
                <p className="services-page__text">
                  New normal that has done evolved from generation is on the
                  runway heading to wards a streamlined.
                </p>
                <div className="services-page__read-more">
                  <a href="single-service.html">
                  View Details <span>+</span>
                  </a>
                </div>
              </div>
            </li>
            {/* <!--Services Page Single End--> */}
          </ul>
          <div className="services-page__bottom">
            <div className="services-page__img float-bob-x">
              <img src={service} alt="service" />
            </div>
          </div>
        </div>
      </section>
      {/* <!--Services Page End--> */}
      {/* <!--Contact Bar Start--> */}
      <section className="contact-bar contact-bar-three">
        <div className="container">
          <div className="contact-bar__inne">
            <div
              className="contact-bar__bg"
              style={{ backgroundImage: `url(${contact})` }}
            ></div>
            <div className="contact-bar__left">
              <div className="contact-bar__left-icon">
                <span className="icon-diagnostic"></span>
              </div>
              <div className="contact-bar__left-content">
                <h3 className="contact-bar__title">
                  Do You Want Free Diagnostics ?
                </h3>
                <p className="contact-bar__text">
                  Get free diagnostics when ording online from our website
                </p>
              </div>
            </div>
            <div className="contact-bar__right">
              <div className="contact-bar__call">
                <div className="contact-bar__call-icon">
                  <img src={bar} alt="bar" />
                </div>
                <div className="contact-bar__call-content">
                  <h4 className="contact-bar__call-number">
                    <a
                      href="tel:9328939099
"
                    >
                      +91 9328939099
                    </a>
                  </h4>
                  <p className="contact-bar__call-time">
                    Monday - Saturday : 9.30 am - 6.00 pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Contact Bar End--> */}
      {/* <!--Site Footer Start--> */}
      <Footer />
      {/* <!--Site Footer End--> */}
      <a
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

export default Services;
