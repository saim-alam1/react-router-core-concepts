import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCards = ({ pricing }) => {
  const { name, price, description, features } = (pricing);
  return (
    <div className='border bg-amber-600 rounded-3xl p-4'>
      {/* Card Header */}
      <h1 className="text-4xl">{name}</h1>
      <h4 className='text-2xl'>{price}</h4>

      {/* Card Body */}
      <div className='bg-amber-800 p-4 rounded-2xl mt-10'>
        <p>{description}</p>
        {
          features.map((features, index) => <PricingFeatures key={index} features={features}></PricingFeatures>)
        }
      </div>
    </div>
  );
};

export default PricingCards;