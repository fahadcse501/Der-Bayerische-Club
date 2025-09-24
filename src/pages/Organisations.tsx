import React from 'react';
import { IonAccordion, IonAccordionGroup, IonContent, IonItem, IonLabel, IonPage } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import './Organisations.css';

const Organisations: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen class="page-color organisations-page">
        <IonCardHeader>Organisationsstruktur des Bayerischen Clubs
</IonCardHeader>
        <IonAccordionGroup>
      <IonAccordion value="first">
        <IonItem slot="header" color="#264167">
          <IonLabel>Präsident</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
Er repräsentiert den Club nach außen und führt mit Würde und Souveränität durch die Zusammenkünfte.

        </div>
      </IonAccordion>
      <IonAccordion value="second">
        <IonItem slot="header" color="#264167">
          <IonLabel>Vizepräsident</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
Er steht dem Präsidenten zur Seite und übernimmt in dessen Abwesenheit die Leitung – im Sinne von Kontinuität und Verlässlichkeit.

        </div>
      </IonAccordion>
      <IonAccordion value="third">
        <IonItem slot="header" color="#264167">
          <IonLabel>Clubmeister</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
Er trägt die Verantwortung für den Ablauf der Abende, für die Auswahl und Gestaltung der Vorträge sowie für die Wahrung der Traditionen der Clubkultur.
        </div>
      </IonAccordion>

           <IonAccordion value="fourth">
        <IonItem slot="header" color="#264167">
          <IonLabel>Beiräte</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
Sie stehen dem Vorstand beratend zur Seite, bringen ihre Erfahrung und Expertise aus den Bereichen Politik, Religion, Kultur, Wissenschaft, Wirtschaft, Adel und Kunst ein und prägen so den Geist des Clubs in seiner Vielfalt.

</div>
      </IonAccordion>

           <IonAccordion value="fifth">
        <IonItem slot="header" color="#264167">
          <IonLabel>Sekretär</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
Er führt die Protokolle, wahrt die schriftlichen Aufzeichnungen und sorgt für eine geordnete interne Korrespondenz. Er organisiert die Treffen und unterstützt den Vorstand.

  </div>
      </IonAccordion>


    </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default Organisations;
