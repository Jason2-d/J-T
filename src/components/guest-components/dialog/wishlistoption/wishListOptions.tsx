'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import MoreOutlined from '../../icons/moreOutlined';
import { Button } from '../../../ui/button';
import { Input } from '../../../ui/input';
import { Trash2 } from 'lucide-react';
import VidBoard from '../../icons/vidboard';

const WishListOptions = () => {
  const [renameDialogOpen, setRenameDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleRenameDialogOpen = () => {
    setDropdownOpen(false);
    setRenameDialogOpen(true);
  };

  const handleRenameDialogClose = () => {
    setRenameDialogOpen(false);
  };

  const handleDeleteDialogOpen = () => {
    setDropdownOpen(false);
    setDeleteDialogOpen(true);
  };

  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false);
  };

  return (
    <div>
      <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="flex w-fit items-center rounded-2xl px-[15px] py-[6px] hover:border-orange-500 hover:bg-transparent hover:text-orange-500"
          >
            <MoreOutlined />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="flex h-36 w-64 flex-col justify-center gap-4 rounded-[30px] hover:bg-white"
        >
          <DropdownMenuItem
            className="flex cursor-pointer items-center gap-2 focus:bg-transparent"
            onClick={handleRenameDialogOpen}
          >
            <div className="rounded-lg bg-gray-100 p-2">
              <VidBoard />
            </div>
            <p className="ml-2 text-[16px] font-medium text-[221E1F]">
              Rename Category
            </p>
          </DropdownMenuItem>

          <DropdownMenuItem
            className="flex cursor-pointer items-center gap-2 focus:bg-transparent"
            onClick={handleDeleteDialogOpen}
          >
            <div className="rounded-lg bg-gray-100 p-2">
              <Trash2 color="#FF3333" />
            </div>
            <p className="ml-2 text-[16px] font-medium text-[#FF3333]">
              Delete Category
            </p>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Rename Dialog */}
      <Dialog open={renameDialogOpen} onOpenChange={handleRenameDialogClose}>
        <DialogContent className="h-64 max-w-md !rounded-[30px] pt-14 [&>button]:hidden">
          <div className="mx-auto flex w-[305px] flex-col space-y-1">
            <DialogHeader>
              <DialogTitle className="text-sm text-gray-400">
                Rename Category
              </DialogTitle>
            </DialogHeader>
            <Input
              className="border-orange-500 shadow-none"
              defaultValue="Lagos visit"
            />
            <p className="text-xs text-gray-400">8/100 character</p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button className="w-full bg-transparent py-6 font-medium text-[#EF5E17] ring-1 ring-[#EF5E17] hover:bg-transparent">
                Cancel
              </Button>
            </DialogClose>
            <Button className="w-full bg-orange-600 py-6 font-medium hover:bg-orange-600">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={handleDeleteDialogClose}>
        <DialogContent className="h-[462px] max-w-2xl !rounded-[30px] pb-14 [&>button]:hidden">
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
          <div className="mx-auto flex w-full max-w-[400px] flex-col items-center justify-center gap-10">
            <div className="h-36 w-36">
              <Image
                src="/images/cautionImg.svg"
                alt="Delete Warning"
                width={500}
                height={500}
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-center text-2xl font-bold text-[#EF5E17]">
                Delete Category?
              </h3>
              <p className="text-center text-base font-medium text-[#221E1F]">
                Are you sure you want to delete this category? deleting it will
                loose all saved listing in this category.
              </p>
            </div>

            <DialogFooter className="mx-auto flex w-full max-w-96 gap-5">
              <DialogClose asChild>
                <Button className="w-full bg-transparent py-6 font-medium text-[#EF5E17] ring-1 ring-[#EF5E17] hover:bg-transparent">
                  No, Cancel
                </Button>
              </DialogClose>
              <Button className="w-full bg-red-600 py-6 font-medium text-white hover:bg-red-600">
                Yes, Delete
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WishListOptions;
