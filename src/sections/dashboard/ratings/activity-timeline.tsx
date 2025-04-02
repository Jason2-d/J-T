import React from 'react';
import { LucideIcon, Calendar, Home, LogOut } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface TimelineItemData {
  id: number;
  icon: LucideIcon;
  time: string;
  title: string;
  description: string;
  iconColor?: string;
}

const TimelineSection: React.FC = () => {
  const timelineItems: TimelineItemData[] = [
    {
      id: 1,
      icon: Calendar,
      time: '01:20 PM',
      title: 'Reservation Approved',
      description: 'Hermiston approved 3 Bedroom Luxury home for comfort joy',
      iconColor: 'text-green-500',
    },
    {
      id: 2,
      icon: Home,
      time: '12:00 PM',
      title: 'New Listing Added',
      description: 'Melissa Hermiston added a new listing',
      iconColor: 'text-blue-500',
    },
    {
      id: 3,
      icon: LogOut,
      time: '12:00 PM',
      title: 'Guest Check-Out',
      description: 'Melissa Hermiston checked out from 3 Bedroom Luxury home',
      iconColor: 'text-red-500',
    },
  ];

  return (
    <div className="w-full max-w-md space-y-4 ">
      {timelineItems.map((item) => (
        <div key={item.id} className="relative flex space-x-2">
          {/* Icon Container */}
          <div
            className={cn(
              'flex h-12 w-12 flex-shrink-0 items-center  rounded-full',
              item.iconColor
            )}
          >
            <item.icon className="h-6 w-6" />
          </div>

          {/* Content Container */}
          <div className="flex-1 mt-2">
            <div className="text-sm text-gray-500">{item.time}</div>
            <div className="font-semibold text-gray-800">{item.title}</div>
            <div className="text-sm text-gray-600">{item.description}</div>
          </div>

          {/* Vertical Separator */}
          {item.id !== timelineItems.length && (
            <div className="absolute -bottom-4 left-1 top-12 w-px">
              <Separator
                orientation="vertical"
                className="h-full w-[2px] bg-gray-200"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TimelineSection;
