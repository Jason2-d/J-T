'use client';

import React from 'react';
import Image from 'next/image';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

const ImageGallery = ({ images = [] }) => {
  const defaultImages = [
    {
      src: '/images/img1.png',
      alt: 'Property Image',
      width: 1200,
      height: 800,
    },
    {
      src: '/images/hospitality1',
      alt: 'Thumbnail 1',
      width: 800,
      height: 600,
    },
    {
      src: '/images/grid_2_img.png',
      alt: 'Thumbnail 2',
      width: 800,
      height: 600,
    },
    {
      src: '/images/grid_3_img.png',
      alt: 'Thumbnail 3',
      width: 800,
      height: 600,
    },
    {
      src: '/images/grid_4_img.png',
      alt: 'Thumbnail 4',
      width: 800,
      height: 600,
    },
  ];

  const galleryImages = images.length > 0 ? images : defaultImages;

  return (
    <div className="w-full flex-[60%]">
      <Gallery>
        <div className="flex gap-6 md:gap-3">
          {/* Main Image */}
          <div className="relative lg:h-[300px] md:h-[250px] flex-[40%]">
            <Item
              original={galleryImages[0].src}
              thumbnail={galleryImages[0].src}
              width={galleryImages[0].width}
              height={galleryImages[0].height}
              alt={galleryImages[0].alt}
            >
              {({ ref, open }) => (
                <div
                  className="relative h-full cursor-pointer"
                  onClick={open}
                  ref={ref}
                >
                  <Image
                    src={galleryImages[0].src}
                    alt={galleryImages[0].alt}
                    fill
                    className="rounded-2xl object-cover transition-transform hover:scale-105"
                    priority
                  />
                </div>
              )}
            </Item>
          </div>

          {/* Grid Images */}
          <div className="grid flex-[30%] grid-cols-2 gap-6 md:gap-1 md:flex-[32%]">
            {galleryImages.slice(1).map((image, index) => (
              <Item
                key={index}
                original={image.src}
                thumbnail={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
              >
                {({ ref, open }) => (
                  <div
                    className="relative lg:h-[148px] md:h-[122px] cursor-pointer overflow-hidden rounded-2xl"
                    onClick={open}
                    ref={ref}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                )}
              </Item>
            ))}
          </div>
        </div>
      </Gallery>
    </div>
  );
};

export default ImageGallery;
