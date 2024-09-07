import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/edusity_assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Revolutionizing Agriculture with Contract Farming for a Stable Future</h1>
        <p>Bridging the gap between farmers and buyers through innovative solutions that promote fair trade, transparency, and security. We empower farmers by providing direct access to markets and ensuring their crops reach the right buyers at the right price.
        </p>
        <button className='btn'>Get Started<img src={dark_arrow} alt=''/> </button>
      </div>
    </div>
  )
}

export default Hero
