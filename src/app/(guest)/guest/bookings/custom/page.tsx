import FooterNav from '@/components/guest-components/bookings/footerNav';
import Collapse from '@/components/guest-components/bookings/pending/Collapse';
import HeroCard from '@/components/guest-components/bookings/pending/heroSection';
import HeroSection from '@/components/guest-components/bookings/pending/heroSection';
import TopNav from '@/components/guest-components/bookings/pending/topNav';
import { Button } from '@/components/ui/button';
import {
  MessageCircle,
  PhoneCall,
  Info,
  Network,
  Wifi,
  Tv,
  SunSnow,
  Snowflake,
  Utensils,
  Flame,
} from 'lucide-react';
import React from 'react';

const page = () => {
  return (
    <div>
      <div>
        <div className="mb-5 w-full">
          <TopNav />
        </div>
        <HeroCard
          image="/images/hospitality1.png"
          bookingId="BK190234"
          bookedOn="Nov. 12, 2024"
          title="2 Bedroom Luxury Shortlet Apartment"
          address="2 Cubango CL, Maitama, Abuja 904101, Nigeria"
          price="₦1,644,640.00"
          rating={4.6}
          guests={4}
          nights={5}
          checkIn="12/23/2023"
          checkOut="11/23/2023"
          status="Checked In (2 nights left)"
          gradientBg="repeating-linear-gradient(45deg, #EB6B2C, #EB6B2C 10px, #F48C5C 10px, #F48C5C 20px)"
        />
      </div>

      <div className="space-y-5 pb-20 pt-5">
        <Collapse
          title="Meet the host"
          content={
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="/images/Ellipse.png"
                  alt="Ellipse"
                  className="h-8 w-8"
                />
                <p className="text-[16px]">Eleven Homes</p>
              </div>
              <Button
                variant="outline"
                className="ursor-pointer items-center rounded-lg bg-[#ef5e17]/15 p-2 shadow-none"
              >
                <MessageCircle className="flex h-4 w-4 items-center text-[#ef5e17]" />
                <p className="hidden text-[#ef5e17] lg:block">Message Host</p>
              </Button>
            </div>
          }
        />
        <Collapse
          title="Guest Information"
          content={
            <div className="space-y-5">
              <div className="lg:flex">
                <div className="flex w-full justify-between text-[16px]">
                  <p className="w-1/2">Booked by:</p>
                  <p>Lula Kuvalis II</p>
                </div>
                <div className="flex w-full justify-between text-[16px] lg:ml-16">
                  <p>Email:</p>
                  <p className="text-left">Cletus_Windler@gmail.com</p>
                </div>
              </div>
              <div className="space-y-2 text-[16px] lg:flex lg:justify-between">
                <p className="w-1/2">Number of Guest:</p>
                <div className="flex w-full justify-between lg:mr-16">
                  <p>4 Guest</p>
                  <p>2 Adult</p>
                  <p>1 Children</p>
                  <p>1 Infant</p>
                </div>
              </div>
            </div>
          }
        />
        <Collapse
          title="Payment Summary"
          content={
            <div className="space-y-5 lg:flex lg:items-center lg:gap-6">
              <div className="space-y-5 lg:w-full">
                <div className="flex justify-between text-[16px]">
                  <p>Nightly Rate:</p>
                  <div className="text-right">
                    <p>₦120,000.00 / night</p>
                    <p>3 Nights booked</p>
                  </div>
                </div>
                <div className="flex justify-between text-[16px]">
                  <p>Service:</p>
                  <p>₦50,000.00</p>
                </div>
                <div className="flex justify-between text-[16px]">
                  <p>Vat:</p>
                  <p>₦10,000.00</p>
                </div>
              </div>
              <Button className="w-full bg-[#f6bc6d] py-10 lg:h-full lg:w-fit lg:px-10">
                <div className="space-y-2">
                  <p className="text-[18px] text-[#221e1f]">Total</p>
                  <p className="text-[20px] font-bold text-[#221e1f]">
                    ₦1,644,640.00
                  </p>
                </div>
              </Button>
            </div>
          }
        />
        <Collapse
          title="Amenities & Instructions"
          content={
            <div className="flex items-center justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[14px]">
                  <Wifi className="h-5 w-5" />
                  <p>Wifi</p>
                </div>
                <div className="flex items-center gap-3 text-[14px]">
                  <Snowflake className="h-5 w-5" />
                  <p>AC</p>
                </div>
                <div className="flex items-center gap-3 text-[14px]">
                  <Tv className="h-5 w-5" />
                  <p>TV</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[14px]">
                  <Wifi className="h-5 w-5" />
                  <p>cooker</p>
                </div>
                <div className="flex items-center gap-3 text-[14px]">
                  <Wifi className="h-5 w-5" />
                  <p>Washing machine</p>
                </div>
                <div className="flex items-center gap-3 text-[14px]">
                  <Wifi className="h-5 w-5" />
                  <p>Swimming pool</p>
                </div>
              </div>
            </div>
          }
        />
        <Collapse
          title="House Rules"
          content={
            <div className="space-y-5">
              <p className="text-[16px] text-[#494949]">
                You'll be staying in someone's home, so please treat it with
                care and respect.
              </p>
              <div className="space-y-4 font-semibold lg:flex lg:items-center lg:justify-between lg:space-y-0">
                <p>No smoking</p>
                <p>No partying</p>
                <p>No unregistered guest</p>
                <p>No pet allowed</p>
              </div>
            </div>
          }
        />
      </div>

      <FooterNav />
    </div>
  );
};

export default page;
