import styles from '../styles/Stories.module.css'
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
                        src="/star.svg"
                        alt=""
                        width={30.58}
                        height={30.07}
                    />
                </Link>
            </header>

            <main className={styles.main}>
                <h1>stories</h1>
                <ul>
                    <li><Link href="/stories/Ricardo">Ricardo</Link></li>
                    <li>Julia</li>
                    <li><Link href="/stories/Ricardo">Ricardo</Link></li>
                    <li>Julia</li>
                    <li><Link href="/stories/Ricardo">Ricardo</Link></li>
                    <li>Julia</li>
                    <li><Link href="/stories/Ricardo">Ricardo</Link></li>
                    <li>Julia</li>
                </ul>
            </main>

            <footer className={styles.footer}>
                <h2>NOT BIOLOGY</h2>
            </footer>
        </div>
    )
}
