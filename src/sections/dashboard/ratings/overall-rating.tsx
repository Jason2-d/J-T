import React from 'react';

import DotMenuIcon from '@/components/icons/dots';
import TimelineSection from './activity-timeline';

const OverallRating = () => {
  const ratings = [
    { label: 'Facilities', score: 4.4 },
    { label: 'Cleanliness', score: 4.7 },
    { label: 'Services', score: 4.6 },
    { label: 'Comfort', score: 4.8 },
    { label: 'Location', score: 4.5 },
  ];
  return (
    <div className="hidden lg:block w-full">
      <div className="flex flex-col space-y-2">
        <div className="w-full items-center justify-between">
          <h3 className="font-poppins text-base font-bold text-[#2F2F2F]">
            Overall Rating
          </h3>
          <div>
            <DotMenuIcon />
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex space-x-2">
            <div className="flex items-center space-x-[3px] rounded-md bg-[#FDE7DC] px-3">
              <span className="text-lg font-bold">4.6</span>
              <span className="text-sm font-medium text-[#666666]">
                /5
              </span>{' '}
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#2F2F2F]">Impressive</h3>
              <span className="font-poppins text-xs font-normal tracking-wide text-[#64748B]">
                From 2547 reviews
              </span>
            </div>
          </div>

          {/* ratings */}
          <div className="space-y-4">
            {ratings.map((rating, index) => (
              <div key={index} className="flex items-center space-x-8">
                <div className="w-1/8 flex items-center space-x-3 md:w-1/4">
                  <span className="text-gray-700">{rating.label}</span>
                </div>
                <div className="flex w-3/4 items-center space-x-3">
                  <div className="h-2 flex-grow rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-orange-500"
                      style={{ width: `${(rating.score / 5) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-10 text-right font-semibold text-gray-700">
                    {rating.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent activities timeline*/}
        <div className="flex items-center justify-between">
          <h3 className="font-poppins text-base font-bold text-[#2F2F2F]">
            Recent Activities
          </h3>
          <div>
            <DotMenuIcon />
          </div>
        </div>
        <TimelineSection />
      </div>
    </div>
  );
};

export default OverallRating;
