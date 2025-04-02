import React from "react";

const UserIcon = ({ width = 22, height = 22, stroke = "#666666", opacity = 0.8, className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      className={className}
    >
      <g opacity={opacity}>
        <circle cx="10.9997" cy="5.50004" r="3.66667" stroke={stroke} strokeWidth="1.5" />
        <path
          d="M18.3337 16.0416C18.3337 18.3198 18.3337 20.1666 11.0003 20.1666C3.66699 20.1666 3.66699 18.3198 3.66699 16.0416C3.66699 13.7635 6.95024 11.9166 11.0003 11.9166C15.0504 11.9166 18.3337 13.7635 18.3337 16.0416Z"
          stroke={stroke}
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
};

export default UserIcon;
