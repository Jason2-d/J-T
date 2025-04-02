'use client';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const data = [
  { name: 'Abuja', value: 4.4, color: '#3B82F6' }, // Blue
  { name: 'Lagos', value: 4.4, color: '#10B981' }, // Green
  { name: 'Kaduna', value: 4.4, color: '#F59E0B' }, // Orange
  { name: 'Oyo', value: 4.4, color: '#22D3EE' }, // Cyan
  { name: 'Others', value: 4.4, color: '#A78BFA' }, // Purple
];

const totalEarnings = 5.4;
export default function DonutChart() {
  return (
    <Card className="h-full w-full">
      <CardHeader>
        <CardTitle className="text-center text-lg font-semibold">
          Top 5 city earnings
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          {/* Donut Chart */}
          <div className="relative h-48 w-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  paddingAngle={0}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold text-gray-800">
                N{totalEarnings}m
              </span>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8 w-full">
            {data.map((entry) => (
              <div
                key={entry.name}
                className="my-8 flex h-full w-full items-center justify-between"
              >
                <div className="flex items-center">
                  <span
                    className="mr-2 h-1 w-1 rounded-full"
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="text-sm text-blue-700">{entry.name}</span>
                </div>

                <div className="flex items-center">
                  <div className="mr-3 h-[6px] w-40 rounded bg-[#EF5E1726]">
                    <div
                      className="h-full rounded"
                      style={{
                        width: `${(entry.value / totalEarnings) * 100}%`,
                        backgroundColor: 'red',
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-600">N{entry.value}m</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}