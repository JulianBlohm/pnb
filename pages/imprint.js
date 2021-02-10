import styles from '../styles/Imprint.module.css'
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
                        src="/star-home.svg"
                        alt=""
                        width={30.58}
                        height={30.07}
                    />
                </Link>
            </header>

            <main className={styles.main}>
                <h1 className={styles.h1}>Imprint</h1>
                <h3 className={styles.h3}>Gestaltung:</h3>
                <ul className={styles.ul}>
                    <li>Anna Wank</li>
                    <li>Annika Halbsgut</li>
                    <li>Johanna Flachsenberg</li>
                    <li>Josefine Schleberger</li>
                </ul>

                <h3 className={styles.h3}>Development:</h3>
                <ul className={styles.ul}>
                    <li>Julian Blohm</li>
                </ul>

                <p>
                    Unterstützt mit Mitteln Gleichstellung/Diversity der
                    Fakultät DMI der HAW Hamburg
                </p>
            </main>

            <footer className={styles.footer}>
                <h2>NOT BIOLOGY</h2>
            </footer>
        </div>
    )
}
