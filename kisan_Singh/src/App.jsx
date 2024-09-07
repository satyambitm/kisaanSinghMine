import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
// import VideoPlayer from './Components/VideoPlayer/VideoPlayer'; // Updated import
import VideoPlayer from './Components/videoPlayer/videoPlayer'; // Updated import

const App = () => {

const [playState,sePlayState]=useState(false);


  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Solutions' title='What We Offer'/>
        <Programs/>
        <About/>
        <Title subTitle='Our Impact' title='Stories of Success and Partnership'/>
        <Campus/>
        <Title title='TEAM ALT_CTRL_ELITE' subTitle='Our Team'/>
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get In Touch'/>
        <Contact/>
        <Footer/>
      </div>
     {/* <VideoPlayer/> Updated component usage */}
    </div>
  );
}

export default App;
