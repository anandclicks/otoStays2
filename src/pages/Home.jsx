import React from 'react'
import HeroOne from '../components/HeroOne'
import Prasence from '../components/Prasence'
import HeroTwo from '../components/HeroTwo'
import HeroThree from '../components/HeroThree'
import Offer from '../components/Offer'
import TestimonialSlider from '../components/Testimonial'


const Home = () => {
  return (
    <div className='homeMain container-width'>
      {/* Hero section one  */}
      <HeroOne/>
    <HeroThree/>
      <HeroTwo/>
      <Prasence/>
    <Offer/>
    <TestimonialSlider/>
    </div>
  )
}

export default Home
