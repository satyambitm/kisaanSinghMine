import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/scs1.jpeg'
import gallery_2 from '../../assets/scs2.jpeg'
import gallery_3 from '../../assets/scs3.jpeg'
import gallery_4 from '../../assets/scs4.jpeg'
import white_arrow from '../../assets/edusity_assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus
