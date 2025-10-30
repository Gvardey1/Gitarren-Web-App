import React, { useState } from "react";
import { useTranslation } from "../i18n/i18nContext";
import "../styles/FAQ.css";

const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="faq-header">
        <h1>{t.faq.title}</h1>
        <p className="faq-subtitle">{t.faq.subtitle}</p>
      </div>

      <div className="faq-container">
        {t.faq.items.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              <span className="question-text">{item.question}</span>
              <span className="faq-icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="faq-footer-note">
        <p>{t.faq.footerNote}</p>
      </div>
    </div>
  );
};

export default FAQ;
