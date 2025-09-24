import React, { useState } from 'react';
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
import './Contact.css';

const FORM_ID = 33; // your CF7 form ID
const CONTACT_FORM7_ENDPOINT = `https://xemusk.com/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`;
// set to your site locale & CF7 version if known (harmless if left as below)
const CF7_VERSION = '5.9';
const CF7_LOCALE = 'de_DE';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState(''); // optional per your CF7
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError('');
  setSuccess(false);

  const FORM_ID = 33;
  const ENDPOINT = `https://xemusk.com/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`;

  try {
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

    // No custom headers, no Authorization — keep it simple for CORS
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      body: fd,
      mode: 'cors',
      credentials: 'omit',
      // DO NOT set Content-Type with FormData
    });

    // If server returns non-2xx, try to extract details
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
      <IonContent className="login-content contact-page page-color">
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
            c/o LANGWIESER | Rechtsanwälte Partnerschaft<br />
            mbB<br />
            Ottostraße 4<br />
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
              // message is optional per your CF7 markup
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
