import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>P not b</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/fonts/fonts.css" />
            </Head>

            <header>
                <h2 className={styles.title}>
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
                <Image src="/Band_1.gif" alt="" width="750" height="1334" />
            </main>

            <footer className={styles.footer}>
                <h2 className={styles.title}>NOT BIOLOGY</h2>
            </footer>
        </div>
    )
}
