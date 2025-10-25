'use client';

import { useFundraising } from '../hooks/useFundraising';
import { DollarSign, RefreshCw } from 'lucide-react';

interface FundraisingAmountProps {
  className?: string;
  showLastUpdated?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export default function FundraisingAmount({ 
  className = '', 
  showLastUpdated = false,
  size = 'large'
}: FundraisingAmountProps) {
  const { data, loading, error } = useFundraising();

  const sizeClasses = {
    small: 'text-2xl',
    medium: 'text-3xl',
    large: 'text-4xl'
  };

  const formatLastUpdated = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return 'Updated just now';
    } else if (diffInHours < 24) {
      return `Updated ${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `Updated ${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    }
  };

  if (loading) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <RefreshCw className="w-6 h-6 animate-spin text-pink-500" />
        <span className="text-gray-600">Loading...</span>
      </div>
    );
  }

  if (error && !data) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <DollarSign className="w-6 h-6 text-gray-400" />
        <span className="text-gray-500">Unable to load amount</span>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        <DollarSign className="w-6 h-6 text-pink-500" />
        <span className={`font-bold ${sizeClasses[size]} text-white`}>
          {data?.raisedAmount || '$9,473+'}
        </span>
        {data?.error && (
          <span className="text-xs text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
            (cached)
          </span>
        )}
      </div>
      
      {showLastUpdated && data?.lastUpdated && (
        <p className="text-sm text-white/90 mt-1">
          {formatLastUpdated(data.lastUpdated)}
        </p>
      )}
    </div>
  );
}
