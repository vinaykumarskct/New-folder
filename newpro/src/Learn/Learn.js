import React, { useState, useEffect } from 'react';
import imageSrc from "../Images/000.webp";
import imageSrc1 from "../Images/girls.webp";
import imageSrc2 from "../Images/solo.webp";
import imageSrc3 from "../Images/family.webp";
import imag from "../Images/99.jpg";
import "./Learn.css";
import Footer1 from '../Footer1/Footer1';

const Learn = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const footerContainerStyles = {
    marginTop: '220px', // Adjust the margin-top value as needed
  };

  useEffect(() => {
    // Set up an interval to change the image every 3 seconds (adjust as needed)
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 4); // Assuming you have four images
    }, 3000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const containerStyles = {
    position: 'relative',
    textAlign: 'center',
    height: '100vh',
    marginBottom: '40px',
    overflow: 'hidden', // Hide the overflow to prevent scrolling for the entire page
  };

  const searchBarStyles = {
    position: 'absolute',
    top: '10%',
    left: '20%',
    transform: 'translate(-50%, -50%)',
    width: '30%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '25px',
    border: 'none',
    outline: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    color: '#000',
  };

  const imageStyles = {
    maxWidth: '100%',
    height: 'auto',
  };

  const paragraphStyles = {
    fontSize: '20px',
    color: '#f0f0f0',
    maxWidth: '70%',
    margin: '0%',
    textAlign: 'right',
  };

  const additionalContainerStyles = {
    marginTop: '30px',
    width: '20%',
    float: 'left',
    boxSizing: 'border-box',
    border: '2px solid #e91e63', // Pink border with a shade of pink color
    borderRadius: '10px',
    padding: '15px', // Increased padding for a more spacious look
    backgroundColor: 'black', // Light pink background color
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Subtle box shadow
    transition: 'all 0.3s ease-in-out', // Smooth transition for hover effect
    cursor: 'pointer', // Change cursor to indicate interactivity
    color: '#333', // Dark text color
  };

  const linkStyles = {
    display: 'block',
    margin: '20px auto',
    fontSize: '20px',
    textDecoration: 'none',
    color: 'white',
    textAlign: 'center',
    borderBottom: '1px solid ',
    padding: '5px',
  };

  const trip = {
    margin: '100px ',
    transform: 'translateX(190%)',
    width: '300px',
    height: '400px',
    borderRadius: '10%',
  };

  const imagesContainerStyles = {
    display: 'flex',
    overflowX: 'auto',
    margin: '0px -10px',
  };

  const imageContainerStyles = {
    margin: '30px 0px',
    position: 'relative',
    transition: 'transform 0.3s ease-in-out', // Transition for smooth hover effect
  };

  const imageContainerHoverStyles = {
    transform: 'scale(1.1)', // Adjust the scale value as per your preference
  };

  const messages = [
    "GIRLS",
    "SOLO",
    "FAMILY",
    "BOYZ",
  ];

  const headingStyle = {
    color: 'purple',
  };

  return (
    <div>
      <div className="transition" style={containerStyles}>
        <img src={getImageSrc(currentImageIndex)} alt="Description of your image" style={imageStyles} />
      </div>

      <input type="text" placeholder="Search..." style={searchBarStyles} />

      <div style={containerStyles}>
        <div style={imagesContainerStyles}>
          <div style={{ ...imageContainerStyles, ...(currentImageIndex === 0 && imageContainerHoverStyles) }}>
            <img src={imag} style={trip} />
            <p style={{ position: 'absolute', top: '30%', left: '165%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '30px', textAlign: 'center', fontFamily: 'Cursive, sans-serif' }}>{messages[0]}</p>
          </div>

          <div style={{ ...imageContainerStyles, ...(currentImageIndex === 1 && imageContainerHoverStyles) }}>
            <img src={imageSrc1} style={trip} />
            <p style={{ position: 'absolute', top: '30%', left: '160%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '30px', textAlign: 'center', fontFamily: 'Cursive, sans-serif' }}>{messages[1]}</p>
          </div>

          <div style={{ ...imageContainerStyles, ...(currentImageIndex === 2 && imageContainerHoverStyles) }}>
            <img src={imageSrc2} style={trip} />
            <p style={{ position: 'absolute', top: '30%', left: ' 165%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '30px', textAlign: 'center', fontFamily: 'Cursive, sans-serif' }}>{messages[2]}</p>
          </div>

          <div style={{ ...imageContainerStyles, ...(currentImageIndex === 3 && imageContainerHoverStyles) }}>
            <img src={imageSrc3} style={trip} />
            <p style={{ position: 'absolute', top: '30%', left: '165%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '30px', textAlign: 'center', fontFamily: 'Cursive, sans-serif' }}>{messages[3]}</p>
          </div>
        </div>
      </div>

      <div className='location' style={additionalContainerStyles}>
        <h2 style={headingStyle}>Recommended Hotels</h2>
        <a href="#" style={linkStyles}>GRAND HYAT</a>
        <a href="#" style={linkStyles}>PARK PLAZA</a>
        <a href="#" style={linkStyles}>NUO HOTEL</a>
        <a href="https://www.tripadvisor.in/Hotel_Review-g294212-d7037463-Reviews-NUO_Hotel_Beijing-Beijing.html" style={linkStyles}>HOTEL ECTAL</a>
      </div>

      <p style={paragraphStyles}>
        Beijing, the capital city of the People's Republic of China, is a vibrant metropolis with a rich history and a blend of modern and traditional influences. Here are some key points about Beijing:

        Historical Significance:

        Beijing has a history spanning over three millennia, and it has served as the capital of various Chinese dynasties.
        The city is home to numerous historical sites, including the Forbidden City, Temple of Heaven, Summer Palace, and the Ming Tombs.
        Cultural Heritage:

        The Forbidden City, a UNESCO World Heritage Site, was the imperial palace during the Ming and Qing dynasties. It is a vast complex of palaces, halls, and courtyards showcasing traditional Chinese architecture.
      </p>

      <br />

      <div>
        <div style={footerContainerStyles}>
          <Footer1 />
        </div>
      </div>
    </div>
  );
};

const getImageSrc = (index) => {
  const images = [imageSrc, imageSrc1, imageSrc2, imageSrc3];
  return images[index];
};

export default Learn;
