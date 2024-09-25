import React, { useContext } from 'react';
import PgCard from './PgCard';
import { UserDataContext } from '../../UserDatatcontext/UserDatatContext';

const HeroThree = () => {
  const { AllUserData } = useContext(UserDataContext);
  // console.log(AllUserData);

  return (
    <div className='heroThree'>
      <div className="Explore-more-property">
      <h3 className='heroThreeTitle'>Properties <span className='propertyOverview'>overview</span></h3>
        <p>Explore more <i className="ri-arrow-right-double-line"></i></p>
      </div>
      
      <div className='sectionThreePropertyWrapper'>
        {AllUserData.map((item, index) => 
          index < 4 ? <PgCard key={index} pgDetails={item} /> : null
        )}
      </div>
      
    </div>
  );
};

export default HeroThree;
