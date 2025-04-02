import React, { useState } from 'react';
import { cn } from '@/lib/utils'; // Utility function from shadcn/ui for className merging

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 10, 1)); // November 2024
  const [checkInDate, setCheckInDate] = useState<number | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<number | null>(null);

  const realDate = new Date(2025, 2, 29); // March 29, 2025
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

  const isRealDateInCurrentMonth =
    realDate.getFullYear() === currentDate.getFullYear() &&
    realDate.getMonth() === currentDate.getMonth();

  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const handleDateClick = (day: number | null) => {
    if (day === null) return;

    if (!checkInDate) {
      setCheckInDate(day);
      setCheckOutDate(null);
    } else if (!checkOutDate) {
      if (day > checkInDate) {
        setCheckOutDate(day);
      } else {
        setCheckOutDate(checkInDate);
        setCheckInDate(day);
      }
    } else {
      setCheckInDate(day);
      setCheckOutDate(null);
    }
  };

  const isDateInRange = (day: number | null) => {
    if (day === null || !checkInDate || !checkOutDate) return false;
    return day > checkInDate && day < checkOutDate;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  // Find the indices of check-in and check-out dates in the calendarDays array
  const checkInIndex = checkInDate
    ? calendarDays.findIndex((day) => day === checkInDate)
    : -1;
  const checkOutIndex = checkOutDate
    ? calendarDays.findIndex((day) => day === checkOutDate)
    : -1;

  // Calculate the row and column positions for check-in and check-out
  const checkInRow = checkInIndex !== -1 ? Math.floor(checkInIndex / 7) : -1;
  const checkOutRow = checkOutIndex !== -1 ? Math.floor(checkOutIndex / 7) : -1;
  const checkInCol = checkInIndex !== -1 ? checkInIndex % 7 : -1;
  const checkOutCol = checkOutIndex !== -1 ? checkOutIndex % 7 : -1;

  // Determine if the range is within a single row or spans multiple rows
  const isSingleRow = checkInRow === checkOutRow;
  const rangeContainerStyle: React.CSSProperties = isSingleRow
    ? {
        gridRow: checkInRow + 2, // +2 to account for the days of the week row
        gridColumnStart: checkInCol + 1,
        gridColumnEnd: checkOutCol + 2,
        top: '50%',
        transform: 'translateY(-50%)',
        height: '2.5rem', // Adjust height to match the date cells
        backgroundColor: '#f97316', // bg-orange-400
        borderRadius: '9999px', // rounded-full
        position: 'absolute',
        zIndex: 0,
      }
    : {};

  return (
    <div className="p-4 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth} className="text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h2 className="text-lg font-semibold">
          {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
        </h2>
        <button onClick={handleNextMonth} className="text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Days of the Week */}
      <div className="grid grid-cols-7 gap-2 text-center font-medium text-gray-600">
        {daysOfWeek.map((day) => (
          <div key={day} className="p-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2 text-center relative">
        {/* Range Container */}
        {checkInIndex !== -1 && checkOutIndex !== -1 && isSingleRow && (
          <div style={rangeContainerStyle} />
        )}

        {calendarDays.map((day, index) => {
          const isCheckIn = day === checkInDate;
          const isCheckOut = day === checkOutDate;
          const isInRange = isDateInRange(day);

          return (
            <div
              key={index}
              onClick={() => handleDateClick(day)}
              className={cn(
                'p-2 rounded-full cursor-pointer relative z-10',
                day === null ? 'invisible' : 'visible',
                // Highlight real date (March 29, 2025)
                isRealDateInCurrentMonth && day === realDate.getDate()
                  ? 'text-orange-600 font-bold'
                  : '',
                // Check-in and check-out dates
                isCheckIn
                  ? 'bg-orange-400 text-white font-bold'
                  : isCheckOut
                  ? 'bg-orange-600 text-white font-bold'
                  : isInRange
                  ? 'text-white font-bold'
                  : '',
                // Hover effect for unselected dates
                day !== null &&
                  !isCheckIn &&
                  !isCheckOut &&
                  !isInRange &&
                  'hover:bg-gray-200'
              )}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;