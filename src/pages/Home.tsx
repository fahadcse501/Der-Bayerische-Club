import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen class="page-color home-page">
  <IonCard>
      <IonCardHeader>
        <IonCardTitle>Willkommen beim Bayerischen Club</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        Seit über 100 Jahren pflegen wir mitten in München ein exklusives Forum für Menschen, denen Bayern in seiner kulturellen, historischen und gesellschaftlichen Vielfalt eine Herzensangelegenheit ist. Entstanden aus dem Geist der Verbundenheit zu unserem Land, ist der Club bis heute ein Ort, an dem Tradition, Identität und zeitgemäße Perspektiven gleichermaßen geschätzt, diskutiert und weitergetragen werden.
      </IonCardContent>
    </IonCard>


        <IonCard>
      <img alt="Silhouette of mountains" src="/Stephan-Mayer.jpg" />
      <IonCardHeader>
        <IonCardTitle>Stephan Mayer</IonCardTitle>
        <IonCardSubtitle>Präsident</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <p>Frei von Ideologien und Hierarchien widmet sich unser Club in einem vertraulichen Rahmen der Bayerischen Geschichte, Gegenwart und Zukunft. Dazu treffen wir uns einmal im Monat mit ausgewählten Gästen aus Wissenschaft, Politik, Wirtschaft, Kirche und Adel zum angeregten Austausch und zur gegenseitigen Inspiration. Uns verbindet das gemeinsame Interesse, Bayern auf einem intellektuell hohen Niveau in all seinen Facetten zu beleuchten und zu bewahren.</p>
            <br/><p>Neben den Clubabenden im traditionsreichen Hotel „Vier Jahreszeiten Kempinski“ gibt es weitere Höhepunkte im Jahr – etwa die Auszeichnung junger Talente im Maximilianeum oder unsere festliche Adventsfeier, die nationale wie internationale Persönlichkeiten zusammenführt.</p>
            <br/><p>Mit herzlichem Gruß<br />Stephan Mayer<br />Präsident</p>
          
      </IonCardContent>
    </IonCard>

    <IonCard>
        <IonCardContent>
        <p>Wenn auch Ihnen Bayern in seiner Einzigartigkeit am Herzen liegt, laden wir Sie gerne ein, auf unserer Homepage mehr über den Bayerischen Club zu erfahren.</p>
          
        </IonCardContent>
    </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Home;
