import { Building, Home, HomeIcon, Hotel, Landmark, Layout, LocateIcon, Map, MapPin, MoreHorizontal, SearchIcon } from 'lucide-react'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const page = () => {
  return (
    <div className="text-white font-poppins">

    <section className='md:relative w-full h-[180px] md:h-[300px] lg:h-[400px] flex items-center justify-center text-white'>
    {/* Background Images */}
    <div className="absolute inset-0 flex">
      {/* Left Image */}
      <div
        className="w-1/2 h-[220px] object-fill bg-cover bg-center"
        style={{ backgroundImage: "url('/images/guest-img/left-image.png')" }} // Replace with actual image path
      ></div>

      {/* Right Image */}
      <div
        className="w-1/2 h-[220px] object-fill bg-cover bg-center"
        style={{ backgroundImage: "url('/images/guest-img/right-image.jpg')" }} // Replace with actual image path
      ></div>
    </div>

    {/* Gradient Overlay */}
    <div className="absolute h-[220px] inset-0 bg-gradient-to-r from-black/70 via-black to-black/70"></div>

    {/* Content */}
    <div className="relative text-center space-y-2">
      <h2 className="text-3xl font-bold text-orange-500">5% Off</h2>
      <p className="text-sm">Book up to 4 nights and enjoy 5% off</p>
      <p className="text-xs flex items-center justify-center gap-2 mt-2">
        <MapPin className='h-4 w-4'/> Lagos, Nigeria
      </p>
    <div className="mt-4 flex items-center justify-center px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white gap-x-2">
    <SearchIcon className="h-5 w-5 text-black" />
        <input
            type="text"
            placeholder="Start your search"
        />        
    </div>
    </div>
    </section>

    <section>
        <div>
    <Tabs defaultValue="tab">
      <TabsList className="flex w-fit h-full ">
        <TabsTrigger value="all" className='flex-col'>
            <MoreHorizontal />
            <p>All</p>
            </TabsTrigger>
        <TabsTrigger value="apartment" className='flex-col'>
            <Home />
            <p>Apartment</p>
            </TabsTrigger>
        <TabsTrigger value="townhouse" className='flex-col'>
            <Landmark />
            <p>Townhouse</p>
            </TabsTrigger>
        <TabsTrigger value="townhouse" className='flex-col'>
            <Hotel />
            <p>Villas</p>
            </TabsTrigger>
        <TabsTrigger value="townhouse" className='flex-col'>
            <Layout />
            <p>Studio</p>
            </TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="apartment">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="townhouse">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
        </div>
    </section>
  </div>
  )
}

export default page
