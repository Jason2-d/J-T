import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Search, Calendar, User } from 'lucide-react';

const BookingSection = () => {
  return (
    <section className="relative mb-16 h-[200px] hidden lg:block">
      {/* Split Background Images Container */}
      <div className="relative flex h-[150px] justify-center overflow-hidden md:h-[400px] md:w-full lg:h-[250px] lg:rounded-[32px]">
        <div className="absolute inset-0 flex">
          {/* Left Image */}
          <div className="relative w-1/2 overflow-visible">
            <img
              src="/images/hospitality2.png"
              alt="Living Room"
              className="absolute w-full bg-red-500 object-cover"
            />
          </div>

          {/* Right Image */}
          <div className="relative w-1/2 overflow-visible">
            <img
              src="/images/hospitality5.png"
              alt="Bedroom"
              className="absolute w-full bg-blue-500 object-cover"
            />
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/100 to-black/35" />

        {/* Content Overlay */}
        <div className="absolute flex-1 justify-center text-center mt-16">
          <h2 className="flex items-baseline justify-center">
            <span className="text-2.5rem font-black text-orange-500 lg:text-3rem">
              5%
            </span>
            <span className="ml-2 font-black text-orange-500 text-1.5rem md:text-1.875rem">
              off
            </span>
          </h2>
          <p className="mt-2 text-1.125rem font-medium text-white md:text-1.25rem">
            Book up to 4 nights and enjoy 5% off
          </p>
          <div className="mt-2 flex items-center justify-center text-0.875rem text-white md:text-1rem">
            <MapPin className="mr-1 h-4 w-4" />
            <span>Lagos, Nigeria</span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="absolute -bottom-20 left-1/2 hidden w-[90%] max-w-5xl -translate-x-1/2 transform lg:block">
        <div className="rounded-xl bg-white shadow-lg">
          <div className="grid grid-cols-4 items-center p-1">
            {/* Where */}
            <div className="group rounded-l-xl border-r border-gray-200 pl-6 transition-colors hover:bg-gray-50">
              <div className="flex flex-col px-2">
                <div className="flex gap-1">
                  <MapPin className="mr-2 h-4 w-4 text-gray-400" />
                  <label className="text-0.875rem font-semibold text-gray-800">
                    Where
                  </label>
                </div>
                <div className="flex items-center">
                  <Input
                    placeholder="Search destination"
                    className="h-6 border-0 bg-transparent p-0 text-0.875rem placeholder:text-gray-400 focus-visible:ring-0 md:text-1rem"
                  />
                </div>
              </div>
            </div>

            {/* Check In */}
            <div className="group cursor-pointer border-r border-gray-200 pl-6 transition-colors hover:bg-gray-50">
              <div className="flex flex-col px-2">
                <div className="flex gap-1">
                  <Calendar className="mr-2 h-4 w-4 text-gray-400" />
                  <label className="text-0.875rem font-semibold text-gray-800">
                    Check In
                  </label>
                </div>
                <div className="flex h-6 items-center">
                  <span className="text-0.875rem text-gray-400 md:text-1rem">Add date</span>
                </div>
              </div>
            </div>

            {/* Check Out */}
            <div className="group cursor-pointer border-r border-gray-200 pl-6 transition-colors hover:bg-gray-50">
              <div className="flex flex-col px-2">
                <div className="flex gap-1">
                  <Calendar className="mr-2 h-4 w-4 text-gray-400" />
                  <label className="text-0.875rem font-semibold text-gray-800">
                    Check Out
                  </label>
                </div>
                <div className="flex h-6 items-center">
                  <span className="text-0.875rem text-gray-400 md:text-1rem">Add date</span>
                </div>
              </div>
            </div>

            {/* Who + Search Button */}
            <div className="group flex items-center justify-between rounded-r-xl pl-6 transition-colors hover:bg-gray-50">
              <div className="flex flex-col px-2">
                <div className="flex gap-1">
                  <User className="mr-2 h-4 w-4 text-gray-400" />
                  <label className="text-0.875rem font-semibold text-gray-800">
                    Who
                  </label>
                </div>
                <div className="flex h-6 items-center">
                  <span className="text-0.875rem text-gray-400 md:text-1rem">Add guests</span>
                </div>
              </div>
              <Button className="rounded-lg bg-orange-500 p-7 text-1rem text-white hover:bg-orange-600">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;