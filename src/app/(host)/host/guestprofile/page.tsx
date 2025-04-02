import DotMenuIcon from '@/components/icons/dots';
import { Separator } from '@radix-ui/react-separator';
import { Clock, Mail, Phone, Star } from 'lucide-react';
import React from 'react';

const GuestProfile = () => {
  return (
    <div>
      <div className="flex gap-4">
        {/* profile */}
        <div className="w-[30%] rounded-lg bg-white px-3 pb-5">
          {/* title */}
          <div className="mb-12 flex items-center justify-between">
            <h3 className="text-base font-bold">Profile</h3>
            <div>
              <DotMenuIcon className="font-bold" />
            </div>
          </div>
          {/* title */}
          <div className="flex flex-col items-center space-y-1">
            {/* image */}
            <div className="mb-2 h-24 w-24 rounded-full border">
              <img
                src="/host-image/profile.jpeg"
                alt="francis"
                className="rounded-full object-cover object-center"
              />
            </div>
            <h3 className="text-[20px] font-bold tracking-wide">
              Francis Mayert
            </h3>
            <span className="text-sm text-gray-500">V011-9823422</span>
          </div>
          <Separator className="my-4 h-[2px] w-full bg-gray-300" />
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <div className="rounded-md bg-[#FDE7DC] p-2">
                <Phone className="h-5 w-5 text-gray-500" />
              </div>
              <span className="text-[#717171]">496-581-6971</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="rounded-md bg-[#FDE7DC] p-2">
                <Mail className="h-5 w-5 text-gray-500" />
              </div>
              <span className="text-[#717171]">Dave_Little40@yahoo.com</span>
            </div>
          </div>
          <Separator className="my-4 h-[2px] w-full bg-gray-300" />
          <div className="space-y-5">
            <h3 className="font-bold">Personal Information</h3>
            <div className="flex flex-col gap-3">
              <div className="flex space-x-9 text-left">
                <div>
                  <span className="text-gray-500">Date of Birth</span>
                  <h3 className="text-base font-semibold text-[#181A20]">
                    June 15, 1985
                  </h3>
                </div>
                <div>
                  <span className="text-gray-500">Gender</span>
                  <h3 className="text-base font-semibold text-[#181A20]">
                    Male
                  </h3>
                </div>
              </div>
              <div className="flex space-x-16 text-left">
                <div>
                  <span className="text-gray-500">Nationality</span>
                  <h3 className="text-base font-semibold text-[#181A20]">
                    Nigeria
                  </h3>
                </div>
                <div>
                  <span className="text-gray-500">Identification</span>
                  <h3 className="text-base font-semibold text-[#181A20]">
                    Passport
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* profile */}

        {/* booking info */}
        <div className="flex w-full gap-4 rounded-lg bg-white px-3">
          {/* booking info */}
          <div className="w-[70%]">
            <div className="mb-10 flex justify-between text-base font-bold text-[#2F2F2F]">
              <h3>Booking info</h3>
              <div>
                <DotMenuIcon className="font-bold" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="inline-flex rounded-lg bg-[#FCCD8D] px-2 py-2">
                <Clock />
                <span className="ml-2">Booking Pending</span>
              </div>
              <h3 className="text-2xl font-medium text-[#181A20]">
                Booking ID: BK-234245
              </h3>
              <span className="text-sm font-medium text-gray-500">
                June 17, 2024 | 9,46 AM
              </span>
            </div>
            <div className="my-6 space-y-6">
              <div className="flex max-w-64 justify-between">
                <div>
                  <h3>Apartment</h3>
                  <span className="">
                    4 Bedroom at Maitama, <br /> Abuja
                  </span>
                </div>
                <div>
                  <h3>Room</h3>
                  <span>4</span>
                </div>
              </div>

              <div className="flex max-w-64 justify-between">
                <div>
                  <h3>Apartment Type</h3>
                  <span className="">Duplex</span>
                </div>
                <div>
                  <h3>Room</h3>
                  <span>4</span>
                </div>
              </div>

              <div className="flex max-w-md justify-between">
                <div>
                  <h3>Apartment Type</h3>
                  <h3 className="">Duplex</h3>
                  <span>2:00 PM</span>
                </div>
                <div>
                  <h3>Check Out</h3>
                  <h3>June 22, 2024</h3>
                  <span>12:00 PM</span>
                </div>
                <div>
                  <h3>Duration</h3>
                  <span>4 nights</span>
                </div>
              </div>

              <div>
                <span>Note</span>
                <h3>
                  Guest requested extra pillows and towels. Ensure room service
                  is available upon arrival
                </h3>
              </div>

              <div className="flex w-full justify-end gap-6">
                <button className="rounded-lg bg-[#2F2F2F1A] px-8 py-3 text-[#EF5E17]">
                  Declined
                </button>
                <button className="rounded-lg bg-[#EF5E17] px-8 py-3 text-white">
                  Approved
                </button>
              </div>
            </div>
          </div>

          {/* room info */}
          <div className="flex-1 rounded-lg bg-[#F8FAFC] p-6">
            <div className="mb-10 flex justify-between text-base font-bold text-[#2F2F2F]">
              <h3>Room info</h3>
              <h3 className="text-[#8b8787]">View Details</h3>
            </div>
            {/* room card */}
            <div>
              <div>
                <img 
                src="/host-image/profilehost.jpeg" 
                alt="" 
                className="rounded-lg" />
              </div>
              <div className='flex my-3'>
                <div>
                  <h3>2 Bedroom Luxury ShortLet Apartment</h3>
                  <span>Maitama FCT Abuja</span>
                </div>

                <div className='flex space-x-1'>
                  <Star className='text-[#DF9409]'/>
                  <span>5</span>
                </div>
              </div>
              <Separator className="my-4 h-[2px] w-full bg-gray-300" />

              {/* summary price */}
              <div>
                <div>
                  <h3>Price Summary</h3>
                  <span>Pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestProfile;
