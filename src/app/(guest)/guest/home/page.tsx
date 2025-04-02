'use client';
import React from 'react';
import PropertyCard from '@/components/guest-components/cards/propertyCard';
import PropertyNavigation from '@/components/guest-components/propertynavigation/PropertyNavigation';
import { properties } from '@/data/properties';
import BookingSection from '@/sections/home/bookingSection';
import {
  Building,
  Building2,
  Home,
  HomeIcon,
  Hotel,
  Key,
  MapPin,
  MoreHorizontal,
  Search,
} from 'lucide-react';
import CustomIconTab from '@/components/guest-components/v-home/PropertyTabs';
import PropertyTabs from '@/components/guest-components/v-home/PropertyTabs';
import HomeTab from '@/components/guest-components/v-home/homeTab';
import AccommodationTabs from '@/components/guest-components/v-home/accomodationtabs';
import FooterNav from '@/components/guest-components/bookings/footerNav';

// Add this CSS at the top of your file or in a global CSS file
const typographyStyles = `
  html {
    font-size: 16px; /* Base font size */
  }
  
  @media (max-width: 640px) {
    html {
      font-size: 14px; /* Smaller base for mobile */
    }
  }
`;

const page = () => {
  const tabs = [
    {
      value: 'all',
      label: 'ALL',
      icon: <MoreHorizontal className="h-5 w-5" />,
    },
    {
      value: 'apartments',
      label: 'Apartments',
      icon: <Home className="h-5 w-5" />,
    },
    {
      value: 'townhouse',
      label: 'Townhouse',
      icon: <Building className="h-5 w-5" />,
    },
    { value: 'villas', label: 'Villas', icon: <Hotel className="h-5 w-5" /> },
    { value: 'studio', label: 'Studio', icon: <Key className="h-5 w-5" /> },
    {
      value: 'condos',
      label: 'Condos',
      icon: <Building2 className="h-5 w-5" />,
    },
    {
      value: 'cottages',
      label: 'Cottages',
      icon: <HomeIcon className="h-5 w-5" />,
    },
  ];

  const handleTabChange = (value: string) => {
    console.log('Selected tab:', value);
    // Add your logic here for tab change
  };

  return (
    <div className="max-w-full">
      <div className="mx-auto w-full max-w-3xl overflow-hidden lg:hidden">
        {/* Background Image */}
        <div className="relative flex h-48 w-full flex-col items-center justify-center bg-cover bg-center text-center">
          <div className="absolute inset-0 flex">
            {/* Left Image */}
            <div className="relative w-1/2 overflow-visible">
              <img
                src="/images/hospitality2.png"
                alt="Living Room"
                className="absolute h-full w-full object-cover"
              />
            </div>

            {/* Right Image */}
            <div className="relative w-1/2 overflow-visible">
              <img
                src="/images/hospitality5.png"
                alt="Bedroom"
                className="absolute h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/100 to-black/35" />

          {/* Discount Text */}
          <div className="relative z-10 text-white">
            <h2 className="text-2rem md:text-2.25rem font-bold text-orange-400">
              5% Off
            </h2>
            <p className="text-1rem md:text-1.125rem mt-2">
              Book up to 4 nights and enjoy 5% off
            </p>

            {/* Location */}
            <p className="text-0.875rem md:text-1rem mt-2 flex items-center justify-center space-x-2">
              <MapPin className="mr-1 h-4 w-4" />
              <span className="text-white">Lagos, Nigeria</span>
            </p>
          </div>
        </div>

        {/* Search Button */}
        <div className="relative -mt-6 flex justify-center">
          <div className="flex items-center space-x-2 rounded-2xl bg-white p-3 font-medium text-black shadow-md transition hover:shadow-xl">
            <Search className="h-5 w-5 text-gray-600" />
            <input
              type="text"
              placeholder="Start your search"
              className="text-1rem md:text-1.125rem h-full w-full placeholder-black focus:outline-none"
            />
          </div>
        </div>
      </div>
      <BookingSection />
      {/* <PropertyNavigation /> */}
      <AccommodationTabs />
      {/* <PropertyTabs /> */}
      <FooterNav />
    </div>
  );
};

export default page;
