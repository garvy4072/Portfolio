import React from 'react'
import "../Navbar/Navbar.css"
function Navbar() {
  return (
    <div className='navbar'>
      <div className="img">GaRv</div>
    <ul className="nav-menu">
      <li>Home</li>
      <li >About Me</li>
      <li>Service</li>
      <li>Portfolio</li>
      <li>Contact</li>
    </ul>
<div className="nav-connect">
  Connect With Me
</div>
    </div>
  )
}

export default Navbar