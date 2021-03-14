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
                <h1 className={styles.h1}>Privacy Policy</h1>
                <article>
                    <p className={styles.p}>
                        The website www.personalitynotbiology.com is provided
                        by the persons named in the imprint.
                    </p>

                    <h2 className={styles.h2}>A. HANDLING YOUR PERSONAL DATA</h2>

                    <p className={styles.p}>
                        Hereafter, we would like to inform you about how we
                        handle personal data when using this website.
                        Unless otherwise described in the following sections,
                        the legal basis for handling your data results from
                        the need to provide the functionalities you have
                        requested on this website (Art. 6 (1) (b)
                        General Data Protection Regulation).
                    </p>

                    <h2 className={styles.h2}>B. USING OUR WEBSITE</h2>

                    <h3 className={styles.p}>
                        1. Calling up out website
                    </h3>

                    <p className={styles.p}>
                        When accessing our website, your browser transmits
                        specific data to the web server for technical reasons
                        to provide you with the information you have called up.
                        The following data is collected, stored for a short time,
                        and used:
                    </p>

                    <ul className={styles.ul}>
                        <li>
                            IP address
                        </li>
                        <li>
                            Date and time of the request,
                            time zone difference to Greenwich Mean Time (GMT)
                        </li>
                        <li>
                            Content of the request (specific page)
                        </li>
                        <li>
                            Operating system and its access status / HTTP status code
                        </li>
                        <li>
                            Amount of data transferred
                        </li>
                        <li>
                            Website from which the request came
                        </li>
                        <li>
                            Browser, language, and version of the browser software.
                        </li>
                    </ul>

                    <p className={styles.p}>
                        Besides, to safeguard our legitimate interests,
                        this data is stored for a limited time to initiate a
                        derivation of personal data in the event of unauthorized
                        access or attempts to access local servers (Art. 6 (1) (f)
                        General Data Protection Regulation).
                    </p>

                    <h3 className={styles.p}>
                        2. Contact options
                    </h3>

                    <p className={styles.p}>
                        You can contact us via email on our website to tell
                        your story, for example. We will only process the
                        related personal data you provide to us to answer
                        your request and only with your prior consent.
                    </p>

                    <h3 className={styles.p}>
                        3. Information about your rights
                    </h3>

                    <p className={styles.p}>
                        According to the provisions of the GDPR,
                        you have the following rights:
                    </p>

                    <ul className={styles.ul}>
                        <li>
                            Right to information about the data we have stored about you;
                        </li>
                        <li>
                            Right to correction, deletion, or restriction of the processing of your data;
                        </li>
                        <li>
                            Right to object to the processing that serves our legitimate interest,
                            public interest, or profiling, unless we can prove compelling legitimate
                            grounds for processing that outweigh your interests, rights, and freedoms,
                            or the processing serves the assertion, exercise, or defense of legal claims;
                        </li>
                        <li>
                            Right to data portability;
                        </li>
                        <li>
                            Right to complain to a supervisory authority.
                        </li>
                    </ul>

                    <h3 className={styles.p}>
                        4. Contact
                    </h3>

                    <p className={styles.p}>
                        For your concerns, please contact <a href="mailto:personalitynotbiology@gmx.de">personalitynotbiology@gmx.de</a>.
                    </p>

                    <p className={styles.p}>
                        We are using the English data protection declaration
                        for information purposes; only the German version is
                        legally binding.
                    </p>

                </article>
            </main>

            <footer className={styles.footer}>
                <h2>NOT BIOLOGY</h2>
            </footer>
        </div>
    )
}
