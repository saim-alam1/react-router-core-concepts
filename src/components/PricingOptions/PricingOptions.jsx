import React, { use } from 'react';
import PricingCards from '../pricingCards/PricingCards';
import DaisyPricing from '../DaisyPricing/DaisyPricing';

const PricingOptions = ({ pricingPromise }) => {

  const pricingData = use(pricingPromise);

  // console.log(pricingData);

  return (
    <div>

      <h2 className='text-5xl text-center'>Get Our Membership</h2>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>

        {/* {
          pricingData.map(pricing => <PricingCards key={pricing.id} pricing={pricing}></PricingCards>)
        } */}

        {
          pricingData.map(pricing => <DaisyPricing key={pricing.id} pricing={pricing}></DaisyPricing>)
        }
      </div>

    </div>
  );
};

export default PricingOptions;