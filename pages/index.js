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
                    />
                </Link>
            </header>

            <main className={styles.main}>
                <div className={styles.gif_container}>
                    <Image
                        className={styles.gif}
                        src="/Band_1.gif"
                        alt=""
                        width="750"
                        height="1334"
                        layout="responsive"
                        sizes="(max-width: 414px) 414px"
                    />
                </div>
            </main>

            <footer className={styles.footer}>
                <h2>NOT BIOLOGY</h2>
            </footer>
        </div>
    )
}
