'use client';

import Image from 'next/image';

const sponsorImages = [
  '/images/sponsors/sponsor1.png',
  '/images/sponsors/sponsor2.png',
  '/images/sponsors/sponsor3.jpg',
  '/images/sponsors/sponsor4.jpg',
  '/images/sponsors/sponsor5.jpg',
  '/images/sponsors/sponsor6.jpg',
  '/images/sponsors/sponsor7.jpg',
  '/images/sponsors/sponsor8.jpg',
  '/images/sponsors/sponsor9.jpg',
  '/images/sponsors/sponsor10.jpg',
  '/images/sponsors/sponsor11.jpg',
  '/images/sponsors/sponsor12.jpg',
  '/images/sponsors/sponsor13.jpg',
  '/images/sponsors/sponsor14.jpg',
  '/images/sponsors/sponsor15.jpg',
  '/images/sponsors/sponsor16.jpg',
  '/images/sponsors/sponsor17.jpg',
];

export default function SponsorShowcase() {
  // Duplicate the array for seamless infinite scroll
  const duplicatedSponsors = [...sponsorImages, ...sponsorImages];

  return (
    <div className="mb-12">
      {/* Infinite Scrolling Marquee */}
      <div className="relative overflow-hidden bg-gradient-to-r from-white via-gray-50 to-white py-8 rounded-2xl shadow-lg mb-8">
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .scrolling-logos {
            animation: scroll 40s linear infinite;
          }
          .scrolling-logos:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="flex scrolling-logos">
          {duplicatedSponsors.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-4 bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              style={{ width: '200px', height: '150px' }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={image}
                  alt={`Sponsor ${(index % sponsorImages.length) + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid View */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {sponsorImages.map((image, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md p-4 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
              style={{ minHeight: '120px' }}
            >
              <div className="relative w-full h-24">
                <Image
                  src={image}
                  alt={`Sponsor ${index + 1}`}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

