import React from "react";
import type { Chord } from "../types/chords";
import Fretboard from "./Fretboard";
import { getDifficultyColor } from "../utils/chordUtils";
import { useTranslation } from "../i18n/i18nContext";
import "../styles/ChordCard.css";

interface ChordCardProps {
  chord: Chord;
  onClick?: () => void;
  isSelected?: boolean;
  showPlayButton?: boolean;
  onPlay?: () => void;
}

const ChordCard: React.FC<ChordCardProps> = ({
  chord,
  onClick,
  isSelected,
  showPlayButton = true,
  onPlay,
}) => {
  const { t } = useTranslation();

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onPlay) onPlay();
  };

  return (
    <div
      className={`chord-card ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <div className="chord-header">
        <div>
          <h3 className="chord-name">{chord.name}</h3>
          <p className="chord-full-name">
            {t.chordNames[chord.name] || chord.fullName}
          </p>
        </div>
        <div
          className="difficulty-badge"
          style={{ backgroundColor: getDifficultyColor(chord.difficulty) }}
        >
          {t.library[chord.difficulty]}
        </div>
      </div>

      <div className="chord-notes">
        <span className="notes-label">{t.library.notes}</span>
        {chord.notes.map((note, idx) => (
          <span key={idx} className="note-badge">
            {note}
          </span>
        ))}
      </div>

      <Fretboard fingering={chord.fingerings[0]} />

      {showPlayButton && (
        <button className="play-button" onClick={handlePlay}>
          <span className="play-icon">♪</span> {t.library.playChord}
        </button>
      )}
    </div>
  );
};

export default ChordCard;
