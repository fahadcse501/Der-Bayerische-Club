import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from "@ionic/react";
import './Impressum.css';
const DatenschutzerklärungPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding impressum-content">
        <h1 className="heading">Datenschutzerklärung</h1>
        <h3>Präambel</h3>
        <p>
          Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen
          Daten (nachfolgend auch kurz als „Daten“ bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten.
          Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im
          Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen
          sowie innerhalb externer Onlinepräsenzen, wie z. B. unserer Social-Media-Profile (nachfolgend zusammenfassend
          bezeichnet als „Onlineangebot“).
        </p>
        <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
        <p><strong>Stand:</strong> 29. August 2025</p>

        <h2 id="inhalt">Inhaltsübersicht</h2>
        <ol>
          <li><a href="#praeambel">Präambel</a></li>
          <li><a href="#verantwortlicher">Verantwortlicher</a></li>
          <li><a href="#uebersicht-verarbeitungen">Übersicht der Verarbeitungen</a></li>
          <li><a href="#rechtsgrundlagen">Maßgebliche Rechtsgrundlagen</a></li>
          <li><a href="#sicherheitsmassnahmen">Sicherheitsmaßnahmen</a></li>
          <li><a href="#speicherung-loeschung">Allgemeine Informationen zur Datenspeicherung und Löschung</a></li>
          <li><a href="#rechte-betroffene">Rechte der betroffenen Personen</a></li>
          <li><a href="#satzung-aufgaben">Wahrnehmung von Aufgaben nach Satzung oder Geschäftsordnung</a></li>
          <li><a href="#bereitstellung-onlineangebot">Bereitstellung des Onlineangebots und Webhosting</a></li>
          <li><a href="#cookies">Einsatz von Cookies</a></li>
          <li><a href="#kontakt-anfragen">Kontakt- und Anfrageverwaltung</a></li>
          <li><a href="#push">Push-Nachrichten</a></li>
          <li><a href="#webanalyse">Webanalyse, Monitoring und Optimierung</a></li>
          <li><a href="#plugins">Plug-ins und eingebettete Funktionen sowie Inhalte</a></li>
          <li><a href="#aenderung">Änderung und Aktualisierung</a></li>
        </ol>

        <h2 id="verantwortlicher">Verantwortlicher</h2>
        <p>
          <strong>Der Bayerische Club</strong><br />
          c/o Notariat Dr. Markus Riemenschneider<br />
          Fünf Höfe, Theatinerstraße 12<br />
          80333 München
        </p>

        <p><strong>(2) Kontakt</strong><br />
          E-Mail: <a href="mailto:info@notar-riemenschneider.de">info@notar-riemenschneider.de</a><br />
          Telefon: <a href="tel:+498923888780">+49 89 23 888 78 – 0</a><br />
          Fax: +49 89 23 888 78 – 99
        </p>

        <p><strong>(3) Datenschutzbeauftragter des Clubs</strong><br />
          E-Mail: <a href="mailto:info@notar-riemenschneider.de">info@notar-riemenschneider.de</a><br />
          Telefon: <a href="tel:+498923888780">+49 89 23 888 78 – 0</a><br />
          Fax: +49 89 23 888 78 – 99
        </p>

        <p><strong>(3) Externer Datenschutzbeauftragter der Partnerschaft</strong><br />
          Herr Sven Schlegel<br />
          Gerhart-Hauptmann-Straße 9<br />
          99310 Arnstadt
        </p>

        <h2 id="uebersicht-verarbeitungen">Übersicht der Verarbeitungen</h2>
        <h3>Arten der verarbeiteten Daten</h3>
        <ul>
          <li>Bestandsdaten</li>
          <li>Zahlungsdaten</li>
          <li>Standortdaten</li>
          <li>Kontaktdaten</li>
          <li>Inhaltsdaten</li>
          <li>Vertragsdaten</li>
          <li>Nutzungsdaten</li>
          <li>Meta-, Kommunikations- und Verfahrensdaten</li>
          <li>Protokolldaten</li>
          <li>Mitgliederdaten</li>
        </ul>

        <h3>Kategorien betroffener Personen</h3>
        <ul>
          <li>Kommunikationspartner</li>
          <li>Nutzer</li>
          <li>Mitglieder</li>
        </ul>

        <h3>Zwecke der Verarbeitung</h3>
        <ul>
          <li>Kommunikation</li>
          <li>Sicherheitsmaßnahmen</li>
          <li>Reichweitenmessung</li>
          <li>Tracking</li>
          <li>Zielgruppenbildung</li>
          <li>Organisations- und Verwaltungsverfahren</li>
          <li>Feedback</li>
          <li>Marketing</li>
          <li>Profile mit nutzerbezogenen Informationen</li>
          <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit</li>
          <li>Informationstechnische Infrastruktur</li>
        </ul>
        
  <h2>Maßgebliche Rechtsgrundlagen</h2>
  <p>
    Maßgebliche Rechtsgrundlagen nach der DSGVO: Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO,
    auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO
    nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können. Sollten ferner im Einzelfall
    speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.
  </p>

  <ul>
    <li><strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO):</strong> Die betroffene Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.</li>
    <li><strong>Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b DSGVO):</strong> Die Verarbeitung ist für die Erfüllung eines Vertrags erforderlich, dessen Vertragspartei die betroffene Person ist.</li>
    <li><strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f DSGVO):</strong> Die Verarbeitung ist zur Wahrung berechtigter Interessen des Verantwortlichen oder eines Dritten notwendig, sofern nicht überwiegende Interessen oder Grundrechte entgegenstehen.</li>
    <li><strong>Vertrag über die Mitgliedschaft (Satzung) (Art. 6 Abs. 1 S. 1 lit. b DSGVO)</strong></li>
  </ul>

