import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, Music } from 'lucide-react';

export default function Navbar({ isPlaying, onToggleMusicScroll }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Apology', href: '#apology' },
    { label: 'Memories', href: '#memories' },
    { label: 'What I Love', href: '#reasons' },
    { label: 'Our Story', href: '#timeline' },
    { label: 'Music', href: '#music' },
    { label: 'Special Letter', href: '#letter' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-pastel-cream/85 backdrop-blur-md shadow-soft py-3 border-b border-pastel-pink/30'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#top"
          onClick={(e) => scrollToSection(e, '#top')}
          className="flex items-center gap-2 group text-pastel-text transition-colors"
        >
          <span className="w-8 h-8 rounded-full bg-pastel-pink/70 flex items-center justify-center text-pastel-pink-deep group-hover:scale-110 transition-transform shadow-sm">
            <Heart className="w-4 h-4 fill-pastel-pink-deep text-pastel-pink-deep animate-pulse-subtle" />
          </span>
          <span className="font-serif font-bold text-lg tracking-wide text-pastel-text group-hover:text-pastel-pink-deep transition-colors">
            To My Best Friend <span className="text-pastel-pink-deep">??</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="px-3 py-1.5 rounded-full text-sm font-medium text-pastel-text/80 hover:text-pastel-pink-deep hover:bg-pastel-pink/30 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}

          {/* Quick Audio indicator button */}
          <button
            onClick={onToggleMusicScroll}
            aria-label="Jump to music player"
            className={`ml-2 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-semibold border transition-all ${
              isPlaying
                ? 'bg-pastel-pink text-pastel-pink-deep border-pastel-pink-dark animate-pulse-subtle'
                : 'bg-white/60 text-pastel-text-muted border-pastel-pink/40 hover:bg-pastel-pink/20 hover:text-pastel-text'
            }`}
          >
            <Music className="w-3.5 h-3.5" />
            <span>{isPlaying ? 'Playing ??' : 'Music ??'}</span>
          </button>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-white/70 text-pastel-text hover:text-pastel-pink-deep hover:bg-pastel-pink/40 transition-colors border border-pastel-pink/30"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-pastel-cream/95 backdrop-blur-lg border-b border-pastel-pink/40 px-6 py-4 shadow-lg transition-all animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-4 py-2.5 rounded-xl text-base font-medium text-pastel-text hover:bg-pastel-pink/30 hover:text-pastel-pink-deep transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onToggleMusicScroll) onToggleMusicScroll();
              }}
              className="mt-2 w-full py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold bg-pastel-pink/50 text-pastel-pink-deep"
            >
              <Music className="w-4 h-4" />
              <span>{isPlaying ? 'Now Playing ??' : 'Listen to Music ??'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
