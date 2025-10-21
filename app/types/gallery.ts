export type GalleryCategory = 
  | 'HOPE' 
  | 'STRENGTH' 
  | 'COURAGE' 
  | 'LOVE' 
  | 'WARRIOR' 
  | 'BRAVE' 
  | 'FIGHTER' 
  | 'SURVIVOR' 
  | 'THRIVER' 
  | 'RESILIENT' 
  | 'UNSTOPPABLE' 
  | 'BELIEVE';

export interface GalleryImage {
  src: string;
  alt: string;
  category: GalleryCategory;
}

// Category colors and info
export const categoryInfo: Record<GalleryCategory, { color: string; bgColor: string; hoverColor: string }> = {
  HOPE: { color: 'text-teal-600', bgColor: 'bg-teal-100', hoverColor: 'hover:bg-teal-200' },
  STRENGTH: { color: 'text-pink-600', bgColor: 'bg-pink-100', hoverColor: 'hover:bg-pink-200' },
  COURAGE: { color: 'text-emerald-600', bgColor: 'bg-emerald-100', hoverColor: 'hover:bg-emerald-200' },
  LOVE: { color: 'text-rose-600', bgColor: 'bg-rose-100', hoverColor: 'hover:bg-rose-200' },
  WARRIOR: { color: 'text-blue-600', bgColor: 'bg-blue-100', hoverColor: 'hover:bg-blue-200' },
  BRAVE: { color: 'text-purple-600', bgColor: 'bg-purple-100', hoverColor: 'hover:bg-purple-200' },
  FIGHTER: { color: 'text-teal-600', bgColor: 'bg-teal-100', hoverColor: 'hover:bg-teal-200' },
  SURVIVOR: { color: 'text-pink-600', bgColor: 'bg-pink-100', hoverColor: 'hover:bg-pink-200' },
  THRIVER: { color: 'text-emerald-600', bgColor: 'bg-emerald-100', hoverColor: 'hover:bg-emerald-200' },
  RESILIENT: { color: 'text-blue-600', bgColor: 'bg-blue-100', hoverColor: 'hover:bg-blue-200' },
  UNSTOPPABLE: { color: 'text-rose-600', bgColor: 'bg-rose-100', hoverColor: 'hover:bg-rose-200' },
  BELIEVE: { color: 'text-purple-600', bgColor: 'bg-purple-100', hoverColor: 'hover:bg-purple-200' },
};

