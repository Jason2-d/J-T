'use client';

import { useEffect, useRef, useState } from 'react';
import DualCalendar from '@/components/guest-components/calenders/dualCalender';
import ImageGallery from '@/components/guest-components/image_gallery/imageGallery';
import ListingDetailsSection from '@/sections/propertyDetail/listingDetailsSection';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Heart, Share2 } from 'lucide-react';
import RatingSection from '@/sections/propertyDetail/ratingSection';
import BookingCard from '@/components/guest-components/cards/bookingCard';
import { Button } from '@/components/ui/button';
import SingleCalendar from '@/components/guest-components/v-home/single-calendar';
import FooterNav from '@/components/guest-components/bookings/footerNav';

import Link from 'next/link';

// Constants
const HOUSE_RULES = [
  { label: 'No smoking' },
  { label: 'No partying allowed' },
  { label: 'No unregistered guests' },
  { label: 'No pets allowed' },
];

const HOST = {
  name: 'Eleven Homes',
  avatarUrl: '/images/Ellipse.png',
};

const PROPERTY_ADDRESS =
  '2 Cubango Cl, Maitama, Abuja 904101, Federal Capital Territory, Nigeria';
const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.118247987369!2d7.49509!3d9.064156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bbac3e89a1b%3A0xa8a1e3658b8d857e!2sMaitama%2C%20Abuja!5e0!3m2!1sen!2sng!4v1706567890123';

interface PropertyDetailPageProps {
  id: string;
}

