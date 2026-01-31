import React from 'react';

interface IconProps {
  className?: string;
  color?: string;
}

export const DashboardIcon: React.FC<IconProps> = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 3H3V10H10V3Z" fill={color} />
    <path d="M21 3H14V10H21V3Z" fill={color} />
    <path d="M21 14H14V21H21V14Z" fill={color} />
    <path d="M10 14H3V21H10V14Z" fill={color} />
  </svg>
);

export const ActivityIcon: React.FC<IconProps> = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.5 18.5L9.5 12.5L13.5 16.5L22 6.92L20.59 5.51L13.5 13.5L9.5 9.5L2 17L3.5 18.5Z" fill={color} />
  </svg>
);

export const LibraryIcon: React.FC<IconProps> = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.87 15.07L10.33 12.56L10.36 12.53C12.1 10.59 13.34 8.36 14.07 6H17V4H10V2H8V4H1V6H12.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8H4.69C5.42 9.63 6.42 11.17 7.67 12.56L2.58 17.58L4 19L9 14L12.11 17.11L12.87 15.07ZM18.5 10H16.5L12 22H14L15.12 19H19.87L21 22H23L18.5 10ZM15.88 17L17.5 12.67L19.12 17H15.88Z" fill={color} />
  </svg>
);

export const SecurityIcon: React.FC<IconProps> = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z" fill={color} />
  </svg>
);

export const CalendarIcon: React.FC<IconProps> = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM20 21H4V8H20V21Z" fill={color} />
  </svg>
);

export const WalletIcon: React.FC<IconProps> = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 7.28V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V16.72C21.59 16.37 22 15.74 22 15V9C22 8.26 21.59 7.63 21 7.28ZM20 9V15H13V9H20ZM5 19V5H19V7H13C11.9 7 11 7.9 11 9V15C11 16.1 11.9 17 13 17H19V19H5Z" fill={color} />
    <circle cx="16" cy="12" r="1.5" fill={color} />
  </svg>
);

export const SettingsIcon: React.FC<IconProps> = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.14 12.94C19.18 12.64 19.2 12.33 19.2 12C19.2 11.68 19.18 11.36 19.13 11.06L21.16 9.48C21.34 9.34 21.39 9.07 21.28 8.87L19.36 5.55C19.24 5.33 18.99 5.26 18.77 5.33L16.38 6.29C15.88 5.91 15.35 5.59 14.76 5.35L14.4 2.81C14.36 2.57 14.16 2.4 13.92 2.4H10.08C9.84 2.4 9.65 2.57 9.61 2.81L9.25 5.35C8.66 5.59 8.12 5.92 7.63 6.29L5.24 5.33C5.02 5.25 4.77 5.33 4.65 5.55L2.74 8.87C2.62 9.08 2.66 9.34 2.86 9.48L4.89 11.06C4.84 11.36 4.8 11.69 4.8 12C4.8 12.31 4.82 12.64 4.87 12.94L2.85 14.52C2.67 14.66 2.62 14.93 2.73 15.13L4.65 18.45C4.77 18.67 5.02 18.74 5.24 18.67L7.63 17.71C8.13 18.09 8.66 18.41 9.25 18.65L9.61 21.19C9.65 21.43 9.84 21.6 10.08 21.6H13.92C14.16 21.6 14.36 21.43 14.39 21.19L14.75 18.65C15.34 18.41 15.88 18.09 16.37 17.71L18.76 18.67C18.98 18.75 19.23 18.67 19.35 18.45L21.27 15.13C21.39 14.91 21.34 14.66 21.15 14.52L19.14 12.94ZM12 15.6C10.02 15.6 8.4 13.98 8.4 12C8.4 10.02 10.02 8.4 12 8.4C13.98 8.4 15.6 10.02 15.6 12C15.6 13.98 13.98 15.6 12 15.6Z" fill={color} />
  </svg>
);

export const LogoutIcon: React.FC<IconProps> = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.09 15.59L11.5 17L16.5 12L11.5 7L10.09 8.41L12.67 11H3V13H12.67L10.09 15.59ZM19 3H5C3.89 3 3 3.9 3 5V9H5V5H19V19H5V15H3V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" fill={color} />
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ className = "w-5 h-5", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill={color} />
  </svg>
);

