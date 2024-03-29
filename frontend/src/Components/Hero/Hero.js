import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Hero.css'
import arrow_icon from '../Assets/right-arrow.png'
import hero_image from '../Assets/hero.png'

function Hero() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (   
    <div className='hero'>
        <div className='hero-left'>
            <div>
                <p>New Summer</p>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div>
                <button className="hero-latest-button">
                  <NavLink to="/NewCollection" className="login-message" onClick={handleClick}>
                  Latest Collection
                  </NavLink>
                  <img src={arrow_icon} alt="" />
                  </button>
            </div>
        </div>
        <div className="hero-right">
          <img src={hero_image} alt="" />
        </div>
    </div>
  );
}

export default Hero;