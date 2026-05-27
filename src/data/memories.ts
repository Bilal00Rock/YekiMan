export type MessageType = "text" | "image" | "voice";

export interface Message {
  id: string;
  sender: "bilal" | "zahra";
  type: MessageType;
  text?: string;
  mediaUrl?: string;
  duration?: string; // for voice
  time?: string;
}

export interface Memory {
  id: string;
  title: string;
  cover: string;
  gradient: string;
  messages: Message[];
}

export const memories: Memory[] = [
  {
    id: "first-line",
    title: "اولین جمله",
    cover: "/assets/memories/favicon.png",
    gradient: "linear-gradient(135deg,#EF92BB,#64CFFC)",
    messages: [
      {
        id: "m1",
        sender: "zahra",
        type: "text",
        text: "چندتا دوستم داری؟",
        time: "22:10"
      },
      {
        id: "m2",
        sender: "bilal",
        type: "text",
        text: "یکی.",
        time: "22:11"
      },
      {
        id: "m3",
        sender: "zahra",
        type: "image",
        mediaUrl: "/assets/favicon.png",
        time: "22:12"
      },
      {
        id: "m4",
        sender: "bilal",
        type: "voice",
        mediaUrl: "/assets/memories/favicon.jpg",
        duration: "0:12",
        time: "22:13"
      }
    ]
  }
];