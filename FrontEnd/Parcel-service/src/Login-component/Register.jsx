import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import axios from 'axios';
import { Button, Wrap, WrapItem, useToast } from '@chakra-ui/react';

function Register() {
  const [formData, setFormData] = React.useState({
    UserName: '',
    email: '',
    password: '',
  });
  const toast = useToast();
  const statuses = ['success', 'error', 'warning', 'info'];

  const [errors, setErrors] = React.useState({});

  function validateForm() {
    let formIsValid = true;
    const newErrors = {};

    // Validate email
    if (!formData.email) {
      newErrors.email = 'Please enter your email';
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      formIsValid = false;
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = 'Please enter your password';
      formIsValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
      // Form is valid, handle the submission logic here
      axios
        .post('http://localhost:3000/users', formData)
        .then((response) => {
          toast({
            title: 'Successfully registered',
            status: 'success',
            position: 'top',
            isClosable: true,
           
          });
          // Clear form data or redirect to a success page
        })
        .catch((error) => {
          toast({
            title: 'Error registering',
            description: 'An error occurred while registering. Please try again.',
            status: 'error',
            position: 'top',
            isClosable: true,
          });
          // Handle the error case
        });
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  return (
    <section className="image_Re">
      <div className="d_Re">
        <div className="container3">
          <div className="card_Re">
            <div className="card-body_Re">
              <div className="heading_Re">
                <img src="\src\assets\logo.png" className="logo_Re" alt="Logo" />
                <img src="\src\assets\Name.png" className="Name_Re" alt="Name" />
              </div>

              <p className="Create_Re">Create an account</p>

              <form className="form_Re" onSubmit={handleSubmit}>
                <div className="YourName_Re">
                  <label className="YourName_Re2" htmlFor="form3Example1cg">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="UserName"
                    id="form3Example1cg"
                    className="YourName_Re1"
                    value={formData.UserName}
                    onChange={handleChange}
                  />
                </div>

                <div className="Email_Re">
                  <label className="email_Re2" htmlFor="form3Example3cg">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="form3Example3cg"
                    className="email_Re1"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="error1">{errors.email}</div>}
                </div>

                <div className="Password_Re">
                  <label className="Password_Re_1" htmlFor="form3Example4cg">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="form3Example4cg"
                    className="password_Re2"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && <div className="error1">{errors.password}</div>}
                </div>

                <div className="Register_button">
                  <button type="submit" className="btn_Re">
                    Register
                  </button>
                </div>

                <p className="Already_Re">Have already an account? </p>
                <Link to="/login">
                  <p className="Login_Re">
                    <u>Login here</u>
                  </p>
                </Link>
              </form>
            </div>
          </div>
        </div>
        <Wrap>
          {statuses.map((status, i) => (
            <WrapItem key={i}>
              
            </WrapItem>
          ))}
        </Wrap>
      </div>
    </section>
  );
}

export default Register;
