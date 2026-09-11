import React from 'react';
import {
  Heart,
  MessageCircleHeart,
  Smile,
  Sparkles,
  Camera,
  HeartHandshake
} from 'lucide-react';
import { friendshipReasons } from '../data/content';

const iconMap = {
  MessageCircleHeart: MessageCircleHeart,
  Smile: Smile,
  Sparkles: Sparkles,
  Camera: Camera,
  HeartHandshake: HeartHandshake,
  Heart: Heart,
};

export default function FriendshipReasons() {
  return (
    <section id="reasons" className="py-20 px-4 sm:px-6 relative scroll-mt-20">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-80 h-80 bg-pastel-pink/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-pastel-lavender/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pastel-lavender/50 text-purple-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Treasured Moments</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-pastel-text mb-4">
            Things I Love About Our Friendship ??
          </h2>
          <p className="text-pastel-text-muted text-base sm:text-lg font-light">
            The little things that make having you in my life so irreplaceable.
          </p>
        </div>

        {/* Reasons Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {friendshipReasons.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Heart;
            return (
              <div
                key={item.id || index}
                className="group relative bg-white/80 hover:bg-white p-7 rounded-3xl border border-rose-100/80 shadow-soft hover:shadow-letter transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              >
                {/* Decorative Subtle Corner Gradient */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pastel-pink/20 to-transparent rounded-bl-full pointer-events-none transition-transform duration-300 group-hover:scale-125" />

                <div>
                  {/* Icon Badge */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accentColor} flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Card Title */}
                  <h3 className="font-serif font-semibold text-xl sm:text-2xl text-pastel-text mb-2.5 group-hover:text-pastel-pink-deep transition-colors">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-pastel-text-muted text-sm sm:text-base leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Cute Detail */}
                <div className="mt-6 pt-4 border-t border-rose-50 flex items-center justify-between text-xs text-pastel-text-muted/70">
                  <span className="font-handwriting text-base text-pastel-pink-deep">reason #{index + 1}</span>
                  <Heart className="w-3.5 h-3.5 fill-pastel-pink-dark/40 text-pastel-pink-dark group-hover:scale-125 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
