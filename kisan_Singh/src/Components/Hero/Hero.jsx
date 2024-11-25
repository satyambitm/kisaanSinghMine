import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/edusity_assets/dark-arrow.png';

const Hero = () => {
  const handleClick = () => {
    // Redirect to the desired URL
    window.location.href = 'https://satyambitm.github.io/BIT-Mesra-AIML/';
  };

  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Revolutionizing Agriculture with Contract Farming for a Stable Future</h1>
        <p>
          Bridging the gap between farmers and buyers through innovative solutions that promote fair trade, transparency, and security. We empower farmers by providing direct access to markets and ensuring their crops reach the right buyers at the right price.
        </p>
        {/* Button with click event handler */}
        <button className="btn" onClick={handleClick}>
          Get Started
          <img src={dark_arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
