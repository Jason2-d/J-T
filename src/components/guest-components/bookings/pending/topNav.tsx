import { Button } from '@/components/ui/button';
import { ArrowLeft, Grid, Grid2X2, Grid2x2Icon, Grid3X3 } from 'lucide-react';
import React from 'react';
import CheckoutPopover from '../CheckoutPopover';
import Link from 'next/link';

const topNav = () => {
  return (
    <div className="flex w-full justify-between">
      <Link href={`/guest/bookings/1`} passHref className='cursor cursor-pointer'>
      <button className="flex h-9 items-center px-4 py-2 text-[15px]">
        <ArrowLeft className="h-4 w-5" />
        Booking Details
      </button>
      </Link>

      {/* <Button variant="outline" className='lg:hidden shadow-none text-[#494949]'>
        <Grid2x2Icon className="h-6 w-6 text-gray-700 mr-1" />
          More</Button> */}
      <div className="lg:hidden">
        <CheckoutPopover />
      </div>
    </div>
  );
};

export default topNav;
