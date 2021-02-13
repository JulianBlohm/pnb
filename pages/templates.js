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
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                </p>
            </main>

            <a  
                className={styles.external_link}
                href="https://drive.google.com/drive/u/1/folders/1_hz83H4HOpmodf2FhJsCVsNrXUyc1RkE"
                target="_blank"
            >
                download
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
