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
const HomePage: React.FC = () => {
    const daysTogether = Math.floor((new Date().getTime() - new Date("2023-05-30").getTime()) / (1000 * 60 * 60 * 24));
  return (
    <IonPage>
      <IonContent fullscreen>
        {/* Background Glow */}
        <div className="bg-glow pink-glow"></div>
        <div className="bg-glow blue-glow"></div>

        <div className="home-container">
          {/* Hero Section */}
          <div className="hero-section">
            <div className="heart-circle">❤️</div>

            <h1 className="main-title">زهرا و بلال</h1>

            <p className="subtitle">{daysTogether} روز کنار هم</p>
          </div>

          {/* Romantic Quote */}
          <div className="glass-card quote-card">
            <p className="quote-text">"تو قشنگ‌ترین اتفاق زندگی منی..."</p>
          </div>

          {/* Featured Memory */}
          <div className="glass-card memory-card">
            <span className="memory-label">خاطره امروز</span>

            <h2>اولین تماس شبانه 🌙</h2>

            <p>شبی که تا صبح حرف زدیم و نفهمیدیم زمان چطور گذشت...</p>
          </div>

          {/* Love Message */}
          <div className="glass-card message-card">
            <h3>دوستت دارم چون...</h3>

            <p>کنار تو آرامش دارم.</p>
          </div>
        </div>
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
