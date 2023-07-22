import React from 'react';

function Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 120 120">
      <mask id="viewboxMask">
        <rect width="120" height="120" fill="#fff" rx="0" ry="0"></rect>
      </mask>
      <g mask="url(#viewboxMask)">
        <path fill="#1e88e5" d="M0 0H120V120H0z"></path>
        <g transform="translate(22 68)">
          <rect width="68" height="22" x="4" y="5" fill="#000" rx="5"></rect>
          <rect width="60" height="14" x="8" y="9" fill="#000" rx="2"></rect>
          <path
            fill="#E1E6E8"
            d="M20 17l6-8H14l6 8zm12 0l6-8H26l6 8zm12 0l6-8H38l6 8zm12 0l6-8H50l6 8z"
          ></path>
        </g>
        <g transform="translate(8 20)">
          <rect width="104" height="32" y="12" fill="#000" rx="16"></rect>
          <rect width="10" height="12" x="24" y="22" fill="#F4F4F4" rx="2"></rect>
          <rect width="10" height="12" x="70" y="22" fill="#F4F4F4" rx="2"></rect>
        </g>
      </g>
    </svg>
  );
}

export default Icon;
