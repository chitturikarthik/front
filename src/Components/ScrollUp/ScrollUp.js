/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./scrollup.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) {
      scrollUp.classList.add("show-scroll");
    } else {
      scrollUp.classList.remove("show-scroll");
    }
  });
  return (
    <a href="#" className="scrollup">
      {/* <i className="uil uil-arrow-up "></i> */}
      <i className='bx bx-up-arrow-alt scrollup_icon'></i>
    </a>
  );
};

export default ScrollUp;
