import React from 'react';
import { Globe } from './ui/globe';
import { useTranslation } from '../TranslationContext';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className="hero">
      <div className="nav-container hero-container">
        <div className="hero-left">
          <h1 data-animate="fade-in-up" dangerouslySetInnerHTML={{ __html: t('hero-title') }} />
          <div data-animate="fade-in-up" data-animate-delay="200">
            <p>{t('hero-subtitle')}</p>
          </div>
          <div className="hero-buttons" data-animate="fade-in-up" data-animate-delay="400">
            <button className="cta-button primary">{t('start-now')}</button>
            <button className="cta-button secondary">{t('watch-how')}</button>
          </div>
          <div className="trust-badge" data-animate="fade-in-up" data-animate-delay="600">
            <span className="trust-badge-icon">✓</span>
            <span>{t('trust-badge')}</span>
          </div>
        </div>
        <div className="hero-right" data-animate="right" style={{ marginTop: "-600px" }}>
          <Globe />
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 