import type { Chord, Key } from "../types/chords";

export const chordLibrary: Record<string, Chord> = {
  C: {
    name: "C",
    fullName: "C Major",
    fingerings: [
      {
        frets: [-1, 3, 2, 0, 1, 0],
        fingers: [0, 3, 2, 0, 1, 0],
        baseFret: 0,
      },
    ],
    notes: ["C", "E", "G"],
    difficulty: "easy",
    type: "major",
  },
  D: {
    name: "D",
    fullName: "D Major",
    fingerings: [
      {
        frets: [-1, -1, 0, 2, 3, 2],
        fingers: [0, 0, 0, 1, 3, 2],
        baseFret: 0,
      },
    ],
    notes: ["D", "F#", "A"],
    difficulty: "easy",
    type: "major",
  },
  E: {
    name: "E",
    fullName: "E Major",
    fingerings: [
      {
        frets: [0, 2, 2, 1, 0, 0],
        fingers: [0, 2, 3, 1, 0, 0],
        baseFret: 0,
      },
    ],
    notes: ["E", "G#", "B"],
    difficulty: "easy",
    type: "major",
  },
  G: {
    name: "G",
    fullName: "G Major",
    fingerings: [
      {
        frets: [3, 2, 0, 0, 0, 3],
        fingers: [3, 2, 0, 0, 0, 4],
        baseFret: 0,
      },
    ],
    notes: ["G", "B", "D"],
    difficulty: "easy",
    type: "major",
  },
  A: {
    name: "A",
    fullName: "A Major",
    fingerings: [
      {
        frets: [-1, 0, 2, 2, 2, 0],
        fingers: [0, 0, 1, 2, 3, 0],
        baseFret: 0,
      },
    ],
    notes: ["A", "C#", "E"],
    difficulty: "easy",
    type: "major",
  },
  Am: {
    name: "Am",
    fullName: "A Minor",
    fingerings: [
      {
        frets: [-1, 0, 2, 2, 1, 0],
        fingers: [0, 0, 2, 3, 1, 0],
        baseFret: 0,
      },
    ],
    notes: ["A", "C", "E"],
    difficulty: "easy",
    type: "minor",
  },
  Dm: {
    name: "Dm",
    fullName: "D Minor",
    fingerings: [
      {
        frets: [-1, -1, 0, 2, 3, 1],
        fingers: [0, 0, 0, 2, 3, 1],
        baseFret: 0,
      },
    ],
    notes: ["D", "F", "A"],
    difficulty: "easy",
    type: "minor",
  },
  Em: {
    name: "Em",
    fullName: "E Minor",
    fingerings: [
      {
        frets: [0, 2, 2, 0, 0, 0],
        fingers: [0, 2, 3, 0, 0, 0],
        baseFret: 0,
      },
    ],
    notes: ["E", "G", "B"],
    difficulty: "easy",
    type: "minor",
  },
  F: {
    name: "F",
    fullName: "F Major",
    fingerings: [
      {
        frets: [1, 3, 3, 2, 1, 1],
        fingers: [1, 3, 4, 2, 1, 1],
        baseFret: 0,
      },
    ],
    notes: ["F", "A", "C"],
    difficulty: "medium",
    type: "major",
  },
  G7: {
    name: "G7",
    fullName: "G Dominant 7th",
    fingerings: [
      {
        frets: [3, 2, 0, 0, 0, 1],
        fingers: [3, 2, 0, 0, 0, 1],
        baseFret: 0,
      },
    ],
    notes: ["G", "B", "D", "F"],
    difficulty: "medium",
    type: "seventh",
  },
  C7: {
    name: "C7",
    fullName: "C Dominant 7th",
    fingerings: [
      {
        frets: [-1, 3, 2, 3, 1, 0],
        fingers: [0, 3, 2, 4, 1, 0],
        baseFret: 0,
      },
    ],
    notes: ["C", "E", "G", "Bb"],
    difficulty: "medium",
    type: "seventh",
  },
  E7: {
    name: "E7",
    fullName: "E Dominant 7th",
    fingerings: [
      {
        frets: [0, 2, 0, 1, 0, 0],
        fingers: [0, 2, 0, 1, 0, 0],
        baseFret: 0,
      },
    ],
    notes: ["E", "G#", "B", "D"],
    difficulty: "easy",
    type: "seventh",
  },
  A7: {
    name: "A7",
    fullName: "A Dominant 7th",
    fingerings: [
      {
        frets: [-1, 0, 2, 0, 2, 0],
        fingers: [0, 0, 2, 0, 3, 0],
        baseFret: 0,
      },
    ],
    notes: ["A", "C#", "E", "G"],
    difficulty: "easy",
    type: "seventh",
  },
  D7: {
    name: "D7",
    fullName: "D Dominant 7th",
    fingerings: [
      {
        frets: [-1, -1, 0, 2, 1, 2],
        fingers: [0, 0, 0, 2, 1, 3],
        baseFret: 0,
      },
    ],
    notes: ["D", "F#", "A", "C"],
    difficulty: "easy",
    type: "seventh",
  },
  Bm: {
    name: "Bm",
    fullName: "B Minor",
    fingerings: [
      {
        frets: [-1, 2, 4, 4, 3, 2],
        fingers: [0, 1, 3, 4, 2, 1],
        baseFret: 0,
      },
    ],
    notes: ["B", "D", "F#"],
    difficulty: "hard",
    type: "minor",
  },
  B: {
    name: "B",
    fullName: "B Major",
    fingerings: [
      {
        frets: [-1, 2, 4, 4, 4, 2],
        fingers: [0, 1, 3, 3, 3, 1],
        baseFret: 0,
      },
    ],
    notes: ["B", "D#", "F#"],
    difficulty: "hard",
    type: "major",
  },
  Cm: {
    name: "Cm",
    fullName: "C Minor",
    fingerings: [
      {
        frets: [-1, 3, 5, 5, 4, 3],
        fingers: [0, 1, 3, 4, 2, 1],
        baseFret: 0,
      },
    ],
    notes: ["C", "Eb", "G"],
    difficulty: "medium",
    type: "minor",
  },
  Fm: {
    name: "Fm",
    fullName: "F Minor",
    fingerings: [
      {
        frets: [1, 3, 3, 1, 1, 1],
        fingers: [1, 3, 4, 1, 1, 1],
        baseFret: 0,
      },
    ],
    notes: ["F", "Ab", "C"],
    difficulty: "hard",
    type: "minor",
  },
  Gm: {
    name: "Gm",
    fullName: "G Minor",
    fingerings: [
      {
        frets: [3, 5, 5, 3, 3, 3],
        fingers: [1, 3, 4, 1, 1, 1],
        baseFret: 0,
      },
    ],
    notes: ["G", "Bb", "D"],
    difficulty: "medium",
    type: "minor",
  },
  B7: {
    name: "B7",
    fullName: "B Dominant 7th",
    fingerings: [
      {
        frets: [-1, 2, 1, 2, 0, 2],
        fingers: [0, 2, 1, 3, 0, 4],
        baseFret: 0,
      },
    ],
    notes: ["B", "D#", "F#", "A"],
    difficulty: "medium",
    type: "seventh",
  },
  F7: {
    name: "F7",
    fullName: "F Dominant 7th",
    fingerings: [
      {
        frets: [1, 3, 1, 2, 1, 1],
        fingers: [1, 3, 1, 2, 1, 1],
        baseFret: 0,
      },
    ],
    notes: ["F", "A", "C", "Eb"],
    difficulty: "hard",
    type: "seventh",
  },
  Am7: {
    name: "Am7",
    fullName: "A Minor 7th",
    fingerings: [
      {
        frets: [-1, 0, 2, 0, 1, 0],
        fingers: [0, 0, 2, 0, 1, 0],
        baseFret: 0,
      },
    ],
    notes: ["A", "C", "E", "G"],
    difficulty: "easy",
    type: "seventh",
  },
  Em7: {
    name: "Em7",
    fullName: "E Minor 7th",
    fingerings: [
      {
        frets: [0, 2, 0, 0, 0, 0],
        fingers: [0, 2, 0, 0, 0, 0],
        baseFret: 0,
      },
    ],
    notes: ["E", "G", "B", "D"],
    difficulty: "easy",
    type: "seventh",
  },
  Dm7: {
    name: "Dm7",
    fullName: "D Minor 7th",
    fingerings: [
      {
        frets: [-1, -1, 0, 2, 1, 1],
        fingers: [0, 0, 0, 2, 1, 1],
        baseFret: 0,
      },
    ],
    notes: ["D", "F", "A", "C"],
    difficulty: "easy",
    type: "seventh",
  },
  Cmaj7: {
    name: "Cmaj7",
    fullName: "C Major 7th",
    fingerings: [
      {
        frets: [-1, 3, 2, 0, 0, 0],
        fingers: [0, 3, 2, 0, 0, 0],
        baseFret: 0,
      },
    ],
    notes: ["C", "E", "G", "B"],
    difficulty: "easy",
    type: "seventh",
  },
  E5: {
    name: "E5",
    fullName: "E Power Chord",
    fingerings: [
      {
        frets: [0, 2, 2, -1, -1, -1],
        fingers: [0, 2, 3, 0, 0, 0],
        baseFret: 0,
      },
    ],
    notes: ["E", "B", "E"],
    difficulty: "easy",
    type: "power",
  },
  A5: {
    name: "A5",
    fullName: "A Power Chord",
    fingerings: [
      {
        frets: [-1, 0, 2, 2, -1, -1],
        fingers: [0, 0, 2, 3, 0, 0],
        baseFret: 0,
      },
    ],
    notes: ["A", "E", "A"],
    difficulty: "easy",
    type: "power",
  },
  D5: {
    name: "D5",
    fullName: "D Power Chord",
    fingerings: [
      {
        frets: [-1, -1, 0, 2, 3, -1],
        fingers: [0, 0, 0, 2, 3, 0],
        baseFret: 0,
      },
    ],
    notes: ["D", "A", "D"],
    difficulty: "easy",
    type: "power",
  },
  C5: {
    name: "C5",
    fullName: "C Power Chord",
    fingerings: [
      {
        frets: [-1, 3, 5, 5, -1, -1],
        fingers: [0, 1, 3, 4, 0, 0],
        baseFret: 0,
      },
    ],
    notes: ["C", "G", "C"],
    difficulty: "medium",
    type: "power",
  },
  Gmaj7: {
    name: "Gmaj7",
    fullName: "G Major 7th",
    fingerings: [
      {
        frets: [3, -1, 0, 0, 0, 2],
        fingers: [3, 0, 0, 0, 0, 1],
        baseFret: 0,
      },
    ],
    notes: ["G", "B", "D", "F#"],
    difficulty: "medium",
    type: "seventh",
  },
  Fmaj7: {
    name: "Fmaj7",
    fullName: "F Major 7th",
    fingerings: [
      {
        frets: [1, 3, 3, 2, 1, 0],
        fingers: [1, 3, 4, 2, 1, 0],
        baseFret: 0,
      },
    ],
    notes: ["F", "A", "C", "E"],
    difficulty: "medium",
    type: "seventh",
  },
  C9: {
    name: "C9",
    fullName: "C Dominant 9th",
    fingerings: [
      {
        frets: [-1, 3, 2, 3, 3, 3],
        fingers: [0, 2, 1, 3, 3, 3],
        baseFret: 0,
      },
    ],
    notes: ["C", "E", "G", "Bb", "D"],
    difficulty: "hard",
    type: "seventh",
  },
  D9: {
    name: "D9",
    fullName: "D Dominant 9th",
    fingerings: [
      {
        frets: [-1, 5, 4, 5, 5, 5],
        fingers: [0, 2, 1, 3, 3, 3],
        baseFret: 0,
      },
    ],
    notes: ["D", "F#", "A", "C", "E"],
    difficulty: "hard",
    type: "seventh",
  },
};

