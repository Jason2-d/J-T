"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// Define the form data type
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  marketingExperience: string;
  websiteSocial?: string;
  address: string;
};

export default function AffiliateForm() {
  // State to control dialog visibility
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      marketingExperience: "",
      websiteSocial: "",
      address: "",
    },
  });

  // Handle form submission
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form submitted:", data);
    // Open the dialog on successful submission
    setIsDialogOpen(true);
  };

  // Handle closing the dialog (optional, if you want to ensure dialog closes before navigation)
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Header with Back Arrow */}
        <div className="flex items-center mb-6">
          <Link href="/">
            <ArrowLeft className="w-6 h-6 text-gray-600 mr-2" />
          </Link>
          <h1 className="text-xl font-semibold text-gray-800">Become an affiliate</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* First Name */}
          <div>
            <Label htmlFor="firstName" className="text-gray-700">
              First Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="firstName"
              placeholder="Cornell"
              className={`mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${
                errors.firstName ? "border-red-500" : ""
              }`}
              {...register("firstName", { required: "First name is required" })}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <Label htmlFor="lastName" className="text-gray-700">
              Last Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="lastName"
              placeholder="Emmie"
              className={`mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${
                errors.lastName ? "border-red-500" : ""
              }`}
              {...register("lastName", { required: "Last name is required" })}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <Label htmlFor="email" className="text-gray-700">
              Email address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="francesco.Armstrong3@hotmail.com"
              className={`mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : ""
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <Label htmlFor="phone" className="text-gray-700">
              Phone number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="255-702-5095"
              className={`mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${
                errors.phone ? "border-red-500" : ""
              }`}
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\d{3}-\d{3}-\d{4}$/,
                  message: "Phone number must be in the format 123-456-7890",
                },
              })}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Marketing Experience */}
          <div>
            <Label htmlFor="marketingExperience" className="text-gray-700">
              Marketing experience <span className="text-red-500">*</span>
            </Label>
            <Input
              id="marketingExperience"
              placeholder="Years of experience"
              className={`mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${
                errors.marketingExperience ? "border-red-500" : ""
              }`}
              {...register("marketingExperience", {
                required: "Marketing experience is required",
              })}
            />
            {errors.marketingExperience && (
              <p className="text-red-500 text-sm mt-1">{errors.marketingExperience.message}</p>
            )}
          </div>

          {/* Website & Social Handle */}
          <div>
            <Label htmlFor="websiteSocial" className="text-gray-700">
              Website & Social handle
            </Label>
            <Input
              id="websiteSocial"
              placeholder="Your website or social handle"
              className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              {...register("websiteSocial")}
            />
          </div>

          {/* Address */}
          <div>
            <Label htmlFor="address" className="text-gray-700">
              Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="address"
              placeholder="Your address"
              className={`mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${
                errors.address ? "border-red-500" : ""
              }`}
              {...register("address", { required: "Address is required" })}
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
            )}
          </div>

          {/* Sign Up Button */}
          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md"
          >
            SIGN UP
          </Button>
        </form>
      </div>

      {/* Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent
          className="sm:max-w-[425px] text-center space-y-4"
          hideCloseButton={true} // Hide the close button
        >
          <DialogHeader>
            <div className="flex justify-center mb-4 items-center text-center">
              <div className="bg-pink-100 rounded-full h-20 w-20 flex items-center justify-center">
                <img src="/images/Hands005.png" alt="hands" />
              </div>
            </div>
            <DialogTitle className="text-2xl font-semibold text-[#EF5E17] items-center justify-center text-center">
              Thank you!
            </DialogTitle>
            <DialogDescription className="text-[#221E1F] px-10">
              Your request has been sent, the host will be in touch.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="w-fit justify-center mx-auto">
            <Link href={`/guest/home`} passHref>
              <Button
                onClick={handleCloseDialog} // Close the dialog before navigation
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md"
              >
                CLOSE
              </Button>
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}