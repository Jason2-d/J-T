// app/components/ui/navbar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../../ui/button';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed z-20 h-[110px] w-full bg-[#221e1f] py-5 text-white">
      <div className="container mx-auto flex h-full items-center justify-between">
        <Link href="../main" className="flex h-20 w-24 items-center">
          <Image
            src="/images/vefristay.png"
            alt="Vefristay"
            width={140}
            height={40}
            className="h-16 w-20"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-12 text-[14px] font-semibold lg:flex">
          <Link
            href="/host"
            className="tracking-wider text-white transition-colors hover:text-gray-300"
          >
            Host your home
          </Link>
          <Link
            href="/affiliate"
            className="tracking-wider text-white transition-colors hover:text-gray-300"
          >
            Become an affiliate
          </Link>
          <Link
            href="/blog"
            className="tracking-wider text-white transition-colors hover:text-gray-300"
          >
            Blog
          </Link>
          <Link
            href="/login"
            className="tracking-wider text-white transition-colors hover:text-gray-300"
          >
            Login
          </Link>
          <Button
            variant="default"
            className="rounded-none bg-[#ee5e1b] py-5 font-semibold tracking-wider text-white hover:bg-[#ee5e1b]/90"
          >
            Create an account
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-16 z-50 bg-black md:hidden">
            <div className="flex flex-col space-y-4 px-4 py-4">
              <Link
                href="/host"
                className="text-white transition-colors hover:text-gray-300"
              >
                Host your home
              </Link>
              <Link
                href="/affiliate"
                className="text-white transition-colors hover:text-gray-300"
              >
                Become an affiliate
              </Link>
              <Link
                href="/blog"
                className="text-white transition-colors hover:text-gray-300"
              >
                Blog
              </Link>
              <Link
                href="/login"
                className="text-white transition-colors hover:text-gray-300"
              >
                Login
              </Link>
              <Button
                variant="default"
                className="w-full bg-primary text-white hover:bg-primary/90"
              >
                Create an account
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
