import React from 'react'
import './Program.css'
import program_1 from '../../assets/tpc1.jpeg'
import program_2 from '../../assets/s4.jpg'
import program_3 from '../../assets/FTPN1.jpeg'
import program_icon_1 from '../../assets/ks1.png'
import program_icon_2 from '../../assets/edusity_assets/program-icon-2.png'
import program_icon_3 from '../../assets/edusity_assets/program-icon-3.png'
// program-1 imgprogram_icon_1 → Change to Transparent Contracts
//program-2 imgprogram_icon_1 → Change to Real-Time Insights
// program-3 imgprogram_icon_1 → Change to Price Negotiation
const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="program-1 img" />
        <div className="caption">
            <img src={program_icon_1} alt="program_icon_1" className='vb' />
            <p>Secure Contract Management</p>
        </div>
        <p className='yoyo'>Enable farmers and buyers to engage in clear, binding agreements through blockchain technology for guaranteed payments and transparency</p>
      </div>
      <div className="program">
        <img src={program_2} alt="program-2 img" />
        <div className="caption">
            <img src={program_icon_1} alt="program_icon_1" className='vb' />
        <p>Real-Time Market & Crop Insights</p>
        </div>
        <p className='yoyo'>Get AI-powered insights to assist farmers in making data-driven decisions, from weather forecasts to market trends</p>
      </div>
      <div className="program">
        <img src={program_3} alt="program-3 img" />
        <div className="caption">
            <img src={program_icon_1} alt="program_icon_1" className='vb'/>
            <p>Fair & Transparent Price Negotiation</p>
        </div>
        <p className='yoyo'>Facilitate fair price discovery and negotiations, ensuring both farmers and buyers get the best possible deal</p>
      </div>
    </div>
  )
}

export default Programs
