import React from 'react'
import fleurimg from '../assets/fleurimg.png'
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    


    <div className='nav'>
      <nav>
        <img src={fleurimg} alt="" className='fl-img'/>
         
         <ul>

            <li>Home</li>
            <li>pages</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>Elements</li>
         </ul>
                 <div className='icon'>
                 <CiShoppingCart className='s-cart' />
                 <CiSearch className='s-search' />
                 <IoMenuOutline className='s-menu' />
                 </div>
                
        </nav>


        </div> 
     
     
    
  )
}

export default Navbar
