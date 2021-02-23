import styles from '../styles/Privacy.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Privacy() {
    return (
        <div className={styles.container}>
            <header>
                <h2>
                    GENDER THROUGH <br /> PERSONALITY
                </h2>
                <Link href="/navigation">
                    <Image
                        className={styles.star}
                        src="/star-home.svg"
                        alt=""
                        width={30.58}
                        height={30.07}
                        loading="eager"
                    />
                </Link>
            </header>

            <main className={styles.main}>
                <h1 className={styles.h1}>Privacy</h1>
                <article>
                    <p className={styles.p}>
                        Wir haben diese Datenschutzerklärung (Fassung
                        13.02.2021-311261709) verfasst, um Ihnen gemäß der
                        Vorgaben der Datenschutz-Grundverordnung (EU) 2016/679
                        zu erklären, welche Informationen wir sammeln, wie wir
                        Daten verwenden und welche Entscheidungsmöglichkeiten
                        Sie als Besucher dieser Webseite haben.
                    </p>

                    <p className={styles.p}>
                        Datenschutzerklärungen klingen für gewöhnlich sehr
                        technisch. Diese Version soll Ihnen hingegen die
                        wichtigsten Dinge so einfach und klar wie möglich
                        beschreiben. Soweit es möglich ist, werden technische
                        Begriffe leserfreundlich erklärt. Außerdem möchten wir
                        vermitteln, dass wir mit dieser Website nur dann
                        Informationen sammeln und verwenden, wenn eine
                        entsprechende gesetzliche Grundlage gegeben ist. Das ist
                        sicher nicht möglich, wenn man möglichst knappe,
                        technische Erklärungen abgibt, so wie sie im Internet
                        oft Standard sind, wenn es um Datenschutz geht. Ich
                        hoffe Sie finden die folgenden Erläuterungen interessant
                        und informativ und vielleicht ist die eine oder andere
                        Information dabei, die Sie noch nicht kannten. Wenn
                        trotzdem Fragen bleiben, möchten wir Sie bitten den
                        vorhandenen Links zu folgen und sich weitere
                        Informationen auf Drittseiten anzusehen, oder uns
                        einfach eine E-Mail zu schreiben. Unsere Kontaktdaten
                        finden Sie im Impressum.
                    </p>

                    <h2 className={styles.h2}>Automatische Datenspeicherung</h2>

                    <p className={styles.p}>
                        Wenn Sie heutzutage Websites besuchen, werden gewisse
                        Informationen automatisch erstellt und gespeichert, so
                        auch auf dieser Website. Diese gesammelten Daten sollten
                        möglichst sparsam und nur mit Begründung gesammelt
                        werden werden. Mit Website meinen wir übrigens die
                        Gesamtheit aller Webseiten auf Ihrer Domain, d.h. alles
                        von der Startseite (Homepage) bis hin zur aller letzten
                        Unterseite (wie dieser hier). Mit Domain meinen wir zum
                        Beispiel beispiel.de oder musterbeispiel.com. Auch
                        während Sie unsere Website jetzt gerade besuchen,
                        speichert unser Webserver – das ist der Computer auf dem
                        diese Webseite gespeichert ist –  aus Gründen der
                        Betriebssicherheit, zur Erstellung von Zugriffsstatistik
                        usw. in der Regel automatisch Daten wie
                    </p>

                    <ul className={styles.ul}>
                        <li>
                            die komplette Internetadresse (URL) der aufgerufenen
                            Webseite (z. B.
                            https://www.beispielwebsite.de/beispielunterseite.html/)
                        </li>
                        <li>Browser und Browserversion (z. B. Chrome 87)</li>
                        <li>
                            das verwendete Betriebssystem (z. B. Windows 10)
                        </li>
                        <li>
                            die Adresse (URL) der zuvor besuchten Seite
                            (Referrer URL) (z. B.
                            https://www.beispielquellsite.de/vondabinichgekommen.html/)
                        </li>
                        <li>
                            den Hostname und die IP-Adresse des Geräts von
                            welchem aus zugegriffen wird (z. B. COMPUTERNAME und
                            194.23.43.121)
                        </li>
                        <li>Datum und Uhrzeit</li>
                        <li>in Dateien, den sogenannten Webserver-Logfiles.</li>
                    </ul>

                    <p className={styles.p}>
                        In der Regel werden diese Dateien zwei Wochen
                        gespeichert und danach automatisch gelöscht. Wir geben
                        diese Daten nicht weiter, können jedoch nicht
                        ausschließen, dass diese Daten beim Vorliegen von
                        rechtswidrigem Verhalten von Behörden eingesehen werden.
                        Kurz gesagt: Ihr Besuch wird durch unseren Provider
                        (Firma, die unsere Website auf speziellen Computern
                        (Servern) laufen lässt), protokolliert, aber wir geben
                        Ihre Daten nicht weiter!
                    </p>

                    <h2 className={styles.h2}>Cookies</h2>

                    <p className={styles.p}>
                        Unsere Website verwendet HTTP-Cookies um
                        nutzerspezifische Daten zu speichern. Im Folgenden
                        erklären wir, was Cookies sind und warum Sie genutzt
                        werden, damit Sie die folgende Datenschutzerklärung
                        besser verstehen.
                    </p>

                    <h2 className={styles.h2}>Was genau sind Cookies?</h2>

                    <p className={styles.p}>
                        Immer wenn Sie durch das Internet surfen, verwenden Sie
                        einen Browser. Bekannte Browser sind beispielsweise
                        Chrome, Safari, Firefox, Internet Explorer und Microsoft
                        Edge. Die meisten Webseiten speichern kleine
                        Text-Dateien in Ihrem Browser. Diese Dateien nennt man
                        Cookies. Eines ist nicht von der Hand zu weisen: Cookies
                        sind echt nützliche Helferlein. Fast alle Webseiten
                        verwenden Cookies. Genauer gesprochen sind es
                        HTTP-Cookies, da es auch noch andere Cookies für andere
                        Anwendungsbereiche gibt. HTTP-Cookies sind kleine
                        Dateien, die von unserer Website auf Ihrem Computer
                        gespeichert werden. Diese Cookie-Dateien werden
                        automatisch im Cookie-Ordner, quasi dem “Hirn” Ihres
                        Browsers, untergebracht. Ein Cookie besteht aus einem
                        Namen und einem Wert. Bei der Definition eines Cookies
                        müssen zusätzlich ein oder mehrere Attribute angegeben
                        werden. Cookies speichern gewisse Nutzerdaten von Ihnen,
                        wie beispielsweise Sprache oder persönliche
                        Seiteneinstellungen. Wenn Sie unsere Seite wieder
                        aufrufen, übermittelt Ihr Browser die „userbezogenen“
                        Informationen an unsere Seite zurück. Dank der Cookies
                        weiß unsere Website, wer Sie sind und bietet Ihnen Ihre
                        gewohnte Standardeinstellung. In einigen Browsern hat
                        jedes Cookie eine eigene Datei, in anderen wie
                        beispielsweise Firefox sind alle Cookies in einer
                        einzigen Datei gespeichert. Es gibt sowohl Erstanbieter
                        Cookies als auch Drittanbieter-Cookies.
                        Erstanbieter-Cookies werden direkt von unserer Seite
                        erstellt, Drittanbieter-Cookies werden von
                        Partner-Webseiten (z.B. Google Analytics)
                        erstellt. Jedes Cookie ist individuell zu bewerten, da
                        jedes Cookie andere Daten speichert. Auch die Ablaufzeit
                        eines Cookies variiert von ein paar Minuten bis hin zu
                        ein paar Jahren. Cookies sind keine Software-Programme
                        und enthalten keine Viren, Trojaner oder andere
                        „Schädlinge“. Cookies können auch nicht auf
                        Informationen Ihres PCs zugreifen.
                    </p>

                    <h2 className={styles.h2}>
                        Welche Arten von Cookies gibt es?
                    </h2>

                    <p className={styles.p}>
                        Die Frage welche Cookies wir im Speziellen verwenden,
                        hängt von den verwendeten Diensten ab und wird in der
                        folgenden Abschnitten der Datenschutzerklärung geklärt.
                        An dieser Stelle möchten wir kurz auf die verschiedenen
                        Arten von HTTP-Cookies eingehen. Man kann 4 Arten von
                        Cookies unterscheiden:
                    </p>

                    <h2 className={styles.h2}>Unbedingt notwendige Cookies</h2>

                    <p className={styles.p}>
                        Diese Cookies sind nötig, um grundlegende Funktionen der
                        Website sicherzustellen. Zum Beispiel braucht es diese
                        Cookies, wenn ein User ein Produkt in den Warenkorb
                        legt, dann auf anderen Seiten weitersurft und später
                        erst zur Kasse geht. Durch diese Cookies wird der
                        Warenkorb nicht gelöscht, selbst wenn der User sein
                        Browserfenster schließt.
                    </p>

                    <h2 className={styles.h2}>Funktionelle Cookies</h2>

                    <p className={styles.p}>
                        Diese Cookies sammeln Infos über das Userverhalten und
                        ob der User etwaige Fehlermeldungen bekommt. Zudem
                        werden mithilfe dieser Cookies auch die Ladezeit und das
                        Verhalten der Website bei verschiedenen Browsern
                        gemessen.
                    </p>

                    <h2 className={styles.h2}>Zielorientierte Cookies</h2>

                    <p className={styles.p}>
                        Diese Cookies sorgen für eine bessere
                        Nutzerfreundlichkeit. Beispielsweise werden eingegebene
                        Standorte, Schriftgrößen oder Formulardaten gespeichert.
                    </p>

                    <h2 className={styles.h2}>Werbe-Cookies</h2>

                    <p className={styles.p}>
                        Diese Cookies werden auch Targeting-Cookies genannt. Sie
                        dienen dazu dem User individuell angepasste Werbung zu
                        liefern. Das kann sehr praktisch, aber auch sehr nervig
                        sein. Üblicherweise werden Sie beim erstmaligen Besuch
                        einer Webseite gefragt, welche dieser Cookiearten Sie
                        zulassen möchten. Und natürlich wird diese Entscheidung
                        auch in einem Cookie gespeichert.
                    </p>

                    <h2 className={styles.h2}>Wie kann ich Cookies löschen?</h2>

                    <p className={styles.p}>
                        Wie und ob Sie Cookies verwenden wollen, entscheiden Sie
                        selbst. Unabhängig von welchem Service oder welcher
                        Website die Cookies stammen, haben Sie immer die
                        Möglichkeit Cookies zu löschen, nur teilweise zuzulassen
                        oder zu deaktivieren. Zum Beispiel können Sie Cookies
                        von Drittanbietern blockieren, aber alle anderen Cookies
                        zulassen. Wenn Sie feststellen möchten, welche Cookies
                        in Ihrem Browser gespeichert wurden, wenn Sie
                        Cookie-Einstellungen ändern oder löschen wollen, können
                        Sie dies in Ihren Browser-Einstellungen finden: Chrome:
                        Cookies in Chrome löschen, aktivieren und verwalten
                        Safari: Verwalten von Cookies und Websitedaten mit
                        Safari Firefox: Cookies löschen, um Daten zu entfernen,
                        die Websites auf Ihrem Computer abgelegt haben Internet
                        Explorer: Löschen und Verwalten von Cookies Microsoft
                        Edge: Löschen und Verwalten von Cookies Falls Sie
                        grundsätzlich keine Cookies haben wollen, können Sie
                        Ihren Browser so einrichten, dass er Sie immer
                        informiert, wenn ein Cookie gesetzt werden soll. So
                        können Sie bei jedem einzelnen Cookie entscheiden, ob
                        Sie das Cookie erlauben oder nicht. Die Vorgangsweise
                        ist je nach Browser verschieden. Am besten ist es Sie
                        suchen die Anleitung in Google mit dem Suchbegriff
                        “Cookies löschen Chrome” oder “Cookies deaktivieren
                        Chrome” im Falle eines Chrome Browsers oder tauschen das
                        Wort “Chrome” gegen den Namen Ihres Browsers, z.B. Edge,
                        Firefox, Safari aus.
                    </p>

                    <h2 className={styles.h2}>
                        Wie sieht es mit meinem Datenschutz aus?
                    </h2>

                    <p className={styles.p}>
                        Seit 2009 gibt es die sogenannten „Cookie-Richtlinien“.
                        Darin ist festgehalten, dass das Speichern von Cookies
                        eine Einwilligung von Ihnen verlangt. Innerhalb der
                        EU-Länder gibt es allerdings noch sehr unterschiedliche
                        Reaktionen auf diese Richtlinien. In Deutschland wurden
                        die Cookie-Richtlinien nicht als nationales Recht
                        umgesetzt. Stattdessen erfolgte die Umsetzung dieser
                        Richtlinie weitgehend in § 15 Abs.3 des
                        Telemediengesetzes (TMG). Wenn Sie mehr über Cookies
                        wissen möchten und technischen Dokumentationen nicht
                        scheuen, empfehlen
                        wir https://tools.ietf.org/html/rfc6265, dem Request for
                        Comments der Internet Engineering Task Force (IETF)
                        namens “HTTP State Management Mechanism”.
                    </p>

                    <h2 className={styles.h2}>
                        Rechte laut Datenschutzgrundverordnung
                    </h2>

                    <p className={styles.p}>
                        Ihnen stehen laut den Bestimmungen der DSGVO
                        grundsätzlich die folgende Rechte zu:
                        <br />
                        - Recht auf Berichtigung (Artikel 16 DSGVO)
                        <br /> - Recht auf Löschung („Recht auf
                        Vergessenwerden“) (Artikel 17 DSGVO)
                        <br /> - Recht auf Einschränkung der Verarbeitung
                        (Artikel 18 DSGVO)
                        <br /> - Recht auf Benachrichtigung – Mitteilungspflicht
                        im Zusammenhang mit der Berichtigung oder Löschung
                        personenbezogener Daten oder der Einschränkung der
                        Verarbeitung (Artikel 19 DSGVO)
                        <br /> - Recht auf Datenübertragbarkeit (Artikel 20
                        DSGVO)
                        <br />
                        - Widerspruchsrecht (Artikel 21 DSGVO)
                        <br /> - Recht, nicht einer ausschließlich auf einer
                        automatisierten Verarbeitung — einschließlich Profiling
                        — beruhenden Entscheidung unterworfen zu werden (Artikel
                        22 DSGVO)
                        <br /> Wenn Sie glauben, dass die Verarbeitung Ihrer
                        Daten gegen das Datenschutzrecht verstößt oder Ihre
                        datenschutzrechtlichen Ansprüche sonst in einer Weise
                        verletzt worden sind, können Sie sich an die
                        Bundesbeauftragte für den Datenschutz und die
                        Informationsfreiheit (BfDI) wenden.
                    </p>

                    <h2 className={styles.h2}>
                        Auswertung des Besucherverhaltens
                    </h2>

                    <p className={styles.p}>
                        In der folgenden Datenschutzerklärung informieren wir
                        Sie darüber, ob und wie wir Daten Ihres Besuchs dieser
                        Website auswerten. Die Auswertung der gesammelten Daten
                        erfolgt in der Regel anonym und wir können von Ihrem
                        Verhalten auf dieser Website nicht auf Ihre Person
                        schließen. Mehr über Möglichkeiten dieser Auswertung der
                        Besuchsdaten zu widersprechen erfahren Sie in der
                        folgenden Datenschutzerklärung.
                    </p>

                    <h2 className={styles.h2}>TLS-Verschlüsselung mit https</h2>

                    <p className={styles.p}>
                        TLS, Verschlüsselung und https klingen sehr technisch
                        und sind es auch. Wir verwenden HTTPS (das Hypertext
                        Transfer Protocol Secure steht für „sicheres
                        Hypertext-Übertragungsprotokoll“) um Daten abhörsicher
                        im Internet zu übertragen. Das bedeutet, dass die
                        komplette Übertragung aller Daten von Ihrem Browser zu
                        unserem Webserver abgesichert ist – niemand kann
                        “mithören”. Damit haben wir eine zusätzliche
                        Sicherheitsschicht eingeführt und erfüllen Datenschutz
                        durch Technikgestaltung Artikel 25 Absatz 1 DSGVO).
                        Durch den Einsatz von TLS (Transport Layer Security),
                        einem Verschlüsselungsprotokoll zur sicheren
                        Datenübertragung im Internet können wir den Schutz
                        vertraulicher Daten sicherstellen. Sie erkennen die
                        Benutzung dieser Absicherung der Datenübertragung am
                        kleinen Schlosssymbol  links oben im Browser links von
                        der Internetadresse (z. B. beispielseite.de) und der
                        Verwendung des Schemas https (anstatt http) als Teil
                        unserer Internetadresse. Wenn Sie mehr zum Thema
                        Verschlüsselung wissen möchten, empfehlen wir die Google
                        Suche nach “Hypertext Transfer Protocol Secure wiki” um
                        gute Links zu weiterführenden Informationen zu erhalten.
                    </p>

                    <p className={styles.p}>
                        Quelle: Erstellt mit dem Datenschutz Generator von
                        AdSimple in Kooperation mit justmed.de
                    </p>
                </article>
            </main>

            <footer className={styles.footer}>
                <h2>NOT BIOLOGY</h2>
            </footer>
        </div>
    )
}
