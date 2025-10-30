import type { Translations } from "../../types/i18n";

export const en: Translations = {
  app: {
    title: "GUITAR CHORD MASTER",
    tagline: "Learn, Practice, and Master Guitar Chords",
  },
  nav: {
    library: "Chord Library",
    builder: "Progression Builder",
    quiz: "Chord Quiz",
    tabs: "Tabs",
  },
  library: {
    title: "Chord Library",
    subtitle: "Explore and learn guitar chords",
    searchPlaceholder: "Search chords...",
    allTypes: "All Types",
    major: "Major",
    minor: "Minor",
    seventh: "7th Chords",
    power: "Power Chords",
    other: "Other",
    allDifficulties: "All Difficulties",
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
    noResults: "No chords found matching your criteria",
    notes: "Notes:",
    playChord: "Play Chord",
  },
  builder: {
    title: "Chord Progression Builder",
    subtitle: "Create chord progressions in different keys",
    keyLabel: "Key:",
    popularProgressions: "Popular Progressions",
    availableChords: "Available Chords in",
    yourProgression: "Your Progression",
    play: "Play",
    playing: "Playing...",
    clear: "Clear",
    emptyProgression: "Click chords above to build your progression",
  },
  quiz: {
    title: "Chord Recognition Quiz",
    score: "Score:",
    round: "Round:",
    whatChord: "What chord is this?",
    playChordHint: "Play Chord",
    correctAnswer: "Correct answer:",
    notes: "Notes:",
    correctFeedback: "✓ Correct! Great job!",
    wrongFeedback: "✗ Incorrect. Try again!",
    nextQuestion: "Next Question",
    perfectTitle: "🎉 Congratulations, You Won!",
    perfectMessage:
      "Perfect score! You've mastered all the chords. Keep up the great work!",
    goodTitle: "🎊 Congratulations, Great Result!",
    goodMessage: "You did well! Keep practicing and you'll master them all!",
    restart: "Play Again",
  },
  footer: {
    madeWith: "Made with",
    forGuitarists: "for guitar learners everywhere",
    tip: "💡 Tip: Use headphones for better audio experience",
    faq: "FAQ",
    home: "Home",
  },
  progressions: {
    pop: "I-V-vi-IV (Pop)",
    rock: "I-IV-V (Rock)",
    jazz: "ii-V-I (Jazz)",
    fifties: "I-vi-IV-V (50s)",
    emotional: "vi-IV-I-V (Emotional)",
  },
  keys: {
    cMajor: "C Major",
    gMajor: "G Major",
    dMajor: "D Major",
    aMajor: "A Major",
    eMajor: "E Major",
    aMinor: "A Minor",
  },
  tabs: {
    title: "Guitar Tabs",
    subtitle: "Learn your favorite songs",
    back: "Back to songs",
    viewTab: "View Tab",
  },
  chordNames: {
    C: "C Major",
    D: "D Major",
    E: "E Major",
    F: "F Major",
    G: "G Major",
    A: "A Major",
    B: "B Major",
    Am: "A Minor",
    Dm: "D Minor",
    Em: "E Minor",
    Bm: "B Minor",
    Cm: "C Minor",
    Fm: "F Minor",
    Gm: "G Minor",
    G7: "G Dominant 7th",
    C7: "C Dominant 7th",
    E7: "E Dominant 7th",
    A7: "A Dominant 7th",
    D7: "D Dominant 7th",
    B7: "B Dominant 7th",
    F7: "F Dominant 7th",
    Am7: "A Minor 7th",
    Em7: "E Minor 7th",
    Dm7: "D Minor 7th",
    Cmaj7: "C Major 7th",
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about Guitar Chord Master",
    footerNote:
      "Still have questions? The app is designed to be intuitive - just explore and have fun learning!",
    items: [
      {
        question: "How do I use the chord library?",
        answer:
          "Browse through all available chords, filter by type or difficulty, and click 'Play Chord' to hear how it sounds.",
      },
      {
        question: "What is a chord progression?",
        answer:
          "A chord progression is a series of chords played in sequence. Use the Progression Builder to create progressions in different musical keys.",
      },
      {
        question: "How does the quiz work?",
        answer:
          "The quiz shows you a chord diagram on the fretboard. Your goal is to identify which chord it is from the given options. You can use the 'Play Chord' hint to hear it.",
      },
      {
        question: "How do I read the fretboard diagram?",
        answer:
          "The fretboard shows 6 strings (E, A, D, G, B, e from top to bottom). Colored dots show where to place your fingers. ○ means open string, × means don't play that string.",
      },
      {
        question: "Can I change the language?",
        answer:
          "Yes! Use the language selector (flag dropdown) in the top right corner. Your preference will be saved automatically.",
      },
      {
        question: "Why can't I hear the chords?",
        answer:
          "Make sure your device volume is turned up and your browser has permission to play audio. The app uses Web Audio API to generate sounds in real-time.",
      },
      {
        question: "What do the difficulty levels mean?",
        answer:
          "Easy: Simple open chords for beginners. Medium: Chords with barre or more finger positions. Hard: Complex chords requiring advanced technique.",
      },
      {
        question: "How can I improve my chord recognition?",
        answer:
          "Practice regularly with the Quiz feature! Start with easy chords, listen to how they sound, and try to memorize the finger patterns. Repetition is key!",
      },
    ],
  },
};