const PropertyDetailPage = ({ id }: PropertyDetailPageProps) => {
  const [activeTab, setActiveTab] = useState('photos');

  // Section refs
  const photosSectionRef = useRef<HTMLElement>(null);
  const detailsSectionRef = useRef<HTMLElement>(null);
  const hostSectionRef = useRef<HTMLElement>(null);
  const reviewsSectionRef = useRef<HTMLElement>(null);
  const locationSectionRef = useRef<HTMLElement>(null);

  const sectionRefs = {
    photos: photosSectionRef,
    Details: detailsSectionRef,
    Host: hostSectionRef,
    Reviews: reviewsSectionRef,
    Location: locationSectionRef,
  };

  // Scroll to section handler
  const scrollToSection = (sectionId: string) => {
    const sectionRef = sectionRefs[sectionId as keyof typeof sectionRefs];
    if (sectionRef.current) {
      const navHeight = 120; // Height of the fixed navbar
      const elementPosition = sectionRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveTab(sectionId);
    }
  };

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180; // Adjusted offset for header

      Object.entries(sectionRefs).forEach(([sectionId, ref]) => {
        if (ref.current) {
          const element = ref.current;
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveTab(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  let photosSectionClassName = 'scroll-mt-32 pt-[118px]';

  // Common section wrapper style
  const sectionClassName = 'scroll-mt-32 pt-16';

  return (
    <div className="max-w-full">
      {/* Mobile View - Hidden on lg screens and above */}
      <div className="md:hidden">
        {/* Back Button */}
        <Link href={`/guest/home`} passHref className="cursor-pointer">
          {' '}
          <Button
            variant="outline"
            className="mb-2 flex items-center border-none bg-transparent shadow-none"
          >
            <ArrowLeft />
            <p>Back</p>
          </Button>
        </Link>

        {/* Property Header */}
        <div className="w-full space-y-5">
          <img
            src="/images/hospi-box.png"
            alt="Property Featured Image"
            className="w-full"
          />
          <h2 className="text-lg font-semibold text-[#221e1f]">
            2 Bedroom Luxury Shortlet Apartment
          </h2>
        </div>

        {/* Property Details */}
        <section className="mt-5">
          <ListingDetailsSection />
        </section>

        {/* Host Section */}
        <section
          ref={hostSectionRef}
          className={sectionClassName}
          aria-labelledby="host-heading-mobile"
        >
          <h2 id="host-heading-mobile" className="text-xl font-semibold">
            Meet the host
          </h2>
          <div className="mt-3 flex items-center space-x-3">
            <Avatar>
              {HOST.avatarUrl ? (
                <AvatarImage src={HOST.avatarUrl} alt={HOST.name} />
              ) : (
                <AvatarFallback>
                  {HOST.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </AvatarFallback>
              )}
            </Avatar>
            <span className="font-medium text-gray-800">{HOST.name}</span>
          </div>
          <Separator className="my-3" />

          {/* House Rules */}
          <div className="mt-3 max-w-3xl space-y-6">
            <h2 id="rules-heading-mobile" className="text-xl font-semibold">
              House rules
            </h2>
            <p className="mt-2 px-4 text-sm text-gray-600">
              You'll be staying in someone's home, so please treat it with care
              and respect.
            </p>
            <div className="mt-2 grid grid-cols-2 gap-4 px-4 text-sm text-gray-700">
              {HOUSE_RULES.map((rule, index) => (
                <div key={index}>
                  <span>{rule.label}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-3" />

          {/* Calendar */}
          <SingleCalendar />

          <Separator className="my-3" />
        </section>

        {/* Ratings Section */}
        <section ref={reviewsSectionRef}>
          <RatingSection />
        </section>

        {/* Location Section */}
        <section
          ref={locationSectionRef}
          className={`${sectionClassName} pb-5`}
        >
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Where you'll be</h2>
            <p className="text-sm text-gray-600">{PROPERTY_ADDRESS}</p>
            <div className="h-64 w-full overflow-hidden rounded-lg">
              <iframe
                className="h-full w-full"
                src={GOOGLE_MAPS_EMBED_URL}
                allowFullScreen
                loading="lazy"
                title="Property Location Map"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Booking Card */}
        <div className="flex w-full items-center justify-between rounded-2xl bg-white p-4 shadow-lg">
          {/* Price Section */}
          <div className="text-gray-900">
            <div className="flex">
              <p className="flex items-end text-xl font-semibold">
                ₦320,000{' '}
                <span className="text-sm font-normal text-gray-500">
                  / night
                </span>
              </p>
            </div>
            <p className="text-sm text-gray-500">minimum night 3</p>
          </div>

          {/* Book Button */}
          <Button className="rounded-lg p-6">Request to Book</Button>
        </div>
      </div>

      {/* Desktop View - Visible only on lg screens and above */}
      <div className="hidden md:block">
        {/* Fixed header navigation */}
        <div className="fixed top-0 z-10 w-full bg-white px-10 pt-3">
          <div>
            <Link
              href="/guest/wishlist/general"
              className="mb-3 flex items-center pt-20 text-black"
            >
              <ArrowLeft size={20} />
              <span className="text-lg">Back</span>
            </Link>
          </div>
          <h1 className="text-lg">2 Bedroom Luxury Shortlet Apartment</h1>

          <div className="flex w-full justify-between">
            <div className="mt-3 flex">
              {['photos', 'Details', 'Host', 'Reviews', 'Location'].map(
                (item) => (
                  <div
                    key={item}
                    className={`cursor-pointer px-4 ${
                      activeTab === item
                        ? 'border-b-[3px] border-[#EF5E17] font-medium text-[#EF5E17] duration-200'
                        : 'text-sm font-normal text-[#494949]'
                    }`}
                    onClick={() => scrollToSection(item)}
                  >
                    {item}
                  </div>
                )
              )}
            </div>

            <div className="flex space-x-5">
              <div className="flex items-center space-x-2 text-sm">
                <Share2 className="h-4 w-4" />
                <span className="underline">Share</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4" />
                <span className="underline">Favorite</span>
              </div>
            </div>

            {/* <Button
              size="lg"
              className={`px-11 font-bold bg-[#EF5E17]/90 w-80 mr-10 hover:bg-[#EF5E17] ${activeTab === 'Reviews' || activeTab === 'Location' ? 'block' : 'invisible'}`}
              onClick={() => scrollToSection('photos')}
            >
              Request To Book
            </Button> */}
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full px-10">
          <div className="grid grid-cols-7 gap-3">
            <main className="col-span-5">
              {/* Photos Section */}
              <section
                ref={photosSectionRef}
                className={photosSectionClassName}
              >
                <ImageGallery />
                <p className="border-b py-5 text-[16px] font-[500] text-[#000000]">
                  <span className="text-[16px] font-[500] text-[#666666]">
                    Last Updated on:
                  </span>{' '}
                  Aug 22 2024
                </p>
                <Separator />
              </section>

              {/* Details Section */}
              <section ref={detailsSectionRef} className={sectionClassName}>
                <ListingDetailsSection />
              </section>

              {/* Host Section */}
              <section
                ref={hostSectionRef}
                className={sectionClassName}
                aria-labelledby="host-heading"
              >
                <h2 id="host-heading" className="text-xl font-semibold">
                  Meet the host
                </h2>
                <div className="mt-3 flex items-center space-x-3 px-4">
                  <Avatar>
                    {HOST.avatarUrl ? (
                      <AvatarImage src={HOST.avatarUrl} alt={HOST.name} />
                    ) : (
                      <AvatarFallback>
                        {HOST.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <span className="font-medium text-gray-800">{HOST.name}</span>
                </div>
                <Separator className="my-3" />

                <div className="max-w-3xl space-y-6">
                  <h2 id="rules-heading" className="text-xl font-semibold">
                    House rules
                  </h2>
                  <p className="mt-2 px-4 text-sm text-gray-600">
                    You'll be staying in someone's home, so please treat it with
                    care and respect.
                  </p>
                  <div className="mt-2 grid grid-cols-2 gap-4 px-4 text-sm text-gray-700">
                    {HOUSE_RULES.map((rule, index) => (
                      <div key={index}>
                        <span>{rule.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Separator className="my-3" />
                <DualCalendar />
              </section>

              <Separator className="my-3" />
            </main>

            <aside className="sticky top-52 col-span-2 self-start">
              <BookingCard />
            </aside>
          </div>

          {/* Review Section */}
          <section ref={reviewsSectionRef} className={sectionClassName}>
            <RatingSection />
          </section>

          {/* Location Section */}
          <section
            ref={locationSectionRef}
            className={`${sectionClassName} pb-5`}
          >
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Where you'll be</h2>
              <p className="text-sm text-gray-600">{PROPERTY_ADDRESS}</p>
              <div className="h-64 w-full overflow-hidden rounded-lg">
                <iframe
                  className="h-full w-full"
                  src={GOOGLE_MAPS_EMBED_URL}
                  allowFullScreen
                  loading="lazy"
                  title="Property Location Map"
                ></iframe>
              </div>
            </div>
          </section>
        </div>
      </div>
      <FooterNav />
    </div>
  );
};

export default PropertyDetailPage;
