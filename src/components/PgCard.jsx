import React from 'react'

const PgCard = ({ pgDetails }) => {
  // console.log(pgDetails);
  return (
    <div className='pgCard'>
      <div className='pgImageWrapper'>
      <img 
        className='pgCardImg' 
        src={`${pgDetails.imageUrl}1.jpg`} // Fallback to default image if not provided
        alt={pgDetails.pgTitle} 
      />
      </div>
      <div className="pgCardInfo">
        {/* Title */}
        <div className="pgCardTitle">
          <h3>{pgDetails.pgTitle}</h3>
          <p>UNISEX in {pgDetails.city}</p>
        </div>
       
        <div className="otherInfo">
          <div className="price">
           <div>
           <small>Starts at</small>
           <p className='PriceTag'>₹{pgDetails.doubleSharingPrice} </p>
           </div>
              <p className='discount'>{pgDetails.discount || "UPTO 14% OFF" }</p>
            
          </div>
          <div>
          <div className="GotoPgPage">
            Book now
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PgCard;
