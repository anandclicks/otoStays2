import React from 'react'
import { Link } from 'react-router-dom'

const Prasence = () => {
  return (
    <div className='prasence'>
      <h1 className='prasenceTitle'>Here to <span className='propertyOverview'>help</span></h1>
      <div className="allCities">
        <Link className='city'>
        <img className='cityImage' src="\Cityimages\noida.jpg" alt="" />
        <div className="PrasencecityName">Noida</div>
        </Link>
        <Link className='city'>
        <img className='cityImage' src="\Cityimages\delhi.jpg" alt="" />
        <div className="PrasencecityName">Delhi</div>
        </Link>
        <Link className='city'>
        <img className='cityImage' src="\Cityimages\gurugram.jpg" alt="" />
        <div className="PrasencecityName">Gurugram</div>
        </Link>
        <Link className='city'>
        <img className='cityImage' src="\Cityimages\greater-noida.jpg" alt="" />
        <div className="PrasencecityName">Greater Noida</div>
        </Link>
        <Link className='city'>
        <img className='cityImage' src="\Cityimages\ghaziabad.jpg" alt="" />
        <div className="PrasencecityName">Ghaziabad</div>
        </Link>
      </div>
    </div>
  )
}

export default Prasence
