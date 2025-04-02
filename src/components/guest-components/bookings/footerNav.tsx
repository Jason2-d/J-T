"use client";

import { HomeIcon, HeartIcon, CalendarIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const FooterNav = () => {
  const pathname = usePathname(); // Get the current route

  // Define the navigation items
  const navItems = [
    { href: "/guest/home/1", label: "V Homes", icon: HomeIcon, notifications: 0 },
    { href: "/guest/wishlist", label: "Wishlist", icon: HeartIcon, notifications: 0 },
    { href: "/guest/bookings", label: "Bookings", icon: CalendarIcon, notifications: 10 },
    { href: "/guest/messages", label: "Messages", icon: MailIcon, notifications: 1 },
  ];

  return (
    <div className="flex justify-center">
      <div className="fixed bottom-0 flex w-full justify-around rounded-t-3xl bg-[#fef5e8] py-4 md:hidden z-50">
        {navItems.map((item) => {
          // Determine if the current item is active based on the pathname
          const isActive = pathname === item.href;

          return (
            <Link key={item.href} href={item.href} passHref>
              <button
                className={`relative flex flex-col items-center justify-center rounded-2xl px-4 py-2 transition-colors ${
                  isActive
                    ? "text-[#EF5E17]"
                    : "text-[#494949]"
                }`}
              >
                {/* Icon with Notification Indicator */}
                <div className="relative">
                  <item.icon
                    className={`h-5 w-5 ${isActive ? "text-[#ef5e17]" : "text-[#494949]"}`}
                  />
                  {item.notifications > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#EF5E17] text-[10px] font-medium text-white">
                      {item.notifications}
                    </span>
                  )}
                </div>
                {/* Label */}
                <p className="text-sm font-medium">{item.label}</p>
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FooterNav;