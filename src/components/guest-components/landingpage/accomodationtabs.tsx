'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { FilterIcon, XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { properties } from '@/data/properties';
import PropertyCard from '../cards/propertyCard';

type AccommodationType =
  | 'All'
  | 'Apartments'
  | 'Townhouse'
  | 'Villas'
  | 'Studio'
  | 'Terraces'
  | 'Beach Front'
  | 'Resort';

// Create a mapping of property IDs to types for filtering
// This is a temporary solution until you add 'type' fields to your data
const propertyTypeMapping = {
  1: 'Apartments',
  2: 'Apartments',
  3: 'Townhouse',
  4: 'Villas',
  5: 'Studio',
  6: 'Beach Front',
};

// Component to display empty state when no properties are found
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
      <p className="text-center text-gray-600">
        No {type} record found at the moment.
      </p>
    </div>
  );
};

// Component to display tab-specific content
const TabContent = ({ type }: { type: AccommodationType }) => {
  // Check if properties array exists and has items
  if (!Array.isArray(properties) || properties.length === 0) {
    return <EmptyState type={type} />;
  }

  try {
    // Filter properties based on the selected type
    const filteredProperties =
      type === 'All'
        ? properties
        : properties.filter((property) => {
            // Get the type from our mapping
            const propertyType =
              propertyTypeMapping[
                property.id as keyof typeof propertyTypeMapping
              ];

            if (!propertyType) return false;

            return propertyType === type;
          });

    // Check if there are properties to display
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

export default function AccommodationTabs() {
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

  // Handle tab click
  const handleTabClick = (type: AccommodationType) => {
    setSelected(type);
    setShowActionButton(true);
  };

  // Handle clear button click
  const handleClear = () => {
    setSelected('All');
    setShowActionButton(false);
  };

  return (
    <div className="w-full">
      <div className="mb-8 flex items-center justify-between overflow-x-auto border-b py-2 pb-4 pt-8">
        <div className="flex space-x-2">
          {accommodationTypes.map((type) => (
            <button
              key={type}
              onClick={() => handleTabClick(type)}
              className={cn(
                'whitespace-nowrap rounded-lg px-4 py-2 text-sm transition-colors',
                selected === type
                  ? 'bg-[#fdf4ee] text-orange-500'
                  : 'bg-transparent text-gray-600 hover:bg-[#fdf4ee] hover:text-orange-500'
              )}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {selected !== 'All' && showActionButton && (
            <Button
              variant="default"
              size="sm"
              className="flex items-center gap-2 rounded-none bg-orange-500 text-white hover:bg-orange-600"
              onClick={handleClear}
            >
              <span>Clear</span>
              <XIcon className="h-4 w-4" />
            </Button>
          )}

          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 rounded-none border-gray-300"
          >
            <FilterIcon className="h-4 w-4" />
            <span>Filter</span>
          </Button>
        </div>
      </div>

      {/* Render content based on selected tab */}
      <TabContent type={selected} />
    </div>
  );
}
