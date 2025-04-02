"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AffiliateForm() {
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
        <form className="space-y-4">
          {/* First Name */}
          <div>
            <Label htmlFor="firstName" className="text-gray-700">
              First Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="firstName"
              placeholder="Cornell"
              className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <Label htmlFor="lastName" className="text-gray-700">
              Last Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="lastName"
              placeholder="Emmie"
              className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              required
            />
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
              className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              required
            />
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
              className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          {/* Marketing Experience */}
          <div>
            <Label htmlFor="marketingExperience" className="text-gray-700">
              Marketing experience <span className="text-red-500">*</span>
            </Label>
            <Input
              id="marketingExperience"
              placeholder="Email address"
              className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          {/* Website & Social Handle */}
          <div>
            <Label htmlFor="websiteSocial" className="text-gray-700">
              Website & Social handle
            </Label>
            <Input
              id="websiteSocial"
              placeholder="Email address"
              className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/* Address */}
          <div>
            <Label htmlFor="address" className="text-gray-700">
              Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="address"
              placeholder="Email address"
              className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              required
            />
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
    </div>
  );
}