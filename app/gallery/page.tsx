import { Heart, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import GalleryGrid from '@/app/components/GalleryGrid';
import { GalleryCategory, GalleryImage } from '../types/gallery';

export const metadata: Metadata = {
  title: 'Photo Gallery - Walk 2024 - LightUpMBC Howard Beach Color Fun Run',
  description: 'View photos from our LightUpMBC Walk 2024 celebrating hope, courage, and the fight against Metastatic Breast Cancer.',
};

// Smart categorization: Distribute images evenly across categories
function categorizeImages(files: string[]): GalleryImage[] {
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

  return files.map((file, index) => {
    // Distribute images evenly across categories
    const categoryIndex = index % categories.length;
    const category = categories[categoryIndex];

    return {
      src: `/images/gallery-optimized/${file}`,
      alt: `LightUpMBC Walk 2024 - ${category} Photo ${index + 1}`,
      category,
    };
  });
}

// Dynamically get gallery images from the file system
function getGalleryImages(): GalleryImage[] {
  const galleryPath = path.join(process.cwd(), 'public', 'images', 'gallery-optimized');
  
  try {
    const files = fs.readdirSync(galleryPath);
    const imageFiles = files
      .filter(file => file.match(/\.(webp|jpg|jpeg|png)$/i))
      .sort();
    
    return categorizeImages(imageFiles);
  } catch (error) {
    console.error('Error reading gallery directory:', error);
    return [];
  }
}

export default function GalleryPage() {
  const galleryImages = getGalleryImages();
  
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-teal-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-500 via-rose-400 to-pink-600 text-white py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <Sparkles className="w-16 h-16 mx-auto mb-4" />
            <p className="text-2xl md:text-3xl font-bold mb-2">Walk 2024</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Photo Gallery
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Celebrating hope, courage, and community in the fight against Metastatic Breast Cancer
            </p>
            <div className="flex justify-center gap-4 mb-4">
              <Heart className="w-8 h-8 fill-current" />
              <Sparkles className="w-8 h-8" />
              <Heart className="w-8 h-8 fill-current" />
            </div>
          </div>
        </section>

        {/* Featured Quote */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                &ldquo;We are the storm&rdquo;
              </h2>
              <p className="text-xl text-gray-600 italic">
                Together, we stand strong in the fight against MBC
              </p>
            </div>
          </div>
        </section>

        {/* Gallery with Filters - Client Component */}
        <GalleryGrid images={galleryImages} />

        {/* Encouraging Message Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-teal-500 via-emerald-500 to-pink-500 rounded-3xl p-1 shadow-2xl">
              <div className="bg-white rounded-3xl p-8 md:p-12">
                <div className="text-center">
                  <Heart className="w-16 h-16 text-pink-500 fill-current mx-auto mb-6 animate-pulse" />
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    You Are Not Alone
                  </h2>
                  <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                    <p>
                      Every step we take, every mile we run, brings us closer to a cure for Metastatic Breast Cancer.
                    </p>
                    <p className="font-semibold text-xl text-teal-600">
                      Together, we are stronger than cancer.
                    </p>
                    <p>
                      These photos capture our community&apos;s love, hope, and unwavering commitment to supporting those fighting MBC.
                    </p>
                    <p className="text-2xl font-bold text-pink-600">
                      #LightUpMBC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Stats */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-5xl font-bold text-teal-600 mb-2">{galleryImages.length}</div>
                <div className="text-gray-700 font-semibold">Moments Captured</div>
              </div>
              <div className="p-6">
                <div className="text-5xl font-bold text-pink-600 mb-2">100%</div>
                <div className="text-gray-700 font-semibold">For MBC Research</div>
              </div>
              <div className="p-6">
                <div className="text-5xl font-bold text-emerald-600 mb-2">∞</div>
                <div className="text-gray-700 font-semibold">Hope & Love</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="gradient-hero text-white py-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center gap-4 mb-6">
              <Heart className="w-8 h-8 fill-current" />
              <Sparkles className="w-8 h-8" />
              <Heart className="w-8 h-8 fill-current" />
            </div>
            <p className="text-2xl font-bold mb-4">
              100% of net proceeds fund MBC research through METAvivor
            </p>
            <p className="text-lg">
              Together, we can make a difference in the fight against Metastatic Breast Cancer
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
