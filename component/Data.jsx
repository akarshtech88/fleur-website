import React from 'react'
import { AiOutlineGlobal } from "react-icons/ai";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";


const Data = () => {
  return (
    
    <div className='data'>
          <div className="d1">
          <AiOutlineGlobal className='global'/>
             <h4>DISCOVER WHAT'S POSSIBLE</h4>
             <p>Lorem ipsum dolor sit amet consectetur a <br/> adipisicing elit. Eos quo doloribus a maxime <br/> rerum error culpa, nulla voluptatem blanditiis.</p>

          </div>
          <div className="d2">
          <FaArrowUpRightDots className='arrow' />
          <h4>PEOPLE REALLY MATTER</h4>
          <p>Lorem ipsum dolor sit amet consectetur a <br/> adipisicing elit. Eos quo doloribus a maxime <br/> rerum error culpa, nulla voluptatem blanditiis.</p>
          </div>
          <div className="d3">
          <IoMdHeartEmpty className='heart'/>
          <h4>HAVING A PLAN FEELS GOOD</h4>
          <p>Lorem ipsum dolor sit amet consectetur a <br/> adipisicing elit. Eos quo doloribus a maxime <br/> rerum error culpa, nulla voluptatem blanditiis.</p>
              
          </div>
        

        
    </div>
    
  )
}

export default Data
