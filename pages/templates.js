import styles from '../styles/Templates.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Templates() {
    return (
        <div className={styles.container}>
            <header>
                <h2>
                    GENDER THROUGH <br /> PERSONALITY
                </h2>
                <Link href="/navigation">
                    <Image
                        className={styles.star}
                        src="/star-templates.svg"
                        alt=""
                        width={30.58}
                        height={30.07}
                    />
                </Link>
            </header>

            <main className={styles.main}>
                <h1 className={styles.h1}>templates</h1>
                <p>
                    Do you remember the last ad that really pissed you off
                    because it was sexist? Did you happen to see a commercial
                    today in which gender roles were assigned traditionally and
                    it made you roll your eyes? We are also fed up with these
                    ads and would like to do something about it together! We
                    would like to share our message with you as a template so
                    that you can also be a part of the movement! Print it out,
                    stick it over silly ads and go!
                </p>
                <div className={styles.grid}>
                    <Image
                        src="/Sticker_türkis.png"
                        width={318}
                        height={318}
                        layout="fixed"
                    />
                    <Image
                        src="/Sticker_rot.png"
                        width={318}
                        height={318}
                        layout="fixed"
                    />
                    <Image
                        src="/Sticker_beige.png"
                        width={318}
                        height={318}
                        layout="fixed"
                    />
                </div>
            </main>
            <a
                className={styles.external_link}
                href="https://drive.google.com/drive/u/1/folders/1_hz83H4HOpmodf2FhJsCVsNrXUyc1RkE"
                target="_blank"
            >
                <span className={styles.span}>download</span>
                <Image
                    src="/arrow-down- templates.svg"
                    width={12}
                    height={7.41}
                />
            </a>

            <footer className={styles.footer}>
                <h2>NOT BIOLOGY</h2>
            </footer>
        </div>
    )
}