export const BusIcon: React.FC<IconProps> = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 16C4 16.88 4.39 17.67 5 18.22V20C5 20.55 5.45 21 6 21H7C7.55 21 8 20.55 8 20V19H16V20C16 20.55 16.45 21 17 21H18C18.55 21 19 20.55 19 20V18.22C19.61 17.67 20 16.88 20 16V6C20 2.5 16.42 2 12 2C7.58 2 4 2.5 4 6V16ZM7.5 17C6.67 17 6 16.33 6 15.5C6 14.67 6.67 14 7.5 14C8.33 14 9 14.67 9 15.5C9 16.33 8.33 17 7.5 17ZM16.5 17C15.67 17 15 16.33 15 15.5C15 14.67 15.67 14 16.5 14C17.33 14 18 14.67 18 15.5C18 16.33 17.33 17 16.5 17ZM18 11H6V6H18V11Z" fill={color} />
  </svg>
);

export const ShoppingIcon: React.FC<IconProps> = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.21 9L12.83 2.44C12.64 2.16 12.32 2 12 2C11.68 2 11.36 2.16 11.17 2.45L6.79 9H2C1.45 9 1 9.45 1 10C1 10.09 1.01 10.18 1.04 10.27L3.58 19.54C3.81 20.38 4.58 21 5.5 21H18.5C19.42 21 20.19 20.38 20.43 19.54L22.97 10.27L23 10C23 9.45 22.55 9 22 9H17.21ZM12 4.8L14.8 9H9.2L12 4.8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17Z" fill={color} />
  </svg>
);

export const BarChartIcon: React.FC<IconProps> = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 9.2H8V19H5V9.2ZM10.6 5H13.4V19H10.6V5ZM16.2 13H19V19H16.2V13Z" fill={color} />
  </svg>
);

export const PersonIcon: React.FC<IconProps> = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.5 12C17.88 12 18.99 10.88 18.99 9.5C18.99 8.12 17.88 7 16.5 7C15.12 7 14 8.12 14 9.5C14 10.88 15.12 12 16.5 12ZM9 11C10.66 11 11.99 9.66 11.99 8C11.99 6.34 10.66 5 9 5C7.34 5 6 6.34 6 8C6 9.66 7.34 11 9 11ZM16.5 14C14.67 14 11 14.92 11 16.75V19H22V16.75C22 14.92 18.33 14 16.5 14ZM9 13C6.67 13 2 14.17 2 16.5V19H9V16.75C9 15.9 9.33 14.41 11.37 13.28C10.5 13.1 9.66 13 9 13Z" fill={color} />
  </svg>
);

