import React, { useState } from 'react';
import { useTranslation } from '../TranslationContext';

const FAQSection: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: 'faq-q1', a: 'faq-a1' },
    { q: 'faq-q2', a: 'faq-a2' },
    { q: 'faq-q3', a: 'faq-a3' },
    { q: 'faq-q4', a: 'faq-a4' },
    { q: 'faq-q5', a: 'faq-a5' },
    { q: 'faq-q6', a: 'faq-a6' },
  ];

  return (
    <section className="faq">
      <div className="faq-container">
        <div data-animate="center">
          <h2>{t('faq-title')}</h2>
        </div>
        <div className="faq-grid">
          <div className="faq-column">
            {faqs.slice(0, 3).map((item, idx) => (
              <div
                className={`faq-item${openIndex === idx ? ' active' : ''}`}
                data-animate="left"
                data-animate-delay={`${(idx + 1) * 100}`}
                key={item.q}
              >
                <div
                  className="faq-question"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={e => { if (e.key === 'Enter') setOpenIndex(openIndex === idx ? null : idx); }}
                >
                  <span>{t(item.q)}</span>
                  <span className="faq-icon">{openIndex === idx ? '-' : '+'}</span>
                </div>
                <div className="faq-answer" style={{ display: openIndex === idx ? 'block' : 'none' }}>
                  <p>{t(item.a)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="faq-column">
            {faqs.slice(3, 6).map((item, idx) => (
              <div
                className={`faq-item${openIndex === idx + 3 ? ' active' : ''}`}
                data-animate="right"
                data-animate-delay={`${(idx + 1) * 100}`}
                key={item.q}
              >
                <div
                  className="faq-question"
                  onClick={() => setOpenIndex(openIndex === idx + 3 ? null : idx + 3)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={e => { if (e.key === 'Enter') setOpenIndex(openIndex === idx + 3 ? null : idx + 3); }}
                >
                  <span>{t(item.q)}</span>
                  <span className="faq-icon">{openIndex === idx + 3 ? '-' : '+'}</span>
                </div>
                <div className="faq-answer" style={{ display: openIndex === idx + 3 ? 'block' : 'none' }}>
                  <p>{t(item.a)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 