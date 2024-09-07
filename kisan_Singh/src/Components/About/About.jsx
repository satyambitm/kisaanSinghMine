import React from 'react'
import './About.css'
// import about_img from '../../assets/edusity_assets/about.png'
import about_img from '../../assets/alpha2.png'
import play_icon from '../../assets/edusity_assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} className='about-img' alt="" />
        <img src={play_icon} className='play-icon' alt="" />
      </div>
      <div className="about-right">
        <h3>ABOUT KISAANSINGH</h3>
        <h2>Empowering Farmers with Technology</h2>
        {/* <p>Our company is committed to providing high-quality products and services. We strive to ensure customer satisfaction by focusing on innovation, reliability, and excellence in every aspect of our operations. Our dedicated team works tirelessly to exceed your expectations and deliver exceptional value.
        </p>
        <p>
        Taking a moment to reflect on the past year, I feel an overwhelming sense of gratitude for the opportunities and challenges that have shaped my journey. Each experience has contributed to my growth, and I look forward to the future with optimism and excitement for what lies ahead.
        </p> */}
        <p>KisanSingh is a platform designed to connect farmers with buyers, simplifying agricultural transactions and ensuring stable, transparent contracts. Our goal is to enhance the livelihoods of farmers by providing them direct market access, secure payments, and smart contract management.</p>
        <p>By leveraging cutting-edge technologies like AI for crop insights and blockchain for secure, traceable transactions, KisanSingh is revolutionizing the agricultural ecosystem. We are committed to building a future where farmers can thrive, free from market uncertainty.</p>
      </div>

    </div>
  )
}

export default About
