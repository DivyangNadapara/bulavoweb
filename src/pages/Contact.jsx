import React from "react";
import Header from "../components/Header.jsx";
import page from "../assets/images/backgrounds/page-header-bg-img.jpg";
import Footer from "../components/footer/Footer.jsx";

function Contact() {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        <section className="page-header">
          <div
            className="page-header__bg"
            style={{ backgroundImage: `url(${page})` }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="page-header__inner">
                  <h2 className="page-header__title">Contact</h2>
                  <ul className="thm-breadcrumb list-unstyled">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--Contact Page Start--> */}
        <section className="contact-page">
          <div className="container">
            <div className="section-title text-left">
              <span className="section-title__tagline">get in touch</span>
              <h2 className="section-title__title">Drop A Message to Us</h2>
              <p className="section-title__text">
                We’d love to hear from you! Whether you have questions, need
                assistance, or want to schedule a repair, our team at Bulavo is
                here to help. Simply drop us a message, and we’ll respond
                promptly. Your satisfaction is our priority!
              </p>
            </div>
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="contact-page__left">
                  <form
                    action="https://bracketweb.com/assimox-html/assets/inc/sendemail.php"
                    className="contact-page__form contact-form-validated"
                    novalidate="novalidate"
                  >
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-page__input-box">
                          <input
                            type="text"
                            placeholder="Your name"
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-page__input-box">
                          <input
                            type="text"
                            placeholder="Your name"
                            name="last-name"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-page__input-box">
                          <input
                            type="text"
                            placeholder="Phone Number"
                            name="number"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-page__input-box">
                          <input
                            type="email"
                            placeholder="Subject"
                            name="email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="contact-page__input-box text-message-box">
                          <textarea
                            name="message"
                            placeholder="Phone Number"
                          ></textarea>
                        </div>
                        <div className="contact-page__btn-box">
                          <button
                            type="submit"
                            className="thm-btn contact-page__btn"
                          >
                            Hire us now
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="contact-page__right">
                  <div className="contact-page__content">
                    <h3 className="contact-page__content-title">Bulavo Workshop</h3>
                    <p className="contact-page__text" />
                    GF-001 Mayuransh elanza shyamal cross road,
                    <br />
                    satellite Ahemedabad
                    <h4 className="contact-page__email">
                      <a href="mailto:contact@bulavo.com">contact@bulavo.com</a>
                    </h4>
                    <div className="contact-page__call-box">
                      <p className="contact-page__call-sub-title">Call Us at :</p>
                      <h4 className="contact-page__call-number">
                        <a
                          href="tel:+9328939099
"
                        >
                          +91 9328939099
                        </a>
                      </h4>
                      <p className="contact-page__call-time">
                        Mon - Sat.
                        <br /> 9.00 am to 5.30 pm
                        <br /> Sunday Close
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--Contact Page End--> */}
        <section className="contact-page-google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.7029856535178!2d72.52739537491159!3d23.0131055791804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84d7c64dd71b%3A0x927997b3140345cb!2sMauryansh%20Elanza!5e1!3m2!1sen!2sin!4v1729284879924!5m2!1sen!2sin"
            className="google-map__two"
            allowFullscreen
          ></iframe>
        </section>

        <Footer />
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
    </>
  );
}

export default Contact;
