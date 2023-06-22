import React, { useState } from 'react';
import './AddParcel.css';
import { useNavigate } from 'react-router-dom';
import Navigation from '../Home-component/Navigation';

function AddParcel() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [weight, setWeight] = useState('');
  const [price, setPrice] = useState(0);

  const handleNextClick = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleWeightChange = (e) => {
    const newWeight = e.target.value;
    setWeight(newWeight);
    calculatePrice(newWeight);
  };

  const calculatePrice = (newWeight) => {
    const basePrice = 100; // Initial base price
    const increment = 100; // Amount to increment for every 500 grams
    const weightIncrement = 500; // Weight increment for each price increase

    let newPrice = basePrice; // Start with the base price

    for (let i = weightIncrement; i <= newWeight; i += weightIncrement) {
      newPrice += increment; // Increment the price by Rs 100 for every 500 grams
    }

    setPrice(newPrice);
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
            <input type="text" name="First Name" placeholder="First Name" />
            <input type="text" name="Last Name" placeholder="Last Name" />
            <input type="text" name="email" placeholder="Email" />
            <input type="text" name="phone" placeholder="Phone" />
            <input type="text" name="pincode" placeholder="pincode" />

            <textarea name="Sender address" placeholder=" Sender Address"></textarea>

            <input
              type="button"
              name="next"
              className="next action-button"
              value="Next"
              onClick={handleNextClick}
            />
          </fieldset>
        )}

        {currentStep === 2 && (
          <fieldset>
            <h2 className="fs-title">More Details</h2>
            <h3 className="fs-subtitle">This is the Step 2</h3>
            <input type="text" name="Receiver Name" placeholder="Receiver Name" />
            <input type="text" name="Receiver Pin Code" placeholder="Receiver Pin Code" />

            <textarea name=" Receiver Address" placeholder=" Receiver Address"></textarea>

            <input
              type="button"
              name="previous"
              className="previous action-button"
              value="Previous"
              onClick={handlePreviousClick}
            />
            <input
              type="button"
              name="next"
              className="next action-button"
              value="Next"
              onClick={handleNextClick}
            />
          </fieldset>
        )}

        {currentStep === 3 && (
          <fieldset>
            <h2 className="fs-title">Additional Details</h2>
            <input
              type="text"
              name="Weight"
              placeholder="Weight(in grams)"
              value={weight}
              onChange={handleWeightChange}
            />
            <p className="Add_Price">Price: Rs {price}</p>
            <textarea name="Comments" placeholder=" Comments"></textarea>

            <input
              type="button"
              name="previous"
              className="previous action-button"
              value="Previous"
              onClick={handlePreviousClick}
            />
            <button className="Add_submit">Submit</button>
          </fieldset>
        )}
      </form>
    </div>
  );
}

export default AddParcel;
