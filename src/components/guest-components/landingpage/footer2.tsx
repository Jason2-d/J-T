// Footer.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type FooterLinkProps = {
  children: React.ReactNode;
}

const FooterLink = ({ children }: FooterLinkProps) => (
  <div className="hover:underline cursor-pointer" tabIndex={0}>
    {children}
  </div>
);

type FooterColumnProps = {
  title: string;
  links: string[];
}

const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div className="flex flex-col space-y-2 mt-5 sm:mt-0">
    <h3 className="font-bold">{title}</h3>
    {links.map((link, index) => (
      <FooterLink key={index}>{link}</FooterLink>
    ))}
  </div>
);

export default function Footer() {
  const columns = [
    {
      title: "Company",
      links: ["About us", "Subscriptions", "Contact us"]
    },
    {
      title: "Resources",
      links: ["Faqs"]
    },
    {
      title: "Legal",
      links: ["Terms", "Privacy", "Cookies"]
    }
  ];

  const socialLinks = [
    { icon: <Facebook size={16} />, label: "Facebook", href: "#" },
    { icon: <Twitter size={16} />, label: "Twitter", href: "#" },
    { icon: <Instagram size={16} />, label: "Instagram", href: "#" },
    { icon: <Linkedin size={16} />, label: "LinkedIn", href: "#" }
  ];

  return (
    <footer className="bg-[#221E1F] text-white py-10 flex flex-col items-center">
      {/* Newsletter Section */}
      <div className="text-center md:text-center">
        <h3 className="font-bold text-lg mb-3">Subscribe Our Newsletter</h3>
        <p className="mb-4">
          Stay connected with us by subscribing to our newsletter and become a part of <br /> 
          a warm and authentic community
        </p>
        <form className="flex flex-col sm:flex-row bg-white rounded-lg p-1">
          <Input 
            type="email" 
            placeholder="Your email" 
            className="w-full border-0 p-2 sm:p-0 text-black"
          />
          <Button className="bg-orange-500 text-white px-4 py-2 border-0">
            Subscribe
          </Button>
        </form>
      </div>

      {/* Footer Links Section */}
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between mt-16">
        {/* Logo and Tagline */}
        <div className="mb-6 md:mb-0">
          <Image 
            src="/icons/logo.png" 
            alt="Logo" 
            width={80} 
            height={80}
            className="h-20 w-auto mb-3"
          />
          <p className="font-['Wulkan_Display']" style={{ fontFamily: 'Wulkan Display !important' }}>
            Discover the true essence of hospitality.
          </p>
        </div>

        {/* Footer Columns */}
        {columns.map((column, index) => (
          <FooterColumn 
            key={index} 
            title={column.title} 
            links={column.links} 
          />
        ))}
      </div>

      {/* Copyright Section */}
      <div className="container mx-auto px-4 mt-10 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center">
        <p>© Powered by Greencity. All rights reserved.</p>
        
        {/* Social Links */}
        <div className="flex space-x-4 mt-4 sm:mt-0">
          {socialLinks.map((social, index) => (
            <Link href={social.href} key={index} aria-label={social.label}>
              <div className="cursor-pointer text-white">
                {social.icon}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}