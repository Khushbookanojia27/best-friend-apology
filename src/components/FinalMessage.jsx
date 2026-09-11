import React, { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { finalSectionData } from '../data/content';

export default function FinalMessage() {
  const [responded, setResponded] = useState(false);
  const [chosenOption, setChosenOption] = useState('');

  const handleResponse = (optionText) => {
    setResponded(true);
    setChosenOption(optionText);

    // Fire gentle pastel confetti celebration
    confetti({
      particleCount: 85,
      spread: 75,
      origin: { y: 0.7 },
      colors: ['#f7a8b8', '#e26d85', '#c8b6ff', '#ffd6e0', '#dfab68'],
      disableForReducedMotion: true
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 relative scroll-mt-20">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-pastel-pink/30 via-pastel-lavender/25 to-pastel-peach/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-2xl mx-auto">
        <div className="bg-white/90 backdrop-blur-xl border border-rose-200/80 rounded-3xl p-8 sm:p-12 shadow-letter text-center relative overflow-hidden">
          {/* Top Accent Ribbon */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pastel-pink-dark via-pastel-lavender-dark to-pastel-pink-deep" />

          {!responded ? (
            <div className="animate-fadeIn">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-pastel-pink/40 text-pastel-pink-deep mb-6 shadow-sm">
                <Heart className="w-7 h-7 fill-pastel-pink-deep animate-pulse-subtle" />
              </div>

              <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-pastel-text mb-6 leading-tight">
                {finalSectionData.title}
              </h2>

              <div className="text-pastel-text-muted text-base sm:text-lg leading-relaxed space-y-3 mb-10 max-w-lg mx-auto font-light">
                {finalSectionData.subtitle.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => handleResponse(finalSectionData.buttonYes)}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-pastel-pink-dark to-pastel-pink-deep hover:from-pastel-pink-deep hover:to-rose-600 text-white font-semibold text-base shadow-soft hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>{finalSectionData.buttonYes}</span>
                  <span className="group-hover:scale-125 transition-transform">??</span>
                </button>

                <button
                  onClick={() => handleResponse(finalSectionData.buttonHug)}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-pastel-card hover:bg-white text-pastel-text hover:text-pastel-pink-deep font-semibold text-base shadow-soft hover:shadow-letter border border-pastel-pink/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>{finalSectionData.buttonHug}</span>
                  <span className="group-hover:scale-125 transition-transform">??</span>
                </button>
              </div>
            </div>
          ) : (
            /* Animated Cute Thank You & Hug Photo */
            <div className="py-4 sm:py-6 animate-scaleUp flex flex-col items-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-5 shadow-sm">
                <Sparkles className="w-8 h-8 animate-spin-slow" />
              </div>

              <h3 className="font-serif font-bold text-3xl sm:text-4xl text-pastel-text mb-3">
                {finalSectionData.responseMessage}
              </h3>

              <p className="font-handwriting text-2xl sm:text-3xl text-pastel-pink-deep font-semibold mb-6">
                {finalSectionData.responseSubtext}
              </p>

              {/* Best Friends Hug Keepsake Photo */}
              {finalSectionData.hugPhoto && (
                <div className="my-2 group">
                  <div className="bg-white p-3 pb-4 rounded-2xl shadow-polaroid border border-pastel-pink/40 -rotate-1 group-hover:rotate-0 transition-transform duration-300 w-48 sm:w-56">
                    <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-pastel-cream">
                      <img
                        src={finalSectionData.hugPhoto}
                        alt="Best friend warm hug"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <p className="font-handwriting text-center text-lg text-pastel-pink-deep font-bold mt-2">
                      Forever besties ????
                    </p>
                  </div>
                </div>
              )}

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pastel-pink/30 text-pastel-pink-deep text-sm font-medium mt-4">
                <span>You chose: <strong>{chosenOption}</strong></span>
                <span>?</span>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => setResponded(false)}
                  className="text-xs text-pastel-text-muted hover:text-pastel-pink-deep transition-colors underline underline-offset-4"
                >
                  Reset options
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
