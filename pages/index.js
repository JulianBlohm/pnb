import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
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
                <div className={styles.gif_oben}>
                    <Image
                        className={styles.gif}
                        src="/oben.gif"
                        alt=""
                        width="150"
                        height="200"
                    />
                </div>

                <div className={styles.textContainer}>
                    <h2 className={styles.h2}>Hi there!</h2>
                    <p className={styles.p}>
                        Welcome to Gender through <span className={styles.nowrap}>Personality</span>, a safe space for
                        people who think beyond pink and blue. Come join us on
                        an exciting journey through gender identities, gender
                        crises and exciting personalities.
                    </p>
                </div>

                <div className={styles.gif_unten}>
                    <Image
                        className={styles.gif}
                        src="/unten.gif"
                        alt=""
                        width="750"
                        height="450"
                    />
                </div>
            </main>

            <footer className={styles.footer}>
                <h2>NOT BIOLOGY</h2>
            </footer>
        </div>
    )
}
