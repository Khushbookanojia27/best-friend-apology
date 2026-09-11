import React from 'react';
import { Heart, Feather } from 'lucide-react';
import { apologyLetterData } from '../data/content';

export default function ApologyLetter() {
  return (
    <section id="apology" className="py-20 px-4 sm:px-6 relative scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Decorative Corner Washi Tapes */}
          <div className="absolute -top-4 left-6 sm:left-12 w-28 sm:w-36 h-8 washi-tape -rotate-3 z-20 rounded-sm pointer-events-none" />
          <div className="absolute -top-4 right-6 sm:right-12 w-28 sm:w-36 h-8 washi-tape-lavender rotate-3 z-20 rounded-sm pointer-events-none" />

          {/* Letter Body */}
          <div className="relative bg-pastel-card border border-rose-100/80 rounded-3xl p-8 sm:p-12 md:p-16 shadow-letter overflow-hidden paper-texture">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pastel-pink/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pastel-lavender/20 rounded-full blur-3xl pointer-events-none" />

            {/* Letter Header with Optional Pinned Memory Photo */}
            <div className="relative z-10 text-center mb-10 flex flex-col items-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose-50 border border-rose-200/60 shadow-sm text-pastel-pink-deep mb-4">
                <Feather className="w-5 h-5 text-pastel-pink-deep" />
              </div>
              <p className="font-serif italic text-sm text-pastel-pink-deep mb-2">
                {apologyLetterData.date || "From my heart to yours"}
              </p>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-pastel-text">
                {apologyLetterData.title}
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-pastel-pink-dark to-pastel-lavender-dark mx-auto mt-4 rounded-full" />
            </div>

            {/* Letter Content & Side Photo Container */}
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Text Paragraphs */}
              <div className="flex-1 space-y-6 text-pastel-text text-base sm:text-lg md:text-xl leading-relaxed font-sans font-light">
                {apologyLetterData.paragraphs.map((paragraph, index) => {
                  const lines = paragraph.split('\n');
                  return (
                    <div key={index} className="space-y-1.5">
                      {lines.map((line, lineIdx) => (
                        <p
                          key={lineIdx}
                          className={`${
                            lines.length > 1
                              ? 'font-medium text-pastel-pink-deep/90 pl-3 border-l-2 border-pastel-pink-dark/40 italic'
                              : ''
                          }`}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  );
                })}
              </div>

              {/* Pinned Scrapbook Photo of Both Friends */}
              {apologyLetterData.letterPhoto && (
                <div className="flex-shrink-0 md:mt-2">
                  <div className="relative bg-white p-2.5 pb-4 rounded-2xl shadow-polaroid rotate-3 hover:rotate-0 transition-transform duration-300 border border-pastel-pink/30 w-44 sm:w-48">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 washi-tape-lavender rounded-sm pointer-events-none z-10" />
                    <div className="w-full aspect-square rounded-xl overflow-hidden bg-pastel-cream">
                      <img
                        src={apologyLetterData.letterPhoto}
                        alt="Best friends together"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-handwriting text-center text-lg text-pastel-pink-deep font-semibold mt-2">
                      Thinking of you ??
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Sign-off */}
            <div className="relative z-10 mt-12 pt-8 border-t border-rose-100 flex flex-col items-end text-right">
              <p className="text-sm text-pastel-text-muted font-sans italic">
                {apologyLetterData.signoff}
              </p>
              <p className="font-handwriting text-3xl sm:text-4xl font-bold text-pastel-pink-deep mt-1">
                {apologyLetterData.senderName}
              </p>
            </div>

            {/* Wax Seal */}
            <div className="absolute bottom-8 left-8 hidden sm:flex items-center gap-2 opacity-75">
              <div className="w-10 h-10 rounded-full bg-rose-200/50 border border-rose-300 flex items-center justify-center">
                <Heart className="w-5 h-5 text-pastel-pink-deep fill-pastel-pink-deep/40" />
              </div>
              <span className="font-handwriting text-base text-pastel-text-muted">genuine apology</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
