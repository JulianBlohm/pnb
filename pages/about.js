import styles from '../styles/About.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function About() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h2>
                    GENDER THROUGH <br /> PERSONALITY
                </h2>
                <Link href="/navigation">
                    <Image
                        className={styles.star}
                        src="/star-about.svg"
                        alt=""
                        width={30.58}
                        height={30.07}
                    />
                </Link>
            </header>

            <main className={styles.main}>
                <h1 className={styles.h1}>about</h1>
                <p>
                    The project „gender through personality not biology“ was
                    created by Josefine, Annika, Johanna, and Anna during a
                    brand design course at HAW Hamburg. Using the slogan „gender
                    through personality not biology“ we want to Lorem ipsum
                    dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                    ligula eget dolor. Aenean massa. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur.
                </p>
            </main>

            <a
                href="https://www.instagram.com/genderthroughpersonality/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.external_link}
            >
                Find us on Instagram!
            </a>

            <footer className={styles.footer}>
                <h2>NOT BIOLOGY</h2>
            </footer>
        </div>
    )
}
