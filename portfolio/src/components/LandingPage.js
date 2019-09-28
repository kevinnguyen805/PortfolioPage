import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo.png'
import KevinHome from '../KevinHome.png'


function LandingPage(){



     return(
          <div>
               <div className="nav-bar">
                    <nav>
                         <NavLink to="/"><img className="logo-home" src={KevinHome} alt="Home logo" /></NavLink>
                         <div className='nav-link-container'>
                              {/* <NavLink to="#AboutMe" href="#AboutMe">About</NavLink>
                              <NavLink to="/">Projects</NavLink>
                              <NavLink to="/">Contact</NavLink>
                              <NavLink className="resume" to="/">Resume</NavLink> */}
                              <a href="#AboutMe">About</a>
                              <a href="#Projects">Projects</a>
                              <a href="#Contact">Contact</a>
                              <a href="#Contact" className="resume">Resume</a>
                         </div>
                    </nav>
               </div>
               <div className="logo-container"><img src={Logo} alt="logo" className="logo" />
          </div>




               <div className="landing-page-button-container">
                    <a href="#AboutMe"><button className="landing-page-button">PROCEED</button></a>
               </div>
          </div>
     )
}
export default LandingPage