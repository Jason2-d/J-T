import React from 'react';
import { cn } from "@/lib/utils";
import { 
  Building, 
  Home, 
  Hotel, 
  Palmtree, 
  Settings, 
  GanttChartSquare, 
  Castle,
  Snowflake
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type PropertyTypeOption = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

const PropertyListings = ({ type }: { type: string }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">{type} Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="border rounded-lg overflow-hidden shadow-sm">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-4">
              <h3 className="font-medium">{type} Property {item}</h3>
              <p className="text-gray-600 text-sm mt-1">3 beds • 2 baths • 1,500 sqft</p>
              <p className="font-bold mt-2">$1,250,000</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const HomeTab = () => {
  const [activeTab, setActiveTab] = React.useState<string>("all");
  
  const propertyTypes: PropertyTypeOption[] = [
    {
      id: "all",
      label: "All",
      icon: <GanttChartSquare className="h-5 w-5" />
    },
    {
      id: "apartments",
      label: "Apartments",
      icon: <Building className="h-5 w-5" />
    },
    {
      id: "townhouse",
      label: "Townhouse",
      icon: <Home className="h-5 w-5" />
    },
    {
      id: "villas",
      label: "Villas",
      icon: <Castle className="h-5 w-5" />
    },
    {
      id: "studio",
      label: "Studio",
      icon: <Home className="h-5 w-5 transform scale-90" />
    },
    {
      id: "terraces",
      label: "Terraces",
      icon: <Building className="h-5 w-5 transform scale-90" />
    },
    {
      id: "beachfront",
      label: "Beach Front",
      icon: <Snowflake className="h-5 w-5" />
    },
    {
      id: "resort",
      label: "Resort",
      icon: <Hotel className="h-5 w-5" />
    }
  ];

  return (
    <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
      <div className="w-full flex items-center justify-between p-4 border-b">
        <TabsList className="flex h-auto bg-transparent p-0 overflow-x-auto scrollbar-hide">
          {propertyTypes.map((type) => (
            <TabsTrigger
              key={type.id}
              value={type.id}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-full data-[state=active]:shadow-none",
                "border border-transparent transition-all",
                "data-[state=active]:bg-transparent data-[state=active]:text-orange-500",
                "data-[state=active]:border-b-2 data-[state=active]:border-b-orange-500",
                "data-[state=inactive]:text-gray-700 data-[state=inactive]:hover:bg-gray-100"
              )}
            >
              {type.icon}
              <span className="text-sm font-medium">{type.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        
        <div className="ml-4 shrink-0">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-2 rounded-full px-4 py-2 border border-gray-300"
          >
            <Settings className="h-4 w-4" />
            <span className="text-sm font-medium">Filter</span>
          </Button>
        </div>
      </div>
      

      {/* Tab content sections */}
      {propertyTypes.map((type) => (
        <TabsContent key={type.id} value={type.id} className="mt-0">
          <PropertyListings type={type.label} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default HomeTab;
