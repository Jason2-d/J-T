import React from "react";

const MoreOutlined = ({className = "" }) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    >
      <circle cx="5" cy="12" r="4" />
      <circle cx="20" cy="12" r="4" />
      <circle cx="35" cy="12" r="4" />
    </svg>
  );
};

export default MoreOutlined;