<p><strong>Nationale Datenschutzregelungen in Deutschland:</strong> Zusätzlich zu den Datenschutzregelungen der DSGVO gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling. Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung gelangen.</p>

  <p><strong>Hinweis auf Geltung DSGVO und Schweizer DSG:</strong> Diese Datenschutzhinweise dienen sowohl der Informationserteilung nach dem Schweizer DSG als auch nach der Datenschutzgrundverordnung (DSGVO). Aus diesem Grund bitten wir Sie zu beachten, dass aufgrund der breiteren räumlichen Anwendung und Verständlichkeit die Begriffe der DSGVO verwendet werden. Insbesondere statt der im Schweizer DSG verwendeten Begriffe „Bearbeitung” von „Personendaten”, “überwiegendes Interesse” und “besonders schützenswerte Personendaten” werden die in der DSGVO verwendeten Begriffe „Verarbeitung” von „personenbezogenen Daten” sowie “berechtigtes Interesse” und “besondere Kategorien von Daten” verwendet. Die gesetzliche Bedeutung der Begriffe wird jedoch im Rahmen der Geltung des Schweizer DSG weiterhin nach dem Schweizer DSG bestimmt.</p>

  <h2>Sicherheitsmaßnahmen</h2>
  <p>Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.</p>
  <p>Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.</p>

  <p><strong>Kürzung der IP-Adresse:</strong> Sofern IP-Adressen von uns oder von den eingesetzten Dienstleistern und Technologien verarbeitet werden und die Verarbeitung einer vollständigen IP-Adresse nicht erforderlich ist, wird die IP-Adresse gekürzt (auch als “IP-Masking” bezeichnet). Hierbei werden die letzten beiden Ziffern, bzw. der letzte Teil der IP-Adresse nach einem Punkt entfernt, bzw. durch Platzhalter ersetzt. Mit der Kürzung der IP-Adresse soll die Identifizierung einer Person anhand ihrer IP-Adresse verhindert oder wesentlich erschwert werden.</p>

  <p><strong>Sicherung von Online-Verbindungen durch TLS-/SSL-Verschlüsselungstechnologie (HTTPS):</strong> Um die Daten der Nutzer, die über unsere Online-Dienste übertragen werden, vor unerlaubten Zugriffen zu schützen, setzen wir auf die TLS-/SSL-Verschlüsselungstechnologie. Secure Sockets Layer (SSL) und Transport Layer Security (TLS) sind die Eckpfeiler der sicheren Datenübertragung im Internet. Diese Technologien verschlüsseln die Informationen, die zwischen der Website oder App und dem Browser des Nutzers (oder zwischen zwei Servern) übertragen werden, wodurch die Daten vor unbefugtem Zugriff geschützt sind. TLS, als die weiterentwickelte und sicherere Version von SSL, gewährleistet, dass alle Datenübertragungen den höchsten Sicherheitsstandards entsprechen. Wenn eine Website durch ein SSL-/TLS-Zertifikat gesichert ist, wird dies durch die Anzeige von HTTPS in der URL signalisiert. Dies dient als ein Indikator für die Nutzer, dass ihre Daten sicher und verschlüsselt übertragen werden.</p>

  <h2>Allgemeine Informationen zur Datenspeicherung und Löschung</h2>
  <p>Wir löschen personenbezogene Daten, die wir verarbeiten, gemäß den gesetzlichen Bestimmungen, sobald die zugrundeliegenden Einwilligungen widerrufen werden oder keine weiteren rechtlichen Grundlagen für die Verarbeitung bestehen. Dies betrifft Fälle, in denen der ursprüngliche Verarbeitungszweck entfällt oder die Daten nicht mehr benötigt werden. Ausnahmen von dieser Regelung bestehen, wenn gesetzliche Pflichten oder besondere Interessen eine längere Aufbewahrung oder Archivierung der Daten erfordern.</p>

  <p>Insbesondere müssen Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen oder deren Speicherung notwendig ist zur Rechtsverfolgung oder zum Schutz der Rechte anderer natürlicher oder juristischer Personen, entsprechend archiviert werden.</p>

  <p>Unsere Datenschutzhinweise enthalten zusätzliche Informationen zur Aufbewahrung und Löschung von Daten, die speziell für bestimmte Verarbeitungsprozesse gelten.</p>

  <p>Bei mehreren Angaben zur Aufbewahrungsdauer oder Löschungsfristen eines Datums, ist stets die längste Frist maßgeblich. Daten, die nicht mehr für den ursprünglich vorgesehenen Zweck, sondern aufgrund gesetzlicher Vorgaben oder anderer Gründe aufbewahrt werden, verarbeiten wir ausschließlich zu den Gründen, die ihre Aufbewahrung rechtfertigen.</p>

  <p><strong>Aufbewahrung und Löschung von Daten:</strong> Die folgenden allgemeinen Fristen gelten für die Aufbewahrung und Archivierung nach deutschem Recht:</p>
  <ul>
    <li>10 Jahre – Aufbewahrungsfrist für Bücher und Aufzeichnungen, Jahresabschlüsse, Inventare, Lageberichte, Eröffnungsbilanz sowie die zu ihrem Verständnis erforderlichen Arbeitsanweisungen und sonstigen Organisationsunterlagen (§ 147 Abs. 1 Nr. 1 i.V.m. Abs. 3 AO, § 14b Abs. 1 UStG, § 257 Abs. 1 Nr. 1 i.V.m. Abs. 4 HGB).</li>
    <li>8 Jahre – Buchungsbelege, wie z. B. Rechnungen und Kostenbelege (§ 147 Abs. 1 Nr. 4 und 4a i.V.m. Abs. 3 Satz 1 AO sowie § 257 Abs. 1 Nr. 4 i.V.m. Abs. 4 HGB).</li>
    <li>6 Jahre – Übrige Geschäftsunterlagen: empfangene Handels- oder Geschäftsbriefe, Wiedergaben der abgesandten Handels- oder Geschäftsbriefe, sonstige Unterlagen, soweit sie für die Besteuerung von Bedeutung sind (§ 147 Abs. 1 Nr. 2, 3, 5 i.V.m. Abs. 3 AO, § 257 Abs. 1 Nr. 2 u. 3 i.V.m. Abs. 4 HGB).</li>
    <li>3 Jahre – Daten, die erforderlich sind, um potenzielle Gewährleistungs- und Schadensersatzansprüche oder ähnliche vertragliche Ansprüche und Rechte zu berücksichtigen (§§ 195, 199 BGB).</li>
  </ul>

  <h2>Rechte der betroffenen Personen</h2>
  <p>Rechte der betroffenen Personen aus der DSGVO: Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:</p>

  <ul>
    <li><strong>Widerspruchsrecht:</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.</li>
    <li><strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.</li>
    <li><strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.</li>
    <li><strong>Recht auf Berichtigung:</strong> Sie haben das Recht, die Vervollständigung oder Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.</li>
    <li><strong>Recht auf Löschung und Einschränkung:</strong> Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, die Löschung oder Einschränkung der Verarbeitung zu verlangen.</li>
    <li><strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Sie betreffende Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder an einen anderen Verantwortlichen übermitteln zu lassen.</li>
    <li><strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die Vorgaben der DSGVO verstößt.</li>
  </ul>

 <h2>Wahrnehmung von Aufgaben nach Satzung oder Geschäftsordnung</h2>

  <p>Wir verarbeiten die Daten unserer Mitglieder, Unterstützer, Interessenten, Geschäftspartner oder sonstiger Personen (Zusammenfassend “Betroffene”), wenn wir mit ihnen in einem Mitgliedschafts- oder sonstigem geschäftlichen Verhältnis stehen und unsere Aufgaben wahrnehmen sowie Empfänger von Leistungen und Zuwendungen sind. Im Übrigen verarbeiten wir die Daten Betroffener auf Grundlage unserer berechtigten Interessen, z. B. wenn es sich um administrative Aufgaben oder Öffentlichkeitsarbeit handelt.</p>

  <p>Die hierbei verarbeiteten Daten, die Art, der Umfang und der Zweck und die Erforderlichkeit ihrer Verarbeitung, bestimmen sich nach dem zugrundeliegenden Mitgliedschafts- oder Vertragsverhältnis, aus dem sich auch die Erforderlichkeit etwaiger Datenangaben ergeben (im Übrigen weisen wir auf erforderliche Daten hin).</p>

  <p>Wir löschen Daten, die zur Erbringung unserer satzungs- und geschäftsmäßigen Zwecke nicht mehr erforderlich sind. Dies bestimmt sich entsprechend der jeweiligen Aufgaben und vertraglichen Beziehungen. Wir bewahren die Daten so lange auf, wie sie zur Geschäftsabwicklung, als auch im Hinblick auf etwaige Gewährleistungs- oder Haftungspflichten auf Grundlage unserer berechtigten Interesse an deren Regelung relevant sein können. Die Erforderlichkeit der Aufbewahrung der Daten wird regelmäßig überprüft; im Übrigen gelten die gesetzlichen Aufbewahrungspflichten.</p>

  <p><strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z. B. der vollständige Name, Wohnadresse, Kontaktinformationen, Kundennummer, etc.); Kontaktdaten (z. B. Post- und E-Mail-Adressen oder Telefonnummern); Vertragsdaten (z. B. Vertragsgegenstand, Laufzeit, Kundenkategorie); Mitgliederdaten (z.B. persönliche Daten wie Name, Alter, Geschlecht, Kontaktdaten (E-Mail-Adresse, Telefonnummer), Mitgliedsnummer, Informationen über Mitgliedsbeiträge, Teilnahme an Veranstaltungen, etc.); Zahlungsdaten (z. B. Bankverbindungen, Rechnungen, Zahlungshistorie). Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie betreffenden Informationen, wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung).</p>

  <p><strong>Betroffene Personen:</strong> Mitglieder.</p>
  <p><strong>Zwecke der Verarbeitung:</strong> Kommunikation. Organisations- und Verwaltungsverfahren.</p>
  <p><strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt “Allgemeine Informationen zur Datenspeicherung und Löschung”.</p>
  <p><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO). Vertrag über die Mitgliedschaft (Satzung) (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).</p>

  <h3>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</h3>

  <h4>Mitgliederverwaltung</h4>
  <p>Verfahren, die im Rahmen der Mitgliederverwaltung erforderlich sind, umfassen die Akquise und Aufnahme neuer Mitglieder, die Entwicklung und Umsetzung von Strategien zur Mitgliederbindung sowie die Sicherstellung einer effektiven Kommunikation mit den Mitgliedern. Diese Prozesse beinhalten die sorgfältige Erfassung und Pflege von Mitgliederdaten, die regelmäßige Aktualisierung von Mitgliedsinformationen und die Verwaltung von Mitgliedsbeiträgen einschließlich der Rechnungsstellung und Abrechnung; Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO), Vertrag über die Mitgliedschaft (Satzung) (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).</p>

  <h4>Veranstaltungen und Organisationsbetrieb</h4>
  <p>Planung, Durchführung und Nachbereitung von Veranstaltungen sowie den allgemeinen Betrieb der satzungsmäßigen Aktivitäten. Die Planung beinhaltet die Erfassung und Verarbeitung von Teilnehmerdaten, Koordination der logistischen Anforderungen und Festlegung der Veranstaltungsagenda. Die Durchführung umfasst das Management der Teilnehmerregistrierung, die Aktualisierung der Teilnehmerinformationen während der Veranstaltung und die Erfassung der Anwesenheit und Teilnehmeraktivitäten. Die Nachbereitung beinhaltet die Analyse der Teilnehmerdaten zur Bewertung des Veranstaltungserfolgs, die Erstellung von Berichten und die Archivierung relevanter Informationen zur Veranstaltung. Zum allgemeinen Organisationsbetrieb gehören die Verwaltung von Mitgliederdaten, die Kommunikation mit Mitgliedern und Interessenten sowie die Organisation interner Meetings und Sitzungen; Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO), Vertrag über die Mitgliedschaft (Satzung) (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).</p>

  <h2>Bereitstellung des Onlineangebots und Webhosting</h2>
  <p>Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen zu können. Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist, um die Inhalte und Funktionen unserer Online-Dienste an den Browser oder das Endgerät der Nutzer zu übermitteln.</p>

  <p><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und Funktionen); Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen); Protokolldaten (z. B. Logfiles betreffend Logins oder den Abruf von Daten oder Zugriffszeiten.). Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie betreffenden Informationen, wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung).</p>

  <p><strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).</p>
  <p><strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit; Informationstechnische Infrastruktur (Betrieb und Bereitstellung von Informationssystemen und technischen Geräten (Computer, Server etc.)). Sicherheitsmaßnahmen.</p>
  <p><strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt “Allgemeine Informationen zur Datenspeicherung und Löschung”.</p>
  <p><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</p>

  <h3>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</h3>

  <h4>Bereitstellung Onlineangebot auf gemietetem Speicherplatz</h4>
  <p>Für die Bereitstellung unseres Onlineangebotes nutzen wir Speicherplatz, Rechenkapazität und Software, die wir von einem entsprechenden Serveranbieter (auch “Webhoster” genannt) mieten oder anderweitig beziehen; Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</p>

  <h4>Erhebung von Zugriffsdaten und Logfiles</h4>
  <p>Der Zugriff auf unser Onlineangebot wird in Form von sogenannten “Server-Logfiles” protokolliert. Zu den Serverlogfiles können die Adresse und der Name der abgerufenen Webseiten und Dateien, Datum und Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite) und im Regelfall IP-Adressen und der anfragende Provider gehören. Die Serverlogfiles können zum einen zu Sicherheitszwecken eingesetzt werden, z. B. um eine Überlastung der Server zu vermeiden (insbesondere im Fall von missbräuchlichen Angriffen, sogenannten DDoS-Attacken), und zum anderen, um die Auslastung der Server und ihre Stabilität sicherzustellen; Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO). Löschung von Daten: Logfile-Informationen werden für die Dauer von maximal 30 Tagen gespeichert und danach gelöscht oder anonymisiert. Daten, deren weitere Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen Vorfalls von der Löschung ausgenommen.</p>

  <h4>E-Mail-Versand und -Hosting</h4>
  <p>Die von uns in Anspruch genommenen Webhosting-Leistungen umfassen ebenfalls den Versand, den Empfang sowie die Speicherung von E-Mails. Zu diesen Zwecken werden die Adressen der Empfänger sowie Absender als auch weitere Informationen betreffend den E-Mailversand (z. B. die beteiligten Provider) sowie die Inhalte der jeweiligen E-Mails verarbeitet. Die vorgenannten Daten können ferner zu Zwecken der Erkennung von SPAM verarbeitet werden. Wir bitten darum, zu beachten, dass E-Mails im Internet grundsätzlich nicht verschlüsselt versendet werden. Im Regelfall werden E-Mails zwar auf dem Transportweg verschlüsselt, aber (sofern kein sogenanntes Ende-zu-Ende-Verschlüsselungsverfahren eingesetzt wird) nicht auf den Servern, von denen sie abgesendet und empfangen werden. Wir können daher für den Übertragungsweg der E-Mails zwischen dem Absender und dem Empfang auf unserem Server keine Verantwortung übernehmen; Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</p>

  <h4>DomainFactory</h4>
  <p>Leistungen auf dem Gebiet der Bereitstellung von informationstechnischer Infrastruktur und verbundenen Dienstleistungen (z. B. Speicherplatz und/oder Rechenkapazitäten); Dienstanbieter: Domainfactory GmbH, c/o WeWork, Neuturmstrasse 5, 80331 München, Deutschland; Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO); Website: <a href="https://www.df.eu" target="_blank">https://www.df.eu</a>; Datenschutzerklärung: <a href="https://www.df.eu/de/datenschutz/" target="_blank">https://www.df.eu/de/datenschutz/</a>; Auftragsverarbeitungsvertrag: <a href="https://www.df.eu/de/support/formulare/" target="_blank">https://www.df.eu/de/support/formulare/</a>.</p>

  <h4>WordPress.com</h4>
  <p>Hosting und Software für die Erstellung, Bereitstellung und den Betrieb von Websites, Blogs und anderen Onlineangeboten; Dienstanbieter: Aut O’Mattic A8C Irland Ltd., Grand Canal Dock, 25 Herbert Pl, Dublin, D02 AY86, Irland; Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO); Website: <a href="https://wordpress.com" target="_blank">https://wordpress.com</a>; Datenschutzerklärung: <a href="https://automattic.com/de/privacy/" target="_blank">https://automattic.com/de/privacy/</a>; Auftragsverarbeitungsvertrag: <a href="https://wordpress.com/support/data-processing-agreements/" target="_blank">https://wordpress.com/support/data-processing-agreements/</a>; Grundlage Drittlandtransfers: Data Privacy Framework (DPF), Standardvertragsklauseln (Werden vom Dienstanbieter bereitgestellt).</p>


 <h2>Einsatz von Cookies</h2>

  <p>Unter dem Begriff „Cookies” werden Funktionen, die Informationen auf Endgeräten der Nutzer speichern und aus ihnen auslesen, verstanden. Cookies können ferner in Bezug auf unterschiedliche Anliegen Einsatz finden, etwa zu Zwecken der Funktionsfähigkeit, der Sicherheit und des Komforts von Onlineangeboten sowie der Erstellung von Analysen der Besucherströme. Wir verwenden Cookies gemäß den gesetzlichen Vorschriften. Dazu holen wir, wenn erforderlich, vorab die Zustimmung der Nutzer ein. Ist eine Zustimmung nicht notwendig, setzen wir auf unsere berechtigten Interessen. Dies gilt, wenn das Speichern und Auslesen von Informationen unerlässlich ist, um ausdrücklich angeforderte Inhalte und Funktionen bereitstellen zu können. Dazu zählen etwa die Speicherung von Einstellungen sowie die Sicherstellung der Funktionalität und Sicherheit unseres Onlineangebots. Die Einwilligung kann jederzeit widerrufen werden. Wir informieren klar über deren Umfang und welche Cookies genutzt werden.</p>

  <p><strong>Hinweise zu datenschutzrechtlichen Rechtsgrundlagen:</strong> Ob wir personenbezogene Daten mithilfe von Cookies verarbeiten, hängt von einer Einwilligung ab. Liegt eine Einwilligung vor, dient sie als Rechtsgrundlage. Ohne Einwilligung stützen wir uns auf unsere berechtigten Interessen, die vorstehend in diesem Abschnitt und im Kontext der jeweiligen Dienste und Verfahren erläutert sind.</p>

  <h3>Speicherdauer</h3>
  <p>Im Hinblick auf die Speicherdauer werden die folgenden Arten von Cookies unterschieden:</p>

  <ul>
    <li><strong>Temporäre Cookies (auch: Session- oder Sitzungscookies):</strong> Temporäre Cookies werden spätestens gelöscht, nachdem ein Nutzer ein Onlineangebot verlassen und sein Endgerät (z. B. Browser oder mobile Applikation) geschlossen hat.</li>
    <li><strong>Permanente Cookies:</strong> Permanente Cookies bleiben auch nach dem Schließen des Endgeräts gespeichert. So können beispielsweise der Log-in-Status gespeichert und bevorzugte Inhalte direkt angezeigt werden, wenn der Nutzer eine Website erneut besucht. Ebenso können die mithilfe von Cookies erhobenen Nutzerdaten zur Reichweitenmessung Verwendung finden. Sofern wir Nutzern keine expliziten Angaben zur Art und Speicherdauer von Cookies mitteilen (z. B. im Rahmen der Einholung der Einwilligung), sollten sie davon ausgehen, dass diese permanent sind und die Speicherdauer bis zu zwei Jahre betragen kann.</li>
  </ul>

  <p><strong>Allgemeine Hinweise zum Widerruf und Widerspruch (Opt-out):</strong> Nutzer können die von ihnen abgegebenen Einwilligungen jederzeit widerrufen und zudem einen Widerspruch gegen die Verarbeitung entsprechend den gesetzlichen Vorgaben, auch mittels der Privatsphäre-Einstellungen ihres Browsers, erklären.</p>

