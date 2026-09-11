import React, { useState } from 'react';
import FloatingHearts from './components/FloatingHearts';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ApologyLetter from './components/ApologyLetter';
import PhotoGallery from './components/PhotoGallery';
import FriendshipReasons from './components/FriendshipReasons';
import MemoryTimeline from './components/MemoryTimeline';
import MusicPlayer from './components/MusicPlayer';
import SpecialLetter from './components/SpecialLetter';
import FinalMessage from './components/FinalMessage';
import Footer from './components/Footer';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen relative bg-pastel-cream text-pastel-text overflow-x-hidden selection:bg-pastel-pink selection:text-pastel-pink-deep">
      {/* Background Floating Hearts & Sparkles */}
      <FloatingHearts />

      {/* Navigation Bar */}
      <Navbar
        isPlaying={isPlaying}
        onToggleMusicScroll={() => scrollToSection('music')}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenApology={() => scrollToSection('apology')} />
        <ApologyLetter />
        <PhotoGallery />
        <FriendshipReasons />
        <MemoryTimeline />
        <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        <SpecialLetter />
        <FinalMessage />
      </main>

      <Footer />
    </div>
  );
}
