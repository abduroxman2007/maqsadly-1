import React from 'react';
import { useTranslation } from '../TranslationContext';

const TimelineSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="process-timeline-section" data-animate="fade-in-up">
      <div className="process-timeline-container">
        <div data-animate="center">
          <div className="timeline-header">
            <h1 className="timeline-title">{t('process-title') || 'Admission Process'}</h1>
            <p className="timeline-subtitle">{t('process-subtitle') || 'Jahon School invites parents who are not indifferent to the future of their children to go through a quick admission process.'}</p>
          </div>
          <div className="timeline-container">
            {/* Step 1 */}
            <div className="timeline-item">
              <div className="timeline-card">
                <div className="timeline-icon">🏫</div>
                <h3 className="timeline-step">{t('timeline1-title') || '01. School Visit'}</h3>
                <p className="timeline-description">{t('timeline1-desc') || 'The Jahon School team is ready to meet parents on the school premises and answer all their questions.'}</p>
              </div>
              <div className="timeline-connector">
                <div className="connector-line"></div>
              </div>
              <div className="timeline-dot"></div>
            </div>
            {/* Step 2 */}
            <div className="timeline-item">
              <div className="timeline-card">
                <div className="timeline-icon">🎓</div>
                <h3 className="timeline-step">{t('timeline2-title') || '02. Getting to Know the School'}</h3>
                <p className="timeline-description">{t('timeline2-desc') || 'Each parent is provided with information about the school and all conditions on an individual basis. Parents get a complete picture of the school where their children will study.'}</p>
              </div>
              <div className="timeline-connector">
                <div className="connector-line"></div>
              </div>
              <div className="timeline-dot"></div>
            </div>
            {/* Step 3 */}
            <div className="timeline-item">
              <div className="timeline-card">
                <div className="timeline-icon">👥</div>
                <h3 className="timeline-step">{t('timeline3-title') || '03. Parent Meeting'}</h3>
                <p className="timeline-description">{t('timeline3-desc') || 'Members of the admissions committee conduct a conversation with parents to better understand the family and the child\'s needs.'}</p>
              </div>
              <div className="timeline-connector">
                <div className="connector-line"></div>
              </div>
              <div className="timeline-dot"></div>
            </div>
            {/* Step 4 */}
            <div className="timeline-item">
              <div className="timeline-card">
                <div className="timeline-icon">📝</div>
                <h3 className="timeline-step">{t('timeline4-title') || '04. Application Process'}</h3>
                <p className="timeline-description">{t('timeline4-desc') || 'Complete the application form and submit all required documents for the admission process to begin.'}</p>
              </div>
              <div className="timeline-connector">
                <div className="connector-line"></div>
              </div>
              <div className="timeline-dot"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection; 