export const ArrowUpIcon: React.FC<IconProps> = ({ className = "w-4 h-4", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 14L12 9L17 14H7Z" fill={color} />
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className = "w-4 h-4", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 17L15 12L10 7V17Z" fill={color} />
  </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className = "w-4 h-4", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill={color} />
  </svg>
);

export const LocationIcon: React.FC<IconProps> = ({ className = "w-4 h-4", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill={color} />
  </svg>
);

export const SubscriptionIcon: React.FC<IconProps> = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM12 14.5V5.5L18 10L12 14.5Z" fill={color} />
  </svg>
);

export const FingerprintIcon: React.FC<IconProps> = ({ className = "w-12 h-12", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.81 4.47C17.73 4.47 17.65 4.45 17.58 4.41C15.66 3.42 14 3 12 3C10 3 8.34 3.42 6.42 4.41C6.08 4.58 5.66 4.45 5.49 4.11C5.32 3.77 5.45 3.35 5.79 3.18C7.91 2.08 9.78 1.5 12 1.5C14.22 1.5 16.09 2.08 18.21 3.18C18.55 3.35 18.68 3.77 18.51 4.11C18.39 4.33 18.1 4.47 17.81 4.47ZM3.5 9.72C3.4 9.72 3.3 9.7 3.21 9.66C2.87 9.49 2.74 9.07 2.91 8.73C3.66 7.17 4.73 5.97 6.17 5.06C8.91 3.27 12.73 3.21 15.54 4.89C17.05 5.78 18.12 7.01 18.88 8.59C19.05 8.93 18.91 9.35 18.57 9.52C18.23 9.69 17.81 9.55 17.64 9.21C16.99 7.85 16.09 6.79 14.84 6.03C12.48 4.63 9.27 4.68 6.96 6.17C5.73 6.93 4.82 7.94 4.17 9.27C4.05 9.55 3.78 9.72 3.5 9.72ZM9.75 21.79C9.62 21.79 9.49 21.75 9.38 21.68C7.32 20.32 5.92 18.43 5.23 16.11C4.26 12.91 4.84 9.4 6.85 6.7C7.07 6.4 7.49 6.33 7.79 6.56C8.09 6.78 8.16 7.2 7.94 7.5C6.2 9.82 5.72 12.87 6.55 15.58C7.14 17.56 8.32 19.17 10.11 20.38C10.43 20.58 10.52 21.01 10.32 21.33C10.19 21.61 9.97 21.79 9.75 21.79ZM16.25 21.79C16.17 21.79 16.09 21.78 16.02 21.74C14.37 21.08 13.05 20.04 12.04 18.58C10.74 16.71 10.26 14.54 10.65 12.24C10.94 10.52 11.66 9.16 12.93 8.05C13.22 7.79 13.65 7.82 13.91 8.11C14.17 8.4 14.14 8.83 13.85 9.09C12.82 10 12.24 11.11 12 12.54C11.68 14.44 12.08 16.23 13.17 17.79C14 19 15.1 19.86 16.48 20.42C16.81 20.56 16.97 20.93 16.83 21.26C16.73 21.59 16.49 21.79 16.25 21.79ZM12 21.79C11.8 21.79 11.62 21.69 11.5 21.52C10.58 20.12 10.06 18.52 9.99 16.8C9.92 14.96 10.43 13.32 11.48 11.87C12.62 10.3 14.3 9.24 16.16 8.88C16.54 8.8 16.91 9.06 16.99 9.44C17.07 9.82 16.81 10.19 16.43 10.27C14.92 10.56 13.56 11.42 12.64 12.67C11.82 13.83 11.42 15.16 11.48 16.71C11.53 18.15 11.97 19.49 12.75 20.67C12.97 21 12.88 21.43 12.55 21.65C12.38 21.74 12.19 21.79 12 21.79ZM18.42 19.9C18.21 19.9 18.01 19.79 17.89 19.59C17.39 18.71 17.07 17.74 16.91 16.71C16.65 14.93 17 13.18 17.91 11.65C18.11 11.32 18.54 11.21 18.87 11.41C19.2 11.61 19.31 12.04 19.11 12.37C18.36 13.62 18.07 15.05 18.28 16.5C18.41 17.35 18.68 18.14 19.08 18.86C19.28 19.19 19.17 19.63 18.84 19.83C18.7 19.88 18.56 19.9 18.42 19.9Z" fill={color} />
  </svg>
);

export const MoreIcon: React.FC<IconProps> = ({ className = "w-5 h-5", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="12" r="2" fill={color} />
    <circle cx="12" cy="12" r="2" fill={color} />
    <circle cx="18" cy="12" r="2" fill={color} />
  </svg>
);

export const ReceiptIcon: React.FC<IconProps> = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.5 3.5L18 2L16.5 3.5L15 2L13.5 3.5L12 2L10.5 3.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2V22L4.5 20.5L6 22L7.5 20.5L9 22L10.5 20.5L12 22L13.5 20.5L15 22L16.5 20.5L18 22L19.5 20.5L21 22V2L19.5 3.5ZM19 19.09H5V4.91H19V19.09ZM6 15H18V17H6V15ZM6 11H18V13H6V11ZM6 7H18V9H6V7Z" fill={color} />
  </svg>
);

export const CarIcon: React.FC<IconProps> = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5C5 13.67 5.67 13 6.5 13C7.33 13 8 13.67 8 14.5C8 15.33 7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5C16 13.67 16.67 13 17.5 13C18.33 13 19 13.67 19 14.5C19 15.33 18.33 16 17.5 16ZM5 11L6.5 6.5H17.5L19 11H5Z" fill={color} />
  </svg>
);

export const SchoolIcon: React.FC<IconProps> = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18ZM12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill={color} />
  </svg>
);

export const VenusLogo: React.FC<IconProps> = ({ className = "w-11 h-11" }) => (
  <svg className={className} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="22" r="22" fill="#4318FF" />
    <path d="M22 8C14.27 8 8 14.27 8 22C8 29.73 14.27 36 22 36C29.73 36 36 29.73 36 22C36 14.27 29.73 8 22 8ZM22 33C15.93 33 11 28.07 11 22C11 15.93 15.93 11 22 11C28.07 11 33 15.93 33 22C33 28.07 28.07 33 22 33Z" fill="white" />
    <path d="M22 14C17.59 14 14 17.59 14 22C14 26.41 17.59 30 22 30C26.41 30 30 26.41 30 22C30 17.59 26.41 14 22 14ZM22 27C19.24 27 17 24.76 17 22C17 19.24 19.24 17 22 17C24.76 17 27 19.24 27 22C27 24.76 24.76 27 22 27Z" fill="white" />
  </svg>
);
