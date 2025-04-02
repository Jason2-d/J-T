import FooterNav from '@/components/guest-components/bookings/footerNav';
import EmailIcon from '@/components/guest-components/icons/emailIcon';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className='flex flex-col justify-between mt-3'>
      <div className="mx-auto mt-[100px] flex max-w-lg flex-col items-center gap-6 text-center lg:mt-[170px]">
        <div>
          <EmailIcon size={60} color="#F6BC6D" />
        </div>
        <div>
        <h3 className="text-[22px] font-[500] text-[#221E1F]">
          Your messages will appear here
        </h3>
        <p className="text-[18px] font-[450] text-[#221E1F]">
          Once you've booked a place, you can reach out to your host with any
          questions or requests
        </p>
        </div>

        <Link href={`/guest/wishlist/custom/1`} passHref>
          <Button className="bg-orange-600 hover:bg-orange-700">
            Explore Listings
          </Button>
        </Link>
      </div>
      <FooterNav />
    </div>
  );
};

export default page;
