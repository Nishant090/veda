import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 col-12">
              <h3><span>VEDA</span> CLONE</h3>
              <p>Stay ahead of the curve with our latest business resources. Don't miss any updates on the market's most innovative tools and solutions.</p>
              <div className="footer-icons">
                <a href="https://www.facebook.com/vedaapp" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com/veda_app" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://www.instagram.com/veda_app/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com/company/veda-app/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 col-12">
              <h5>Company</h5>
              <ul>
                <li><a href="/">About</a></li>
                <li><a href="/">Team</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Terms</a></li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 col-12">
              <h5>Explore</h5>
              <ul>
                <li><a href="/">Features</a></li>
                <li><a href="/">Pricing</a></li>
                <li><a href="/">Testimonials</a></li>
                <li><a href="/">FAQ</a></li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 col-12">
              <h5>Contact Us</h5>
              <p><i className="fa-solid fa-phone"></i> +1 (800) 123-4567</p>
              <p><i className="fa-solid fa-envelope"></i> developersimant@gmail.com</p>
              <p><i className="fa-solid fa-map-marker-alt"></i> 1234 Elm Street, City, Country</p>
            </div>
          </div>
        </div>
      </div>
      <div className='Last-footer'>
        <p>© 2023 VEDA-CLONE. All rights reserved.</p>
      </div>
    </>
  )
}

export default Footer;
