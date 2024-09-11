import React from 'react'
import '../Services/Services.css'
import pattern from '../../assets/pattern.svg'
import servicesData from '../../assets/services'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
function Services() {
  return (
    <div>
<div className="services">
  <div className="services-title">
    <a href="#about">
    <h1>My Services </h1>

    <img src={pattern} alt="" />
    </a>
  </div>
  <div className="services-container">
   
      {servicesData.map((service)=>{
        return (
          <Link to={'/34'}>
          <div key={service.id} className='services-format'  >
<h3>{`"0${service.id}"`}</h3>
<h2>{service.title}...</h2>
<p>{service.description.substring(0 , 85)}...</p>
<div className="services-readmore">
<p>Read more</p >
<FaArrowRightLong/>

</div>
          </div>
         </Link>
        )
      })}
    </div>
  </div>
</div>

  )
}

export default Services