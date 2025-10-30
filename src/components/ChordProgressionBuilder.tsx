import React, { useState } from "react";
import { chordLibrary, keys, popularProgressions } from "../data/chordLibrary";
import { playChord } from "../utils/audioEngine";
import { useTranslation } from "../i18n/i18nContext";
import "../styles/ChordProgressionBuilder.css";

const ChordProgressionBuilder: React.FC = () => {
  const { t } = useTranslation();
  const [selectedKey, setSelectedKey] = useState("C");
  const [progression, setProgression] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const availableChords =
    keys[selectedKey]?.chords.filter((c) => chordLibrary[c]) || [];

  const addChord = (chordName: string) => {
    setProgression([...progression, chordName]);
  };

  const removeChord = (index: number) => {
    setProgression(progression.filter((_, i) => i !== index));
  };

  const clearProgression = () => {
    setProgression([]);
  };

  const loadProgression = (chords: string[]) => {
    setProgression(chords);
  };

  const playProgression = async () => {
    if (isPlaying || progression.length === 0) return;

    setIsPlaying(true);
    for (let i = 0; i < progression.length; i++) {
      const chord = chordLibrary[progression[i]];
      if (chord) {
        await playChord(chord);
        await new Promise((resolve) => setTimeout(resolve, 10));
      }
    }
    setIsPlaying(false);
  };

  const getProgressionName = (name: string) => {
    if (name.includes("Pop")) return t.progressions.pop;
    if (name.includes("Rock")) return t.progressions.rock;
    if (name.includes("Jazz")) return t.progressions.jazz;
    if (name.includes("50s")) return t.progressions.fifties;
    if (name.includes("Emotional")) return t.progressions.emotional;
    return name;
  };

  const getKeyName = (key: string) => {
    const keyMap: Record<string, keyof typeof t.keys> = {
      C: "cMajor",
      G: "gMajor",
      D: "dMajor",
      A: "aMajor",
      E: "eMajor",
      Am: "aMinor",
    };
    return t.keys[keyMap[key]] || keys[key].name;
  };

  return (
    <div className="progression-builder">
      <div className="builder-header">
        <h2>{t.builder.title}</h2>
        <p className="subtitle">{t.builder.subtitle}</p>
      </div>

      <div className="key-selector">
        <label>{t.builder.keyLabel}</label>
        <select
          value={selectedKey}
          onChange={(e) => {
            setSelectedKey(e.target.value);
            setProgression([]);
          }}
          className="key-select"
        >
          {Object.keys(keys).map((key) => (
            <option key={key} value={key}>
              {getKeyName(key)}
            </option>
          ))}
        </select>
      </div>

      <div className="popular-progressions">
        <h3>{t.builder.popularProgressions}</h3>
        <div className="progression-presets">
          {popularProgressions
            .filter((p) => p.key === selectedKey)
            .map((preset, idx) => (
              <button
                key={idx}
                className="preset-button"
                onClick={() => loadProgression(preset.chords)}
              >
                {getProgressionName(preset.name)}
                <div className="preset-chords">{preset.chords.join(" - ")}</div>
              </button>
            ))}
        </div>
      </div>

      <div className="chord-palette">
        <h3>
          {t.builder.availableChords} {getKeyName(selectedKey)}
        </h3>
        <div className="chord-buttons">
          {availableChords.map((chordName) => {
            const chord = chordLibrary[chordName];
            if (!chord) return null;

            return (
              <button
                key={chordName}
                className="chord-button"
                onClick={() => addChord(chordName)}
              >
                <span className="chord-button-name">{chordName}</span>
                <span className="chord-button-type">
                  {chord.type === "major"
                    ? t.library.major
                    : chord.type === "minor"
                    ? t.library.minor
                    : chord.type === "seventh"
                    ? t.library.seventh
                    : chord.type === "power"
                    ? t.library.power
                    : t.library.other}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="progression-area">
        <div className="progression-header">
          <h3>{t.builder.yourProgression}</h3>
          <div className="progression-controls">
            <button
              className="control-button play"
              onClick={playProgression}
              disabled={isPlaying || progression.length === 0}
            >
              {isPlaying ? `⏸ ${t.builder.playing}` : `▶ ${t.builder.play}`}
            </button>
            <button
              className="control-button clear"
              onClick={clearProgression}
              disabled={progression.length === 0}
            >
              {t.builder.clear}
            </button>
          </div>
        </div>

        <div className="progression-slots">
          {progression.length === 0 ? (
            <div className="empty-progression">
              {t.builder.emptyProgression}
            </div>
          ) : (
            progression.map((chordName, index) => (
              <div key={index} className="progression-slot">
                <span className="slot-number">{index + 1}</span>
                <span className="slot-chord">{chordName}</span>
                <button
                  className="remove-button"
                  onClick={() => removeChord(index)}
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ChordProgressionBuilder;
