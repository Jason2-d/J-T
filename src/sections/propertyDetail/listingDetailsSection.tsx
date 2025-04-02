'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  Wifi,
  Snowflake,
  Tv,
  Utensils,
  WashingMachine,
  Waves,
} from 'lucide-react';

interface ListingDetail {
  label: string;
  value: string;
}

interface Amenity {
  icon: React.ReactNode;
  label: string;
}

interface ListingDetailsProps {
  details: ListingDetail[];
  amenities: Amenity[];
}

const defaultDetails: ListingDetail[] = [
  { label: 'Minimum nights', value: '3 Nights' },
  { label: 'Maximum Nights', value: '365 Nights' },
  { label: 'Number of Guest:', value: '10 Guests' },
  { label: 'Number of bedrooms:', value: '5 Bedrooms' },
  { label: 'Private Bedrooms:', value: 'Yes' },
  { label: 'Private Beds', value: '5 Private beds' },
  { label: 'Dedicated bathrooms', value: 'No' },
  { label: 'Shared Bathroom', value: 'No' },
];

const defaultAmenities: Amenity[] = [
  { icon: <Wifi className="h-5 w-5 text-gray-600" />, label: 'Wifi' },
  { icon: <Utensils className="h-5 w-5 text-gray-600" />, label: 'Cooker' },
  { icon: <Snowflake className="h-5 w-5 text-gray-600" />, label: 'AC' },
  {
    icon: <WashingMachine className="h-5 w-5 text-gray-600" />,
    label: 'Washing machine',
  },
  { icon: <Tv className="h-5 w-5 text-gray-600" />, label: 'TV' },
  { icon: <Waves className="h-5 w-5 text-gray-600" />, label: 'Swimming pool' },
];

const ListingDetailsSection = ({
  details = defaultDetails,
  amenities = defaultAmenities,
}: Partial<ListingDetailsProps>) => {
  return (
    <div className="container max-w-3xl space-y-6 lg:p-4">
      {/* Listing Details */}
      <section aria-labelledby="listing-details-heading">
        <h2
          id="listing-details-heading"
          className="text-xl font-semibold text-[#221E1F]"
        >
          Listing Details
        </h2>
        <div className="mt-5 lg:mt-2 grid grid-cols-2 gap-y-4 text-sm text-black ">
          {details.map((detail, index) => (
            <React.Fragment key={index}>
              <span>{detail.label}</span>
              <span className="font-medium text-right lg:text-left">{detail.value}</span>
            </React.Fragment>
          ))}
        </div>
      </section>

      <Separator />

      {/* Amenities */}
      <section aria-labelledby="amenities-heading">
        <h2 id="amenities-heading" className="text-xl font-semibold">
          Amenities
        </h2>
        <div className="mt-2 grid grid-cols-2 gap-4 text-sm text-gray-700">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center space-x-2">
              {amenity.icon}
              <span>{amenity.label}</span>
            </div>
          ))}
        </div>
      </section>

      <Separator />
    </div>
  );
};

export default ListingDetailsSection;
