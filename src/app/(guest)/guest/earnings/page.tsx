'use client';
import React from 'react';
import EarningsCard from '@/components/guest-components/v-home/earningsCard';
import DatePicker from '@/components/guest-components/v-home/yearPicker';
import WithdrawalBalance from '@/components/guest-components/v-home/withdrawalBalance';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/guest-components/v-home/chart';
import Transactions from '@/components/guest-components/v-home/transactions';
import Earnings from '@/components/guest-components/v-home/earnings';
import MultipleChart from '@/components/guest-components/v-home/multipleChart';
import InvitesList from '@/components/guest-components/v-home/invitesList';
import WithdrawHistory from '@/components/guest-components/v-home/WithdrawHistory';
import RevenueChart from '@/components/guest-components/charts/revenue-chart'; 
import ReferralLinkChart from '@/components/guest-components/charts/referral-link-chart';
import DonutChart from '@/components/guest-components/charts/donut-chart';

type ChartData = {
  month: string;
  revenue: number;
};

type CoHost = {
  name: string;
  action: string;
  permissions: number;
  status: "online" | "offline";
};

// Revenue chart data - correct type for RevenueChart
const revenueChartData: ChartData[] = [
  { month: 'Dec 2027', revenue: 2000000 },
  { month: 'Jan 2028', revenue: 1000000 },
  { month: 'Feb 2028', revenue: 2500000 },
  { month: 'Mar 2028', revenue: 1500000 },
  { month: 'Apr 2028', revenue: 3000000 },
  { month: 'May 2028', revenue: 2000000 },
];

// Device usage chart data
const deviceChartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
  mobile: {
    label: 'Mobile',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

const Page = () => {
  return (
    <div className="bg-[#f8fafc] md:bg-white">
      {/* Mobile-View */}
      <section className="md:hidden">
        <div className="md:hidden">
          <p className="text-xl font-bold text-[#ef5e17]">Earnings</p>
          <div className="mt-2">
            <EarningsCard
              title="Your Earnings"
              amount="N5,400,000"
              change="9.70"
              isPositive={true}
            />
            <WithdrawalBalance
              title="Withdrawal Balance"
              amount="N5,400,000"
              change="1.06"
              isPositive={false}
            />

            <div>
              <RevenueChart data={revenueChartData} />
            </div>
            <div>
              {/* donut chart */}
              <DonutChart />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Transactions />
        </div>
      </section>

      <section className="hidden p-4 md:block">
        <Earnings />

        <div className="mx-auto mt-10 w-full max-w-7xl px-4">
  <div className="flex flex-col md:grid md:grid-cols-2">
    {/* Referral Link Chart (Left Column) */}
    <div className="w-full md:h-full">
      <div className="h-full rounded-lg bg-white">
        <ReferralLinkChart />
      </div>
    </div>

    {/* Right Column (InvitesList and WithdrawHistory) */}
    <div className="w-full">
      <div className="flex h-full w-full flex-col gap-2">
        {/* Invites List */}
        <div className="flex-1 rounded-lg bg-white">
          <InvitesList />
        </div>
        {/* Withdraw History */}
        <div className="flex-1 rounded-lg bg-white">
          <WithdrawHistory />
        </div>
      </div>
    </div>
  </div>
</div>
      </section>
    </div>
  );
};

export default Page;