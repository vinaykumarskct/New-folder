// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social media icons

const Footer1 = () => {
  const footerStyles = {
    backgroundColor: '#333',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
  };

  const linkStyles = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 10px',
  };

  const socialMediaStyles = {
    fontSize: '24px',
    margin: '0 10px',
  };

  const currentYear = new Date().getFullYear();

  return (
    <div style={footerStyles}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ flex: 1, textAlign: 'left' }}>
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis neque, ullamcorper non feugiat in, volutpat ac risus.</p>
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <h3>Quick Links</h3>
          <div>
            <a href="#" style={linkStyles}>Home</a>
            <a href="#" style={linkStyles}>Products</a>
            <a href="#" style={linkStyles}>Services</a>
            <a href="#" style={linkStyles}>Contact</a>
          </div>
        </div>
        <div style={{ flex: 1, textAlign: 'right' }}>
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
      <div style={{ marginTop: '30px' }}>
        <h3>Subscribe to our Newsletter</h3>
        <p>Stay updated with our latest news and promotions!</p>
        <form>
          <input type="email" placeholder="Enter your email" style={{ padding: '8px', marginRight: '8px' }} />
          <button type="submit" style={{ padding: '8px 15px', backgroundColor: '#fff', color: '#333', border: 'none', borderRadius: '5px' }}>Subscribe</button>
        </form>
      </div>
      <div style={{ marginTop: '30px' }}>
        <h3>Follow Us</h3>
        <div>
          <a href="#" style={socialMediaStyles}><FaFacebook /></a>
          <a href="#" style={socialMediaStyles}><FaTwitter /></a>
          <a href="#" style={socialMediaStyles}><FaInstagram /></a>
        </div>
      </div>
      <p style={{ marginTop: '20px' }}>&copy; {currentYear} Your Website Name. All rights reserved.</p>
    </div>
  );
}

export default Footer1;
