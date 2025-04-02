'use client';

import React from 'react';
import { cn } from '@/lib/utils';

type IconProps = {
  color?: string;
  height?: number;
  width?: number;
  className?: string;
};

const PlayStoreIcon: React.FC<IconProps> = ({ color = 'currentColor', height = 24, width = 24, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      height={height}
      width={width}
      className={cn('inline-block', className)}
    >
     <path xmlns="http://www.w3.org/2000/svg" d="M15.4844 12.804L4.26172 1.53052L18.5312 9.75708L15.4844 12.804ZM1.36719 0.870361L14.3672 13.8704L1.36719 26.8704C0.707031 26.5657 0.25 25.9055 0.25 25.093V2.69849C0.25 1.88599 0.707031 1.22583 1.36719 0.870361ZM22.9492 12.3469C23.9141 13.0579 23.9141 14.7336 23 15.4446L19.9531 17.1711L16.6016 13.8704L19.9531 10.6204L22.9492 12.3469ZM4.26172 26.2102L15.4844 14.9875L18.5312 18.0344L4.26172 26.2102Z" fill="white"/>
    </svg>
  );
};

export default PlayStoreIcon;
