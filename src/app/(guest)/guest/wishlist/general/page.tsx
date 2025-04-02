import FooterNav from '@/components/guest-components/bookings/footerNav';
import PropertyCard from '@/components/guest-components/cards/propertyCard';
import { properties } from '@/data/properties';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className='p-4'>
      <Link
        href={'/guest/wishlist'}
        className="mb-3 flex cursor-pointer items-center text-black"
      >
        <ArrowLeft size={20} />
        <span className="ml-2 text-lg">General</span>
      </Link>
      <div className="grid grid-cols-1 gap-6 pt-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {properties.map((property) => (
          <div key={property.id} className="w-full">
            <PropertyCard property={property} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
