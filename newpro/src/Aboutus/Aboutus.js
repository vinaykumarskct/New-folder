import React, { useContext } from 'react';
import MyContext from './MyContext';
import img1 from "../Images/112345.jpg";
import './Aboutus.css'

const Aboutus= () => {
  const contextValue = useContext(MyContext);

  return (
    <div class="flex-container">
    <div className="flex">
      <img className="img" src={img1} alt="Description" />
      <div className="para">
        <h1>{`WELCOME TO ${contextValue.appName}!!`}</h1>
        <h2>WHO WE ARE:</h2>
        <p >Hello fellow wanderers and food enthusiasts! We are <b>"TRENDTELLER"</b>, 
            the creators and adventurers behind TRENDTELLER.
             Our passion for travel and love for discovering delectable cuisines inspired us to share our experiences with the world.</p>
        <button class="button">Back</button>
      </div>
    </div>
      </div>
  );
};

export default Aboutus;