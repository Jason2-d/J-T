import { Calendar, Moon, Users, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface BookingCardContentsProps {
  id: string;
  price: string;
  guests: number;
  nights: number;
  checkIn: string;
  checkOut: string;
  bookedOn: string;
  imageUrl: string;
}

const BookingCardContents: React.FC<BookingCardContentsProps> = ({
  id,
  price,
  guests,
  nights,
  checkIn,
  checkOut,
  bookedOn,
  imageUrl,
}) => {
  const bookingCardContentsInfo = [
    { icon: Users, value: guests, label: 'Guest' },
    { icon: Moon, value: nights, label: 'Nights' },
    { icon: Calendar, value: checkIn, label: 'Check In' },
    { icon: Calendar, value: checkOut, label: 'Check Out' },
  ];

  return (
    <div>
      <Link href={`/guest/bookings/custom`} passHref>
        <div className="flex w-full items-center justify-between rounded-lg border-l-4 border-[#ef5e17] bg-[#ef5e17]/15 p-4">
          {/* Left Section - Image and Details */}
          <div className="flex items-center gap-4">
            {/* Image */}
            <div className="h-12 w-16 flex-shrink-0 lg:h-16 lg:w-20">
              <img
                src={imageUrl}
                alt="Apartment"
                className="h-full w-full rounded-md object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex-1 space-y-1">
              <div className="flex justify-between">
                <p className="text-[0.875rem] font-semibold text-[#ef5e17]">
                  {id}
                </p>
                <p className="text-[0.875rem] font-bold text-[#ef5e17]">
                  {price}
                </p>
              </div>
              <p className="text-[0.875rem] font-semibold text-gray-800">
                2 Bedroom Luxury Shortlet Apartment
              </p>
              <p className="text-[0.75rem] text-gray-500">
                Booked on: {bookedOn}
              </p>
            </div>
          </div>

          {/* Right Section - Booking Info */}
          <div className="flex items-center gap-2 lg:gap-6">
            {bookingCardContentsInfo.map(
              ({ icon: Icon, value, label }, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-1 text-center text-[0.875rem] text-gray-700"
                >
                  <div className="flex items-center gap-0.5">
                    <Icon className="h-4 w-4 text-gray-500" />
                    <span>{value}</span>
                  </div>
                  <p className="text-[0.75rem]">{label}</p>
                </div>
              )
            )}
            <ChevronRight className="h-5 w-5 text-gray-500" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookingCardContents;
