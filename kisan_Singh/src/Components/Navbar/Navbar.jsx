import React, { useEffect, useState } from 'react'
import {Link, ScrollLink} from 'react-scroll';
import './Navbar.css'
// import logo from '../../assets/'
import logo from '../../assets/ks1.png'
import menu_icon from '../../assets/edusity_assets/menu-icon.png'

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY>50? setSticky(true): setSticky(false);
        })
    },[])
const [mobileMenu,setMobileMenu]=useState(false);
const toggleMenu = ()=>{
  mobileMenu? setMobileMenu(false): setMobileMenu(true);
}
  return (
    <nav className={`container ${sticky? 'dark-nav': ''}`}>
      <img src={logo} className='logo' alt="logo_kisanSingh" />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li>
          <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link>
        </li>
        <li>
          <Link to='programs' smooth={true} offset={-260} duration={500}>Solutions</Link>
        </li>
        <li>
          <Link to='about' smooth={true} offset={-150} duration={500}>About us</Link>
        </li>
        <li>
          <Link to='campus' smooth={true} offset={-260} duration={500}>Impact</Link>
        </li>
        <li>
          <Link to='testimonials' smooth={true} offset={-260} duration={500}>Team</Link>
        </li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
      </ul>
      <img src={menu_icon} className='menu-icon' alt="" onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar;
