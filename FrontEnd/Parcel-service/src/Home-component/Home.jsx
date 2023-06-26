import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';

import Navigation from './Navigation';

function Home() {
  const handleContactSubmit = (event) => {
    event.preventDefault();
    // Handle contact form submission logic here
  };

  return (
    <div>
      <Navigation />

      <div className="carousel-container">
        <Carousel>
          <Carousel.Item interval={600}>
            <img
              className="carouselImg"
              src="/src/assets/Home1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Committed Delivery on Time</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="carouselImg"
              src="/src/assets/Home2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Tracking done easy.</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carouselImg"
              src="/src/assets/Home3.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>We pride ourselves on quality service.</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div id="about1">
        <div className="aboutpage">
          <div id="about" className="Home_about">
            About
          </div>
        </div>
        <div className="Home_card_group">
          <div className="Home_card">
            <img
              src="https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="Homecard_img1"
              alt="Hollywood Sign on The Hill"
            />
            <div className="Home_card_body">
              <h5 className="Home_card_title">Green Logistics</h5>
              <p className="Home_card_text">
                Sustainable supply networks are the foundation of sustainable
                business. We are the industry leader in green logistics and
                provide an unrivaled range of green logistics solutions. Learn
                more about what we have to offer, our commitment to
                sustainability, and how our sector is working to make the world
                even better.
              </p>
            </div>
          </div>
          <div className="Home_card">
            <img
              src="https://images.pexels.com/photos/8000545/pexels-photo-8000545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="Homecard_img1"
              alt="Palm Springs Road"
            />
            <div className="Home_card_body">
              <h5 className="Home_Card_title">Insights and Innovation</h5>
              <p className="Home_card_text">
                Customers, academic and research institutes, commercial
                partners, and logistics specialists are all brought together by
                the corporation throughout the many Parcel Service business
                divisions to facilitate collaboration. As a pioneer in the
                logistics sector, Parcel Service strategically invests in the
                study of trends and the creation of innovative products.
              </p>
            </div>
          </div>
          <div className="Home_card">
            <img
              src="https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="Homecard_img1"
              alt="Los Angeles Skyscrapers"
            />
            <div className="Home_card_body">
              <h5 className="Home_Card_title">
                Parcel Service Global Connectedness Index
              </h5>
              <p className="Home_card_text">
                The Parcel Service 2023 Update examines the events of 2023 in
                detail using statistics. Learn how the global trading system
                rebounded from the first epidemic shock and what enduring
                weaknesses were revealed.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="Home_contact">
        <div id="contact-section" className="Home_contact_section">
          <div style={{ textAlign: 'center' }}>
            <p className="Home_Contact_us">Contact Us</p>
          </div>
          <div className="Homecontainer">
            <div className="Home_row">
              <div className="Home_column">
                <form onSubmit={handleContactSubmit}>
                  <label htmlFor="fname">Name</label>
                  <input
                    className="Home_Input"
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Your name.."
                  />
                  <label htmlFor="lname">Email</label>
                  <input
                    className="Home_Input"
                    type="text"
                    id="lname"
                    name="lastname"
                    placeholder="Your last name.."
                  />
                  <br></br>
                  <label htmlFor="subject">Subject</label>
                  <textarea
                    id="subject"
                    name="subject"
                    placeholder="Write something.."
                    style={{ height: '170px' }}
                  ></textarea>
                  <input className="HomeSubmit" type="submit" value="Submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="Home_footer_main">
        <div className="Home_footer_sub"></div>
        <div className="Home_footer_sub1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2023 DashTrace.com
        </div>
      </footer>
    </div>
  );
}

export default Home;
