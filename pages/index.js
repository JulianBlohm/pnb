import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>P not b</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <h2>GENDER THROUGH PERSONALITY</h2>
            </header>

            <main className={styles.main}>
                <Image src="/Band_1.gif" alt="" width="750" height="1334" />
            </main>

            <footer className={styles.footer}>
                <h2>NOT BIOLOGY</h2>
            </footer>
        </div>
    )
}
