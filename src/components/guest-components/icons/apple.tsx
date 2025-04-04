'use client';

import React from 'react';
import { cn } from '@/lib/utils';

type IconProps = {
  color?: string;
  height?: number;
  width?: number;
  className?: string;
};

const AppleIcon: React.FC<IconProps> = ({
  color = 'currentColor',
  height = 24,
  width = 24,
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      height={height}
      width={width}
      className={cn('inline-block', className)}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M16.1289 12.5305C16.1289 12.6321 15.9766 15.6282 19.2773 17.2024C18.668 19.0813 16.5352 23.2454 14.0469 23.2454C12.625 23.2454 11.8125 22.3313 10.1875 22.3313C8.51172 22.3313 7.59766 23.2454 6.32812 23.2454C3.89062 23.3469 1.55469 18.7766 0.894531 16.8977C0.386719 15.4758 0.183594 14.1047 0.183594 12.7844C0.183594 8.26489 3.17969 6.0813 6.02344 6.03052C7.39453 6.03052 9.12109 6.99536 9.88281 6.99536C10.5938 6.99536 12.5742 5.82739 14.4023 5.97974C16.2812 6.13208 17.7031 6.84302 18.668 8.21411C16.9922 9.28052 16.1289 10.6516 16.1289 12.5305ZM13.2852 4.20239C12.2695 5.37036 11.0508 6.03052 9.73047 5.92896C9.62891 4.55786 10.1367 3.28833 11.0508 2.27271C11.8633 1.35864 13.2852 0.596924 14.5039 0.495361C14.5039 1.05396 14.6562 2.57739 13.2852 4.20239Z"
        fill="white"
      />
    </svg>
  );
};

export default AppleIcon;
