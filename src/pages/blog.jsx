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
  
<div class="x">
    <div class="container1">
  <div class="card">
    <div class="card__header">
      <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image" width="600"/>
    </div>
    <div class="card__body">
      <span class="tag tag-blue">Technology</span>
      <h4>What's new in 2022 Tech</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
    </div>
    <div class="card__footer">
      <div class="user">
        <img src="https://i.pravatar.cc/40?img=1" alt="user__image" class="user__image"/>
        <div class="user__info">
          <h5>Jane Doe</h5>
          <small>2h ago</small>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card__header">
      <img src="https://source.unsplash.com/600x400/?food" alt="card__image" class="card__image" width="600"/>
    </div>
    <div class="card__body">
      <span class="tag tag-brown">Food</span>
      <h4>Delicious Food</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
    </div>
    <div class="card__footer">
      <div class="user">
        <img src="https://i.pravatar.cc/40?img=2" alt="user__image" class="user__image"/>
        <div class="user__info">
          <h5>Jony Doe</h5>
          <small>Yesterday</small>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card__header">
      <img src="https://source.unsplash.com/600x400/?car,automobile" alt="card__image" class="card__image" width="600"/>
    </div>
    <div class="card__body">
      <span class="tag tag-red">Automobile</span>
      <h4>Race to your heart content</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
    </div>
    <div class="card__footer">
      <div class="user">
        <img src="https://i.pravatar.cc/40?img=3" alt="user__image" class="user__image"/>
        <div class="user__info">
          <h5>John Doe</h5>
          <small>2d ago</small>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<style jsx="true">{`


.x {
  font-family: "Quicksand", sans-serif;
  display: grid;
  place-items: center;
  background: #7f7fd5;
 
  box-sizing: border-box;
}

.container1 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin-block: 2rem;
  gap: 2rem;
}

img {
  max-width: 100%;
  display: block;
  object-fit: cover;
}

.card {
  display: flex;
  flex-direction: column;
  width: clamp(20rem, calc(20rem + 2vw), 22rem);
  overflow: hidden;
  box-shadow: 0 .1rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1em;
  background: #ECE9E6;


}



.card__body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
}


.tag {
  align-self: flex-start;
  padding: .25em .75em;
  border-radius: 1em;
  font-size: .75rem;
}

.tag + .tag {
  margin-left: .5em;
}

.tag-blue {
  background: #56CCF2;
background: linear-gradient(to bottom, #2F80ED, #56CCF2);
  color: #fafafa;
}

.tag-brown {
  background: #D1913C;
background: linear-gradient(to bottom, #FFD194, #D1913C);
  color: #fafafa;
}

.tag-red {
  background: #cb2d3e;
background: linear-gradient(to bottom, #ef473a, #cb2d3e);
  color: #fafafa;
}

.card__body h4 {
  font-size: 1.5rem;
  text-transform: capitalize;
}

.card__footer {
  display: flex;
  padding: 1rem;
  margin-top: auto;
}

.user {
  display: flex;
  gap: .5rem;
}

.user__image {
  border-radius: 50%;
}

.user__info > small {
  color: #666;
}

`}</style>
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
