import React, { useState } from "react";
import { songs, type Song } from "../data/songs";
import TabDisplay from "../components/TabDisplay";
import { useTranslation } from "../i18n/i18nContext";
import { getDifficultyColor } from "../utils/chordUtils";
import "../styles/Tabs.css";

const Tabs: React.FC = () => {
  const { t } = useTranslation();
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);

  const handleSongSelect = (song: Song) => {
    setSelectedSong(song);
  };

  const handleBack = () => {
    setSelectedSong(null);
  };

  if (selectedSong) {
    return (
      <div className="tabs-page">
        <div className="tabs-header">
          <button className="back-button" onClick={handleBack}>
            ← {t.tabs.back}
          </button>
          <div className="song-header-info">
            <h2 className="song-title">
              {selectedSong.artist} - {selectedSong.title}
            </h2>
            <span
              className="difficulty-badge"
              style={{
                backgroundColor: getDifficultyColor(selectedSong.difficulty),
              }}
            >
              {t.library[selectedSong.difficulty]}
            </span>
          </div>
        </div>
        <TabDisplay notes={selectedSong.notes} />
      </div>
    );
  }

  return (
    <div className="tabs-page">
      <div className="tabs-page-header">
        <h2>{t.tabs.title}</h2>
        <p>{t.tabs.subtitle}</p>
      </div>

      <div className="songs-grid">
        {songs.map((song) => (
          <div
            key={song.id}
            className="song-card"
            onClick={() => handleSongSelect(song)}
          >
            <h3>{song.title}</h3>
            <p className="song-artist">{song.artist}</p>
            <div className="song-footer">
              <span
                className="difficulty-badge"
                style={{ backgroundColor: getDifficultyColor(song.difficulty) }}
              >
                {t.library[song.difficulty]}
              </span>
              <span className="view-tab-btn">🎸 {t.tabs.viewTab}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
