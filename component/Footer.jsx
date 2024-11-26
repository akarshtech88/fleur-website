import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
// import instaimg from '../assets/instaimg.jpg'
const Footer = () => {
  return (
    <footer>
  <div className="container">
    <div className="footer-content">
      <h3>Contact Us</h3>
      <p>Email:Fleur@example.com</p>
      <p>Phone:+121 56556 565556</p>
      <p>Address:XYZ 123 street</p>
    </div>
    <div className="footer-content">
      <h3>Quick Links</h3>
      <ul className="list">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Products</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
    <div className="footer-content">
      <h3>Follow Us</h3>
      <ul className="social-icons">
        <li>
          <a href="">
            <i className="fab fa-facebook" />
          </a>
        </li>
        <li>
          <a href="">
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li>
          <a href="">
            <i className="fab fa-instagram" />
          </a>
        </li>
        <li>
          <a href="">
            <i className="fab fa-linkedin" />
          </a>
        </li>
        <div className='fnt'>
            <FaTwitter className='f1' />
            <FaFacebook className='f1' />
            <AiFillInstagram className='f1' />
            <FaLinkedin  className='f1'/>
            </div>
            <div className="insta"></div>
            {/* <img src={instaimg} alt='' className='insta'/> */}
      </ul>
    </div>
  </div>
  <div className="bottom-bar">
    <p>© 2017 code intractive . All rights reserved</p>
  </div>
</footer>

  )
}

export default Footer
