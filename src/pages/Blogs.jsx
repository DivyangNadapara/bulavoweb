import React from 'react'
import Header from '../components/Header.jsx';
import page from "../assets/images/backgrounds/page-header-bg-img.jpg";
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import bd1 from '../assets/images/blog/blog-details-img-1.jpg';
import bc from '../assets/images/blog/comment-1-1.jpg';
import bc2 from '../assets/images/blog/comment-1-2.jpg';
import bc3 from '../assets/images/blog/comment-1-3.jpg';
import bc4 from '../assets/images/blog/comment-1-4.jpg';
import bc5 from '../assets/images/blog/comment-1-5.jpg';
import bl from '../assets/images/blog/lp-1-1.jpg';
import bl2 from '../assets/images/blog/lp-1-2.jpg';
import bl3 from '../assets/images/blog/lp-1-3.jpg';
import bl4 from '../assets/images/blog/lp-1-4.jpg';

function Blogs() {
  return (
    <div className="page-wrapper">
      <Header/>
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: `url(${page})` }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-header__inner">
                <h2 className="page-header__title">Blog Details</h2>
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
      <section class="blog-details">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 col-lg-7">
                        <div class="blog-details__left">
                            <div class="blog-details__top">
                                <div class="blog-details__img-box">
                                    <div class="blog-details__img">
                                        <img src={bd1} alt="bl"/>
                                    </div>
                                </div>
                            </div>
                            <div class="blog-details__bottom">
                                <div class="blog-details__meta-box">
                                    <div class="blog-details__date">
                                        <p>22 Feb. 2022</p>
                                    </div>
                                    <ul class="list-unstyled blog-details__meta">
                                        <li><a href="blog-details.html">By : Admin</a></li>
                                        <li><a href="blog-details.html">repairing, maintenance</a></li>
                                        <li><a href="blog-details.html">Comments: 6</a></li>
                                    </ul>
                                </div>
                                <div class="blog-detals__content-box">
                                    <h4 class="blog-details__title-1">How to Hire a Machanic for Appliances Fix</h4>
                                    <p class="blog-details__text-1">Our objective at assimox is to bring together our
                                        visitor's societies and spirits with our own, communicating enthusiasm and
                                        liberality in the food we share. assimox is to bring together our visitor's
                                        societies and spirits with our own, communicating enthusiasm and liberality in
                                        the food we share.</p>
                                    <div class="blog-detals__two-colum-box">
                                        <h4 class="blog-detals__two-colum-box-title">Two Column Text Sample</h4>
                                        <ul class="blog-detals__two-colum-text list-unstyled">
                                            <li>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                                impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                                                assumenda est.</li>
                                            <li>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                                impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                                                assumenda est.</li>
                                        </ul>
                                    </div>
                                    <p class="blog-details__text-2">Here is main text quis nostrud exercitation ullamco
                                        laboris nisi here is itealic text ut aliquip ex ea commodo consequat. Duis aute
                                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                        nulla rure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat <a href="#">here is link</a>
                                        cupidatat non proident, sunt in culpa.</p>
                                </div>
                                <div class="comment-one-box">
                                    <h3 class="comment-one__title">Comments 4</h3>
                                    <div class="comment-one">
                                        <div class="comment-one__single">
                                            <div class="comment-one__image">
                                               
                                                <img src={bc} alt="bl"/>
                                            </div>
                                            <div class="comment-one__content">
                                                <h3>Michale</h3>
                                                <p>we denounce with righteous indignation and dislike men who are so
                                                    beguiled and demoralized by the charms of pleasure of the moment.
                                                </p>
                                                <h4>24 Jan. 2022 | <a href="blog-details.html">Reply</a></h4>
                                            </div>
                                        </div>
                                        <div class="comment-one__single comment-one__single-2">
                                            <div class="comment-one__image">
                                               
                                                <img src={bc2} alt="bl"/>
                                            </div>
                                            <div class="comment-one__content">
                                                <h3>Smith</h3>
                                                <p>we denounce with righteous indignation and dislike men who are so
                                                    beguiled and demoralized by the charms of pleasure of the moment.
                                                </p>
                                                <h4>24 Jan. 2022 | <a href="blog-details.html">Reply</a></h4>
                                            </div>
                                        </div>
                                        <div class="comment-one__single border-none">
                                            <div class="comment-one__image">
                                               
                                                <img src={bc3} alt="bl"/>
                                            </div>
                                            <div class="comment-one__content">
                                                <h3>Martin</h3>
                                                <p>we denounce with righteous indignation and dislike men who are so
                                                    beguiled and demoralized by the charms of pleasure of the moment.
                                                </p>
                                                <h4>24 Jan. 2022 | <a href="blog-details.html">Reply</a></h4>
                                            </div>
                                        </div>
                                        <div class="comment-one__single comment-one__single--four">
                                            <div class="comment-one__image">
                                               
                                                <img src={bc4} alt="bl"/>
                                            </div>
                                            <div class="comment-one__content">
                                                <h3>Jessica</h3>
                                                <p>we denounce with righteous indignation and dislike men who are so
                                                    beguiled and demoralized by the charms of pleasure of the moment.
                                                </p>
                                                <h4>24 Jan. 2022 | <a href="blog-details.html">Reply</a></h4>
                                            </div>
                                        </div>
                                        <div class="comment-one__single comment-one__single-5">
                                            <div class="comment-one__image">
                                               
                                                <img src={bc5} alt="bl"/>
                                            </div>
                                            <div class="comment-one__content">
                                                <h3>Piter</h3>
                                                <p>we denounce with righteous indignation and dislike men who are so
                                                    beguiled and demoralized by the charms of pleasure of the moment.
                                                </p>
                                                <h4>24 Jan. 2022 | <a href="blog-details.html">Reply</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="comment-form">
                                    <h3 class="comment-form__title">Leave a Comment</h3>
                                    <form action="https://bracketweb.com/assimox-html/assets/inc/sendemail.php"
                                        class="comment-one__form contact-form-validated" novalidate="novalidate">
                                        <div class="row">
                                            <div class="col-xl-6">
                                                <div class="comment-form__input-box">
                                                    <input type="text" placeholder="Your name" name="name"/>
                                                </div>
                                            </div>
                                            <div class="col-xl-6">
                                                <div class="comment-form__input-box">
                                                    <input type="email" placeholder="Email address" name="email"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xl-12">
                                                <div class="comment-form__input-box text-message-box">
                                                    <textarea name="message" placeholder="Write message"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div class="comment-form__btn-box">
                                        <button type="submit" class="thm-btn comment-form__btn">submit now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-5">
                        <div class="sidebar">
                            <div class="sidebar__single sidebar__search">
                                <form action="#" class="sidebar__search-form">
                                    <input type="search" placeholder="Enter Search Keywords"/>
                                    <button type="submit"><i class="icon-magnifying-glass"></i></button>
                                </form>
                            </div>
                            <div class="sidebar__single sidebar__category">
                                <h3 class="sidebar__title">Categories</h3>
                                <ul class="sidebar__category-list list-unstyled">
                                    <li><a href="blog-details.html">Home Construction<span
                                                class="fas fa-angle-right"></span></a>
                                    </li>
                                    <li class="active"><a href="blog-details.html">General Construction<span
                                                class="fas fa-angle-right"></span></a></li>
                                    <li><a href="blog-details.html">Roof Renovation<span
                                                class="fas fa-angle-right"></span></a>
                                    </li>
                                    <li><a href="blog-details.html">Company Profile<span
                                                class="fas fa-angle-right"></span></a>
                                    </li>
                                    <li><a href="blog-details.html">Constrcution Projects<span
                                                class="fas fa-angle-right"></span></a>
                                    </li>
                                    <li><a href="blog-details.html">Roof Gutter<span
                                                class="fas fa-angle-right"></span></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="sidebar__single sidebar__post">
                                <h3 class="sidebar__title">Recent News</h3>
                                <ul class="sidebar__post-list list-unstyled">
                                    <li>
                                        <div class="sidebar__post-image">
                                            
                                            <img src={bl} alt="bl" />
                                        </div>
                                        <div class="sidebar__post-content">
                                            <h3><a href="blog-details.html">Know the secreat of Repairing Work ...</a>
                                            </h3>
                                            <p>22 Jan. 2022</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="sidebar__post-image">

                                            <img src={bl2} alt="bl" />
                                        </div>
                                        <div class="sidebar__post-content">
                                            <h3><a href="blog-details.html">We Can Inspect Your Venting Path for Mold If
                                                    Needed</a></h3>
                                            <p>22 Nov. 2021</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="sidebar__post-image">
                                           
                                            <img src={bl3} alt="bl" />
                                        </div>
                                        <div class="sidebar__post-content">
                                            <h3><a href="blog-details.html">Our Customer enjoy in our work in real
                                                    ...</a></h3>
                                            <p>22 Nov. 2021</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="sidebar__post-image">
                                            <img src={bl4} alt="bl" />
                                        </div>
                                        <div class="sidebar__post-content">
                                            <h3><a href="blog-details.html">It is a long established fact that a
                                                    reader</a></h3>
                                            <p>22 Nov. 2021</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="sidebar__single sidebar__tags">
                                <h3 class="sidebar__title">Tages</h3>
                                <div class="sidebar__tags-list">
                                    <a href="#">Repairing</a>
                                    <a href="#">Renovation</a><br/>
                                    <a href="#">Wooden</a>
                                    <a href="#">Prices</a><br/>
                                    <a href="#">Tips</a>
                                    <a href="#">Side Layer</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
      </div>
  )
}

export default Blogs