import React from 'react';
import { useTranslation } from '../TranslationContext';

const TeachersSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="teachers" className="teachers">
      <div className="teachers-container">
        <div data-animate="center">
          <h2>{t('teachers-title')}</h2>
        </div>
        <div className="teacher-list">
          {/* Teacher 1 */}
          <div className="teacher-item" data-animate="card" data-animate-delay="100">
            <div className="teacher-image">
              <img src="/assets/img/OlimjonUvayzov.JPG" alt="Olimjon Uvayzov" />
            </div>
            <div className="teacher-info">
              <h3>{t('teacher1-name')}</h3>
              <p className="teacher-title">{t('teacher1-title')}</p>
              <p className="teacher-description" dangerouslySetInnerHTML={{ __html: t('teacher1-description') }} />
              <div className="teacher-achievements">
                <span className="achievement">{t('teacher1-achievement1')}</span>
                <span className="achievement">{t('teacher1-achievement2')}</span>
                <span className="achievement">{t('teacher1-achievement3')}</span>
              </div>
            </div>
          </div>
          {/* Teacher 2 */}
          <div className="teacher-item" data-animate="card" data-animate-delay="200">
            <div className="teacher-info">
              <h3>{t('teacher2-name')}</h3>
              <p className="teacher-title">{t('teacher2-title')}</p>
              <p className="teacher-description" dangerouslySetInnerHTML={{ __html: t('teacher2-description') }} />
              <div className="teacher-achievements">
                <span className="achievement">{t('teacher2-achievement1')}</span>
                <span className="achievement">{t('teacher2-achievement2')}</span>
                <span className="achievement">{t('teacher2-achievement3')}</span>
              </div>
            </div>
            <div className="teacher-image">
              <img src="/assets/img/AlijonovAzizbek.JPG" alt="Azizbek Alijonov" />
            </div>
          </div>
          {/* Teacher 3 */}
          <div className="teacher-item" data-animate="card" data-animate-delay="300">
            <div className="teacher-image">
              <img src="/assets/img/IMG_0913.PNG" alt="Eldor Khamraev" />
            </div>
            <div className="teacher-info">
              <h3>{t('teacher3-name')}</h3>
              <p className="teacher-title">{t('teacher3-title')}</p>
              <p
                className="teacher-description"
                dangerouslySetInnerHTML={{ __html: t('teacher3-description') }}
              />
              <div className="teacher-achievements">
                <span className="achievement">{t('teacher3-achievement1')}</span>
                <span className="achievement">{t('teacher3-achievement2')}</span>
                <span className="achievement">{t('teacher3-achievement3')}</span>
              </div>
            </div>
          </div>
          <div data-animate="center">
            <h2>{t('teachers-title2')}</h2>
          </div>
          {/* Teacher 4 */}
          <div className="teacher-item" data-animate="card" data-animate-delay="400">
            <div className="teacher-info">
              <h3>{t('teacher4-name')}</h3>
              <p className="teacher-title">{t('teacher4-title')}</p>
              <p className="teacher-description">{t('teacher4-description')}</p>
              <div className="teacher-achievements">
                <span className="achievement">{t('teacher4-achievement1')}</span>
                <span className="achievement">{t('teacher4-achievement2')}</span>
                <span className="achievement">{t('teacher4-achievement3')}</span>
              </div>
            </div>
            <div className="teacher-image">
              <img src="/assets/img/JasurbekUmarov.jpg" alt="Jasurbek Umarov" />
            </div>
          </div>
          {/* Teacher 5 */}
          <div className="teacher-item" data-animate="card" data-animate-delay="500">
            <div className="teacher-image">
              <img src="/assets/img/OzodbekEshboboev.jpg" alt="Ozodbek Eshboboev" />
            </div>
            <div className="teacher-info">
              <h3>{t('teacher5-name')}</h3>
              <p className="teacher-title">{t('teacher5-title')}</p>
              <p className="teacher-description">{t('teacher5-description')}</p>
              <div className="teacher-achievements">
                <span className="achievement">{t('teacher5-achievement1')}</span>
                <span className="achievement">{t('teacher5-achievement2')}</span>
                <span className="achievement">{t('teacher5-achievement3')}</span>
              </div>
            </div>
          </div>
          {/* Teacher 6 */}
          <div className="teacher-item" data-animate="card" data-animate-delay="600">
            <div className="teacher-info">
              <h3>{t('teacher6-name')}</h3>
              <p className="teacher-title">{t('teacher6-title')}</p>
              <p className="teacher-description">{t('teacher6-description')}</p>
              <div className="teacher-achievements">
                <span className="achievement">{t('teacher6-achievement1')}</span>
                <span className="achievement">{t('teacher6-achievement2')}</span>
                <span className="achievement">{t('teacher6-achievement3')}</span>
              </div>
            </div>
            <div className="teacher-image">
              <img src="/assets/img/KhusanRakhimov.jpg" alt="Khusan Rakhimov" />
            </div>
          </div>
          {/* Teacher 7 */}
          <div className="teacher-item" data-animate="card" data-animate-delay="700">
            <div className="teacher-image">
              <img src="/assets/img/JamshidbekIzzatulloh.jpg" alt="Jamshidbek Izzatulloh" />
            </div>
            <div className="teacher-info">
              <h3>{t('teacher7-name')}</h3>
              <p className="teacher-title">{t('teacher7-title')}</p>
              <p className="teacher-description">{t('teacher7-description')}</p>
              <div className="teacher-achievements">
                <span className="achievement">{t('teacher7-achievement1')}</span>
                <span className="achievement">{t('teacher7-achievement2')}</span>
                <span className="achievement">{t('teacher7-achievement3')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersSection; 