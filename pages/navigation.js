import styles from '../styles/Navigation.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Navigation() {
    const router = useRouter()

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <a onClick={() => router.back()}>
                    <Image
                        className={styles.star}
                        src="/x.svg"
                        alt=""
                        width={19.37}
                        height={18.32}
                        loading="eager"
                    />
                </a>
            </header>

            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li>
                        <Link href="/">home</Link>
                    </li>
                    <li>
                        <Link href="/about">about</Link>
                    </li>
                    <li>
                        <Link href="/stories">stories</Link>
                    </li>
                    <li>
                        <Link href="/templates">templates</Link>
                    </li>
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
