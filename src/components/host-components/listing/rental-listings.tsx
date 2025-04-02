import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Star, MoreHorizontal, Edit, Search } from 'lucide-react';

const ListingPage: React.FC = () => {
  const thumbnails = [
    '/host-image/luxury.jpeg',
    '/host-image/luxury.jpeg',
    '/host-image/luxury.jpeg',
  ];

  const listingDetails = [
    { label: 'Minimum nights', value: '3 Nights' },
    { label: 'Maximum Nights', value: '365 Nights' },
    { label: 'Number of Guest', value: '10 Guests' },
    { label: 'Number of bedrooms', value: '5 Bedrooms' },
    { label: 'Private Bedrooms', value: 'Yes' },
    { label: 'Private Beds', value: '5 Private beds' },
    { label: 'Dedicated bathrooms', value: 'No' },
    { label: 'Shared Bathroom', value: 'No' },
  ];

  return (
    <div className="flex h-screen w-full">
      {/* Left Side - Listing Cards */}
      <div className="w-[55%] space-y-4 overflow-y-auto border-r p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex w-full items-center justify-between space-x-2">
            <div className="flex items-center rounded-lg border px-3">
              <Search className="h-8 w-8 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full rounded-lg px-3 py-2 focus:outline-none focus:ring-0"
              />
            </div>
            <div className="flex items-center space-x-2">
              <select className="rounded-lg border px-3 py-2">
                <option>Peripolar</option>
              </select>
              <select className="rounded-lg border px-3 py-2">
                <option>All Type</option>
              </select>
            </div>
          </div>
        </div>

        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="flex cursor-pointer items-center space-x-4 rounded-lg border p-4 hover:bg-gray-50"
          >
            <img
              src="/host-image/luxury.jpeg"
              alt="Listing"
              className="h-24 w-32 rounded-lg object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between space-y-2">
                <h3 className="font-semibold">
                  2 Bedroom Luxury Shortlet Apartment
                </h3>
                <div className="flex items-center text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="ml-1">5.0</span>
                </div>
              </div>
              <p className="text-sm text-gray-500">Maitama, FCT Abuja</p>
              <div className="flex items-center justify-between">
                <p className="text-sm">Booked 385 times</p>
                <p className="font-semibold text-gray-500">
                 <span className='pr-2'> NGN130,000 Night </span> / <span className='pl-2'>min. 3</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side - Listing Details */}
      
    </div>
  );
};

export default ListingPage;
