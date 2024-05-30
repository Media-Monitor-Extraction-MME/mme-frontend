'use client';
import React, { useState } from 'react';
import '@/dashboard/_styles/components/_customDropdown.scss';
import { FaChevronUp } from 'react-icons/fa';

interface Option {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  options: Option[];
  onSelect?: (value: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  onSelect
}) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    if (onSelect) onSelect(option.value);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown">
      <div
        className="custom-dropdown__selected-option"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? selectedOption.label : options[0].label}
        {isOpen ? (
          <FaChevronUp />
        ) : (
          <FaChevronUp style={{ transform: 'rotate(180deg)' }} />
        )}
      </div>
      {isOpen && (
        <ul className="custom-dropdown__option-list">
          {options.map((option) => (
            <li key={option.value} onClick={() => handleOptionClick(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
