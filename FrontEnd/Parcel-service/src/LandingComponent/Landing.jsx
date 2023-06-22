import React from 'react';

import './Landing.css';
import video from '../../src/assets/landing.mp4';
import { Link } from 'react-router-dom';





function Landing() {
 
  return (
    <div>
      
      <div className="header">
        <div className="Row">
          <div className="Name">
          <img src="src/assets/logo.png" alt="Logo" className="logo" />
          <h1>Parcel Service</h1>
          </div>
 
        </div>
        <div className="Contact">
        <button className="btn" id="btn1">contact us</button>
        <Link to ="/login"><button className="btn" id="btn1" >Log In</button></Link>
         <Link to ="/Register"><button className="btn" id="btn2">Sign Up</button></Link>
        </div>
      </div>
      <div className="content">
        <div className="text-container">
          <p className="heading">Everything at your doorstep</p>
          <ul>
            <li className="custom-icon">Picking up items to be delivered</li>
            <li className="custom-icon">Verifying the accuracy of delivery information including addresses and phone numbers</li>
            <li className="custom-icon">Loading the packages onto the delivery vehicles</li>
            <li className="custom-icon">Arranging the most efficient delivery route</li>
            <li className="custom-icon">Delivering the items to their final destination based on the planned route</li>
            <li className="custom-icon">Maintaining a record of delivery information  and delivery time</li>
          </ul>

          <Link to="/Register"><button className="btn3">Sign Up Now</button></Link>
        </div>
      <div className="video-container">
          <video className="img-fluid" autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
      </div>
    </div>
   <h3>Contact Us</h3> 
    <div className="row1">
    <div className="card">
     
      <img className="card-thumb" src="https://images.unsplash.com/photo-1579487785973-74d2ca7abdd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80" alt="thumb-image" />

      <div className="card-body">
        
        <h5 className="card-title">
          OUR MAIN OFFICE
        </h5>

        <p className="card-text">
        Technopark Phase II, Service Road,
        Kulathoor, Thiruvananthapuram,
        Kerala 695583
         
        </p>
        
      </div>
      
    </div>

    <div className="card">
      
      <img className="card-thumb" src="https://images.unsplash.com/photo-1616711248662-666c8aa10308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="thumb-image" />

      <div className="card-body">
       
        <h5 className="card-title">
          PHONE NUMBER
        </h5>

      
        <p className="card-text">
        +91 9007090606 <br></br>
        888-01234-4567(Toll Free)
        </p>
        
      </div>
      
    </div>
    <div className="card">
     
      <img className="card-thumb" src="https://images.unsplash.com/photo-1599198547993-550557f0b449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="thumb-image" />

      <div className="card-body">
        
        <h5 className="card-title">
          FAX
        </h5>

       
        <p className="card-text">
          1-234-567-8900
        </p>
        
      </div>
      
    </div>
    <div className="card">
     
      <img className="card-thumb" src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1017&q=80" alt="thumb-image" />

      <div className="card-body">
        
        <h5 className="card-title">
          EMAIL
        </h5>

        <p className="card-text">
          parcelservice@gmail.com
        </p>
        
      </div>
      
    </div>
    

    </div>
    <footer className="bg-dark text-center text-white">
      
      <div className="container p-4 pb-0">
       
       
      </div>
      
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className="text-white" href="#">ParcelService.com</a>
      </div>
    
    </footer>
    
  </div>

  );
}

export default Landing;

