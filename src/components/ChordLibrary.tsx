import React, { useState } from "react";
import { chordLibrary } from "../data/chordLibrary";
import ChordCard from "./ChordCard";
import { playChord } from "../utils/audioEngine";
import { filterChords } from "../utils/chordUtils";
import { FilterType, DifficultyLevel } from "../types/enums";
import { useTranslation } from "../i18n/i18nContext";
import "../styles/ChordLibrary.css";

const ChordLibrary: React.FC = () => {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState<string>(FilterType.ALL);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>(
    DifficultyLevel.ALL
  );
  const [searchTerm, setSearchTerm] = useState("");

  const chords = Object.values(chordLibrary);

  const filteredChords = filterChords(
    chords,
    selectedType,
    selectedDifficulty,
    searchTerm
  );

  return (
    <div className="chord-library">
      <div className="library-header">
        <h2>{t.library.title}</h2>
        <p className="subtitle">{t.library.subtitle}</p>
      </div>

      <div className="filters">
        <input
          type="text"
          className="search-input"
          placeholder={t.library.searchPlaceholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="filter-select"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value={FilterType.ALL}>{t.library.allTypes}</option>
          <option value={FilterType.MAJOR}>{t.library.major}</option>
          <option value={FilterType.MINOR}>{t.library.minor}</option>
          <option value={FilterType.SEVENTH}>{t.library.seventh}</option>
          <option value={FilterType.POWER}>{t.library.power}</option>
        </select>

        <select
          className="filter-select"
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
        >
          <option value={DifficultyLevel.ALL}>
            {t.library.allDifficulties}
          </option>
          <option value={DifficultyLevel.EASY}>{t.library.easy}</option>
          <option value={DifficultyLevel.MEDIUM}>{t.library.medium}</option>
          <option value={DifficultyLevel.HARD}>{t.library.hard}</option>
        </select>
      </div>

      <div className="chord-grid">
        {filteredChords.map((chord) => (
          <ChordCard
            key={chord.name}
            chord={chord}
            onPlay={() => playChord(chord)}
          />
        ))}
      </div>

      {filteredChords.length === 0 && (
        <div className="no-results">
          <p>{t.library.noResults}</p>
        </div>
      )}
    </div>
  );
};

export default ChordLibrary;
