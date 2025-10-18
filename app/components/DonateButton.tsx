import { Heart, ExternalLink } from 'lucide-react';

interface DonateButtonProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  fullWidth?: boolean;
  showIcon?: boolean;
}

const DONATION_URL = 'https://raceroster.com/events/2025/101366/miles-for-mbc-and-kelly-marie/fundraising-organization/71286#event-description';

export default function DonateButton({ 
  size = 'medium', 
  variant = 'primary',
  fullWidth = false,
  showIcon = true 
}: DonateButtonProps) {
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 shadow-lg hover:shadow-xl',
    secondary: 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:from-teal-600 hover:to-emerald-600 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-pink-500 text-pink-600 hover:bg-pink-50',
    white: 'bg-white text-pink-600 hover:bg-gray-50 shadow-lg hover:shadow-xl',
  };

  return (
    <a
      href={DONATION_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${fullWidth ? 'w-full' : ''}
        inline-flex items-center justify-center gap-2
        font-bold rounded-full
        transition-all duration-300
        transform hover:scale-105
        focus:outline-none focus:ring-4 focus:ring-pink-300
      `}
    >
      {showIcon && <Heart className="w-5 h-5 fill-current" />}
      <span>Donate Now</span>
      <ExternalLink className="w-4 h-4" />
    </a>
  );
}

