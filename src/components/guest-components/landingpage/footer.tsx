import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-[#1c1c1e] text-white">
      <div className="container mx-auto py-12">
        <div className="flex space-x-36">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-start">
            <div className="mb-4">
              <Image
                src="/images/vefristay.png"
                alt="Vefristay"
                width={140}
                height={40}
                className="h-16 w-20"
              />
            </div>
            <p className="mt-3 text-sm text-gray-300">
              Discover the true essence of hospitality.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Subscriptions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Faqs
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t-[1px] border-white pt-8 flex justify-between">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Vefristay. All rights reserved.
          </p>
          <div className='flex space-x-3'>
            <Link
              href="/host"
              className="tracking-wider text-white "
            >
              <Twitter fill='white' />
            </Link>
            <Link
              href="/host"
              className="tracking-wider text-white "
            >
              <Linkedin fill='#1c1c1e' className='bg-white text-[#1c1c1e] rounded-[3px]'/>
            </Link>
            <Link
              href="/host"
              className="tracking-wider text-white "
            >
              <Facebook fill='#1c1c1e' className='bg-white rounded-full text-[#1c1c1e]'/>
            </Link>
            <Link
              href="https://www.instagram.com/Glosolan/"
              className="tracking-wider text-white "
            >
              <Instagram className='text-white'/>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
