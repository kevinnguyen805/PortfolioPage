import React from 'react'
import Github from '../Github.png'
import Twitter from '../Twitter.svg'
import Email from '../Email.svg'
import LinkedInIcon from '../LinkedInIcon.svg'

function Contact(){

     const emailAddress = () => {
          alert('NguyenKevin225@gmail.com');
     }


     return(
          <div className="contact-container" id="Contact">
         
          <div className="project-header">
             <h3 className="project-title">Contact</h3>
             <h4>Let's stay in touch. Reach me through any of these platforms at any time. </h4>  
          </div>


          <div className="contact-icon-container">
          <a href="https://github.com/kevinnguyen805"> 
               <div className="contact-icon">
               <img src={Github} /> 
               </div>
          </a>

          <a href="https://www.linkedin.com/in/kevinnguyen805/">
               <div className="contact-icon">
               <img src={LinkedInIcon} /> 
               </div>
          </a>

          <a href="https://twitter.com/kevboard">
               <div className="contact-icon">
               <img src={Twitter} /> 

               </div>
          </a>

   
               <div className="contact-icon">
                    <button onClick={emailAddress}><img className="contact-icon" src={Email} /> </button>
               </div>

          </div>


         

          </div>
     )
}

export default Contact