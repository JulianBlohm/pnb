import styles from '../styles/Navigation.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function About() {
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
                <h1>about</h1>
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

            <footer className={styles.footer}>
                <a
                    href="https://www.instagram.com/genderthroughpersonality/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Find us on Instagram!
                </a>
                <h2>NOT BIOLOGY</h2>
            </footer>
        </div>
    )
}
