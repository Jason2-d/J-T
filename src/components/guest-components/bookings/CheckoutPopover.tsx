// components/CheckoutPopover.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MoreHorizontal, TriangleAlert, X, XCircle } from "lucide-react";

export default function CheckoutPopover() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCheckOutClick = () => {
    setIsPopoverOpen(false); // Close the popover
    setIsDialogOpen(true); // Open the dialog
  };

  return (
    <div className="flex items-center space-x-2">
      {/* More Button (Trigger) */}
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="px-3 border-[#575757] flex bg-transparent"
          >
            <MoreHorizontal className="h-4 w-4 text-gray-500" />
            <span>More</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-48 p-2 bg-white rounded-lg shadow-lg border-none"
          align="end"
        >
          <div className="flex items-center">
            <Button
              variant="ghost"
              className="h-8 w-8 rounded-xl hover:bg-gray-100 bg-[#f4f4f4]"
              onClick={() => setIsPopoverOpen(false)}
            >
              <XCircle className="h-10 w-10 text-red-500" />
            </Button>
            <Button
              variant="ghost"
              className="flex-1 text-[#ff3333] hover:text-orange-600 hover:bg-orange-50 text-sm"
              onClick={handleCheckOutClick}
            >
              Check Out
            </Button>
          </div>
        </PopoverContent>
      </Popover>

      {/* Dialog for Check Out Confirmation */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className=" max-w-sm md:max-w-[400px] lg:max-w-[500px] rounded-2xl lg:px-20 items-center flex-col justify-center">
          <DialogHeader className="flex flex-col items-center justify-center">
            {/* <TriangleAlert className="h-12 w-12 text-yellow-500 mb-2" /> */}
            <img src="/images/Error.png" alt="Error-Icon" />
            <DialogTitle className="text-2xl font-semibold text-[#ef5e17]">Check Out</DialogTitle>
            <DialogDescription className="text-center text-[#221e1f] text-lg">
              You have 2 nights left, are you sure you want to check out now?
            </DialogDescription>
          <DialogFooter className="flex gap-4 pt-4">
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-100 px-8"
              onClick={() => setIsDialogOpen(false)}
            >
              No, Cancel
            </Button>
            <Button
              variant="default"
              className="bg-orange-500 text-white hover:bg-orange-600"
              onClick={() => {
                setIsDialogOpen(false);
                // Add your check-out logic here
                console.log("Checked out!");
              }}
            >
              Yes! Check Out
            </Button>
          </DialogFooter>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}