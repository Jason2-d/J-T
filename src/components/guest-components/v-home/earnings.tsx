import { Separator } from '@radix-ui/react-separator';
import { ArrowUp, Share2 } from 'lucide-react';

export default function Earnings() {
  return (
    <div className="rounded-lg bg-transparent px-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-[22px] font-semibold">Earnings</h2>
          <p className="text-[16px] text-[#221e1f]">
            Track your affiliate rewards in one place.
          </p>
        </div>

        {/* Referral Link */}
        <div className="mt-4 flex max-h-fit items-center justify-between rounded-md border bg-[#0071da]/10 text-[18px]">
          <input
            type="text"
            value="www.v-hospitality.com/ref/JohnDoe123"
            readOnly
            className="w-full bg-transparent px-1.5 text-[#0071da] outline-none"
          />
          <button className="ml-2 flex items-center gap-1 rounded-md bg-white p-3 font-medium text-orange-500">
            <Share2 className="h-4 w-4" />
            Share
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-6 rounded-2xl border-2 text-center">
        <div className="flex h-full items-center justify-between">
          <div className="flex w-full items-center justify-around px-2 lg:text-center">
            {/* Total Earnings */}
            <div className="">
              <h3 className="text-2xl font-bold text-[#ef5e17]">₦450</h3>
              <p className="text-xs text-[#222222]">Total Earnings</p>
            </div>
            <Separator className="h-12 w-0.5 bg-slate-300" />
            {/* Available Balance */}
            <div className="">
              <h3 className="text-2xl font-bold text-[#f99c1c]">₦450</h3>
              <p className="text-xs text-[#222222]">Available Balance</p>
            </div>
            <Separator className="h-12 w-0.5 bg-slate-300" />
            {/* Total Invites */}
            <div className="">
              <h3 className="text-2xl font-bold text-[#2f2f2f]">78</h3>
              <p className="text-xs text-[#222222]">Total Invites</p>
            </div>
          </div>

          {/* Withdraw Button */}
          <div className="w-[20%] items-center flex flex-col justify-around rounded-2xl bg-orange-100 px-2 py-2.5 text-[16px] font-medium text-[#ef5e17]">
            <div className='mx-auto'>
              <ArrowUp />
            </div>
            <h3>Withdraw</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
