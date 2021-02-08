import styles from '../styles/Navigation.module.css'
import Link from 'next/link'

export default function Navigation() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <ul className={styles.ul}>
                    <li>home</li>
                    <li>about</li>
                    <li>stories</li>
                    <li>templates</li>
                    <li>action</li>
                </ul>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Instagram
                </a>
                <Link href="/imprint">Imprint</Link>
                <Link href="/privacy">Privacy</Link>
            </footer>
        </div>
    )
}
