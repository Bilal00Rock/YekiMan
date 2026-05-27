import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ParticleField from '../components/ParticleField';
import '../styles/SplashScreen.css';

const SplashScreen: React.FC = () => {
  const history = useHistory();
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Start exit animation slightly before navigation
    const exitTimer = setTimeout(() => setExiting(true), 8200);
    const navTimer = setTimeout(() => history.replace('/intro'), 10000);
    
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(navTimer);
    };
  }, [history]);

  return (
    <div className={`splash full-screen${exiting ? ' splash--exit' : ''}`}>
      {/* Nebula orbs */}
      <div className="splash__nebula" aria-hidden="true">
        <div className="splash__orb splash__orb--pink" />
        <div className="splash__orb splash__orb--blue" />
        <div className="splash__orb splash__orb--red" />
      </div>

      {/* Concentric rings */}
      <div className="splash__rings" aria-hidden="true">
        <div className="splash__ring" />
        <div className="splash__ring" />
        <div className="splash__ring" />
      </div>

      {/* Floating particles */}
      <ParticleField count={28} />

      {/* Main content */}
      <div className="splash__content center-stack">
        <div className="splash__symbol">
          <div className="splash__symbol-inner">
            <span className="splash__symbol-heart" role="img" aria-label="heart">❤</span>
          </div>
        </div>

        <h1 className="splash__title" dir="ltr">YekiMan</h1>
        <p className="splash__tagline" dir="ltr">a love story</p>

        <div className="splash__quote-wrap">
          <p className="splash__quote">عشق یعنی تو، همین، نه بیشتر</p>
          <p className="splash__quote-attr">— یکی‌مان</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="splash__progress-wrap" aria-hidden="true">
        <div className="splash__progress-track">
          <div className="splash__progress-fill" />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;