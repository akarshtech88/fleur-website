import React from 'react'
import {Carousel} from 'react-bootstrap'

const Mainsection = () => {
  return (
    
    
      <div>
    <Carousel>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 h1"
                        src="https://images.unsplash.com/photo-1533392151650-269f96231f65?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="First slide"
                        
                    />
                     <Carousel.Caption>

                        {/* <h3>This is the first slide!</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    
    <div className="wrapper">
  <div className="static-txt">Simply</div>
  <ul className="dynamic-txts">
    <li>
      <span>Charming</span>
    </li>
    <li>
      <span>Beautiful</span>
    </li>
    <li>
      <span>Stunning</span>
    </li>
    <li>
      <span>Gorgeous</span>
    </li>
  </ul>
  <p>Designed With love and care,Fleur is all you ever Wanted.</p>
</div>

   

                    </Carousel.Caption>

        


                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 h1"

                           
                          src="https://images.unsplash.com/photo-1550504630-341b7ade3e28?q=80&w=1285&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

                        alt="Second slide"
                    />
                     <Carousel.Caption>
                        {/* <h3>Second slide label</h3> */}
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */} 

                        <div className="wrapper">
  <div className="static-txt">Simply</div>
  <ul className="dynamic-txts">
    <li>
      <span>Charming</span>
    </li>
    <li>
      <span>Beautiful</span>
    </li>
    <li>
      <span>Stunning</span>
    </li>
    <li>
      <span>Gorgeous</span>
    </li>
  </ul>
  <p>Designed With love and care,Fleur is all you ever Wanted.</p>
</div>

       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 h1"
                                                    src="https://images.unsplash.com/photo-1607449212107-baf3592eefb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDY5fHxicmlkZSUyMHBob3RvfGVufDB8fDB8fHww"
                      
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3> */}
                        {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                               
                        <div className="wrapper">
  <div className="static-txt">Simply</div>
  <ul className="dynamic-txts">
    <li>
      <span>Charming</span>
    </li>
    <li>
      <span>Beautiful</span>
    </li>
    <li>
      <span>Stunning</span>
    </li>
    <li>
      <span>Gorgeous</span>
    </li>
  </ul>
  <p>Designed With love and care,Fleur is all you ever Wanted.</p>
</div>



                    </Carousel.Caption>
                </Carousel.Item>
               
            </Carousel>
            </div>
    
  )
}

export default Mainsection

