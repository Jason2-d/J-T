'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowLeftRightIcon,
  ArrowRight,
  ArrowRightToLine,
  ArrowUpRightIcon,
} from 'lucide-react';
import { Carattere } from 'next/font/google';

interface WishlistFolder {
  id: string;
  name: string;
  imageUrl: string;
  itemCount: number;
}

const WishlistPage = () => {
  // Mock data - replace with actual data from your backend
  const folders: WishlistFolder[] = [
    {
      id: '1',
      name: 'Summer Vacation',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/3024/ac8f/66c627267c6190e21c580af64bd41775?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NSDHO3lffXqVM-9aASMrPdK5Vlky7VnbIkHh92Fcn7KHsLnNNhk5d02Pa-bQoeHtcjquxfVx1VOxU4xYVtPh14UHjWMZdzgjLZ83mvgrUtOJbK5WxYNKMqNH48pMOATogzJMhYHvx0plhDZ1JhN2BstuX1ZzZHeoH-TsWXrVG2JzorL9~H4IiC0WXl27GObCCCfzGUJkfioFLpNxu0gQSm6X-~o8ROfklV3AbBJlZQm-lxHc1egb5N3hVbPZdR2kIbPjGRc-9wbiCMoi9xIbpER7EgBQYPY5amcH43dHc-0f7dDS-1kJB6P9~xbwaOzHvrovhBsb3izf0OkxIujKdw__',
      itemCount: 5,
    },
    {
      id: '2',
      name: 'Weekend Getaways',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/3024/ac8f/66c627267c6190e21c580af64bd41775?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NSDHO3lffXqVM-9aASMrPdK5Vlky7VnbIkHh92Fcn7KHsLnNNhk5d02Pa-bQoeHtcjquxfVx1VOxU4xYVtPh14UHjWMZdzgjLZ83mvgrUtOJbK5WxYNKMqNH48pMOATogzJMhYHvx0plhDZ1JhN2BstuX1ZzZHeoH-TsWXrVG2JzorL9~H4IiC0WXl27GObCCCfzGUJkfioFLpNxu0gQSm6X-~o8ROfklV3AbBJlZQm-lxHc1egb5N3hVbPZdR2kIbPjGRc-9wbiCMoi9xIbpER7EgBQYPY5amcH43dHc-0f7dDS-1kJB6P9~xbwaOzHvrovhBsb3izf0OkxIujKdw__',
      itemCount: 3,
    },
    {
      id: '3',
      name: 'Weekend Getaways',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/3024/ac8f/66c627267c6190e21c580af64bd41775?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NSDHO3lffXqVM-9aASMrPdK5Vlky7VnbIkHh92Fcn7KHsLnNNhk5d02Pa-bQoeHtcjquxfVx1VOxU4xYVtPh14UHjWMZdzgjLZ83mvgrUtOJbK5WxYNKMqNH48pMOATogzJMhYHvx0plhDZ1JhN2BstuX1ZzZHeoH-TsWXrVG2JzorL9~H4IiC0WXl27GObCCCfzGUJkfioFLpNxu0gQSm6X-~o8ROfklV3AbBJlZQm-lxHc1egb5N3hVbPZdR2kIbPjGRc-9wbiCMoi9xIbpER7EgBQYPY5amcH43dHc-0f7dDS-1kJB6P9~xbwaOzHvrovhBsb3izf0OkxIujKdw__',
      itemCount: 3,
    },
    {
      id: '4',
      name: 'Weekend Getaways',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/3024/ac8f/66c627267c6190e21c580af64bd41775?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NSDHO3lffXqVM-9aASMrPdK5Vlky7VnbIkHh92Fcn7KHsLnNNhk5d02Pa-bQoeHtcjquxfVx1VOxU4xYVtPh14UHjWMZdzgjLZ83mvgrUtOJbK5WxYNKMqNH48pMOATogzJMhYHvx0plhDZ1JhN2BstuX1ZzZHeoH-TsWXrVG2JzorL9~H4IiC0WXl27GObCCCfzGUJkfioFLpNxu0gQSm6X-~o8ROfklV3AbBJlZQm-lxHc1egb5N3hVbPZdR2kIbPjGRc-9wbiCMoi9xIbpER7EgBQYPY5amcH43dHc-0f7dDS-1kJB6P9~xbwaOzHvrovhBsb3izf0OkxIujKdw__',
      itemCount: 3,
    },
    // Add more folders as needed
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6 flex items-center justify-between">
        <Link
          href={'/guest/wishlist'}
          className="mb-3 flex cursor-pointer items-center text-black"
        >
          <ArrowLeft size={20} />
          <span className="ml-2 text-[16px] text-lg font-medium text-[#221E1F]">
            Your Category
          </span>
        </Link>
        <Button variant="outline">Create New List</Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {folders.map((folder) => (
          <Link href={`/guest/wishlist/custom/${folder.id}`} key={folder.id}>
            <Card className="relative flex p-1 transition-shadow hover:shadow-lg">
              <div className="relative w-3/12">
                <Image
                  src={folder.imageUrl}
                  alt={folder.name}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="p-4">
                  <h2 className="text-[18px] text-lg font-medium">
                    {folder.name}
                  </h2>
                  <p className="text-gray-600">{folder.itemCount} items</p>
                </div>
                <div className="absolute right-3">
                  <ArrowRight size={24} />
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
