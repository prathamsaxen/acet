import React from 'react'
import "./DirectorMessage.css";

// Amenities 
import dm from "../../amenities/DirectorsMessage/dm.png";

export default function DirectorMessage() {
  return (
    <div className='DirectorMessage'>
      <h2>Our Director's Message</h2>
      <div className="mainDirectorMessage">
        <div className="textDirectorMessage">
          <p>
          Engineering education in the last two decades in the country has expanded  
          at a tremendous pace due to global economic and trade liberalisation. This 
          has profoundly affected the quality of education, as a result, the 
          employers often find it difficult to recruit new engineering graduates 
          with right technical and communication skills. We at ACET are fully aware 
          of the challenges and problems, and commit ourselves to develop and 
          nurture the talents of our students so as to enable them to become a 
          successful techno-professional in a highly competitive and fast changing 
          world.          
          </p>
          <p>Dr. Vinod Sharma<br/>Cheif Director</p>
        </div>
        <div className="imageDirectorMessage">
          <img src={dm} alt="Error in Loading..." />
        </div>
      </div>
    </div>
  )
}