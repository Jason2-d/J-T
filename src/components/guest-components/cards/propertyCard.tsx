'use client';

import { Property } from '@/app/types/common';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

import { Star, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (api) {
      api.on('select', () => {
        setCurrentSlide(api.selectedScrollSnap());
      });
    }
  }, [api]);

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (api) api.scrollPrev();
  };

  const handleNextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (api) api.scrollNext();
  };

  return (
    <div>
      <Link href={`/guest/home/1`} passHref>      
      <Card className="relative cursor-pointer overflow-hidden rounded-3xl border-none shadow-none duration-500 animate-in hover:shadow-lg">
      {/* Top Badge & Favorite Button */}
      <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between p-4">
        <span className="rounded-xl bg-white/70 px-3 py-2 text-sm font-medium text-customOrange">
          Instant Book
        </span>
        <button className="rounded-full p-2">
          <Heart
            className="h-8 w-8 text-white"
            fill={isLiked ? '#FF3333' : '#808080'}
            strokeWidth={2}
            stroke={isLiked ? 'white' : ''}
            onClick={() => setIsLiked(!isLiked)}
          />
        </button>
      </div>

      {/* Carousel */}
      <CardContent className="p-0">
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Previous Button - Only show on hover */}

          {isHovered && (
            <button
              onClick={handlePrevSlide}
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow-md transition-colors hover:bg-white"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>
          )}

          {/* Next Button - Only show on hover */}

          {isHovered && (
            <button
              onClick={handleNextSlide}
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow-md transition-colors hover:bg-white"
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>
          )}

          <Carousel className="w-full" opts={{ loop: true }} setApi={setApi}>
            <CarouselContent>
              {property.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-[4/3] w-full">
                    <img
                      src={image}
                      alt={`${property.title} ${index + 1}`}
                      className="h-full w-full rounded-3xl object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Agency Logo */}
          <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
            <img
              src={property.agencyLogo}
              alt={property.agencyName}
              className="h-8 w-8 rounded-full"
            />
            <span className="text-sm font-medium text-white">
              {property.agencyName}
            </span>
          </div>

          {/* Clickable Indicator Dots */}
          <div className="absolute bottom-7 right-4 z-10 flex gap-1">
            {property.images.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)} // Scroll to the selected slide
                className={`h-[7px] rounded-full transition-all ${
                  currentSlide === index
                    ? 'w-4 bg-orange-500'
                    : 'w-[7px] bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Property Details */}
        <div className="group p-4">
          <div className="mb-1 flex items-start justify-between">
            <div>
              <h2
                onClick={() => router.push(`/guest/home/${property.id}`)}
                className="cursor-pointer text-[16px] font-semibold transition-colors group-hover:text-customOrange"
              >
                {property.title}
              </h2>
              <p className="text-[14px] text-gray-500">{property.location}</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-[#DF9409] text-[#DF9409]" />
                <span className="text- ml-1 font-semibold">
                  {property.rating}
                </span>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-400">
                <p>{property.reviews}</p>
                <p>Reviews</p>
              </div>
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-[16px] font-bold">{property.price}</span>
            <span className="text-[14px] text-[#575757]">
              Night / min. {property.minNights}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
      </Link>
    </div>
  );
};

export default PropertyCard;
