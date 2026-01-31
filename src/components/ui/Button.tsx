import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-bold rounded-[12px] transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary: 'bg-[#5D5FEF] hover:bg-[#4B4DD9] active:bg-[#3D3FB8] text-white',
    secondary: 'bg-[#F4F7FE] hover:bg-[#E9EDF7] active:bg-[#E0E5F2] text-[#2B3674]',
    ghost: 'hover:bg-[#F4F7FE] active:bg-[#E9EDF7] text-[#A3AED0]',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-[12px] leading-[18px]',
    md: 'px-6 py-3 text-[14px] leading-[24px]',
    lg: 'px-8 py-4 text-[16px] leading-[24px]',
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
