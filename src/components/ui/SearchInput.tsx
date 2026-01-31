import { Search } from 'lucide-react';
import { InputHTMLAttributes } from 'react';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function SearchInput({ className = '', ...props }: SearchInputProps) {
  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A3AED0]" strokeWidth={2.5} />
      <input
        type="search"
        className="
          w-full h-[46px] pl-11 pr-4
          bg-[#F4F7FE] rounded-[10px]
          text-[14px] text-[#2B3674] placeholder:text-[#A3AED0]
          border-none outline-none
          focus:ring-2 focus:ring-[#5D5FEF]/20
          transition-all duration-150
        "
        placeholder="Search"
        {...props}
      />
    </div>
  );
}
