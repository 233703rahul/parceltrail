import React from 'react';
import './Home.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo from '../../src/assets/logo.png';
import AppName from '../../src/assets/Name.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();

  return (
    <div className="navbar-container">
      <Navbar bg="light" expand="lg" className="navbar-fixed">
        <Navbar.Brand className="Home_Head_main">
          <img
            src={Logo}
            height="30"
            className="d-inline-block align-top navimg"
            alt="Logo"
          />
          <img
            src={AppName}
            height="30"
            className="d-inline-block align-top Appimg"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarRightAlignExample" />
        <Navbar.Collapse className="collapse" id="navbarRightAlignExample">
          <Nav className="ms-auto">
            <Nav.Link href="#" active>
            <Link to= "/Home" className='Linknav'>Home</Link>
            </Nav.Link>
            <Nav.Link onClick={() => document.getElementById('about1').scrollIntoView({ behavior: 'smooth' })}>
              About
            </Nav.Link>
            <NavDropdown title="Services" id="navbarDropdown">
              <NavDropdown.Item onClick={() => { navigate('/home/AddParcel') }}>Add Parcel</NavDropdown.Item>
              <NavDropdown.Item onClick={() => { navigate('/home/TrackParcel') }}>Track Parcel</NavDropdown.Item>
              <NavDropdown.Item onClick={() => { navigate('/home/SearchParcel') }}>Search Parcel</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <div>
              <Nav.Link  onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}>
                Contact
              </Nav.Link>
            </div>
            <div>
              <Nav.Link className="btnhome" href="#">
               <Link to= "/"  className='Linknav'>LogOut </Link>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
