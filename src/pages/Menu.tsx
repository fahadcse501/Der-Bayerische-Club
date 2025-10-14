import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem } from '@ionic/react';
import { Link } from 'react-router-dom';
import './Menu.css';

const menuItems = [
  { label: 'Home', path: '/home' },
  { label: 'Geschichte', path: '/geschichte' },
  { label: 'Treffen', path: '/die-treffen' },
  { label: 'Abiturientenpreis', path: '/der-abiturientenpreis' },
  { label: 'Impressum', path: '/impressum' },
  { label: 'Datenschutzerklärung', path: '/datenschutzerklärung' },
  { label: 'Organisationsstruktur', path: '/organisations' },
  { label: 'Faq', path: '/faq' },
  { label: 'Kontakt', path: '/contact' },
];

const Menu: React.FC = () => {
  return (
    <IonPage>
      <IonContent class='page-color menu-page'>
        <img alt="Logo" src="https://olivercerza.wevence.com/wp-content/uploads/2025/08/logo-opening-1-e1756242601246-2048x1978.png" style={{ display: 'block', margin: '20px auto', maxWidth: '20%' }} />
        <IonList>
          {menuItems.map(item => (
            <IonItem key={item.path} routerLink={item.path}>
              {item.label}
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Menu;
