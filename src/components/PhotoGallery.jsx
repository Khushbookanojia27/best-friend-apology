import React, { useState, useEffect } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { photosData } from '../data/content';

export default function PhotoGallery() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex]);

  const handleNext = () => {
    setSelectedPhotoIndex((prev) => (prev + 1) % photosData.length);
  };

  const handlePrev = () => {
    setSelectedPhotoIndex((prev) => (prev - 1 + photosData.length) % photosData.length);
  };

  return (
    <section id="memories" className="py-20 px-4 sm:px-6 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pastel-pink/40 text-pastel-pink-deep text-xs font-semibold mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Our Moments Captured</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-pastel-text mb-4">
            Our Memories ??
          </h2>
          <p className="text-pastel-text-muted text-base sm:text-lg font-light">
            Every picture holds a piece of our story. Click any photo to see it in detail.
          </p>
        </div>

        {/* Polaroid Scrapbook Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pt-4">
          {photosData.map((photo, index) => (
            <div
              key={photo.id || index}
              onClick={() => setSelectedPhotoIndex(index)}
              className={`group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-20 ${
                photo.rotation || ''
              } hover:rotate-0`}
            >
              {/* Polaroid Frame */}
              <div className="relative bg-white p-4 pb-6 rounded-2xl shadow-polaroid hover:shadow-polaroid-hover transition-all duration-300 border border-pastel-pink/20">
                {/* Washi Tape Accent */}
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 ${
                    photo.tapeColor === 'lavender' ? 'washi-tape-lavender' : 'washi-tape'
                  } rounded-sm pointer-events-none z-10 transition-transform group-hover:scale-110`}
                />

                {/* Photo Container */}
                <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-pastel-cream mb-4">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80';
                    }}
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-pastel-pink/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2.5 rounded-full bg-white/90 text-pastel-pink-deep shadow-md transform scale-75 group-hover:scale-100 transition-transform">
                      <Heart className="w-5 h-5 fill-pastel-pink-deep" />
                    </span>
                  </div>
                </div>

                {/* Polaroid Caption */}
                <div className="text-center px-2">
                  <p className="font-handwriting text-2xl text-pastel-text font-semibold leading-tight group-hover:text-pastel-pink-deep transition-colors">
                    {photo.caption}
                  </p>
                  {photo.date && (
                    <p className="text-xs text-pastel-text-muted mt-1 font-sans tracking-wide">
                      {photo.date}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-pastel-text-muted italic">
            ?? Tip: You can easily add your own pictures by putting them in the <code className="px-1.5 py-0.5 rounded bg-pastel-pink/30 text-pastel-pink-deep">public/photos/</code> folder!
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors z-40"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors z-40"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div
            className="relative max-w-3xl w-full bg-white rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col items-center animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[68vh] overflow-hidden rounded-2xl bg-black/5 flex items-center justify-center">
              <img
                src={photosData[selectedPhotoIndex].url}
                alt={photosData[selectedPhotoIndex].caption}
                className="w-full h-auto max-h-[68vh] object-contain rounded-2xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80';
                }}
              />
            </div>

            <div className="mt-5 text-center px-4">
              <p className="font-handwriting text-3xl sm:text-4xl text-pastel-text font-bold">
                {photosData[selectedPhotoIndex].caption}
              </p>
              {photosData[selectedPhotoIndex].date && (
                <p className="text-sm text-pastel-text-muted mt-1 font-sans">
                  {photosData[selectedPhotoIndex].date}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
