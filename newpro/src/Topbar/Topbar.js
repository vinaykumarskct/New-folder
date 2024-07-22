// Topbar.jsx

import React from 'react';
import './Topbar.css';

const Topbar = () => {

   
  return (
    <div className={`top topBackground`}>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem"><a href="/Home">HOME</a></li>
          <li className="topListItem"><a href="/pack">PACKAGES</a></li>
          <li className="topListItem"><a href="/write">WRITE</a></li>
          <li className="topListItem"><a href="/contact">CONTACT US</a></li>
          <li className="topListItem"><a href="/review">REVIEW</a></li>
          <li className="topListItem">ABOUT US</li>
        </ul>
      </div>

      <div className="topRight">
        <img
          className="topImg"
          src="https://cdn.pixabay.com/photo/2020/05/11/08/17/cute-5157056_1280.jpg"
          alt="Profile"
        />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default Topbar;
