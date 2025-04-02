'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MapPinIcon,
  CalendarIcon,
  UserIcon,
} from 'lucide-react';
import { format, addDays, isSameDay } from 'date-fns';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@radix-ui/react-separator';

type GuestType = {
  type: string;
  ageRange: string;
  count: number;
};

export default function SearchBar() {
  const [dateRange, setDateRange] = useState<{
    from: Date | null;
    to: Date | null;
  }>({
    from: null,
    to: null,
  });
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectionState, setSelectionState] = useState<'start' | 'end'>(
    'start'
  );
  const today = new Date();

  const [guestPopoverOpen, setGuestPopoverOpen] = useState(false);
  const [guests, setGuests] = useState<GuestType[]>([
    { type: 'Adults', ageRange: 'Ages 18 or above', count: 2 },
    { type: 'Children', ageRange: 'Ages 2 - 17', count: 2 },
    { type: 'Infant', ageRange: 'Under 2', count: 1 },
  ]);

  const getGuestSummary = () => {
    const adults = guests[0].count;
    const children = guests[1].count;
    const infants = guests[2].count;

    const parts = [];
    if (adults > 0)
      parts.push(`${adults} ${adults === 1 ? 'Adult' : 'Adults'}`);
    if (children > 0)
      parts.push(`${children} ${children === 1 ? 'Child' : 'Children'}`);
    if (infants > 0)
      parts.push(`${infants} ${infants === 1 ? 'Infant' : 'Infants'}`);

    return parts.join(', ');
  };

  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();

    const days = [];

    // Previous month days
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      days.push({
        day: prevMonthDays - i,
        isCurrentMonth: false,
        isPrevMonth: true,
        isStartDate: false,
        isEndDate: false,
        isInRange: false,
        isToday: false,
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(year, month, i);

      // Check if this day is the current date
      const isToday = isSameDay(currentDate, today);

      // Check if this day is the start date
      const isStartDate =
        dateRange.from &&
        currentDate.getDate() === dateRange.from.getDate() &&
        currentDate.getMonth() === dateRange.from.getMonth() &&
        currentDate.getFullYear() === dateRange.from.getFullYear();

      // Check if this day is the end date
      const isEndDate =
        dateRange.to &&
        currentDate.getDate() === dateRange.to.getDate() &&
        currentDate.getMonth() === dateRange.to.getMonth() &&
        currentDate.getFullYear() === dateRange.to.getFullYear();

      // Check if this day is in the selected range
      const isInRange =
        dateRange.from &&
        dateRange.to &&
        currentDate >= dateRange.from &&
        currentDate <= dateRange.to;

      days.push({
        day: i,
        isCurrentMonth: true,
        isStartDate,
        isEndDate,
        isInRange,
        isToday,
      });
    }

    // Next month days
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        isNextMonth: true,
        isStartDate: false,
        isEndDate: false,
        isInRange: false,
        isToday: false,
      });
    }

    return days;
  };

  const days = generateCalendarDays();
  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const handleDayClick = (day: number) => {
    const clickedDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );

    if (selectionState === 'start') {
      // Start a new range
      setDateRange({ from: clickedDate, to: null });
      setSelectionState('end');
    } else {
      // Complete the range
      if (clickedDate < dateRange.from!) {
        // If end date is before start date, start a new range
        setDateRange({ from: clickedDate, to: null });
        setSelectionState('end');
      } else {
        setDateRange((prev) => ({ ...prev, to: clickedDate }));
        setSelectionState('start');
      }
    }
  };

  const adjustGuestCount = (index: number, increment: boolean) => {
    const newGuests = [...guests];
    if (increment) {
      newGuests[index].count += 1;
    } else if (newGuests[index].count > 0) {
      newGuests[index].count -= 1;
    }
    setGuests(newGuests);
  };

  // Format date range for display
  const getDateRangeDisplay = () => {
    if (!dateRange.from) return `Check in  -  Check out`;

    if (!dateRange.to) {
      return `${format(dateRange.from, 'MMM d, yy')} - Check out`;
    }

    return `${format(dateRange.from, 'MMM d, yy')} - ${format(dateRange.to, 'MMM d, yy')}`;
  };

  return (
    <div className="container mx-auto flex max-w-5xl flex-col items-stretch overflow-hidden border border-gray-200 bg-white shadow-sm md:flex-row">
      {/* Destination field */}
      <div className="flex-1 border-b border-gray-200 md:border-b-0 md:border-r">
        <div className="flex h-full items-center px-4 py-3">
          <MapPinIcon className="mr-2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Destination"
            className="w-full text-gray-700 focus:outline-none"
          />
        </div>
      </div>

      {/* Check-in & Check-out field */}
      <div className="flex-1 border-b border-gray-200 md:border-b-0 md:border-r">
        <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="h-full w-full justify-start px-4 py-3 hover:bg-transparent"
            >
              <CalendarIcon className="mr-2 h-5 w-5 text-gray-400" />
              <span className="text-gray-600">{getDateRangeDisplay()}</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto border border-gray-200 p-0 shadow-md"
            align="start"
          >
            <div className="p-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-medium text-gray-800">
                  {format(currentMonth, 'MMMM')}{' '}
                  <span className="ml-1">{currentMonth.getFullYear()}</span>
                </span>
                <div className="flex items-center space-x-1">
                  <button
                    onClick={prevMonth}
                    className="rounded-full p-1 hover:bg-gray-100"
                    aria-label="Previous month"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={nextMonth}
                    className="rounded-full p-1 hover:bg-gray-100"
                    aria-label="Next month"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-2 pb-1">
                {weekdays.map((day) => (
                  <div
                    key={day}
                    className="py-1 text-center text-xs font-medium text-gray-500"
                  >
                    {day}
                  </div>
                ))}

                {days.map((day, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      day.isCurrentMonth && handleDayClick(day.day)
                    }
                    disabled={!day.isCurrentMonth}
                    className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm ${
                      !day.isCurrentMonth
                        ? 'text-gray-300'
                        : day.isToday
                          ? 'border border-orange-600 font-medium text-orange-600 hover:bg-gray-100' // Today styling always takes priority
                          : day.isStartDate || day.isEndDate
                            ? 'bg-orange-500 font-medium text-white'
                            : day.isInRange
                              ? 'bg-orange-500 text-white'
                              : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    aria-selected={day.isStartDate || day.isEndDate || false}
                  >
                    {day.day}
                  </button>
                ))}
              </div>

              {/* Date range display fields */}
              {(dateRange.from || dateRange.to) && (
                <div className="mt-4 grid grid-cols-2 gap-2 border-t pt-1 pb-2">
                  <div className="flex flex-col space-y-1">
                    <label className="text-xs text-gray-500"></label>
                    <div className="h-full rounded border-2 border-gray-300 px-3 py-2 text-sm">
                      {dateRange.from
                        ? format(dateRange.from, 'MMM d, yyyy')
                        : ''}
                    </div>
                  </div>
                 
                  <div className="flex flex-col space-y-1">
                    <label className="text-xs text-gray-500"></label>
                    <div className="h-full rounded border-2 border-gray-300 px-3 py-2 text-sm">
                      {dateRange.to ? format(dateRange.to, 'MMM d, yyyy') : ''}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Add Guest field */}
      <div className="flex-1 border-b border-gray-200 md:border-b-0 md:border-r">
        <Popover open={guestPopoverOpen} onOpenChange={setGuestPopoverOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="h-full w-full justify-between px-4 py-3 hover:bg-transparent"
            >
              <div className="flex items-center">
                <UserIcon className="mr-2 h-5 w-5 text-gray-400" />
                <span className="text-gray-700">{getGuestSummary()}</span>
              </div>
              <ChevronDown
                className={`h-4 w-4 text-gray-400 transition-transform ${guestPopoverOpen ? 'rotate-180' : ''}`}
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-[308px] rounded-none border border-gray-200 p-0 shadow-none"
            align="center"
          >
            <div className="mx-auto w-[90%] divide-y divide-gray-100">
              {guests.map((guest, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4"
                >
                  <div>
                    <h3 className="font-medium text-gray-800">{guest.type}</h3>
                    <p className="text-sm text-gray-500">{guest.ageRange}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => adjustGuestCount(index, false)}
                      className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 p-1 text-gray-700 hover:bg-gray-50"
                      disabled={guest.count === 0}
                      aria-label={`Decrease ${guest.type} count`}
                    >
                      <span className="text-xl font-medium">−</span>
                    </button>
                    <span className="w-5 text-center font-medium">
                      {guest.count}
                    </span>
                    <button
                      onClick={() => adjustGuestCount(index, true)}
                      className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 p-1 text-gray-700 hover:bg-gray-50"
                      aria-label={`Increase ${guest.type} count`}
                    >
                      <span className="text-xl font-medium">+</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Search button */}
      <div className="flex-none">
        <Button className="h-full w-full rounded-none bg-orange-500 px-8 py-3 font-medium text-white hover:bg-orange-600 md:w-auto">
          Search
        </Button>
      </div>
    </div>
  );
}
