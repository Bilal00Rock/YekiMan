import React from "react";
import { IonPage, IonContent, IonIcon } from "@ionic/react";
import { useParams, useHistory } from "react-router-dom";
import { arrowBack } from "ionicons/icons";
import { memories } from "../data/memories";
import "../styles/MemoryChat.css";
const MemoryChat: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const memory = memories.find(m => m.id === id);

  if (!memory) return null;

  return (
    <IonPage>

      <IonContent fullscreen>

        {/* Background Glow */}
        <div className="bg-glow pink-glow"></div>
        <div className="bg-glow blue-glow"></div>
        {/* Header */}
        <div className="chat-header">
          <IonIcon
            icon={arrowBack}
            onClick={() => history.push("/memories")}
          />
          <div>{memory.title}</div>
        </div>

        {/* Chat */}
        <div className="chat-body">

          {memory.messages.map(msg => (
            <div
              key={msg.id}
              className={`msg ${msg.sender}`}
            >

              {/* sender name */}
              <div className="name">
                {msg.sender === "bilal" ? "بلال" : "زهرا"}
              </div>

              {/* message types */}
              <div className="bubble">

                {msg.type === "text" && (
                  <p>{msg.text}</p>
                )}

                {msg.type === "image" && (
                  <img src={msg.mediaUrl} className="chat-img" />
                )}

                {msg.type === "voice" && (
                  <div className="voice">
                    🔊 Voice Message ({msg.duration})
                  </div>
                )}

              </div>

              <div className="time">
                {msg.time}
              </div>

            </div>
          ))}

        </div>

      </IonContent>

    </IonPage>
  );
};

export default MemoryChat;