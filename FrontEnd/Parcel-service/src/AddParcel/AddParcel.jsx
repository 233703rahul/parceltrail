import React, { useState } from 'react';
import './AddParcel.css';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navigation from '../Home-component/Navigation';



function AddParcel() {
  // const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [weight, setWeight] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    pincode: '',
    senderAddress: '',
    receiverName: '',
    receiverPinCode: '',
    receiverAddress: '',
    comments: '',
  });
  const [errors, setErrors] = useState({});

  const handleNextClick = () => {
    if (currentStep === 1) {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.phone ||
        !formData.pincode ||
        !formData.senderAddress
      ) {
        // Show error message for incomplete fields
        setErrors({
          firstName: !formData.firstName ? 'First name is required.' : '',
          lastName: !formData.lastName ? 'Last name is required.' : '',
          email: !formData.email ? 'Email is required.' : '',
          phone: !formData.phone ? 'Phone is required.' : '',
          pincode: !formData.pincode ? 'Pincode is required.' : '',
          senderAddress: !formData.senderAddress ? 'Sender address is required.' : '',
        });
        return;
      }
    } else if (currentStep === 2) {
      if (!formData.receiverName || !formData.receiverPinCode || !formData.receiverAddress) {
        // Show error message for incomplete fields
        setErrors({
          receiverName: !formData.receiverName ? 'Receiver name is required.' : '',
          receiverPinCode: !formData.receiverPinCode ? 'Receiver pin code is required.' : '',
          receiverAddress: !formData.receiverAddress ? 'Receiver address is required.' : '',
        });
        return;
      }
    }

    setCurrentStep(currentStep + 1);
  };

  const handlePreviousClick = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleWeightChange = (e) => {
    const newWeight = e.target.value;
    setWeight(newWeight);
    // calculatePrice(newWeight);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Phone number validation
    if (name === 'phone') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: /^\d+$/.test(value) ? '' : 'Phone number should only contain numbers.',
      }));
    }

    // Email validation
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: emailRegex.test(value) ? '' : 'Invalid email format.',
      }));
    }

  };

  const validateForm = () => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.firstName) {
        newErrors.firstName = 'First name is required.';
      }

      if (!formData.lastName) {
        newErrors.lastName = 'Last name is required.';
      }

      if (!formData.email) {
        newErrors.email = 'Email is required.';
      }

      if (!formData.phone) {
        newErrors.phone = 'Phone is required.';
      }

      if (!formData.pincode) {
        newErrors.pincode = 'Pincode is required.';
      }

      if (!formData.senderAddress) {
        newErrors.senderAddress = 'Sender address is required.';
      }
    } else if (currentStep === 2) {
      if (!formData.receiverName) {
        newErrors.receiverName = 'Receiver name is required.';
      }

      if (!formData.receiverPinCode) {
        newErrors.receiverPinCode = 'Receiver pin code is required.';
      }

      if (!formData.receiverAddress) {
        newErrors.receiverAddress = 'Receiver address is required.';
      }
    } else if (currentStep === 3) {
      if (!weight) {
        newErrors.weight = 'Weight is required.';
      }
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (validateForm() && currentStep == 3) {
      // Send the form data to the backend using Axios
      axios
        .post('http://localhost:3000/addparcel', formData)
        .then((response) => {
          // Handle successful response
          console.log('Parcel added successfully:', response.data);
          // navigate('/success'); // Navigate to success page
        })
        .catch((error) => {
          // Handle error
          console.error('Error adding parcel:', error);
          // Show an error message to the user
        });
    }
  };

  return (
    <div>
      <Navigation />

      <form id="msform">
        <ul id="progressbar">
          <li className={currentStep === 1 ? 'active' : ''}>Account Setup</li>
          <li className={currentStep === 2 ? 'active' : ''}>Social Profiles</li>
          <li className={currentStep === 3 ? 'active' : ''}>Personal Details</li>
        </ul>

        {currentStep === 1 && (
          <fieldset>
            <h2 className="fs-title">Add Your Parcel</h2>
            <h3 className="fs-subtitle">This is step 1</h3>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
            />
            {errors.pincode && <span className="error">{errors.pincode}</span>}
            <input
              type="text"
              name="senderAddress"
              placeholder="Sender Address"
              value={formData.senderAddress}
              onChange={handleChange}
            />
            {errors.senderAddress && <span className="error">{errors.senderAddress}</span>}
          </fieldset>
        )}

        {currentStep === 2 && (
          <fieldset>
            <h2 className="fs-title">Social Profiles</h2>
            <h3 className="fs-subtitle">This is step 2</h3>
            <input
              type="text"
              name="receiverName"
              placeholder="Receiver Name"
              value={formData.receiverName}
              onChange={handleChange}
            />
            {errors.receiverName && <span className="error">{errors.receiverName}</span>}
            <input
              type="text"
              name="receiverPinCode"
              placeholder="Receiver Pin Code"
              value={formData.receiverPinCode}
              onChange={handleChange}
            />
            {errors.receiverPinCode && <span className="error">{errors.receiverPinCode}</span>}
            <input
              type="text"
              name="receiverAddress"
              placeholder="Receiver Address"
              value={formData.receiverAddress}
              onChange={handleChange}
            />
            {errors.receiverAddress && <span className="error">{errors.receiverAddress}</span>}
          </fieldset>
        )}

        {currentStep === 3 && (
          <fieldset>
            <h2 className="fs-title">Personal Details</h2>
            <h3 className="fs-subtitle">This is step 3</h3>
            <input
              type="text"
              name="weight"
              placeholder="Weight"
              value={weight}
              onChange={handleWeightChange}
            />
            {errors.weight && <span className="error">{errors.weight}</span>}
            <textarea
              name="comments"
              placeholder="Comments"
              value={formData.comments}
              onChange={handleChange}
            />
          </fieldset>
        )}

        <div className="button-container">
          {currentStep > 1 && (
            <button type="button" className='action-buttons' onClick={handlePreviousClick}>
              Previous
            </button>
          )}
          {currentStep < 3 ? (
            <button type="button" className='action-buttons' onClick={handleNextClick}>
              Next
            </button>
          ) : (
            <button type="button" className='action-buttons' onClick={handleSubmit}>Submit</button>
          )}
        </div>
      </form>
    </div>
  );
}

export default AddParcel;
