import React, { useState } from 'react';
import '@/styles/components/_custom-checkbox.scss';

interface CustomCheckboxProps {
  content: string;
  isChecked?: boolean;
  handleChange?: (isChecked: boolean) => void;
  checkboxIcon?: {
    iconTrue: React.ReactNode;
    iconFalse: React.ReactNode;
  };
}
const CustomCheckbox: React.FC<CustomCheckboxProps> = (props) => {
  const [isChecked, setIsChecked] = useState(props.isChecked || false);

  const handleCheckboxChange = () => {
    if (props.handleChange) {
      props.handleChange(!isChecked);
    }
    setIsChecked(!isChecked);
  };

  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />

      <div className="check-svg">
        {props.checkboxIcon ? (
          <>
            {isChecked ? (
              <>{props.checkboxIcon.iconTrue}</>
            ) : (
              <>{props.checkboxIcon.iconFalse}</>
            )}
          </>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="2.5" y="2.5" width="15" height="15" fill="white" />
            <rect x="2.5" y="2.5" width="15" height="15" stroke="#DDE1E6" />
            {isChecked && (
              <path
                d="M8.58632 11.0611L6.46499 8.93976L5.05078 10.354L8.58632 13.8895L14.9503 7.52554L13.5361 6.11133L8.58632 11.0611Z"
                fill="#003EB2"
              />
            )}
          </svg>
        )}
      </div>

      {props.content}
    </label>
  );
};

export default CustomCheckbox;
