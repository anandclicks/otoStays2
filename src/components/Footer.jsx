import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  
  return (
    <div className='footer'>
      <div className="footerWrapper container-width">
      <div className="firstPart footerParts">
        <div className="footerLogo">
          <img src="\logo\OtoStaysLightLogo.png" alt="" />
          <p className='footerDips'>You know, when we go out of our home to the city in search of studies and jobs, we get everything very easily but we do not get a happy home.Follow us at</p>
          <div className="footericons">
         <Link to={'https://www.instagram.com/otostays6/'}> <i className="ri-instagram-line"></i></Link>
          <Link to={'https://www.facebook.com/OTOstays'}><i className="ri-facebook-line"></i></Link>
          <Link to={'https://x.com/i/flow/login?redirect_after_login=%2FOtoStays'}><i className="ri-twitter-x-line"></i></Link>
         <Link to={'https://www.linkedin.com/company/otostays/'}><i className="ri-linkedin-line"></i></Link>
          </div>
        </div>
      </div>
      <div className="secondPart footerParts">
        <div className="footerLinkTitleAndLink">
          <h3>Useful links</h3>
          <ul>
            <Link to={'/'}><i className="ri-arrow-right-line"></i> Home</Link>
            <Link to={'/noida'}><i className="ri-arrow-right-line"></i> Go to Noida's PG</Link>
            <Link to={'/noida'}><i className="ri-arrow-right-line"></i> All PG for you</Link>
            <Link ><i className="ri-arrow-right-line"></i> Book pg</Link>
          </ul>
        </div>
      </div>
      <div className="thirdPart footerParts">
      <div className="footerLinkTitleAndLink">
          <h3>Explore PG</h3>
          <ul>
            <Link to={'/noida'}><i className="ri-arrow-right-line"></i> PG in Noida</Link>
            <Link to={'/delhi'}><i className="ri-arrow-right-line"></i> PG in Delhi</Link>
            <Link to={'/gurugram'}><i className="ri-arrow-right-line"></i> PG in Gurugram</Link>
            <Link to={'/greater-noida'}><i className="ri-arrow-right-line"></i> PG in Greater Noida</Link>
            <Link to={'/ghaziabad'}><i className="ri-arrow-right-line"></i> PG in Ghaziabad</Link>
          </ul>
        </div>
      </div>
      <div className="forthPart footerParts">
      <div className="footerLinkTitleAndLink">
          <h3>Contact Information</h3>
          <div className='footerLastBox'>
          <div className='footerLastScTitle'>
            <h4>Address</h4>
            <p>Nearby Radha public
            school Nearby - Esi hospital Sector 22 Noida</p>
          </div>
          </div>
          <div className='footerLastBox'>
        
          <div className='footerLastScTitle'>
            <h4>Phone Number</h4>
            <p>+91 7415051778</p>
          </div>
          </div>
          <div className='footerLastBox'>
          
          <div className='footerLastScTitle'>
            <h4>Email Address</h4>
            <p>info@otostays.com</p>
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
