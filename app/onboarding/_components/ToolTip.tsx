import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

interface ToolTipProps {
  content: string;

  // Add any props you need for the ToolTip component
}

const ToolTip: React.FC<ToolTipProps> = () => {
  return (
    <>
      <ReactTooltip className="bg-purlpe" id="tooltip" place="top" />
      <div data-tooltip-id="tooltip" data-tooltip-content="Hello world!">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1155_19681)">
            <path
              d="M11.0002 20.4848C16.2395 20.4848 20.4867 16.2376 20.4867 10.9982C20.4867 5.75898 16.2395 1.51172 11.0002 1.51172C5.76093 1.51172 1.51367 5.75898 1.51367 10.9982C1.51367 16.2376 5.76093 20.4848 11.0002 20.4848Z"
              stroke="#909090"
              stroke-width="1.14"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.81104 15.375H13.1894"
              stroke="#909090"
              stroke-width="1.14"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11 15.3777V10.2695H9.54053"
              stroke="#909090"
              stroke-width="1.14"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.0001 6.98364C10.7986 6.98364 10.6353 6.82028 10.6353 6.61877C10.6353 6.41726 10.7986 6.25391 11.0001 6.25391"
              stroke="#909090"
              stroke-width="1.14"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11 6.98364C11.2015 6.98364 11.3649 6.82028 11.3649 6.61877C11.3649 6.41726 11.2015 6.25391 11 6.25391"
              stroke="#909090"
              stroke-width="1.14"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1155_19681">
              <rect width="22" height="22" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default ToolTip;
