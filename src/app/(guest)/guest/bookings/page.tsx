import FooterNav from "@/components/guest-components/bookings/footerNav";
import EmailIcon from "@/components/guest-components/icons/emailIcon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-between  mt-3">
      {/* Main Content */}
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-8">
        <div className="mx-auto flex w-full max-w-lg flex-col items-center gap-6 rounded-lg p-6">
          <Link href={`/guest/bookings/1`} passHref>
            <div className="flex flex-col items-center justify-center">
              <EmailIcon size={80} color="#F6BC6D" />
              <h3 className="text-center text-[1.25rem] font-medium text-[#221E1F] md:text-[1.5rem]">
                You don&apos;t have any bookings yet.
              </h3>
              <p className="text-center text-[1rem] font-normal text-[#221E1F] md:text-[1.125rem]">
                Ready to find your perfect stay? Discover unique spaces waiting
                for you to explore. Let&apos;s get your next adventure started!
              </p>
            </div>
          </Link>

          <Link href={`/guest/home`} passHref>
            <Button className="w-full rounded-md bg-orange-600 px-6 py-3 text-[1rem] font-medium hover:bg-orange-700 md:w-auto md:text-[1.125rem]">
              Browse Stays
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