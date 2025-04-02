'use client';

import React, { useState } from 'react';
import {
  Bell,
  Settings,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  List,
  Calendar,
  MessageSquare,
  Users,
  DollarSign,
  AnchorIcon,
  UserIcon,
  HouseIcon,
  DollarSignIcon,
  X,
  ChevronRightIcon,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeRole, setActiveRole] = useState<'guest' | 'host'>('guest');
  const pathname = usePathname();

  const navItems = [
    { name: 'V Home', icon: LayoutDashboard, path: '/guest/home', count: null },
    { name: 'Wishlist', icon: List, path: '/guest/wishlist', count: null },
    { name: 'My Bookings', icon: Calendar, path: '/guest/bookings', count: 3 },
    {
      name: 'Messages',
      icon: MessageSquare,
      path: '/guest/messages',
      count: 3,
    },
    {
      name: 'Earnings',
      icon: DollarSignIcon,
      path: '/guest/earnings',
      count: null,
    },
  ];

  return (
    <div className="min-h-screen overflow-y-auto bg-gray-100/50">
      {/* Top Navigation */}
      <nav className="fixed top-0 z-50 h-16 w-full border-b bg-dark">
        <div className="flex h-full items-center justify-between px-4">
          <div className="hidden md:flex items-center gap-2">
            <span className="text-xl font-semibold text-orange-500">V</span>
            <span className="font-semibold text-white">HOSPITALITY</span>
          </div>

          {/* Mobile-Nav-View */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Menu Sheet */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="md:hidden">
                  <img
                    src="/images/grid.png"
                    alt="Menu"
                    className="h-7 w-7"
                  />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-full h-full max-w-none border-0 bg-[#FFFCF9]">
                {/* Add SheetHeader and SheetTitle to fix the accessibility error */}
                <SheetHeader className="sr-only">
                  <SheetTitle>Navigation Menu</SheetTitle>
                </SheetHeader>
                
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="p-4 border-b flex items-center justify-between">
                    <SheetTrigger asChild >
                      <button className='border-[#FF3333] border-2 rounded-lg text-[#FF3333]'><X size={20} /></button>
                    </SheetTrigger>
                    <p className="font-semibold text-center flex-1">More</p>
                    <div className="w-5"></div> {/* Empty div for balance */}
                  </div>
                  
                  {/* User Profile */}
                  <div className="p-4 flex items-center gap-3 mb-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>AA</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium">Abdul Asmau</p>
                      <p className="text-xs text-gray-500">Switch account</p>
                    </div>
                    <button className="text-orange-500">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>  
                  
                  {/* Role Toggles */}
                  <div className="flex justify-center items-center gap-4 rounded-2xl bg-[#ffffff] p-1 mx-4">
            <div onClick={() => setActiveRole('guest')}
                      className={cn(
                        " transition-colors  flex items-center gap-2 rounded-xl p-3 flex-1 justify-center",
                        activeRole === 'guest' 
                          ? "bg-orange-500 text-white" 
                          : "bg-white text-black"
                      )}>
              <UserIcon size={15} />
              <span>Guest</span>
              <span className={cn(
                        "flex h-5 w-5 items-center justify-center rounded-full",
                        activeRole === 'guest' 
                          ? "bg-white text-orange-500" 
                          : "bg-orange-500 text-white"
                      )} >
                3
              </span>
            </div>
            <div onClick={() => setActiveRole('host')}
                      className={cn(
                        "p-3 flex-1 transition-colors flex items-center gap-2 rounded-xl bg-orange-500 text-white justify-center",
                        activeRole === 'host' 
                          ? "bg-orange-500 text-white" 
                          : "bg-white text-black"
                      )} >
              <HouseIcon size={15} />
              <span>Host</span>
              <span className={cn(
                        "flex h-5 w-5 items-center justify-center rounded-full",
                        activeRole === 'host' 
                          ? "bg-white text-orange-500" 
                          : "bg-orange-500 text-white"
                      )} >
                3
              </span>
            </div>
          </div>
                  
                  {/* Navigation Items */}
                  <div className="mt-6 px-4 space-y-4 hidden">
                    {/* Co-Host */}
                    <Link href="/co-host" className="flex items-center justify-between p-4 rounded-lg bg-[#EF5E1726] mb-2">
                      <div className=" items-center gap-3">
                        <Users size={20} />
                        <span>Co-Host</span>
                      </div>
                      <ChevronRightIcon size={16} />
                    </Link>
                    
                    {/* Earnings */}
                    <Link href="/guest/earnings" className="flex items-center justify-between p-4 rounded-lg bg-[#EF5E1726] mb-2">
                      <div className=" items-center gap-3">
                        <DollarSign size={20} />
                        <span>Earnings</span>
                      </div>
                      <ChevronRightIcon size={16} />
                    </Link>
                  </div>
                  
                  {/* Affiliate Banner */}
                  <div className="mx-4 mb-6 mt-10">
                  <div className="mt-6 rounded-xl bg-[#221E1F] p-4 text-white relative">
                <h3 className="mb-1 font-bold text-2xl text-[#F99C1C]">Earn <br /> While You Share</h3>
                <p className="mb-3 text-lg text-gray-300">
                  Earn when friends book through your link.
                </p>
                <img src="/images/cashHand.png" alt="hand" className='absolute right-6 -top-7 '/>
                <Link href={'src/components/aside-pages'} passHref>
                <button className="w-full rounded-lg bg-[#EF5E17] px-4 py-2 text-lg text-white">
                  Become an affiliate
                </button>
                </Link>
              </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <Avatar
              className="h-8 w-8 rounded-lg transition-all duration-300"
            >
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>AA</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold text-white">Abdul Asmau</p>
              <p className="text-xs font-semibold text-orange-500">Guest</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4 rounded-2xl bg-white p-1">
            <div className="flex items-center gap-2 rounded-xl px-3 py-2">
              <UserIcon size={15} />
              <span className="text-sm">Guest</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
                3
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-orange-500 px-3 py-2 text-white">
              <HouseIcon size={15} />
              <span className="text-sm">Host</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs text-orange-500">
                3
              </span>
            </div>
          </div>
          <div className="flex gap-3">
            <Bell className="h-5 w-5 text-white" />
            <Link href={'/host/settings'}>
              <Settings className="h-5 w-5 text-white" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Sidebar and Main Content */}
      <div className="flex h-screen pt-20">
        {/* Sidebar - Hidden on mobile, shown on large screens */}
        <aside
          className={cn(
            'ml-4 hidden flex-col rounded-2xl bg-[rgb(249,156,28,0.2)] transition-all duration-300 md:flex',
            collapsed ? 'md:w-20 lg:w-20' : 'md:w-52 lg:w-56'
          )}
        >
          <div className={cn(collapsed ? 'p-3' : 'p-4', 'flex-1')}>
            <div
              className={cn(
                'mb-6 flex items-center gap-3',
                collapsed && 'justify-center'
              )}
            >
              <Avatar
                className={cn(
                  'transition-all duration-300',
                  collapsed && 'h-10 w-10'
                )}
              >
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AA</AvatarFallback>
              </Avatar>
              {!collapsed && (
                <div>
                  <h3 className="font-medium">Abdul Asmau</h3>
                  <p className="text-sm text-gray-500">Switch account</p>
                </div>
              )}
            </div>

            <TooltipProvider>
              <nav className="space-y-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.path;

                  return (
                    <Tooltip key={item.name} delayDuration={0}>
                      <TooltipTrigger asChild>
                        <Link href={item.path}>
                          <div
                            className={cn(
                              'relative flex cursor-pointer items-center gap-3 rounded-lg p-3',
                              isActive
                                ? 'bg-primary/15 text-orange-500'
                                : 'hover:bg-gray-50',
                              collapsed ? 'justify-center px-2' : 'px-3'
                            )}
                          >
                            <item.icon
                              className={cn(
                                'transition-all duration-300',
                                collapsed ? 'h-5 w-5' : 'h-5 w-5'
                              )}
                            />
                            {!collapsed && (
                              <div className="flex flex-1 items-center justify-between">
                                <span>{item.name}</span>
                                {item.count && (
                                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
                                    {item.count}
                                  </span>
                                )}
                              </div>
                            )}
                            {collapsed && item.count && (
                              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
                                {item.count}
                              </span>
                            )}
                          </div>
                        </Link>
                      </TooltipTrigger>
                      {collapsed && (
                        <TooltipContent side="right">
                          <p>{item.name}</p>
                        </TooltipContent>
                      )}
                    </Tooltip>
                  );
                })}
              </nav>
            </TooltipProvider>

            {!collapsed ? (
              <div className="mt-6 rounded-xl bg-gray-900 p-4 text-white">
                <h3 className="mb-1 font-medium">Earn While You Share</h3>
                <p className="mb-3 text-sm text-gray-300">
                  Earn when friends book through your link.
                </p>
                <button className="w-full rounded-lg bg-orange-500 px-4 py-2 text-sm text-white">
                  Become an affiliate
                </button>
              </div>
            ) : (
              <div className="mt-6 rounded-xl bg-gray-900 p-3 text-white">
                <button className="w-full rounded-lg bg-orange-500 px-1 py-2 text-sm text-white">
                  <AnchorIcon />
                </button>
              </div>
            )}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="flex justify-center rounded-md border-t p-4 hover:bg-gray-100"
            >
              {collapsed ? (
                <ChevronRight className="h-6 w-6" />
              ) : (
                <ChevronLeft className="h-6 w-6" />
              )}
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main
          className={cn(
            'flex-1 transition-all duration-300',
            'lg:ml-0',
            collapsed ? 'lg:ml-0' : 'lg:ml-0'
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;