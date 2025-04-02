// import ListingDetails from '@/components/host-components/listing/rental-listings';
import OverallRating from '@/sections/dashboard/ratings/overall-rating';
import StaticCard from '@/components/host-components/cards/card-section';
import React from 'react';


const DashBoard = () => {
  return (
    <div className="flex gap-4">
    <div className='w-[80%] flex-1'>
      <StaticCard />
    </div>
    <div className=''>
      <OverallRating />
    </div>
  </div>
  );
};

export default DashBoard;
