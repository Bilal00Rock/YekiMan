import React, { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import ParticleField from '../components/ParticleField';
import '../styles/IntroScreen.css';

interface FloatItem {
  id: number;
  emoji: string;
  left: string;
  top: string;
  duration: number;
  delay: number;
  opacity: number;
}

const IntroScreen: React.FC = () => {
  const history = useHistory();

  const floatingItems = useMemo<FloatItem[]>(() => {
    const emojis = ['❤', '✦', '♡', '✧', '❤', '✦'];
    return emojis.map((emoji, i) => ({
      id: i,
      emoji,
      left: `${10 + i * 14}%`,
      top: `${55 + (i % 3) * 15}%`,
      duration: 5 + i * 1.2,
      delay: i * 0.8,
      opacity: 0.15 + (i % 3) * 0.1,
    }));
  }, []);

  const handleEnter = () => {
    history.replace('/home');
  };

  return (
    <div className="intro full-screen">
      {/* Background */}
      <div className="intro__bg" aria-hidden="true">
        <div className="intro__bg-gradient" />
        <div className="intro__aurora" />
      </div>

      {/* Particles */}
      <ParticleField count={20} />

      {/* Floating emoji */}
      <div className="intro__orbital" aria-hidden="true">
        {floatingItems.map((item) => (
          <span
            key={item.id}
            className="intro__float-item"
            style={{
              left: item.left,
              top: item.top,
              '--float-d': `${item.duration}s`,
              '--float-delay': `${item.delay}s`,
              '--float-opacity': item.opacity,
            } as React.CSSProperties}
          >
            {item.emoji}
          </span>
        ))}
      </div>

      {/* Header — Names */}
      <div className="intro__header">
        <p className="intro__eyebrow">our story begins</p>

        <div className="intro__names">
          <span className="intro__name intro__name--zahra">Zahra</span>
          <div className="intro__names-heart">
            <span className="intro__heart-icon" role="img" aria-label="heart">❤</span>
          </div>
          <span className="intro__name intro__name--bilal">Bilal</span>
        </div>

        <p className="intro__sub">داستان ما</p>
      </div>

      {/* Card */}
      <div className="intro__card-wrap">
        <div className="intro__card">
          <div className="intro__card-content">
            <div className="intro__date-badge">
              <span className="intro__date-dot" aria-hidden="true" />
              <span>سالگرد عشق ما</span>
            </div>

            <div className="intro__divider" aria-hidden="true" />

            <p className="intro__card-text">
              این جا جایی‌ست که <strong>خاطرات</strong> ما زندگی می‌کنند،
              <br />
              جایی که <strong>نامه‌ها</strong>ی نگفته
              <br />
              منتظر تو هستند.
            </p>

            <div className="intro__divider" aria-hidden="true" />

            <p className="intro__card-text" style={{ fontSize: '0.85rem', opacity: 0.6 }}>
              ✦ آفلاین · خصوصی · فقط برای ما ✦
            </p>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="intro__footer">
        <button className="intro__cta-btn" onClick={handleEnter} aria-label="ورود به داستان ما">
          <span>ورود به داستان ما ❤</span>
        </button>
        <p className="intro__skip">یکی‌مان · نسخه ۱.۰</p>
      </div>
    </div>
  );
};

export default IntroScreen;