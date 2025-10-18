import Image from 'next/image';
import { Heart } from 'lucide-react';

interface StoryCardProps {
  name: string;
  title: string;
  image: string;
  story: string;
  accentColor: 'teal' | 'emerald' | 'pink';
  isMemorial?: boolean;
  memorableQuote?: {
    text: string;
    author?: string;
  };
}

const colorClasses = {
  teal: {
    gradient: 'from-teal-500 to-teal-600',
    text: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-300',
    ribbon: 'bg-teal-500',
  },
  emerald: {
    gradient: 'from-emerald-500 to-emerald-600',
    text: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-300',
    ribbon: 'bg-emerald-500',
  },
  pink: {
    gradient: 'from-pink-500 to-pink-600',
    text: 'text-pink-600',
    bg: 'bg-pink-50',
    border: 'border-pink-300',
    ribbon: 'bg-pink-500',
  },
};

export default function StoryCard({
  name,
  title,
  image,
  story,
  accentColor,
  isMemorial = false,
  memorableQuote,
}: StoryCardProps) {
  const colors = colorClasses[accentColor];

  return (
    <div className="group mb-12 relative">
      {/* Decorative Corner Ribbon */}
      {isMemorial && (
        <div className="absolute top-0 right-0 z-10">
          <div className={`${colors.ribbon} text-white px-6 py-2 rounded-bl-2xl shadow-lg flex items-center gap-2`}>
            <Heart className="w-4 h-4 fill-current" />
            <span className="text-sm font-semibold">In Loving Memory</span>
          </div>
        </div>
      )}

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
        {/* Header with Gradient */}
        <div className={`bg-gradient-to-r ${colors.gradient} p-6`}>
          <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
            {name}
          </h3>
          {title && (
            <p className="text-white/90 text-lg mt-2 font-medium">{title}</p>
          )}
        </div>

        <div className="p-8 md:p-12">
          {/* Image and Story Layout */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Enhanced Photo */}
            <div className="relative flex-shrink-0">
              <div className={`absolute inset-0 ${colors.bg} rounded-2xl transform rotate-3`}></div>
              <div className="relative">
                <div className={`border-4 ${colors.border} rounded-2xl overflow-hidden shadow-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500`}>
                  <div className="relative w-64 h-64 md:w-72 md:h-72">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="flex-1 space-y-6">
              {/* Memorable Quote */}
              {memorableQuote && (
                <div className={`${colors.bg} border-l-4 ${colors.border} p-6 rounded-r-2xl`}>
                  <div className="flex items-start gap-3">
                    <span className={`text-5xl ${colors.text} font-serif leading-none`}>&ldquo;</span>
                    <div>
                      <p className={`text-xl font-bold ${colors.text} italic leading-relaxed`}>
                        {memorableQuote.text}
                      </p>
                      {memorableQuote.author && (
                        <p className="text-gray-600 mt-2 font-medium">— {memorableQuote.author}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Story Text */}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {story}
                </p>
              </div>

              {/* Decorative Hearts */}
              <div className="flex gap-2 pt-4">
                {[...Array(3)].map((_, i) => (
                  <Heart
                    key={i}
                    className={`w-5 h-5 ${colors.text} fill-current opacity-60`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

