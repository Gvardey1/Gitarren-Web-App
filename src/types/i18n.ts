export type Language = "en" | "de" | "uk";

export interface Translations {
  app: {
    title: string;
    tagline: string;
  };
  nav: {
    library: string;
    builder: string;
    quiz: string;
    tabs: string;
  };
  library: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allTypes: string;
    major: string;
    minor: string;
    seventh: string;
    power: string;
    other: string;
    allDifficulties: string;
    easy: string;
    medium: string;
    hard: string;
    noResults: string;
    notes: string;
    playChord: string;
  };
  builder: {
    title: string;
    subtitle: string;
    keyLabel: string;
    popularProgressions: string;
    availableChords: string;
    yourProgression: string;
    play: string;
    playing: string;
    clear: string;
    emptyProgression: string;
  };
  quiz: {
    title: string;
    score: string;
    round: string;
    whatChord: string;
    playChordHint: string;
    correctAnswer: string;
    notes: string;
    correctFeedback: string;
    wrongFeedback: string;
    nextQuestion: string;
    perfectTitle: string;
    perfectMessage: string;
    goodTitle: string;
    goodMessage: string;
    restart: string;
  };
  footer: {
    madeWith: string;
    forGuitarists: string;
    tip: string;
    faq: string;
    home: string;
  };
  progressions: {
    pop: string;
    rock: string;
    jazz: string;
    fifties: string;
    emotional: string;
  };
  keys: {
    cMajor: string;
    gMajor: string;
    dMajor: string;
    aMajor: string;
    eMajor: string;
    aMinor: string;
  };
  chordNames: {
    [key: string]: string;
  };
  tabs: {
    title: string;
    subtitle: string;
    back: string;
    viewTab: string;
  };
  faq: {
    title: string;
    subtitle: string;
    footerNote: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
}
