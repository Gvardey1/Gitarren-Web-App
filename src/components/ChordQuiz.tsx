import React, { useState, useEffect } from "react";
import { chordLibrary } from "../data/chordLibrary";
import type { Chord } from "../types/chords";
import Fretboard from "./Fretboard";
import { playChord, playUiSuccess, playUiError } from "../utils/audioEngine";
import { generateQuizOptions, getRandomChord } from "../utils/chordUtils";
import { FeedbackType } from "../types/enums";
import { useTranslation } from "../i18n/i18nContext";
import "../styles/ChordQuiz.css";

const ChordQuiz: React.FC = () => {
  const { t } = useTranslation();
  const [currentChord, setCurrentChord] = useState<Chord | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  const [feedback, setFeedback] = useState<FeedbackType | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const MAX_ROUNDS = 10;
  const allChords = Object.values(chordLibrary);

  const generateQuestion = React.useCallback(() => {
    setFeedback(null);
    setShowAnswer(false);

    const randomChord = getRandomChord(allChords);
    setCurrentChord(randomChord);

    const quizOptions = generateQuizOptions(allChords, randomChord);
    setOptions(quizOptions);
  }, [allChords]);

  // no needed the useEffect here, it will be called when the component is mounted
  useEffect(() => {
    generateQuestion();
  }, []);

  const handleAnswer = (answer: string) => {
    if (!currentChord || feedback !== null) return;

    const newTotal = total + 1;
    setTotal(newTotal);

    if (answer === currentChord.name) {
      setFeedback(FeedbackType.CORRECT);
      playUiSuccess();
      setScore(score + 1);

      if (currentRound >= MAX_ROUNDS) {
        setTimeout(() => {
          setQuizFinished(true);
        }, 1500);
      } else {
        setTimeout(() => {
          setCurrentRound(currentRound + 1);
          generateQuestion();
        }, 1500);
      }
    } else {
      setFeedback(FeedbackType.WRONG);
      playUiError();
      setShowAnswer(true);
    }
  };

  const handleNext = () => {
    if (currentRound >= MAX_ROUNDS) {
      setQuizFinished(true);
    } else {
      setCurrentRound(currentRound + 1);
      generateQuestion();
    }
  };

  const handleRestart = () => {
    setScore(0);
    setTotal(0);
    setCurrentRound(1);
    setQuizFinished(false);
    setFeedback(null);
    setShowAnswer(false);
    generateQuestion();
  };

  const handlePlaySound = () => {
    if (currentChord) {
      playChord(currentChord);
    }
  };

  if (quizFinished) {
    const isPerfect = score === MAX_ROUNDS;
    return (
      <div className="chord-quiz">
        <div className="quiz-finish-screen">
          {isPerfect && (
            <>
              <div className="firework"></div>
              <div className="firework"></div>
              <div className="firework"></div>
            </>
          )}
          <div className="finish-content">
            <h2 className="finish-title">
              {isPerfect ? t.quiz.perfectTitle : t.quiz.goodTitle}
            </h2>
            <div className="finish-score">
              <span className="finish-score-value">
                {score}/{MAX_ROUNDS}
              </span>
              <span className="finish-percentage">
                {Math.round((score / MAX_ROUNDS) * 100)}%
              </span>
            </div>
            <p className="finish-message">
              {isPerfect ? t.quiz.perfectMessage : t.quiz.goodMessage}
            </p>
            <button className="restart-button" onClick={handleRestart}>
              🔄 {t.quiz.restart}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentChord) return null;

  return (
    <div className="chord-quiz">
      <div className="quiz-header">
        <h2>{t.quiz.title}</h2>
        <div className="score-display">
          <span className="score">
            {t.quiz.score} {score}/{total}
          </span>
          <span className="round-info">
            {t.quiz.round} {currentRound}/{MAX_ROUNDS}
          </span>
          <span className="percentage">
            {total > 0 ? `${Math.round((score / total) * 100)}%` : "0%"}
          </span>
        </div>
      </div>

      <div className="quiz-content">
        <div className="question-area">
          <h3>{t.quiz.whatChord}</h3>

          <div className="chord-display">
            <Fretboard fingering={currentChord.fingerings[0]} />
          </div>

          <button className="hint-button" onClick={handlePlaySound}>
            🔊 {t.quiz.playChordHint}
          </button>

          {showAnswer && (
            <div className="answer-reveal">
              <p>
                {t.quiz.correctAnswer}{" "}
                <strong>
                  {t.chordNames[currentChord.name] || currentChord.fullName}
                </strong>
              </p>
              <p className="notes-info">
                {t.quiz.notes} {currentChord.notes.join(", ")}
              </p>
            </div>
          )}
        </div>

        <div className="options-area">
          <div className="options-grid">
            {options.map((option, idx) => {
              const isCorrect = option === currentChord.name;
              const showState = feedback !== null;

              let className = "option-button";
              if (showState && isCorrect) className += " correct";
              if (showState && !isCorrect && feedback === FeedbackType.WRONG)
                className += " disabled";

              return (
                <button
                  key={idx}
                  className={className}
                  onClick={() => handleAnswer(option)}
                  disabled={feedback !== null}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {feedback === FeedbackType.CORRECT && (
            <div className="feedback correct-feedback">
              {t.quiz.correctFeedback}
            </div>
          )}

          {feedback === FeedbackType.WRONG && (
            <div className="feedback wrong-feedback">
              {t.quiz.wrongFeedback}
              <button className="next-button" onClick={handleNext}>
                {t.quiz.nextQuestion}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChordQuiz;
