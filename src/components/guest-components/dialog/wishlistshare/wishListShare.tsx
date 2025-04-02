'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DialogTitle } from '@radix-ui/react-dialog';
import { Share2Icon, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';

const WishListShare = () => {
  const [shareDialogOpen, setShareDialogOpen] = useState(false);

  const handleShareDialogOpen = () => {
    setShareDialogOpen(true);
  };

  const handleShareDialogClose = () => {
    setShareDialogOpen(false);
  };

  return (
    <div>
      <div onClick={handleShareDialogOpen}>
        <Button
          className="flex items-center rounded-2xl px-[13px] py-[6px] text-[14px] font-normal text-[#666666] hover:border-orange-500 hover:bg-transparent hover:text-orange-500"
          variant="outline"
        >
          <Share2Icon />
          share
        </Button>
      </div>

      <Dialog open={shareDialogOpen} onOpenChange={handleShareDialogClose}>
        <DialogContent className="max-w-md !rounded-[30px] p-6 [&>button]:hidden">
          <DialogHeader className="flex flex-row items-center justify-between">
            <DialogTitle className="text-xl font-medium text-[#221E1F]">
              Share this place
            </DialogTitle>
            <div>
              <button
                onClick={handleShareDialogClose}
                className="flex h-6 w-6 items-center justify-center rounded-full ring-1 ring-black"
              >
                <X
                  className="h-[14px] w-[14px] text-[#222222]"
                  strokeWidth={4}
                />
              </button>
            </div>
          </DialogHeader>

          <div className="mb-5 flex items-center gap-3">
            <img
              src="/images/imageOne.png"
              alt="Apartment"
              className="h-16 w-16 rounded-lg object-cover"
            />
            <div>
              <h3 className="text-[16px] font-medium text-[#221E1F]">
                3 Bedroom duplex luxury Apartment
              </h3>
              <p className="text-sm font-normal text-gray-500">
                Ages 13 or above
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <button className="flex w-full items-center justify-center gap-3 rounded-lg border px-6 py-3">
              <img src="/images/copy.png" alt="" />
              <span className="text-[16px] font-medium text-[#221E1F]">
                {' '}
                Copy Link
              </span>
            </button>

            <button className="flex w-full items-center justify-center gap-3 rounded-lg border px-6 py-3">
              <img src="/images/logos_whatsapp-icon.png" alt="" />
              <span className="text-[16px] font-medium text-[#221E1F]">
                Whatsapp
              </span>
            </button>

            <button className="flex w-full items-center justify-center gap-3 rounded-lg border px-6 py-3">
              <img src="/images/GroupX.png" alt="" />
              <span className="text-[16px] font-medium text-[#221E1F]">
                Twitter
              </span>
            </button>

            <button className="flex w-full items-center justify-center gap-3 rounded-lg border px-6 py-3">
              <img src="/images/logos_facebook.png" alt="" />
              <span className="text-[16px] font-medium text-[#221E1F]">
                Facebook
              </span>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WishListShare;
