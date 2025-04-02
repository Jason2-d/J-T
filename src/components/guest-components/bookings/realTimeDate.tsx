"use client"; // Needed for Next.js App Router

import { useState, useEffect } from "react";

const RealTimeDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-16 h-16 bg-orange-500 rounded-lg shadow-lg">
        {/* Top part of the calendar */}
        <div className="absolute top-0 left-0 w-full h-4 bg-orange-700 rounded-t-lg"></div>
        
        {/* Date number */}
        <div className="flex items-center justify-center h-full text-white text-2xl font-bold">
          {date.getDate()}
        </div>
      </div>
    </div>
  );
};

export default RealTimeDate;
