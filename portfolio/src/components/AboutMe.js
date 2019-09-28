import React from 'react'
import CroppedProfile from '../CroppedProfile.png'

function AboutMe (){


     return(

          <div id="AboutMe" className="about-container">

               <div className="about-content">
               <h2 className="about-title">README.md</h2>
                    <p>I currently reside in Santa Barbara, California, and frequent between here and the Bay Area. After graduating from University of California, Santa Barbara with a degree in Biology, I threw in my scrubs to study web development at Lambda School.</p>
                    <p>I hope to use the experience I’ve gained from working with people in medical and professional settings (and of course my new CS skills) to join a startup centered around biomedical or lifestyle products.</p>
                    <p>I also dabble in hot yoga</p>
               </div>
               <div className="about-picture">
               <img src={CroppedProfile} />
               </div>
          </div>
     )
}

export default AboutMe