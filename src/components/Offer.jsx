import React, { useState } from 'react'

const Offer = () => {
  const [offerClickedOrNot, setofferClickedOrNot] = useState(false)
  const offerClicked = (evt)=> {
    if(offerClickedOrNot) {
      
      evt.currentTarget.classList.add("termsAndcondition")
      setofferClickedOrNot(false)
    }
    else {
      evt.currentTarget.classList.remove("termsAndcondition")
      setofferClickedOrNot(true)
    }

  }
  return (
    <div className='offerSection'>
      <h3 className='offerTitle'>Offer for you❤️</h3>
      <ul className='allOffers'>
          <li onClick={offerClicked} className='firstOffer termsAndcondition'>
          <h4 className='offer'>Discount Upto 10%</h4>
          <p className='offerDips'>"If a customer signs a 6-month agreement with us, we can offer a 10% discount. This would apply to double-sharing accommodations."</p>
          <p className='termsAndCondition'>Terms & condtion</p> 
          <small>Minimum stay of 6 months required. <br />
Payment: 2 months' rent + 1 month’s security deposit. <br />
Early exit: ₹2,000 will be deducted from the security deposit, plus any additional charges.</small>
<i className="ri-arrow-down-s-line expendOffer"></i>
          </li>
          <li onClick={offerClicked} className='secondOffer '>
          <h4 className='offer'>Discount Upto 50%</h4>
          <p className='offerDips'>"Sign a 6-month double-sharing lease to get 50% off the first month’s rent. Pay 2 months' rent plus 1 month’s security deposit. <br /> No other discounts subject to terms and conditions"</p>
          <p className='termsAndCondition'>Terms & condtion</p> 
          <small>You must have Double Sharing <br />
Minimum stay of 6 months required. <br />
Payment: 2 months' rent + 1 month’s security deposit. <br />
Early exit: ₹2,000 will be deducted from the security deposit, plus any additional charges.</small>
<i className="ri-arrow-down-s-line expendOffer"></i>
          </li>
          <li onClick={offerClicked} className='thirdOffer '>
          <h4 className='offer'>Discount Upto 100%</h4>
          <p className='offerDips'>"OTO Stays is offering a promotion where customers can fill in their details and participate in a lucky draw held on the 30th or 31st of each month. The draw will be based on the number of vacant beds in a property. The winner will receive a free stay for the first month, but some terms and conditions will apply"</p>
          <p className='termsAndCondition'>Terms & condtion</p> 
          <small>Minimum stay of 6 months required. <br />
Payment: 2 months' rent + 1 month’s security deposit. <br />
Early exit: ₹2,000 will be deducted from the security deposit, plus any additional charges.</small>
<i className="ri-arrow-down-s-line expendOffer"></i>
          </li>
         
      </ul>
    </div>
  )
}

export default Offer
