import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import './Geschichte.css';

const Geschichte: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen class="page-color geschichte">

       <div className='head-title'>Der Bayerische Club – Geschichte und Selbstverständnis</div> 

  <IonCard>
    <IonCardHeader>
      <IonCardTitle>1. Gründung und Weimarer Zeit</IonCardTitle>
      <IonCardSubtitle>(1919–1933)</IonCardSubtitle>
    </IonCardHeader>
    <IonCardContent>
      <p>Der Bayerische Club wurde im Jahr 1919 in München gegründet – in einer Zeit, in der Bayern nach dem Ende des Ersten Weltkriegs und dem Sturz der Monarchie im Umbruch war. Die Gründer – Persönlichkeiten aus Politik, Kunst, Kultur, Wissenschaft, Wirtschaft und Religion – einte das Ziel, einen repräsentativen Querschnitt der bayerischen Gesellschaft zusammenzuführen.</p>
      <p>Von Beginn an war Der Bayerische Club ein exklusiver Kreis, in dem sich herausragende Persönlichkeiten begegneten.</p>
    </IonCardContent>
  </IonCard>

  <IonCard>
    <IonCardHeader>
      <IonCardTitle>2. Zeit des Nationalsozialismus</IonCardTitle>
      <IonCardSubtitle>(1933–1945)</IonCardSubtitle>
    </IonCardHeader>
    <IonCardContent>
      <p>Bereits 1933 wurde Der Bayerische Club verboten. Damit endete seine offizielle Arbeit abrupt – ein Beispiel dafür, wie unabhängige und traditionsbewusste Institutionen jener Zeit unterdrückt wurden.</p>
    </IonCardContent>
  </IonCard>

  <IonCard>
    <IonCardHeader>
      <IonCardTitle>3. Neubeginn und Wiederaufbau</IonCardTitle>
      <IonCardSubtitle>(ab 1945)</IonCardSubtitle>
    </IonCardHeader>
    <IonCardContent>
      <p>Nach dem Zweiten Weltkrieg wurde Der Bayerische Club von ehemaligen Mitgliedern neu gegründet. Rasch entwickelte er sich wieder zu einem angesehenen Ort, an dem sich Persönlichkeiten aus Politik, Kultur, Kirche, Wissenschaft und Wirtschaft begegneten.</p>
      <p>Dass auch bayerische Ministerpräsidenten wie Hanns Seidel, Alfons Goppel und Max Streibl zu den Mitgliedern zählten, unterstreicht den exklusiven und zugleich repräsentativen Charakter des Clubs.</p>
    </IonCardContent>
  </IonCard>

  <IonCard>
    <IonCardHeader>
      <IonCardTitle>4. Festigung und Öffnung</IonCardTitle>
      <IonCardSubtitle>(1970er–1990er Jahre)</IonCardSubtitle>
    </IonCardHeader>
    <IonCardContent>
      <p>In den folgenden Jahrzehnten entwickelte sich Der Bayerische Club zu einem Ort, an dem nicht nur Tradition gepflegt, sondern auch Zukunft gestaltet wurde. Er verband Generationen und Fachrichtungen miteinander, förderte den Dialog über Standes- und Parteigrenzen hinweg und stärkte damit seine Rolle als Spiegelbild einer lebendigen, vielfältigen bayerischen Gesellschaft.</p>
    </IonCardContent>
  </IonCard>

  <IonCard>
    <IonCardHeader>
      <IonCardTitle>5. Aufbruch ins neue Jahrtausend</IonCardTitle>
      <IonCardSubtitle>(2000er–heute)</IonCardSubtitle>
    </IonCardHeader>
    <IonCardContent>
      <p>Mit Beginn der 2000er-Jahre setzte bei Dem Bayerischen Club ein neuer Abschnitt ein: Neben Tradition und Dialog trat nun verstärkt die aktive Förderung der jungen Generation in den Vordergrund.</p>
    </IonCardContent>
  </IonCard>


      </IonContent>
    </IonPage>
  );
};

export default Geschichte;
