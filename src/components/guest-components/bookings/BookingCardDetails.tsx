// components/BookingSummary.js
import Image from 'next/image';
import { User, Moon, Calendar } from 'lucide-react';
import Link from 'next/link';

const BookingCardDetails = () => {
  const bookingDetails = [
    { icon: User, value: '4', label: 'Guests' },
    { icon: Moon, value: '5', label: 'Nights' },
    { icon: Calendar, value: '11/23/23', label: 'Check In' },
    { icon: Calendar, value: '11/23/23', label: 'Check Out' },
  ];

  return (
    <div>
      <Link href={`/guest/bookings/custom`} passHref>
      
    <div className="rounded-lg border-t-4 border-[#ef5e17] bg-orange-50 p-4">
      <div className="mx-auto flex max-w-md items-start gap-4">
        {/* Image */}
        <div className="w-1/4 flex-shrink-0 sm:w-1/5 md:w-1/6">
          <div className="relative aspect-square">
            <Image
              src="/images/hospitality1.png"
              alt="Apartment"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Booking ID and Price */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#ef5e17]">
              BK190234
            </span>
            <span className="text-xs font-semibold text-[#ef5e17]">
              ₦1,644,640.00
            </span>
          </div>

          {/* Property Name */}
          <h2 className="mt-1 text-[14px] font-semibold text-gray-800">
            2 Bedroom Luxury Shortlet Apartment
          </h2>

          {/* Booking Date */}
          <p className="mt-1 text-sm text-gray-600">Booked on: Nov. 12, 2024</p>
        </div>
      </div>

      {/* Details */}
      <div className="mt-4 grid grid-cols-4 gap-1 text-center text-xs text-gray-600 md:grid-cols-4">
        {bookingDetails.map(({ icon: Icon, value, label }, index) => (
          <div key={index} className="justify-between">
            <div className="flex items-center justify-center">
              <Icon className="h-4 w-4 text-gray-500" />
              <span>{value}</span>
            </div>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
      </Link>
    </div>
  );
};

export default BookingCardDetails;
