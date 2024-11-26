import React from 'react'
import client1 from '../assets/client1.png'
import client2 from '../assets/client-2.png'
import client3 from '../assets/client-3.png'
// import client4 from '../assets/client-4.png'

const Clientsection = () => {
  return (
    <div className='client-section'>
              <div className='section1'>
                 <h2>OUR CLIENTS</h2>
                  <p>Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis <br/><span className='m-1'> bibendum auci elit consequat ipsutis sem niuis sed odio sit amet nibh </span></p>
                    

              </div>


         <div className="section2">

            <img src={client1} alt="" className='c-1'/>
            <img src={client2} alt="" className='c-2'/>
            <img src={client3} alt="" className='c-3'/>
            {/* <img src={client4} alt="" className='c-4'/> */}

         </div>


      
    </div>
  )
}

export default Clientsection

