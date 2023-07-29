import React from 'react'
import './home.css'
import man from '../img/man.png'
import scatter from '../img/scatter.png'
import school from '../img/school.jpg'

const Home = () => {
  return (
    <>
      <img src={man} alt="phone" srcset="" height={'450px'} className='image' />
      <div className='bg-img'>
        <img src={scatter} alt="phone" srcset="" height={'450px'} />
        <img src={scatter} alt="phone" srcset="" height={'400px'} />
        <img src={scatter} alt="phone" srcset="" height={'350px'} />
      </div>
      <div className='bg-img2'></div>

      <div className='right1'>
        <h1>Digital Learining and Managemnent System</h1>
        <p>We are the best all-in-one cloud-based school software and digital learning system for growing, big and ambitious names in education.</p>
        <button className="cta-btn">Request a Demo</button>
      </div>
      <div className="feature-section">
        <h2>Why Choose VEDA App?</h2>
        <div className="feature-cards">
          {/* Add feature cards here */}
          <div className="feature-card">
            <i className="fa-solid fa-shield-check"></i>
            <h3>Secure and Reliable</h3>
            <p>Our platform is built with top-notch security to protect your data and ensure reliability.</p>
          </div>
          <div className="feature-card">
            <i className="fa-solid fa-laptop-code"></i>
            <h3>Modern Interface</h3>
            <p>Enjoy a sleek and user-friendly interface that makes managing tasks a breeze.</p>
          </div>
          <div className="feature-card">
            <i className="fa-solid fa-cogs"></i>
            <h3>Customizable</h3>
            <p>Adapt the system to your institution's unique needs with our customizable options.</p>
          </div>
        </div>
      </div>
      <div className='main-school'>
        <img src={school} alt="" srcset="" />
        <div className='school-section'>
          <p>For Your School</p>
          <h1>Your school is unique, so your software solution should be too.</h1>
          <p>Veda is tried, tested and trusted school management system by every type of educational institution including private schools, public schools, international schools, montessories and colleges.</p>
        </div>
      </div>
      <div className='main-digital'>
        <div className='digital-section'>
          <p>Digital Learning</p>
          <h1>Veda MIS & E-learning</h1>
          <p>Making Online Learning Possible in more than 1000 Schools. We provide Zoom Integrated Online Classes, Auto Attendance, Assignment with annotation, Subjective and Objective Exams, Learning Materials, Online Admissions, and Online Fee payment, all in one school management software.</p>
        </div>
      </div>






    </>
  )
}

export default Home
