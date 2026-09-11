const fs = require('fs');
const path = require('path');

function createWavTrack(filepath, chordNotes, tempo = 60, totalSeconds = 25) {
  const sampleRate = 22050;
  const numChannels = 2;
  const bytesPerSample = 2;
  const totalSamples = sampleRate * totalSeconds;
  const buffer = Buffer.alloc(44 + totalSamples * numChannels * bytesPerSample);

  // RIFF header
  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + totalSamples * numChannels * bytesPerSample, 4);
  buffer.write('WAVE', 8);
  buffer.write('fmt ', 12);
  buffer.writeUInt32LE(16, 16); // Subchunk1Size
  buffer.writeUInt16LE(1, 20);  // PCM format
  buffer.writeUInt16LE(numChannels, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(sampleRate * numChannels * bytesPerSample, 28);
  buffer.writeUInt16LE(numChannels * bytesPerSample, 32);
  buffer.writeUInt16LE(bytesPerSample * 8, 34);
  buffer.write('data', 36);
  buffer.writeUInt32LE(totalSamples * numChannels * bytesPerSample, 40);

  let offset = 44;
  const chordDuration = 4; // seconds per chord

  for (let i = 0; i < totalSamples; i++) {
    const t = i / sampleRate;
    const currentChordIdx = Math.floor(t / chordDuration) % chordNotes.length;
    const chord = chordNotes[currentChordIdx];
    const chordTime = t % chordDuration;
    
    // Envelope
    const attack = 0.4;
    const decay = 0.5;
    let env = 1;
    if (chordTime < attack) {
      env = chordTime / attack;
    } else {
      env = Math.max(0.1, 1 - (chordTime - attack) / (chordDuration - attack) * decay);
    }
    
    // Fade out at end of track
    if (t > totalSeconds - 2) {
      env *= (totalSeconds - t) / 2;
    }

    let left = 0;
    let right = 0;

    for (let f = 0; f < chord.length; f++) {
      const freq = chord[f];
      // Fundamental + gentle warm overtones
      const tone = Math.sin(2 * Math.PI * freq * t) * 0.5
                 + Math.sin(2 * Math.PI * freq * 2 * t) * 0.25
                 + Math.sin(2 * Math.PI * freq * 3 * t) * 0.1;
      
      // Gentle stereo spread
      left += tone * (f % 2 === 0 ? 0.7 : 0.4);
      right += tone * (f % 2 === 1 ? 0.7 : 0.4);
    }

    // Add very soft ambient breath
    const breath = (Math.random() * 2 - 1) * 0.01;
    left = Math.max(-1, Math.min(1, (left * 0.28 * env) + breath));
    right = Math.max(-1, Math.min(1, (right * 0.28 * env) + breath));

    buffer.writeInt16LE(Math.floor(left * 32767), offset);
    buffer.writeInt16LE(Math.floor(right * 32767), offset + 2);
    offset += 4;
  }

  fs.writeFileSync(filepath, buffer);
  console.log('Created audio:', filepath);
}

// Track 1: Cmaj7 -> Am7 -> Fmaj7 -> Gsus4 (Peaceful nostalgic chords)
const track1Chords = [
  [261.63, 329.63, 392.00, 493.88], // Cmaj7
  [220.00, 261.63, 329.63, 392.00], // Am7
  [174.61, 261.63, 329.63, 349.23], // Fmaj7
  [196.00, 261.63, 293.66, 392.00]  // Gsus4
];

// Track 2: Dm9 -> G13 -> Cmaj9 -> A7 (Warm lofi vibe)
const track2Chords = [
  [293.66, 349.23, 440.00, 523.25], 
  [196.00, 246.94, 329.63, 392.00],
  [261.63, 329.63, 392.00, 493.88],
  [220.00, 277.18, 329.63, 392.00]
];

// Track 3: Fmaj7 -> Em7 -> Dm7 -> Cmaj7 (Gentle walkdown)
const track3Chords = [
  [349.23, 440.00, 523.25, 659.25],
  [329.63, 392.00, 493.88, 587.33],
  [293.66, 349.23, 440.00, 523.25],
  [261.63, 329.63, 392.00, 493.88]
];

const songsDir = path.join(__dirname, 'public', 'songs');
createWavTrack(path.join(songsDir, 'song1.mp3'), track1Chords, 55, 20);
createWavTrack(path.join(songsDir, 'song2.mp3'), track2Chords, 55, 20);
createWavTrack(path.join(songsDir, 'song3.mp3'), track3Chords, 55, 20);
