import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className=' navWrapper container-width'>
      {/* left side  */}
      <div className="navLeft">
        <img className='logo' src="/logo/OtoStaysDarkLogo.png" alt="" />
      </div>
      {/* middle side  */}
      <div className="navbMiddle">
        <ul className='navLinksWrapper'>
          <NavLink to={''}>List property</NavLink>
          <NavLink to={''}>Explore PG</NavLink>
          <NavLink to={''}>+91 7415051778</NavLink>
          <NavLink to={''}> info@otostays.com</NavLink>
        </ul>
      </div>
      {/* right side  */}
      <div className="navRight">
        <button className='navbarGetAcallBtn'>Get a call</button>
        <img className='menuBtn' src="\Amenties Svg\menu.png" alt="" />
      </div>
    </div>
  )
}

export default Navbar
