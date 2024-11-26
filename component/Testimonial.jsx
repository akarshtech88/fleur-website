import React from 'react'

const Testimonial = () => {
  return (
    <div className='testimonial'>
      <>
  {/* Hello world */}{" "}
  <section className="section__container">
    {/* <h2>Testimonials</h2> */}
    <h1>TESTIMONIALS</h1>
    <div className="section__grid">
      <div className="section__card">
        <span>
          <i className="ri-double-quotes-l" />
        </span>
        <h4>Love the simplicity</h4>
        <p>
          They understood our brand and created a stunning website design.
          Professional, responsive, and on-time delivery. Highly recommended!
        </p>
        {/* <img src="assets/user-1.jpg" alt="user" /> */}
        <h5>Allan Collins</h5>
        <h6>Managing Director</h6>
      </div>
      <div className="section__card">
        <span>
          <i className="ri-double-quotes-l" />
        </span>
        <h4>Excellent Designs</h4>
        <p>
          Efficient, reliable, and results-oriented. Visually appealing website,
          improved online visibility. Highly recommended!
        </p>
        {/* <img src="assets/user-2.jpg" alt="user" /> */}
        <h5>Tanya Grant</h5>
        <h6>Ceo &amp; Founder</h6>
      </div>
      <div className="section__card">
        <span>
          <i className="ri-double-quotes-l" />
        </span>
        <h4>Efficient and Reliable</h4>
        <p>
          Best decision we made. Stunning website, exceptional support. Always
          available and prompt issue resolution. Hassle-free experience!
        </p>
        {/* <img src="assets/user-3.jpg" alt="user" /> */}
        <h5>Clay Washington</h5>
        <h6>Fashion Designer</h6>
      </div>
    </div>
  </section>
</>

 
    </div>
  )
}

export default Testimonial

