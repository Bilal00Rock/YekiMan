import React from 'react';
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
  IonIcon
} from '@ionic/react';
import { calendar, chatbubbleEllipses, heart } from 'ionicons/icons';

const LettersPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>نامه‌ها</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <h2>نامه‌های عاشقانه</h2>
          <p style={{ color: 'var(--text-secondary)' }}>به زودی...</p>
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

export default LettersPage;