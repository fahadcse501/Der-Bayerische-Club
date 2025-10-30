import React from 'react';
import { IonAccordion, IonAccordionGroup, IonContent, IonItem, IonLabel, IonPage } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import './Dietreffen.css';

const Dietreffen: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen class="page-color die-treffen">
        <IonCardHeader>Die Treffen der Mitglieder</IonCardHeader>

             <IonCard>
              <img alt="Silhouette of mountains" className="treffen-images" src="/Hotel-Vier-Jahreszeiten-1924.jpg" />
       
              <IonCardContent>
                <p>Hotel Vier Jahreszeiten 1919</p> 
              </IonCardContent>
            </IonCard>

               <IonCard>
              <img alt="Silhouette of mountains" src="/Hotel-Vier-Jahreszeiten-Kempinski-Munich-Exterior.jpg" />
       
              <IonCardContent>
                <p>Hotel-Vier-Jahreszeiten-Kempinski-Munich</p> 
              </IonCardContent>
            </IonCard>

     <IonCard>
       <IonCardContent>
        <p>Seit 1919 – nur unterbrochen während dem Zweiten Weltkrieg und der Zeit von der nationalsozialistischen Diktatur, find’n die Treffen vom Bayerischen Klub im traditionellen Hotel Vier Jahreszeiten in München statt. Der feste Termin is <b>der dritte Donnerstag im Monat.</b></p>   
      </IonCardContent>
    </IonCard>

     <IonCard>
       <IonCardContent>
        <p>Den inhaltlichen Rahmen bildet ein Impulsvortrag, der sich entweder aktuellen Themen mit besonderem Bezug zu Bayern oder geschichtlichen Fragestellungen widmet. Die Vorträge werden in der Regel von herausragenden Persönlichkeiten aus Politik, Religion, Kultur, Wissenschaft, Wirtschaft, Adel und Kunst gehalten.</p>   
      </IonCardContent>
    </IonCard>

         <IonCard>
       <IonCardContent>
        <p>Im Anschluss eröffnet sich Raum für eine angeregte Diskussion, ehe der Abend bei einem gemeinsamen Essen in persönlichem Austausch und gepflegter Geselligkeit fortgeführt wird. Besonderer Wert wird dabei auch auf das persönliche Gespräch mit dem Vortragenden gelegt, das den Mitgliedern ermöglicht, Gedanken zu vertiefen und neue Impulse mitzunehmen.</p>   
      </IonCardContent>
    </IonCard>


           <IonCard>
              <img alt="Silhouette of mountains" src="/Josef-Redl-und-SKH-Luitpold-Prinz-von-bayern.jpg" />
       
              <IonCardContent>
                <p>Clubmeister Josef Redl mit SKH Prinz Luitpold von Bayern</p> 
              </IonCardContent>
            </IonCard>

            
           <IonCard>
              <img alt="Silhouette of mountains" src="/Dr-Harald-Kreuzer.jpg" />
       
              <IonCardContent>
                <p>Dr. Harald Kreuzer</p> 
              </IonCardContent>
            </IonCard>
                 


      </IonContent>
    </IonPage>
  );
};

export default Dietreffen;
