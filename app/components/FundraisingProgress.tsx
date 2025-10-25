'use client';

import { useFundraising } from '../hooks/useFundraising';
import { Heart, Users, TrendingUp, Sparkles } from 'lucide-react';

export default function FundraisingProgress() {
  const { data, loading } = useFundraising();

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

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Heart className="w-16 h-16 text-pink-500 fill-current animate-pulse" />
              <Sparkles className="w-6 h-6 text-yellow-400 absolute -top-1 -right-1 animate-bounce" />
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
            Community Impact
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Together, we&apos;re making a real difference in the fight against Metastatic Breast Cancer
          </p>
        </div>

        {/* Main Progress Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full -mr-16 -mt-16 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-teal-200 to-emerald-200 rounded-full -ml-12 -mb-12 opacity-50"></div>
          
          <div className="relative z-10">
            {/* Progress Header */}
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Funds Raised So Far
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 mx-auto rounded-full"></div>
            </div>

            {/* Amount Display */}
            <div className="text-center mb-8">
              {loading ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
                  <span className="text-2xl text-gray-600">Loading...</span>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600">
                    {data?.raisedAmount || '$9,473+'}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-lg text-gray-600">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <span>Growing every day!</span>
                  </div>
                  {data?.lastUpdated && (
                    <p className="text-sm text-gray-500">
                      {formatLastUpdated(data.lastUpdated)}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Thank You Message */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-pink-500" />
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Thank You for Your Love &amp; Support! 💕
              </h4>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Your generosity is bringing us closer to finding a cure for Metastatic Breast Cancer. 
                Every donation, every share, and every step taken in this journey makes a difference.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-pink-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Goes to Research</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">90%</div>
                  <div className="text-sm text-gray-600">METAvivor Efficiency</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-teal-600 mb-1">∞</div>
                  <div className="text-sm text-gray-600">Hope & Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            <span className="font-bold text-pink-600">Every dollar counts.</span> 
            <span className="font-bold text-emerald-600"> Every share matters.</span> 
            <span className="font-bold text-teal-600"> Every step brings us closer to a cure.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://raceroster.com/events/2025/101366/miles-for-mbc-and-kelly-marie/fundraising-organization/71286#event-description"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-pink-600 hover:to-rose-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5" />
              <span>Make a Donation</span>
            </a>
            <a
              href="https://raceroster.com/events/2025/101366/miles-for-mbc-and-kelly-marie/register?ref=event-right-sidebar"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Users className="w-5 h-5" />
              <span>Join the Run</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
