import React from 'react';
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  AOS.init();
  return(
    <section 
      className='contact-info' 
      data-aos='fade-in' 
      data-aos-easing='ease-in-sine' 
      data-aos-duration="600" 
      id='contact'
    >
      <h2 className='sectionHeading'>Contact Information</h2>
      <ul className= "contactInfo">
        <li><i className="fas fa-location-arrow"></i> Colorado Springs, CO</li>
        <li><i className="fas fa-phone-square-alt"></i> <a href="tel:303-842-9166">303.842.9166</a></li>
        <li className='email'><i className="far fa-envelope"></i> <a href="mailto:shannon.lichtenwalter@gmail.com?subject=Hi%20There!"target="_blank" rel="noopener noreferrer"> shannon.lichtenwalter@gmail.com</a></li>
        <li className= "contactIconLinks"> 
          <a href= "https://github.com/shannon-lichtenwalter"target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href= "https://www.linkedin.com/in/shannon-lichtenwalter/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href= 'https://docs.google.com/document/d/e/2PACX-1vSHmlXdVqN76yMvANstYmvpfvCkUpQdVfMz_-5d3pSRiVLFLFKVAcJN3unvglI8vHT2A-oQTnPS6n0O/pub' target="_blank" rel="noopener noreferrer">
            <i className="far fa-file"></i>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Contact;