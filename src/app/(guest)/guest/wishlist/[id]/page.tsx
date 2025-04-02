"use client";

import Link from "next/link";
import Image from "next/image";
import FooterNav from "@/components/guest-components/bookings/footerNav";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      {/* Main Content */}
      <div className="flex w-full flex-1 flex-col px-4">
        {/* Heading */}
        <h1 className="mb-6 w-full max-w-7xl text-left text-[1.5rem] font-bold text-[#221E1F] md:text-[2rem]">
          Wishlists
        </h1>

        {/* Cards Container */}
        <div className="flex w-full max-w-7xl gap-6 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 ">
          {/* General Wishlist Card */}
          <div className="w-full max-w-[300px] cursor-pointer rounded-2xl md:max-w-none">
            <Link href="/guest/wishlist/general">
              <div className="rounded-2xl bg-white p-2 shadow-md">
                <div className="relative h-[150px] w-full md:h-[200px]">
                  <Image
                    src="/images/wishlist_img.png"
                    alt="General"
                    width={150}
                    height={150}
                    className="h-full w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            <h2 className="mt-4 text-[0.875rem] font-semibold uppercase text-[#221E1F] md:text-[1rem] ml-2">
              General
            </h2>
            <p className="text-[0.75rem] text-gray-600 md:text-[0.875rem] ml-2">
              5 saved
            </p>
            </Link>
          </div>

          {/* Custom Wishlist Card */}
          <div className="w-full max-w-[300px] cursor-pointer rounded-2xl md:max-w-none">
            <Link href="/guest/wishlist/custom">
              <div className="rounded-2xl bg-white p-2 shadow-md">
                <div className="relative h-[150px] w-full md:h-[200px]">
                  <div className="grid h-full w-full grid-cols-2">
                    <div className="relative">
                      <Image
                        src="/images/wishlist_img.png"
                        alt="Your Categories"
                        width={150}
                        height={150}
                        className="h-full w-full rounded-tl-2xl object-cover"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        src="/images/wishlist_img.png"
                        alt="Your Categories"
                        width={150}
                        height={150}
                        className="h-full w-full rounded-tr-2xl object-cover"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        src="/images/wishlist_img.png"
                        alt="Your Categories"
                        width={150}
                        height={150}
                        className="h-full w-full rounded-bl-2xl object-cover"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        src="/images/wishlist_img.png"
                        alt="Your Categories"
                        width={150}
                        height={150}
                        className="h-full w-full rounded-br-2xl object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            <h2 className="mt-4 text-[0.875rem] font-semibold uppercase text-[#221E1F] md:text-[1rem] ml-2">
              Your Categories
            </h2>
            <p className="text-[0.75rem] text-gray-600 md:text-[0.875rem] ml-2">
              32 saved
            </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterNav />
    </div>
  );
}