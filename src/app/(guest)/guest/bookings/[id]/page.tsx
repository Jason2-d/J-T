'use client';
import React, { useState } from 'react';
import {
  ChevronDown,
  PlusCircle,
  Search,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

// Component Imports
import BookingCardWeb from '@/components/guest-components/bookings/bookingCardContents';
import BookingTab from '@/components/guest-components/bookings/bookingsTab';
import FooterNav from '@/components/guest-components/bookings/footerNav';
import { MonthPicker } from '@/components/guest-components/bookings/date-picker/month-picker';
import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import BookingStatusCard from '@/components/guest-components/bookings/card/bookingStatusCard';
import BookingCardContents from '@/components/guest-components/bookings/bookingCardContents';

const handleViewBooking = (id: string) => {
  console.log(`View booking ${id} details`);
  // Navigate to booking details
};

const BookingsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const bookingsPerPage = 2; // Adjust as needed

  const bookingCardProps = {
    id: 'BK190234',
    price: '₦1,644,640.00',
    guests: 4,
    nights: 5,
    checkIn: 'Nov.23,23',
    checkOut: 'Nov.23,23',
    bookedOn: 'Nov.12,2024',
    imageUrl: '/images/hospitality1.png',
  };

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

  const filteredBookings = bookingStatusCards; // Replace with actual filtered bookings if needed
  const totalPages = Math.ceil(filteredBookings.length / bookingsPerPage);

  // Pagination Functions
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPaginationItems = () => {
    const items: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const startPage = Math.max(
      1,
      currentPage - Math.floor(maxVisiblePages / 2)
    );
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (startPage > 1) {
      items.push(1);
      if (startPage > 2) items.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
      items.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) items.push('...');
      items.push(totalPages);
    }

    return items;
  };

  const renderPagination = () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink
            href="#"
            className={`flex h-8 w-8 items-center justify-center border border-gray-300 text-gray-400 ${currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            onClick={() => goToPage(currentPage - 1)}
          >
            <ChevronLeft className="h-4 w-4" />
          </PaginationLink>
        </PaginationItem>

        {getPaginationItems().map((page, index) =>
          page === '...' ? (
            <PaginationItem key={`ellipsis-${index}`}>
              <span className="px-2 text-gray-500">...</span>
            </PaginationItem>
          ) : (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                className={`flex h-8 w-8 items-center justify-center border ${currentPage === page ? 'border-orange-500 bg-orange-100 text-orange-500' : 'border-gray-300 text-gray-700'}`}
                onClick={() => goToPage(page as number)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        <PaginationItem>
          <PaginationLink
            href="#"
            className={`flex h-8 w-8 items-center justify-center border border-gray-300 text-gray-400 ${currentPage === totalPages ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            onClick={() => goToPage(currentPage + 1)}
          >
            <ChevronRight className="h-4 w-4" />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );

  // Paginated Bookings
  const startIndex = (currentPage - 1) * bookingsPerPage;
  const endIndex = startIndex + bookingsPerPage;
  const paginatedBookings = filteredBookings.slice(startIndex, endIndex);

  return (
    <div className="md:pl-3">
      {/* Header */}
      <div className="flex items-center justify-between pb-5">
        <p className="text-[18px] font-semibold">My Bookings</p>
        <Button className="text-[11px] md:hidden">
          <PlusCircle className="h-3 w-3" /> Create New
        </Button>
      </div>

      {/* Desktop View */}
      <Tabs defaultValue="active" className="hidden md:block">
        <TabsList className="flex w-full justify-between rounded-md bg-slate-100 p-2">
          <div className="flex gap-6">
            <TabsTrigger
              value="active"
              className="flex h-9 items-center rounded-md bg-[#fde7dc] px-4 py-2 font-medium text-[#ef5e17] data-[state=active]:bg-[#ef5e17] data-[state=active]:text-white"
            >
              Active
              <span className="ml-2 rounded-full bg-[#ef5e17] px-1.5 text-xs text-white">
                3
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="pending"
              className="flex h-9 items-center rounded-md px-4 py-2 font-medium text-gray-600 data-[state=active]:bg-[#ef5e17] data-[state=active]:text-white"
            >
              Pending
              <span className="ml-2 rounded-full bg-[#ef5e17] px-1.5 text-xs text-white">
                3
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="concluded"
              className="flex h-9 items-center rounded-md px-4 py-2 font-medium text-gray-600 data-[state=active]:bg-[#ef5e17] data-[state=active]:text-white"
            >
              Concluded
            </TabsTrigger>
          </div>
          <Button className="flex items-center rounded-md bg-[#ef5e17] px-4 py-2 text-sm text-white">
            <PlusCircle className="mr-2 h-4 w-4" /> Create New
          </Button>
        </TabsList>

        {/* Search & Filters */}
        <div className="mt-4 hidden w-full items-center justify-between md:flex">
          <div className="relative w-[100px] lg:w-[150px]">
            <select
              disabled
              className="w-full cursor-not-allowed appearance-none rounded-md border border-gray-300 bg-gray-100 px-4 py-1 text-sm text-gray-400"
            >
              <option>Active</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          </div>
          <MonthPicker />
          <div className="relative w-[100px] lg:w-[150px]">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-md border border-gray-300 bg-white px-8 py-1 text-sm text-gray-700 placeholder-gray-400 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>
        </div>

        {/* Tab Content */}
        <TabsContent
          value="active"
          className="hidden w-full space-y-5 pb-6 pt-2 md:block"
        >
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <BookingCardContents key={index} {...bookingCardProps} />
            ))}
        </TabsContent>

        <TabsContent value="pending" className="mt-4 space-y-4">
          {paginatedBookings
            .filter((booking) => booking.status === 'pending')
            .map((booking, index) => (
              <BookingStatusCard
                key={`${booking.id}-${index}`}
                {...booking}
                onCardClick={() => handleViewBooking(booking.id)}
              />
            ))}
          {paginatedBookings
            .filter((booking) => booking.status === 'declined')
            .map((booking, index) => (
              <BookingStatusCard
                key={`${booking.id}-${index}`}
                {...booking}
                onCardClick={() => handleViewBooking(booking.id)}
              />
            ))}
          {paginatedBookings
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

        {/* Desktop Pagination */}
        <div className="mt-6 hidden md:block">{renderPagination()}</div>
      </Tabs>

      {/* Mobile View */}
      <div className="md:hidden">
        <BookingTab />
        <div className="mt-4 overflow-x-auto pb-20">{renderPagination()}</div>
        <div className="md:hidden">
          <FooterNav />
        </div>
      </div>
    </div>
  );
};

export default BookingsPage;
