'use client';

import * as React from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';

export function MonthPicker() {
  const [date, setDate] = React.useState<Date>(new Date());

  const handlePrevMonth = () => setDate((prev) => subMonths(prev, 1));
  const handleNextMonth = () => setDate((prev) => addMonths(prev, 1));

  return (
    <div className="flex items-centerspace-x-2">
      {/* Previous Month Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={handlePrevMonth}
        className="h-8 w-8 rounded-md border border-gray-300 shadow-sm hover:bg-gray-100 hidden md:block"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {/* Date Picker Trigger */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="md:w-[180px] h-8 flex justify-between items-center border border-gray-300 shadow-sm hover:bg-gray-100"
          >
            {format(date, 'MMMM yyyy')}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(selectedDate) => selectedDate && setDate(selectedDate)} // ✅ Fix applied here
            initialFocus
            className="p-4"
          />
        </PopoverContent>
      </Popover>

      {/* Next Month Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={handleNextMonth}
        className="h-8 w-8 rounded-md border border-gray-300 shadow-sm hover:bg-gray-100 hidden md:block"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
