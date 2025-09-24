import React from 'react';
import { IonAccordion, IonAccordionGroup, IonContent, IonItem, IonLabel, IonPage } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import './Faq.css';

const Faq: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen class="page-color faq-page">
        <IonCardHeader>Wissenswertes</IonCardHeader>
        <IonAccordionGroup>
      <IonAccordion value="first">
        <IonItem slot="header" color="#264167">
          <IonLabel>Wer kann Mitglied werden?</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Mitglied im Bayerischen Club können ausschließlich in Bayern ansässige Persönlichkeiten werden, die sich in besonderer Weise um Bayern verdient gemacht haben – ebenso wie Menschen, die Bayern befürworten und die Werte sowie den Geist unseres Clubs unterstützen. Es soll stets einen repräsentativen Querschnitt Bayerns widerspiegeln – ohne dabei einzelne Bereiche in den Vordergrund zu stellen. Vertreten sind Politik, Religion, Kultur, Wissenschaft, Wirtschaft, Adel und Kunst.
        </div>
      </IonAccordion>
      <IonAccordion value="second">
        <IonItem slot="header" color="#264167">
          <IonLabel>Wie handhaben wir Öffentlichkeitsarbeit?</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Der Bayerische Club sucht nicht die öffentliche Wahrnehmung und betreibt deshalb auch keine Pressearbeit im üblichen Sinn. Wir pflegen nach außen Diskretion und Zurückhaltung und nach innen das offene Wort.
        </div>
      </IonAccordion>
      <IonAccordion value="third">
        <IonItem slot="header" color="#264167">
          <IonLabel>Wer leitet die Treffen?</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
Die Treffen werden vom Präsidenten des Bayerischen Clubs, seinem Stellvertreter oder dem Clubmeister geleitet.
        </div>
      </IonAccordion>

           <IonAccordion value="fourth">
        <IonItem slot="header" color="#264167">
          <IonLabel>Wie kann man Mitglied werden?</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
Eine Mitgliedschaft ist ausschließlich auf persönliche Einladung möglich. Eigeninitiativen oder Bewerbungen sind nicht vorgesehen.        </div>
      </IonAccordion>

           <IonAccordion value="fifth">
        <IonItem slot="header" color="#264167">
          <IonLabel>Warum gilt die Chatham-House-Regel?</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
Um einen offenen und vertrauensvollen Austausch zu ermöglichen, gilt bei den Treffen des Bayerischen Clubs die Chatham-House-Regel: Inhalte der Gespräche dürfen weitergegeben werden, nicht jedoch die Identität oder die Zugehörigkeit der Redner. So bleibt Vertraulichkeit gewahrt und eine freie Gesprächskultur gesichert.        </div>
      </IonAccordion>

           <IonAccordion value="sixth">
        <IonItem slot="header" color="#264167">
          <IonLabel>Wie ist „Der Bayerische Club“ organisiert?</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
<b>Präsident</b><br></br>
Er repräsentiert den Club nach außen und führt mit Würde und Souveränität durch die Zusammenkünfte.<br></br><br></br>
<b>Vizepräsident</b><br></br>
Er steht dem Präsidenten zur Seite und übernimmt in dessen Abwesenheit die Leitung – im Sinne von Kontinuität und Verlässlichkeit.
<br></br><br></br>
<b>Clubmeister</b><br></br>
Er trägt die Verantwortung für den Ablauf der Abende, für die Auswahl und Gestaltung der Vorträge sowie für die Wahrung der Traditionen der Clubkultur.
<br></br><br></br><b>Beiräte</b><br></br>
Sie stehen dem Vorstand beratend zur Seite, bringen ihre Erfahrung und Expertise aus den Bereichen Politik, Religion, Kultur, Wissenschaft, Wirtschaft, Adel und Kunst ein und prägen so den Geist des Clubs in seiner Vielfalt.        </div>
      </IonAccordion>

    </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default Faq;
