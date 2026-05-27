import React from "react";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonIcon,
} from "@ionic/react";
import { heart } from "ionicons/icons";
import { promises } from "../data/promises";
import "../styles/PromisesPage.css";

const PromisesPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader collapse="fade" className="ion-no-border">
        <IonToolbar className="promises-toolbar">
          <IonButtons slot="start">
            <IonBackButton  defaultHref="/home" text="" className="back-button" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div className="bg-glow pink-glow"></div>
        <div className="bg-glow blue-glow"></div>

        <div className="promises-container">
          <div className="promises-header animate-page">
            <div className="promises-heart-icon">  <img
                src={`${import.meta.env.BASE_URL}assets/images/promise.png`}
                alt="Zahra & Bilal"
                className="hand-photo"
              /></div>
            <h1>قول‌هایی که دادیم</h1>
            <p>{promises.length} قول عاشقانه برای همیشه</p>
          </div>

          <div className="promises-list">
            {promises.map((promise, index) => (
              <div 
                key={index} 
                className="promise-item glass-card animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="promise-number">{index + 1}</div>
                <div className="promise-content">
                  <p className="promise-text-item">"{promise.text}"</p>
                  <div className="promise-footer-item">
                    <span className="promise-footer-text">{promise.footer}</span>
                    <span className="promise-heart-small">❤️</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PromisesPage;