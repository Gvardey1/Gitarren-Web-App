import { useState } from "react";
import ChordLibrary from "./components/ChordLibrary";
import ChordProgressionBuilder from "./components/ChordProgressionBuilder";
import ChordQuiz from "./components/ChordQuiz";
import Tabs from "./pages/Tabs";
import FAQ from "./pages/FAQ";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { useTranslation } from "./i18n/i18nContext";
import { TabType } from "./types/enums";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState<TabType>(TabType.LIBRARY);
  const { t } = useTranslation();

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-top">
          <div className="logo">
            <span className="logo-icon">🎸</span>
            <h1>{t.app.title}</h1>
          </div>
          <LanguageSwitcher />
        </div>
        <p className="tagline">{t.app.tagline}</p>
      </header>

      <nav className="navigation">
        <button
          className={`nav-button ${
            activePage === TabType.LIBRARY ? "active" : ""
          }`}
          onClick={() => setActivePage(TabType.LIBRARY)}
        >
          <span className="nav-icon">📚</span>
          {t.nav.library}
        </button>
        <button
          className={`nav-button ${
            activePage === TabType.BUILDER ? "active" : ""
          }`}
          onClick={() => setActivePage(TabType.BUILDER)}
        >
          <span className="nav-icon">🎵</span>
          {t.nav.builder}
        </button>
        <button
          className={`nav-button ${
            activePage === TabType.QUIZ ? "active" : ""
          }`}
          onClick={() => setActivePage(TabType.QUIZ)}
        >
          <span className="nav-icon">🎮</span>
          {t.nav.quiz}
        </button>
        <button
          className={`nav-button ${
            activePage === TabType.TABS ? "active" : ""
          }`}
          onClick={() => setActivePage(TabType.TABS)}
        >
          <span className="nav-icon">🎸</span>
          {t.nav.tabs}
        </button>
      </nav>

      <main className="main-content">
        {activePage === TabType.LIBRARY && <ChordLibrary />}
        {activePage === TabType.BUILDER && <ChordProgressionBuilder />}
        {activePage === TabType.QUIZ && <ChordQuiz />}
        {activePage === TabType.TABS && <Tabs />}
        {activePage === TabType.FAQ && <FAQ />}
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-links">
            <button
              className="footer-link"
              onClick={() => setActivePage(TabType.FAQ)}
            >
              <span className="link-icon">❓</span>
              {t.footer.faq}
            </button>
            <button
              className="footer-link"
              onClick={() => setActivePage(TabType.LIBRARY)}
            >
              <span className="link-icon">🏠</span>
              {t.footer.home}
            </button>
          </div>

          <div className="footer-main">
            <p className="footer-made">
              {t.footer.madeWith} <span className="heart">♥</span>{" "}
              {t.footer.forGuitarists}
            </p>
            <p className="footer-tip">{t.footer.tip}</p>
          </div>

          <div className="footer-social">
            <span className="social-icon guitar-swing">🎸</span>
            <span className="social-icon note-bounce">🎵</span>
            <span className="social-icon star-twinkle">⭐</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
