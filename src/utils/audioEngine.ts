import type { Chord } from "../types/chords";

/**
 * Web Audio API engine for generating guitar chord sounds
 */
class AudioEngine {
  private audioContext: AudioContext | null = null;

  private initAudioContext() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
    }
    return this.audioContext;
  }

  /**
   * Note frequencies (A4 = 440 Hz)
   */
  private noteFrequencies: Record<string, number> = {
    C: 261.63,
    "C#": 277.18,
    Db: 277.18,
    D: 293.66,
    "D#": 311.13,
    Eb: 311.13,
    E: 329.63,
    F: 349.23,
    "F#": 369.99,
    Gb: 369.99,
    G: 392.0,
    "G#": 415.3,
    Ab: 415.3,
    A: 440.0,
    "A#": 466.16,
    Bb: 466.16,
    B: 493.88,
  };

  /**
   * Play a single note with ADSR envelope
   */
  private playNote(
    frequency: number,
    startTime: number,
    duration: number = 2.0
  ) {
    const ctx = this.initAudioContext();

    // Create oscillator (tone generator)
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    // Triangle wave for softer guitar-like sound
    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(frequency, startTime);

    // ADSR Envelope for realistic sound
    gainNode.gain.setValueAtTime(0, startTime);
    gainNode.gain.linearRampToValueAtTime(0.3, startTime + 0.01); // Attack
    gainNode.gain.exponentialRampToValueAtTime(0.1, startTime + 0.2); // Decay
    gainNode.gain.exponentialRampToValueAtTime(
      0.05,
      startTime + duration - 0.1
    ); // Sustain
    gainNode.gain.linearRampToValueAtTime(0.001, startTime + duration); // Release

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start(startTime);
    oscillator.stop(startTime + duration);
  }

  /**
   * Play a short, soft UI tone sequence
   */
  private playUiTones(tones: number[], gapMs: number = 80, baseGain: number = 0.08) {
    const ctx = this.initAudioContext();
    const start = ctx.currentTime;

    tones.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, start);

      const toneStart = start + (idx * (gapMs + 140)) / 1000;
      const toneDuration = 0.14; // 140ms per tone

      // Gentle envelope
      gain.gain.setValueAtTime(0, toneStart);
      gain.gain.linearRampToValueAtTime(baseGain, toneStart + 0.02);
      gain.gain.exponentialRampToValueAtTime(Math.max(0.001, baseGain * 0.2), toneStart + toneDuration - 0.02);
      gain.gain.linearRampToValueAtTime(0.0001, toneStart + toneDuration);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(toneStart);
      osc.stop(toneStart + toneDuration);
    });
  }

  /**
   * Subtle success sound: two ascending soft beeps
   */
  public playUiSuccess(): void {
    // Ascending major third feel, light and short
    this.playUiTones([660, 880], 90, 0.06);
  }

  /**
   * Subtle error sound: two descending soft beeps
   */
  public playUiError(): void {
    // Descending minor third feel, a bit lower and softer
    this.playUiTones([392, 330], 90, 0.05);
  }

  /**
   * Play chord with all notes
   */
  public async playChord(chord: Chord, duration: number = 2.0): Promise<void> {
    const ctx = this.initAudioContext();
    const currentTime = ctx.currentTime;

    // Play each note in the chord
    chord.notes.forEach((note, index) => {
      const frequency = this.noteFrequencies[note];
      if (frequency) {
        // Slight delay between notes for strumming effect
        const strumDelay = index * 0.05;
        this.playNote(frequency, currentTime + strumDelay, duration);
      }
    });

    // Return promise that resolves after playback
    return new Promise((resolve) => {
      setTimeout(() => resolve(), duration * 1000);
    });
  }

  /**
   * Play chord as arpeggio (sequential notes)
   */
  public async playArpeggio(chord: Chord): Promise<void> {
    const ctx = this.initAudioContext();
    const currentTime = ctx.currentTime;
    const noteDelay = 0.3;

    chord.notes.forEach((note, index) => {
      const frequency = this.noteFrequencies[note];
      if (frequency) {
        this.playNote(frequency, currentTime + index * noteDelay, 0.5);
      }
    });

    return new Promise((resolve) => {
      setTimeout(
        () => resolve(),
        (chord.notes.length * noteDelay + 0.5) * 1000
      );
    });
  }

  /**
   * Play chord with fast strum effect
   */
  public playStrum(chord: Chord): void {
    const ctx = this.initAudioContext();
    const currentTime = ctx.currentTime;

    // Play with small delay between strings
    chord.notes.forEach((note, index) => {
      const frequency = this.noteFrequencies[note];
      if (frequency) {
        const strumDelay = index * 0.02; // Fast arpeggio for strum effect
        this.playNote(frequency, currentTime + strumDelay, 1.5);
      }
    });
  }
}

const audioEngine = new AudioEngine();

export const playChord = (chord: Chord, duration?: number) => {
  return audioEngine.playChord(chord, duration);
};

export const playArpeggio = (chord: Chord) => {
  return audioEngine.playArpeggio(chord);
};

export const playStrum = (chord: Chord) => {
  audioEngine.playStrum(chord);
};

export const playUiSuccess = () => {
  audioEngine.playUiSuccess();
};

export const playUiError = () => {
  audioEngine.playUiError();
};
