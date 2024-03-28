import { RiCalculatorLine } from '@remixicon/react';
import { Select, SelectItem } from '@tremor/react';
import { useEffect, useState } from 'react';

interface SelectComponentProps {
  options: string[];
  disabled?: boolean;
  onValueChange?: (value: string) => void;
  placeholder: string;
}

export function SelectComponent({
  options,
  disabled = false,
  placeholder,
  onValueChange
}: SelectComponentProps) {
  const [value, setValue] = useState('');
  useEffect(() => {
    if (onValueChange) {
      onValueChange(value);
    }
  }, [value, onValueChange]);
  return (
    <div className="mx-auto max-w-xs">
      <Select
        id="distance"
        name="distance"
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onValueChange={setValue}
        className="mt-2"
      >
        {options.map((option) => (
          <SelectItem key={option} value={option} icon={RiCalculatorLine}>
            {option}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
