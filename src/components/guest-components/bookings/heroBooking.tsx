'use client';
import React from 'react';
import { Button } from '../../ui/button';
import {
  Calendar1Icon,
  HeartIcon,
  HomeIcon,
  MailIcon,
  MessagesSquareIcon,
} from 'lucide-react';
import RealTimeDate from './realTimeDate';
import FooterTab from './footerNav';

const HeroBooking = () => {
  return (
    <div className="">
      <section className="relative min-h-screen w-full items-center overflow-y-hidden pt-20 text-center">
        <div className="">
          <div className="space-y-3">
            <RealTimeDate />
            <div className="">
              <h1 className="text-[22px] font-semibold text-[#221e1f]">
                You don't have any bookings yet.
              </h1>
              <p className="inline text-[18px] font-[450px] text-[#221e1f]">
                Ready to find your perfect stay? Discover unique spaces waiting
                for you to explore. Let's get your next adventure started!
              </p>
            </div>
          </div>
          <Button className="mt-10 text-[16px]">Browse Stays</Button>
        </div>
        <div className="absolute bottom-0 w-full md:hidden">
          <FooterTab />
        </div>
      </section>
    </div>
  );
};

export default HeroBooking;
