import React from 'react';
import { IonAccordion, IonAccordionGroup, IonContent, IonItem, IonLabel, IonPage } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import './Der-abiturientenpreis.css';

const Derabiturientenpreis: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen class="page-color derabiturientenpreis">
        <IonCardHeader>Der Abiturientenpreis</IonCardHeader>
        <IonCardSubtitle>Eine Herzensangelegenheit</IonCardSubtitle>

     <IonCard>
       <IonCardContent>
        <p>Wie fördert man bayerische Identität, bayerische Kultur und bayerische Traditionen nachhaltig? Indem man die Verankerung in der Vergangenheit mit dem Blick in die Zukunft verknüpft. Im Zuge dessen will „Der Bayerische Club“ mithelfen, dass den nachwachsenden Generationen Bayern in seiner komplexen Universalität ans Herz gelegt wird, sie zur Beschäftigung damit ermuntern und dieses Engagement entsprechend würdigen und fördern.
            <br></br><br></br>
            Um junge Menschen auf unserem Bayernkurs mitzunehmen stiftet „Der Bayerische Club“ alljährlich Preise für Abiturientinnen und Abiturienten, die sich in herausragender Weise im Rahmen ihrer Seminararbeit in fast allen Schulfächern mit einem kultur- und geschichtsbezogenen bayerischen Thema befasst haben. Dabei hatten die Gründerväter des Abiturientenpreises auch König Maximilian II. im Gedächtnis, dessen Idee zur Gewinnung von herausragendem Nachwuchs für die Entwicklung des Staates zur Stiftung Maximilianeum führte. Für den Abiturientenpreis ist unser Partner das Bayerische Kultusministerium. Dort können alle Gymnasien im Freistaat Vorschläge einreichen. Die sachkundigen und tatkräftigen Ministerialbeauftragten wählen dann gemeinsam mit unserem Club aus jedem Gymnasialbezirk  die Preisträger aus. Für besonders herausragende Arbeiten gibt es auch einen höher dotierten Landespreis.
            <br></br><br></br>Der Bayerische Club ist stolz darauf, im Rahmen der Abiturientenpreisverleihung bereits mehr als 100 Arbeiten ausgezeichnet zu haben. Unser besonderer Dank gilt dabei unserem Clubmitglied Prof. Georg Nemetschek, der als Mäzen den Abiturientenpreis alljährlich mit einer großen Spende fördert, sowie unserem Ehrenmitglied Ilse Aigner, die als Präsidentin des Bayerischen Landtages die Preisverleihung im Maximilianeum jedes Jahr ermöglicht.
            </p>   
      </IonCardContent>
    </IonCard>



           <IonCard>
              <img alt="Silhouette of mountains" src="https://olivercerza.wevence.com/wp-content/uploads/2025/09/7-e1757573723800.jpg" />
       
              <IonCardContent>
                <p>Preisverleihung Abiturientenpreis 2025 in Anwesenheit von unserem Ehrenmitglied Landtagspräsidentin Ilse Aigner und Staatsministerin für Unterricht und Kultus Anna Stolz</p> 
              </IonCardContent>
            </IonCard>

            
           <IonCard>
              <img alt="Silhouette of mountains" src="https://olivercerza.wevence.com/wp-content/uploads/2025/09/Gruppenfoto-Preisverleihung-Abiturientenpreis-2025-1-1-e1757573767468.jpg" />
       
              <IonCardContent>
                <p>Preisverleihung Abiturientenpreis 2025 in Anwesenheit von unserem Ehrenmitglied Landtagspräsidentin Ilse Aigner und Staatsministerin für Unterricht und Kultus Anna Stolz</p> 
              </IonCardContent>
            </IonCard>
                 
      </IonContent>
    </IonPage>
  );
};

export default Derabiturientenpreis;