<ul>
  <li><p><strong>Verarbeitete Datenarten:</strong> Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen).</p></li>
  <li><p><strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).</p> </li>
 <li><p><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO). Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO).</p></li>
</ul>
  <h3>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</h3>

<ul>
<li>
  <p><strong>Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung: </strong>
  Wir setzen eine Einwilligungs-Management-Lösung ein, bei der die Einwilligung der Nutzer zur Verwendung von Cookies oder zu den im Rahmen der Einwilligungs-Management-Lösung genannten Verfahren und Anbietern eingeholt wird. Dieses Verfahren dient der Einholung, Protokollierung, Verwaltung und dem Widerruf von Einwilligungen, insbesondere bezogen auf den Einsatz von Cookies und vergleichbaren Technologien, die zur Speicherung, zum Auslesen und zur Verarbeitung von Informationen auf den Endgeräten der Nutzer eingesetzt werden. Im Rahmen dieses Verfahrens werden die Einwilligungen der Nutzer für die Nutzung von Cookies und die damit verbundenen Verarbeitungen von Informationen, einschließlich der im Einwilligungs-Management-Verfahren genannten spezifischen Verarbeitungen und Anbieter, eingeholt. Die Nutzer haben zudem die Möglichkeit, ihre Einwilligungen zu verwalten und zu widerrufen. Die Einwilligungserklärungen werden gespeichert, um eine erneute Abfrage zu vermeiden und den Nachweis der Einwilligung gemäß der gesetzlichen Anforderungen führen zu können. Die Speicherung erfolgt serverseitig und/oder in einem Cookie (sogenanntes Opt-In-Cookie) oder mittels vergleichbarer Technologien, um die Einwilligung einem spezifischen Nutzer oder dessen Gerät zuordnen zu können. Sofern keine spezifischen Angaben zu den Anbietern von Einwilligungs-Management-Diensten vorliegen, gelten folgende allgemeine Hinweise: Die Dauer der Speicherung der Einwilligung beträgt bis zu zwei Jahre. Dabei wird ein pseudonymer Nutzer-Identifikator erstellt, der zusammen mit dem Zeitpunkt der Einwilligung, den Angaben zum Umfang der Einwilligung (z. B. betreffende Kategorien von Cookies und/oder Diensteanbieter) sowie Informationen über den Browser, das System und das verwendete Endgerät gespeichert wird; Rechtsgrundlagen: Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO).</p>

