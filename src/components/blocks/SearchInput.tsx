import React, { useState } from 'react';
import { SearchIcon } from '../ui/Icons';

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Search',
  value: controlledValue,
  onChange,
}) => {
  const [internalValue, setInternalValue] = useState('');
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <SearchIcon className="w-4 h-4 text-grey-600" />
      </div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full h-[46px] bg-grey-300 rounded-[10px] pl-11 pr-4 text-sm font-medium text-dark-grey-900 placeholder:text-grey-600 outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-30 transition-all"
      />
    </div>
  );
};

export default SearchInput;
