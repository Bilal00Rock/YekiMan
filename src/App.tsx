import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { heart, chatbubbleEllipses, calendar } from "ionicons/icons";

// Pages
import SplashScreen from "./pages/SplashScreen";
import IntroScreen from "./pages/IntroScreen";
import HomePage from "./pages/HomePage";
import MemoriesPage from "./pages/MemoriesPage";
import LettersPage from "./pages/LettersPage";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Dark mode */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/theme.css";
import "./theme/global.css";
import FloatingNavbar from "./components/FloatingNavbar";
import MemoryChat from "./pages/MemoryChat";
import PromisesPage from "./pages/PromisesPage";
setupIonicReact();
 

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          {/* Onboarding routes (no tabs) */}
          <Route exact path="/splash">
            <SplashScreen />
          </Route>
          <Route exact path="/intro">
            <IntroScreen />
          </Route>

          {/* Tab routes */}
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route exact path="/memories">
            <MemoriesPage />
          </Route>
          <Route exact path="/letters">
            <LettersPage />
          </Route>

          <Route exact path="/">
            <Redirect to="/splash" />
          </Route>
          <Route exact path="/memory/:id">
            <MemoryChat />
          </Route>
          <Route exact path="/promises">
          <PromisesPage />
        </Route>
        </IonRouterOutlet>
      </IonTabs>

      {/* <FloatingNavbar /> */}
    </IonReactRouter>
  </IonApp>
);

export default App;
