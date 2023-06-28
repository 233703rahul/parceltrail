import React, { useState } from 'react';
import './Home.css';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import Logo from '../../src/assets/logo.png';
import AppName from '../../src/assets/Name.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
  ChakraProvider,
} from '@chakra-ui/react';

function Navigation() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  const handleLogout = () => {
    setShowLogoutConfirmation(true);
  };

  const confirmLogout = () => {
    // Implement your logout logic here
    navigate('/'); // Redirect to the login page or any other desired route after logout
  };

  return (
    <ChakraProvider>
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
                <Link to="/Home" className="Linknav">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link
                onClick={() =>
                  document
                    .getElementById('about1')
                    .scrollIntoView({ behavior: 'smooth' })
                }
              >
                <Link to="/Home#about1" className="Linknav">
                  About
                </Link>
              </Nav.Link>
              
              <NavDropdown title="Services" id="navbarDropdown"  className="navdropdown">
                <NavDropdown.Item
                  onClick={() => {
                    navigate('/home/AddParcel');
                  }}
                >
                  Add Parcel
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    navigate('/home/TrackParcel');
                  }}
                >
                  Track Parcel
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    navigate('/home/SearchParcel');
                  }}
                >
                  Search Parcel
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <div>
                <Nav.Link
                  onClick={() =>
                    document
                      .getElementById('contact-section')
                      .scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  <Link to="/Home#contact-section" className="Linknav">
                    Contact
                  </Link>
                </Nav.Link>
              </div>
              <div>
                <Nav.Link className="btnhome" href="#">
                  <Button variant="link" className="btnNav" onClick={handleLogout}>
                    Log Out
                  </Button>
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <AlertDialog
          motionPreset="slideInBottom"
          leastDestructiveRef={null}
          onClose={onClose}
          isOpen={showLogoutConfirmation}
          isCentered
        >
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogHeader>Log Out Confirmation</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>Do you wish to log out?</AlertDialogBody>
            <AlertDialogFooter>
              <Button
                colorScheme="gray"
                onClick={() => setShowLogoutConfirmation(false)}
              >
                Cancel
              </Button>
              <Button colorScheme="red" ml={3} onClick={confirmLogout}>
                Log Out
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </ChakraProvider>
  );
}

export default Navigation;
