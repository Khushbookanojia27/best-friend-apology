import React, { useMemo } from 'react';

export default function FloatingHearts() {
  const particles = useMemo(() => {
    const items = ['??', '?', '??', '??', '?', '??', '??'];
    return Array.from({ length: 18 }).map((_, index) => {
      const char = items[index % items.length];
      const left = Math.floor(Math.random() * 92) + 4; // 4% to 96%
      const duration = 12 + Math.floor(Math.random() * 14); // 12s - 26s
      const delay = Math.floor(Math.random() * 10); // 0s - 10s
      const size = 14 + Math.floor(Math.random() * 14); // 14px - 28px
      const opacity = 0.25 + Math.random() * 0.35; // 0.25 - 0.6
      return { id: index, char, left, duration, delay, size, opacity };
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute select-none will-change-transform"
          style={{
            left: `${p.left}%`,
            bottom: '-40px',
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            animation: `floatUpward ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.char}
        </span>
      ))}
      <style>{`
        @keyframes floatUpward {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          50% {
            transform: translateY(-50vh) translateX(18px) rotate(20deg);
          }
          90% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-115vh) translateX(-18px) rotate(-20deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
