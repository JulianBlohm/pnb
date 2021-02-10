import styles from '../styles/Navigation.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href="/navigation">
                    <Image
                        className={styles.star}
                        src="/x.svg"
                        alt=""
                        width={19.37}
                        height={18.32}
                    />
                </Link>
            </header>

            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li>home</li>
                    <li>about</li>
                    <li>stories</li>
                    <li>templates</li>
                    <li>action</li>
                </ul>
            </nav>

            <footer className={styles.footer}>
                <a
                    href="https://www.instagram.com/genderthroughpersonality/"
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
