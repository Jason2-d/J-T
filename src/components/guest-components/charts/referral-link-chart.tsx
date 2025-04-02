'use client';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Define prop types
interface ReferralLinkChartProps {
  className?: string;
}

const ReferralLinkChart: React.FC<ReferralLinkChartProps> = ({ className }) => {
  // Prepare data in recharts format
  const data = [
    { month: 'Jan', clicks: 60, bookings: 90 },
    { month: 'Feb', clicks: 70, bookings: 110 },
    { month: 'Mar', clicks: 80, bookings: 130 },
    { month: 'Apr', clicks: 70, bookings: 100 },
    { month: 'May', clicks: 60, bookings: 90 },
    { month: 'Jun', clicks: 50, bookings: 80 },
    { month: 'Jul', clicks: 60, bookings: 90 },
    { month: 'Aug', clicks: 70, bookings: 100 },
    { month: 'Sep', clicks: 80, bookings: 110 },
    { month: 'Oct', clicks: 70, bookings: 100 },
    { month: 'Nov', clicks: 60, bookings: 90 },
    { month: 'Dec', clicks: 50, bookings: 80 },
  ];

  return (
    <Card className={`border-[1px] border-gray-200 ${className}`}>
      <><CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-semibold text-gray-800">
                Referral Link Performance
            </CardTitle>
            <Select defaultValue="This Year">
                <SelectTrigger className="w-[120px] border-gray-200 bg-gray-50">
                    <SelectValue placeholder="Select Year" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="This Year">This Year</SelectItem>
                    <SelectItem value="Last Year">Last Year</SelectItem>
                </SelectContent>
            </Select>
        </CardHeader><CardContent className="pb-4 pl-0 pr-4">
                <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={data} margin={{ left: 20, bottom: 10, right: 10 }}>
                        <CartesianGrid stroke="#f3f4f6" horizontal vertical />
                        <XAxis
                            dataKey="month"
                            axisLine={{ stroke: '#6B7280', strokeWidth: 1 }}
                            tickLine={false} />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            domain={[0, 150]}
                            ticks={[0, 30, 60, 90, 120, 150]}
                            className="text-sm" />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(0,0,0,0.8)',
                                color: 'white',
                                borderRadius: '8px',
                            }} />
                        <Line
                            type="monotone"
                            dataKey="clicks"
                            stroke="#FF6F61"
                            strokeWidth={2}
                            dot={{ r: 5, fill: '#FF6F61', stroke: 'white', strokeWidth: 2 }}
                            activeDot={{ r: 7 }} />
                        <Line
                            type="monotone"
                            dataKey="bookings"
                            stroke="#FFC107"
                            strokeWidth={2}
                            dot={{ r: 5, fill: '#FFC107', stroke: 'white', strokeWidth: 2 }}
                            activeDot={{ r: 7 }} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent></>
    </Card>
  );
};

export default ReferralLinkChart;