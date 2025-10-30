import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "../i18n/i18nContext";
import type { Language } from "../types/i18n";
import "../styles/LanguageSwitcher.css";

const FlagIcon: React.FC<{ code: Language }> = ({ code }) => {
  if (code === "en") {
    return (
      <svg viewBox="0 0 60 30" className="flag-icon">
        <rect width="60" height="30" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path
          d="M0,0 L60,30 M60,0 L0,30"
          stroke="#C8102E"
          strokeWidth="4"
          strokeLinecap="square"
        />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </svg>
    );
  }

  if (code === "de") {
    return (
      <svg viewBox="0 0 60 30" className="flag-icon">
        <rect width="60" height="10" y="0" fill="#000" />
        <rect width="60" height="10" y="10" fill="#D00" />
        <rect width="60" height="10" y="20" fill="#FFCE00" />
      </svg>
    );
  }

  if (code === "uk") {
    return (
      <svg viewBox="0 0 60 30" className="flag-icon">
        <rect width="60" height="15" y="0" fill="#0057B7" />
        <rect width="60" height="15" y="15" fill="#FFD700" />
      </svg>
    );
  }

  return null;
};

const languages: { code: Language }[] = [
  { code: "en" },
  { code: "de" },
  { code: "uk" },
];

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
      >
        <FlagIcon code={language} />
        <svg
          className="arrow-icon"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
        >
          <path d="M1.41 0L6 4.58 10.59 0 12 1.41l-6 6-6-6z" fill="#4ecdc4" />
        </svg>
      </button>

      {isOpen && (
        <div className="language-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-option ${
                language === lang.code ? "active" : ""
              }`}
              onClick={() => handleSelect(lang.code)}
            >
              <FlagIcon code={lang.code} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