</li>
</ul>



  <h2>Kontakt- und Anfrageverwaltung</h2>

  <p>Bei der Kontaktaufnahme mit uns (z. B. per Post, Kontaktformular, E-Mail, Telefon oder via soziale Medien) sowie im Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden die Angaben der anfragenden Personen verarbeitet, soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.</p>
<ul>
    <li>
  <p><strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z. B. der vollständige Name, Wohnadresse, Kontaktinformationen, Kundennummer, etc.); Kontaktdaten (z. B. Post- und E-Mail-Adressen oder Telefonnummern); Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie betreffenden Informationen, wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung); Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und Funktionen). Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen).</p>

    </li>

    <li>
  <p><strong>Betroffene Personen:</strong> Kommunikationspartner.</p>
        
    </li>

    <li>
  <p><strong>Zwecke der Verarbeitung:</strong> Kommunikation; Organisations- und Verwaltungsverfahren; Feedback (z. B. Sammeln von Feedback via Online-Formular). Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</p>
        
    </li>

    <li>
  <p><strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt “Allgemeine Informationen zur Datenspeicherung und Löschung”.</p>
        
    </li>

    <li>
    <p><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO). Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).</p>
        
    </li>
</ul>


  <h3>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</h3>
<ul> <li>
  <p><strong>Kontaktformular: </strong>
  Bei Kontaktaufnahme über unser Kontaktformular, per E-Mail oder anderen Kommunikationswegen, verarbeiten wir die uns übermittelten personenbezogenen Daten zur Beantwortung und Bearbeitung des jeweiligen Anliegens. Dies umfasst in der Regel Angaben wie Name, Kontaktinformationen und gegebenenfalls weitere Informationen, die uns mitgeteilt werden und zur angemessenen Bearbeitung erforderlich sind. Wir nutzen diese Daten ausschließlich für den angegebenen Zweck der Kontaktaufnahme und Kommunikation; Rechtsgrundlagen: Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</p>
