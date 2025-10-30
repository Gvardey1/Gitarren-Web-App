import React from "react";
import type { ChordFingering } from "../types/chords";
import { STRINGS, VISIBLE_FRETS } from "../types/chords";
import { getFingerColor } from "../utils/chordUtils";
import "../styles/Fretboard.css";

interface FretboardProps {
  fingering: ChordFingering;
  highlightedString?: number;
  highlightedFret?: number;
}

const Fretboard: React.FC<FretboardProps> = ({
  fingering,
  highlightedString,
  highlightedFret,
}) => {
  const { frets, fingers, baseFret } = fingering;
  const startFret = baseFret;

  return (
    <div className="fretboard-container">
      <div className="fretboard">
        {/* String names */}
        <div className="string-names">
          {STRINGS.map((string, idx) => (
            <div key={idx} className="string-name">
              {string}
            </div>
          ))}
        </div>

        {/* Fretboard grid */}
        <div className="fret-area">
          {/* Open strings / muted markers */}
          <div className="open-strings">
            {frets.map((fret, stringIdx) => (
              <div key={stringIdx} className="string-position">
                {fret === 0 && <div className="open-marker">○</div>}
                {fret === -1 && <div className="muted-marker">×</div>}
              </div>
            ))}
          </div>

          {/* Frets grid */}
          <div className="frets-grid">
            {STRINGS.map((_, stringIdx) => (
              <div key={stringIdx} className="string-line">
                {Array.from({ length: VISIBLE_FRETS }).map((_, fretIdx) => {
                  const actualFret = startFret + fretIdx + 1;
                  const isPressed = frets[stringIdx] === actualFret;
                  const finger = isPressed ? fingers[stringIdx] : 0;
                  const isHighlighted =
                    highlightedString === stringIdx &&
                    highlightedFret === actualFret;

                  return (
                    <div
                      key={fretIdx}
                      className={`fret-cell ${
                        isHighlighted ? "highlighted" : ""
                      }`}
                    >
                      {isPressed && (
                        <div
                          className="finger-dot"
                          style={{ backgroundColor: getFingerColor(finger) }}
                        >
                          {finger > 0 && finger}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Fret markers (dots at 3, 5, 7, 9, 12) */}
        <div className="fret-markers">
          {Array.from({ length: VISIBLE_FRETS }).map((_, idx) => {
            const fretNum = startFret + idx + 1;
            const showMarker = [3, 5, 7, 9].includes(fretNum);
            const showDouble = fretNum === 12;

            return (
              <div key={idx} className="marker-position">
                {showMarker && <div className="fret-marker-dot" />}
                {showDouble && <div className="fret-marker-dot" />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Fretboard;
