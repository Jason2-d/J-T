import React from 'react';
import { Calendar, TrendingUp, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  trend: number;
  styles?: {
    container?: string;
    title?: string;
    value?: string;
    iconContainer?: string;
    trendContainer?: string;
  };
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  trend,
  styles = {},
}) => {
  const isPositiveTrend = trend >= 0;

  return (
    <div
      className={cn(
        'space-y-4 rounded-lg p-4',
        'bg-[#FDE7DC]',
        styles.container
      )}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className={cn('text-xs md:text-[14px] font-medium text-gray-600', styles.title)}>
            {title}
          </h3>
          <span
            className={cn(' md:text-2xl font-bold text-gray-800', styles.value)}
          >
            {value}
          </span>
        </div>
        <div className={cn('rounded-sm md:rounded-lg bg-white p-1 -mt-4 md:mt-0 md:p-2', styles.iconContainer)}>
          <Icon className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
        </div>
      </div>
      <div className="flex items-center text-[8px] md:text-sm">
        <div
          className={cn(
            'flex items-center rounded-full bg-white px-2 py-1',
            isPositiveTrend ? 'text-green-600' : 'text-red-600',
            styles.trendContainer
          )}
        >
          <TrendingUp className="mr-1 h-4 w-4" />
          <span>{Math.abs(trend)}%</span>
        </div>
        <span className="ml-2 text-gray-500 text-[10px] md:text-xs">From last week</span>
      </div>
    </div>
  );
};

const StatCards = () => {
  const statsData = [
    {
      title: 'Total Bookings',
      value: 97,
      icon: Calendar,
      trend: 9.7,
      styles: {
        container: 'bg-[#FDE7DC] rounded-lg lg:rounded-2xl',
        title: 'text-ora[#2F2F2F]',
        value: 'text-ora[#2F2F2F]',
        iconContainer: 'bg-white',
        trendContainer: 'bg-white',
      },
    },
    {
      title: 'Revenue',
      value: '$24,500',
      icon: Calendar,
      trend: 8.7,
      styles: {
        container: 'bg-white rounded-lg lg:rounded-2xl',
        title: 'text-gr[#2F2F2F]',
        value: 'text-gr[#2F2F2F]',
        iconContainer: 'bg-[#FDE7DC]',
        trendContainer: 'bg-[#08992233]',
      },
    },
    {
      title: 'Active Users',
      value: 256,
      icon: Calendar,
      trend: 5.5,
      styles: {
        container: 'bg-white rounded-lg lg:rounded-2xl',
        title: 'text-b[#2F2F2F]',
        value: 'text-b[#2F2F2F]',
        iconContainer: 'bg-[#FDE7DC]',
        trendContainer: 'bg-[#08992233]',
      },
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      icon: Calendar,
      trend: -2.1,
      styles: {
        container: 'bg-white rounded-lg lg:rounded-2xl',
        title: 'text-[#2F2F2F]',
        value: 'text-[#2F2F2F]',
        iconContainer: 'bg-[#FDE7DC]',
        trendContainer: 'bg-[#FF333333]',
      },
    },
  ];

  return (
    <div className="grid h-28 w-full  grid-cols-2 gap-3 lg:gap-4 lg:grid-cols-4">
      {statsData.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatCards;