</li></ul>


 <h2>Push-Nachrichten</h2>

  <p>Mit der Zustimmung der Nutzer, können wir den Nutzern so genannte “Push-Benachrichtigungen” zusenden. Dabei handelt es sich um Nachrichten, die auf den Bildschirmen, Endgeräten oder in Browsern der Nutzer angezeigt werden, auch wenn unser Onlinedienst gerade nicht aktiv genutzt wird.</p>

  <p>Um sich für die Push-Nachrichten anzumelden, müssen Nutzer die Abfrage ihres Browsers bzw. Endgerätes zum Erhalt der Push-Nachrichten bestätigen. Dieser Zustimmungsprozess wird dokumentiert und gespeichert. Die Speicherung ist erforderlich, um zu erkennen, ob Nutzer dem Empfang der Push-Nachrichten zugestimmt haben sowie um die Zustimmung nachweisen zu können. Zu diesen Zwecken wird ein pseudonymer Identifikator des Browsers (sog. “Push-Token”) oder die Geräte-ID eines Endgerätes gespeichert.</p>

  <p>Die Push-Nachrichten können zum einen für die Erfüllung von vertraglichen Pflichten erforderlich sein (z. B. für die Nutzung unseres Onlineangebotes relevante technische und organisatorische Informationen) und – Inhalte: Hinweise auf die neuesten Beiträge</p>

