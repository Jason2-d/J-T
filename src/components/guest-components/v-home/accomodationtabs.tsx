'use client';

import { cn } from '@/lib/utils';
import { properties } from '@/data/properties';
import PropertyCard from '../cards/propertyCard';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FilterIcon, XIcon, X } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@radix-ui/react-separator';

type AccommodationType =
  | 'All'
  | 'Apartments'
  | 'Townhouse'
  | 'Villas'
  | 'Studio'
  | 'Terraces'
  | 'Beach Front'
  | 'Resort'
  | 'Hotels'
  | 'Hostels'
  | 'Homestays'
  | 'Guesthouses';

const propertyTypeMapping: Record<number, AccommodationType> = {
  1: 'Apartments',
  2: 'Apartments',
  3: 'Townhouse',
  4: 'Villas',
  5: 'Studio',
  6: 'Beach Front',
};

// FilterDialog Component
const FilterDialog = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([
    85000, 85000,
  ]);
  const [bedrooms, setBedrooms] = useState<number | 'Any'>('Any');
  const [bathrooms, setBathrooms] = useState<number>(3);
  const [instantBook, setInstantBook] = useState(false);

  const handlePriceChange = (value: number[]) => {
    const [start, end] = value;
    const minDistance = 5000;
    if (end - start < minDistance) {
      if (start === priceRange[0]) {
        setPriceRange([start, start + minDistance]);
      } else if (end === priceRange[1]) {
        setPriceRange([end - minDistance, end]);
      }
    } else {
      setPriceRange([start, end]);
    }
  };

  const incrementBedrooms = () => {
    if (bedrooms === 'Any') setBedrooms(1);
    else if (bedrooms < 10) setBedrooms(bedrooms + 1);
  };

  const decrementBedrooms = () => {
    if (bedrooms === 'Any') return;
    if (bedrooms === 1) setBedrooms('Any');
    else setBedrooms(bedrooms - 1);
  };

  const incrementBathrooms = () => {
    if (bathrooms < 10) setBathrooms(bathrooms + 1);
  };

  const decrementBathrooms = () => {
    if (bathrooms > 0) setBathrooms(bathrooms - 1);
  };

  const handleClear = () => {
    setPriceRange([85000, 85000]);
    setBedrooms('Any');
    setBathrooms(0);
    setInstantBook(false);
  };

  const handleSearch = () => {
    console.log({ priceRange, bedrooms, bathrooms, instantBook });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 rounded-none border-gray-300"
        >
          <FilterIcon className="h-4 w-4" />
          <span className="text-0.875rem md:text-1rem">Filter</span>
        </Button>
      </DialogTrigger>

      <DialogContent
        className="w-full max-w-sm rounded-lg bg-white p-6 md:max-w-md"
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader className="mb-6 flex items-center justify-between">
          <DialogTitle className="text-1.125rem md:text-1.25rem font-semibold text-gray-900">
            Filters
          </DialogTitle>
          <DialogClose asChild>
            <button className="text-orange-500">
              <X className="h-5 w-5" />
            </button>
          </DialogClose>
        </DialogHeader>

        <div className="mb-2">
          <h3 className="text-0.875rem md:text-1rem font-semibold text-gray-900">
            Price range
          </h3>
          <p className="text-0.75rem md:text-0.875rem mb-4 text-gray-500">
            Nightly prices before fees and taxes
          </p>
          <Slider
            value={priceRange}
            onValueChange={handlePriceChange}
            min={0}
            max={1000000}
            step={5000}
            minStepsBetweenThumbs={1}
            className="mb-4"
          />
          <div className="flex justify-between">
            <div className="flex-col rounded-lg border px-6">
              <label className="text-0.75rem md:text-0.875rem text-gray-500">
                Minimum
              </label>
              <p className="text-0.875rem md:text-1rem font-medium text-gray-900">
                ₦{priceRange[0].toLocaleString()}
              </p>
            </div>
            <div className="flex-col rounded-lg border px-6">
              <label className="text-0.75rem md:text-0.875rem text-gray-500">
                Maximum
              </label>
              <p className="text-0.875rem md:text-1rem font-medium text-gray-900">
                ₦{priceRange[1].toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <Separator className="h-0.5 w-full bg-gray-300" />

        <div className="mb-2">
          <h3 className="text-0.875rem md:text-1rem mb-4 font-semibold text-gray-900">
            Rooms and beds
          </h3>
          <div className="mb-4 flex items-center justify-between">
            <span className="text-0.875rem md:text-1rem text-gray-900">
              Bedrooms
            </span>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 rounded-lg p-0"
                onClick={decrementBedrooms}
                disabled={bedrooms === 'Any'}
              >
                -
              </Button>
              <span className="text-0.875rem md:text-1rem w-12 text-center text-gray-900">
                {bedrooms}
              </span>
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 rounded-lg p-0"
                onClick={incrementBedrooms}
                disabled={bedrooms === 10}
              >
                +
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-0.875rem md:text-1rem text-gray-900">
              Bathrooms
            </span>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 rounded-lg p-0"
                onClick={decrementBathrooms}
                disabled={bathrooms === 0}
              >
                -
              </Button>
              <span className="text-0.875rem md:text-1rem w-12 text-center text-gray-900">
                {bathrooms}
              </span>
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 rounded-lg p-0"
                onClick={incrementBathrooms}
                disabled={bathrooms === 10}
              >
                +
              </Button>
            </div>
          </div>
        </div>
        <Separator className="h-0.5 w-full bg-gray-300" />

        <div className="mb-6">
          <h3 className="text-0.875rem md:text-1rem mb-4 font-semibold text-gray-900">
            Booking options
          </h3>
          <div className="flex items-center gap-4">
            <Switch
              checked={instantBook}
              onCheckedChange={setInstantBook}
              className="data-[state=checked]:bg-orange-500"
            />
            <div>
              <p className="text-0.875rem md:text-1rem text-gray-900">
                Instant Book
              </p>
              <p className="text-0.75rem md:text-0.875rem text-gray-500">
                Listings you can book without waiting for host approval
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            className="text-0.875rem md:text-1rem text-gray-500"
            onClick={handleClear}
          >
            Clear
          </Button>
          <DialogClose asChild>
            <Button
              className="text-0.875rem md:text-1rem bg-orange-500 text-white"
              onClick={handleSearch}
            >
              Search
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// EmptyState Component
const EmptyState = ({ type }: { type: AccommodationType }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="mb-4 rounded-full bg-orange-200 p-6">
        <div className="relative h-16 w-16">
          <div className="absolute left-2 top-2 h-12 w-10 rotate-[-10deg] rounded-md border border-orange-300 bg-white"></div>
          <div className="absolute right-2 top-2 h-12 w-10 rotate-[10deg] rounded-md border border-orange-300 bg-white">
            <div className="mx-auto mt-3 w-6 border-t border-orange-300"></div>
            <div className="mx-auto mt-2 w-6 border-t border-orange-300"></div>
            <div className="mx-auto mt-2 w-6 border-t border-orange-300"></div>
          </div>
        </div>
      </div>
      <p className="text-0.875rem md:text-1rem text-center text-gray-600">
        No {type} record found at the moment.
      </p>
    </div>
  );
};

// TabContent Component
const TabContent = ({ type }: { type: AccommodationType }) => {
  if (!Array.isArray(properties) || properties.length === 0) {
    return <EmptyState type={type} />;
  }

  try {
    const filteredProperties =
      type === 'All'
        ? properties
        : properties.filter((property) => {
            const propertyType = propertyTypeMapping[property.id as number];
            if (!propertyType) return false;
            return propertyType === type;
          });

    if (filteredProperties && filteredProperties.length > 0) {
      return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProperties.map((property) => (
            <div
              key={property.id || `property-${Math.random()}`}
              className="w-full"
            >
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      );
    }
  } catch (error) {
    console.error('Error filtering properties:', error);
  }

  return <EmptyState type={type} />;
};

const AccommodationTypeSelector = () => {
  const [selected, setSelected] = useState<AccommodationType>('All');
  const [showActionButton, setShowActionButton] = useState(false);

  const accommodationTypes: AccommodationType[] = [
    'All',
    'Apartments',
    'Townhouse',
    'Villas',
    'Studio',
    'Terraces',
    'Beach Front',
    'Resort',
  ];

  const handleTabClick = (type: AccommodationType) => {
    setSelected(type);
    setShowActionButton(true);
  };

  const handleClear = () => {
    setSelected('All');
    setShowActionButton(false);
  };

  return (
    <div className="w-full">
      <div className="mb-8 flex max-w-full items-center justify-between border-b py-2 pb-4 pt-4">
        <div className="w-full max-w-sm md:max-w-prose lg:max-w-full">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 flex items-center justify-between">
              {accommodationTypes.map((type) => (
                <CarouselItem
                  key={`carousel-${type}`}
                  className="basis-auto pl-2"
                >
                  <div>
                    <button
                      onClick={() => handleTabClick(type)}
                      className={cn(
                        'text-0.875rem md:text-1rem whitespace-nowrap rounded-lg px-4 py-2 transition-colors',
                        selected === type
                          ? 'bg-[#fdf4ee] text-orange-500'
                          : 'bg-transparent text-gray-600 hover:bg-[#fdf4ee] hover:text-orange-500'
                      )}
                    >
                      {type}
                    </button>
                  </div>
                </CarouselItem>
              ))}
              <div className="flex items-center gap-2 pr-2 lg:pr-4">
                {selected !== 'All' && showActionButton && (
                  <Button
                    variant="default"
                    size="sm"
                    className="text-0.875rem md:text-1rem flex h-9 items-center gap-2 rounded-none bg-orange-500 text-white hover:bg-orange-600"
                    onClick={handleClear}
                  >
                    <span>Clear</span>
                    <XIcon className="h-4 w-4" />
                  </Button>
                )}
                <FilterDialog />
              </div>
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <TabContent type={selected} />
    </div>
  );
};

export default AccommodationTypeSelector;
