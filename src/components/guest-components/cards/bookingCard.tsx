import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

// Define types for the guest counter
type GuestType = 'adults' | 'children' | 'infants';

const BookingCard = () => {
  const [adults, setAdults] = useState(8);
  const [children, setChildren] = useState(1);
  const [infants, setInfants] = useState(0);

  // Helper function to adjust guest counts
  const adjustCount = (type: GuestType, increment: number): void => {
    switch (type) {
      case 'adults':
        setAdults(Math.max(0, adults + increment));
        break;
      case 'children':
        setChildren(Math.max(0, children + increment));
        break;
      case 'infants':
        setInfants(Math.max(0, infants + increment));
        break;
    }
  };

  // Format guest text with proper pluralization
  const getGuestText = (): string => {
    return `${adults} Adult${adults !== 1 ? 's' : ''}, ${children} Children, ${infants} Infant${infants !== 1 ? 's' : ''}`;
  };

  return (
    <Card className="w-full max-w-sm mx-auto rounded-xl shadow-md border border-gray-100">
      <CardContent className="p-4 space-y-4">
        {/* Price header */}
        <div className="flex lg:space-x-3 items-center">
          <p className=" lg:2xl font-bold text-gray-900">NGN320,000</p>
          <p className="text-[12px] lg:text-sm text-gray-600 ml-1">per night</p>
        </div>
        
        {/* Minimum nights */}
        <p className="text-sm text-gray-500 -mt-2">minimum night 3</p>
        
        {/* Check-in and Check-out */}
        <div className="flex flex-col sm:flex-row justify-between gap-3">
          <div className="space-y-1 flex-1 min-w-0">
            <label className="text-sm font-medium text-gray-700">Check In</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="outline" 
                  className="w-full h-10 justify-start text-gray-500 bg-white border-gray-200 hover:bg-gray-50 text-xs"
                >
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span className="overflow-hidden whitespace-nowrap">Select date</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" />
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="space-y-1 flex-1 min-w-0">
            <label className="text-sm font-medium text-gray-700">Check Out</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="outline" 
                  className="w-full h-10 justify-start text-gray-500 bg-white border-gray-200 hover:bg-gray-50 text-xs"
                >
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span className="overflow-hidden whitespace-nowrap">Select date</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        {/* Guest Selection */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Guest</label>
          <Collapsible className="w-full">
            <CollapsibleTrigger className="w-full min-h-10 flex items-center justify-between text-sm px-3 py-2 border rounded-md text-left">
              <span className="text-sm leading-tight">{getGuestText()}</span>
              <ChevronDown className="h-4 w-4 flex-shrink-0 ml-1" />
            </CollapsibleTrigger>
            <CollapsibleContent className="border-x border-b rounded-b-md p-3 space-y-3 mt-0">
              {/* Adults counter */}
              <div className="flex items-center justify-between">
                <span className="text-sm">Adults</span>
                <div className="flex items-center gap-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="h-8 w-8 p-0 rounded-full" 
                    onClick={() => adjustCount('adults', -1)}
                    disabled={adults <= 0}
                  >
                    -
                  </Button>
                  <span className="w-4 text-center">{adults}</span>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="h-8 w-8 p-0 rounded-full" 
                    onClick={() => adjustCount('adults', 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
              
              {/* Children counter */}
              <div className="flex items-center justify-between">
                <span className="text-sm">Children</span>
                <div className="flex items-center gap-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="h-8 w-8 p-0 rounded-full" 
                    onClick={() => adjustCount('children', -1)}
                    disabled={children <= 0}
                  >
                    -
                  </Button>
                  <span className="w-4 text-center">{children}</span>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="h-8 w-8 p-0 rounded-full" 
                    onClick={() => adjustCount('children', 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
              
              {/* Infants counter */}
              <div className="flex items-center justify-between">
                <span className="text-sm">Infants</span>
                <div className="flex items-center gap-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="h-8 w-8 p-0 rounded-full" 
                    onClick={() => adjustCount('infants', -1)}
                    disabled={infants <= 0}
                  >
                    -
                  </Button>
                  <span className="w-4 text-center">{infants}</span>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="h-8 w-8 p-0 rounded-full" 
                    onClick={() => adjustCount('infants', 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
        
        {/* Request to Book Button */}
        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12">
          Request to Book
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookingCard;