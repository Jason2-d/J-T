import Image from "next/image";
import { MapPin, Map, Star, Users, Moon, Calendar } from "lucide-react";
import React from "react";
import CheckoutPopover from "../CheckoutPopover";

interface HeroCardProps {
  image?: string;
  bookingId?: string;
  bookedOn?: string;
  title?: string;
  address?: string;
  price?: string;
  rating?: number;
  guests?: number;
  nights?: number;
  checkIn?: string;
  checkOut?: string;
  status?: string;
  gradientBg?: string;
}

const HeroCard: React.FC<HeroCardProps> = ({
  image,
  bookingId,
  bookedOn,
  title,
  address,
  price,
  rating,
  guests,
  nights,
  checkIn,
  checkOut,
  status,
  gradientBg = "repeating-linear-gradient(45deg, #EB6B2C, #EB6B2C 10px, #F48C5C 10px, #F48C5C 20px)",
}) => {
  return (
    <div className="w-full rounded-2xl border-t-[10px] border-[#ef5e17] bg-[#ef5e17]/15 p-4 sm:p-6 md:flex md:gap-6">
      {/* Image Section */}
      <div className="w-full md:w-1/3">
        <Image
          src={image || "/default-image.jpg"}
          alt={title || "Default Title"}
          width={150}
          height={150}
          className="w-full h-48 md:h-full sm:h-64 lg:h-full object-cover rounded-2xl"
        />
      </div>

      {/* Details Section */}
      <div className="flex-1 flex flex-col mt-4 md:mt-0">
        {/* Booking Info */}
        <div className="flex justify-between text-[0.75rem] sm:text-[0.875rem] text-[#494949]">
          <p className="font-semibold">{bookingId}</p>
          <p className="text-[#2f2f2f]">Booked on: {bookedOn}</p>
        </div>

        <h2 className="mt-2 text-lg sm:text-xl lg:text-2xl font-bold text-[#221e1f]">{title}</h2>

        <div className="mt-2 flex-1 md:flex items-center justify-between">
          <div className="flex items-center text-[0.75rem] sm:text-[0.875rem] text-[#494949]">
            <MapPin className="h-4 w-4 text-[#222222] mr-1" />
            <span>{address}</span>
          </div>
          <div className="flex items-center text-[0.75rem] sm:text-[0.875rem] text-orange-500 justify-end">
            <Map className="h-4 w-4 text-[#222222] mr-1" />
            <span>Get Directions</span>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between text-lg sm:text-xl font-semibold text-[#221e1f]">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            <span>{rating}</span>
          </div>
          <p>{price}</p>
        </div>

        {/* Booking Details */}
        <div className="mt-4 flex gap-4 text-[0.75rem] sm:text-[0.875rem] text-[#475569] justify-between">
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>{guests}</span>
            </div>
            <p>Guests</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <Moon className="h-4 w-4 mr-1" />
              <span>{nights}</span>
            </div>
            <p>Nights</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{checkIn}</span>
            </div>
            <p>Check In</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{checkOut}</span>
            </div>
            <p>Check Out</p>
          </div>
        </div>

        {/* Status and Checkout */}
        <div className="mt-4 flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex w-full bg-[#221e1f]/10 rounded-lg">
            <span className="text-[#494949] font-medium px-4 py-2 text-[0.75rem] sm:text-[0.875rem]">
              Status:
            </span>
            <div
              className="flex-1 px-4 py-2 text-white font-bold text-center rounded-lg"
              style={{ background: gradientBg }}
            >
              {status}
            </div>
          </div>
          <div className="hidden lg:block">
            <CheckoutPopover />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;