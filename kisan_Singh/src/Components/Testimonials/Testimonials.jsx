import React, { useRef, useState } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/edusity_assets/next-icon.png';
import back_icon from '../../assets/edusity_assets/back-icon.png';
import user_1 from '../../assets/MR.jpeg';
import user_2 from '../../assets/Ssatyam.jpeg';
import user_3 from '../../assets/Vaibhav.jpeg';
import user_4 from '../../assets/Tashi.jpeg';
import user_5 from '../../assets/sakshi.jpeg';
import user_6 from '../../assets/Shreyansh.jpeg';


const Testimonials = () => {
  const slider = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideWidth = 100; // Width of each slide in percentage

  const slideForward = () => {
    if (slider.current) {
      const maxSlides = slider.current.children.length;
      if (currentSlide < maxSlides - 1) {
        setCurrentSlide(currentSlide + 1);
      }
    }
  };

  const slideBackward = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="Back" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider} style={{ transform: `translateX(-${currentSlide * slideWidth}%)`, transition: 'transform 0.5s ease' }}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Mrityunjay Raj</h3>
                  <span>Darbhanga, Bihar</span>
                </div>
              </div>
              <p>BIT Mesra, K23, CSE</p>
              <p>Backend Development and Machine Learning</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Satyam Kumar</h3>
                  <span>Begusarai, Bihar</span>
                </div>
              </div>
              <p>BIT Mesra, K23, AIML</p>
              <p>Web Application Frontend and UI/UX</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Vaibhav Anand Singh</h3>
                  <span>Deoghar, Jharkhand</span>
                </div>
              </div>
              <p>BIT Mesra, K23, CSE</p>
              <p>Web3 and Blockchain</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Tashi Nayak</h3>
                  <span>Hazaribagh, Jharkhand</span>
                </div>
              </div>
              <p>BIT Mesra, K23, ECE</p>
              <p>Call Automation and Research</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_5} alt="" />
                <div>
                  <h3>Sakshi</h3>
                  <span>Ranchi, Jharkhand</span>
                </div>
              </div>
              <p>BIT Mesra, K23, AIML</p>
              <p>Mobile Application Frontend and UI/UX</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_6} alt="" />
                <div>
                  <h3>Shreyansh Singh</h3>
                  <span>Kanpur, Uttar Pradesh</span>
                </div>
              </div>
              <p>BIT Mesra, K23, CSE</p>
              <p>GenAI Projects</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
