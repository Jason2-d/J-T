'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { CalendarIcon } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Separator } from '@radix-ui/react-separator';

const bookingForm = () => {
  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();

  return (
    <Card className="flex-[35%] rounded-2xl shadow-lg">
      <CardContent className="flex flex-col space-y-10 p-6">
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-[700] text-[#221E1F]">NGN320,000</h2>
              <p className="text-lg font-[400] text-[#494949]">per night</p>
            </div>
            <p className="text-sm font-[400] text-[#494949]">minimum night 3</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="font-[500] text-[#475569]">Check In</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      'w-full justify-start px-4 py-5 text-left font-normal',
                      !checkIn && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkIn ? (
                      format(checkIn, 'PPP')
                    ) : (
                      <span>Select date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label className="font-[500] text-[#475569]">Check Out</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      'w-full justify-start px-4 py-5 text-left font-normal',
                      !checkOut && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkOut ? (
                      format(checkOut, 'PPP')
                    ) : (
                      <span>Select date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="space-y-2">
            <Label className="font-[500] text-[#475569]">Guest</Label>
            <Select>
              <SelectTrigger className="px-4 py-5 text-[15px] font-[400] text-[#94A3B8]">
                <SelectValue placeholder="0 Adult, 0 Children, 0 Infant" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Adult, 0 Children, 0 Infant</SelectItem>
                <SelectItem value="2">
                  2 Adults, 0 Children, 0 Infant
                </SelectItem>
                <SelectItem value="3">
                  3 Adults, 0 Children, 0 Infant
                </SelectItem>
                <SelectItem value="4">
                  4 Adults, 0 Children, 0 Infant
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button className="w-full rounded-md bg-[#EF5E17] px-4 py-5 text-[16px] font-[400] text-white hover:bg-orange-600">
          Request to Book
        </Button>
      </CardContent>
    </Card>
  );
};

export default bookingForm;
