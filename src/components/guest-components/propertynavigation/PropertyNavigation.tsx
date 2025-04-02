import React from 'react';
import {
  LayoutGrid,
  Building,
  Home,
  Castle,
  Warehouse,
  UmbrellaIcon,
  Hotel,
  Settings2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const PropertyNavigation = () => {
  const navItems = [
    { id: 'all', label: 'All', icon: LayoutGrid, isActive: true },
    { id: 'apartments', label: 'Apartments', icon: Building },
    { id: 'townhouse', label: 'Townhouse', icon: Home },
    { id: 'villas', label: 'Villas', icon: Castle },
    { id: 'terraces', label: 'Terraces', icon: Warehouse },
    { id: 'beach-front', label: 'Beach Front', icon: UmbrellaIcon },
    { id: 'resort', label: 'Resort', icon: Hotel },
  ];

  return (
    <div className="w-full border-t border-gray-200">
      <div className="">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-20 py-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`group relative flex min-w-fit flex-col items-center ${
                  item.isActive
                    ? 'text-orange-500'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <item.icon className="mb-1.5 h-5 w-5" />
                <span className="whitespace-nowrap text-sm">{item.label}</span>
                {item.isActive && (
                  <div className="absolute bottom-0 left-0 right-0 -mb-[6px]">
                    <div className="mx-auto h-0.5 w-full rounded-full bg-orange-500" />
                  </div>
                )}
              </button>
            ))}
          </div>

          <Button
            variant="outline"
            className="ml-4 flex items-center gap-2 border-gray-300 px-6 py-6"
          >
            <Settings2 className="h-4 w-4" />
            <span>Filter</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyNavigation;