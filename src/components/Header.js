import React from "react";
import { ReactTyped } from "react-typed";


const Header = () => {
  return (
    <div className="header-wraper"> 
    <div className="main-info"> 
        <h1> web development and website promotion</h1>
        <ReactTyped
          className="typed-text"
          strings={["Web Design","Web Development","Facebook Ads"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">Contact me</a>
    </div>
    </div>
  )
}

export default Header