<ul>
    <li>
  <p><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und Betriebssysteme, Interaktionen mit – Dieser Textbereich muss mit einer Premium Lizenz freischaltet werden. – premiumtext premiumtext premiumtext premiumtext premiumtext ). Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte – Dieser Textbereich muss mit einer Premium Lizenz freischaltet werden. – premiumtext premiumtext premiumtext ).</p>
</li>

<li>
  <p><strong>Betroffene Personen:</strong> Kommunikationspartner.</p>
</li>
<li>
  <p><strong>Zwecke der Verarbeitung:</strong> Kommunikation. Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</p>
</li>
<li>
  <p><strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt “Allgemeine Informationen zur Datenspeicherung und Löschung”. Löschung nach Kündigung.</p>

</li>
<li>
  <p><strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO). Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</p>

</li>
</ul>




  <h2>Webanalyse, Monitoring und Optimierung</h2>

  <p>Die Webanalyse (auch als „Reichweitenmessung” bezeichnet) dient der Auswertung der Besucherströme unseres Onlineangebots und kann Verhalten, Interessen oder demografische Informationen zu den Besuchern, wie beispielsweise Alter oder Geschlecht, als pseudonyme Werte umfassen. Mithilfe der Reichweitenanalyse können wir zum Beispiel erkennen, zu welcher Zeit unser Onlineangebot oder dessen Funktionen beziehungsweise Inhalte am häufigsten genutzt werden, oder zur Wiederverwendung einladen. Ebenso ist es uns möglich, nachzuvollziehen, welche Bereiche der Optimierung bedürfen.</p>

  <p>Neben der Webanalyse können wir auch Testverfahren einsetzen, um etwa unterschiedliche Versionen unseres Onlineangebots oder seiner Bestandteile zu testen und zu optimieren.</p>

  <p>Sofern nachfolgend nicht anders angegeben, können zu diesen Zwecken Profile, also zu einem Nutzungsvorgang zusammengefasste Daten, angelegt und Informationen in einem Browser bzw. in einem Endgerät gespeichert und dann ausgelesen werden. Zu den erhobenen Angaben gehören insbesondere besuchte Websites und dort genutzte Elemente sowie technische Auskünfte, wie etwa der verwendete Browser, das benutzte Computersystem sowie Angaben zu Nutzungszeiten. Sofern sich Nutzer in die Erhebung ihrer Standortdaten uns gegenüber oder gegenüber den Anbietern der von uns eingesetzten Dienste einverstanden erklärt haben, ist auch die Verarbeitung von Standortdaten möglich.</p>

  <p>Darüber hinaus werden die IP-Adressen der Nutzer gespeichert. Jedoch nutzen wir ein IP-Masking-Verfahren (d. h. Pseudonymisierung durch Kürzung der IP-Adresse) zum Schutz der Nutzer. Generell werden die im Rahmen von Webanalyse, A/B-Testings und Optimierung keine Klardaten der Nutzer (wie z. B. E-Mail-Adressen oder Namen) gespeichert, sondern Pseudonyme. Das heißt, wir als auch die Anbieter der eingesetzten Software kennen nicht die tatsächliche Identität der Nutzer, sondern nur die zum Zweck der jeweiligen Verfahren in deren Profilen gespeicherten Angaben.</p>

  <p><strong>Hinweise zu Rechtsgrundlagen:</strong> Sofern wir die Nutzer um deren Einwilligung in den Einsatz der Drittanbieter bitten, stellt die Rechtsgrundlage der Datenverarbeitung die Einwilligung dar. Ansonsten werden die Nutzerdaten auf Grundlage unserer berechtigten Interessen (d. h. Interesse an effizienten, wirtschaftlichen und empfängerfreundlichen Leistungen) verarbeitet. In diesem Zusammenhang möchten wir Sie auch auf die Informationen zur Verwendung von Cookies in dieser Datenschutzerklärung hinweisen.</p>

<ul>
    <li>
  <p><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und Funktionen). Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen).</p>
    </li>

    <li>
  <p><strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).</p>
    </li>

    <li>
  <p><strong>Zwecke der Verarbeitung:</strong> Reichweitenmessung (z. B. Zugriffsstatistiken, Erkennung wiederkehrender Besucher); Profile mit nutzerbezogenen Informationen (Erstellen von Nutzerprofilen). Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</p>
    </li>

    <li>
  <p><strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt “Allgemeine Informationen zur Datenspeicherung und Löschung”. Speicherung von Cookies von bis zu 2 Jahren (Sofern nicht anders angegeben, können Cookies und ähnliche Speichermethoden für einen Zeitraum von zwei Jahren auf den Geräten der Nutzer gespeichert werden.).</p>

    </li>
    <li>
  <p><strong>Sicherheitsmaßnahmen:</strong> IP-Masking (Pseudonymisierung der IP-Adresse).</p>
    </li>
    <li> 
  <p><strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO). Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</p>

    </li>
