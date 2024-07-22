import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const images = [
    'https://w0.peakpx.com/wallpaper/2/680/HD-wallpaper-nature-landscape-landscape-nature-thumbnail.jpg',
    'https://cdn.pixabay.com/photo/2016/02/13/12/26/aurora-1197753_640.jpg',
    'https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_640.jpg',
    'https://cdn.pixabay.com/photo/2016/11/14/04/36/boy-1822614_1280.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const imageContainerStyle = {
  
    height: '100px', // Adjust the height as needed
  };

  const individualImageStyle = {
   
    width: '55%', // Set the maximum width to ensure images fit within the screen
    height: '100%', // Maintain the aspect ratio
  };

  const imageStyle = {
    width: `${images.length * 10}%`,
    animation: 'sliderAnimation 12s linear infinite',
    display: 'flex',
  };

  const keyframes = `
    @keyframes sliderAnimation {
      0%, 100% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `;

  const dotsContainerStyle = {
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '8px',
  };

  const dotStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'white',
    opacity: '0.5',
    cursor: 'pointer',
  };

  return (
    <div className="image-slider" style={imageContainerStyle}>
      <style>{keyframes}</style>
      <div style={imageStyle}>
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Slide ${index + 1}`}
            style={individualImageStyle}
          />
        ))}
      </div>
      <div style={dotsContainerStyle}>
        {images.map((_, index) => (
          <div
            key={index}
            style={{
              ...dotStyle,
              opacity: index === currentImageIndex ? '1' : '0.5',
            }}
          />
        ))}
      </div>
      <p style={{ textAlign: 'center', color: 'black', marginTop: '10px' }}>
      Your additional text here!
    </p>


      
    </div>
  );
};

export default ImageSlider;
