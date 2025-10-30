import React from "react";
import type { TabNote } from "../data/songs";
import "../styles/TabDisplay.css";

interface TabDisplayProps {
  notes: TabNote[];
}

const TabDisplay: React.FC<TabDisplayProps> = ({ notes }) => {
  const strings = ["e", "B", "G", "D", "A", "E"];

  // Sort notes by order to show them sequentially
  const sortedNotes = [...notes].sort((a, b) => a.order - b.order);

  // Group notes into chunks of 20
  const chunkSize = 20;
  const noteChunks = [];
  for (let i = 0; i < sortedNotes.length; i += chunkSize) {
    noteChunks.push(sortedNotes.slice(i, i + chunkSize));
  }

  return (
    <div className="tab-card-wrapper">
      <div className="tab-display-scroll">
        {noteChunks.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="tab-tablature" style={{ marginBottom: chunkIndex < noteChunks.length - 1 ? '20px' : '0' }}>
            {/* String names */}
            <div className="tab-string-labels">
              {strings.map((str, idx) => (
                <div key={idx} className="tab-string-label">
                  {str}
                </div>
              ))}
            </div>

            {/* Tablature lines with notes */}
            <div className="tab-lines">
              {strings.map((_, stringIdx) => (
                <div key={stringIdx} className="tab-line">
                  <div className="tab-line-bg" />
                  <div className="tab-notes-row">
                    {chunk.map((note) => {
                      // Invert string index (0 = e string, 5 = E string)
                      const displayString = 5 - note.string;
                      if (displayString === stringIdx) {
                        return (
                          <div key={note.order} className="tab-note-position">
                            <span className="tab-fret-number">{note.fret}</span>
                          </div>
                        );
                      }
                      return (
                        <div
                          key={note.order}
                          className="tab-note-position tab-empty"
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabDisplay;
