import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Music2,
  ListMusic
} from 'lucide-react';
import { songsData } from '../data/content';

export default function MusicPlayer({ isPlaying, setIsPlaying }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const currentSong = songsData[currentTrackIndex] || songsData[0];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Audio playback was prevented:", err);
        });
    }
  };

  const playTrack = (index) => {
    setCurrentTrackIndex(index);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        if (isPlaying) {
          audioRef.current.play().catch(() => {});
        }
      }
    }, 50);
  };

  const handleNext = () => {
    const nextIdx = (currentTrackIndex + 1) % songsData.length;
    playTrack(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (currentTrackIndex - 1 + songsData.length) % songsData.length;
    playTrack(prevIdx);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleSeek = (e) => {
    const seekTime = Number(e.target.value);
    setCurrentTime(seekTime);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  };

  const handleTrackEnded = () => {
    handleNext();
  };

  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds) || timeInSeconds === 0) return '0:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <section id="music" className="py-20 px-4 sm:px-6 relative scroll-mt-20">
      {/* Hidden Audio Tag (Strictly NO AUTOPLAY) */}
      <audio
        ref={audioRef}
        src={currentSong.src}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleTrackEnded}
      />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pastel-lavender/60 text-purple-700 text-xs font-semibold mb-3">
            <Music2 className="w-3.5 h-3.5" />
            <span>Soundtrack To Our Friendship</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-pastel-text mb-4">
            A Little Music For You ??
          </h2>
          <p className="text-pastel-text-muted text-base sm:text-lg font-light">
            Press play to listen to a soothing soundtrack while reading. (Never auto-plays)
          </p>
        </div>

        {/* Music Player Glass Container */}
        <div className="bg-white/85 backdrop-blur-xl border border-rose-100 rounded-3xl p-6 sm:p-10 shadow-letter relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-60 h-60 bg-pastel-pink/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-pastel-lavender/30 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: Vinyl / Album Art */}
            <div className="md:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-2 bg-gradient-to-tr from-pastel-pink to-pastel-lavender shadow-xl flex items-center justify-center">
                <div
                  className={`relative w-full h-full rounded-full bg-stone-900 overflow-hidden border-4 border-stone-800 flex items-center justify-center shadow-inner ${
                    isPlaying ? 'animate-spin-slow' : ''
                  }`}
                >
                  <div className="absolute inset-4 rounded-full border border-stone-700/50 pointer-events-none" />
                  <div className="absolute inset-8 rounded-full border border-stone-700/40 pointer-events-none" />
                  <div className="absolute inset-12 rounded-full border border-stone-700/30 pointer-events-none" />

                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white shadow-md relative">
                    <img
                      src={currentSong.cover || '/photos/photo1.jpg'}
                      alt={currentSong.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80';
                      }}
                    />
                    <div className="absolute inset-0 m-auto w-4 h-4 rounded-full bg-white border border-stone-800 shadow" />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-pastel-text-muted font-medium">
                <span
                  className={`w-2 h-2 rounded-full ${
                    isPlaying ? 'bg-emerald-400 animate-ping' : 'bg-pastel-pink-dark'
                  }`}
                />
                <span>{isPlaying ? 'Playing gentle melody...' : 'Paused (Click play to listen)'}</span>
              </div>
            </div>

            {/* Right: Controls & Playlist */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-pastel-pink-deep font-bold">
                  Now Playing
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-pastel-text mt-1 truncate">
                  {currentSong.title}
                </h3>
                <p className="text-pastel-text-muted text-sm mt-0.5">
                  {currentSong.artist}
                </p>
              </div>

              <div className="space-y-1.5">
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  value={currentTime}
                  onChange={handleSeek}
                  aria-label="Audio Progress Bar"
                  className="w-full h-2 bg-pastel-pink/30 rounded-lg appearance-none cursor-pointer accent-pastel-pink-deep"
                />
                <div className="flex justify-between text-xs text-pastel-text-muted font-mono">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2 text-pastel-text-muted">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-full hover:bg-pastel-pink/20 transition-colors text-pastel-text"
                    aria-label="Mute / Unmute"
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX className="w-4 h-4 text-rose-500" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => {
                      setVolume(parseFloat(e.target.value));
                      setIsMuted(false);
                    }}
                    aria-label="Volume"
                    className="w-16 sm:w-20 h-1.5 bg-pastel-pink/30 rounded-lg appearance-none cursor-pointer accent-pastel-pink-deep"
                  />
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 rounded-full bg-pastel-card hover:bg-pastel-pink/30 text-pastel-text transition-colors border border-rose-100"
                    aria-label="Previous Track"
                  >
                    <SkipBack className="w-5 h-5" />
                  </button>

                  <button
                    onClick={togglePlay}
                    className="p-4 rounded-full bg-gradient-to-r from-pastel-pink-dark to-pastel-pink-deep text-white shadow-md hover:shadow-glow hover:scale-105 active:scale-95 transition-all duration-200"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 fill-white" />
                    ) : (
                      <Play className="w-6 h-6 fill-white translate-x-0.5" />
                    )}
                  </button>

                  <button
                    onClick={handleNext}
                    className="p-2.5 rounded-full bg-pastel-card hover:bg-pastel-pink/30 text-pastel-text transition-colors border border-rose-100"
                    aria-label="Next Track"
                  >
                    <SkipForward className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-rose-100">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-pastel-text-muted mb-3 uppercase tracking-wider">
                  <ListMusic className="w-3.5 h-3.5" />
                  <span>Playlist</span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {songsData.map((song, index) => {
                    const isCurrent = index === currentTrackIndex;
                    return (
                      <button
                        key={song.id || index}
                        onClick={() => playTrack(index)}
                        className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all ${
                          isCurrent
                            ? 'bg-pastel-pink/40 border border-pastel-pink-dark/50 text-pastel-pink-deep font-medium'
                            : 'hover:bg-pastel-pink/15 text-pastel-text border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-3 truncate">
                          <span className="text-xs font-mono text-pastel-text-muted">
                            {index + 1}.
                          </span>
                          <span className="text-sm truncate">{song.title}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-pastel-text-muted flex-shrink-0">
                          {isCurrent && isPlaying && (
                            <span className="text-pastel-pink-deep font-semibold text-xs animate-pulse">
                              Playing ??
                            </span>
                          )}
                          <span>{song.duration}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
