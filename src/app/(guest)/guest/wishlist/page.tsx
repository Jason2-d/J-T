import FooterNav from "@/components/guest-components/bookings/footerNav";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-between mt-3">
      {/* Main Content */}
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-8">
        <div className="mx-auto flex w-full max-w-lg flex-col items-center gap-6 rounded-lg p-6 space-y-4">
          <Link href={`/guest/wishlist/1`} passHref>
            <div className="flex flex-col items-center justify-center">
              <img
                src="/images/Hearts.png"
                alt="Hearts"
                className="mb-4 h-24 w-24 object-contain"
              />
              <h3 className="text-center text-[1.25rem] font-medium text-[#221E1F] md:text-[1.5rem]">
                Your wishlist is empty
              </h3>
              <p className="text-center text-[1rem] font-normal text-[#221E1F] md:text-[1.125rem]">
                Found a place you love? Tap the heart to save it here for quick
                access later!
              </p>
            </div>
          </Link>

          <Link href={`/guest/wishlist/1`} passHref>
            <Button className="w-full rounded-md bg-orange-600 px-6 py-3 text-[1rem] font-medium hover:bg-orange-700 md:w-auto md:text-[1.125rem]">
              Explore Listings
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <FooterNav />
    </div>
  );
};

export default Page;