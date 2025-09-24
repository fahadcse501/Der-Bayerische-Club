import { Redirect, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import SplashScreen from './components/SplashScreen';
import { IonReactRouter } from '@ionic/react-router';
import { menuOutline, personCircleOutline, homeOutline } from 'ionicons/icons';
import Home from './pages/Home';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Faq from './pages/Faq';
import Geschichte from './pages/Geschichte';
import Organisations from './pages/Organisations';
import Dietreffen from './pages/Dietreffen';
import Derabiturientenpreis from './pages/Der-abiturientenpreis';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Contact from './pages/Contact';


setupIonicReact();

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Show splash screen for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/contact">
              <Contact />
            </Route>

            <Route exact path="/faq">
              <Faq />
            </Route>

              <Route exact path="/der-abiturientenpreis">
              <Derabiturientenpreis />
            </Route>

            <Route exact path="/die-treffen">
              <Dietreffen />
            </Route>

             <Route exact path="/organisations">
              <Organisations />
            </Route>

               <Route exact path="/geschichte">
              <Geschichte />
            </Route>

            <Route exact path="/menu">
              <Menu />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

             <Route exact path="/home">
              <Home />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>
        
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="menu" href="/menu">
              <IonIcon aria-hidden="true" icon={menuOutline} />
              <IonLabel>Menu</IonLabel>
            </IonTabButton>

            <IonTabButton tab="home" href="/home">
              <IonIcon aria-hidden="true" icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>

            <IonTabButton tab="login" href="/login">
              <IonIcon aria-hidden="true" icon={personCircleOutline} />
              <IonLabel>Log In</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
