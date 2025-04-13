import React, { use } from 'react';
import PricingCards from '../pricingCards/PricingCards';

const PricingOptions = ({ pricingPromise }) => {

  const pricingData = use(pricingPromise);

  // console.log(pricingData);

  return (
    <div>

      <h2 className='text-5xl text-center'>Get Our Membership</h2>

      <div className='grid grid-cols-3 gap-8'>
        {
          pricingData.map(pricing => <PricingCards key={pricing.id} pricing={pricing}></PricingCards>)
        }
      </div>

    </div>
  );
};

export default PricingOptions;