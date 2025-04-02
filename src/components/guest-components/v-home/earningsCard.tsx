"use client";
import { FC } from "react";
import { TrendingUp, TrendingDown, WalletIcon } from "lucide-react"; // Replace with the correct icon names from lucide-react

interface EarningsCardProps {
  title: string;
  amount: string;
  change: string;
  isPositive: boolean;
}

const EarningsCard: FC<EarningsCardProps> = ({ title, amount, change, isPositive }) => {
  return (
    <div className="p-4 bg-white rounded-lg flex w-full justify-between">
      <div>
      <h3 className="text-gray-600 text-[12px] font-[500px]">{title}</h3>
      <p className="text-2xl font-bold">{amount}</p>
      <div className="space-x-1">
      <span className={`text-[10px] px-1.5 py-0.5 rounded-lg ${isPositive ? "text-green-500  bg-[#089922]/20" : "text-red-500 bg-[#ff3333]/20"}`}>
        {isPositive ? <TrendingUp className="inline-block w-4 h-4 text-green-500" /> : <TrendingDown className="inline-block w-4 h-4 text-red-500" />} {change}% 
      </span>
      <span className="text-[#64748b] text-[10px]">From last week</span>
      </div>
      </div>
      <button className="bg-[#ef5e17]/15 h-fit p-1 rounded-[4px] cursor-pointer">
      <WalletIcon className="h-4 w-4"/>
      </button>
    </div>
  );
};

export default EarningsCard;