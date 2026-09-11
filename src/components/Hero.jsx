import React from 'react';
import { Heart, Sparkles, ChevronDown } from 'lucide-react';
import { heroData } from '../data/content';

export default function Hero({ onOpenApology }) {
  const handleScrollClick = (e) => {
    e.preventDefault();
    if (onOpenApology) {
      onOpenApology();
    } else {
      const el = document.getElementById('apology');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="top"
      className="relative min-h-[95vh] flex items-center justify-center px-4 sm:px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Soft Ambient Background Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[540px] h-96 sm:h-[540px] bg-gradient-to-tr from-pastel-pink/40 via-pastel-lavender/30 to-pastel-peach/30 rounded-full blur-3xl pointer-events-none -z-10 animate-float-slow" />

      <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Cute Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-pastel-pink-dark/30 shadow-sm text-pastel-pink-deep text-xs sm:text-sm font-semibold mb-6 animate-fadeIn">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" />
          <span>{heroData.badge || "A Digital Scrapbook For You ?"}</span>
          <Heart className="w-3.5 h-3.5 fill-pastel-pink-deep text-pastel-pink-deep" />
        </div>

        {/* Main Title */}
        <h1 className="font-serif font-bold text-4xl sm:text-6xl md:text-7xl text-pastel-text tracking-tight mb-3 leading-tight">
          {heroData.greeting}
        </h1>

        {/* Subtitle */}
        <h2 className="font-handwriting text-3xl sm:text-4xl md:text-5xl text-pastel-pink-deep font-semibold mb-4">
          {heroData.subtitle}
        </h2>

        {/* Warm Personal Tagline */}
        <p className="text-base sm:text-lg md:text-xl text-pastel-text-muted max-w-xl mx-auto mb-6 leading-relaxed font-normal">
          {heroData.tagline}
        </p>

        {/* Scrapbook Polaroid Photo of the Besties */}
        {heroData.heroPhoto && (
          <div className="relative my-4 group cursor-pointer" onClick={handleScrollClick}>
            <div className="relative bg-white p-3 pb-4 rounded-2xl shadow-polaroid -rotate-2 group-hover:rotate-0 transition-transform duration-300 border border-pastel-pink/30 w-44 sm:w-52">
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 washi-tape rounded-sm pointer-events-none z-10" />
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-pastel-cream shadow-inner">
                <img
                  src={heroData.heroPhoto}
                  alt="Us together"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="font-handwriting text-center text-xl text-pastel-pink-deep font-bold mt-2">
                Us ??
              </p>
            </div>
          </div>
        )}

        {/* Call to Action Button */}
        <div className="relative inline-block group mt-4">
          <div className="absolute -inset-1 bg-gradient-to-r from-pastel-pink-dark to-pastel-lavender-dark rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300 group-hover:scale-105" />
          <button
            onClick={handleScrollClick}
            className="relative px-8 py-4 sm:px-10 sm:py-4.5 rounded-full bg-white hover:bg-pastel-card text-pastel-text font-semibold text-base sm:text-lg shadow-soft hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center gap-3 border border-pastel-pink/40"
          >
            <span>{heroData.ctaButtonText}</span>
            <span className="text-xl group-hover:scale-125 transition-transform duration-300">??</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center gap-2 text-pastel-text-muted/60 animate-bounce cursor-pointer" onClick={handleScrollClick}>
          <span className="text-xs tracking-wider uppercase font-medium">Scroll gently</span>
          <ChevronDown className="w-4 h-4 text-pastel-pink-deep" />
        </div>
      </div>
    </section>
  );
}
