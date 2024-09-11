import React from 'react'
import '../Mywork/Work.css'
import pattern from '../../assets/pattern.svg'
import My_work from '../../assets/Work'
import { FaArrowRightLong } from "react-icons/fa6";
function Work() {
  return (
    <div>
<div className="work">
    <div className="work-title">
        <h1>My Work </h1>
        <img src={pattern} alt="" />
    </div>
    <div className="work-container">
        {My_work.map((item)=>{
            return (
                <img src={item.img} alt="" />
            )
        })}
    </div>
    <div className="showmore">
        Show more 
        <FaArrowRightLong />
    </div>
</div>
    </div>
  )
}

export default Work