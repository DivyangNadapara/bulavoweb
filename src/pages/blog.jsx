import Header from "../components/Header.jsx";
import page from "../assets/images/backgrounds/page-header-bg-img.jpg";
import Footer from "../components/footer/Footer.jsx";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'; // Import Axios

// Loading state

function Blog() {
  
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5; // Number of blogs per page
  const [loading, setLoading] = useState(true); 
  

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true); 
      try {
        const response = await axios.get('https://bulavo-backend1-kohl.vercel.app/blog/allblog');
        const blogsWithFormattedDates = response.data.map(blog => ({
          ...blog,
          formattedDate: new Date(blog.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }), // Customize the date format as needed
        }));
        setLoading(false); 
        setBlogs(blogsWithFormattedDates);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setLoading(false); // End loading
      }
    };
  
    fetchBlogs();
  }, []);
  
 
  // Calculate indices for current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  
  // Calculate total number of pages
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Function to change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
      
      <section className="blog-one">
          <div className="container">
            <div className="blog-one__top">
              <div className="row">
                <div className="col-xl-7 col-lg-6">
                  <div className="blog-one__top-left">
                    <div className="section-title text-left">
                      <span className="section-title__tagline">our blogs</span>
                      <h2 className="section-title__title">News & Articles</h2>
                    </div>
                  </div>
                </div>
           
              </div>
            </div>
            <div className="blog-one__bottom">
              <div className="row">
                         {currentBlogs.map((blog) => (
                <div
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="blog-one__single">
                    <div className="blog-one__img-box">
                      <div className="blog-one__img">
                        <img src={blog.blogimage} alt={blog.blogtitle} style={{height:'200px'}} />
                      </div>
                    </div>
                    <div className="blog-one__content-box">
                      <div className="blog-one__date">
                        <p>
                          <span>Admin</span>{blog.formattedDate}
                        </p>
                      </div>
                      <h3 className="blog-one__title">
                        <a href="#">
                        {blog.blogtitle}
                        </a>
                      </h3>
                      <span>{blog.blogdese}</span>
                    </div>
                  </div>
                </div>
                         ))}
             
              </div>
            </div>
          </div>
          <div className="blog-page__pagination">
                <ul className="pg-pagination list-unstyled">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index + 1} className={currentPage === index + 1 ? 'active' : ''}>
                      <a href="#" onClick={() => handlePageChange(index + 1)}>
                        {index + 1}
                      </a>
                    </li>
                  ))}
                  <li className="next">
                    <a href="#" onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))} aria-label="Next">
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
        </section>

  

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

export default Blog;
