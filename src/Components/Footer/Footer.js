/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Karthik Chitturi</h1>
        <ul className="footer_list">
            <li>
                <a href="#about" className="footer_link">About</a>
            </li>

            <li>
                <a href="#skills" className="footer_link">Skills</a>
            </li>

            <li>
                <a href="#work" className="footer_link">My Works</a>
            </li>

            {/* <li>
                <a href="#hackathons" className="footer_link">Hackathons</a>
            </li> */}
        </ul>

        <div className="footer_social">

        <a href='https://github.com/chitturikarthik' className='footer_social-icon' target='new'><i class="bx bxl-github"></i></a>
        <a href='https://www.linkedin.com/in/karthik-chitturi-0904kc2203/' className='footer_social-icon' target='new'><i class="bx bxl-instagram"></i></a>
        <a href='https://www.linkedin.com/in/karthik-chitturi-0904kc2203/' className='footer_social-icon' target='new'><i class="bx bxl-linkedin"></i></a>
        <a href='https://www.behance.net/karthikchitturi' className='footer_social-icon' target='new'><i class="bx bxl-behance"></i></a>

        </div>

        <span className="footer_copy">
            {/* &#169; KarthikChitturi. All rights reserved */}
            Developed By 
            <a style={{textDecoration:"none",cursor:"pointer"}} href=""> Karthik Chitturi</a>
        </span>

        
      </div>
    </footer>
  );
}
