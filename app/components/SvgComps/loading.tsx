import React from 'react';

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48px"
      height="48px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g>
        <circle cx="60" cy="50" r="4" fill="#7cb9e8">
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="0.9900990099009901s"
            values="95;35"
            keyTimes="0;1"
            begin="-0.6767000000000001s"
          ></animate>
          <animate
            attributeName="fill-opacity"
            repeatCount="indefinite"
            dur="0.9900990099009901s"
            values="0;1;1"
            keyTimes="0;0.2;1"
            begin="-0.6767000000000001s"
          ></animate>
        </circle>
        <circle cx="60" cy="50" r="4" fill="#7cb9e8">
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="0.9900990099009901s"
            values="95;35"
            keyTimes="0;1"
            begin="-0.33330000000000004s"
          ></animate>
          <animate
            attributeName="fill-opacity"
            repeatCount="indefinite"
            dur="0.9900990099009901s"
            values="0;1;1"
            keyTimes="0;0.2;1"
            begin="-0.33330000000000004s"
          ></animate>
        </circle>
        <circle cx="60" cy="50" r="4" fill="#7cb9e8">
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="0.9900990099009901s"
            values="95;35"
            keyTimes="0;1"
            begin="0s"
          ></animate>
          <animate
            attributeName="fill-opacity"
            repeatCount="indefinite"
            dur="0.9900990099009901s"
            values="0;1;1"
            keyTimes="0;0.2;1"
            begin="0s"
          ></animate>
        </circle>
      </g>
      <g transform="translate(-15 0)">
        <path
          d="M50 50L20 50A30 30 0 0 0 80 50Z"
          fill="#1e88e5"
          transform="rotate(90 50 50)"
        ></path>
        <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#1e88e5">
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="0.9900990099009901s"
            values="0 50 50;45 50 50;0 50 50"
            keyTimes="0;0.5;1"
          ></animateTransform>
        </path>
        <path d="M50 50L20 50A30 30 0 0 1 80 50Z" fill="#1e88e5">
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="0.9900990099009901s"
            values="0 50 50;-45 50 50;0 50 50"
            keyTimes="0;0.5;1"
          ></animateTransform>
        </path>
      </g>
    </svg>
  );
}

export default Icon;
