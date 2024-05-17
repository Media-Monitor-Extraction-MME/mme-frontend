import React from 'react';
import '@/onboarding/_styles/components/_select.scss';

interface SelectProps {
  options: string[];
  selectedOption?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const Select: React.FC<SelectProps> = (props) => {
  return (
    <div className="select-wrapper">
      <select
        data-chosen={
          props.selectedOption === undefined || props.selectedOption === ''
            ? props.placeholder
              ? ''
              : props.options[0].toLowerCase()
            : props.selectedOption?.toLowerCase()
        }
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          event.target.dataset.chosen = event.target.value;
          event.target.blur();
          if (props.onChange) {
            props.onChange(event.target.value);
          }
        }}
      >
        {props.placeholder && (
          <option
            value=""
            disabled
            {...(props.selectedOption === undefined ? { selected: true } : {})}
          >
            {props.placeholder}
          </option>
        )}
        {props.options.map((option, index) => (
          <option
            key={index}
            value={option.toLowerCase()}
            {...(props.selectedOption?.toLowerCase() === option.toLowerCase()
              ? { selected: true }
              : {})}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
