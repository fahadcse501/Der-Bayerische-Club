import React, { useState, useEffect } from 'react';
import {
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  IonToast,
  IonLoading,
  IonCardHeader,
  IonCard,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';
import { Keyboard } from '@capacitor/keyboard'; // Import Capacitor Keyboard plugin
import './Contact.css';

const FORM_ID = 33; // your CF7 form ID
const CONTACT_FORM7_ENDPOINT = `https://xemusk.com/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`;

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    // Listen for keyboard events
    Keyboard.addListener('keyboardWillShow', () => {
      setKeyboardVisible(true);
    });

    Keyboard.addListener('keyboardWillHide', () => {
      setKeyboardVisible(false);
    });

    // Cleanup listeners on unmount
    return () => {
      Keyboard.removeAllListeners();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const unitTag = `wpcf7-f${FORM_ID}-p0-o1`;

    const fd = new FormData();
    fd.append('_wpcf7', String(FORM_ID));
    fd.append('_wpcf7_unit_tag', unitTag);
    fd.append('_wpcf7_container_post', '0');
    fd.append('_wpcf7_version', '5.9');
    fd.append('_wpcf7_locale', 'de_DE');

    fd.append('your-name', name);
    fd.append('your-email', email);
    fd.append('your-subject', subject);
    if (message) fd.append('your-message', message);

    try {
      const res = await fetch(CONTACT_FORM7_ENDPOINT, {
        method: 'POST',
        body: fd,
        mode: 'cors',
        credentials: 'omit',
      });

      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(`HTTP ${res.status} ${res.statusText} ${text}`);
      }

      const data = await res.json();
      if (data.status === 'mail_sent') {
        setSuccess(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        const msg =
          data.message ||
          (Array.isArray(data.invalid_fields)
            ? data.invalid_fields.map((f: any) => f.message).join(', ')
            : 'Failed to send message');
        setError(msg);
      }
    } catch (err: any) {
      setError(err?.message || 'Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <IonPage>
      <IonContent
        className={`login-content contact-page page-color ${keyboardVisible ? 'keyboard-visible' : ''}`}
      >
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Kontaktieren Sie uns</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Bitte nutzen Sie das Formular, um uns Ihr Anliegen, Ihre Fragen oder
            Anregungen mitzuteilen. Wir melden uns zeitnah bei Ihnen zurück.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Der Bayerische Club</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
           C/O Notariat Dr. Markus Riemenschneider Fünf Höfe,<br />
            Theatinerstraße 12<br />
            80333 München
          </IonCardContent>
        </IonCard>

        <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '0 auto', padding: 20 }}>
          <IonItem>
            <IonLabel position="stacked">Vorname*</IonLabel>
            <IonInput
              value={name}
              onIonChange={(e) => setName(e.detail.value ?? '')}
              required
              placeholder="Vorname"
            />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Email*</IonLabel>
            <IonInput
              type="email"
              value={email}
              onIonChange={(e) => setEmail(e.detail.value ?? '')}
              required
              placeholder="Your email"
            />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Betreff*</IonLabel>
            <IonInput
              value={subject}
              onIonChange={(e) => setSubject(e.detail.value ?? '')}
              required
              placeholder="Betreff"
            />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Ihre Nachricht</IonLabel>
            <IonTextarea
              value={message}
              onIonChange={(e) => setMessage(e.detail.value ?? '')}
              placeholder="Ihre Nachricht"
              autoGrow
            />
          </IonItem>

          <IonButton expand="block" type="submit" style={{ marginTop: 20 }} disabled={loading}>
            Nachricht absenden
          </IonButton>
        </form>

        <IonLoading isOpen={loading} message="Sending..." />
        <IonToast
          isOpen={!!error}
          message={error}
          color="danger"
          duration={2500}
          onDidDismiss={() => setError('')}
        />
        <IonToast
          isOpen={success}
          message="Message sent!"
          color="success"
          duration={2000}
          onDidDismiss={() => setSuccess(false)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Contact;
