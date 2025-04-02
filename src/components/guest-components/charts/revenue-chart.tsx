'use client';

import { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the props for the chart
interface RevenueChartProps {
  width?: number | string;
  height?: number | string;
  data: { month: string; revenue: number }[];
  className?: string;
}

const RevenueChart: React.FC<RevenueChartProps> = ({
  width = '100%',
  height = 300,
  data,
  className,
}) => {
  const [selectedPeriod, setSelectedPeriod] = useState('This Year');

  const totalRevenue = data
    .reduce((sum, entry) => sum + entry.revenue, 0)
    .toLocaleString();

  const formatYAxis = (tick: number) => {
    if (tick === 0) return '0';
    return `${tick / 1000000}M`;
  };

  return (
    <div
      className={cn('w-full  rounded-xl bg-white p-4 shadow-sm', className)}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height:
          typeof height === 'number'
            ? `${height + 100}px`
            : `calc(${height} + 100px)`,
      }}
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Revenue</h2>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center rounded-md bg-[#FFE4CC] px-3 py-1 text-sm text-gray-800">
            {selectedPeriod} <ChevronDown className="ml-1 h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setSelectedPeriod('This Year')}>
              This Year
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedPeriod('Last Year')}>
              Last Year
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedPeriod('All Time')}>
              All Time
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="w-full">
        <ResponsiveContainer width="100%" height={height}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#E5E7EB"
              horizontal={true}
              vertical={false}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={{ stroke: '#6B7280', strokeWidth: 1 }}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <YAxis
              tickFormatter={formatYAxis}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
              domain={[0, 4000000]}
              stroke="transparent"
            />
            <Tooltip
              cursor={{ stroke: 'none' }} 
              formatter={(value) => [
                `${Number(value).toLocaleString()}`,
                'Revenue',
              ]}
              labelStyle={{ fontSize: 12 }}
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #E5E7EB',
                borderRadius: '4px',
                maxHeight: '100px',
                overflow: 'hidden',
              }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#F28C38"
              strokeWidth={2}
              fillOpacity={0.2}
              fill="#F28C38"
              dot={{ r: 6, fill: '#EF5E17', stroke: '#fff', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;