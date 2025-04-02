"use client";

import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, Legend } from "recharts";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

const data = [
  { month: "Jan", clicks: 60, bookings: 90 },
  { month: "Feb", clicks: 65, bookings: 100 },
  { month: "Mar", clicks: 70, bookings: 140 },
  { month: "Apr", clicks: 75, bookings: 110 },
  { month: "May", clicks: 80, bookings: 90 },
  { month: "Jun", clicks: 82, bookings: 95 },
  { month: "Jul", clicks: 78, bookings: 100 },
  { month: "Aug", clicks: 76, bookings: 98 },
  { month: "Sep", clicks: 72, bookings: 120 },
  { month: "Oct", clicks: 68, bookings: 90 },
  { month: "Nov", clicks: 50, bookings: 60 },
  { month: "Dec", clicks: 40, bookings: 50 },
];

export default function ReferralPerformance() {
  const [selectedYear, setSelectedYear] = useState<Date | undefined>(new Date());

  return (
    <div className="p-4 bg-white shadow-md rounded-lg w-full max-w-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-sm font-medium">Referral Link Performance</h2>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2 px-3 py-1 text-sm border rounded-md">
              {selectedYear ? format(selectedYear, "yyyy") : "Year"} 
              <CalendarIcon className="w-4 h-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-auto p-0">
            <Calendar
              mode="single"
              selected={selectedYear}
              onSelect={setSelectedYear}
              defaultMonth={selectedYear}
              initialFocus
              captionLayout="dropdown-buttons"
              fromYear={2000}
              toYear={2030}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="4 4" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis domain={[0, 150]} tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend verticalAlign="bottom" height={20} iconType="circle" />
          <Area type="monotone" dataKey="bookings" stroke="#F5A623" fill="#F5A623" fillOpacity={0.2} />
          <Line type="monotone" dataKey="clicks" stroke="#E57A44" strokeWidth={2} dot={{ stroke: "#E57A44", strokeWidth: 2 }} />
          <Line type="monotone" dataKey="bookings" stroke="#F5A623" strokeWidth={2} dot={{ stroke: "#F5A623", strokeWidth: 2 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
