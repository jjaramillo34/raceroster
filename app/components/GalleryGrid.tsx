'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GalleryImage, GalleryCategory, categoryInfo } from '../types/gallery';

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory | 'ALL'>('ALL');
  
  // Get unique categories from images
  const categories: GalleryCategory[] = [
    'HOPE',
    'STRENGTH',
    'COURAGE',
    'LOVE',
    'WARRIOR',
    'BRAVE',
    'FIGHTER',
    'SURVIVOR',
    'THRIVER',
    'RESILIENT',
    'UNSTOPPABLE',
    'BELIEVE',
  ];

  // Count images per category
  const categoryCounts = categories.reduce((acc, category) => {
    acc[category] = images.filter(img => img.category === category).length;
    return acc;
  }, {} as Record<GalleryCategory, number>);

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'ALL' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Filter Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
            Filter by Inspiration
          </h2>
          <p className="text-center text-gray-600 mb-8 text-lg">
            Click on a word to see photos that represent that spirit
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {/* ALL Button */}
            <button
              onClick={() => setSelectedCategory('ALL')}
              className={`px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all transform hover:scale-105 shadow-md hover:shadow-xl ${
                selectedCategory === 'ALL'
                  ? 'bg-gradient-to-r from-teal-500 via-emerald-500 to-pink-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              ALL ({images.length})
            </button>

            {/* Category Buttons */}
            {categories.map((category) => {
              const info = categoryInfo[category];
              const isActive = selectedCategory === category;
              const count = categoryCounts[category];

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all transform hover:scale-105 shadow-md hover:shadow-xl ${
                    isActive
                      ? `${info.bgColor} ${info.color} ring-2 ring-offset-2 ring-current`
                      : `bg-white ${info.color} ${info.hoverColor}`
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>

          {/* Active Filter Display */}
          {selectedCategory !== 'ALL' && (
            <div className="text-center">
              <p className="text-lg text-gray-600">
                Showing <span className="font-bold text-gray-800">{filteredImages.length}</span> photos tagged with{' '}
                <span className={`font-bold ${categoryInfo[selectedCategory].color}`}>
                  {selectedCategory}
                </span>
              </p>
            </div>
          )}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => {
            const categoryColor = categoryInfo[image.category];
            
            return (
              <div
                key={`${image.src}-${index}`}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 animate-fadeIn"
                style={{
                  animationDelay: `${index * 20}ms`,
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-4 gap-2">
                  <span className={`${categoryColor.bgColor} ${categoryColor.color} px-3 py-1 rounded-full text-xs font-bold`}>
                    {image.category}
                  </span>
                  <span className="text-white font-semibold text-sm">
                    LightUpMBC 2024
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results Message */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-2xl text-gray-600">
              No images found for this category.
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

