'use client';
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@radix-ui/react-separator';

interface CalendarDate {
  date: number;
  isCurrentMonth: boolean;
  isSelected?: boolean;
  isToday?: boolean;
}

const DualCalendar = () => {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [selectedDates, setSelectedDates] = React.useState<Date[]>([]);

  const getDaysInMonth = (date: Date): CalendarDate[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDayOfPrevMonth = new Date(year, month, 0).getDate();

    const days: CalendarDate[] = [];

    // Previous month days
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      days.push({
        date: lastDayOfPrevMonth - i,
        isCurrentMonth: false,
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(year, month, i);
      days.push({
        date: i,
        isCurrentMonth: true,
        isToday:
          new Date().getDate() === i &&
          new Date().getMonth() === month &&
          new Date().getFullYear() === year,
        isSelected: selectedDates.some(
          (date) =>
            date.getDate() === i &&
            date.getMonth() === month &&
            date.getFullYear() === year
        ),
      });
    }

    // Next month days
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: i,
        isCurrentMonth: false,
      });
    }

    return days;
  };

  const getNextMonth = (date: Date): Date => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 1);
  };

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + (direction === 'next' ? 1 : -1),
        1
      )
    );
  };

  const handleDateClick = (day: CalendarDate, isNextMonth: boolean = false) => {
    if (day.isCurrentMonth) {
      const clickedDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + (isNextMonth ? 1 : 0),
        day.date
      );

      setSelectedDates([...selectedDates, clickedDate]);
    }
  };

  const nextMonthDate = getNextMonth(currentDate);
  const currentMonthDays = getDaysInMonth(currentDate);
  const nextMonthDays = getDaysInMonth(nextMonthDate);

  const CalendarGrid = ({
    days,
    isNextMonth = false,
  }: {
    days: CalendarDate[];
    isNextMonth?: boolean;
  }) => {
    const getFormattedDate = (day: number) => {
      return day < 10 ? `0${day}` : day;
    };

    return (
      <div>
        <div className="mb-2 grid grid-cols-7 gap-1">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div
              key={day}
              className="text-center text-sm font-medium text-gray-500"
            >
              {day.slice(0, 3)}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => {
            const formattedDate = getFormattedDate(day.date);
            const isSelected = selectedDates.some(
              (date) =>
                date.getDate() === day.date &&
                date.getMonth() ===
                  (isNextMonth
                    ? currentDate.getMonth() + 1
                    : currentDate.getMonth()) &&
                date.getFullYear() === currentDate.getFullYear()
            );

            return (
              <button
                key={index}
                onClick={() => handleDateClick(day, isNextMonth)}
                className={`rounded-md p-2 text-sm transition-colors ${day.isCurrentMonth ? 'hover:bg-gray-100' : 'text-gray-400'} ${
                  isSelected
                    ? 'bg-orange-500 text-white hover:bg-orange-600'
                    : ''
                } ${day.isToday && !isSelected ? 'bg-orange-100' : ''} ${!day.isCurrentMonth ? 'invisible' : ''} `}
              >
                {formattedDate}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-3xl bg-white p-4">
      <div className="mb-4 flex items-center justify-between">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigateMonth('prev')}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex w-full justify-around">
          <h2 className="text-lg font-semibold">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <h2 className="text-lg font-semibold">
            {months[nextMonthDate.getMonth()]} {nextMonthDate.getFullYear()}
          </h2>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigateMonth('next')}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <CalendarGrid days={currentMonthDays} />
        <CalendarGrid days={nextMonthDays} isNextMonth={true} />
      </div>
    </div>
  );
};

export default DualCalendar;
