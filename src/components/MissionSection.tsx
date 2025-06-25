import React from 'react';
import { useTranslation } from '../TranslationContext';

const MissionSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="mission-section" data-animate="fade-in-up">
      <div className="mission-container">
        <div className="mission-left" data-animate="left">
          <h2>{t('mission-title')}</h2>
          <div data-animate="left">
            <p>{t('mission-description')}</p>
          </div>
        </div>
        <div className="mission-right" data-animate="right">
          <img
            src="https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?auto=format&fit=facearea&w=600&q=80"
            alt="Mission"
            className="mission-image"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionSection; 