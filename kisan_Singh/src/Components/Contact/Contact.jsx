import React from 'react'
import './Contact.css'
import msg_icon from  '../../assets/edusity_assets/msg-icon.png'
import mail_icon from  '../../assets/edusity_assets/mail-icon.png'
import phone_icon from  '../../assets/edusity_assets/phone-icon.png'
import location_icon from  '../../assets/edusity_assets/location-icon.png'
import white_arrow from '../../assets/edusity_assets/white-arrow.png'
const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "80410458-0a40-4435-9f93-e4df62a629dc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Send us a message or contact us directly using the details below. We value your feedback and inquiries as we work towards building a stronger agricultural community.</p>
        <ul>
      <div className="contact-col"></div>
          <li><img src={mail_icon} alt="" />Contact@kisaanSingh.in</li>
          <li><img src={phone_icon} alt="" />+1 323-918-9291</li>
          <li><img src={location_icon} alt="" />Hostel-6, BIT MESRA</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label >Your Name</label>
          <input type="text" name='name' placeholder='Enter your name' required/>
          <label >Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile holder' required/>
          <label >Write your message here</label>
          <textarea name="message" rows="6" placeholder='Enetr your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
