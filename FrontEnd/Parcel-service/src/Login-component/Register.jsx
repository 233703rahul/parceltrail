import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = React.useState({
    UserName: '',
    email: '',
    password: ''
  });

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
          alert('Registered successfully:', response.data);
          // Clear form data or redirect to a success page
        })
        .catch((error) => {
          alert('Error registering:', error);
          // Handle the error case
        });


    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]:value
      };
    });
  }

  return (
    <section
    className="image_Re">
      <div className="d_Re">
        <div className="container3">
          <div className="card_Re">
            <div className="card-body_Re">
              <div className="heading_Re">
                <img src="\src\assets\logo.png" className="logo_Re" />
                <img src="\src\assets\Name.png" className="Name_Re" />
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
                  {errors.email && <div className="error">{errors.email}</div>}
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
                  {errors.password && (
                    <div className="error">{errors.password}</div>
                  )}
                </div>

                {/* <div className="form-check d-flex justify-content-center mb-5">
                  <input
                    className="Check_box_Re"
                    type="checkbox"
                    value=""
                    id="form2Example3cg"
                  />
                  <label className="Agree_Rh" htmlFor="form2Example3g">
                    I agree all statements in{' '}
                    <a href="#!" className="Terms_Re">
                      <u>Terms of service</u>
                    </a>
                  </label>
                </div> */}

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
      </div>
    </section>
  );
}

export default Register;
