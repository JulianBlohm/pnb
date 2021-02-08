import styles from '../styles/Navigation.module.css'
import Link from 'next/link'

export default function Templates() {
    return (
        <div className={styles.container}>
            <header>
                <h2>GENDER THROUGH PERSONALITY</h2>
            </header>

            <main className={styles.main}>
                <h1>templates</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                </p>
                <a
                    href="https://drive.google.com/drive/folders/1rVCvCXyPwiHeuuxqdQrEyXKKzr1T5ni4"
                    target="_blank"
                >
                    download
                </a>
            </main>

            <footer className={styles.footer}>
                <h2>NOT BIOLOGY</h2>
            </footer>
        </div>
    )
}
