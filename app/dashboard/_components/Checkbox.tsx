'use client';
import React, { useState } from 'react';
import '@/dashboard/_styles/components/_checkbox.scss';

interface CheckboxProps {
  checked?: boolean;
  label?: string;
  onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const [checked, setChecked] = React.useState<boolean>(props.checked ?? false);
  // Add your component logic here

  return (
    // Add your JSX code here
    <label className="checkbox-wrapper">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          if (props.onChange) {
            props.onChange(event.target.checked);
          }
        }}
      />
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="16"
          height="16"
          rx="3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={checked ? '#5E47EB' : 'white'}
          stroke="#5E47EB"
        />
        {checked && (
          <g clipPath="url(#clip0_877_15886)">
            <path
              d="M3.6875 9.02656L5.49856 11.355C5.55967 11.4344 5.63798 11.499 5.7276 11.5438C5.81722 11.5886 5.91582 11.6126 6.01601 11.6138C6.11458 11.615 6.21217 11.5941 6.30169 11.5528C6.39119 11.5115 6.47037 11.4507 6.53346 11.3749L12.3116 4.38281"
              stroke="white"
              strokeWidth="1.14"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        )}
        <defs>
          <clipPath id="clip0_877_15886">
            <rect
              width="10"
              height="10"
              fill="white"
              transform="translate(3 3)"
            />
          </clipPath>
        </defs>
      </svg>

      <span>{props.label}</span>
    </label>
  );
};

export default Checkbox;
