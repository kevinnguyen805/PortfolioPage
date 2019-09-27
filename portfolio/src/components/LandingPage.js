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
                              <NavLink to="/">About</NavLink>
                              <NavLink to="/">Projects</NavLink>
                              <NavLink to="/">Contact</NavLink>
                              <NavLink className="resume" to="/">Resume</NavLink>
                         </div>
                    </nav>
               </div>

               <div className="logo-container"><img src={Logo} alt="logo" className="logo" />
               </div>




               <div className="landing-page-button-container">
                    {/* <Link className="landing-page-button" to="/">Let Me Show You Around </Link> */}
                    <a href="/"><button className="landing-page-button">PROCEED</button></a>

               </div>
          </div>
     )
}
export default LandingPage