import Header from "../components/Header.jsx";
import page from "../assets/images/backgrounds/page-header-bg-img.jpg";
import Footer from "../components/footer/Footer.jsx";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios'; // Import Axios

function blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://bulavo-backend1-kohl.vercel.app/allblog');
        setBlogs(response.data); // Set the fetched data into state
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

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
            {blogs.map((blog) => (
              <div className="blog-grid__single" key={blog.id}>
                <div className="blog-grid__img-box">
                  <div className="blog-grid__img">
                    <img src={blog.blogimage} alt={blog.blogtitle} />
                  </div>
                </div>
                <div className="blog-grid__content-box">
                  <div className="blog-grid__meta-box">
                    <div className="blog-grid__date">
                      <p>{new Date(blog.date).toLocaleDateString()}</p> {/* Assuming blog.date is in ISO format */}
                    </div>
                    <ul className="list-unstyled blog-grid__meta">
                      <li>
                        <a href="blog-details.html">By: {blog.author || 'Admin'}</a>
                      </li>
                      <li>
                        <a href="blog-details.html">{blog.category || 'General'}</a>
                      </li>
                    </ul>
                  </div>
                  <div className="blog-grid__content">
                    <h3 className="blog-grid__title">
                      <Link to={`/blog/${blog.id}`}>{blog.blogtitle}</Link> {/* Adjust link based on your routing */}
                    </h3>
                    <p className="blog-grid__text">{blog.blogdese}</p>
                    <div className="blog-grid__btn-box">
                      <Link to={`/blog/${blog.id}`} className="blog-grid__btn">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
                      Roof Renovation
                      <span className="fas fa-angle-right"></span>
                    </a>
                  </li>
                  <li>
                    <a href="blog-details.html">
                      Company Profile
                      <span className="fas fa-angle-right"></span>
                    </a>
                  </li>
                  <li>
                    <a href="blog-details.html">
                      Construction Projects
                      <span className="fas fa-angle-right"></span>
                    </a>
                  </li>
                  <li>
                    <a href="blog-details.html">
                      Roof Gutter
                      <span className="fas fa-angle-right"></span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* Add the recent news and tags as needed */}
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
