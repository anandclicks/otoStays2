import React from 'react'

const HeroTwo = () => {
  return (
    <div className='heroTwo'>
      {/* hero two left  */}
      <div className="herotwo-left">
        <img src="\HerosectionImages\happyCustomer.jpg" alt="" />
      </div>
      {/* hero two right  */}
      <div className="herotwo-right">
        <h3 className='whyChooseUsTitle'>Why Choose Oto Stays: Our Commitment to Quality and Comfort</h3>
        <ul>
          <li>
            <h2 className='quilityTitle'>Friendly Environment</h2>
            <p>Enjoy a warm and welcoming community where you feel right at home from day one</p></li>
          <li>
            <h2 className='quilityTitle'>Hassle-Free
            Brokerage</h2>
            <p>Skip the paperwork and extra costs—our services arestraightforward with no hidden fees.</p></li>
          <li>
            <h2 className='quilityTitle'>Brokerage Accommodation</h2>
            <p>Relish well-prepared meals and comfortable living spaces, all designed to enhance Easy on your daily life.</p></li>
        </ul>
      </div>
    </div>
  )
}

export default HeroTwo
