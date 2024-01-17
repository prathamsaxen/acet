import React from 'react';
import "./Header.css";
import LOGO from "../../amenities/Header/logo_acet.jpg";
import LOGO2 from "../../amenities/Header/logo2.jpeg";
export default function Header() {
  return (
    <div className='Header'>
      <img src={LOGO} alt="Error in Laoding" />
      <div className="HeaderContent">
        <p>
        ALIGARH COLLEGE ENGINEERING AND TECHNOLOGY
        </p>
        <p>
        Approved By AICTE New Delhi, Affiliated to AKTU Lucknow
        </p>
      </div>
      <img src={LOGO2} alt="Error in Laoding" />

    </div>
  )
}
