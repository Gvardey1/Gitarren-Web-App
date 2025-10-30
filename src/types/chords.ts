export interface ChordFingering {
  frets: number[]; // -1 = not played, 0 = open string, 1-12 = fret number
  fingers: number[]; // 0 = not used, 1-4 = finger numbers
  baseFret: number;
}

export interface Chord {
  name: string;
  fullName: string;
  fingerings: ChordFingering[];
  notes: string[];
  difficulty: "easy" | "medium" | "hard";
  type: "major" | "minor" | "seventh" | "power" | "other";
}

export interface Key {
  name: string;
  chords: string[];
  scale: string[];
}

export const STRINGS = ["E", "A", "D", "G", "B", "e"];
export const NUM_FRETS = 15;
export const VISIBLE_FRETS = 5;