</ul>



  <h3>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</h3>
<ul>
    <li>
  <p>Google Analytics: Wir verwenden Google Analytics zur Messung und Analyse der Nutzung unseres Onlineangebotes auf der Grundlage einer pseudonymen Nutzeridentifikationsnummer. Diese Identifikationsnummer enthält keine eindeutigen Daten, wie Namen oder E-Mail-Adressen. Sie dient dazu, Analyseinformationen einem Endgerät zuzuordnen, um zu erkennen, welche Inhalte die Nutzer innerhalb eines oder verschiedener Nutzungsvorgänge aufgerufen haben, welche Suchbegriffe sie verwendet haben, diese erneut aufgerufen haben oder mit unserem Onlineangebot interagiert haben. Ebenso werden der Zeitpunkt der Nutzung und deren Dauer gespeichert, sowie die Quellen der Nutzer, die auf unser Onlineangebot verweisen und technische Aspekte ihrer Endgeräte und Browser.

  Dabei werden pseudonyme Profile von Nutzern mit Informationen aus der Nutzung verschiedener Geräte erstellt, wobei Cookies eingesetzt werden können. Google Analytics protokolliert und speichert keine individuellen IP-Adressen für EU-Nutzer. Analytics stellt jedoch grobe geografische Standortdaten bereit, indem es die folgenden Metadaten von IP-Adressen ableitet: Stadt (und der abgeleitete Breiten- und Längengrad der Stadt), Kontinent, Land, Region, Subkontinent (und ID-basierte Gegenstücke). Beim EU-Datenverkehr werden die IP-Adressdaten ausschließlich für diese Ableitung von Geolokalisierungsdaten verwendet, bevor sie sofort gelöscht werden. Sie werden nicht protokolliert, sind nicht zugänglich und werden nicht für weitere Verwendungszwecke genutzt. Wenn Google Analytics Messdaten sammelt, werden alle IP-Abfragen auf EU-basierten Servern durchgeführt, bevor der Verkehr zur Verarbeitung an Analytics-Server weitergeleitet wird; Dienstanbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland; Rechtsgrundlagen: Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO); Website: <a href="https://marketingplatform.google.com/intl/de/about/analytics/" target="_blank">https://marketingplatform.google.com/intl/de/about/analytics/</a>; Sicherheitsmaßnahmen: IP-Masking (Pseudonymisierung der IP-Adresse); Datenschutzerklärung: <a href="https://policies.google.com/privacy" target="_blank">https://policies.google.com/privacy</a>; Auftragsverarbeitungsvertrag: <a href="https://business.safety.google/adsprocessorterms/" target="_blank">https://business.safety.google/adsprocessorterms/</a>; Grundlage Drittlandtransfers: Data Privacy Framework (DPF), Standardvertragsklauseln (<a href="https://business.safety.google/adsprocessorterms" target="_blank">https://business.safety.google/adsprocessorterms</a>); Widerspruchsmöglichkeit (Opt-Out): Opt-Out-Plugin: <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank">https://tools.google.com/dlpage/gaoptout?hl=de</a>, Einstellungen für die Darstellung von Werbeeinblendungen: <a href="https://myadcenter.google.com/personalizationoff" target="_blank">https://myadcenter.google.com/personalizationoff</a>. Weitere Informationen: <a href="https://business.safety.google/adsservices/" target="_blank">https://business.safety.google/adsservices/</a> (Arten der Verarbeitung sowie der verarbeiteten Daten).</p>
    </li>
