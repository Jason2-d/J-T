"use client";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

export default function YearPicker() {
  const [selectedYear, setSelectedYear] = useState<Date | undefined>(new Date());

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="px-3 py-1 text-sm border rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200">
          {selectedYear ? format(selectedYear, "yyyy") : "Year"}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="center" className="w-auto p-0 bg-white border border-gray-300 shadow-lg">
        <Calendar
          mode="single"
          selected={selectedYear}
          onSelect={setSelectedYear}
          defaultMonth={selectedYear}
          initialFocus
          captionLayout="dropdown-buttons"
          fromYear={2000}
          toYear={2035}
        />
      </PopoverContent>
    </Popover>
  );
}
