import React from 'react'
import './home.css'
import man from '../img/man.png'
import scatter from '../img/scatter.png'

const Home = () => {
  return (
    <>
    <img src={man} alt="phone" srcset="" height={'450px'} />
    <div className='bg-img'>
    <img src={scatter} alt="phone" srcset="" height={'450px'} />
      
    </div>
    <div className='bg-img2'></div>
    
    <div className='right1'>
      <h1>Digital Learining and Managemnent System</h1>
      <p>We are the best all-in-one cloud-based school software and digital 
        learning system for growing, big and ambitious names in education.</p>
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
    
    

    
      
    </>
  )
}

export default Home
