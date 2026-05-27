import React from "react";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonTabBar,
  IonLabel,
  IonTabButton,
  IonIcon,
} from "@ionic/react";
import { calendar, chatbubbleEllipses, heart } from "ionicons/icons";
import "../styles/FloatingNavbar.css";
import "../styles/HomePage.css";
import { quotes } from "../data/quotes";
import { loveReasons } from "../data/loveReasons";
import { promises } from "../data/promises";
import { useHistory } from "react-router-dom";
const HomePage: React.FC = () => {
  const daysTogether = Math.floor(
    (new Date().getTime() - new Date("2023-05-30").getTime()) /
      (1000 * 60 * 60 * 24),
  );
  const [currentQuote, setCurrentQuote] = React.useState(0);
  const [loveReason, setLoveReason] = React.useState(0);
  const [quoteAnimating, setQuoteAnimating] = React.useState(false);
  const [loveAnimating, setLoveAnimating] = React.useState(false);
  const [displayQuote, setDisplayQuote] = React.useState(0);
  const [displayLove, setDisplayLove] = React.useState(0);

  const [currentPromise, setCurrentPromise] = React.useState(0);
  const [promiseAnimating, setPromiseAnimating] = React.useState(false);
  React.useEffect(() => {
    // Quote rotation with animation
    const quoteInterval = setInterval(() => {
      setQuoteAnimating(true);
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
        setQuoteAnimating(false);
      }, 400);
    }, 5000);

    // Love reason rotation with animation
    const loveInterval = setInterval(() => {
      setLoveAnimating(true);
      setTimeout(() => {
        setLoveReason((prev) => (prev + 1) % loveReasons.length);
        setLoveAnimating(false);
      }, 400);
    }, 7000);
    // Promise rotation with animation (every 9 seconds)
    const promiseInterval = setInterval(() => {
      setPromiseAnimating(true);
      setTimeout(() => {
        setCurrentPromise((prev) => (prev + 1) % promises.length);
        setPromiseAnimating(false);
      }, 400);
    }, 9000);
    return () => {
      clearInterval(quoteInterval);
      clearInterval(loveInterval);
      clearInterval(promiseInterval);
    };
  }, []);
  const [showPhotoModal, setShowPhotoModal] = React.useState(false);
  const openPhotoPreview = () => {
    setShowPhotoModal(true);
  };

  const closePhotoPreview = () => {
    setShowPhotoModal(false);
  };

  // Inside your component, add:
  const history = useHistory();

  // Add this function:
  const openPromisesPage = () => {
    history.push("/promises");
  };
  return (
    <IonPage>
      <IonContent fullscreen>
        {/* Background Glow */}
        <div className="bg-glow pink-glow"></div>
        <div className="bg-glow blue-glow"></div>

        <div className="home-container">
          {/* Hero Section */}

          <div className="hero-section">
            <div className="heart-circle" onClick={openPhotoPreview}>
              <img
                src={`${import.meta.env.BASE_URL}assets/images/IMG_20260527_192655_067.jpg`}
                alt="Zahra & Bilal"
                className="couple-photo"
              />
              <div className="photo-overlay">
                <span className="overlay-heart">❤️</span>
              </div>
            </div>
            <h1 className="main-title">زهرا ❤️ بلال</h1>
            <p className="subtitle">
              {daysTogether} روز از{" "}
              <span className="highlight">زیباترین قصه</span>
            </p>
            <p className="small-detail">آغاز قصه: ۹ خرداد ۱۴۰۲</p>
          </div>

          {/* Romantic Quote */}
          <div className="glass-card quote-card animate-glow">
            <div key={currentQuote}>
              <p
                className={`quote-text ${quoteAnimating ? "animate-quote-exit" : "animate-quote-enter"}`}
              >
                "{quotes[currentQuote].persian}"
              </p>
              <p
                className={`quote-english ${quoteAnimating ? "animate-quote-exit" : "animate-quote-enter"}`}
              >
                {quotes[currentQuote].english}
              </p>
            </div>
          </div>
          {/* Love Reason of the Day */}
          <div className="glass-card message-card animate-glow">
            <div className="message-header">
              <span className="heart-small animate-heartbeat">❤️</span>
              <h3>دوستت دارم چون...</h3>
            </div>
            <p
              className={`love-reason ${loveAnimating ? "animate-quote-exit" : "animate-quote-enter"}`}
            >
              "{loveReasons[loveReason]}"
            </p>
            <div className="message-footer">
              <span className="daily-badge animate-pulse"> لاو یو منی جانی</span>
            </div>
          </div>

          {/* Our Promise - Clickable */}
          <div
            className="glass-card promise-card animate-glow"
            onClick={openPromisesPage}
            style={{ cursor: "pointer" }}
          >
            <div className="promise-header">
              <span className="promise-icon">🩷</span>
              <h3>قول‌هامون</h3>
              <span className="promise-icon">🩵</span>
            </div>
            <p
              className={`promise-text ${promiseAnimating ? "animate-quote-exit" : "animate-quote-enter"}`}
            >
              "{promises[currentPromise].text}"
            </p>
            <div className="promise-footer">
              <span className="promise-date animate-pulse">
                {promises[currentPromise].footer}
              </span>
            </div>
            {/* <div className="view-all-hint">
              <span>مشاهده همه قول‌ها</span>
              <span className="arrow-hint">←</span>
            </div> */}
          </div>
          {/* Featured Memory */}
          {/* <div className="glass-card memory-card">
            <span className="memory-label">خاطره امروز</span>

            <h2>اولین تماس شبانه 🌙</h2>

            <p>شبی که تا صبح حرف زدیم و نفهمیدیم زمان چطور گذشت...</p>
          </div> */}
        </div>
        {showPhotoModal && (
          <div className="photo-modal" onClick={closePhotoPreview}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closePhotoPreview}>
                ✕
              </button>
              <img
                src={`${import.meta.env.BASE_URL}assets/images/IMG_20260527_192655_067.jpg`}
                alt="Zahra & Bilal"
                className="modal-image"
              />
              <div className="modal-caption">
                <p>زهرا ❤️ بلال</p>
                <span>یکی من</span>
              </div>
            </div>
          </div>
        )}
      </IonContent>
      <IonTabBar slot="bottom" className="floating-navbar">
        <IonTabButton tab="home" href="/home">
          <IonIcon aria-hidden="true" icon={heart} />
          <IonLabel>خانه</IonLabel>
        </IonTabButton>
        <IonTabButton tab="memories" href="/memories">
          <IonIcon aria-hidden="true" icon={calendar} />
          <IonLabel>خاطرات</IonLabel>
        </IonTabButton>
        <IonTabButton tab="letters" href="/letters">
          <IonIcon aria-hidden="true" icon={chatbubbleEllipses} />
          <IonLabel>نامه‌ها</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  );
};

export default HomePage;
