"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CollapseProps {
  title: string;
  content: React.ReactNode;
}

const Collapse: React.FC<CollapseProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full rounded-lg   bg-gray-100 p-4">
      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-[16px] font-semibold text-[#221e1f]">{title}</h2>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-600" />
        )}
      </div>

      {/* Content Section */}
      {isOpen && <div className="mt-[20px] text-black text-sm">{content}</div>}
    </div>
  );
};

export default Collapse;
