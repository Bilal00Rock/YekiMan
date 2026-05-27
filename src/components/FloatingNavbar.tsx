import {
  heart,
  calendar,
  chatbubbleEllipses
} from "ionicons/icons";

import {
  IonIcon
} from "@ionic/react";

import { useLocation } from "react-router-dom";

import "../styles/FloatingNavbar.css";

const FloatingNavbar = () => {

  const location = useLocation();

  const tabs = [
    {
      name: "خانه",
      path: "/home",
      icon: heart
    },
    {
      name: "خاطرات",
      path: "/memories",
      icon: calendar
    },
    {
      name: "نامه‌ها",
      path: "/letters",
      icon: chatbubbleEllipses
    }
  ];

  return (
    <div className="floating-navbar">

      {tabs.map((tab) => {

        const active = location.pathname === tab.path;

        return (
          <a
            key={tab.path}
            href={tab.path}
            className={`nav-item ${active ? "active" : ""}`}
          >
            <IonIcon icon={tab.icon} />
            <span>{tab.name}</span>
          </a>
        );
      })}

    </div>
  );
};

export default FloatingNavbar;