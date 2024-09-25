import React from 'react'

const HeroOne = () => {
  return (
   <div className='heroOne'>
    {/* left sidem */}
    <div className="heroOne-left">
      <div className="box">
        <h1 className='heroOneTitle'>Welcome to your <br /> second Home</h1>
        <p className='heroOneDips'>Experience comfort, convenience, br and a sense of belonging—Oto Stays, your second home away from home."</p>
        <div className="explorePgBtn">Explore PG <i className="ri-arrow-right-double-line"></i></div>
      </div>
    </div>
    {/* right side  */}
    <div className="heroOne-right"></div>
   </div>
  )
}

export default HeroOne
