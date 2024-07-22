import React from 'react'
import '../Packages/Packages.css'

const Packages = () => {
  return (
    <div>
       <a href='/Home'> <button onclick> Back</button></a>
    <h1 class="demo-title">
 PACKAGES
 
</h1>
<br></br>
<div class="pricing-table">
  <div class="ptable-item">
    <div class="ptable-single">
      <div class="ptable-header">
        <div class="ptable-title">
          <h2>Silver</h2>
        </div>
        <div class="ptable-price">
          <h2><small>$</small>99<span>/ M</span></h2>
        </div>
      </div>
      <div class="ptable-body">
        <div class="ptable-description">
          <ul>
            <li>3-STAR HOTEL</li>
            <li>Deals up to 12% off</li>
            <li>8-Days Max</li>
            <li>6-Spots Max</li>
          </ul>
        </div>
      </div>
      <div class="ptable-footer">
        <div class="ptable-action">
          <a href="/pay">CHOOSE</a>
        </div>
      </div>
    </div>
  </div>

  <div class="ptable-item featured-item">
    <div class="ptable-single">
      <div class="ptable-header">
        <div class="ptable-status">
          <span>Hot</span>
        </div>
        <div class="ptable-title">
          <h2>Gold</h2>
        </div>
        <div class="ptable-price">
          <h2><small>$</small>199<span>/ M</span></h2>
        </div>
      </div>
      <div class="ptable-body">
        <div class="ptable-description">
          <ul>
            <li>4-STAR HOTELS</li>
            <li>Deals up to 18% off</li>
            <li>12-Days Max</li>
            <li>10-Spots Max</li>
          </ul>
        </div>
      </div>
      <div class="ptable-footer">
        <div class="ptable-action">
          <a href="/pay">CHOOSE</a>
        </div>
      </div>
    </div>
  </div>

  <div class="ptable-item">
    <div class="ptable-single">
      <div class="ptable-header">
        <div class="ptable-title">
          <h2>Platinum</h2>
        </div>
        <div class="ptable-price">
          <h2><small>$</small>299<span>/ M</span></h2>
        </div>
      </div>
      <div class="ptable-body">
        <div class="ptable-description">
          <ul>
            <li>5-STAR HOTELS</li>
            <li>Deals up to 25% off</li>
            <li>18-Days Max</li>
            <li>Based on Your Preferences</li>
          </ul>
        </div>
      </div>
      <div class="ptable-footer">
        <div class="ptable-action">
          <a href="/pay">CHOOSE</a>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
      );
    };
    

export default Packages