import React from 'react';
import { useTranslation } from '../TranslationContext';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="about" data-animate="fade-in-up">
      <div className="about-container">
        <div className="about-header" data-animate="center">
          <h2>{t('about-title')}</h2>
          <p>{t('about-subtitle')}</p>
        </div>
        <div className="about-content">
          <div className="about-text" data-animate="left">
            <p>{t('about-description')}</p>
            <h3>{t('who-for-title')}</h3>
            <ul>
              <li>{t('for-item1')}</li>
              <li>{t('for-item2')}</li>
              <li>{t('for-item3')}</li>
              <li>{t('for-item4')}</li>
            </ul>
          </div>
          <div className="about-form" data-animate="right">
            <h3>{t('get-started')}</h3>
            <form>
              <input type="text" placeholder={t('name-placeholder')} required />
              <input type="tel" placeholder={t('phone-placeholder')} required />
              <button type="submit">{t('start-journey')}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 