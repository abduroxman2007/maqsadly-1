import React from 'react';
import { useTranslation } from '../TranslationContext';

const WhyDifferentSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="why-different-section">
      <div className="why-different-container">
        <div data-animate="center">
          <h2>{t('why-different-title')}</h2>
        </div>
        <div className="why-different-cards">
          {/* Card 1 */}
          <div className="why-card" data-animate="left" data-animate-delay="100">
            <img src="/assets/svg/Frame_2087326401.svg" alt="Frame" className="why-card-bg why-card-bg-light" />
            <img src="/assets/svg/Frame_2087326401_dark.svg" alt="Frame" className="why-card-bg why-card-bg-dark" />
            <div className="why-card-content" data-animate="left">
              <span className="why-card-icon">
                {/* SVG icon as image for now */}
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gold-gradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#b88746" />
                      <stop offset="100%" stopColor="#fdf5a6" />
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </span>
              <div data-animate="left">
                <div className="why-card-title">{t('why-card1-title')}</div>
                <div className="why-card-desc">{t('why-card1-desc')}</div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="why-card" data-animate="right" data-animate-delay="200">
            <img src="/assets/svg/Frame_2087326401.svg" alt="Frame" className="why-card-bg why-card-bg-light" />
            <img src="/assets/svg/Frame_2087326401_dark.svg" alt="Frame" className="why-card-bg why-card-bg-dark" />
            <div className="why-card-content">
              <span className="why-card-icon">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gold-gradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#b88746" />
                      <stop offset="100%" stopColor="#fdf5a6" />
                    </linearGradient>
                  </defs>
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </span>
              <div className="why-card-title">{t('why-card2-title')}</div>
              <div className="why-card-desc">{t('why-card2-desc')}</div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="why-card" data-animate="left" data-animate-delay="300">
            <img src="/assets/svg/Frame_2087326401.svg" alt="Frame" className="why-card-bg why-card-bg-light" />
            <img src="/assets/svg/Frame_2087326401_dark.svg" alt="Frame" className="why-card-bg why-card-bg-dark" />
            <div className="why-card-content">
              <span className="why-card-icon">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gold-gradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#b88746" />
                      <stop offset="100%" stopColor="#fdf5a6" />
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
                </svg>
              </span>
              <div className="why-card-title">{t('why-card3-title')}</div>
              <div className="why-card-desc">{t('why-card3-desc')}</div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="why-card" data-animate="right" data-animate-delay="400">
            <img src="/assets/svg/Frame_2087326401.svg" alt="Frame" className="why-card-bg why-card-bg-light" />
            <img src="/assets/svg/Frame_2087326401_dark.svg" alt="Frame" className="why-card-bg why-card-bg-dark" />
            <div className="why-card-content">
              <span className="why-card-icon">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gold-gradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#b88746" />
                      <stop offset="100%" stopColor="#fdf5a6" />
                    </linearGradient>
                  </defs>
                  <path d="M2 7v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7" />
                  <path d="M16 3v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3" />
                  <line x1="8" y1="21" x2="8" y2="3" />
                  <line x1="16" y1="21" x2="16" y2="3" />
                </svg>
              </span>
              <div className="why-card-title">{t('why-card4-title')}</div>
              <div className="why-card-desc">{t('why-card4-desc')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection; 