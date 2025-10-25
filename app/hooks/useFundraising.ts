'use client';

import { useState, useEffect } from 'react';

interface FundraisingData {
  raisedAmount: string;
  lastUpdated: string;
  error?: string;
}

export function useFundraising() {
  const [data, setData] = useState<FundraisingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFundraisingData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/fundraising');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const fundraisingData = await response.json();
        setData(fundraisingData);
        setError(null);
      } catch (err) {
        console.error('Error fetching fundraising data:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch fundraising data');
        
        // Set fallback data
        setData({
          raisedAmount: '$9,473+',
          lastUpdated: new Date().toISOString(),
          error: 'Using fallback data'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchFundraisingData();

    // Refresh data every 6 hours (21600000 ms)
    const interval = setInterval(fetchFundraisingData, 21600000);

    return () => clearInterval(interval);
  }, []);

  return { data, loading, error };
}
