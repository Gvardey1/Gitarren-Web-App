import type { Chord } from "../types/chords";

/**
 * Returns color based on difficulty level
 */
export const getDifficultyColor = (difficulty: string): string => {
  switch (difficulty) {
    case "easy":
      return "#4ecdc4";
    case "medium":
      return "#f9ca24";
    case "hard":
      return "#ff6b6b";
    default:
      return "#95a5a6";
  }
};

/**
 * Returns color for finger position visualization
 */
export const getFingerColor = (finger: number): string => {
  const colors = ["#666", "#ff6b6b", "#4ecdc4", "#45b7d1", "#f9ca24"];
  return colors[finger] || "#666";
};

/**
 * Filters chords based on type, difficulty, and search term
 */
export const filterChords = (
  chords: Chord[],
  type: string,
  difficulty: string,
  searchTerm: string
): Chord[] => {
  return chords.filter((chord) => {
    const matchesType = type === "all" || chord.type === type;
    const matchesDifficulty =
      difficulty === "all" || chord.difficulty === difficulty;
    const matchesSearch =
      chord.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chord.fullName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesDifficulty && matchesSearch;
  });
};

/**
 * Generates random chord options for quiz
 */
export const generateQuizOptions = (
  allChords: Chord[],
  correctChord: Chord,
  optionsCount: number = 3
): string[] => {
  const wrongAnswers = allChords
    .filter((c) => c.name !== correctChord.name)
    .sort(() => Math.random() - 0.5)
    .slice(0, optionsCount)
    .map((c) => c.name);

  const allOptions = [correctChord.name, ...wrongAnswers].sort(
    () => Math.random() - 0.5
  );

  return allOptions;
};

/**
 * Returns random chord from array
 */
export const getRandomChord = (chords: Chord[]): Chord => {
  return chords[Math.floor(Math.random() * chords.length)];
};


