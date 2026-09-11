import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { footerData } from '../data/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="pt-16 pb-12 px-4 sm:px-6 border-t border-rose-100 bg-pastel-cream/80 relative text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-pastel-pink/50 flex items-center justify-center text-pastel-pink-deep mb-4 shadow-sm">
          <Heart className="w-5 h-5 fill-pastel-pink-deep text-pastel-pink-deep animate-pulse-subtle" />
        </div>

        <p className="font-handwriting text-2xl sm:text-3xl text-pastel-text font-bold mb-2">
          {footerData.loveNote}
        </p>

        <p className="font-serif italic text-base sm:text-lg text-pastel-pink-deep/90 mb-8">
          “{footerData.quote}”
        </p>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-xs font-semibold text-pastel-text-muted hover:text-pastel-pink-deep hover:shadow-soft border border-pastel-pink/30 transition-all"
          aria-label="Back to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

        <p className="text-xs text-pastel-text-muted/60 mt-8 font-light">
          To My Best Friend • Always & Forever
        </p>
      </div>
    </footer>
  );
}
