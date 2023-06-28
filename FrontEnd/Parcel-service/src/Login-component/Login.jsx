import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import video from '../\assets/pexels-pavel-danilyuk-6406021-1080x1920-25fps.mp4';

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  const [error, setError] = React.useState('');

  const handleLogin = () => {
    // Check if any field is empty
    if (!formData.email || !formData.password) {
      setError('Please enter email and password.');
      return;
    }

  // Check for specific email and password combination
  if (formData.email === 'r@gmail.com' && formData.password === 'password') {
    // Redirect to home page
    navigate('/home');
    return;
  }

  // Invalid email and password
  setError('Invalid email or password.');
};

const handleChange = event => {
  const { name, value } = event.target;
  setFormData(prevFormData => ({
    ...prevFormData,
    [name]: value,
  }));
};

return (
  <div className="main_la">
    <div className="Login_Justify">
      <div className="Login_coloumn_md_7">
        <div className="card_la">
          <div className="Login_row_g7">
            <div className="Login_coloumn">
              <video className="img-fuild_Lo" autoPlay loop muted>
                <source src={video} type="video/mp4"></source>
              </video>
            </div>
            <div className="Login_3">
              <div className="Login_4">
                <form>
                  <div className="d_Lo">
                    <div>
                      <img src="\src\assets\logo.png" className="logo_la" alt="Logo" />
                    </div>
                    <img src="\src\assets\Name.png" className="LogoName_la" alt="Name" />
                  </div>

                  <p className="Sign_Lo">Sign into your account</p>

                  <div className="email_Lo">
                    <input
                      type="email"
                      name="email"
                      id="form2Example17"
                      className="form-control form-control-lg"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <label className="email_Lo1" htmlFor="form2Example17">
                      Email address
                    </label>
                  </div>

                  <div className="Password_Lo">
                    <input
                      type="password"
                      name="password"
                      id="form2Example27"
                      className="form-control form-control-lg"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <label className="password_Lo1" htmlFor="form2Example27">
                      Password
                    </label>
                  </div>

                  {error && <p className="Error">{error}</p>}

                  <div className="Login_Lo">
                    <button className="Login_btn_Lo" type="button" onClick={handleLogin}>
                      Login
                    </button>
                  </div>

                  <p className="Dont">
                    Don't have an account? <a href="#!" onClick={() => { navigate('/Register') }}>Register here</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default Login;
