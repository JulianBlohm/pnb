import styles from '../styles/Navigation.module.css'
import Link from 'next/link'

export default function Stories() {
    return (
        <div className={styles.container}>
            <header>
                <h2>GENDER THROUGH PERSONALITY</h2>
            </header>

            <main className={styles.main}>
                <h1>stories</h1>
                <ul>
                    <li>Ricardo</li>
                    <li>Julia</li>
                    <li>Ricardo</li>
                    <li>Julia</li>
                    <li>Ricardo</li>
                    <li>Julia</li>
                    <li>Ricardo</li>
                    <li>Julia</li>
                </ul>
            </main>

            <footer className={styles.footer}>
                <h2>NOT BIOLOGY</h2>
            </footer>
        </div>
    )
}
