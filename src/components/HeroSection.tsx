import React from 'react';
import { Globe } from './ui/globe';
import { useTranslation } from '../TranslationContext';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-left" data-animate="left">
          <h1 dangerouslySetInnerHTML={{ __html: t('hero-title') }} />
          <div data-animate="left">
            <p>{t('hero-subtitle')}</p>
          </div>
          <div className="hero-buttons" data-animate="left">
            <button className="cta-button primary">{t('start-now')}</button>
            <button className="cta-button secondary">{t('watch-how')}</button>
          </div>
          <div className="trust-badge" data-animate="left">
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