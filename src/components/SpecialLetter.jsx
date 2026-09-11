import React, { useState } from 'react';
import { Mail, Heart, Sparkles, RefreshCw } from 'lucide-react';
import { specialLetterData } from '../data/content';

export default function SpecialLetter() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="letter" className="py-20 px-4 sm:px-6 relative scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pastel-pink/40 text-pastel-pink-deep text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>A Secret Note</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-pastel-text mb-3">
            {specialLetterData.sectionTitle}
          </h2>
          <p className="text-pastel-text-muted text-base sm:text-lg font-light">
            {specialLetterData.sectionSubtitle}
          </p>
        </div>

        {/* Envelope Container */}
        <div className="flex flex-col items-center">
          <div
            onClick={toggleOpen}
            className="relative cursor-pointer select-none group w-full max-w-lg transition-transform duration-300 hover:scale-102"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleOpen();
              }
            }}
            aria-expanded={isOpen}
            aria-label="Click to open or close letter"
          >
            {/* Click Prompt Hint Pill */}
            <div className="text-center mb-4">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/90 border border-pastel-pink-dark/40 shadow-sm text-xs sm:text-sm font-medium text-pastel-pink-deep transition-all group-hover:bg-pastel-pink group-hover:text-white">
                <Mail className="w-3.5 h-3.5" />
                <span>{isOpen ? 'Click envelope to fold note ??' : 'Tap to open the envelope ??'}</span>
              </span>
            </div>

            {/* Envelope Shell */}
            <div className="relative w-full h-72 sm:h-80 bg-[#fbe7ec] border-2 border-[#f0c2cf] rounded-2xl shadow-letter overflow-visible envelope-perspective flex items-end justify-center">
              {/* Inside Envelope Liner */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#f8d7e0] to-[#f4c8d4] opacity-90 overflow-hidden">
                <div className="absolute inset-0 opacity-15 flex flex-wrap gap-4 p-4 text-pastel-pink-deep">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <span key={i} className="text-xs select-none">??</span>
                  ))}
                </div>
              </div>

              {/* The Letter Sheet */}
              <div
                className={`absolute w-[92%] left-[4%] bottom-2 bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-rose-100 transition-all duration-700 ease-out paper-texture z-20 ${
                  isOpen
                    ? '-translate-y-56 sm:-translate-y-64 shadow-2xl scale-[1.02]'
                    : 'translate-y-0 opacity-70 scale-95'
                }`}
                style={{
                  maxHeight: isOpen ? '900px' : '200px',
                }}
              >
                <div className="w-20 h-4 washi-tape mx-auto -mt-8 mb-4 rounded-sm shadow-sm" />

                <div className="flex flex-col sm:flex-row gap-6 items-start justify-between">
                  <div className="flex-1">
                    <p className="font-handwriting text-2xl sm:text-3xl text-pastel-pink-deep font-bold mb-3">
                      {specialLetterData.letterHeader}
                    </p>

                    <div className="space-y-3 font-handwriting text-lg sm:text-xl md:text-2xl text-pastel-text leading-relaxed font-medium">
                      {specialLetterData.paragraphs.map((p, idx) => {
                        const lines = p.split('\n');
                        return (
                          <div key={idx} className="space-y-0.5">
                            {lines.map((l, lIdx) => (
                              <p key={lIdx} className={lines.length > 1 ? 'text-pastel-pink-deep font-semibold' : ''}>
                                {l}
                              </p>
                            ))}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Secret Photo Keepsake tucked inside */}
                  {specialLetterData.letterPhoto && (
                    <div className="hidden sm:block flex-shrink-0 self-center">
                      <div className="bg-pastel-cream p-2 pb-3 rounded-xl border border-pastel-pink/40 shadow-md rotate-3 w-32">
                        <div className="w-full aspect-square rounded-lg overflow-hidden">
                          <img
                            src={specialLetterData.letterPhoto}
                            alt="Special memory"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="font-handwriting text-center text-sm text-pastel-pink-deep mt-1 font-bold">
                          Always ??
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Signature */}
                <div className="mt-6 pt-4 border-t border-rose-100/80 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-pastel-pink-deep">
                    <Heart className="w-4 h-4 fill-pastel-pink-deep" />
                    <span className="font-serif italic text-xs sm:text-sm text-pastel-text-muted">
                      {specialLetterData.signature}
                    </span>
                  </div>
                  <p className="font-handwriting text-xl sm:text-2xl text-pastel-pink-deep font-bold">
                    {specialLetterData.closing}
                  </p>
                </div>
              </div>

              {/* Envelope Lower Front Triangle Pockets */}
              <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden rounded-2xl">
                <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[210px] sm:border-l-[260px] border-l-[#f9d2dc] border-t-[140px] sm:border-t-[160px] border-t-transparent opacity-95" />
                <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[210px] sm:border-r-[260px] border-r-[#f9d2dc] border-t-[140px] sm:border-t-[160px] border-t-transparent opacity-95" />
                <div className="absolute bottom-0 left-0 right-0 h-0 border-b-[140px] sm:border-b-[160px] border-b-[#f4c2cf] border-l-[210px] sm:border-l-[260px] border-l-transparent border-r-[210px] sm:border-r-[260px] border-r-transparent" />
              </div>

              {/* Top Flap */}
              <div
                className={`envelope-flap absolute top-0 left-0 right-0 h-0 border-t-[140px] sm:border-t-[160px] border-t-[#ecc0cc] border-l-[210px] sm:border-l-[260px] border-l-transparent border-r-[210px] sm:border-r-[260px] border-r-transparent z-40 transition-all duration-500 ${
                  isOpen ? 'open' : ''
                }`}
              >
                {!isOpen && (
                  <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-pastel-pink-deep shadow-md border-2 border-rose-200 flex items-center justify-center animate-pulse-subtle">
                    <Heart className="w-5 h-5 fill-white text-white" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {isOpen && (
            <div className="mt-28 sm:mt-32 text-center animate-fadeIn">
              <button
                onClick={toggleOpen}
                className="inline-flex items-center gap-1.5 text-xs text-pastel-pink-deep hover:text-pastel-text transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Fold back into envelope</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
