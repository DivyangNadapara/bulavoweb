import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import page from "../assets/images/backgrounds/page-header-bg-img.jpg";
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer.jsx';

function Patner() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phoneNumber: '',
    expertise: '',
    aadharCard: null,
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
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
                <h2 className="page-header__title">Become a Partner</h2>
                <ul className="thm-breadcrumb list-unstyled">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Partner</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="partner-form">
        <div className="container">
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="expertise"
                placeholder="Which home appliance are you an expert in?"
                value={formData.expertise}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group file-upload">
              <label style={{paddingLeft:'14px'}}>Upload your Aadhar Card Photo</label>
              <input
                type="file"
                name="aadharCard"
                accept="image/*"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group file-upload">
              <label style={{paddingLeft:'14px'}}>Upload your Photo</label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn-submit">Submit</button>
          </form>
        </div>
      </section>

      <style jsx>{`
        .partner-form {
          padding: 50px 0;
          border-radius: 12px;
        }
        .form {
          max-width: 600px;
          margin: 0 auto;
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        .form-group {
          position: relative;
          margin-bottom: 30px;
        }
        .form-group input {
          width: 100%;
          padding: 15px;
          border: none;
          border-bottom: 2px solid #ddd;
          font-size: 16px;
          transition: border-color 0.3s ease;
        }
        .form-group input:focus {
          border-bottom: 2px solid #ff7e5f;
          outline: none;
        }
        .form-group label {
          margin-bottom: 5px;
          font-size: 14px;
          color: #555;
          display: block;
        }
        .file-upload {
          display: flex;
          flex-direction: column;
        }
        .btn-submit {
          background-color: black;
          color: white;
          padding: 15px 25px;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          font-size: 18px;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .btn-submit:hover {
          background-color: #feb47b;
          transform: scale(1.05);
        }
      `}</style>
      <Footer/>
    </div>
  );
}

export default Patner;
