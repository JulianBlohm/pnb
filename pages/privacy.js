import styles from '../styles/Stories.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Stories() {
    return (
        <div className={styles.container}>
            <header>
                <h2>
                    GENDER THROUGH <br /> PERSONALITY
                </h2>
                <Link href="/navigation">
                    <Image
                        className={styles.star}
                        src="/star.svg"
                        alt=""
                        width={30.58}
                        height={30.07}
                    />
                </Link>
            </header>

            <main className={styles.main}>
                <h1>Privacy</h1>
                <article>
                    <p>
                        Verantwortliche Stelle im Sinne der Datenschutzgesetze,
                        insbe- sondere der EU-Datenschutzgrundverordnung
                        (DSGVO), ist: Personality not Biology GbR
                    </p>

                    <p>
                        {' '}
                        Ihre Betroffenenrechte: Unter den angegebenen
                        Kontaktdaten können Sie jederzeit fol-gende Rechte
                        ausüben: Auskunft über Ihre bei uns gespeicherten Daten
                        und deren Verarbeitung Berichtigung unrichtiger
                        personenbezogener Daten Löschung Ihrer bei uns
                        gespeicherten Daten Widerspruch gegen die Verarbeitung
                        Ihrer Daten bei uns Sofern Sie uns eine Einwilligung
                        erteilt haben, können Sie diese jederzeit mit Wirkung
                        für die Zukunft widerrufen. Sie können sich jederzeit
                        mit einer Beschwerde an die für Sie zuständige
                        Aufsichtsbehörde wenden. Ihre zuständige
                        Aufsichts-behörde richtet sich nach dem Bundesland Ihres
                        Wohnsitzes, Ihrer Arbeit oder der mutmaßlichen
                        Verletzung. Eine Liste der Aufsichts-behörden (für den
                        nichtöffentlichen Bereich) mit Anschrift finden Sie
                        unter:
                        https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html.
                    </p>

                    <p>
                        Zwecke der Datenverarbeitung durch die verantwortliche
                        Stelle und Dritte: Wir verarbeiten Ihre
                        personenbezogenen Daten nur für unser Story-Formular,
                        mit dem wir Ihnen weitere Informationen über das Projekt
                        zukommen lassen. Eine Übermittlung Ihrer persönlichen
                        Daten an Dritte findet nicht statt.
                    </p>

                    <p>
                        Löschung bzw. Sperrung der Daten: Wir halten uns an die
                        Grundsätze der Datenvermeidung und Datensparsamkeit. Wir
                        speichern Ihre personenbezogenen Daten daher nur so
                        lange, wie dies zur Erreichung der hier genannten Zwecke
                        erforderlich ist oder wie es die vom Gesetzgeber
                        vorge-sehenen vielfältigen Speicherfristen vorsehen.
                        Nach Fortfall des jeweiligen Zweckes bzw. Ablauf dieser
                        Fristen werden die ent-sprechenden Daten routinemäßig
                        und entsprechend den ge-setzlichen Vorschriften gesperrt
                        oder gelöscht.
                    </p>

                    <p>
                        Story-Formular: Auf Grundlage Ihrer ausdrücklich
                        erteilten Einwilligung, übersenden wir Ihnen weitere
                        Informationen und Interview-Fragen per E-Mail an Ihre
                        angegebene E-Mail-Adresse. Für den Empfang dieser
                        Informationen ist Ihre E-Mail-Adresse ausreichend. Bei
                        der Anmeldung zum Bezug dieser Informationen werden die
                        von Ihnen angegebenen Daten ausschließlich für diesen
                        Zweck verwendet. Abonnenten können auch über Umstände
                        per E-Mail informiert werden, die für den Dienst oder
                        die Registrierung relevant sind (Beispielsweise
                        Änderungen des Projektes oder technische Gegebenheiten).
                        Die Daten werden ausschließlich für das Versenden
                        weiterer Informationen und Interview-Fragen verwendet
                        und nicht an Dritte weitergegeben. Die Einwilligung zur
                        Speicherung Ihrer persönlichen Daten und ihrer Nutzung
                        für den Mailversand können Sie jederzeit widerrufen. Sie
                        können uns Ihren entsprechenden Wunsch über
                        personalitynotbiology@gmx.de mitteilen.
                    </p>

                    <p>
                        Änderung unserer Datenschutzbestimmungen: Wir behalten
                        uns vor, diese Datenschutzerklärung anzupassen, damit
                        sie stets den aktuellen rechtlichen Anforderungen
                        entspricht oder um Änderungen unserer Leistungen in der
                        Datenschutzerklärung umzusetzen, z.B. bei der Einführung
                        neuer Services. Für Ihren erneuten Besuch gilt dann die
                        neue Datenschutzerklärung.
                    </p>
                </article>
            </main>

            <footer className={styles.footer}>
                <h2>NOT BIOLOGY</h2>
            </footer>
        </div>
    )
}
