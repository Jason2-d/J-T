import { Calendar, TrendingUp, LucideIcon } from 'lucide-react';

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