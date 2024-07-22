// FlightBookingForm.js
import React, { useState } from 'react';
import './FlightBookingForm.css';

const FlightBookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    departureCity: '',
    destinationCity: '',
    departureDate: '',
    returnDate: '',
  });

  const [passengerCount, setPassengerCount] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form validation logic here before submitting the data

    // Navigate to the given URL
    window.location.href =
      'https://www.emirates.com/in/english/book/?gad_source=1&gclid=CjwKCAiA3JCvBhA8EiwA4kujZpbjDd0f4D_h94ESYSCqjVGHeI_CNwll9nmx3NoNAwXqJRgejvXXQRoCHi0QAvD_BwE&gclsrc=aw.ds';

    // You can also use react-router or other routing libraries for a more React-friendly approach
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <h2 className="special-header">Booking Form</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="input"
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input"
              required
            />
          </label>
          <br />
          <label>
            Departure City:
            <input
              type="text"
              name="departureCity"
              value={formData.departureCity}
              onChange={handleChange}
              className="input"
              required
            />
          </label>
          <br />
          <label>
            Destination City:
            <input
              type="text"
              name="destinationCity"
              value={formData.destinationCity}
              onChange={handleChange}
              className="input"
              required
            />
          </label>
          <br />
          <label>
            Departure Date:
            <input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              className="input"
              required
            />
          </label>
          <br />
          <label>
            Return Date:
            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              className="input"
              required
            />
          </label>
          <br />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button onClick={() => setPassengerCount(passengerCount + 1)}>+</button>
            <p style={{ margin: '0 10px', fontSize: 'inherit' ,color:"black"}}>Passenger Count: {passengerCount}</p>
            <button onClick={() => setPassengerCount(Math.max(passengerCount - 1, 1))}>-</button>
          </div>
          <a
            href="https://www.emirates.com/in/english/book/?gad_source=1&gclid=CjwKCAiA3JCvBhA8EiwA4kujZpbjDd0f4D_h94ESYSCqjVGHeI_CNwll9nmx3NoNAwXqJRgejvXXQRoCHi0QAvD_BwE&gclsrc=aw.ds"
            target="_blank" // open link in a new tab
            rel="noopener noreferrer" // recommended for security reasons
          >
            <button type="submit" className="button">
              Submit
            </button>
          </a>
        </form>
      </div>
    </div>
  );
};

export default FlightBookingForm;