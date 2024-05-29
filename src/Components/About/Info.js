/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
// import PL from "../../assets/pl2.jpg"
import BO from "../../assets/bo_logo.png"
import MCR from "../../assets/mcr_logo.jpg"

export default function Info() {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <img className='about_icon' src="https://purplelane.in/pl2.0//images/PL_logoicon.png"/>
        <h3 className="about_title">PurpleLane</h3>
        <span className="about_subtitle">FrontEnd Intern</span>
      </div>


      <div className="about_box">
        {/* <i className="bx bx-support about_icon"></i> */}
        <img className='about_icon' src="http://www.mcr.org.in/img/mcr_logo.png"/>
        <h3 className="about_title">MCR Web Solutions</h3>
        <span className="about_subtitle">Full Stack Intern</span>
      </div>


      <div className="about_box">
        {/* <i className="bx bx-briefcase-alt about_icon"></i> */}
        <img className='about_icon' src="https://bhimavaram.online/image/cache/catalog/bvrmol-500x186.png"/>
        <h3 className="about_title">Bhimavaram Online</h3>
        <span className="about_subtitle">Ecommerce Intern</span>
      </div>

      
    </div>
  );
}
