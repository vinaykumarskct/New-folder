import React from 'react';
import './Payment1.css';

const Payment1 = () => {
  const handlePayment = (event) => {
    event.preventDefault();
    // Add logic for payment processing here
    // For now, let's simulate a loading state
    showLoading(event);
    // You can replace the above line with your actual payment processing logic
  };

  const showLoading = (event) => {
    const button = event.target;
    button.disabled = true;

    // Simulate loading, you can replace this with your actual loading logic
    setTimeout(() => {
      // After loading is complete, you might want to re-enable the button:
      button.disabled = false;
      alert("Payment successful! Thank you for your purchase.");
    }, 2000); // Simulating a 2-second loading time
  };

  return (
    <div>
      <div className="credit-card-form">
        <h2>PAYMENT PORTAL</h2>
        <img
          className="Image1"
          src="https://i.ibb.co/hgJ7z3J/6375aad33dbabc9c424b5713-card-mockup-01.png"
          alt="Card mockup"
        ></img>

        <form onSubmit={handlePayment}>
          <div className="form-group">
            <label htmlFor="card-number">Card Number</label>
            <input type="text" id="card-number" placeholder="Card number" required />
          </div>
          <div className="form-group">
            <label htmlFor="card-holder">Card Holder</label>
            <input type="text" id="card-holder" placeholder="Card holder's name" required />
          </div>
          <div className="form-row">
            <div className="form-group form-column">
              <label htmlFor="expiry-date">Expiry Date</label>
              <input type="text" id="expiry-date" placeholder="MM/YY" required />
            </div>
            <div className="form-group form-column">
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" placeholder="CVV" required />
            </div>
          </div>
          <button type="submit" className="click-button">
            PAY NOW - $(TOTAL)
          </button>
        </form>
      </div>
      <p>CodePen: @chris1337 - https://a-cool.space</p>
    </div>
  );
};

export default Payment1;
