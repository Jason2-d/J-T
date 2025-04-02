'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, CalendarIcon } from 'lucide-react';

// UI Component Imports
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '@/components/ui/dropdown-menu';

// Custom Component Imports
import { DatePicker } from '../v-home/datePicker';
import BookingCardDetails from './BookingCardDetails';
import { MonthPicker } from './date-picker/month-picker';
import BookingStatusCard from './card/bookingStatusCard';

// Data
const bookingStatusCards = [
  {
    id: 'BK190234',
    price: 1644640.0,
    currency: '₦',
    title: '2 Bedroom Luxury Shortlet Apartment',
    bookedOn: 'Nov. 12, 2024',
    thumbnailUrl: '/images/hospitality1.png',
    status: 'approved' as const,
    dueDate: 'May 2, 2025',
    guests: 4,
    nights: 5,
    checkIn: 'Nov. 23, 2023',
    checkOut: 'Nov. 28, 2023',
  },
  {
    id: 'BK190235',
    price: 1644640.0,
    currency: '₦',
    title: '2 Bedroom Luxury Shortlet Apartment',
    bookedOn: 'Nov. 12, 2024',
    thumbnailUrl: '/images/hospitality1.png',
    status: 'pending' as const,
    guests: 4,
    nights: 5,
    checkIn: 'Nov. 23, 2023',
    checkOut: 'Nov. 28, 2023',
  },
  {
    id: 'BK190236',
    price: 1644640.0,
    currency: '₦',
    title: '2 Bedroom Luxury Shortlet Apartment',
    bookedOn: 'Nov. 12, 2024',
    thumbnailUrl: '/images/hospitality1.png',
    status: 'declined' as const,
    guests: 4,
    nights: 5,
    checkIn: 'Nov. 23, 2023',
    checkOut: 'Nov. 28, 2023',
  },
];

// Updated renderTabTrigger with flexible width and truncation
const renderTabTrigger = (value: string, label: string, count?: number) => (
  <TabsTrigger
    value={value}
    className="flex min-w-0 flex-1 items-center justify-center data-[state=active]:bg-[#EF5E1726] data-[state=active]:text-[#EF5E17]"
  >
    <span className="truncate px-2 py-1">{label}</span>
    {count && (
      <span className="ml-1 flex-shrink-0 rounded-full bg-orange-500 px-1.5 text-[0.75rem] text-white">
        {count}
      </span>
    )}
  </TabsTrigger>
);

export default function BookingTab() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleViewBooking = (id: string) => {
    console.log(`View booking ${id} details`);
  };

  const handleMakePayment = (id: string) => {
    console.log(`Make payment for booking ${id}`);
  };

  const handleResendRequest = (id: string) => {
    console.log(`Resend request for booking ${id}`);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchExpanded(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="p-4">
      <Tabs defaultValue="active">
        {/* Tabs Navigation */}
        <TabsList className="flex w-full gap-2 rounded-md bg-gray-100 p-1">
          {renderTabTrigger('active', 'Active', 3)}
          {renderTabTrigger('pending', 'Pending', 3)}
          {renderTabTrigger('concluded', 'Concluded')}
        </TabsList>

        {/* Search & Filters */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <div
            ref={searchRef}
            className={`relative flex max-w-xs items-center rounded-md border border-gray-300 p-2 transition-all duration-300 ${
              isSearchExpanded ? 'w-full max-w-xs' : 'w-10'
            }`}
            onClick={() => setIsSearchExpanded(true)}
          >
            <Search className="h-4 w-4 flex-shrink-0 text-gray-500" />
            <input
              type="text"
              placeholder="Search bookings..."
              className={`ml-2 border-none bg-transparent text-[0.875rem] transition-all duration-300 focus:outline-none ${
                isSearchExpanded ? 'w-full opacity-100' : 'w-0 opacity-0'
              }`}
            />
          </div>
          <MonthPicker />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="text-gray-400" disabled>
                All
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-2">
              <p>Filters</p>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Tab Content */}
        <TabsContent value="active" className="mt-4 space-y-4">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <BookingCardDetails key={index} />
            ))}
        </TabsContent>

        <TabsContent value="pending" className="mt-4 space-y-4">
          {bookingStatusCards
            .filter((booking) => booking.status === 'pending')
            .map((booking, index) => (
              <BookingStatusCard
                key={`${booking.id}-${index}`}
                {...booking}
                onCardClick={() => handleViewBooking(booking.id)}
              />
            ))}
          {bookingStatusCards
            .filter((booking) => booking.status === 'declined')
            .map((booking, index) => (
              <BookingStatusCard
                key={`${booking.id}-${index}`}
                {...booking}
                onCardClick={() => handleViewBooking(booking.id)}
              />
            ))}
          {bookingStatusCards
            .filter((booking) => booking.status === 'approved')
            .map((booking, index) => (
              <BookingStatusCard
                key={`${booking.id}-${index}`}
                {...booking}
                onCardClick={() => handleViewBooking(booking.id)}
              />
            ))}
        </TabsContent>

        <TabsContent value="concluded" className="mt-4 space-y-4">
          {/* Concluded bookings content */}
        </TabsContent>
      </Tabs>
    </div>
  );
}