</ul>

  <h2>Plug-ins und eingebettete Funktionen sowie Inhalte</h2>

  <p>Wir binden Funktions- und Inhaltselemente in unser Onlineangebot ein, die von den Servern ihrer jeweiligen Anbieter (nachfolgend als „Drittanbieter” bezeichnet) bezogen werden. Dabei kann es sich zum Beispiel um Grafiken, Videos oder Stadtpläne handeln (nachfolgend einheitlich als „Inhalte” bezeichnet).</p>

  <p>Die Einbindung setzt immer voraus, dass die Drittanbieter dieser Inhalte die IP-Adresse der Nutzer verarbeiten, da sie ohne IP-Adresse die Inhalte nicht an deren Browser senden könnten. Die IP-Adresse ist damit für die Darstellung dieser Inhalte oder Funktionen erforderlich. Wir bemühen uns, nur solche Inhalte zu verwenden, deren jeweilige Anbieter die IP-Adresse lediglich zur Auslieferung der Inhalte anzuwenden. Drittanbieter können ferner sogenannte Pixel-Tags (unsichtbare Grafiken, auch als „Web Beacons” bezeichnet) für statistische oder Marketingzwecke einsetzen. Durch die „Pixel-Tags” können Informationen, wie etwa der Besucherverkehr auf den Seiten dieser Website, ausgewertet werden. Die pseudonymen Informationen können darüber hinaus in Cookies auf dem Gerät der Nutzer gespeichert werden und unter anderem technische Auskünfte zum Browser und zum Betriebssystem, zu verweisenden Websites, zur Besuchszeit sowie weitere Angaben zur Nutzung unseres Onlineangebots enthalten, aber auch mit solchen Informationen aus anderen Quellen verbunden werden.</p>

  <p><strong>Hinweise zu Rechtsgrundlagen:</strong> Sofern wir die Nutzer um ihre Einwilligung in den Einsatz der Drittanbieter bitten, stellt die Rechtsgrundlage der Datenverarbeitung die Erlaubnis dar. Ansonsten werden die Nutzerdaten auf Grundlage unserer berechtigten Interessen (d. h. Interesse an effizienten, wirtschaftlichen und empfängerfreundlichen Leistungen) verarbeitet. In diesem Zusammenhang möchten wir Sie auch auf die Informationen zur Verwendung von Cookies in dieser Datenschutzerklärung hinweisen.</p>



  <ul>
    <li><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und Funktionen)
    Standortdaten (Angaben zur geografischen Position eines Gerätes oder einer Person)</li>
  </ul>

 
  <ul>
    <li><strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten)</li>
  </ul>

 
  <ul>
    <li><strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit
    Reichweitenmessung (z. B. Zugriffsstatistiken, Erkennung wiederkehrender Besucher)
    Tracking (z. B. interessens-/verhaltensbezogenes Profiling, Nutzung von Cookies)
    Zielgruppenbildung
    Marketing</li>
  </ul>


  <ul>
    <li><strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt “Allgemeine Informationen zur Datenspeicherung und Löschung”
    Speicherung von Cookies von bis zu 2 Jahren (Sofern nicht anders angegeben, können Cookies und ähnliche Speichermethoden für einen Zeitraum von zwei Jahren auf den Geräten der Nutzer gespeichert werden.)</li>
  </ul>

 
  <ul>
    <li><strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)
    Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</li>
  </ul>

    <h3>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</h3>
    <ul>
        <li><p><strong>Google Fonts (Bezug vom Google Server):</strong>Bezug von Schriften (und Symbolen) zum Zwecke einer technisch sicheren, wartungsfreien und effizienten Nutzung von Schriften und Symbolen im Hinblick auf Aktualität und Ladezeiten, deren einheitliche Darstellung und Berücksichtigung möglicher lizenzrechtlicher Beschränkungen. Dem Anbieter der Schriftarten wird die IP-Adresse des Nutzers mitgeteilt, damit die Schriftarten im Browser des Nutzers zur Verfügung gestellt werden können. Darüber hinaus werden technische Daten (Spracheinstellungen, Bildschirmauflösung, Betriebssystem, verwendete Hardware) übermittelt, die für die Bereitstellung der Schriften in Abhängigkeit von den verwendeten Geräten und der technischen Umgebung notwendig sind. Diese Daten können auf einem Server des Anbieters der Schriftarten in den USA verarbeitet werden – Beim Besuch unseres Onlineangebotes senden die Browser der Nutzer ihre Browser HTTP-Anfragen an die Google Fonts Web API (d. h. eine Softwareschnittstelle für den Abruf der Schriftarten). Die Google Fonts Web API stellt den Nutzern die Cascading Style Sheets (CSS) von Google Fonts und danach die in der CCS angegebenen Schriftarten zur Verfügung. Zu diesen HTTP-Anfragen gehören (1) die vom jeweiligen Nutzer für den Zugriff auf das Internet verwendete IP-Adresse, (2) die angeforderte URL auf dem Google-Server und (3) die HTTP-Header, einschließlich des User-Agents, der die Browser- und Betriebssystemversionen der Websitebesucher beschreibt, sowie die Verweis-URL (d. h. die Webseite, auf der die Google-Schriftart angezeigt werden soll). IP-Adressen werden weder auf Google-Servern protokolliert noch gespeichert und sie werden nicht analysiert. Die Google Fonts Web API protokolliert Details der HTTP-Anfragen (angeforderte URL, User-Agent und Verweis-URL). Der Zugriff auf diese Daten ist eingeschränkt und streng kontrolliert. Die angeforderte URL identifiziert die Schriftfamilien, für die der Nutzer Schriftarten laden möchte. Diese Daten werden protokolliert, damit Google bestimmen kann, wie oft eine bestimmte Schriftfamilie angefordert wird. Bei der Google Fonts Web API muss der User-Agent die Schriftart anpassen, die für den jeweiligen Browsertyp generiert wird. Der User-Agent wird in erster Linie zum Debugging protokolliert und verwendet, um aggregierte Nutzungsstatistiken zu generieren, mit denen die Beliebtheit von Schriftfamilien gemessen wird. Diese zusammengefassten Nutzungsstatistiken werden auf der Seite „Analysen” von Google Fonts veröffentlicht. Schließlich wird die Verweis-URL protokolliert, sodass die Daten für die Wartung der Produktion verwendet und ein aggregierter Bericht zu den Top-Integrationen basierend auf der Anzahl der Schriftartenanfragen generiert werden kann. Google verwendet laut eigener Auskunft keine der von Google Fonts erfassten Informationen, um Profile von Endnutzern zu erstellen oder zielgerichtete Anzeigen zu schalten; Dienstanbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland; Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO); Website: https://fonts.google.com/; Datenschutzerklärung: https://policies.google.com/privacy; Grundlage Drittlandtransfers: Data Privacy Framework (DPF). Weitere Informationen: https://developers.google.com/fonts/faq/privacy?hl=de.</p></li>
        <li><p><strong>Google Maps: </strong>Wir binden die Landkarten des Dienstes “Google Maps” des Anbieters Google ein. Zu den verarbeiteten Daten können insbesondere IP-Adressen und Standortdaten der Nutzer gehören; Dienstanbieter: Google Cloud EMEA Limited, 70 Sir John Rogerson’s Quay, Dublin 2, Irland; Rechtsgrundlagen: Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO); Website: https://mapsplatform.google.com/; Datenschutzerklärung: https://policies.google.com/privacy. Grundlage Drittlandtransfers: Data Privacy Framework (DPF).</p></li>
        <li><p><strong>YouTube-Videos: </strong>Videoinhalte; Dienstanbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland; Rechtsgrundlagen: Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO); Website: https://www.youtube.com; Datenschutzerklärung: https://policies.google.com/privacy; Grundlage Drittlandtransfers: Data Privacy Framework (DPF). Widerspruchsmöglichkeit (Opt-Out): Opt-Out-Plugin: https://tools.google.com/dlpage/gaoptout?hl=de, Einstellungen für die Darstellung von Werbeeinblendungen: https://myadcenter.google.com/personalizationoff.</p></li>
 
    </ul>
    <h3>Änderung und Aktualisierung</h3>
    <p>Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z. B. Einwilligung) oder eine sonstige individuelle Benachrichtigung erforderlich wird.</p>
    <p>Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen von Unternehmen und Organisationen angeben, bitten wir zu beachten, dass die Adressen sich im Laufe der Zeit ändern können und bitten die Angaben vor Kontaktaufnahme zu prüfen.</p>

      </IonContent>
    </IonPage>
  );
};

export default DatenschutzerklärungPage;