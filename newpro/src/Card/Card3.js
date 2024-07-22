import React, { useState, useEffect } from 'react';
import { TextField, CircularProgress } from '@mui/material';
import "./Card.css";
import im from "../Images/112345.jpg";

const Card3 = () => {
  const [backgroundImage, setBackgroundImage] = useState(im);
  const [showAdditionalCards, setShowAdditionalCards] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setBackgroundImage("https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg");
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    textAlign: 'center',
    marginTop: '-1px',
    transition: 'background-image 0.5s ease',
  };
  const searchContainerStyle = {
    position: 'absolute',
    top: '15px',
    right: '10px',
    zIndex: '1',
  };

  const toggleAdditionalCards = () => {
    setLoading(true);

    // Simulate an API call or any asynchronous operation
    setTimeout(() => {
      setShowAdditionalCards(!showAdditionalCards);
      setLoading(false);
    }, 2000); // Adjust the delay as needed
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#e5d73d',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <body style={containerStyle}>
      <h1 className="stylish-font">AFRICA</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div style={searchContainerStyle}>
        <TextField
          label="Search"
          variant="outlined"
          autoFocus
          sx={{ backgroundColor: 'white', borderRadius: '5px', marginBottom: '20px' }}
        />
      </div>

      <div className="card-container">
        <div className="travel-card">
        <img src="https://www.intrepidtravel.com/adventures/wp-content/uploads/2023/08/Vivienne-Feature-Image.jpg" alt="Reykjavik" style={{ width: '100%', height: '50%'}}></img>
          <div className="card-details">
            <h3 className="card-title">Morocco</h3>
            <p className="card-description">“Morocco, a North African country bordering the Atlantic Ocean and Mediterranean Sea"</p>
            <a href="#" className="card-btn">Learn More</a>
          </div>
        </div>

        <div className="travel-card">
        <img src="https://cdn.britannica.com/34/153434-050-863E8023/Mount-Kilimanjaro-Tanzania.jpg" alt="Great Wall of China" style={{ width: '100%', height: '50%'}}></img>
          <div className="card-details">
            <h3 className="card-title">Mount Kilimanjaro</h3>
            <p className="card-description">Kilimanjaro is the fourth most topographically prominent peak on Earth</p>
            <a href="#" className="card-btn">Learn More</a>
          </div>
        </div>

        {showAdditionalCards && (
          <>
            {/* Additional Cards */}
            <div className="travel-card">
            <img src="https://cdn.thecollector.com/wp-content/uploads/2023/07/devils-pool-vic-falls.jpg?width=1200&quality=55" alt="Great Wall of China" style={{ width: '100%', height: 'auto'}}></img>
              <div className="card-details">
                <h3 className="card-title">Victoria Falls</h3>
                <p className="card-description">Known in the Lozi language as Mosi-oa-Tunya, “Thundering Smoke,”</p>
                <a href="#" className="card-btn">Learn More</a>
              </div>
              
            </div>
            <div className="travel-card">
              {/* ... (additional card code) */}
              <img src="https://www.futurity.org/wp/wp-content/uploads/2019/11/Nile-River_1600.jpg" alt="Great Wall of China" style={{ width: '100%', height: 'auto'}}></img>
              <div className="card-details">
                <h3 className="card-title">The Nile</h3>
                <p className="card-description">The longest river in the world is the Nile, stretching about 6650 kilometres</p>
                <a href="#" className="card-btn">Learn More</a>
              </div>

            </div>
          </>
        )}

        <div className="centered-button-container horizontal-center">
          {loading ? (
            <CircularProgress color="secondary" />
          ) : (
            <button style={buttonStyle} onClick={toggleAdditionalCards}>
              {showAdditionalCards ? 'See Less' : 'See More'}
            </button>
          )}
        </div>
      </div>
    </body>
  );
}

export default Card3;
