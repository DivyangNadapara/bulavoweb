/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  
import logo from '../assets/img/logo.png';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false); // State for sticky header

  const menuItems = [
    { name: 'Home', path: '/' },           
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Become a Patner', path: '/patner' }
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Handle scroll event to set sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`main-header ${isSticky ? 'sticky' : ''}`} style={{
        position: isSticky ? 'fixed' : 'absolute', // Set header position
        top: 0,
        left: 0,
        width: '100%', // Make it full width
        background: isSticky ? 'black' : 'transparent', // Change background on scroll
        transition: 'background 0.3s ease, top 0.3s ease', 
        zIndex: 1000, // Ensure it's above other content
        marginTop: isSticky ? '-32px' : '',

      }}>
        <nav className="main-menu">
          <div className="main-menu__wrapper">
            <div className="main-menu__wrapper-inner">
              <div className="main-menu__left">
                <div className="main-menu__logo">
                  <Link to="/">
                    <img src={logo} alt="Logo" />
                  </Link>
                </div>
                <div className="main-menu__main-menu-box">
                  <div className="main-menu__main-menu-box-inner">
                    <a href="#" className="mobile-nav__toggler" onClick={toggleSidebar}>
                      <i className="fa fa-bars"></i>
                    </a>
                    <ul className="main-menu__list">
                      {menuItems.map((item, index) => (
                        <li className="dropdown" key={index}>
                          <Link to={item.path}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div  className="main-menu__right">
                <div style ={{backgroundColor:'white'} } className="main-menu__call">
                  <div   className="main-menu__call-icon">
                    <span className="icon-telephone"></span>
                  </div>
                  <div className="main-menu__call-content">
                    <p className="main-menu__call-sub-title">Need help? Talk to an expert</p>
                    <h4 className="main-menu__call-number">
                      <a href="tel:+9328939099">+91 9328939099</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="stricky-header stricked-menu main-menu main-header--dark">
          <div className="sticky-header__content"></div>
        </div>
      </header>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100%',
          width: '300px', // Adjust width as needed
          background: '#0b1a3a', // Sidebar background color
          color: 'white', // Text color
          padding: '20px',
          transition: 'transform 0.3s ease',
          zIndex: 1000 // Ensure it's above other content
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/">
              <img src={logo} alt="Logo" style={{ width: '80%', marginBottom: '20px' }} />
            </Link>
            <button 
              onClick={toggleSidebar} 
              style={{
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '20px',
                cursor: 'pointer'
              }}>
              x
            </button>
          </div>
          
          <ul style={{
            listStyle: 'none',
            padding: 0,
            marginTop: '20px'
          }}>
            {menuItems.map((item, index) => (
              <li key={index} style={{ margin: '15px 0', borderBottom: '1px solid #555', paddingBottom: '10px', position: 'relative' }}>
                <Link to={item.path} 
                      onClick={toggleSidebar} 
                      style={{
                        padding: '2px',
                        color: 'white',
                        textDecoration: 'none',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingRight: '5px' // Add space for the square box
                      }}>
                  {item.name}
                  <span style={{
                    display: 'inline-block',
                    width: '30px',
                    height: '30px',
                    color: 'white',
                    borderRadius: '2px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: '10px',
                    backgroundColor: '#f1d551'
                  }}>&gt;</span>
                </Link>
              </li>
            ))}
          </ul>

          <div style={{
            marginTop: 'auto',
            paddingTop: '10px', // Add padding for space above contact info
          }}>
            <p style={{ color: 'white', marginBottom: '10px' }}>Phone: <a href="tel:+9328939099" style={{ color: 'white' }}>+91 9328939099</a></p>
            <p style={{ color: 'white', marginBottom: '10px' }}>Email: <a href="mailto:info@example.com" style={{ color: 'white' }}>info@example.com</a></p>
            <a href="#" style={{ marginRight: '10px' }}>
              <i className="fab fa-instagram" style={{ color: 'red' }}></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook-f" style={{ color: 'red' }}></i>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
