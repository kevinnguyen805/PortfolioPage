import React from 'react'
import Logo from '../Logo.png'
import KevinHome from '../KevinHome.png'


function LandingPage(){

     const resumeButton = () => {
          alert('TBA - Sorry about that!')
     }


     return(
          <div id="LandingPage">
               <div className="nav-bar">
                    <nav>
                         <a href="#LandingPage"><img className="logo-home" src={KevinHome} alt="Home logo"/></a>
                         <div className='nav-link-container'>
                              <a href="#AboutMe">About</a>
                              <a href="#Projects">Projects</a>
                              <a href="#Contact">Contact</a>
                              {/* <button className="resume" onClick={resumeButton}>Resume</button> */}
                              <a href="#LandingPage" className="resume" onClick={resumeButton}>Resume</a>
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