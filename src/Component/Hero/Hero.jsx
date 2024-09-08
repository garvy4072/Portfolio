import React from 'react'
import "../Hero/Hero.css"
import  profile from '../../assets/profile_img-isMTF2gD.svg'
import  pattern from '../../assets/pattern.svg'
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <div>
          <div className="hero">
            <Link to={'/'}>

            <img src={profile} alt="" />
            </Link>
            
            <h1><span>I'm Garv Yadav </span>, Frontend developer based in India. </h1>
            <p>A dedicated and detail-oriented frontend developer with one year of hands-on experience building and maintaining responsive, user-friendly web applications.</p>
          <div className="hero-action">
            <div className="hero-connect">
    Connect With me 
            </div>
<div className="hero-resume">
    My Resume
</div>
          </div>
          </div>
    </div>
  )
}

export default Hero