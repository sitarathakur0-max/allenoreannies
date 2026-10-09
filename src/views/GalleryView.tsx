import React, { useState } from 'react';
import { PageId, GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/salonData';
import { X, ZoomIn } from 'lucide-react';

interface GalleryViewProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: (serviceName?: string) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Bridal', 'Party Looks', 'Hair', 'Facial & Beauty'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-[#FAF8F5] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-widest text-[#8A2B43] font-semibold">
            Visual Portfolio
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#3A1420] font-normal leading-tight">
            Our Salon Gallery
          </h1>
          <p className="text-base sm:text-lg text-[#5A4F46] leading-relaxed">
            Explore imagery representing our aesthetic approach across traditional bridal looks, party celebration makeup, hair treatments, and soothing facial environments.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#E8DFD5] pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#521528] text-white shadow-xs'
                  : 'bg-white text-[#5A4F46] hover:bg-[#F2EAE0] border border-[#D9CEC1]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-xl overflow-hidden bg-[#F2EAE0] border border-[#E8DFD5] cursor-pointer shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
                <span className="text-[11px] uppercase tracking-wider text-[#E6C9A2] font-semibold">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl font-medium text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-white/80 line-clamp-2 mt-1">
                  {item.description}
                </p>
                <div className="flex items-center gap-1 text-[11px] text-[#E6C9A2] mt-2 font-medium">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Click to expand view</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.title}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-[#FAF8F5] rounded-2xl overflow-hidden shadow-2xl border border-[#E8DFD5]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                aria-label="Close Lightbox"
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-16/10 bg-black overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#8A2B43] font-semibold">
                  {selectedItem.category}
                </span>
                <h2 className="font-serif text-2xl font-bold text-[#3A1420]">
                  {selectedItem.title}
                </h2>
                <p className="text-sm text-[#5A4F46]">
                  {selectedItem.description}
                </p>
                <div className="pt-4 flex items-center justify-between border-t border-[#E8DFD5]">
                  <p className="text-xs text-[#8A796D]">
                    Contact the salon for current availability, pricing and service details.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedItem(null);
                      onOpenAppointmentModal(selectedItem.title);
                    }}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#521528] hover:bg-[#681c33] rounded-full transition-colors cursor-pointer"
                  >
                    Inquire This Look
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