export const keys: Record<string, Key> = {
  C: {
    name: "C Major",
    chords: ["C", "Dm", "Em", "F", "G", "Am"],
    scale: ["C", "D", "E", "F", "G", "A", "B"],
  },
  G: {
    name: "G Major",
    chords: ["G", "Am", "Bm", "C", "D", "Em"],
    scale: ["G", "A", "B", "C", "D", "E", "F#"],
  },
  D: {
    name: "D Major",
    chords: ["D", "Em", "F#m", "G", "A", "Bm"],
    scale: ["D", "E", "F#", "G", "A", "B", "C#"],
  },
  A: {
    name: "A Major",
    chords: ["A", "Bm", "C#m", "D", "E", "F#m"],
    scale: ["A", "B", "C#", "D", "E", "F#", "G#"],
  },
  E: {
    name: "E Major",
    chords: ["E", "F#m", "G#m", "A", "B", "C#m"],
    scale: ["E", "F#", "G#", "A", "B", "C#", "D#"],
  },
  Am: {
    name: "A Minor",
    chords: ["Am", "Bdim", "C", "Dm", "Em", "F", "G"],
    scale: ["A", "B", "C", "D", "E", "F", "G"],
  },
};

export const popularProgressions = [
  { name: "I-V-vi-IV (Pop)", chords: ["C", "G", "Am", "F"], key: "C" },
  { name: "I-IV-V (Rock)", chords: ["G", "C", "D"], key: "G" },
  { name: "ii-V-I (Jazz)", chords: ["Dm", "G7", "C"], key: "C" },
  { name: "I-vi-IV-V (50s)", chords: ["C", "Am", "F", "G"], key: "C" },
  { name: "vi-IV-I-V (Emotional)", chords: ["Am", "F", "C", "G"], key: "C" },
];
