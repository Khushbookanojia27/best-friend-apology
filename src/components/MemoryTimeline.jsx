import React from 'react';
import {
  Clock,
  Sparkles,
  MessageSquareHeart,
  Laugh,
  Flame,
  Star,
  Heart
} from 'lucide-react';
import { timelineData } from '../data/content';

const timelineIconMap = {
  Sparkles: Sparkles,
  MessageSquareHeart: MessageSquareHeart,
  Laugh: Laugh,
  Flame: Flame,
  Star: Star,
  Heart: Heart,
};

export default function MemoryTimeline() {
  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 relative scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pastel-pink/40 text-pastel-pink-deep text-xs font-semibold mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Our Journey</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-pastel-text mb-4">
            Our Little Story ???
          </h2>
          <p className="text-pastel-text-muted text-base sm:text-lg font-light">
            A timeline of the moments that shaped our bond, leading up to today.
          </p>
        </div>

        {/* Vertical Timeline Tree */}
        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-pastel-pink-dark via-pastel-lavender-dark to-pastel-pink-deep opacity-60" />

          <div className="space-y-12 sm:space-y-14">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              const IconComp = timelineIconMap[item.icon] || Heart;

              return (
                <div
                  key={item.id || index}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } group`}
                >
                  {/* Central Node Icon */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-pastel-pink-deep shadow-md z-10 group-hover:scale-115 transition-transform duration-300">
                    <IconComp className="w-4 h-4 text-pastel-pink-deep fill-pastel-pink/40" />
                  </div>

                  {/* Content Box */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[45%] ${
                      isEven ? 'md:text-left md:pr-10' : 'md:text-left md:pl-10'
                    }`}
                  >
                    <div className="relative bg-white/90 p-5 sm:p-7 rounded-3xl border border-rose-100/80 shadow-soft group-hover:shadow-letter hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                      {/* Chapter Pill */}
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-pastel-pink/30 text-pastel-pink-deep text-xs font-semibold mb-2">
                        <span>{item.date}</span>
                      </div>

                      {/* Milestone Title */}
                      <h3 className="font-serif font-bold text-xl sm:text-2xl text-pastel-text mb-2 group-hover:text-pastel-pink-deep transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-pastel-text-muted text-sm sm:text-base leading-relaxed font-light mb-3">
                        {item.description}
                      </p>

                      {/* Attached Thumbnail Photo */}
                      {item.thumbnail && (
                        <div className="mt-3 pt-3 border-t border-rose-50 flex items-center gap-3">
                          <div className="w-14 h-14 rounded-xl overflow-hidden shadow-sm flex-shrink-0 bg-pastel-cream border border-pastel-pink/30">
                            <img
                              src={item.thumbnail}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <span className="font-handwriting text-base text-pastel-pink-deep">
                            A cherished memory ??
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
