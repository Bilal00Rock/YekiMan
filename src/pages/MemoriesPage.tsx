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
import { memories } from "../data/memories";
import { useHistory } from 'react-router-dom';
import "../styles/MemoriesPage.css";
const MemoriesPage: React.FC = () => {

  const history = useHistory();
  return (
    <IonPage>
      
       <IonContent fullscreen>

        {/* Background Glow */}
        <div className="bg-glow pink-glow"></div>
        <div className="bg-glow blue-glow"></div>
        <div className="memories-container">

          <h2 className="memories-title">
            خاطرات ما
          </h2>

          <div className="memories-grid">

            {memories.map((m) => (
              <div
                key={m.id}
                className="memory-card"
                style={{ background: m.gradient }}
                onClick={() => history.push(`/memory/${m.id}`)}
              >

                <div className="memory-card-inner">

                  <img
                    src={m.cover}
                    className="memory-img"
                    alt={m.title}
                  />

                  <div className="memory-text">

                    <h3>{m.title}</h3>

                    {/* optional fallback subtitle */}
                    <p>
                      {m.messages?.[0]?.text ?? "خاطره عاشقانه"}
                    </p>

                  </div>

                </div>

              </div>
            ))}

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

export default MemoriesPage;