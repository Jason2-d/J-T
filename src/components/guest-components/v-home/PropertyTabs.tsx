'use client';
import React, { useState, useRef, useEffect } from 'react';
import { 
  LayoutGrid, 
  Building2, 
  Building, 
  Home, 
  Square, 
  Layers, 
  Palmtree, 
  Umbrella,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Define types for tab and props
interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface PropertyTabsProps {
  onTabChange?: (tab: string) => void;
  initialTab?: string;
  customTabs?: Tab[] | null;
}

const PropertyTabs: React.FC<PropertyTabsProps> = ({ 
  onTabChange = (tab: string) => {}, 
  initialTab = 'All',
  customTabs = null
}) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(true);

  // Default tabs configuration
  const defaultTabs: Tab[] = [
    { id: 'All', label: 'All', icon: <LayoutGrid size={20} /> },
    { id: 'Apartments', label: 'Apartments', icon: <Building2 size={20} /> },
    { id: 'Townhouse', label: 'Townhouse', icon: <Building size={20} /> },
    { id: 'Villas', label: 'Villas', icon: <Home size={20} /> },
    { id: 'Studio', label: 'Studio', icon: <Square size={20} /> },
    { id: 'Terraces', label: 'Terraces', icon: <Layers size={20} /> },
    { id: 'BeachFront', label: 'Beach Front', icon: <Palmtree size={20} /> },
    { id: 'Resort', label: 'Resort', icon: <Umbrella size={20} /> }
  ];

  const tabs = customTabs || defaultTabs;

  // Handle window resize to detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Check scroll position to show/hide arrows
  useEffect(() => {
    const checkScrollPosition = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5); // 5px buffer
      }
    };

    const container = scrollContainerRef.current;
    if (container && isMobile) {
      container.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition(); // Initial check
      
      return () => {
        container.removeEventListener('scroll', checkScrollPosition);
      };
    }
  }, [isMobile]);

  // Function to handle tab click
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange(tabId);
    
    // If on mobile, scroll the selected tab into view
    if (isMobile && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const tabElement = container.querySelector(`[data-tab-id="${tabId}"]`);
      
      if (tabElement) {
        const containerWidth = container.offsetWidth;
        const tabWidth = (tabElement as HTMLElement).offsetWidth;
        const tabLeft = (tabElement as HTMLElement).offsetLeft;
        
        container.scrollTo({
          left: tabLeft - (containerWidth / 2) + (tabWidth / 2),
          behavior: 'smooth'
        });
      }
    }
  };

  // Carousel navigation functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  // Individual tab item component
  const TabItem: React.FC<{ tab: Tab }> = ({ tab }) => {
    const isActive = activeTab === tab.id;
    
    return (
      <button
        data-tab-id={tab.id}
        className={`flex flex-col items-center justify-center px-4 py-2 snap-center min-w-[100px] ${
          isActive ? 'text-orange-500' : 'text-gray-500 hover:text-gray-700'
        } transition-colors duration-200`}
        onClick={() => handleTabClick(tab.id)}
      >
        <div className="flex items-center justify-center h-8">
          {tab.icon}
        </div>
        <span className="mt-1 text-sm font-medium">{tab.label}</span>
        <div 
          className={`mt-1 h-0.5 w-full transition-all duration-200 ${
            isActive ? 'bg-orange-500' : 'bg-transparent'
          }`}
        />
      </button>
    );
  };

  return (
    <div className="w-full relative">
      {isMobile && showLeftArrow && (
        <button 
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md text-gray-700 hover:bg-gray-100"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>
      )}
      
      <div 
        ref={scrollContainerRef}
        className={`flex ${
          isMobile 
            ? 'overflow-x-auto snap-x snap-mandatory scrollbar-hide'
            : 'justify-between'
        } w-full py-2 ${isMobile ? 'px-8' : ''}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        {tabs.map((tab) => (
          <TabItem key={tab.id} tab={tab} />
        ))}
      </div>
      
      {isMobile && showRightArrow && (
        <button 
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md text-gray-700 hover:bg-gray-100"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>
      )}
    </div>
  );
};

export default PropertyTabs;